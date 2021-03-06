<%@ WebService Language="C#" Class="Composite.Services.XhtmlTransformations" %>

using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Xml.Linq;
using Composite.Data.DynamicTypes;
using Composite.Functions;
using Composite.Core.Logging;
using Composite.Core.ResourceSystem;
using Composite.Core.WebClient;
using Composite.Core.WebClient.Services.WysiwygEditor;
using Composite.Core.Xml;
using Composite.Data;
using Composite.Core.Types;

namespace Composite.Services
{

    public class XhtmlTransformationResult
    {
        public string XhtmlFragment { get; set; }
        public string Warnings { get; set; }
    }


    public class FunctionInfo
    {
        public string FunctionMarkup { get; set; }
        public bool RequireConfiguration { get; set; }
    }



    [WebService(Namespace = "http://www.composite.net/ns/management")]
    [SoapDocumentService(RoutingStyle = SoapServiceRoutingStyle.RequestElement)]
    public class XhtmlTransformations : System.Web.Services.WebService
    {

        [WebMethod]
        public XhtmlTransformationResult TinyContentToStructuredContent(string htmlFragment)
        {
            try
            {
                string warnings = "";
                string xsltPath = Server.MapPath("..\\..\\transformations\\WysiwygEditor_TinyContentToStructuredContent.xsl");

                XDocument structuredResult;
                try
                {
                    Dictionary<string, string> xsltParameters = new Dictionary<string, string>();
                    xsltParameters.Add("requesthostname", HttpContext.Current.Request.Url.Host);
                    xsltParameters.Add("requestport", HttpContext.Current.Request.Url.Port.ToString());
                    xsltParameters.Add("requestscheme", HttpContext.Current.Request.Url.Scheme);
                    xsltParameters.Add("requestapppath", UrlUtils.PublicRootPath);

                    structuredResult = MarkupTransformationServices.RepairXhtmlAndTransform(WrapInnerBody(htmlFragment), xsltPath, xsltParameters, out warnings);
                }
                catch (Exception ex)
                {
                    throw new InvalidOperationException("Parse failed for \n" + htmlFragment, ex);
                }

                List<XElement> htmlWysiwygImages = structuredResult.Descendants(Namespaces.Xhtml + "img").Where(f => f.Attribute("class") != null && f.Attribute("class").Value.Contains("compositeHtmlWysiwygRepresentation")).ToList();

                foreach (var htmlWysiwygImageElement in htmlWysiwygImages)
                {
                    try
                    {
                        string html = HttpUtility.UrlDecode(htmlWysiwygImageElement.Attribute("alt").Value);
                        XElement functionElement = XElement.Parse(html);

                        bool functionAloneInParagraph =
                            htmlWysiwygImageElement.ElementsBeforeSelf().Any() == false &&
                            htmlWysiwygImageElement.ElementsAfterSelf().Any() == false &&
                            htmlWysiwygImageElement.Parent.Name == Namespaces.Xhtml + "p" &&
                            htmlWysiwygImageElement.Parent.Value.Replace("&#160;", "").Trim() == "";

                        if (functionAloneInParagraph == true)
                        {
                            htmlWysiwygImageElement.Parent.ReplaceWith(functionElement);
                        }
                        else
                        {
                            htmlWysiwygImageElement.ReplaceWith(functionElement);
                        }
                    }
                    catch (Exception ex)
                    {
                        htmlWysiwygImageElement.ReplaceWith(new XText("HTML PARSE FAILED: " + ex.Message));
                    }
                }



                List<XElement> functionImages = structuredResult.Descendants(Namespaces.Xhtml + "img").Where(f => f.Attribute("class") != null && f.Attribute("class").Value.Contains("compositeFunctionWysiwygRepresentation")).ToList();
                functionImages.AddRange(structuredResult.Descendants("img").Where(f => f.Attribute("alt") != null));

                foreach (var functionImageElement in functionImages)
                {
                    try
                    {
                        string functionMarkup = HttpUtility.UrlDecode(functionImageElement.Attribute("alt").Value);
                        XElement functionElement = XElement.Parse(functionMarkup);

                        bool functionAloneInParagraph =
                            functionImageElement.ElementsBeforeSelf().Any() == false &&
                            functionImageElement.ElementsAfterSelf().Any() == false &&
                            functionImageElement.Parent.Name == Namespaces.Xhtml + "p" &&
                            functionImageElement.Parent.Value.Replace("&#160;", "").Trim() == "";

                        if (functionAloneInParagraph == true)
                        {
                            functionImageElement.Parent.ReplaceWith(functionElement);
                        }
                        else
                        {
                            functionImageElement.ReplaceWith(functionElement);
                        }
                    }
                    catch (Exception ex)
                    {
                        functionImageElement.ReplaceWith(new XText("FUNCTION MARKUP PARSE FAILED: " + ex.Message));
                    }
                }


                IEnumerable<XElement> dataFieldReferenceImages = structuredResult.Descendants(Namespaces.Xhtml + "img").Where(f => f.Attribute("class") != null && f.Attribute("class").Value.Contains("compositeFieldReferenceWysiwygRepresentation"));
                foreach (var referenceImageElement in dataFieldReferenceImages.ToList())
                {
                    try
                    {
                        string[] parts = HttpUtility.UrlDecode(referenceImageElement.Attribute("alt").Value).Split('\\');
                        string typeName = parts[0];
                        string fieldName = parts[1];

                        referenceImageElement.ReplaceWith(DynamicTypeMarkupServices.GetReferenceElement(fieldName, typeName));
                    }
                    catch (Exception ex)
                    {
                        referenceImageElement.ReplaceWith(new XText("FIELD REFERENCE MARKUP PARSE FAILED: " + ex.Message));
                    }
                }

                FixTinyMceMalEncodingOfInternationalUrlHostNames(structuredResult);

                string bodyInnerXhtml = MarkupTransformationServices.OutputBodyDescendants(structuredResult);

                return new XhtmlTransformationResult
                {
                    Warnings = warnings,
                    XhtmlFragment = FixXhtmlFragment(bodyInnerXhtml)
                };
            }
            catch (Exception ex)
            {
                LoggingService.LogError("XhtmlTransformation", ex.ToString());

                throw;
            }
        }

        private static string FixXhtmlFragment(string xhtmlFragment)
        {
            xhtmlFragment = Regex.Replace(xhtmlFragment, @"(\s)\r\n</script>", "$1</script>", RegexOptions.Multiline); 
            return xhtmlFragment.Replace("\xA0", "&#160;").Replace("&nbsp;", "&#160;");
        }

        // Fixing issue where tiny 
        private void FixTinyMceMalEncodingOfInternationalUrlHostNames(XDocument xhtmlDoc)
        {
            var urlAttributes = xhtmlDoc.Descendants().Attributes().Where(f => f.Value.StartsWith("http://") || f.Value.StartsWith("https://"));
            foreach (XAttribute urlAttribute in urlAttributes)
            {
                string url = urlAttribute.Value;
                string urlWithoutProtocol = url.Substring(url.IndexOf("//") + 2);
                string urlHostWithPort = (urlWithoutProtocol.Contains("/") ? urlWithoutProtocol.Substring(0, urlWithoutProtocol.IndexOf("/")) : urlWithoutProtocol);
                string urlHost = (urlHostWithPort.Contains(":") ? urlHostWithPort.Substring(0, urlHostWithPort.IndexOf(":")) : urlHostWithPort);
                if (urlHost != HttpUtility.UrlDecode(urlHost))
                {
                    urlAttribute.Value = urlAttribute.Value.Replace(urlHost, HttpUtility.UrlDecode(urlHost));
                }
            }
        }



        [WebMethod]
        public XhtmlTransformationResult StructuredContentToTinyContent(string htmlFragment)
        {
            try
            {
                string warnings = "";
                string XhtmlPassSsltPath = Server.MapPath("..\\..\\transformations\\WysiwygEditor_StructuredContentToTinyContent.xsl");

                string html = WrapInnerBody(htmlFragment);

                XDocument xml = MarkupTransformationServices.TidyHtml(html).Output;

                IEnumerable<XElement> functionRoots = xml.Descendants(Namespaces.Function10 + "function").Where(f => f.Ancestors(Namespaces.Function10 + "function").Count() == 0);
                foreach (var functionElement in functionRoots.ToList())
                {
                    functionElement.ReplaceWith(GetImageTagForFunctionCall(functionElement));
                }

                IEnumerable<XElement> dataFieldReferences = xml.Descendants(Namespaces.DynamicData10 + "fieldreference");
                foreach (var referenceElement in dataFieldReferences.ToList())
                {
                    referenceElement.ReplaceWith(GetImageTagForDynamicDataFieldReference(referenceElement));
                }

                var unHandledHtmlElementNames = new List<XName>
                                                    {
                                                        Namespaces.Xhtml + "audio",
                                                        Namespaces.Xhtml + "canvas",
                                                        Namespaces.Xhtml + "embed",
                                                        Namespaces.Xhtml + "iframe",
                                                        Namespaces.Xhtml + "map",
                                                        Namespaces.Xhtml + "object",
                                                        Namespaces.Xhtml + "script",
                                                        Namespaces.Xhtml + "video"
                                                    };
                IEnumerable<XElement> unHandledHtmlElements = xml.Descendants().Where(f => unHandledHtmlElementNames.Contains(f.Name));
                foreach (var unHandledHtmlElement in unHandledHtmlElements.ToList())
                {
                    unHandledHtmlElement.ReplaceWith(GetImageTagForHtmlElement(unHandledHtmlElement));
                }

                Dictionary<string, string> xsltParameters = new Dictionary<string, string>();
                xsltParameters.Add("requestapppath", UrlUtils.PublicRootPath);

                XDocument structuredResult = MarkupTransformationServices.RepairXhtmlAndTransform(xml.ToString(), XhtmlPassSsltPath, xsltParameters, out warnings);

                string bodyInnerXhtml = MarkupTransformationServices.OutputBodyDescendants(structuredResult);

                return new XhtmlTransformationResult
                {
                    Warnings = warnings,
                    XhtmlFragment = FixXhtmlFragment(bodyInnerXhtml)
                };
            }
            catch (Exception ex)
            {
                LoggingService.LogError("XhtmlTransformation", ex.ToString());
                throw;
            }
        }

        [WebMethod]
        public string GetImageTagForFunctionCall(string functionMarkup)
        {
            XElement functionElement;

            try
            {
                functionElement = XElement.Parse(functionMarkup);
            }
            catch (Exception ex)
            {
                throw new ArgumentException("Unable to parse functionMarkup as XML", ex);
            }

            return GetImageTagForFunctionCall(functionElement).ToString(SaveOptions.DisableFormatting);
        }



        [WebMethod]
        public FunctionInfo GetFunctionInfo(string functionName)
        {
            IFunction function = FunctionFacade.GetFunction(functionName);

            FunctionRuntimeTreeNode functionRuntimeTreeNode = new FunctionRuntimeTreeNode(function);

            FunctionInfo functionInfo = new FunctionInfo();

            functionInfo.FunctionMarkup = functionRuntimeTreeNode.Serialize().ToString();
            functionInfo.RequireConfiguration = (function.ParameterProfiles.Count() > 0);

            return functionInfo;
        }



        private XElement GetImageTagForDynamicDataFieldReference(XElement fieldReferenceElement)
        {
            DataTypeDescriptor typeDescriptor;
            DataFieldDescriptor fieldDescriptor;

            if (DynamicTypeMarkupServices.TryGetDescriptors(fieldReferenceElement, out typeDescriptor, out fieldDescriptor))
            {
                return GetImageTagForDynamicDataFieldReference(fieldDescriptor, typeDescriptor);
            }
            else
            {
                return null;
            }

        }


        private XElement GetImageTagForHtmlElement(XElement element)
        {
            string description = element.ToString().Replace(" xmlns=\"http://www.w3.org/1999/xhtml\"", "");
            string title = "HTML block";

            var descriptionLines = description.Split('\n');
            if (descriptionLines.Count() > 6)
            {
                description = string.Format("{0}\n{1}\n{2}\n...\n{3}", descriptionLines[0], descriptionLines[1],
                                            descriptionLines[2], descriptionLines.Last());
            }

            string imageUrl = string.Format("services/WysiwygEditor/YellowBox.ashx?type=html&title={0}&description={1}", HttpUtility.UrlEncodeUnicode(title), HttpUtility.UrlEncodeUnicode(description));

            return new XElement(Namespaces.Xhtml + "img",
                new XAttribute("src", Composite.Core.WebClient.UrlUtils.ResolveAdminUrl(imageUrl)),
                new XAttribute("class", "compositeHtmlWysiwygRepresentation"),
                new XAttribute("alt", HttpUtility.UrlEncodeUnicode(element.ToString()))
                );
        }




        private XElement GetImageTagForDynamicDataFieldReference(DataFieldDescriptor dataField, DataTypeDescriptor dataTypeDescriptor)
        {
            string fieldLabel = dataField.Name;

            if (dataField.FormRenderingProfile != null && dataField.FormRenderingProfile.Label != null)
            {
                fieldLabel = StringResourceSystemFacade.ParseString(dataField.FormRenderingProfile.Label);
            }

            string imageUrl = string.Format("services/WysiwygEditor/FieldImage.ashx?name={0}&groupname={1}", HttpUtility.UrlEncodeUnicode(fieldLabel), HttpUtility.UrlEncodeUnicode(dataTypeDescriptor.Name));

            return new XElement(Namespaces.Xhtml + "img",
                new XAttribute("src", Composite.Core.WebClient.UrlUtils.ResolveAdminUrl(imageUrl)),
                new XAttribute("class", "compositeFieldReferenceWysiwygRepresentation"),
                new XAttribute("alt", HttpUtility.UrlEncodeUnicode(string.Format("{0}\\{1}", dataTypeDescriptor.TypeManagerTypeName, dataField.Name)))
                );
        }



        private XElement GetImageTagForFunctionCall(XElement functionElement)
        {
            string title;
            string description;
            string compactMarkup = functionElement.ToString(SaveOptions.DisableFormatting);

            try
            {
                FunctionRuntimeTreeNode functionNode = (FunctionRuntimeTreeNode)FunctionFacade.BuildTree(functionElement);
                string functionName = functionNode.GetCompositeName();
                title = MakeTitleFromName(functionName);
                description = string.Format("[{0}]", functionName);
                string functionDescription = functionNode.GetDescription();
                if (string.IsNullOrEmpty(functionDescription) == false)
                {
                    functionDescription = StringResourceSystemFacade.ParseString(functionDescription);
                    description = description + "\n\n" + functionDescription;
                }

                var setParams = functionNode.GetSetParameters().ToList();
                if (setParams.Any() == true) description += "\n";

                IEnumerable<ParameterProfile> parameterProfiles = FunctionFacade.GetFunction(functionName).ParameterProfiles;

                foreach (var setParam in setParams.Take(10))
                {
                    if (setParam.ContainsNestedFunctions == true || setParam is FunctionParameterRuntimeTreeNode)
                    {

                        description += string.Format("\n{0} = {1}", setParam.Name, "....");
                    }
                    else
                    {
                        try
                        {
                            string paramValue = setParam.GetValue().ToString();
                            string paramLabel = setParam.Name;

                            try
                            {
                                ParameterProfile parameterProfile = parameterProfiles.Where(f => f.Name == setParam.Name).FirstOrDefault();
                                if (parameterProfile != null)
                                {
                                    paramLabel = parameterProfile.LabelLocalized;
                                    if (typeof(IDataReference).IsAssignableFrom(parameterProfile.Type))
                                    {
                                        IDataReference dataReference = ValueTypeConverter.Convert(setParam.GetValue(), parameterProfile.Type) as IDataReference;
                                        if (dataReference != null)
                                        {
                                            paramValue = dataReference.Data.GetLabel();
                                        }
                                    }
                                    else
                                    {
                                        if (parameterProfile.Type == typeof(XhtmlDocument))
                                        {
                                            XhtmlDocument xhtmlDoc = setParam.GetValue<XhtmlDocument>();
                                            if (xhtmlDoc.Body.Nodes().Count() == 0 && xhtmlDoc.Head.Nodes().Count() == 0)
                                            {
                                                paramValue = "(Empty HTML)";
                                            }
                                            else
                                            {
                                                string bodyText = xhtmlDoc.Body.Value.Trim();
                                                paramValue = (bodyText.Length > 0 ? string.Format("HTML: {0}", bodyText) : "(HTML)");
                                            }
                                        }
                                    }
                                }



                            }
                            catch (Exception)
                            {
                                // just fall back to listing param names and raw values...
                            }

                            if (string.IsNullOrEmpty(paramValue) == false && paramValue.Length > 50)
                                paramValue = paramValue.Substring(0, 45) + "...";
                            description += string.Format("\n{0} = {1}", paramLabel, paramValue);
                        }
                        catch (Exception)
                        {
                            description += string.Format("\n{0} = {1}", setParam.Name, "....");
                        }
                    }
                }
                if(setParams.Count > 10)
                {
                    description += string.Format("\n....");
                }
            }
            catch (Exception ex)
            {
                title = "[parse error]";
                description = string.Format("Failed to parse the function markup.\n{0}", ex.Message);
            }

            string tmpUrl = string.Format("services/WysiwygEditor/YellowBox.ashx?type=function&title={0}&description={1}", HttpUtility.UrlEncodeUnicode(title), HttpUtility.UrlEncodeUnicode(description));

            string yellowBoxUrl = Composite.Core.WebClient.UrlUtils.ResolveAdminUrl(tmpUrl);

            XElement imagetag = new XElement("img"
                , new XAttribute("alt", HttpUtility.UrlEncodeUnicode(compactMarkup))
                , new XAttribute("src", yellowBoxUrl)
                , new XAttribute("class", "compositeFunctionWysiwygRepresentation")
                );

            return imagetag;
        }



        private string WrapInnerBody(string innerBodyMarkup)
        {
            if (innerBodyMarkup.StartsWith("<html") && innerBodyMarkup.Contains(Namespaces.Xhtml.NamespaceName))
            {
                return innerBodyMarkup;
            }

            return string.Format("<html xmlns=\"http://www.w3.org/1999/xhtml\"><head><title>None</title></head><body>{0}</body></html>", innerBodyMarkup);
        }



        private string MakeTitleFromName(string name)
        {
            string[] nameParts = name.Split('.');
            string titleBase = nameParts[nameParts.Length - 1];

            StringBuilder sb = new StringBuilder(titleBase.Substring(0, 1).ToUpper());

            bool lastWasUpper = true;

            for (int i = 1; i < titleBase.Length; i++)
            {
                string letter = titleBase.Substring(i, 1);
                if (letter != letter.ToLowerInvariant())
                {
                    bool nextLetterIsLower = (i < titleBase.Length - 1) && (titleBase.Substring(i + 1, 1).ToLowerInvariant() == titleBase.Substring(i + 1, 1));

                    if (lastWasUpper == false || nextLetterIsLower == true)
                    {
                        sb.Append(" ");
                    }
                    lastWasUpper = true;
                }
                else
                {
                    lastWasUpper = false;
                }
                sb.Append(letter);
            }

            return sb.ToString();
        }

    }


}