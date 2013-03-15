var IAcceptable=new function(){
this.dragAccept="type1 type2 type3";
this.accept=function(_1){
};
};
var IActionListener=new function(){
this.handleAction=function(_2){
};
};
var IActivatable=new function(){
this.isActivatable=true;
this.activate=function(){
};
this.deActivate=function(){
};
};
var IActivationAware=new function(){
this.isActivationAware=true;
this.isActivated=false;
this.onActivate=function(){
};
this.onDeactivate=function(){
};
};
var IBroadcastListener=new function(){
this.handleBroadcast=function(_3,_4){
};
};
var ICrawlerHandler=new function(){
this.handleCrawler=function(_5){
};
};
var IData=new function(){
this.isFocusable=true;
this.validate=function(){
};
this.manifest=function(){
};
this.dirty=function(){
};
this.clean=function(){
};
this.focus=function(){
};
this.blur=function(){
};
this.getName=function(){
};
this.getValue=function(){
};
this.setValue=function(_6){
};
this.getResult=function(){
};
this.setResult=function(_7){
};
};
var IDialogResponseHandler=new function(){
this.handleDialogResponse=function(){
response,result;
};
};
var IDOMHandler=new function(){
this.fireOnDOM=function(){
};
};
var IDraggable=new function(){
this.dragType="type";
this.getImage=function(){
};
};
var IDragHandler=new function(){
this.onDragStart=function(_8){
};
this.onDrag=function(_9){
};
this.onDragStop=function(_a){
};
};
var IEditorControlBinding=new function(){
this.isEditorControlBinding=true;
};
var IEventListener=new function(){
this.handleEvent=function(e){
};
};
var IFit=new function(){
this.isFit=true;
this.fit=function(){
return true;
};
};
var IFlexible=new function(){
this.flex=function(){
};
};
var IFocusable=new function(){
this.isFocusable=true;
this.isFocused=false;
this.focus=function(){
this.dispatchAction(Binding.ACTION_FOCUSED);
};
this.blur=function(){
this.dispatchAction(Binding.ACTION_BLURRED);
};
};
var IImageProfile=new function(){
this.getDefaultImage=function(){
};
this.getHoverImage=function(){
};
this.getActiveImage=function(){
};
this.getDisabledImage=function(){
};
};
var IKeyEventHandler=new function(){
this.handleKeyEvent=function(){
};
};
var ILabel=new function(){
this.getLabel=function(){
};
this.getImage=function(){
};
this.getToolTip=function(){
};
};
var ILoadHandler=new function(){
this.fireOnLoad=function(){
};
};
var IMenuContainer=new function(){
this.isOpen=function(){
};
this.setOpenElement=function(_c){
};
};
var IResizeHandler=new function(){
this.fireOnResize=function(){
};
};
var ISourceEditorComponent=new function(){
this.initializeSourceEditorComponent=function(_d,_e,_f){
};
};
var IUpdateHandler=new function(){
this.handleElement=function(_10,_11){
};
this.updateElement=function(_12,_13){
};
};
var IWysiwygEditorComponent=new function(){
this.initializeComponent=function(_14,_15,_16,_17){
};
};
var IWysiwygEditorContentChangeHandler=new function(){
this.handleContentChange=function(){
};
};
var IWysiwygEditorNodeChangeHandler=new function(){
this.handleNodeChange=function(_18){
};
};
function List(arg){
this._index=0;
this._array=[];
this.isDisposed=false;
if(arg){
this.init(arg);
}
return this;
}
List.prototype.init=function(_1a){
var _1b=(_1a!==undefined&&_1a.splice!==undefined);
if(_1b){
this._array=_1a;
}else{
var i=0,_1d;
while((_1d=_1a[i++])!=null){
this._array.push(_1d);
}
}
this.reset();
};
List.prototype.add=function(_1e){
this._array.push(_1e);
return _1e;
};
List.prototype.addFirst=function(_1f){
this._array.unshift(_1f);
return _1f;
};
List.prototype.get=function(_20){
var _21=null;
if(this._array[_20]){
_21=this._array[_20];
}
return _21;
};
List.prototype.set=function(_22,_23){
this._array[_22]=_23;
};
List.prototype.del=function(_24){
this._array.splice(_24,1);
};
List.prototype.has=function(_25){
var _26=false;
var i=0,e;
while((e=this._array[i++])!==undefined){
if(e==_25){
_26=true;
break;
}
}
return _26;
};
List.prototype.getLength=function(){
return this._array.length;
};
List.prototype.hasEntries=function(){
return this.getLength()>0;
};
List.prototype.hasNext=function(){
var _29=false;
if(this._array!=null){
_29=this._index<this._array.length;
}else{
SystemLogger.getLogger("List").error("Mysterious List#hasNext exception in IE");
}
return _29;
};
List.prototype.getNext=function(){
var _2a=null;
if(this.hasNext()){
_2a=this._array[this._index++];
}
return _2a;
};
List.prototype.getFollowing=function(_2b){
var _2c=null;
var i=0,e=null;
while((e=this._array[i])!=null&&!_2c){
if(e==_2b&&this._array[i+1]){
_2c=this._array[i+1];
}
i++;
}
return _2c;
};
List.prototype.getPreceding=function(_2f){
var _30=null;
var i=1,e=null;
while((e=this._array[i])!=null&&!_30){
if(e==_2f&&this._array[i-1]){
_30=this._array[i-1];
}
i++;
}
return _30;
};
List.prototype.getIndex=function(_33){
var _34=-1;
if(this._array.indexOf!=null){
_34=this._array.indexOf(_33);
}else{
var _35=0;
this.each(function(e){
var res=true;
if(e==_33){
_34=_35;
res=false;
}
_35++;
return res;
});
}
return _34;
};
List.prototype.reset=function(){
this._index=0;
return this;
};
List.prototype.clear=function(){
this._array=[];
return this.reset();
};
List.prototype.each=function(_38,_39){
this.reset();
var _3a,is=true;
while(is!=false&&this.hasNext()){
if(_39===undefined){
_39=null;
}
var _3c=this._index;
var _3d=this.getNext();
is=_38.call(_39,_3d,_3c);
}
this.reset();
};
List.prototype.copy=function(){
return new List(this._array);
};
List.prototype.reverse=function(){
this._array.reverse();
return this;
};
List.prototype.extractFirst=function(){
return this._array.shift();
};
List.prototype.extractLast=function(){
return this._array.pop();
};
List.prototype.getFirst=function(){
return this.get(0);
};
List.prototype.getLast=function(){
return this.get(this.getLength()-1);
};
List.prototype.toString=function(){
return this._array.toString();
};
List.prototype.toArray=function(){
return this._array.concat([]);
};
List.prototype.merge=function(_3e){
_3e.reset();
while(_3e.hasNext()){
this.add(_3e.getNext());
}
return this;
};
List.prototype.dispose=function(){
var i=this._array.length-1;
while(i>=0){
this._array[i--]=null;
}
this._array=null;
this._index=null;
this._isDisposed=true;
};
function Map(map){
this._map={};
if(map!=null){
for(var key in map){
this.set(key,map[key]);
}
}
}
Map.prototype._map={};
Map.prototype.get=function(key){
var _43=null;
if(this.has(key)){
_43=this._map[key];
}else{
var cry="Map: Invalid key: "+key;
SystemLogger.getLogger("Map").error(cry);
SystemDebug.stack(arguments);
if(Application.isDeveloperMode){
alert(cry);
}
}
return _43;
};
Map.prototype.set=function(key,_46){
this._map[key]=_46;
};
Map.prototype.del=function(key){
delete this._map[key];
};
Map.prototype.has=function(key){
return typeof this._map[key]!="undefined";
};
Map.prototype.each=function(_49){
for(var key in this._map){
var _4b=_49(key,this._map[key]);
if(_4b==false){
break;
}
}
};
Map.prototype.hasEntries=function(){
var _4c=false;
for(var key in this._map){
_4c=true;
break;
}
return _4c;
};
Map.prototype.countEntries=function(){
var _4e=0;
for(var key in this._map){
_4e++;
}
return _4e;
};
Map.prototype.toList=function(_50){
var _51=new List();
for(var key in this._map){
_51.add(_50?key:this._map[key]);
}
return _51;
};
Map.prototype.copy=function(){
var map=new Map();
for(var key in this._map){
map.set(key,this._map[key]);
}
return map;
};
Map.prototype.inverse=function(){
var map=new Map();
for(var key in this._map){
map.set(this._map[key],key);
}
return map;
};
Map.prototype.empty=function(){
for(var key in this._map){
delete this._map[key];
}
};
Map.prototype.dispose=function(){
for(var key in this._map){
this._map[key]=null;
}
};
function _BroadcastMessages(){
}
_BroadcastMessages.prototype={APPLICATION_STARTUP:"application startup",APPLICATION_LOGIN:"application login",APPLICATION_LOGOUT:"application logout",APPLICATION_OPERATIONAL:"application operational",APPLICATION_ONSHUTDOWN:"application onshutdown",APPLICATION_SHUTDOWN:"application shutdown",APPLICATION_ERROR:"application error",APPLICATION_BLURRED:"application blurred",APPLICATION_FOCUSED:"application focused",APPLICATION_KICKSTART:"application kickstart",CODEMIRROR_LOADED:"codemirror loaded",MOUSEEVENT_MOUSEDOWN:"mouseevent mousedown",MOUSEEVENT_MOUSEUP:"mouseevent mouseup",MOUSEEVENT_MOUSEMOVE:"mouseevent mousemove",$WINKEY_LOADED:"${windowkey} loaded",$WINKEY_UNLOADED:"${windowkey} unloaded",$WINKEY_EVALUATED:"${windowkey} evaluated",$WINKEY_RESIZED:"${windowkey} resized",$WINKEY_HRESIZED:"${windowkey} horizontally resized",$WINKEY_VRESIZED:"${windowkey} vertically resized",LOADED_NAVIGATOR:"navigator loaded",LOADED_MAINSTAGE:"mainstage loaded",LOCALSTORE_INITIALIZED:"localstore initialized",PERSISTANCE_INITIALIZED:"persistance initialized",AUDIO_INITIALIZED:"audio initialized",STAGE_INITIALIZED:"stage initialized",KEY_SHIFT_DOWN:"shiftkeydown",KEY_SHIFT_UP:"shiftkeyup",KEY_CONTROL_DOWN:"controlkeydown",KEY_CONTROL_UP:"controlkeyup",KEY_ARROW:"arrowkey",KEY_ENTER:"enterkeydown",KEY_ESCAPE:"escapekeydown",KEY_SPACE:"spacekeydown",KEY_TAB:"tabkeydown",KEY_ALT:"altkeydown",KEY_CONTROLTAB:"controltabkeysdown",TYPEDRAG_START:"typedrag start",TYPEDRAG_STOP:"typedrag stop",TYPEDRAG_PAUSE:"typedrag pause",DOCK_MAXIMIZED:"dockmaximized",DOCK_MINIMIZED:"dockminimized",DOCK_NORMALIZED:"docknormalized",DOCKTABBINDING_SELECT:"docktab select",SYSTEMTREEBINDING_REFRESH:"systemtree refresh",SYSTEMTREEBINDING_REFRESHALL:"systemtree refresh all",SYSTEMTREEBINDING_REFRESHING:"systemtree refreshing",SYSTEMTREEBINDING_REFRESHED:"systemtree refreshed",SYSTEMTREEBINDING_FOCUS:"systemtree focus",SYSTEMTREEBINDING_CUT:"systemtree cut",SYSTEMTREEBINDING_COPY:"systemtree copy",SYSTEMTREEBINDING_PASTE:"systemtree paste",SYSTEMTREEBINDING_COLLAPSEALL:"systemtree collapse all",SYSTEMTREENODEBINDING_FOCUS:"systemtreenode focus",SYSTEMTREEBINDING_LOCKTOEDITOR:"systemtreenode lock to editor",SYSTEMTREENODEBINDING_FORCE_OPEN:"systemtreenode force open",SYSTEMTREENODEBINDING_FORCING_OPEN:"systemtreenode forcing open",SYSTEMTREENODEBINDING_FORCED_OPEN:"systemtreenode forced open",START_COMPOSITE:"startcomposite",STOP_COMPOSITE:"stopcomposite",COMPOSITE_START:"compositestart",COMPOSITE_STOP:"compositestop",VIEW_OPENING:"view opening",VIEW_OPENED:"view opened",VIEW_COMPLETED:"view completed",CLOSE_VIEW:"close view",CLOSE_VIEWS:"close views",VIEW_CLOSED:"view closed",TINYMCE_INITIALIZED:"tinymce initialized",CODEPRESS_INITIALIZED:"codepress initialized",VISUALEDITOR_FOCUSED:"visualeditor focused",VISUALEDITOR_BLURRED:"visualditor blurred",VISUALEDITOR_HACKED:"visualeditor hacked",PERSPECTIVE_CHANGED:"perspective changed",PERSPECTIVES_NONE:"no perspectives",SYSTEMLOG_OPENED:"systemlog opened",SYSTEMLOG_CLOSED:"systemlog closed",SYSTEMACTION_INVOKE:"systemaction invoke",SYSTEMACTION_INVOKED:"systemaction invoked",SYSTEM_ACTIONPROFILE_PUBLISHED:"system actionprofile published",NAVIGATOR_TREENODE_SELECTED:"navigator treenode selected",MODAL_DIALOG_OPENED:"modal dialog invoked",MODAL_DIALOG_CLOSED:"modal dialog closed",COVERBINDING_MOUSEDOWN:"userinterfacecoverbinding mousedown",SERVER_OFFLINE:"server offline",SERVER_ONLINE:"server online",OFFLINE_FLASH_INITIALIZED:"offline flash initialized",CLOSE_CURRENT:"close current",CLOSE_ALL:"close all",CLOSE_ALL_DONE:"close all done",SAVE_CURRENT:"save current",CURRENT_SAVED:"current saved",SAVE_ALL:"save all",SAVE_ALL_DONE:"save all done",DOCKTAB_DIRTY:"docktab dirty",DOCKTAB_CLEAN:"docktab clean",BINDING_RELATE:"binding relate",LOCALIZATION_CHANGED:"localization changed",XHTML_MARKUP_ON:"xhtml markup on",XHTML_MARKUP_OFF:"xhtml markup off",XHTML_MARKUP_ACTIVATE:"xhtml markup activate",XHTML_MARKUP_DEACTIVATE:"xhtml markup deactivate",HIGHLIGHT_KEYWORDS:"highlight keywords",BIND_TOKEN_TO_VIEW:"bind entitytoken to view",STAGEDIALOG_OPENED:"stage dialog opened",INVOKE_DEFAULT_ACTION:"invoke default action",LANGUAGES_UPDATED:"LocalesUpdated",FROMLANGUAGE_UPDATED:"ForeignLocaleChanged",TOLANGUAGE_UPDATED:"ActiveLocaleChanged",MESSAGEQUEUE_REQUESTED:"messagequeue requested",MESSAGEQUEUE_EVALUATED:"messagequeue evaluated",UPDATE_LANGUAGES:"update languages"};
var BroadcastMessages=new _BroadcastMessages();
function _EventBroadcaster(){
}
_EventBroadcaster.prototype={_broadcasts:{},subscribe:function(_59,_5a){
if(_59!=null){
if(!Interfaces.isImplemented(IBroadcastListener,_5a,true)){
throw ("IBroadcastListener not implemented: "+_59);
}else{
if(!this._broadcasts[_59]){
this._broadcasts[_59]=[_5a];
}else{
this._broadcasts[_59].push(_5a);
}
}
}else{
SystemDebug.stack(arguments);
throw "Undefined broadcast: "+_5a;
}
},unsubscribe:function(_5b,_5c){
if(_5b!=null){
if(Interfaces.isImplemented(IBroadcastListener,_5c)){
var i=0,_5e,_5f=this._broadcasts[_5b];
if(_5f){
while(i<_5f.length){
_5e=_5f[i];
if(_5e==_5c){
_5f.splice(i,1);
break;
}
i++;
}
}
}
}else{
throw "Undefined broadcast"+_5c;
}
},hasSubscribers:function(_60){
var _61=this._broadcasts[_60];
return _61!=null&&_61.length>0;
},broadcast:function(_62,_63){
if(_62!=null){
var i=0,_65=this._broadcasts[_62];
var _66=[];
if(_65!=null){
var _67=new List();
while(i<_65.length){
_66.push(_65[i++]);
}
i=0;
while(i<_66.length){
var _68=_66[i];
if(Application.isDeveloperMode){
_68.handleBroadcast(_62,_63);
}else{
try{
_68.handleBroadcast(_62,_63);
}
catch(exception){
_67.add(_68);
var cry="Exception in "+new String(_68)+" on broadcast '"+_62+"':"+new String(exception);
SystemLogger.getLogger("EventBroadcaster").error(cry);
SystemDebug.stack(arguments);
}
}
i++;
}
if(_67.hasEntries()){
_67.each(function(_6a){
EventBroadcaster.unsubscribe(_62,_6a);
});
}
}
}else{
SystemDebug.stack(arguments);
throw "Undefined broadcast";
}
}};
var EventBroadcaster=new _EventBroadcaster();
function _Constants(){
}
var temppath=document.location.pathname;
var temproot=temppath.substring(0,temppath.lastIndexOf("/"));
_Constants.prototype={COMPOSITE_HOME:"http://www.composite.net",DUMMY_LINK:"javascript:void(false);",APPROOT:temproot,CONFIGROOT:temproot.substring(0,temproot.length-9)+"Frontend/Config/VisualEditor/",TEMPLATESROOT:temproot+"/templates",SKINROOT:temproot+"/skins/system",TINYMCEROOT:temproot+"/content/misc/editors/wysiwygeditor/tiny_mce",TINYROOT:temproot+"/content/misc/editors/visualeditor/tiny_mce",URL_WSDL_SETUPSERVICE:temproot+"/services/Setup/SetupService.asmx?WSDL",URL_WSDL_CONFIGURATION:temproot+"/services/Configuration/ConfigurationService.asmx?WSDL",URL_WSDL_LOGINSERVICE:temproot+"/services/Login/Login.asmx?WSDL",URL_WSDL_INSTALLSERVICE:temproot+"/services/Installation/InstallationService.asmx?WSDL",URL_WSDL_MESSAGEQUEUE:temproot+"/services/ConsoleMessageQueue/ConsoleMessageQueueServices.asmx?WSDL",URL_WSDL_EDITORCONFIG:temproot+"/services/WysiwygEditor/ConfigurationServices.asmx?WSDL",URL_WSDL_FLOWCONTROLLER:temproot+"/services/FlowController/FlowControllerServices.asmx?WSDL",URL_WSDL_STRINGSERVICE:temproot+"/services/StringResource/StringService.asmx?WSDL",URL_WSDL_TREESERVICE:temproot+"/services/Tree/TreeServices.asmx?WSDL",URL_WSDL_XHTMLTRANSFORM:temproot+"/services/WysiwygEditor/XhtmlTransformations.asmx?WSDL",URL_WSDL_SECURITYSERVICE:temproot+"/services/Tree/SecurityServices.asmx?WSDL",URL_WSDL_READYSERVICE:temproot+"/services/Ready/ReadyService.asmx?WSDL",URL_WSDL_LOCALIZATION:temproot+"/services/Localization/LocalizationService.asmx?WSDL",URL_WSDL_SOURCEVALIDATION:temproot+"/services/SourceEditor/SourceValidationService.asmx?WSDL",URL_WSDL_MARKUPFORMAT:temproot+"/services/SourceEditor/MarkupFormatService.asmx?WSDL",URL_WSDL_SEOSERVICE:temproot+"/services/SearchEngineOptimizationKeyword/SearchEngineOptimizationKeyword.asmx?WSDL",URL_WSDL_PAGESERVICE:temproot+"/services/Page/PageService.asmx?WSDL",URL_WSDL_DIFFSERVICE:temproot+"/services/StringResource/DiffService.asmx?WSDL",NS_XHTML:"http://www.w3.org/1999/xhtml",NS_UI:"http://www.w3.org/1999/xhtml",NX_XUL:"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",NS_XBL:"http://www.mozilla.org/xbl",NS_WSDL:"http://schemas.xmlsoap.org/wsdl/",NS_SOAP:"http://schemas.xmlsoap.org/wsdl/soap/",NS_ENVELOPE:"http://schemas.xmlsoap.org/soap/envelope/",NS_ENCODING:"http://schemas.xmlsoap.org/soap/encoding/",NS_SCHEMA:"http://www.w3.org/2001/XMLSchema",NS_SCHEMA_INSTANCE:"http://www.w3.org/1999/XMLSchema-instance",NS_DOMPARSEERROR:"http://www.mozilla.org/newlayout/xml/parsererror.xml",NS_NS:"http://www.w3.org/2000/xmlns/",NS_PERSISTANCE:"http://www.composite.net/ns/localstore/persistance",NS_FUNCTION:"http://www.composite.net/ns/function/1.0",SCROLLBAR_DIMENSION_HARDCODED_VALUE:19};
var Constants=new _Constants();
temppath=null;
temproot=null;
function _Client(){
var _6b=navigator.userAgent.toLowerCase();
var _6c=navigator.platform.toLowerCase();
var _6d=navigator.appName=="Microsoft Internet Explorer";
var _6e=!_6d&&typeof document.createTreeWalker!="undefined";
var _6f=_6e&&(_6b.indexOf("webrunner")>-1||_6b.indexOf("prism")>-1);
var _70=history.pushState!=null;
this.isMozilla=_6e;
this.isFirefox=_6b.indexOf("firefox")>-1;
this.isWebKit=_6b.indexOf("webkit")>-1;
this.isExplorer=_6d;
this.isExplorer6=this.isExplorer&&(_6b.indexOf("msie 6.0")>-1||_6b.indexOf("msie 6.1")>-1);
this.isExplorer8=this.isExplorer&&window.XDomainRequest!=null;
this.isPrism=_6f;
this.isWindows=_6c.indexOf("win")>-1;
this.isVista=this.isWindows&&_6b.indexOf("windows nt 6")>-1;
var _71=this._getFlashVersion();
this.hasFlash=(_71&&_71>=9);
this.hasTransitions=_70;
this.canvas=!!document.createElement("canvas").getContext;
return this;
}
_Client.prototype={isExplorer:false,isMozilla:false,isPrism:false,hasFlash:false,isWindows:false,isVista:false,hasTransitions:false,_getFlashVersion:function(){
var _72=null;
var _73=10;
try{
if(this.isMozilla==true){
if(typeof navigator.plugins["Shockwave Flash"]!="undefined"){
var _74=navigator.plugins["Shockwave Flash"];
if(_74){
var _75=_74.description;
if(_75!=null){
_72=_75.charAt(_75.indexOf(".")-1);
}
}
}
}else{
for(var i=2;i<=_73;i++){
try{
new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);
_72=i;
}
catch(exception){
continue;
}
}
}
}
catch(exception){
}
return _72;
},qualifies:function(){
var _77=true;
var _78=false;
if(this.isMozilla&&!this.isWebKit){
_78=(document.documentElement.mozMatchesSelector===undefined);
}
if(window.opera!=null||_78||this.isExplorer&&!this.canvas){
_77=false;
}
return _77;
},fixUI:function(_79){
if(Client.isExplorer){
_79=_79.replace(/<ui:/g,"<").replace(/<\/ui:/g,"</");
_79=_79.replace(/(<(\w+)[^>]*)\/>/g,"$1></$2>");
}
return _79;
}};
var Client=new _Client();
SystemLogger.TAB_SEQUENCE="&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;";
SystemLogger.LEVEL_INFO="info";
SystemLogger.LEVEL_DEBUG="debug";
SystemLogger.LEVEL_ERROR="error";
SystemLogger.LEVEL_WARN="warn";
SystemLogger.LEVEL_FATAL="fatal";
SystemLogger.LEVEL_FINE="fine";
SystemLogger.isFlushing=false;
function SystemLogger(_7a){
this.identifier=_7a;
}
SystemLogger.prototype.info=function(_7b){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_INFO,_7b);
};
SystemLogger.prototype.debug=function(_7c){
if(_7c=="page"){
alert(arguments.caller.callee);
}
SystemLogger.log(this.identifier,SystemLogger.LEVEL_DEBUG,_7c);
};
SystemLogger.prototype.error=function(_7d){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_ERROR,_7d);
};
SystemLogger.prototype.warn=function(_7e){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_WARN,_7e);
};
SystemLogger.prototype.fatal=function(_7f){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_FATAL,_7f);
};
SystemLogger.prototype.fine=function(_80){
SystemLogger.log(this.identifier,SystemLogger.LEVEL_FINE,_80);
};
SystemLogger.loggers={};
SystemLogger.buffer=new List();
SystemLogger.suspend=function(){
SystemLogger.outputWindow=null;
SystemLogger.outputDocument=null;
SystemLogger.outputElement=null;
SystemLogger.log=SystemLogger.bufferLog;
};
SystemLogger.unsuspend=function(win){
SystemLogger.outputWindow=win;
SystemLogger.outputDocument=win.document;
SystemLogger.outputElement=win.document.body;
SystemLogger.log=SystemLogger.outputLog;
SystemLogger.flushBuffer();
};
SystemLogger.getLogger=function(_82){
var _83=SystemLogger.loggers[_82];
if(!_83){
_83=new SystemLogger(_82);
SystemLogger.loggers[_82]=_83;
}
return _83;
};
SystemLogger.flushBuffer=function(){
SystemLogger.buffer.reset();
SystemLogger.isFlushing=true;
if(SystemLogger.buffer.hasEntries()){
while(SystemLogger.buffer.hasNext()){
var _84=SystemLogger.buffer.getNext();
this.log(_84.identifier,_84.level,_84.message);
}
}
SystemLogger.isFlushing=false;
};
SystemLogger.bufferLog=function(_85,_86,_87){
if(Application.isDeveloperMode){
_87=String(_87);
SystemLogger.buffer.add({identifier:_85,level:_86,message:_87});
}
};
SystemLogger.outputLog=function(_88,_89,_8a){
_8a=String(_8a);
if(!SystemLogger.isFlushing){
SystemLogger.bufferLog(_88,_89,_8a);
}
var win=SystemLogger.outputWindow;
var doc=SystemLogger.outputDocument;
var elm=SystemLogger.outputElement;
var div=doc.createElement("div");
var _8f=doc.createElement("span");
var pre=doc.createElement("pre");
if(Client.isExplorer){
_8a=_8a.replace(/</g,"&lt;");
_8a=_8a.replace(/>/g,"&gt;");
_8a=_8a.replace(/\n/g,"<br/>");
_8a=_8a.replace(/\t/g,SystemLogger.TAB_SEQUENCE);
pre.innerHTML=_8a;
}else{
pre.textContent=_8a;
}
div.className=_89;
_8f.innerHTML=_88;
div.appendChild(_8f);
div.appendChild(pre);
elm.insertBefore(div,elm.firstChild);
win.scrollTo(0,0);
};
SystemLogger.log=SystemLogger.bufferLog;
SystemLogger.clear=function(){
SystemLogger.buffer=new List();
var doc=SystemLogger.outputDocument;
if(doc){
doc.body.innerHTML="";
}
};
SystemTimer.getTimer=function(_92){
return new SystemTimer(_92.toString());
};
function SystemTimer(id){
this.logger=SystemLogger.getLogger("SystemTimer");
this._id=id;
this._time=new Date().getTime();
}
SystemTimer.prototype.reset=function(){
this._time=new Date().getTime();
};
SystemTimer.prototype.report=function(_94){
this.logger.debug(this._id+": "+this.getTime()+(_94?": "+_94:""));
};
SystemTimer.prototype.getTime=function(){
return new Date().getTime()-this._time;
};
function _SystemDebug(){
}
_SystemDebug.prototype={_logger:SystemLogger.getLogger("SystemDebug"),_stacklength:parseInt(5),stack:function(_95,_96){
this._stackMozilla(_95,_96);
},_stackMozilla:function(_97,_98){
_98=_98?_98:this._stacklength;
if(Client.isMozilla&&_97.callee||_97.caller){
var _99=Client.isMozilla?_97.callee.caller:_97.caller.callee;
var _9a="";
var i=0;
while(_99!=null&&i++<_98){
_9a+="\n#"+i+"\n";
_9a+=_99.toString();
_99=_99.caller;
_9a+="\n";
}
this._logger.error(_9a);
}else{
this._logger.error("(Error stack unreachable!)");
}
}};
var SystemDebug=new _SystemDebug;
function _Interfaces(){
var _9c=SystemLogger.getLogger("Interfaces");
this.isImplemented=function(_9d,_9e,_9f){
var _a0=true;
for(var _a1 in _9d){
if(typeof _9e[_a1]==Types.UNDEFINED){
_a0=false;
}else{
if(typeof _9d[_a1]!=typeof _9e[_a1]){
_a0=false;
}
}
if(!_a0){
break;
}
}
if(!_a0){
if(_9f){
_9c.fine(_9e+" invalid. Interface check abandoned at: "+_a1);
}
}
return _a0;
};
}
var Interfaces=new _Interfaces;
function _Types(){
}
_Types.prototype={_logger:SystemLogger.getLogger("Types"),BOOLEAN:"boolean",STRING:"string",NUMBER:"number",FUNCTION:"function",UNDEFINED:"undefined",castFromString:function(_a2){
var _a3=_a2;
if(parseInt(_a3).toString()===_a3){
_a3=parseInt(_a3);
}else{
if(parseFloat(_a3).toString()===_a3){
_a3=parseFloat(_a3);
}else{
if(_a3==="true"||_a3==="false"){
_a3=(_a3==="true");
}
}
}
return _a3;
},isDefined:function(arg){
return typeof arg!=Types.UNDEFINED;
},isFunction:function(arg){
return typeof arg==Types.FUNCTION;
}};
var Types=new _Types();
var MimeTypes={JPG:"image/jpeg",GIF:"image/gif",PNG:"image/png",CSS:"text/css",JAVASCRIPT:"text/javascript",TEXT:"text/plain",HTML:"text/html",XHTML:"applcication/xhtml+xml",FLASH:"application/x-shockwave-flash",QUICKTIME:"video/quicktime",SHOCKWAVE:"application/x-director",WINMEDIA:"application/x-mplayer2",COMPOSITEPAGES:"application/x-composite-page",COMPOSITEFUNCTION:"application/x-composite-function"};
window.SearchTokens=new function(){
var _a6={"MediaFileElementProvider.WebImages":null,"MediaFileElementProvider.EmbeddableMedia":null,"AllFunctionsElementProvider.VisualEditorFunctions":null,"AllFunctionsElementProvider.XsltFunctionCall":null};
this.getToken=function(key){
var _a8=null;
if(this.hasToken(key)){
_a8=_a6[key];
}else{
throw "Unknown search token key: "+key;
}
return _a8;
};
this.hasToken=function(key){
return typeof _a6[key]!=Types.UNDEFINED;
};
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_LOGIN,{handleBroadcast:function(){
new List(TreeService.GetSearchTokens(true)).each(function(_aa){
if(SearchTokens.hasToken(_aa.Key)){
_a6[_aa.Key]=_aa.Value;
}else{
alert("SearchTokens need updating!");
}
});
}});
};
window.StringBundle=new function(){
var _ab=SystemLogger.getLogger("StringBundle");
this.UI="Composite.Management";
var _ac={};
function resolve(_ad,_ae){
var _af=new List(StringService.GetLocalisation(_ad));
if(_af.hasEntries()){
_af.each(function(_b0){
_ae[_b0.Key]=_b0.Value;
});
}else{
throw "No strings from provider: "+_ad;
}
}
this.getString=function(_b1,_b2){
var _b3=null;
if(window.StringService!=null){
try{
if(_b1=="ui"){
_b1=StringBundle.UI;
}
if(!_ac[_b1]){
var _b4=_ac[_b1]={};
resolve(_b1,_b4);
}
if(_ac[_b1]){
_b3=_ac[_b1][_b2];
}
if(!_b3){
throw "No such string: "+_b2;
}
}
catch(exception){
var cry="StringBundle exception in string "+_b1+":"+_b2;
_ab.error(cry);
if(Application.isDeveloperMode){
alert(cry);
}
}
}
return _b3;
};
};
window.LastOpenedSystemNodes=new function(){
var _b6=new List([]);
this.clear=function(){
_b6.clear();
};
this.add=function(_b7){
var _b8=_b7.getHandle();
_b6.add(_b8);
};
this.isOpen=function(_b9){
var _ba=_b9.getHandle();
return _b6.has(_ba);
};
};
function _KeyMaster(){
}
_KeyMaster.prototype={_uniqueKeys:{},getUniqueKey:function(){
var key=new String("key"+Math.random().toString().split(".")[1]);
if(this._uniqueKeys[key]!=null){
return this.getUniqueKey();
}
this._uniqueKeys[key]=true;
return key;
},hasKey:function(key){
var _bd=false;
if(this._uniqueKeys[key]){
_bd=true;
}
return _bd;
}};
var KeyMaster=new _KeyMaster();
function _ImageProvider(){
}
_ImageProvider.prototype={_logger:SystemLogger.getLogger("ImageProvider"),SERVICE_URL:"services/Icon/GetIcon.ashx",UI:"Composite.Icons",getImageURL:function(_be,_bf){
var _c0=null;
var url=Constants.APPROOT+"/"+this.SERVICE_URL+"?resourceName=${name}&resourceNamespace=${hash}&size=${size}";
var _c2=_be.ResourceNamespace;
var _c3=_be.ResourceName;
_bf=_bf?_bf:"DEFAULT";
if(_c3!=null&&_c2!=null){
_c0=url.replace("${name}",_c3).replace("${hash}",_c2).replace("${size}",_bf);
if(_bf=="DEFAULT"){
_c0=_c0.split("&size=DEFAULT")[0];
}
}else{
throw "Could not compute image URL.";
}
return _c0;
},toGrayScaleURL:function(_c4){
var _c5=document.createElement("canvas");
var ctx=_c5.getContext("2d");
var _c4=new Image();
var _c7=_c4.width;
var _c8=_c4.height;
_c5.width=_c7;
_c5.height=_c8;
ctx.drawImage(_c4,0,0);
var _c9=ctx.getImageData(0,0,_c7,_c8);
for(j=0;j<_c9.height;i++){
for(i=0;i<_c9.width;j++){
var _ca=(i*4)*_c9.width+(j*4);
var red=_c9.data[_ca];
var _cc=_c9.data[_ca+1];
var _cd=_c9.data[_ca+2];
var _ce=_c9.data[_ca+3];
var _cf=(red+_cc+_cd)/3;
_c9.data[_ca]=_cf;
_c9.data[_ca+1]=_cf;
_c9.data[_ca+2]=_cf;
_c9.data[_ca+3]=_ce;
}
}
return _c5.toDataURL();
}};
var ImageProvider=new _ImageProvider();
function _Resolver(){
}
_Resolver.prototype={_logger:SystemLogger.getLogger("Resolver"),resolve:function(_d0){
if(typeof _d0!=Types.UNDEFINED){
_d0=String(_d0);
_d0=_d0.replace("${root}",Constants.APPROOT);
_d0=_d0.replace("${skin}",Constants.SKINROOT);
_d0=_d0.replace("${tinymce}",Constants.TINYMCEROOT);
_d0=_d0.replace("${tiny}",Constants.TINYROOT);
if(_d0.indexOf("${icon:")>-1){
_d0=this._resolveImage(_d0);
}else{
if(_d0.indexOf("${string:")>-1){
_d0=this._resolveString(_d0);
}
}
}
return _d0;
},resolveVars:function(_d1,_d2){
var i=0;
while(i<_d2.length){
_d1=_d1.replace("{"+i+"}",_d2[i]);
i++;
}
return _d1;
},_resolveString:function(_d4){
var _d5=null;
var _d6=null;
var key=_d4.split("${string:")[1].split("}")[0];
if(key.indexOf(":")>-1){
_d6=key.split(":")[0];
key=key.split(":")[1];
}else{
_d6=StringBundle.UI;
}
_d5=StringBundle.getString(_d6,key);
if(!_d5){
_d5="(?)";
}
return _d5;
},_resolveImage:function(_d8){
var _d9=null;
var _da=null;
var _db=null;
var _dc=null;
_db=_d8.split("${icon:")[1].split("}")[0];
if(_db.indexOf(":")>-1){
_da=_db.split(":")[0];
_db=_db.split(":")[1];
}else{
_da=ImageProvider.UI;
}
if(_db.indexOf("(")>-1){
_dc=_db.split("(")[1].split(")")[0];
_db=_db.split("(")[0];
}
_d9=ImageProvider.getImageURL({ResourceNamespace:_da,ResourceName:_db},_dc);
return _d9;
}};
var Resolver=new _Resolver();
function _Download(){
}
_Download.prototype.init=function(url){
var win=top.app.bindingMap.downloadwindow;
win.setURL(url);
};
var Download=new _Download();
function _Cookies(){
}
_Cookies.prototype={createCookie:function(_df,_e0,_e1){
var _e2="";
if(_e1){
var _e3=new Date();
_e3.setTime(_e3.getTime()+(_e1*24*60*60*1000));
_e2="; expires="+_e3.toGMTString();
}
document.cookie=_df+"="+escape(_e0)+_e2+"; path=/";
return this.readCookie(_df);
},readCookie:function(_e4){
var _e5=null;
var _e6=_e4+"=";
var ca=document.cookie.split(";");
for(var i=0;i<ca.length;i++){
var c=ca[i];
while(c.charAt(0)==" "){
c=c.substring(1,c.length);
}
if(c.indexOf(_e6)==0){
_e5=unescape(c.substring(_e6.length,c.length));
}
}
return _e5;
},eraseCookie:function(_ea){
this.createCookie(_ea,"",-1);
}};
var Cookies=new _Cookies();
function _StatusBar(){
this.AUTOCLEAR_TIMEOUT=5*1000;
this.GROUP_LANGUAGETOOLS="languagetools";
this.document=null;
this.state=null;
this.ERROR="error";
this.WARN="warn";
this.BUSY="busy";
this.READY="ready";
this._groups=new Map();
var _eb=SystemLogger.getLogger("StatusBar");
var _ec=null;
var _ed="${icon:error}";
var _ee="${icon:warning}";
var _ef="${icon:loading}";
var _f0="${icon:message}";
var _f1=null;
var _f2=null;
var _f3=null;
var _f4=null;
this.initialize=function(_f5){
_f1=StringBundle.getString("ui","Website.App.StatusBar.Error");
_f2=StringBundle.getString("ui","Website.App.StatusBar.Warn");
_f3=StringBundle.getString("ui","Website.App.StatusBar.Busy");
_f4=StringBundle.getString("ui","Website.App.StatusBar.Ready");
_ec=_f5;
this.document=_f5.bindingDocument;
};
this.error=function(_f6,_f7){
this.state=StatusBar.ERROR;
_f6=_f6?_f6:_f1;
show(_f6,_ed,_f7,false);
};
this.warn=function(_f8,_f9){
this.state=StatusBar.WARN;
_f8=_f8?_f8:_f2;
show(_f8,_ee,_f9,false);
};
this.busy=function(_fa,_fb){
this.state=StatusBar.BUSY;
_fa=_fa?_fa:_f3;
show(_fa,_ef,_fb,false);
};
this.ready=function(_fc,_fd){
this.state=StatusBar.READY;
_fc=_fc?_fc:_f4;
show(_fc,_f0,_fd,true);
};
this.report=function(_fe,_ff,vars,_101){
this.state=null;
show(_fe,_ff,vars,_101);
};
this.clear=function(){
this.state=null;
if(_ec){
_ec.clear();
}
};
function show(_102,icon,vars,_105){
if(vars){
_102=Resolver.resolveVars(_102,vars);
}
if(_ec){
_ec.setLabel(_102);
_ec.setImage(icon);
if(_105){
_ec.startFadeOut(StatusBar.AUTOCLEAR_TIMEOUT);
}
}else{
_eb.error("Message not initialized for display: "+_102);
}
}
this.addToGroup=function(name,_107){
if(!this._groups.has(name)){
this._groups.set(name,_ec.addRight(ToolBarGroupBinding.newInstance(this.document)));
}
this._groups.get(name).add(_107);
};
}
var StatusBar=new _StatusBar();
function _Localization(){
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_LOGIN,this);
EventBroadcaster.subscribe(BroadcastMessages.LANGUAGES_UPDATED,this);
EventBroadcaster.subscribe(BroadcastMessages.FROMLANGUAGE_UPDATED,this);
EventBroadcaster.subscribe(BroadcastMessages.TOLANGUAGE_UPDATED,this);
}
_Localization.prototype={languages:null,source:null,target:null,handleBroadcast:function(_108,arg){
switch(_108){
case BroadcastMessages.APPLICATION_LOGIN:
case BroadcastMessages.LANGUAGES_UPDATED:
case BroadcastMessages.TOLANGUAGE_UPDATED:
var _10a=LocalizationService.GetActiveLocales(true);
if(_10a.length>=1){
this.languages=new List(_10a);
}else{
this.languages=null;
}
EventBroadcaster.broadcast(BroadcastMessages.UPDATE_LANGUAGES,this.languages);
break;
}
switch(_108){
case BroadcastMessages.APPLICATION_LOGIN:
case BroadcastMessages.FROMLANGUAGE_UPDATED:
var _10b=LocalizationService.GetLocales(true);
this.source=_10b.ForeignLocaleName;
this.target=_10b.ActiveLocaleName;
EventBroadcaster.broadcast(BroadcastMessages.LOCALIZATION_CHANGED,{source:_10b.ForeignLocaleName,target:_10b.ActiveLocaleName});
break;
}
},currentLang:function(){
if(this.languages!=null){
var _10c=this.languages.copy();
while(_10c.hasNext()){
var lang=_10c.getNext();
if(lang.IsCurrent){
return lang.IsoName;
}
}
}
return null;
}};
var Localization=new _Localization();
function _Validator(){
}
_Validator.prototype={validate:function(_10e,key,_110){
var _111=true;
var _112=SourceValidationService.ValidateSource(_10e,key);
if(_112!="True"){
if(_110==true){
this._dialog(_112);
}
_111=false;
}
return _111;
},validateInformed:function(_113,key){
return this.validate(_113,key,true);
},_dialog:function(_115){
setTimeout(function(){
Dialog.error("Source Invalid",_115);
},0);
}};
var Validator=new _Validator();
function _DOMEvents(){
}
_DOMEvents.prototype={_logger:SystemLogger.getLogger("DOMEvents"),MOUSEDOWN:"mousedown",MOUSEUP:"mouseup",MOUSEOVER:"mouseover",MOUSEOUT:"mouseout",MOUSEMOVE:"mousemove",CLICK:"click",DOUBLECLICK:"dblclick",KEYPRESS:"keypress",KEYDOWN:"keydown",KEYUP:"keyup",CONTEXTMENU:"contextmenu",SCROLL:"scroll",LOAD:"load",BEFOREUNLOAD:"beforeunload",UNLOAD:"unload",RESIZE:"resize",FOCUS:"focus",BLUR:"blur",SUBMIT:"submit",CUT:"cut",COPY:"copy",PASTE:"paste",DOM:"DOMContentLoaded",DRAGOVER:"dragover",DROP:"drop",ACTIVATE:"activate",DEACTIVATE:"deactivate",MOUSEENTER:"mouseenter",MOUSELEAVE:"mouseleave",SELECTSTART:"selectstart",FOCUSIN:"focusin",FOCUSOUT:"focusout",HELP:"help",BEFOREUPDATE:"beforeupdate",AFTERUPDATE:"afterupdate",ERRORUPDATE:"errorupdate",_count:0,addEventListener:function(_116,_117,_118,_119){
this._count++;
this._eventListener(true,_116,_117,_118,_119);
if(!Client.isExplorer){
if(_116&&typeof _116.nodeType!=Types.UNDEFINED){
if(_116.nodeType==Node.ELEMENT_NODE){
var win=DOMUtil.getParentWindow(_116);
if(win){
var _11b={handleEvent:function(){
DOMEvents.removeEventListener(_116,_117,_118,_119);
DOMEvents.removeEventListener(win,DOMEvents.UNLOAD,_11b);
}};
DOMEvents.addEventListener(win,DOMEvents.UNLOAD,_11b);
}
}
}
}
},removeEventListener:function(_11c,_11d,_11e,_11f){
this._count--;
this._eventListener(false,_11c,_11d,_11e,_11f);
},getTarget:function(e){
return e?(e.target?e.target:e.srcElement):null;
},stopPropagation:function(e){
try{
if(e.stopPropagation!=null){
e.stopPropagation();
}else{
e.cancelBubble=true;
}
}
catch(exception){
if(Application.isDeveloperMode==true){
this._logger.error(exception);
}
}
},preventDefault:function(e){
try{
if(e.preventDefault){
e.preventDefault();
}else{
e.returnValue=false;
}
}
catch(exception){
if(Application.isDeveloperMode==true){
this._logger.error(exception);
}
}
},isRightButton:function(e){
return e.button==2?true:false;
},cleanupEventListeners:function(_124){
this._deleteWrappedHandler(_124);
},isCurrentTarget:function(e){
var _126=false;
if(Client.isMozilla==true){
_126=e.target==e.currentTarget;
}
return true;
},_isChildOf:function(_127,_128){
var _129=true;
if(_127==_128){
_129=false;
}
if(_129==true){
while(_128!=null&&_128.nodeType!=Node.DOCUMENT_NODE&&_128!=_127){
_128=_128.parentNode;
}
_129=(_128==_127);
}
return _129;
},_eventListener:function(_12a,_12b,_12c,_12d,_12e,_12f){
if(Interfaces.isImplemented(IEventListener,_12d,true)){
if(typeof _12c!=Types.UNDEFINED){
var _130=this._getAction(_12a);
if(_12b[_130]){
if(Client.isExplorer==true){
switch(_12c){
case DOMEvents.MOUSEDOWN:
case DOMEvents.MOUSEUP:
case DOMEvents.MOUSEOVER:
case DOMEvents.MOUSEOUT:
case DOMEvents.MOUSEMOVE:
_12d=this._getWrappedHandler(_12b,_12c,_12d,_12f);
_12b[_130](_12c,_12d,false);
break;
default:
_12b[_130](_12c,_12d,false);
break;
}
}else{
switch(_12c){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSELEAVE:
_12c=_12c==DOMEvents.MOUSEENTER?DOMEvents.MOUSEOVER:DOMEvents.MOUSEOUT;
_12b[_130](_12c,{handleEvent:function(e){
var rel=e.relatedTarget;
if(e.currentTarget==rel||DOMEvents._isChildOf(e.currentTarget,rel)){
}else{
_12d.handleEvent(e);
}
}},_12e?true:false);
break;
default:
_12b[_130](_12c,_12d,_12e?true:false);
break;
}
}
}
}else{
throw "No such event allowed!";
}
}
},_getAction:function(_133){
var _134=null;
switch(_133){
case true:
_134="addEventListener";
break;
case false:
_134="removeEventListener";
break;
}
return _134;
},_getWrappedHandler:function(_135,_136,_137,_138){
var _139=null;
try{
if(!_137._domEventHandlers){
_137._domEventHandlers={};
}
if(!_137._domEventHandlers[_135]){
_137._domEventHandlers[_135]={};
}
if(!_137._domEventHandlers[_135][_136]){
var win=_135.nodeType?DOMUtil.getParentWindow(_135):_135;
if(win){
_137._domEventHandlers[_135][_136]=function(e){
if(win.event!=null&&_137!=null){
_137.handleEvent(win.event);
}else{
if(_137!=null){
_137.handleEvent(e);
}
}
};
}
}
_139=_137._domEventHandlers[_135][_136];
}
catch(exception){
this._report(_135,_136,_137,_138);
}
return _139;
},_deleteWrappedHandler:function(_13c){
for(var _13d in _13c._domEventHandlers){
if(_13d){
for(var _13e in _13c._domEventHandlers[_13d]){
if(_13e){
delete _13c._domEventHandlers[_13d][_13e];
}
}
}
delete _13c._domEventHandlers[_13d];
}
},_report:function(_13f,_140,_141,_142){
alert("DOMEvents.getWrappedHandler malfunction.\n\n"+"\ttarget: "+(_13f?_13f.nodeName:_13f)+"\n"+"\tevent: "+_140+"\n"+"\thandler: "+_141+"\n\n"+"Offending invoker: "+(_142.callee?_142.callee.toString():_142.constructor));
}};
var DOMEvents=new _DOMEvents();
function _DOMSerializer(){
}
_DOMSerializer.prototype={_serializer:(window.XMLSerializer?new XMLSerializer():null),serialize:function(node,_144){
var _145=null;
var _146=node;
if(node.nodeType==Node.DOCUMENT_NODE){
_146=node.documentElement;
}
if(_146.xml!=null){
return _146.xml;
}else{
if(this._serializer!=null){
if(_144==true){
_146=_146.cloneNode(true);
_146=DOMFormatter.format(_146,DOMFormatter.INDENTED_TYPE_RESULT);
}
_145=this._serializer.serializeToString(_146);
}
}
return _145;
}};
var DOMSerializer=new _DOMSerializer();
window.DOMFormatter=new function(){
var TAB="\t";
var NEW="\n";
var _149=new RegExp(/[^\t\n\r ]/);
this.ignoreCDATASections=false;
function indent(_14a){
var doc=_14a.ownerDocument;
var _14c=function(node,_14e){
if(node.hasChildNodes()&&node.firstChild.nodeType!=Node.TEXT_NODE){
var _14f="",i=0;
while(i++<_14e){
_14f+=TAB;
}
var _151=node.firstChild;
while(_151){
switch(_151.nodeType){
case Node.ELEMENT_NODE:
if(_151==node.lastChild){
node.appendChild(doc.createTextNode(NEW+_14f));
}
node.insertBefore(doc.createTextNode(NEW+_14f+TAB),_151);
_14c(_151,_14e+1);
break;
case Node.COMMENT_NODE:
case Node.PROCESSING_INSTRUCTION_NODE:
case Node.CDATA_SECTION_NODE:
node.insertBefore(doc.createTextNode(NEW+_14f+TAB),_151);
break;
}
if(_151.nodeType==Node.CDATA_SECTION_NODE){
if(!this.ignoreCDATASections){
formatCDATASection(_151,_14f+TAB);
}
}
_151=_151.nextSibling;
}
}
};
_14c(_14a,0);
}
function strip(_152){
var _153=[];
var _154={acceptNode:function(_155){
return (!_149.test(_155.nodeValue))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT;
}};
var _156=_152.ownerDocument.createTreeWalker(_152,NodeFilter.SHOW_TEXT,_154,true);
while(_156.nextNode()){
_153.push(_156.currentNode);
}
var i=0,_158;
while((_158=_153[i++])!=null){
_158.parentNode.removeChild(_158);
}
}
function formatCDATASection(node,_15a){
if(node.textContent.indexOf(NEW)>-1){
var _15b=node.textContent.split(NEW);
var _15c="",line,_15e=0,_15f=true;
while((line=_15b.shift())!=null){
if(_15e==0&&line.charAt(0)==TAB){
while(line.charAt(_15e++)==TAB){
}
}
line=line.substring(_15e,line.length);
if(_15b.length>0){
_15c+=_15a+TAB+line;
_15c+=_15f?"":"\n";
}else{
_15c+=_15a+line;
_15a=_15a.slice(1,_15a.length);
node.parentNode.appendChild(doc.createTextNode(NEW+_15a));
}
_15f=false;
}
node.textContent=_15c;
}
}
this.format=function(_160,_161){
var _162=1;
if(document.createTreeWalker&&!Client.isExplorer){
try{
strip(_160);
if(_161!=_162){
indent(_160);
}
}
catch(exception){
throw new Error(exception);
}
}
return (_160);
};
};
DOMFormatter.INDENTED_TYPE_RESULT=0;
DOMFormatter.STRIPPED_TYPE_RESULT=1;
function _DOMUtil(){
}
_DOMUtil.prototype={_logger:SystemLogger.getLogger("DOMUtil"),MSXML_MAXVERSION:6,MSXML_MINVERSION:1,MSXML_HTTPREQUEST:"MSXML2.XMLHTTP.{$version}.0",MSXML_DOMDOCUMENT:"MSXML2.DOMDocument.{$version}.0",MSXML_FREETHREADED:"MSXML2.FreeThreadedDOMDocument.{$version}.0",MSXML_XSLTEMPLATE:"MSXML2.XSLTemplate.{$version}.0",getMSComponent:function(_163){
var sig,_165=null,_166=this.MSXML_MAXVERSION;
while(!_165&&_166>=this.MSXML_MINVERSION){
try{
sig=_163.replace("{$version}",_166);
_165=new ActiveXObject(sig);
}
catch(exception){
}
_166--;
}
return _165;
},getXMLHTTPRequest:function(){
var _167=null;
if(Client.isExplorer){
_167=this.getMSComponent(this.MSXML_HTTPREQUEST);
}else{
_167=new XMLHttpRequest();
}
return _167;
},getDOMDocument:function(_168){
var _169=null;
if(Client.isExplorer){
_169=this.getMSComponent(_168?this.MSXML_FREETHREADED:this.MSXML_DOMDOCUMENT);
}else{
var doc=XMLParser.parse("<?xml version=\"1.0\" encoding=\"UTF-8\"?><ROOT/>");
doc.removeChild(doc.documentElement);
_169=doc;
}
return _169;
},getMSXMLXSLTemplate:function(){
var _16b=null;
if(Client.isExplorer){
_16b=this.getMSComponent(this.MSXML_XSLTEMPLATE);
}
return _16b;
},getLocalName:function(_16c){
var _16d=null;
if(_16c.localName){
_16d=_16c.localName.replace("ui:","");
}else{
if(_16c.baseName){
_16d=_16c.baseName;
}else{
_16d=_16c.nodeName.toLowerCase();
}
}
return _16d;
},getComputedStyle:function(_16e,_16f){
var _170=null;
if(Client.isExplorer){
if(_16e.currentStyle!=null){
_170=_16e.currentStyle[_16f];
}else{
this._logger.error("Could not compute style for element "+_16e.nodeName);
SystemDebug.stack(arguments);
}
}else{
var _171=_16e.ownerDocument.defaultView.getComputedStyle(_16e,null);
if(_171!=null){
_170=_171.getPropertyValue(_16f);
}else{
this._logger.error("Could not compute style for element "+_16e.nodeName);
SystemDebug.stack(arguments);
}
}
return _170;
},getMaxIndex:function(doc){
var max=0,_174=new List(doc.getElementsByTagName("*"));
_174.each(function(_175){
var _176=CSSComputer.getZIndex(_175);
if(_176>max){
max=_176;
}
});
return max;
},getOrdinalPosition:function(_177,_178){
var _179=null;
var _17a=-1;
var _17b=this.getLocalName(_177);
var _17c=new List(_177.parentNode.childNodes);
while(_17c.hasNext()){
var _17d=_17c.getNext();
if(_17d.nodeType==Node.ELEMENT_NODE){
if(!_178||this.getLocalName(_17d)==_17b){
_17a++;
if(_17d==_177||(_17d.id!=""&&_17d.id==_177.id)){
_179=_17a;
break;
}
}
}
}
return _179;
},isFirstElement:function(_17e,_17f){
return (this.getOrdinalPosition(_17e,_17f)==0);
},isLastElement:function(_180,_181){
var _182=_180.parentNode.getElementsByTagName(_181?this.getLocalName(_180):"*");
return (this.getOrdinalPosition(_180)==_182.length);
},getParentWindow:function(node){
var doc=node.nodeType==Node.DOCUMENT_NODE?node:node.ownerDocument;
return doc.defaultView?doc.defaultView:doc.parentWindow;
},getTextContent:function(node){
var _186=null;
if(node.textContent){
_186=node.textContent;
}else{
if(node.text){
_186=node.text;
}else{
_186=node.innerText;
}
}
return _186;
},setTextContent:function(node,text){
text=String(text);
if(node.textContent){
node.textContent=text;
}else{
if(node.text){
node.text=text;
}else{
node.innerText=text;
}
}
},getAncestorByLocalName:function(_189,node,_18b){
var _18c=null;
while(_18c==null){
node=node.parentNode;
if(node.nodeType==Node.DOCUMENT_NODE){
if(_18b==true){
var win=this.getParentWindow(node);
node=win.frameElement;
}else{
break;
}
}
if(this.getLocalName(node)==_189){
_18c=node;
}
}
return _18c;
},contains:function(_18e,node){
return _18e.contains?_18e!=node&&_18e.contains(node):!!(_18e.compareDocumentPosition(node)&16);
},createElementNS:function(_190,_191,_192){
var _193=null;
if(_192==null){
alert("DOMUtil#createElementNS : Missing argument (DOMDocument)");
}else{
if(Client.isMozilla){
_193=_192.createElementNS(_190,_191);
}else{
if(_192.xml!=null){
_193=_192.createNode(Node.ELEMENT_NODE,_191,_190);
}else{
_193=_192.createElement(_191.replace("ui:",""));
}
}
}
return _193;
},getElementsByTagName:function(node,_195){
var _196=null;
if(Client.isMozilla){
_196=node.getElementsByTagNameNS(Constants.NS_XHTML,_195);
}else{
_196=node.getElementsByTagName(_195);
}
return _196;
},getNextElementSibling:function(_197){
return Client.isExplorer?_197.nextSibling:_197.nextElementSibling;
},getPreviousElementSibling:function(_198){
return Client.isExplorer?_198.previousSibling:_198.previousElementSibling;
},cloneNode:function(node){
var _19a=null;
if(Client.isMozilla==true){
_19a=XMLParser.parse(DOMSerializer.serialize(node));
}else{
_19a=node.cloneNode(true);
}
return _19a;
},getLocalPosition:function(_19b){
var _19c=new Point(_19b.offsetLeft,_19b.offsetTop);
if(Client.isExplorer&&_19b.parentNode&&_19b.parentNode.currentStyle){
if(_19b.parentNode.currentStyle.position=="static"){
var _19d=this.getLocalPosition(_19b.parentNode);
_19c.x+=_19d.x;
_19c.y+=_19d.y;
}
}
return _19c;
},getGlobalPosition:function(_19e){
return this._getPosition(_19e,false);
},getUniversalPosition:function(_19f){
return this._getPosition(_19f,true);
},_getPosition:function(_1a0,_1a1){
var _1a2=null;
if(typeof _1a0.getBoundingClientRect!=Types.UNDEFINED){
var rect=_1a0.getBoundingClientRect();
_1a2={x:rect.left,y:rect.top};
if(Client.isMozilla){
_1a2.x-=_1a0.scrollLeft;
_1a2.y-=_1a0.scrollTop;
}
}else{
_1a2={x:_1a0.offsetLeft-_1a0.scrollLeft,y:_1a0.offsetTop-_1a0.scrollTop};
while(_1a0.offsetParent){
_1a0=_1a0.offsetParent;
_1a2.x+=(_1a0.offsetLeft-_1a0.scrollLeft);
_1a2.y+=(_1a0.offsetTop-_1a0.scrollTop);
}
}
if(_1a1){
var win=DOMUtil.getParentWindow(_1a0);
if(win){
var _1a5=win.frameElement;
if(_1a5){
var add=DOMUtil.getUniversalPosition(_1a5);
_1a2.x+=add.x;
_1a2.y+=add.y;
}
}
}
return new Point(_1a2.x,_1a2.y);
},getGlobalMousePosition:function(e){
return this._getMousePosition(e,false);
},getUniversalMousePosition:function(e){
return this._getMousePosition(e,true);
},_getMousePosition:function(e,_1aa){
var _1ab=DOMEvents.getTarget(e);
var _1ac={x:e.pageX?e.pageX:e.clientX,y:e.pageY?e.pageY:e.clientY};
if(Client.isMozilla){
var doc=_1ab.ownerDocument;
var win=this.getParentWindow(doc);
_1ac.x-=win.pageXOffset;
_1ac.y-=win.pageYOffset;
}
if(_1aa){
var _1af=this.getParentWindow(_1ab).frameElement;
if(_1af){
var add=this.getUniversalPosition(_1af);
_1ac.x+=add.x;
_1ac.y+=add.y;
}
}
return _1ac;
}};
var DOMUtil=new _DOMUtil();
function _XMLParser(){
}
_XMLParser.prototype={_logger:SystemLogger.getLogger("XMLParser"),_domParser:(window.DOMParser!=null&&window.XPathResult!=null?new DOMParser():null),parse:function(xml,_1b2){
var doc=null;
if(xml!=null){
if(this._domParser!=null){
try{
doc=this._domParser.parseFromString(xml,"text/xml");
}
catch(e){
alert(xml);
}
if(doc.documentElement.namespaceURI==Constants.NS_DOMPARSEERROR){
if(!_1b2){
this._logger.error(DOMSerializer.serialize(doc.documentElement,true));
if(Application.isDeveloperMode){
alert("XMLParser failed: \n\n"+DOMSerializer.serialize(doc.documentElement,true));
}
}
doc=null;
}
}else{
doc=DOMUtil.getDOMDocument();
doc.setProperty("ProhibitDTD",false);
doc.validateOnParse=false;
doc.async=false;
doc.loadXML(xml);
if(doc.parseError.errorCode!=0){
if(!_1b2){
this._logger.error("XMLParser failed!");
if(Application.isDeveloperMode){
alert("XMLParser failed!");
}
}
doc=null;
}
}
}else{
throw "XMLParser: No XML input to parse!";
}
return doc;
},isWellFormedDocument:function(xml,_1b5){
var _1b6=true;
var dec="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
if(xml.indexOf("<?xml ")==-1){
xml=dec+xml;
}
var _1b8=SourceValidationService.IsWellFormedDocument(xml);
if(_1b8!="True"){
_1b6=false;
if(_1b5==true){
this._illFormedDialog(_1b8);
}
}
return _1b6;
},isWellFormedFragment:function(xml,_1ba){
var _1bb=true;
var _1bc=SourceValidationService.IsWellFormedFragment(xml);
if(_1bc!="True"){
_1bb=false;
if(_1ba==true){
this._illFormedDialog(_1bc);
}
}
return _1bb;
},_illFormedDialog:function(_1bd){
setTimeout(function(){
if(Client.isWebKit){
alert(_1bd);
}else{
Dialog.error("Not well-formed",_1bd);
}
},0);
}};
var XMLParser=new _XMLParser();
function XPathResolver(){
this.logger=SystemLogger.getLogger("XPathResolver");
this._evaluator=window.XPathEvaluator?new XPathEvaluator():null;
this._nsResolver=null;
}
XPathResolver.prototype.setNamespacePrefixResolver=function(_1be){
if(this._evaluator){
this._nsResolver={lookupNamespaceURI:function(_1bf){
return _1be[_1bf];
}};
}else{
this._nsResolver=_1be;
}
};
XPathResolver.prototype.resolve=function(_1c0,node,_1c2){
var _1c3=null;
try{
if(this._evaluator){
_1c3=this._evaluateDOMXpath(_1c0,node,_1c2?true:false);
}else{
_1c3=this._evaluateMSXpath(_1c0,node,_1c2?true:false);
}
}
catch(exception){
alert("XPathResolver#resolve: "+exception);
if(exception.stack){
alert(exception.stack);
}else{
alert(arguments.caller.callee.toString());
}
throw exception;
}
return _1c3;
};
XPathResolver.prototype.resolveAll=function(_1c4,node){
return this.resolve(_1c4,node,true);
};
XPathResolver.prototype._evaluateDOMXpath=function(_1c6,node,_1c8){
var _1c9=null;
if(node){
var _1c9=this._evaluator.evaluate(_1c6,node,this._nsResolver,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);
if(_1c8){
var list=new List();
while((node=_1c9.iterateNext())!=null){
list.add(node);
}
_1c9=list;
}else{
_1c9=_1c9.iterateNext();
}
}else{
var cry="XPathResolver#_evaluateDOMXpath: No DOMNode to evaluate!";
if(Application.isDeveloperMode){
alert(cry);
}else{
this.logger.fatal(cry);
}
}
return _1c9;
};
XPathResolver.prototype._evaluateMSXpath=function(_1cc,node,_1ce){
var doc=(node.nodeType==Node.DOCUMENT_NODE?node:node.ownerDocument);
var _1d0="";
for(var _1d1 in this._nsResolver){
_1d0+="xmlns:"+_1d1+"=\""+this._nsResolver[_1d1]+"\" ";
}
doc.setProperty("SelectionNamespaces",_1d0);
if(_1ce){
var list=new List();
var i=0,_1d4=node.selectNodes(_1cc);
while(i<_1d4.length){
list.add(_1d4.item(i++));
}
result=list;
}else{
result=node.selectSingleNode(_1cc);
}
return result;
};
function XSLTransformer(){
this.logger=SystemLogger.getLogger("XSLTransformer");
this._processor=null;
this._cache=null;
}
XSLTransformer.prototype.importStylesheet=function(url){
var _1d6=this._import(Resolver.resolve(url));
if(Client.isMozilla){
this._processor=new XSLTProcessor();
this._processor.importStylesheet(_1d6);
}else{
this._cache=DOMUtil.getMSXMLXSLTemplate();
this._cache.stylesheet=_1d6;
}
};
XSLTransformer.prototype._import=function(url){
var _1d8=null;
if(Client.isMozilla){
var _1d9=DOMUtil.getXMLHTTPRequest();
_1d9.open("get",Resolver.resolve(url),false);
_1d9.send(null);
_1d8=_1d9.responseXML;
}else{
var _1d8=DOMUtil.getDOMDocument(true);
_1d8.async=false;
_1d8.load(url);
}
return _1d8;
};
XSLTransformer.prototype.transformToDocument=function(dom){
var _1db=null;
if(Client.isMozilla){
_1db=this._processor.transformToDocument(dom);
}else{
alert("TODO!");
}
return _1db;
};
XSLTransformer.prototype.transformToString=function(dom,_1dd){
var _1de=null;
if(Client.isMozilla){
var doc=this.transformToDocument(dom);
_1de=DOMSerializer.serialize(doc,_1dd);
}else{
var proc=this._cache.createProcessor();
proc.input=dom;
proc.transform();
_1de=proc.output;
}
return _1de;
};
function _CSSUtil(){
}
_CSSUtil.prototype={_getCurrent:function(_1e1){
var _1e2=_1e1.style?_1e1.className:_1e1.getAttribute("class");
_1e2=_1e2?_1e2:"";
return _1e2;
},_contains:function(_1e3,sub){
return _1e3.indexOf(sub)>-1;
},_attach:function(_1e5,sub){
return _1e5+(_1e5==""?"":" ")+sub;
},_detach:function(_1e7,sub){
if(this._contains(_1e7," "+sub)){
sub=" "+sub;
}
return _1e7.replace(sub,"");
},attachClassName:function(_1e9,_1ea){
if(_1e9.classList!=null){
if(!_1e9.classList.contains(_1ea)){
_1e9.classList.add(_1ea);
}
}else{
var _1eb=this._getCurrent(_1e9);
if(!this._contains(_1eb,_1ea)){
_1eb=this._attach(_1eb,_1ea);
}
if(_1e9.style!=null){
_1e9.className=_1eb;
}else{
_1e9.setAttribute("class",_1eb);
}
}
},detachClassName:function(_1ec,_1ed){
if(_1ec.classList!=null){
if(_1ec.classList.contains(_1ed)){
_1ec.classList.remove(_1ed);
}
}else{
var _1ee=this._getCurrent(_1ec);
if(this._contains(_1ee,_1ed)){
_1ee=this._detach(_1ee,_1ed);
}
if(_1ec.style!=null){
_1ec.className=_1ee;
}else{
if(_1ee==""){
_1ec.removeAttribute("class");
}else{
_1ec.setAttribute("class",_1ee);
}
}
}
},hasClassName:function(_1ef,_1f0){
var _1f1=false;
if(_1ef.classList!=null){
_1f1=_1ef.classList.contains(_1f0);
}else{
_1f1=this._contains(this._getCurrent(_1ef),_1f0);
}
return _1f1;
}};
var CSSUtil=new _CSSUtil();
function _CSSComputer(){
}
_CSSComputer.prototype={_margins:{top:Client.isExplorer?"marginTop":"margin-top",right:Client.isExplorer?"marginRight":"margin-right",bottom:Client.isExplorer?"marginBottom":"margin-bottom",left:Client.isExplorer?"marginLeft":"margin-left"},_paddings:{top:Client.isExplorer?"paddingTop":"padding-top",right:Client.isExplorer?"paddingRight":"padding-right",bottom:Client.isExplorer?"paddingBottom":"padding-bottom",left:Client.isExplorer?"paddingLeft":"padding-left"},_borders:{top:Client.isExplorer?"borderTopWidth":"border-top-width",right:Client.isExplorer?"borderRightWidth":"border-right-width",bottom:Client.isExplorer?"borderBottomWidth":"border-bottom-width",left:Client.isExplorer?"borderLeftWidth":"border-left-width"},_getComplexResult:function(_1f2,_1f3){
var _1f4={};
for(var _1f5 in _1f2){
var ent=parseInt(DOMUtil.getComputedStyle(_1f3,_1f2[_1f5]));
_1f4[_1f5]=isNaN(ent)?0:ent;
}
return _1f4;
},_getMargin:function(_1f7){
return this._getComplexResult(this._margins,_1f7);
},getPadding:function(_1f8){
return this._getComplexResult(this._paddings,_1f8);
},getBorder:function(_1f9){
return this._getComplexResult(this._borders,_1f9);
},getPosition:function(_1fa){
return DOMUtil.getComputedStyle(_1fa,"position");
},getFloat:function(_1fb){
return DOMUtil.getComputedStyle(_1fb,Client.isExplorer?"styleFloat":"float");
},getZIndex:function(_1fc){
return parseInt(DOMUtil.getComputedStyle(_1fc,Client.isExplorer?"zIndex":"z-index"));
},getBackgroundColor:function(_1fd){
return DOMUtil.getComputedStyle(_1fd,Client.isExplorer?"backgroundColor":"background-color");
}};
var CSSComputer=new _CSSComputer();
var System=new function(){
var _1fe=SystemLogger.getLogger("System");
var root=null;
this.hasActivePerspectives=false;
this.getRootNode=function(){
if(root==null){
root=new SystemNode(TreeService.GetRootElements("")[0]);
}
return root;
};
this.getPerspectiveNodes=function(){
var _200=new List();
var _201=TreeService.GetActivePerspectiveElements("dummy");
var list=new List(_201);
if(list.hasEntries()){
this.hasActivePerspectives=true;
list.each(function(_203){
_200.add(new SystemNode(_203));
});
}else{
EventBroadcaster.broadcast(BroadcastMessages.PERSPECTIVES_NONE);
}
return _200;
};
this.getChildNodes=function(node,_205){
var _206=new List();
var _207=null;
if(_205){
if(SearchTokens.hasToken(_205)){
_205=SearchTokens.getToken(_205);
}
_207=TreeService.GetElementsBySearchToken(node.getData(),_205);
}else{
_207=TreeService.GetElements(node.getData());
}
new List(_207).each(function(_208){
var _209=new SystemNode(_208);
if(_205){
_209.searchToken=_205;
}
_206.add(_209);
});
return _206;
};
this.getDescendantBranch=function(_20a){
var map=new Map();
var arg=[];
_20a.each(function(node){
arg.push({ProviderName:node.getProviderName(),EntityToken:node.getEntityToken(),Piggybag:node.getPiggyBag()});
});
var _20e=TreeService.GetMultipleChildren(arg);
var _20f=new List(_20e);
while(_20f.hasNext()){
this._listNodesInMap(_20f.getNext(),map);
}
return map;
};
this.getInvisibleBranch=function(_210,_211,_212){
var map=new Map();
var arg=[];
_212.each(function(node){
arg.push({ProviderName:node.getProviderName(),EntityToken:node.getEntityToken(),Piggybag:node.getPiggyBag()});
});
var _216=TreeService.FindEntityToken(_210,_211,arg);
if(_216 instanceof SOAPFault){
_1fe.error(_216.getFaultString());
if(Application.isDeveloperMode){
alert(_216.getFaultString());
}
map=null;
}else{
var _217=new List(_216);
while(_217.hasNext()){
this._listNodesInMap(_217.getNext(),map);
}
}
return map;
};
this._listNodesInMap=function(_218,map){
var list=new List();
var key=_218.ElementKey;
var _21c=new List(_218.ClientElements);
map.set(key,list);
while(_21c.hasNext()){
var _21d=_21c.getNext();
list.add(new SystemNode(_21d));
}
};
this.getChildNodesBySearchToken=function(node,_21f){
return this.getChildNodes(node,_21f);
};
this.getNamedRoots=function(key,_221){
var _222=new List();
var _223=null;
if(_221){
if(SearchTokens.hasToken(_221)){
_221=SearchTokens.getToken(_221);
}
_223=TreeService.GetNamedRootsBySearchToken(key,_221);
}else{
_223=TreeService.GetNamedRoots(key);
}
new List(_223).each(function(_224){
var node=new SystemNode(_224);
if(_221){
node.searchToken=_221;
}
_222.add(node);
});
return _222;
};
this.getNamedRootsBySearchToken=function(key,_227){
return this.getNamedRoots(key,_227);
};
function compileActionList(node,_229,_22a){
var _22b=_229.ClientElementActionGroupId;
if(_22b!=null){
var _22c=_22a.get(_22b).ClientElementActionGroupItems;
if(_22c&&_22c.length>0){
node.setActionList(new List(_22c));
}
}
}
};
SystemNode.dispose=function(node){
for(var prop in node){
node[prop]=null;
}
};
SystemNode.taggedNodes=new Map();
function SystemNode(data){
this.logger=SystemLogger.getLogger("SystemNode");
this._data=data;
this._actionProfile=null;
this._propertyBag=null;
this._registerSystemActions();
this.searchToken=null;
if(this._data.TagValue!=null){
SystemNode.taggedNodes.set(this._data.TagValue,this);
}
}
SystemNode.prototype.toString=function(){
return "[SystemNode]";
};
SystemNode.prototype._registerSystemActions=function(){
var self=this;
new List(this._data.ActionKeys).each(function(key){
if(!SystemAction.actionMap.has(key)){
new List(self._data.Actions).each(function(_232){
var _233=_232.ActionCategory.Name;
if(SystemAction.hasCategory(_233)){
var _234=new SystemAction(_232);
SystemAction.actionMap.set(_232.ActionKey,_234);
}else{
throw "No such action category: "+_233;
}
});
}
});
};
SystemNode.prototype.getData=function(){
return this._data;
};
SystemNode.prototype.getChildren=function(){
var _235=null;
if(this.searchToken){
_235=System.getChildNodesBySearchToken(this,this.searchToken);
}else{
_235=System.getChildNodes(this);
}
return _235;
};
SystemNode.prototype.getDescendantBranch=function(list){
return System.getDescendantBranch(list);
};
SystemNode.prototype.getLabel=function(){
return this._data.Label;
};
SystemNode.prototype.getProviderName=function(){
return this._data.ProviderName;
};
SystemNode.prototype.getEntityToken=function(){
return this._data.EntityToken;
};
SystemNode.prototype.getPiggyBag=function(){
var _237=this._data.Piggybag;
if(_237==null){
_237="";
}
return _237;
};
SystemNode.prototype.getHandle=function(){
return this._data.ElementKey;
};
SystemNode.prototype.getTag=function(){
return this._data.TagValue;
};
SystemNode.prototype.getImageProfile=function(size){
return new ImageProfile({image:ImageProvider.getImageURL(this._data.Icon,size),imageActive:ImageProvider.getImageURL(this._data.OpenedIcon?this._data.OpenedIcon:this._data.Icon,size)});
};
SystemNode.prototype.getToolTip=function(){
var _239=null;
if(typeof this._data.ToolTip!="undefined"){
_239=this._data.ToolTip;
}
return _239;
};
SystemNode.prototype.getPropertyBag=function(){
if(!this._propertyBag&&this._data.PropertyBag&&this._data.PropertyBag.length!=0){
var map={};
new List(this._data.PropertyBag).each(function(_23b){
map[_23b.Key]=_23b.Value;
});
this._propertyBag=map;
}
return this._propertyBag;
};
SystemNode.prototype.hasChildren=function(){
return this._data.HasChildren;
};
SystemNode.prototype.getActionProfile=function(){
if(this._actionProfile==null&&this._data.ActionKeys!=null&&this._data.ActionKeys.length>0){
var map=new Map();
var self=this;
new List(this._data.ActionKeys).each(function(key){
if(SystemAction.actionMap.has(key)){
var _23f=SystemAction.actionMap.get(key);
var _240=true;
if(_23f.getCategory()==SystemAction.categories.DeveloperMode){
if(!Application.isDeveloperMode){
_240=false;
}
}
if(_240){
var id=_23f.getGroupID();
if(!map.has(id)){
map.set(id,new List());
}
var list=map.get(id);
list.add(_23f);
}
}else{
throw "No details for action key: "+key;
}
});
this._actionProfile=map;
}
return this._actionProfile;
};
SystemNode.prototype.hasDragType=function(){
return this._data.DragType!=null;
};
SystemNode.prototype.getDragType=function(){
return this._data.DragType;
};
SystemNode.prototype.hasDragAccept=function(){
return this._data.DropTypeAccept!=null;
};
SystemNode.prototype.getDragAccept=function(){
return new List(this._data.DropTypeAccept);
};
SystemNode.prototype.hasDetailedDropSupport=function(){
return this._data.DetailedDropSupported==true;
};
SystemNode.prototype.isDisabled=function(){
return this._data.IsDisabled==true;
};
SystemNode.prototype.isTreeLockEnabled=function(){
return this._data.TreeLockEnabled==true;
};
SystemNode.prototype.dispose=function(){
SystemNode.dispose(this);
};
SystemAction.OPEN_DOCUMENT="OpenDocument";
SystemAction.OPEN_MODAL_DIALOG="OpenModalDialog";
SystemAction.TAG_CHANGEFROMLANGUAGE="ChangeFromLocale";
SystemAction.categories={Edit:"Edit",Add:"Add",Delete:"Delete",Other:"Other",DeveloperMode:"DeveloperMode"};
SystemAction.activePositions={NavigatorTree:1,SelectorTree:2};
SystemAction.taggedActions=new Map();
SystemAction.actionMap=new Map();
SystemAction.invoke=function(_243,arg){
var node=arg;
if(node instanceof SystemNode){
Application.lock(SystemAction);
_243.logger.debug("Execute \""+_243.getLabel()+"\" on \""+node.getLabel()+"\".");
setTimeout(function(){
TreeService.ExecuteSingleElementAction(node.getData(),_243.getHandle(),Application.CONSOLE_ID);
MessageQueue.update();
Application.unlock(SystemAction);
},0);
}else{
throw "Multiple actiontargets not supported.";
}
};
SystemAction.invokeTagged=function(_246,_247){
action=SystemAction.taggedActions.get(_246);
node=SystemNode.taggedNodes.get(_247);
SystemAction.invoke(action,node);
};
SystemAction.hasCategory=function(_248){
return SystemAction.categories[_248]?true:false;
};
function SystemAction(_249){
this.logger=SystemLogger.getLogger("SystemAction");
this._data=_249;
if(this._data.TagValue!=null){
SystemAction.taggedActions.set(this._data.TagValue,this);
}
}
SystemAction.prototype.toString=function(){
return "[SystemAction]";
};
SystemAction.prototype.getHandle=function(){
return this._data.ActionToken;
};
SystemAction.prototype.getKey=function(){
return this._data.ActionKey;
};
SystemAction.prototype.getLabel=function(){
return this._data.Label;
};
SystemAction.prototype.getImage=function(){
return ImageProvider.getImageURL(this._data.Icon);
};
SystemAction.prototype.getDisabledImage=function(){
return null;
};
SystemAction.prototype.getToolTip=function(){
return this._data.ToolTip;
};
SystemAction.prototype.getCategory=function(){
return this._data.ActionCategory.Name;
};
SystemAction.prototype.getGroupID=function(){
return this._data.ActionCategory.GroupId;
};
SystemAction.prototype.getActivePositions=function(){
return this._data.ActivePositions;
};
SystemAction.prototype.isInToolBar=function(){
return this._data.ActionCategory.IsInToolbar;
};
SystemAction.prototype.isInFolder=function(){
return this._data.ActionCategory.IsInFolder;
};
SystemAction.prototype.getFolderName=function(){
var _24a=null;
if(this.isInFolder()){
_24a=this._data.ActionCategory.FolderName;
}
return _24a;
};
SystemAction.prototype.isDisabled=function(){
return this._data.Disabled;
};
SystemAction.prototype.isCheckBox=function(){
return typeof this._data.CheckboxStatus!=Types.UNDEFINED;
};
SystemAction.prototype.getTag=function(){
var _24b=null;
if(typeof this._data.TagValue!="undefined"){
_24b=this._data.TagValue;
}
return _24b;
};
SystemAction.prototype.isChecked=function(){
var _24c=null;
if(this.isCheckBox()){
_24c=this._data.CheckboxStatus=="Checked";
}else{
throw "Not a checkbox!";
}
return _24c;
};
function _UpdateManager(){
var _24d=null;
if(!window.UpdateManager){
this._construct();
_24d=this;
}
return _24d;
}
_UpdateManager.prototype={version:"0.1",CLASSNAME_FORM:"updateform",CLASSNAME_ZONE:"updatezone",CLASSNAME_GONE:"updategone",EVENT_BEFOREUPDATE:"beforeupdate",EVENT_AFTERUPDATE:"afterupdate",EVENT_ERRORUPDATE:"errorupdate",xhtml:null,summary:null,isEnabled:true,isDebugging:false,isUpdating:false,hasSoftAttributes:false,hasSoftSiblings:false,pendingResponse:null,currentDOM:null,errormessage:null,_assistant:null,_updates:null,_replaced:null,_dotnetnames:["__VIEWSTATE","__EVENTVALIDATION","__EVENTTARGET","__EVENTARGUMENT","__LASTFOCUS"],plugins:[],toString:function(){
return "[object UpdateManager]";
},_construct:function(_24e){
var root=document.documentElement;
var _250=root.namespaceURI;
if(_250==null){
_250=new String(root.getAttribute("xmlns"));
}
if(_250=="http://www.w3.org/1999/xhtml"){
this._addListener(window,"load");
this._addListener(window,"unload");
}else{
this.error("Not an XHTML document!");
}
},_setup:function(){
if(this.isEnabled){
this.isEnabled=this.setupForms();
if(this.isEnabled){
if(this.xhtml!=null){
if(typeof this.xhtml=="string"){
var _251=decodeURIComponent(this.xhtml);
this.currentDOM=UpdateAssistant.parse(_251);
}else{
throw new TypeError();
}
}else{
var _252=this;
UpdateAssistant.getXMLHttpRequest("get",window.location.toString(),{handleResponse:function(dom){
_252.currentDOM=dom;
}}).send(null);
}
}
}
},setupForms:function(){
var _254=false;
Array.forEach(document.forms,function(form){
if(form.className.indexOf(this.CLASSNAME_FORM)>-1){
if(!form.__isSetup){
this._setupForm(form);
form.__isSetup=true;
}
_254=true;
}
},this);
return _254;
},_setupForm:function(form){
var _257=this;
this._addListener(form,"submit");
form.__submit=form.submit;
form.submit=function(){
if(_257.isEnabled){
_257._submit(form);
}else{
form.__submit();
}
return false;
};
},_addListener:function(_258,type){
if(_258.addEventListener!=null){
_258.addEventListener(type,this,false);
}else{
var _25a=this;
_258.attachEvent("on"+type,function(){
_25a.handleEvent(window.event);
});
}
},handleEvent:function(e){
switch(e.type){
case "load":
if(this.isEnabled){
this._setup();
}
break;
case "unload":
this.isEnabled=false;
break;
case "submit":
if(this.isEnabled){
if(document.all){
e.returnValue=false;
}else{
e.preventDefault();
}
var form=e.target?e.target:e.srcElement;
this._submit(form);
}
break;
}
},_submit:function(form){
if(!this.isUpdating){
this.isUpdating=true;
UpdateAssistant.dispatchEvent(document.documentElement,this.EVENT_BEFOREUPDATE);
this._postRequest(form);
}
},handleResponse:function(dom){
if(this.isEnabled){
this.summary=new String("");
this.errors=new String("");
if(dom!=null){
var _25f=UpdateAssistant.getUpdateZones(dom);
var _260=UpdateAssistant.getUpdateZones(this.currentDOM);
this._updates=[];
this._replaced={};
_25f.forEach(function(_261,_262){
var _263=_260[_262];
this._crawl(_261,_263);
},this);
this._updates.forEach(function(_264,_265){
_264.update();
_264.dispose();
},this);
this._dotnetnames.forEach(function(name){
this._fixdotnet(dom,name);
},this);
this.currentDOM=dom;
}
}
this.isUpdating=false;
UpdateAssistant.dispatchEvent(document.documentElement,this.EVENT_AFTERUPDATE);
},handleSimilarResponse:function(){
UpdateAssistant.dispatchEvent(document.documentElement,this.EVENT_AFTERUPDATE);
},_crawl:function(_267,_268,_269,id){
var _26b=true;
var _26c=_268.getAttribute("class");
if(_26c==null||_26c.indexOf(this.CLASSNAME_GONE)==-1){
if(_268.nodeType==Node.ELEMENT_NODE){
var _26d=_268.getAttribute("id");
if(_26d!=null){
_269=_267;
id=_26d;
}
}
if(_26b=this._check(_267,_268,_269,id)){
var _26e=_267.firstChild;
var _26f=_268.firstChild;
while(_26e!=null&&_26f!=null&&!this._replaced[id]){
switch(_26e.nodeType){
case Node.TEXT_NODE:
_26b=this._check(_26e,_26f,_269,id);
break;
case Node.DOCUMENT_NODE:
case Node.ELEMENT_NODE:
_26b=this._crawl(_26e,_26f,_269,id);
break;
}
if(this._replaced[id]){
_26b=false;
}else{
_26e=_26e.nextSibling;
_26f=_26f.nextSibling;
}
}
}
}
return _26b;
},_check:function(_270,_271,_272,id){
var _274=true;
var _275=null;
var _276=false;
var _277=false;
if((_270!=null&&_271==null)||(_270==null&&_271!=null)){
_274=false;
}else{
if(_274=_270.nodeType==_271.nodeType){
switch(_271.nodeType){
case Node.ELEMENT_NODE:
if(_270.namespaceURI!=_271.namespaceURI||_270.nodeName!=_271.nodeName){
_274=false;
}else{
if(_274=(_270.nodeName==_271.nodeName)){
var _278=_271.getAttribute("id");
var _279=_270.getAttribute("id");
if(_278!=null&&_279!=null){
if(_278!=_279){
_274=false;
}else{
if((_275=this._getPlugin(_270,_271))!=null){
if(_275.updateElement(_270,_271)){
_277=true;
_274=false;
}
}
}
}
if(_274){
if(_274=this._checkAttributes(_270,_271)){
if(this.hasSoftSiblings&&this._hasSoftChildren(_270)&&this._hasSoftChildren(_271)){
if(this._validateSoftChildren(_270,_271)){
this._updateSoftChildren(_270,_271);
_276=true;
}
_274=false;
}else{
_274=_270.childNodes.length==_271.childNodes.length;
}
}
}
}
}
break;
case Node.TEXT_NODE:
if(_270.data.trim()!=_271.data.trim()){
_274=false;
}
break;
}
}
}
if(_274==false&&!_276&&!_277){
if(id!=null&&_272!=null){
this.addUpdate(new ReplaceUpdate(id,_272));
}
}
return _274;
},_checkAttributes:function(_27a,_27b){
var _27c=true;
var _27d=false;
var _27e=_27a.attributes;
var _27f=_27b.attributes;
if(_27e.length!=_27f.length){
_27d=true;
}else{
_27d=!Array.every(_27e,function(att1,i){
var att2=_27f.item(i);
return att1.nodeName==att2.nodeName&&att1.nodeValue==att2.nodeValue;
});
}
if(_27d){
var _283=_27a.getAttribute("id");
var _284=_27b.getAttribute("id");
if(this.hasSoftAttributes&&_283!=null&&_283==_284){
this.addUpdate(new AttributesUpdate(_284,_27a,_27b));
}else{
_27c=false;
}
}
return _27c;
},_hasSoftChildren:function(_285){
var _286=true;
if(_285.hasChildNodes()){
_286=Array.every(_285.childNodes,function(node){
var res=true;
switch(node.nodeType){
case Node.TEXT_NODE:
res=!/[^\t\n\r ]/.test(node.nodeValue);
break;
case Node.ELEMENT_NODE:
res=node.getAttribute("id")!=null;
break;
}
return res;
});
}
return _286;
},_validateSoftChildren:function(_289,_28a){
var _28b=true;
var _28c=-1;
var _28d=-1;
var _28e=-1;
var news=this._toMap(_289.childNodes,true);
var olds=this._toMap(_28a.childNodes,true);
for(var id in olds){
if(_28b){
var _292=olds[id];
_28b=_292>=_28c;
if(news[id]!=null){
_28e=news[id];
_28b=_28e>=_28d;
}
}
_28c=_292;
if(_28e>-1){
_28d=_28e;
}
}
return _28b;
},_updateSoftChildren:function(_293,_294){
var news=this._toMap(_293.childNodes);
var olds=this._toMap(_294.childNodes);
for(var id in olds){
if(news[id]==null){
this.addUpdate(new SiblingUpdate(Update.TYPE_REMOVE,id,null,null));
}else{
this._crawl(news[id],olds[id]);
}
}
var _298=null;
for(id in news){
if(olds[id]==null){
var _299=news[id];
if(_298==null){
var _29a=_294.getAttribute("id");
this.addUpdate(new SiblingUpdate(Update.TYPE_INSERT,_29a,_299,true));
}else{
this.addUpdate(new SiblingUpdate(Update.TYPE_INSERT,_298,_299,false));
}
}
_298=id;
}
},addUpdate:function(_29b){
this._updates.push(_29b);
if(_29b instanceof ReplaceUpdate){
this._replaced[_29b.id]=true;
}
},_getPlugin:function(_29c,_29d){
var _29e=null;
this.plugins.every(function(_29f){
if(_29f.handleElement(_29c,_29d)){
_29e=_29f;
}
return _29e==null;
});
return _29e;
},_toMap:function(_2a0,_2a1){
var _2a2={};
Array.forEach(_2a0,function(node,_2a4){
if(node.nodeType==Node.ELEMENT_NODE){
_2a2[node.getAttribute("id")]=_2a1?_2a4:node;
}
});
return _2a2;
},_getPost:function(form){
var _2a6=new String("");
if(form!=null){
var last="";
Array.forEach(form.elements,function(_2a8){
var name=_2a8.name;
var _2aa=encodeURIComponent(_2a8.value);
switch(_2a8.type){
case "button":
case "submit":
var _2ab=UpdateAssistant.getActiveElement();
if(_2a8==_2ab&&name!=""){
_2a6+=name+"="+_2aa+"&";
}
break;
case "radio":
if(_2a8.checked){
_2a6+=name+"="+_2aa+"&";
}
break;
case "checkbox":
if(_2a8.checked){
if(_2a8.name==last){
if(_2a6.lastIndexOf("&")==_2a6.length-1){
_2a6=_2a6.substr(0,_2a6.length-1);
}
_2a6+=","+_2aa;
}else{
_2a6+=name+"="+_2a8.value;
}
last=name;
_2a6+="&";
}
break;
case "text":
case "hidden":
case "password":
case "textarea":
case "select-one":
_2a6+=name+"="+_2aa+"&";
break;
}
});
}
return _2a6.substr(0,_2a6.length-1);
},_postRequest:function(form){
var _2ad=form.method!=""?form.method:"get";
var _2ae=form.action!=""?form.action:window.location.toString();
var _2af=this._getPost(form);
if(_2ad=="get"){
if(_2ae.indexOf("?")>-1){
_2ae=_2ae+"&"+_2af;
}else{
_2ae+"?"+_2af;
}
}
var _2b0=this;
var _2b1=UpdateAssistant.getXMLHttpRequest(_2ad,_2ae,this);
if(_2ad=="post"){
_2b1.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
}
_2b1.send(_2ad=="post"?_2af:null);
},_fixdotnet:function(dom,id){
var _2b4=document.getElementById(id);
if(_2b4!=null){
var _2b5=UpdateAssistant.getElementById(dom,id);
if(_2b5!=null){
var _2b6=_2b5.getAttribute("value");
if(_2b6!==_2b4.value){
_2b4.value=_2b6;
}
}
}
},debug:function(out){
if(this.isDebugging){
alert("UpdateManager dysfunction. \n\n"+out);
}
},error:function(out){
this.errorsmessage=out;
UpdateAssistant.dispatchEvent(document.documentElement,UpdateManager.EVENT_ERRORUPDATE);
this.debug(out);
},report:function(_2b9){
this.summary+=_2b9+"\n";
}};
var UpdateManager=new _UpdateManager();
function _UpdateAssistant(){
var _2ba=null;
if(!window.UpdateAssistant){
this._construct();
_2ba=this;
}
return _2ba;
}
_UpdateAssistant.prototype={_serializer:window.XMLSerializer!=null?new XMLSerializer():null,_parser:(window.DOMParser!=null&&window.XPathResult!=null)?new DOMParser():null,_activeElement:null,_construct:function(){
if(!window.Node){
window.Node={ELEMENT_NODE:1,TEXT_NODE:3,DOCUMENT_NODE:9};
}
if(!Array.every){
Array.every=function(_2bb,fun){
var _2bd=true;
var len=_2bb.length>>>0;
if(typeof fun!="function"){
throw new TypeError();
}else{
var _2bf=arguments[2];
for(var i=0;i<len;i++){
if(typeof _2bb[i]!="undefined"){
if(!fun.call(_2bf,_2bb[i],i,_2bb)){
_2bd=false;
break;
}
}
}
}
return _2bd;
};
}
if(!Array.prototype.every){
Array.prototype.every=function(fun){
var _2c2=arguments[1];
return Array.every(this,fun,_2c2);
};
}
if(!Array.forEach){
Array.forEach=function(_2c3,fun){
var len=_2c3.length>>>0;
if(typeof fun!="function"){
throw new TypeError();
}else{
var _2c6=arguments[2];
for(var i=0;i<len;i++){
if(typeof _2c3[i]!="undefined"){
fun.call(_2c6,_2c3[i],i,_2c3);
}
}
}
};
}
if(!Array.prototype.forEach){
Array.prototype.forEach=function(fun){
var _2c9=arguments[1];
Array.forEach(this,fun,_2c9);
};
}
if(!String.prototype.trim){
String.prototype.trim=function(){
return this.replace(/^\s*/,"").replace(/\s*$/,"");
};
}
if(document.addEventListener!=null){
document.addEventListener("focus",this,false);
document.addEventListener("blur",this,false);
document.addEventListener("mousedown",this,false);
}
},handleEvent:function(e){
switch(e.type){
case "focus":
case "mousedown":
this._activeElement=e.target;
break;
case "blur":
if(this._activeElement==e.target){
this._activeElement=null;
}
break;
}
},getXMLHttpRequest:function(_2cb,_2cc,_2cd){
var _2ce=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Msxml2.XMLHTTP.3.0");
if(_2ce!=null){
_2ce.open(_2cb,_2cc,(_2cd!=null?true:false));
if(_2cd!=null){
function action(){
if(_2ce.readyState==4){
var text=_2ce.responseText;
UpdateManager.pendingResponse=text;
var dom=UpdateAssistant.parse(text);
if(dom!=null){
_2cd.handleResponse(dom);
}
}
}
if(_2ce.addEventListener!=null){
_2ce.addEventListener("readystatechange",{handleEvent:function(){
action();
}},false);
}else{
_2ce.onreadystatechange=action;
}
}
}
return _2ce;
},dispatchEvent:function(_2d1,name){
var _2d3=true;
var _2d4=document.createEvent("UIEvents");
_2d4.initEvent(name,true,true);
_2d3=_2d1.dispatchEvent(_2d4);
return _2d3;
},getUpdateZones:function(dom){
var _2d6="//*[@id and contains(@class,'updatezone')]";
var _2d7=[];
var _2d8=null;
var _2d9=null;
if(window.XPathResult!=null){
var type=XPathResult.ORDERED_NODE_ITERATOR_TYPE;
_2d8=dom.evaluate(_2d6,dom,null,type,null);
while((_2d9=_2d8.iterateNext())!=null){
_2d7.push(_2d9);
}
}else{
_2d8=dom.documentElement.selectNodes(_2d6);
Array.forEach(_2d8,function(_2db){
_2d7.push(_2db);
});
}
return _2d7;
},getElementById:function(dom,id){
var _2de="//*[@id='"+id+"']";
var _2df=null;
var _2e0=null;
if(window.XPathResult!=null){
var type=XPathResult.FIRST_ORDERED_NODE_TYPE;
_2df=dom.evaluate(_2de,dom,null,type,null);
_2e0=_2df.singleNodeValue;
}else{
_2e0=dom.documentElement.selectNodes(_2de)[0];
}
return _2e0;
},_getIds:function(dom){
var _2e3="//*[@id]";
var _2e4=null;
var _2e5=[];
if(window.XPathResult!=null){
var type=XPathResult.ORDERED_NODE_ITERATOR_TYPE;
_2e4=dom.evaluate(_2e3,dom,null,type,null);
while((element=_2e4.iterateNext())!=null){
_2e5.push(element.getAttribute("id"));
}
}else{
_2e4=dom.documentElement.selectNodes(_2e3);
Array.forEach(_2e4,function(_2e7){
_2e5.push(_2e7.getAttribute("id"));
});
}
return _2e5;
},toHTMLElement:function(_2e8){
var _2e9=this.serialize(_2e8);
var temp=document.createElement("temp");
temp.innerHTML=_2e9;
return temp.firstChild;
},getActiveElement:function(){
var _2eb=document.activeElement;
if(_2eb==null||_2eb==document.body){
_2eb=this._activeElement;
}
return _2eb;
},serialize:function(_2ec){
var _2ed=null;
if(_2ec.xml!=null){
_2ed=_2ec.xml;
}else{
if(this._serializer!=null){
_2ed=this._serializer.serializeToString(_2ec);
}
}
return _2ed;
},hasDifferences:function(_2ee,_2ef){
var s1=null;
var s2=null;
if(_2ee.xml!=null){
s1=_2ee.xml;
s2=_2ef.xml;
}else{
if(this._serializer!=null){
s1=this._serializer.serializeToString(_2ee);
s2=this._serializer.serializeToString(_2ef);
}
}
return s1!=s2;
},parse:function(_2f2){
var _2f3=null;
if(this._parser!=null&&window.XPathResult!=null){
_2f3=this._parser.parseFromString(_2f2,"text/xml");
}else{
_2f3=new ActiveXObject("Msxml2.DOMDocument.3.0");
_2f3.setProperty("SelectionLanguage","XPath");
_2f3.loadXML(_2f2);
}
return this._validate(_2f3);
},_validate:function(dom){
var out=null;
if(dom.parseError!=null&&dom.parseError.errorCode!=0){
out=dom.parseError.reason;
}else{
var _2f6=dom.getElementsByTagName("parsererror").item(0);
if(_2f6!=null){
out=_2f6.textContent.replace(/\^/g,"").replace(/\-/g,"");
}
}
if(out==null){
var has={},ids=this._getIds(dom);
ids.every(function(id){
var _2fa=!has[id];
has[id]=true;
if(!_2fa){
out="Element \""+id+"\" encountered twice.";
}
return _2fa;
});
}
if(out!=null){
UpdateManager.error(out);
dom=null;
}
return dom;
}};
var UpdateAssistant=new _UpdateAssistant();
function UpdatePlugin(){
this.handleElement=function(_2fb,_2fc){
var _2fd=false;
switch(_2fb.nodeName.toLowerCase()){
case "input":
case "textarea":
switch(_2fb.getAttribute("id")){
case "__EVENTTARGET":
case "__EVENTARGUMENT":
case "__VIEWSTATE":
case "__EVENTVALIDATION":
_2fd=false;
break;
}
break;
}
return _2fd;
};
this.updateElement=function(_2fe,_2ff){
var id=_2fe.getAttribute("id");
var _301=document.getElementById(id);
if(_301!=null){
var _302=null;
switch(_301.nodeName.toLowerCase()){
case "input":
_302=_2fe.getAttribute("value");
break;
case "textarea":
_302=_2fe.textContent?_2fe.textContent:_2fe.text;
break;
}
if(_302==null){
_302="";
}
if(_302!=_301.value){
_301.value=_302;
UpdateManager.report("Property [value] updated on field \""+id+"\"");
}
}
return true;
};
}
UpdateManager.plugins.push(new UpdatePlugin());
Update.TYPE_REPLACE="replace";
Update.TYPE_ATTRIBUTES="attributes";
Update.TYPE_REMOVE="remove";
Update.TYPE_INSERT="insert";
Update.EVENT_BEFOREUPDATE="beforeupdate";
Update.EVENT_AFTERUPDATE="afterupdate";
function Update(){
return this;
}
Update.prototype={type:null,key:null,id:null,element:null,update:function(){
},dispose:function(){
this.element=null;
},_beforeUpdate:function(_303){
var _304=true;
if(_303!=null){
_303.__updateType=this.type;
_304=UpdateAssistant.dispatchEvent(_303,Update.EVENT_BEFOREUPDATE);
}
return _304;
},_afterUpdate:function(_305){
var _306=true;
if(_305!=null){
_305.__updateType=this.type;
_306=UpdateAssistant.dispatchEvent(_305,Update.EVENT_AFTERUPDATE);
}
return _306;
}};
ReplaceUpdate.prototype=new Update();
ReplaceUpdate.superclass=Update.prototype;
function ReplaceUpdate(id,_308){
this.type=Update.TYPE_REPLACE;
this.id=id;
this.element=_308;
return this;
}
ReplaceUpdate.prototype.update=function(){
var _309,_30a,_30b=UpdateAssistant.toHTMLElement(this.element);
if((_309=document.getElementById(this.id))!=null){
if((_30a=_309.parentNode)!=null){
var _30c=UserInterface.getBinding(_309);
if(_30c!=null){
_30b.__isAttached=_30c.isAttached;
}
if(this._beforeUpdate(_309)){
_30a.replaceChild(_30b,_309);
this._afterUpdate(_30b);
}
}
}else{
UpdateManager.error("Element null point: "+this.id);
}
};
ReplaceUpdate.prototype._afterUpdate=function(_30d){
var _30e=ReplaceUpdate.superclass._afterUpdate.call(this,_30d);
UpdateManager.report("Replaced element id=\""+this.id+"\"");
if(_30d.nodeName=="form"||_30d.getElementsByTagName("form").item(0)!=null){
UpdateManager.setupForms();
}
return _30e;
};
SiblingUpdate.prototype=new Update();
SiblingUpdate.superclass=Update.prototype;
function SiblingUpdate(type,id,_311,_312){
this.type=type;
this.id=id;
this.element=_311;
this.isFirst=_312;
return this;
}
SiblingUpdate.prototype.update=function(){
var _313=document.getElementById(this.id);
switch(this.type){
case Update.TYPE_REMOVE:
this._remove(_313);
break;
case Update.TYPE_INSERT:
this._insert(this.element,_313);
break;
}
};
SiblingUpdate.prototype._remove=function(_314){
var _315=_314.parentNode;
if(_315!=null){
if(this._beforeUpdate(_314)){
_315.removeChild(_314);
this._afterUpdate(_315);
}
}
};
SiblingUpdate.prototype._insert=function(_316,_317){
var _318=UpdateAssistant.toHTMLElement(_316);
if(this.isFirst){
var _319=_317;
if(_319!=null){
if(this._beforeUpdate(_319)){
_319.insertBefore(_318,_319.firstChild);
this._afterUpdate(_318);
}
}
}else{
var _319=_317.parentNode;
if(_319!=null){
if(this._beforeUpdate(_319)){
_319.insertBefore(_318,_317.nextSibling);
this._afterUpdate(_318);
}
}
}
};
SiblingUpdate.prototype._beforeUpdate=function(_31a){
var _31b=SiblingUpdate.superclass._beforeUpdate.call(this,_31a);
if(this.type==Update.TYPE_REMOVE){
UpdateManager.report("Removed element id=\""+_31a.id+"\"");
}
return _31b;
};
SiblingUpdate.prototype._afterUpdate=function(_31c){
var _31d=true;
if(_31c!=null){
_31d=SiblingUpdate.superclass._afterUpdate.call(this,_31c);
if(this.type==Update.TYPE_INSERT){
UpdateManager.report("Inserted element id=\""+_31c.id+"\"");
if(_31c.nodeName=="form"||_31c.getElementsByTagName("form").item(0)!=null){
UpdateManager.setupForms();
}
}
}
return _31d;
};
AttributesUpdate.prototype=new Update();
AttributesUpdate.superclass=Update.prototype;
AttributesUpdate.prototype.currentElement=null;
function AttributesUpdate(id,_31f,_320){
this.type=type=Update.TYPE_ATTRIBUTES;
this.id=id;
this.element=_31f;
this.currentElement=_320;
this._summary=[];
return this;
}
AttributesUpdate.prototype.update=function(){
var _321=document.getElementById(this.id);
if(this._beforeUpdate(_321)){
this._updateAttributes(_321);
this._afterUpdate(_321);
}
};
AttributesUpdate.prototype._updateAttributes=function(_322){
Array.forEach(this.element.attributes,function(_323){
var _324=this.currentElement.getAttribute(_323.nodeName);
if(_324==null||_324!=_323.nodeValue){
this._setAttribute(_322,_323.nodeName,_323.nodeValue);
this._summary.push("@"+_323.nodeName);
}
},this);
Array.forEach(this.currentElement.attributes,function(_325){
if(this.element.getAttribute(_325.nodeName)==null){
this._setAttribute(_322,_325.nodeName,null);
this._summary.push("@"+_325.nodeName);
}
},this);
};
AttributesUpdate.prototype._setAttribute=function(_326,name,_328){
if(_326==null){
alert(this.id+": "+document.getElementById(this.id)+"\n\n"+name+"="+_328);
SystemLogger.getLogger("AttributesUpdate").fine(document.body.innerHTML);
}
var _329=(_328==null);
if(_329){
_326.removeAttribute(name);
}else{
_326.setAttribute(name,_328);
}
if(document.all!=null){
if(_329){
_328="";
}
switch(name.toLowerCase()){
case "class":
_326.className=_328;
break;
case "disabled":
_326.disabled=!_329;
break;
case "checked":
_326.checked=!_329;
break;
case "readonly":
_326.readOnly=!_329;
break;
}
}
};
AttributesUpdate.prototype._afterUpdate=function(_32a){
AttributesUpdate.superclass._afterUpdate.call(this,_32a);
UpdateManager.report("Attributes updated on element id=\""+this.id+"\": "+this._summary.toString());
};
AttributesUpdate.prototype.dispose=function(){
Update.prototype.dispose.call(this);
this.currentElement=null;
};
if(!window.Node){
window.Node={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12};
}
window.KeyEventCodes={VK_BACK:8,VK_TAB:9,VK_ENTER:13,VK_SHIFT:16,VK_CONTROL:17,VK_ALT:null,VK_ESCAPE:27,VK_SPACE:32,VK_PAGE_UP:33,VK_PAGE_DOWN:34,VK_END:35,VK_HOME:36,VK_LEFT:37,VK_UP:38,VK_RIGHT:39,VK_DOWN:40,VK_INSERT:null,VK_DELETE:127,VK_PLUS:187,VK_MINUS:189,VK_NUMPLUS:107,VK_NUMMINUS:109,VK_F1:112};
if(window==top){
window.app=this;
}else{
window.app=top.app;
}
window.bindingMap={};
window.standardEventHandler=null;
if(window!=window.top){
top.Application.declareTopLocal(window);
}
function _WindowManager(){
this._construct(KeyMaster.getUniqueKey());
}
_WindowManager.prototype={WINDOW_LOADED_BROADCAST:null,WINDOW_UNLOADED_BROADCAST:null,WINDOW_EVALUATED_BROADCAST:null,WINDOW_RESIZED_BROADCAST:null,isWindowLoaded:false,_logger:SystemLogger.getLogger("WindowManager ["+document.title+"]"),_ondomstatements:new List(),_onloadstatements:new List(),_onresizestatements:new List(),_currentDimensions:null,_newDimensions:null,_broadcastTimeout:null,_isHorizontalResize:false,_isVerticalResize:false,_broadcastTimeout:null,_compute:function(_32b,key){
return _32b.replace("${windowkey}",document.location+":"+key);
},_construct:function(key){
this.WINDOW_LOADED_BROADCAST=this._compute(BroadcastMessages.$WINKEY_LOADED,key);
this.WINDOW_UNLOADED_BROADCAST=this._compute(BroadcastMessages.$WINKEY_UNLOADED,key);
this.WINDOW_EVALUATED_BROADCAST=this._compute(BroadcastMessages.$WINKEY_EVALUATED,key);
this.WINDOW_RESIZED_BROADCAST=this._compute(BroadcastMessages.$WINKEY_RESIZED,key);
DOMEvents.addEventListener(window,DOMEvents.DOM,this);
DOMEvents.addEventListener(window,DOMEvents.LOAD,this);
DOMEvents.addEventListener(window,DOMEvents.UNLOAD,this);
},handleEvent:function(e){
switch(e.type){
case DOMEvents.DOM:
this.onDOMContentLoaded();
break;
case DOMEvents.LOAD:
if(!this.isWindowLoaded){
this.isWindowLoaded=true;
EventBroadcaster.broadcast(this.WINDOW_LOADED_BROADCAST,this);
while(this._onloadstatements.hasNext()){
this._onloadstatements.getNext().fireOnLoad();
}
this._currentDimensions=this.getWindowDimensions();
DOMEvents.addEventListener(window,DOMEvents.RESIZE,this);
EventBroadcaster.broadcast(this.WINDOW_EVALUATED_BROADCAST,this);
DOMEvents.removeEventListener(window,DOMEvents.LOAD,this);
DOMEvents.stopPropagation(e);
}
break;
case DOMEvents.RESIZE:
if(window==top){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,document.body);
}
this._onresizestatements.reset();
while(this._onresizestatements.hasNext()){
this._onresizestatements.getNext().fireOnResize();
}
this._newDimensions=WindowManager.getWindowDimensions();
var _32f=this._newDimensions.w!=this._currentDimensions.w;
var _330=this._newDimensions.h!=this._currentDimensions.h;
if(_32f||_330){
if(this._broadcastTimeout!=null){
clearTimeout(this._broadcastTimeout);
this._broadcastTimeout=null;
}
var self=this;
this._broadcastTimeout=setTimeout(function(){
self._broadcastResizeEvent();
},250);
}
break;
case DOMEvents.UNLOAD:
EventBroadcaster.broadcast(this.WINDOW_UNLOADED_BROADCAST);
break;
}
},_broadcastResizeEvent:function(){
clearTimeout(this._broadcastTimeout);
this._broadcastTimeout=null;
EventBroadcaster.broadcast(this.WINDOW_RESIZED_BROADCAST);
this._currentDimensions=this._newDimensions;
},fireOnDOM:function(_332){
if(Interfaces.isImplemented(IDOMHandler,_332,true)){
this._ondomstatements.add(_332);
}
},fireOnLoad:function(_333){
if(Interfaces.isImplemented(ILoadHandler,_333,true)){
this._onloadstatements.add(_333);
}
},fireOnResize:function(_334){
if(Interfaces.isImplemented(IResizeHandler,_334,true)){
this._onresizestatements.add(_334);
}
},onDOMContentLoaded:function(){
while(this._ondomstatements.hasNext()){
this._ondomstatements.getNext().fireOnDOM();
}
},getWindowDimensions:function(){
return new Dimension(Client.isMozilla?window.innerWidth:document.body.clientWidth,Client.isMozilla?window.innerHeight:document.body.clientHeight);
},evaluate:function(_335){
return eval(_335);
}};
var WindowManager=new _WindowManager();
new function WindowAssistant(){
if(Client.isExplorer){
WindowManager.onDOMContentLoaded();
}
};
top.app=null;
function _Application(){
this._construct();
}
_Application.prototype={CONSOLE_ID:KeyMaster.getUniqueKey(),_TIMEOUT_LOSTFOCUS:250,logger:SystemLogger.getLogger("Application"),timer:SystemTimer.getTimer("Application"),isDeveloperMode:false,isLocalHost:false,hasExternalConnection:false,isLoggedIn:false,isLoggedOut:false,isLocked:false,hasStartPage:true,isMalFunctional:false,isOperational:false,isShuttingDown:false,isOffLine:false,isFocused:true,isBlurred:false,_isMousePositionTracking:false,_mousePosition:null,_cursorStartPoint:null,_isDragging:false,_isShutDownAllowed:true,_lockers:0,_lockthings:{},_isRegistered:null,_activeBinding:null,_activatedBindings:new List(),_dirtyTabs:new Map(),_topLevelClasses:typeof topLevelClassNames!="undefined"?new List(topLevelClassNames):null,_construct:function(){
EventBroadcaster.subscribe(WindowManager.WINDOW_EVALUATED_BROADCAST,{handleBroadcast:function(){
try{
Application.initialize();
}
catch(exception){
SystemDebug.stack(arguments);
throw (exception);
}
}});
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMLOG_OPENED,{handleBroadcast:function(_336,_337){
SystemLogger.unsuspend(_337);
}});
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMLOG_CLOSED,{handleBroadcast:function(){
SystemLogger.suspend();
}});
EventBroadcaster.subscribe(BroadcastMessages.STAGE_INITIALIZED,{handleBroadcast:function(){
if(Application.isDeveloperMode){
StageBinding.handleViewPresentation("Composite.Management.SystemLog");
StageBinding.handleViewPresentation("Composite.Management.Developer");
}
setTimeout(function(){
ProgressBarBinding.notch(4);
Application.isOperational=true;
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_OPERATIONAL);
},PageBinding.TIMEOUT);
}});
EventBroadcaster.subscribe(BroadcastMessages.KEY_ESCAPE,{handleBroadcast:function(){
if(Application.isLocked){
Application.unlock(Application,true);
}
}});
EventBroadcaster.subscribe(BroadcastMessages.SERVER_OFFLINE,{handleBroadcast:function(){
Application.isOffLine=true;
}});
EventBroadcaster.subscribe(BroadcastMessages.SERVER_ONLINE,{handleBroadcast:function(){
Application.isOffLine=false;
}});
EventBroadcaster.subscribe(BroadcastMessages.DOCKTAB_DIRTY,{handleBroadcast:function(_338,arg){
var list=Application._dirtyTabs;
list.set(arg.key,arg);
if(list.countEntries()==1){
var _33b=top.app.bindingMap.broadcasterHasDirtyTabs;
_33b.enable();
}
}});
EventBroadcaster.subscribe(BroadcastMessages.DOCKTAB_CLEAN,{handleBroadcast:function(_33c,arg){
var list=Application._dirtyTabs;
list.del(arg.key);
if(list.countEntries()==0){
var _33f=top.app.bindingMap.broadcasterHasDirtyTabs;
_33f.disable();
}
}});
},toString:function(){
return "[Application]";
},login:function(){
this.isLoggedIn=true;
ConfigurationService=WebServiceProxy.createProxy(Constants.URL_WSDL_CONFIGURATION);
ConsoleMessageQueueService=WebServiceProxy.createProxy(Constants.URL_WSDL_MESSAGEQUEUE);
EditorConfigurationService=WebServiceProxy.createProxy(Constants.URL_WSDL_EDITORCONFIG);
FlowControllerService=WebServiceProxy.createProxy(Constants.URL_WSDL_FLOWCONTROLLER);
StringService=WebServiceProxy.createProxy(Constants.URL_WSDL_STRINGSERVICE);
TreeService=WebServiceProxy.createProxy(Constants.URL_WSDL_TREESERVICE);
SecurityService=WebServiceProxy.createProxy(Constants.URL_WSDL_SECURITYSERVICE);
XhtmlTransformationsService=WebServiceProxy.createProxy(Constants.URL_WSDL_XHTMLTRANSFORM);
LocalizationService=WebServiceProxy.createProxy(Constants.URL_WSDL_LOCALIZATION);
SourceValidationService=WebServiceProxy.createProxy(Constants.URL_WSDL_SOURCEVALIDATION);
MarkupFormatService=WebServiceProxy.createProxy(Constants.URL_WSDL_MARKUPFORMAT);
PageService=WebServiceProxy.createProxy(Constants.URL_WSDL_PAGESERVICE);
ProgressBarBinding.notch(4);
function next(){
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_LOGIN);
}
if(Client.isWebKit){
setTimeout(function(){
next();
},0);
}else{
next();
}
},logout:function(){
var _340=false;
if(this.isLoggedIn){
this.isLoggedIn=false;
this.isLoggedOut=true;
_340=LoginService.Logout(true);
if(!_340){
alert("Logout failed.");
}
}
return _340;
},lock:function(_341){
if(_341!=null){
this._lockthings[_341]=true;
if(top.bindingMap.mastercover!=null){
if(this._lockers>=0){
this._lockers++;
if(this._lockers==1){
this.isLocked=true;
top.bindingMap.mastercover.show();
if(top.app!=null&&top.app.bindingMap.throbber!=null){
top.app.bindingMap.throbber.play();
}
}
}
}
}else{
throw "Application: No locker specified.";
}
},unlock:function(_342,_343){
if(_342!=null){
delete this._lockthings[_342];
if(top.bindingMap.mastercover!=null){
if(_343||this._lockers>0){
if(_343){
var out="Unlocked by "+new String(_342)+"\n";
for(var _345 in this._lockthings){
out+="Locked by "+new String(_345)+". ";
}
this.logger.debug(out);
this._lockers=0;
}else{
this._lockers--;
}
if(this._lockers==0){
this.isLocked=false;
top.bindingMap.mastercover.hide();
if(top.app!=null&&top.app.bindingMap.throbber!=null){
setTimeout(function(){
top.app.bindingMap.throbber.stop();
},250);
}
}
}
}
}else{
throw "Application: No unlocker specified.";
}
},hasLock:function(_346){
return this._lockthings[_346]==true;
},activate:function(_347){
var _348=this._activeBinding;
this._activeBinding=_347;
this._activatedBindings.add(_347);
if(_348&&_348.isActive){
_348.deActivate();
}
},deActivate:function(_349){
var _34a=null;
var _34b=null;
if(_349==this._activeBinding){
while(!_34b&&this._activatedBindings.hasEntries()){
_34a=this._activatedBindings.extractLast();
if(_34a!=_349&&_34a.isActivatable){
_34b=_34a;
}
}
if(!_34b){
_34b=app.bindingMap.explorerdock;
}
_34b.activate();
}
},focused:function(_34c){
this.isFocused=_34c;
if(_34c){
if(this.isBlurred){
this.isBlurred=false;
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_FOCUSED);
}
}else{
setTimeout(function(){
if(!Application.isFocused){
Application.isBlurred=true;
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_BLURRED);
}
},Application._TIMEOUT_LOSTFOCUS);
}
},initialize:function(){
DOMEvents.addEventListener(top,DOMEvents.UNLOAD,{handleEvent:function(e){
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_ONSHUTDOWN);
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_SHUTDOWN);
if(!Application.isShuttingDown){
Application.isShuttingDown=true;
if(FlowControllerService!=null){
FlowControllerService.ReleaseAllConsoleResources(Application.CONSOLE_ID);
}
}
if(this.isLoggedIn&&!Application.isDeveloperMode){
Application.logout();
}
}});
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_STARTUP);
},cancelShutDown:function(){
this._isShutDownAllowed=false;
},framework:function(doc){
var win=DOMUtil.getParentWindow(doc);
if(win!=null){
if(!win.standardEventHandler){
win.standardEventHandler=new StandardEventHandler(doc);
}else{
}
}
},normalize:function(doc){
},handleAction:function(_351){
switch(_351.type){
case Application.REFRESH:
this.refresh();
break;
}
},declareTopLocal:function(win){
var _353=Resolver.resolve("/scripts/source/top/");
if(this._topLevelClasses==null){
this._topLevelClasses=new List();
var self=this;
new List(DOMUtil.getElementsByTagName(document,"script")).each(function(_355){
var src=_355.src;
if(src.indexOf(_353)>-1){
var name=src.substring(src.lastIndexOf("/")+1,src.lastIndexOf(".js"));
self._topLevelClasses.add(name);
}
});
}
this._topLevelClasses.each(function(name){
if(window[name]!=null){
win[name]=window[name];
}
});
},trackMousePosition:function(e){
var _35a=false;
if(this._isMousePositionTracking){
_35a=true;
if(Client.isExplorer&&e.button!=1){
_35a=false;
}
if(_35a){
this._mousePosition=DOMUtil.getUniversalMousePosition(e);
}
}
return _35a;
},enableMousePositionTracking:function(e){
if(e){
this._isMousePositionTracking=true;
this._mousePosition=DOMUtil.getUniversalMousePosition(e);
}else{
throw new Error("Application: MouseEvent undefined.");
}
},disableMousePositionTracking:function(){
this._isMousePositionTracking=false;
this._mouseposition=null;
},getMousePosition:function(){
return this._mousePosition;
},onDragStart:function(_35c){
var _35d=BindingDragger.draggedBinding;
if(Interfaces.isImplemented(IDraggable,_35d,true)==true){
if(!this._isDragging){
app.bindingMap.dragdropcursor.setImage(_35d.getImage());
this._cursorStartPoint=_35c;
app.bindingMap.dragdropcursor.setPosition(this._cursorStartPoint);
CursorBinding.fadeIn(app.bindingMap.dragdropcursor);
if(_35d.showDrag){
_35d.showDrag();
}
EventBroadcaster.broadcast(BroadcastMessages.TYPEDRAG_START,_35d.dragType);
this._isDragging=true;
}
}
},onDrag:function(diff){
if(this._isDragging){
var _35f=new Point(this._cursorStartPoint.x+diff.x,this._cursorStartPoint.y+diff.y);
app.bindingMap.dragdropcursor.setPosition(_35f);
}
},onDragStop:function(diff){
if(this._isDragging){
var _361=BindingDragger.draggedBinding;
if(_361.hideDrag){
_361.hideDrag();
}
EventBroadcaster.broadcast(BroadcastMessages.TYPEDRAG_STOP,_361.dragType);
this._isDragging=false;
_361=BindingAcceptor.acceptingBinding;
if(_361!=null){
if(Interfaces.isImplemented(IAcceptable,_361,true)==true){
_361.accept(BindingDragger.draggedBinding);
}else{
throw new Error("Application: IAcceptable not implemented "+_361);
}
BindingAcceptor.acceptingBinding=null;
CursorBinding.fadeOut(app.bindingMap.dragdropcursor);
}else{
app.bindingMap.dragdropcursor.hide();
}
}
},reload:function(_362){
if(this.isDeveloperMode||_362){
if(this.isDeveloperMode&&Client.isPrism){
Prism.clearCache();
}
Application.lock(Application);
setTimeout(function(){
top.window.location.reload(true);
},0);
}else{
if(Application.isOperational){
Dialog.question(StringBundle.getString("ui","Website.Application.DialogReload.Title"),StringBundle.getString("ui","Website.Application.DialogReload.Text"),Dialog.BUTTONS_ACCEPT_CANCEL,{handleDialogResponse:function(_363){
if(_363==Dialog.RESPONSE_ACCEPT){
Application.reload(true);
}
}});
}else{
Application.reload(true);
}
}
},quit:function(){
Application.isShuttingDown=true;
if(FlowControllerService!=null){
FlowControllerService.ReleaseAllConsoleResources(Application.CONSOLE_ID);
}
if(this.logout()){
top.close();
top.bindingMap.logoutcover.show();
}
},hasDirtyDockTabs:function(){
return this._dirtyTabs.countEntries()>0;
},getDirtyDockTabsTabs:function(){
return this._dirtyTabs;
}};
var Application=new _Application();
function _Installation(){
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_KICKSTART,this);
}
_Installation.prototype={versionString:null,versionPrettyString:null,installationID:null,handleBroadcast:function(_364){
switch(_364){
case BroadcastMessages.APPLICATION_KICKSTART:
var list=new List(InstallationService.GetInstallationInfo(true));
list.each(function(_366){
switch(_366.Key){
case "ProductVersion":
this.versionString=_366.Value;
break;
case "ProductTitle":
this.versionPrettyString=_366.Value;
break;
case "InstallationId":
this.installationID=_366.Value;
break;
}
},this);
break;
}
}};
var Installation=new _Installation();
function _Keyboard(){
}
_Keyboard.prototype={_logger:SystemLogger.getLogger("Keyboard"),isShiftPressed:false,isControlPressed:false,keyEnter:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_ENTER);
},keyEscape:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_ESCAPE);
},keySpace:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_SPACE);
},keyShift:function(){
this.isShiftPressed=true;
EventBroadcaster.broadcast(BroadcastMessages.KEY_SHIFT_DOWN);
},keyControl:function(){
this.isControlPressed=true;
EventBroadcaster.broadcast(BroadcastMessages.KEY_CONTROL_DOWN);
},keyArrow:function(key){
EventBroadcaster.broadcast(BroadcastMessages.KEY_ARROW,key);
},keyAlt:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_ALT);
},keyTab:function(){
EventBroadcaster.broadcast(BroadcastMessages.KEY_TAB);
},keyUp:function(e){
if(this.isShiftPressed&&e.keyCode==window.KeyEventCodes.VK_SHIFT){
this.isShiftPressed=false;
EventBroadcaster.broadcast(BroadcastMessages.KEY_SHIFT_UP);
}else{
if(this.isControlPressed&&e.keyCode==window.KeyEventCodes.VK_CONTROL){
this.isControlPressed=false;
EventBroadcaster.broadcast(BroadcastMessages.KEY_CONTROL_UP);
}
}
}};
var Keyboard=new _Keyboard();
function _Audio(){
this._construct();
}
_Audio.prototype={SPLASH:"${root}/audio/splash.mp3",LOGIN:"${root}/audio/login.mp3",FATAL:"${root}/audio/fatal.mp3",_logger:SystemLogger.getLogger("Audio"),_audio:null,isInitialized:false,isEnabled:false,_construct:function(){
if(!Client.hasFlash){
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_KICKSTART,{handleBroadcast:function(){
Audio.initialize(null);
}});
}
},initialize:function(_369){
if(!this.isInitialized){
this.isInitialized=true;
if(_369){
this._audio=_369;
this.isEnabled=true;
}
EventBroadcaster.broadcast(BroadcastMessages.AUDIO_INITIALIZED);
}
},play:function(url){
var _36b=false;
if(this.isEnabled&&Preferences.getPref("audio")){
this._audio.fromURL(Resolver.resolve(url));
_36b=true;
}
return _36b;
}};
var Audio=new _Audio();
window.Preferences=new function(){
var _36c=SystemLogger.getLogger("Preferences");
this.AUDIO="audio";
this.LOGIN="login";
var _36d={"audio":true,"login":true};
EventBroadcaster.subscribe(BroadcastMessages.LOCALSTORE_INITIALIZED,{handleBroadcast:function(){
if(LocalStore.isEnabled){
var _36e=LocalStore.getProperty(LocalStore.PREFERENCES);
if(_36e){
for(var key in _36e){
_36d[key]=_36e[key];
}
debug(true);
}else{
debug(false);
}
}else{
debug(false);
}
}});
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_SHUTDOWN,{handleBroadcast:function(){
if(LocalStore.isEnabled){
LocalStore.setProperty(LocalStore.PREFERENCES,_36d);
}
}});
this.getPref=function(key){
var _371=null;
if(key){
_371=_36d[key];
}else{
throw "No such preference.";
}
return _371;
};
this.setPref=function(key,_373){
if(key){
_36d[key]=_373;
}else{
throw "No such preference.";
}
};
function debug(_374){
var _375=_374?"Persisted preferences":"No persisted preferences. Using defaults";
_375+=":\n";
for(var key in _36d){
var pref=_36d[key];
_375+="\n\t"+key+": "+pref+" ["+typeof pref+"]";
}
_36c.fine(_375);
}
};
function _Persistance(){
}
_Persistance.prototype={_logger:SystemLogger.getLogger("Persistance"),_persistance:null,_isEnabled:false,isInitialized:false,isEnabled:false,getPersistedProperty:function(id,prop){
var _37a=null;
if(this.isInitialized==true){
if(this._persistance){
var _37b=this._persistance[id];
if(_37b){
_37a=_37b[prop];
}
}
}else{
throw "Persistance not initialized!";
}
return _37a;
},setPersistedProperty:function(id,prop,_37e){
if(this.isInitialized==true){
if(this._persistance){
if(_37e!=null){
if(!this._persistance[id]){
this._persistance[id]={};
}
this._persistance[id][prop]=String(_37e);
}else{
this._logger.error("Cannot persist "+prop+" with value: null");
}
}
}else{
throw "Persistance not initialized!";
}
},clearAllPersistedProperties:function(){
this._logger.debug("TODO: clearAllPersistedProperties");
},handleBroadcast:function(_37f){
switch(_37f){
case BroadcastMessages.APPLICATION_SHUTDOWN:
var _380=top.bindingMap.persistance;
_380.persist(this._persistance);
break;
}
},initialize:function(){
if(!this.isInitialized){
this.isInitialized=true;
if(this._isEnabled==true){
var _381=top.bindingMap.persistance;
var map=_381.getPersistanceMap();
if(map){
this.isEnabled=true;
this._persistance=map;
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_SHUTDOWN,this);
}
}else{
this.isEnabled=false;
}
EventBroadcaster.broadcast(BroadcastMessages.PERSISTANCE_INITIALIZED);
}
}};
var Persistance=new _Persistance();
var LocalStore=new function(){
this.isInitialized=true;
this.isEnabled=false;
};
StandardEventHandler.isBackAllowed=false;
function StandardEventHandler(doc,_384){
this.logger=SystemLogger.getLogger("StandardEventHandler ["+doc.title+"]");
this._contextDocument=doc;
this._contextWindow=DOMUtil.getParentWindow(doc);
this.hasNativeKeys=false;
this._isAllowTabs=false;
this._isMouseHandlerOnly=_384;
this._addListeners();
}
StandardEventHandler.prototype._addListeners=function(){
var doc=this._contextDocument;
DOMEvents.addEventListener(doc,DOMEvents.MOUSEDOWN,this);
DOMEvents.addEventListener(doc,DOMEvents.MOUSEUP,this);
DOMEvents.addEventListener(doc,DOMEvents.MOUSEMOVE,this);
if(Client.isExplorer){
DOMEvents.addEventListener(this._contextDocument,DOMEvents.HELP,{handleEvent:function(e){
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
}});
DOMEvents.addEventListener(this._contextWindow,DOMEvents.HELP,{handleEvent:function(e){
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
}});
}
if(!this._isMouseHandlerOnly){
DOMEvents.addEventListener(doc,DOMEvents.KEYDOWN,this);
DOMEvents.addEventListener(doc,DOMEvents.KEYUP,this);
if(this._contextWindow.WindowManager==null){
if(Client.isExplorer){
DOMEvents.addEventListener(doc,DOMEvents.FOCUSIN,this);
DOMEvents.addEventListener(doc,DOMEvents.FOCUSOUT,this);
}else{
if(this._contextDocument.designMode!="on"){
DOMEvents.addEventListener(doc,DOMEvents.FOCUS,this,true);
DOMEvents.addEventListener(doc,DOMEvents.BLUR,this,true);
}
}
}
var _388={handleEvent:function(e){
switch(e.type){
case DOMEvents.BLUR:
Application.focused(false);
break;
case DOMEvents.FOCUS:
Application.focused(true);
break;
}
}};
DOMEvents.addEventListener(this._contextWindow,DOMEvents.BLUR,_388);
DOMEvents.addEventListener(this._contextWindow,DOMEvents.FOCUS,_388);
}
if(Client.isMozilla){
doc.addEventListener(DOMEvents.KEYDOWN,{handleEvent:function(e){
var s=83;
if(e.ctrlKey&&e.keyCode==s){
e.preventDefault();
}
}},true);
}
};
StandardEventHandler.prototype.handleEvent=function(e){
switch(e.type){
case DOMEvents.MOUSEDOWN:
this._handleMouseDown(e);
break;
case DOMEvents.MOUSEUP:
this._handleMouseUp(e);
break;
case DOMEvents.MOUSEMOVE:
this._handleMouseMove(e);
break;
case DOMEvents.KEYDOWN:
this._handleKeyDown(e);
break;
case DOMEvents.KEYUP:
this._handleKeyUp(e);
break;
case DOMEvents.FOCUS:
case DOMEvents.BLUR:
case DOMEvents.FOCUSIN:
case DOMEvents.FOCUSOUT:
this._handleFocus(e);
break;
}
};
StandardEventHandler.prototype._handleMouseDown=function(e){
Application.trackMousePosition(e);
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,e);
if(e.button!=ButtonStateManager.RIGHT_BUTTON){
var node=DOMEvents.getTarget(e);
while(node!=null){
switch(node.nodeType){
case Node.ELEMENT_NODE:
var _38f=UserInterface.getBinding(node);
if(_38f!=null){
_38f.dispatchAction(Binding.ACTION_ACTIVATED);
}
node=_38f!=null?null:node.parentNode;
break;
case Node.DOCUMENT_NODE:
node=DOMUtil.getParentWindow(node).frameElement;
break;
default:
node=null;
break;
}
}
}
};
StandardEventHandler.prototype._handleMouseUp=function(e){
Application.trackMousePosition(e);
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEUP,e);
};
StandardEventHandler.prototype._handleMouseMove=function(e){
try{
var _392=Application.trackMousePosition(e);
if(_392){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEMOVE,e);
}
}
catch(exception){
DOMEvents.removeEventListener(this._contextDocument,DOMEvents.MOUSEMOVE,this);
throw (exception);
}
};
StandardEventHandler.prototype._handleKeyDown=function(e,_394){
if(e.keyCode==KeyEventCodes.VK_TAB){
if(!this._isAllowTabs){
if(!_394){
this._handleTab(e);
DOMEvents.preventDefault(e);
}
}else{
if(e.shiftKey||e.ctrlKey){
DOMEvents.preventDefault(e);
}
}
_394=true;
}
if(!this.hasNativeKeys&&!e.shiftKey&&!e.ctrlKey){
switch(e.keyCode){
case KeyEventCodes.VK_UP:
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_LEFT:
case KeyEventCodes.VK_RIGHT:
case KeyEventCodes.VK_SPACE:
case KeyEventCodes.VK_PAGE_UP:
case KeyEventCodes.VK_PAGE_DOWN:
}
}
if(e.keyCode==KeyEventCodes.VK_BACK){
if(!StandardEventHandler.isBackAllowed||UserInterface.hasBinding(e.target)){
DOMEvents.preventDefault(e);
}
}
var _395=KeySetBinding.handleKey(this._contextDocument,e);
if(!_395){
switch(e.keyCode){
case KeyEventCodes.VK_PAGE_UP:
case KeyEventCodes.VK_PAGE_DOWN:
break;
default:
var _396=this._contextWindow.frameElement;
if(_396!=null){
var _397=DOMUtil.getParentWindow(_396);
if(_397.standardEventHandler!=null){
_397.standardEventHandler._handleKeyDown(e,_394);
}
}
break;
}
}
};
StandardEventHandler.prototype._handleTab=function(e){
if(!this._isAllowTabs){
if(!e.ctrlKey){
if(e.shiftKey){
FocusBinding.navigatePrevious();
}else{
FocusBinding.navigateNext();
}
}
}
};
StandardEventHandler.prototype._handleFocus=function(e){
var _39a=false;
var _39b=DOMEvents.getTarget(e);
var name=_39b.nodeName.toLowerCase();
switch(name){
case "input":
case "textarea":
case "select":
_39a=(e.type==DOMEvents.FOCUS||e.type==DOMEvents.FOCUSIN);
if(name=="input"||name=="textarea"){
StandardEventHandler.isBackAllowed=_39a;
}
if(_39a){
if(!this.hasNativeKeys){
this.enableNativeKeys();
}
}else{
if(this.hasNativeKeys){
this.disableNativeKeys();
}
}
break;
}
};
StandardEventHandler.prototype._handleKeyUp=function(e){
Keyboard.keyUp(e);
};
StandardEventHandler.prototype.enableNativeKeys=function(_39e){
this._isAllowTabs=(_39e==true?true:false);
var self=this;
top.setTimeout(function(){
self.hasNativeKeys=true;
StandardEventHandler.isBackAllowed=true;
},0);
};
StandardEventHandler.prototype.disableNativeKeys=function(){
this._isAllowTabs=false;
this.hasNativeKeys=false;
StandardEventHandler.isBackAllowed=false;
};
Action.isValid=function(type){
return typeof type!=Types.UNDEFINED;
};
function Action(_3a1,type){
this.target=_3a1;
this.type=type;
this.listener=null;
this.isConsumed=false;
this.isCancelled=false;
}
Action.prototype.consume=function(){
this.isConsumed=true;
};
Action.prototype.cancel=function(){
this.isCancelled=true;
};
Animation.DEFAULT_TIME=parseInt(250);
function Animation(_3a3){
this.id=KeyMaster.getUniqueKey();
this.interval=25;
this.iterator=0;
this.modifier=1;
this.endcount=90;
for(var _3a4 in _3a3){
this[_3a4]=_3a3[_3a4];
}
}
Animation.prototype.play=function(){
if(!this.isPlaying){
var self=this;
this._nextframe=function(){
window[this.id]=setTimeout(function(){
self.play();
},this.interval);
};
this.onstart(this.iterator);
this._nextframe();
this.isPlaying=true;
}else{
if(this.modifier>0?this.iterator>=this.endcount:this.iterator<=this.endcount){
this.stop();
}else{
var it1=this.iterator;
var it2=this.onstep(this.iterator);
if(it2&&it2!=it1){
this.iterator=it2;
}else{
this.iterator+=this.modifier;
}
this._nextframe();
}
}
};
Animation.prototype.stop=function(){
this.onstop(this.iterator);
this.isPlaying=false;
};
Animation.prototype.onstart=function(_3a8){
};
Animation.prototype.onstep=function(_3a9){
};
Animation.prototype.onstop=function(_3aa){
};
Point.isEqual=function(p1,p2){
var _3ad=false;
if(p1&&p2){
_3ad=(p1.x==p2.x)&&(p1.y==p2.y);
}
return _3ad;
};
function Point(x,y){
this.x=x;
this.y=y;
}
Point.prototype={x:0,y:0};
Dimension.isEqual=function(dim1,dim2){
var _3b2=false;
if(dim1&&dim2){
_3b2=(dim1.w==dim2.w)&&(dim1.h==dim2.h);
}
return _3b2;
};
function Dimension(w,h){
this.w=w;
this.h=h;
}
Dimension.prototype={w:0,h:0};
function Geometry(x,y,w,h){
this.x=x;
this.y=y;
this.w=w;
this.h=h;
}
BindingAcceptor.acceptingBinding=null;
function BindingAcceptor(_3b9){
this.logger=SystemLogger.getLogger("BindingDragger");
this._binding=_3b9;
this._acceptedList={};
this._isAccepting=false;
this._corsor=null;
this._initialize();
return this;
}
BindingAcceptor.prototype._initialize=function(){
EventBroadcaster.subscribe(BroadcastMessages.TYPEDRAG_START,this);
EventBroadcaster.subscribe(BroadcastMessages.TYPEDRAG_STOP,this);
if(this._binding.dragAccept){
EventBroadcaster.subscribe(BroadcastMessages.TYPEDRAG_PAUSE,this);
var _3ba=new List(this._binding.dragAccept.split(" "));
while(_3ba.hasNext()){
var type=_3ba.getNext();
this._acceptedList[type]=true;
}
}
};
BindingAcceptor.prototype.handleBroadcast=function(_3bc,arg){
var type=arg;
try{
switch(_3bc){
case BroadcastMessages.TYPEDRAG_START:
if(this._cursor==null){
this._cursor=app.bindingMap.dragdropcursor;
}
this._binding.addEventListener(DOMEvents.MOUSEENTER,this);
this._binding.addEventListener(DOMEvents.MOUSELEAVE,this);
if(this.isAccepting(type)){
this._isAccepting=true;
this._startAccepting();
}
break;
case BroadcastMessages.TYPEDRAG_STOP:
this._binding.removeEventListener(DOMEvents.MOUSEENTER,this);
this._binding.removeEventListener(DOMEvents.MOUSELEAVE,this);
if(this.isAccepting(type)){
this._isAccepting=false;
this._stopAccepting();
}
break;
case BroadcastMessages.TYPEDRAG_PAUSE:
if(this.isAccepting(type)){
this._pauseAccepting();
}
break;
}
}
catch(exception){
this.logger.debug(exception);
}
};
BindingAcceptor.prototype.isAccepting=function(type){
return Types.isDefined(this._acceptedList[type]);
};
BindingAcceptor.prototype._startAccepting=function(){
if(Types.isFunction(this._binding.showGeneralAcceptance)){
this._binding.showGeneralAcceptance();
}
};
BindingAcceptor.prototype._pauseAccepting=function(){
if(this._binding.hideAcceptance){
this._binding.hideAcceptance();
}
this._cursor.hideAcceptance();
BindingAcceptor.acceptingBinding=null;
};
BindingAcceptor.prototype._stopAccepting=function(){
if(this._binding.hideGeneralAcceptance){
this._binding.hideGeneralAcceptance();
}
if(this._binding.hideAcceptance){
this._binding.hideAcceptance();
}
};
BindingAcceptor.prototype.handleEvent=function(e){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
if(this._isAccepting){
if(BindingAcceptor.acceptingBinding!=this._binding){
BindingAcceptor.acceptingBinding=this._binding;
this._cursor.showAcceptance();
if(Types.isFunction(this._binding.showAcceptance)){
this._binding.showAcceptance();
}
}
}else{
EventBroadcaster.broadcast(BroadcastMessages.TYPEDRAG_PAUSE);
DOMEvents.stopPropagation(e);
}
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
if(this._isAccepting){
BindingAcceptor.acceptingBinding=null;
this._cursor.hideAcceptance();
if(Types.isFunction(this._binding.hideAcceptance)){
this._binding.hideAcceptance();
}
}else{
DOMEvents.stopPropagation(e);
}
break;
}
DOMEvents.stopPropagation(e);
};
BindingAcceptor.prototype.dispose=function(){
EventBroadcaster.unsubscribe(BroadcastMessages.TYPEDRAG_START,this);
EventBroadcaster.unsubscribe(BroadcastMessages.TYPEDRAG_STOP,this);
};
function BindingBoxObject(_3c1){
this._domElement=_3c1.getBindingElement();
}
BindingBoxObject.prototype.getUniversalPosition=function(){
return DOMUtil.getUniversalPosition(this._domElement);
};
BindingBoxObject.prototype.getGlobalPosition=function(){
return DOMUtil.getGlobalPosition(this._domElement);
};
BindingBoxObject.prototype.getLocalPosition=function(){
return DOMUtil.getLocalPosition(this._domElement);
};
BindingBoxObject.prototype.getDimension=function(){
var rect=this._domElement.getBoundingClientRect();
return new Dimension(rect.right-rect.left,rect.bottom-rect.top);
};
BindingBoxObject.prototype.dispose=function(){
this._domElement=null;
};
BindingDragger.isDragging=false;
BindingDragger.draggedBinding=null;
BindingDragger.bindingDragger=null;
function BindingDragger(_3c3){
this.logger=SystemLogger.getLogger("BindingDragger");
this.binding=_3c3;
this.isDragReady=false;
this.isDragging=false;
this.startPoint=null;
this.currentEvent=null;
}
BindingDragger.prototype.handleEvent=function(e){
if(e.type==DOMEvents.MOUSEUP){
this.isDragReady=false;
}else{
if(!BindingDragger.isDragging){
switch(e.type){
case DOMEvents.MOUSEDOWN:
if(!DOMEvents.isRightButton(e)){
this.isDragReady=true;
DOMEvents.preventDefault(e);
}
break;
case DOMEvents.MOUSEMOVE:
if(this.isDragReady==true){
this.binding.dispatchAction(Binding.ACTION_DRAG);
if(this.handler){
this.onDragStart(e);
}
this.isDragReady=false;
}
break;
}
}
}
};
BindingDragger.prototype.registerHandler=function(_3c5){
if(Interfaces.isImplemented(IDragHandler,_3c5)==true){
this.handler=_3c5;
}else{
throw new Error("BindingDragger: Interface IDraghandler not implemented.");
}
};
BindingDragger.prototype.onDragStart=function(e){
if(!this.isDragging){
Application.enableMousePositionTracking(e);
this.startPoint=Application.getMousePosition();
this.isDragging=true;
BindingDragger.isDragging=true;
BindingDragger.draggedBinding=this.binding;
this.handler.onDragStart(this.startPoint);
EventBroadcaster.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEMOVE,this);
EventBroadcaster.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP,this);
}
};
BindingDragger.prototype.onDrag=function(e){
if(this.isDragging==true){
var _3c8=e.button==(e.target?0:1);
if(_3c8){
this.handler.onDrag(this.getDiff());
}else{
this.onDragStop(e);
}
}
};
BindingDragger.prototype.onDragStop=function(e){
if(this.isDragging==true){
Application.disableMousePositionTracking();
this.handler.onDragStop(this.getDiff());
this.isDragging=false;
BindingDragger.isDragging=false;
BindingDragger.draggedBinding=null;
EventBroadcaster.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEMOVE,this);
EventBroadcaster.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP,this);
}
};
BindingDragger.prototype.getDiff=function(){
var _3ca=Application.getMousePosition();
var dx=_3ca.x-this.startPoint.x;
var dy=_3ca.y-this.startPoint.y;
return new Point(dx,dy);
};
BindingDragger.prototype.handleBroadcast=function(_3cd,e){
switch(_3cd){
case BroadcastMessages.MOUSEEVENT_MOUSEMOVE:
this.onDrag(e);
break;
case BroadcastMessages.MOUSEEVENT_MOUSEUP:
this.onDragStop(e);
break;
}
};
BindingDragger.prototype.dispose=function(){
this.binding=null;
};
BindingParser.XML="<div xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:ui=\"http://www.w3.org/1999/xhtml\">${markup}</div>";
function BindingParser(_3cf){
this.logger=SystemLogger.getLogger("BindingParser");
this._ownerDocument=_3cf;
this._rootElement=null;
}
BindingParser.prototype.parseFromString=function(_3d0){
var _3d1=new List();
var xml=BindingParser.XML.replace("${markup}",_3d0);
var doc=XMLParser.parse(_3d0);
if(doc){
var _3d4=DOMUtil.createElementNS(Constants.NS_XHTML,"div",this._ownerDocument);
this._iterate(doc.documentElement,_3d4);
var node=_3d4.firstChild;
while(node){
if(node.nodeType==Node.ELEMENT_NODE){
_3d1.add(node);
}
node=node.nextSibling;
}
}
return _3d1;
};
BindingParser.prototype._iterate=function(_3d6,_3d7){
var _3d8=null;
switch(_3d6.nodeType){
case Node.ELEMENT_NODE:
_3d8=this._cloneElement(_3d6);
UserInterface.registerBinding(_3d8);
break;
case Node.TEXT_NODE:
_3d8=this._ownerDocument.createTextNode(_3d6.nodeValue);
break;
}
if(_3d8){
_3d7.appendChild(_3d8);
}
if(_3d8&&_3d6.hasChildNodes()){
var _3d9=_3d6.firstChild;
while(_3d9){
this._iterate(_3d9,_3d8);
_3d9=_3d9.nextSibling;
}
}
};
BindingParser.prototype._cloneElement=function(_3da){
var _3db=DOMUtil.createElementNS(_3da.namespaceURI?_3da.namespaceURI:Constants.NS_XHTML,_3da.nodeName,this._ownerDocument);
var i=0;
while(i<_3da.attributes.length){
var attr=_3da.attributes.item(i++);
_3db.setAttribute(attr.nodeName,String(attr.nodeValue));
}
return _3db;
};
BindingSerializer.activeInstance=null;
BindingSerializer.KEYPOINTER="bindingserializerkeypointer";
BindingSerializer.filter=function(_3de){
var _3df=null;
var _3e0=false;
var _3e1=_3de.parentNode.getAttribute(BindingSerializer.KEYPOINTER);
if(UserInterface.hasBinding(_3de)){
var _3e2=UserInterface.getBinding(_3de);
_3e0=BindingSerializer.activeInstance.indexBinding(_3e2);
if(_3e0){
_3df=_3e2.key;
_3de.setAttribute(BindingSerializer.KEYPOINTER,_3df);
}
}
_3df=_3df?_3df:_3e1;
var _3e3=new List(_3de.childNodes);
_3e3.each(function(_3e4){
if(_3e4.nodeType==Node.ELEMENT_NODE){
_3e4.setAttribute(BindingSerializer.KEYPOINTER,_3df);
}
});
if(_3e0){
BindingSerializer.activeInstance.append(_3df,_3e1);
}
};
function BindingSerializer(){
this.logger=SystemLogger.getLogger("BindingSerializer");
this._dom=DOMUtil.getDOMDocument();
alert("BindingSerializer: Convert to Crawler!");
this._pointers=[];
}
BindingSerializer.prototype.serializeBinding=function(_3e5){
BindingSerializer.activeInstance=this;
_3e5.bindingWindow.ElementIterator.iterate(_3e5.bindingElement,BindingSerializer.filter);
return DOMSerializer.serialize(this._dom,true);
};
BindingSerializer.prototype.indexBinding=function(_3e6){
var _3e7=false;
var _3e8=_3e6.serialize();
if(_3e8!=false){
_3e7=true;
var _3e9="ui:"+DOMUtil.getLocalName(_3e6.bindingElement);
var _3ea=DOMUtil.createElementNS(Constants.NS_UI,_3e9,this._dom);
this._pointers[_3e6.key]=_3ea;
for(var prop in _3e8){
if(_3e8[prop]!=null){
_3ea.setAttribute(prop,String(_3e8[prop]));
}
}
}
return _3e7;
};
BindingSerializer.prototype.append=function(_3ec,_3ed){
var _3ee=this._pointers[_3ec];
var _3ef=_3ed?this._pointers[_3ed]:this._dom;
_3ef.appendChild(_3ee);
};
function ImageProfile(_3f0){
this._default=_3f0.image;
this._hover=_3f0.imageHover;
this._active=_3f0.imageActive;
this._disabled=_3f0.imageDisabled;
}
ImageProfile.prototype.getDefaultImage=function(){
return this._default;
};
ImageProfile.prototype.setDefaultImage=function(_3f1){
this._default=_3f1;
};
ImageProfile.prototype.getHoverImage=function(){
return this._hover;
};
ImageProfile.prototype.setHoverImage=function(_3f2){
this._hover=_3f2;
};
ImageProfile.prototype.getActiveImage=function(){
return this._active;
};
ImageProfile.prototype.setActiveImage=function(_3f3){
this._active=_3f3;
};
ImageProfile.prototype.getDisabledImage=function(){
return this._disabled;
};
ImageProfile.prototype.setDisabledImage=function(_3f4){
this._disabled=_3f4;
};
function _BindingFinder(){
}
_BindingFinder.prototype={getDescendantBindingsByLocalName:function(_3f5,_3f6,_3f7){
var _3f8=null;
if(_3f5.isAttached){
_3f8=new List();
var _3f9=_3f7?_3f5.getChildElementsByLocalName(_3f6):_3f5.getDescendantElementsByLocalName(_3f6);
_3f9.each(function(_3fa){
var _3fb=UserInterface.getBinding(_3fa);
if(_3fb){
_3f8.add(_3fb);
}
});
}else{
var ouch="Could not resolve descendants of unattached binding "+_3f5.toString();
if(Application.isDeveloperMode){
throw ouch;
}
}
return _3f8;
},getAncestorBindingByType:function(_3fd,impl,_3ff){
var _400=null;
if(Binding.exists(_3fd)){
var node=_3fd.bindingElement;
while(_400==null&&node!=null){
node=node.parentNode;
if(node!=null){
if(UserInterface.hasBinding(node)){
var _402=UserInterface.getBinding(node);
if(_402 instanceof impl){
_400=_402;
}
}else{
if(_3ff&&node.nodeType==Node.DOCUMENT_NODE){
var win=DOMUtil.getParentWindow(node);
if(win!=null){
node=win.frameElement;
}else{
SystemDebug.stack(arguments);
break;
}
}
}
}
}
}
return _400;
},getAncestorBindingByLocalName:function(_404,_405,_406){
var _407=null;
if(_405=="*"){
var node=_404.bindingElement;
while(!_407&&(node=node.parentNode)!=null){
if(UserInterface.hasBinding(node)){
_407=UserInterface.getBinding(node);
}
}
}else{
_407=UserInterface.getBinding(DOMUtil.getAncestorByLocalName(_405,_404.bindingElement,_406));
}
return _407;
},getChildElementsByLocalName:function(_409,_40a){
var _40b=new List();
var _40c=new List(_409.bindingElement.childNodes);
_40c.each(function(_40d){
if(_40d.nodeType==Node.ELEMENT_NODE){
if(_40a=="*"||DOMUtil.getLocalName(_40d)==_40a){
_40b.add(_40d);
}
}
});
return _40b;
},getChildBindingByType:function(_40e,impl){
var _410=null;
_40e.getChildElementsByLocalName("*").each(function(_411){
var _412=UserInterface.getBinding(_411);
if(_412!=null&&_412 instanceof impl){
_410=_412;
return false;
}else{
return true;
}
});
return _410;
},getDescendantBindingByType:function(_413,impl){
var _415=null;
_413.getDescendantElementsByLocalName("*").each(function(_416){
var _417=UserInterface.getBinding(_416);
if(_417!=null&&_417 instanceof impl){
_415=_417;
return false;
}else{
return true;
}
});
return _415;
},getDescendantBindingsByType:function(_418,impl){
var _41a=new List();
_418.getDescendantElementsByLocalName("*").each(function(_41b){
var _41c=UserInterface.getBinding(_41b);
if(_41c!=null&&_41c instanceof impl){
_41a.add(_41c);
}
return true;
});
return _41a;
},getNextBindingByLocalName:function(_41d,name){
var _41f=null;
var _420=_41d.bindingElement;
while((_420=DOMUtil.getNextElementSibling(_420))!=null&&DOMUtil.getLocalName(_420)!=name){
}
if(_420!=null){
_41f=UserInterface.getBinding(_420);
}
return _41f;
},getPreviousBindingByLocalName:function(_421,name){
var _423=null;
var _424=_421.bindingElement;
while((_424=DOMUtil.getPreviousElementSibling(_424))!=null&&DOMUtil.getLocalName(_424)!=name){
}
if(_424!=null){
_423=UserInterface.getBinding(_424);
}
return _423;
}};
var BindingFinder=new _BindingFinder();
NodeCrawler.NORMAL=1;
NodeCrawler.SKIP_NODE=2;
NodeCrawler.SKIP_CHILDREN=4;
NodeCrawler.STOP_CRAWLING=8;
NodeCrawler.TYPE_DESCENDING="descending";
NodeCrawler.TYPE_ASCENDING="ascending";
function NodeCrawler(){
this._construct();
return this;
}
NodeCrawler.prototype={logger:SystemLogger.getLogger("NodeCrawler"),type:NodeCrawler.TYPE_DESCENDING,currentNode:null,previousNode:null,contextDocument:null,_filters:null,_construct:function(){
this.currentNode=null,this.previousNode=null;
this.nextNode=null;
this._filters=new List();
this.type=NodeCrawler.TYPE_DESCENDING;
},addFilter:function(_425){
this._filters.add(_425);
},removeFilter:function(_426){
var _427=-1;
this._filters.each(function(fil){
_427++;
var _429=true;
if(fil==_426){
_429=false;
}
return _429;
});
if(_427>-1){
this._filters.del(_427);
}
},_applyFilters:function(node,arg){
var _42c=null;
var stop=NodeCrawler.STOP_CRAWLING;
var skip=NodeCrawler.SKIP_NODE;
var _42f=NodeCrawler.SKIP_CHILDREN;
this._filters.reset();
var _430=true;
while(this._filters.hasNext()&&_430==true){
var _431=this._filters.getNext();
var res=_431.call(this,node,arg);
if(res!=null){
_42c=res;
switch(res){
case stop:
case skip:
case skip+_42f:
_430=false;
break;
}
}
}
return _42c;
},crawl:function(_433,arg){
this.contextDocument=_433.ownerDocument;
this.onCrawlStart();
var _435=this.type==NodeCrawler.TYPE_ASCENDING;
var _436=this._applyFilters(_433,arg);
if(_436!=NodeCrawler.STOP_CRAWLING){
if(_435&&_436==NodeCrawler.SKIP_CHILDREN){
}else{
var next=null;
if(this.nextNode!=null){
next=this.nextNode;
this.nextNode=null;
}else{
next=_435?_433.parentNode:_433;
}
this._crawl(next,arg);
}
}
this.onCrawlStop();
},onCrawlStart:function(){
},onCrawlStop:function(){
},_crawl:function(_438,arg){
var _43a=null;
switch(this.type){
case NodeCrawler.TYPE_DESCENDING:
_43a=this._crawlDescending(_438,arg);
break;
case NodeCrawler.TYPE_ASCENDING:
_43a=this._crawlAscending(_438,arg);
break;
}
return _43a;
},_crawlDescending:function(_43b,arg){
var skip=NodeCrawler.SKIP_NODE;
var _43e=NodeCrawler.SKIP_CHILDREN;
var stop=NodeCrawler.STOP_CRAWLING;
var _440=null;
if(_43b.hasChildNodes()){
var node=_43b.firstChild;
while(node!=null&&_440!=stop){
this.currentNode=node;
_440=this._applyFilters(node,arg);
switch(_440){
case stop:
case _43e:
case skip+_43e:
break;
default:
if(node.nodeType==Node.ELEMENT_NODE){
if(this.nextNode==null){
var res=this._crawl(node,arg);
if(res==stop){
_440=stop;
break;
}
}
}
if(_440!=stop&&_440!=skip){
this.previousNode=node;
}
break;
}
if(_440!=stop){
node=this.nextNode?this.nextNode:node.nextSibling;
this.nextNode=null;
}
}
}
return _440;
},_crawlAscending:function(_443,arg){
var _445=null;
var skip=NodeCrawler.SKIP_CHILDREN;
var stop=NodeCrawler.STOP_CRAWLING;
if(_443!=null){
this.currentNode=_443;
_445=this._applyFilters(_443,arg);
if(_445!=stop){
var next=this.nextNode?this.nextNode:_443.parentNode;
this.nextNode=null;
if(next&&next.nodeType!=Node.DOCUMENT_NODE){
this.previousNode=_443;
_445=this._crawl(next,arg);
}
}
}else{
_445=stop;
}
return _445;
}};
NodeCrawler.prototype.dispose=function(){
this._filters.dispose();
for(var _449 in this){
this[_449]=null;
}
};
ElementCrawler.prototype=new NodeCrawler;
ElementCrawler.prototype.constructor=ElementCrawler;
ElementCrawler.superclass=NodeCrawler.prototype;
function ElementCrawler(){
this._construct();
return this;
}
ElementCrawler.prototype._construct=function(){
ElementCrawler.superclass._construct.call(this);
this.addFilter(function(node,arg){
var _44c=null;
if(node.nodeType!=Node.ELEMENT_NODE){
_44c=NodeCrawler.SKIP_NODE;
}
return _44c;
});
};
BindingCrawler.prototype=new ElementCrawler;
BindingCrawler.prototype.constructor=BindingCrawler;
BindingCrawler.superclass=ElementCrawler.prototype;
function BindingCrawler(){
this._construct();
return this;
}
BindingCrawler.prototype._construct=function(){
BindingCrawler.superclass._construct.call(this);
this.addFilter(function(_44d,arg){
var _44f=null;
if(!UserInterface.hasBinding(_44d)){
_44f=NodeCrawler.SKIP_NODE;
}
return _44f;
});
};
Crawler.prototype=new BindingCrawler;
Crawler.prototype.constructor=Crawler;
Crawler.superclass=BindingCrawler.prototype;
function Crawler(){
this.id=null;
this.response=null;
this._construct();
return this;
}
Crawler.prototype._construct=function(){
Crawler.superclass._construct.call(this);
this.response=null;
var self=this;
this.addFilter(function(_451,arg){
var _453=null;
var _454=UserInterface.getBinding(_451);
if(Interfaces.isImplemented(ICrawlerHandler,_454)==true){
self.response=null;
_454.handleCrawler(self);
_453=self.response;
}
return _453;
});
};
FlexBoxCrawler.prototype=new Crawler;
FlexBoxCrawler.prototype.constructor=FlexBoxCrawler;
FlexBoxCrawler.superclass=Crawler.prototype;
FlexBoxCrawler.ID="flexboxcrawler";
FlexBoxCrawler.MODE_FORCE="force";
FlexBoxCrawler.MODE_NORMAL="normal";
function FlexBoxCrawler(){
this.id=FlexBoxCrawler.ID;
this.mode=FlexBoxCrawler.MODE_NORMAL;
this.startBinding=null;
this._construct();
return this;
}
FlexBoxCrawler.prototype._construct=function(){
FlexBoxCrawler.superclass._construct.call(this);
var self=this;
this.addFilter(function(_456,list){
var _458=null;
var _459=UserInterface.getBinding(_456);
if(Interfaces.isImplemented(IFlexible,_459)==true){
switch(self.mode){
case FlexBoxCrawler.MODE_FORCE:
list.add(_459);
break;
case FlexBoxCrawler.MODE_NORMAL:
if(_459.isFlexSuspended==true){
_458=NodeCrawler.SKIP_CHILDREN;
}else{
list.add(_459);
}
break;
}
}
return _458;
});
};
FocusCrawler.prototype=new Crawler;
FocusCrawler.prototype.constructor=FocusCrawler;
FocusCrawler.superclass=Crawler.prototype;
FocusCrawler.ID="focuscrawler";
FocusCrawler.MODE_INDEX="index";
FocusCrawler.MODE_FOCUS="focus";
FocusCrawler.MODE_BLUR="blur";
function FocusCrawler(){
this.id=FocusCrawler.ID;
this._construct();
return this;
}
FocusCrawler.prototype._construct=function(){
FocusCrawler.superclass._construct.call(this);
this.addFilter(function(_45a,list){
var _45c=null;
var _45d=UserInterface.getBinding(_45a);
if(_45d.isAttached==true){
if(Interfaces.isImplemented(IFocusable,_45d)==true){
if(_45d.isFocusable&&_45d.isVisible){
switch(this.mode){
case FocusCrawler.MODE_INDEX:
list.add(_45d);
break;
case FocusCrawler.MODE_FOCUS:
if(!_45d.isFocused){
_45d.focus();
}
_45c=NodeCrawler.STOP_CRAWLING;
break;
case FocusCrawler.MODE_BLUR:
if(_45d.isFocused==true){
_45d.blur();
_45c=NodeCrawler.STOP_CRAWLING;
}
break;
}
}
}
}
return _45c;
});
};
FitnessCrawler.prototype=new Crawler;
FitnessCrawler.prototype.constructor=FitnessCrawler;
FitnessCrawler.superclass=Crawler.prototype;
FitnessCrawler.ID="fitnesscrawler";
FitnessCrawler.MODE_BRUTAL="brutal fitness";
FitnessCrawler.MODE_TRAINING="train fitness";
function FitnessCrawler(){
this.id=FitnessCrawler.ID;
this.mode=FitnessCrawler.MODE_TRAINING;
this._construct();
return this;
}
FitnessCrawler.prototype._construct=function(){
FitnessCrawler.superclass._construct.call(this);
this.addFilter(function(_45e,list){
var _460=null;
var _461=UserInterface.getBinding(_45e);
if(!_461.isVisible){
_460=NodeCrawler.SKIP_NODE+NodeCrawler.SKIP_CHILDREN;
}
return _460;
});
this.addFilter(function(_462,list){
var _464=null;
var _465=UserInterface.getBinding(_462);
if(_465.isAttached){
if(Interfaces.isImplemented(IFit,_465)){
if(!_465.isFit||this.mode==FitnessCrawler.MODE_BRUTAL){
list.add(_465);
}
}
}
return null;
});
};
function _DocumentUpdatePlugin(){
if(window.UpdateManager!=null){
UpdateManager.plugins.push(this);
this._setup();
}
}
_DocumentUpdatePlugin.prototype={toString:function(){
return "[DocumentUpdatePlugin]";
},_logger:SystemLogger.getLogger("DocumentUpdatePlugin ["+document.title+"]"),_isUpdating:false,_attributesbuffer:null,_elementsbuffer:null,isDebugging:Application.isDeveloperMode,_oldDOM:null,_focusID:null,_setup:function(){
UpdateManager.isDebugging=Application.isDeveloperMode;
UpdateManager.hasSoftAttributes=true;
UpdateManager.hasSoftSiblings=true;
DOMEvents.addEventListener(document,DOMEvents.BEFOREUPDATE,this);
DOMEvents.addEventListener(document,DOMEvents.AFTERUPDATE,this);
DOMEvents.addEventListener(document,DOMEvents.ERRORUPDATE,this);
DOMEvents.addEventListener(window,DOMEvents.UNLOAD,this);
if(Client.isMozilla){
UpdateAssistant.serialize=function(_466){
_466=_466.cloneNode(true);
_466.setAttributeNS(Constants.NS_NS,"xmlns",Constants.NS_XHTML);
_466.setAttributeNS(Constants.NS_NS,"xmlns:ui",Constants.NS_UI);
return this._serializer.serializeToString(_466);
};
}
},handleEvent:function(e){
var _468=DOMEvents.getTarget(e);
switch(e.type){
case DOMEvents.BEFOREUPDATE:
this._beforeUpdate(_468);
break;
case DOMEvents.AFTERUPDATE:
this._afterUpdate(_468);
break;
case DOMEvents.ERRORUPDATE:
this._errorUpdate();
break;
case DOMEvents.UNLOAD:
if(Application.hasLock(this)){
Application.unlock(this);
}
break;
}
},_beforeUpdate:function(_469){
var _46a=(_469==document.documentElement);
if(_46a){
this._elementsbuffer=new List();
this._isUpdating=true;
Application.lock(this);
var root=UserInterface.getBinding(document.body);
if(root!=null){
var page=root.getDescendantBindingByType(PageBinding);
if(page!=null){
page.onBeforeUpdates();
}
}
var _46d=FocusBinding.focusedBinding;
if(_46d!=null){
this._focusID=_46d.getID();
}
if(this.isDebugging){
this._oldDOM=DOMSerializer.serialize(UpdateManager.currentDOM,true);
}
}else{
switch(_469.__updateType){
case Update.TYPE_REPLACE:
case Update.TYPE_REMOVE:
DocumentManager.detachBindings(_469);
break;
case Update.TYPE_ATTRIBUTES:
this._backupattributes(_469,false);
break;
}
}
},_afterUpdate:function(_46e){
var _46f=(_46e==document.documentElement);
if(_46f){
var _470=this._elementsbuffer;
if(_470.hasEntries()){
_470.each(function(_471){
DocumentManager.attachBindings(_471);
});
}
this._isUpdating=false;
Application.unlock(this);
var root=UserInterface.getBinding(document.body);
if(root!=null){
var page=root.getDescendantBindingByType(PageBinding);
if(page!=null){
page.onAfterUpdates();
}
}
var _474=FocusBinding.focusedBinding;
if(_474==null){
var _475=document.getElementById(this._focusID);
if(_475!=null){
var _474=UserInterface.getBinding(_475);
if(_474!=null){
_474.focus();
}
}
}
this._focusID=null;
if(UpdateManager.summary!=""){
if(this.isDebugging){
var _476=DOMSerializer.serialize(UpdateManager.currentDOM,true);
var _477="NEW DOM: "+document.title+"\n\n"+_476+"\n\n";
_477+="OLD DOM: "+document.title+"\n\n"+this._oldDOM;
this._logger.debug(_477);
this._oldDOM=null;
}
this._logger.fine(UpdateManager.summary);
}
}else{
switch(_46e.__updateType){
case Update.TYPE_REPLACE:
case Update.TYPE_INSERT:
if(_46e.__isAttached!==false){
this._elementsbuffer.add(_46e);
}
break;
case Update.TYPE_ATTRIBUTES:
this._backupattributes(_46e,true);
break;
}
switch(_46e.id){
case "__VIEWSTATE":
case "__EVENTTARGET":
case "__EVENTARGUMENT":
case "__EVENTVALIDATION":
case "__LASTFOCUS":
case "__REQUEST":
case "__RESPONSE":
case "__CONSOLEID":
break;
default:
var _474=UserInterface.getBinding(_46e);
while(_474==null&&_46e!=null){
_474=UserInterface.getBinding(_46e);
_46e=_46e.parentNode;
}
if(_474!=null){
_474.dispatchAction(Binding.ACTION_UPDATED);
}
break;
}
}
},_errorUpdate:function(){
Application.unlock(this);
var cry="UpdateManager dysfunction:\n\n"+UpdateManager.errorsmessage;
this._logger.error(cry+"\n\n"+UpdateManager.pendingResponse);
if(Application.isDeveloperMode){
alert(cry);
}
},_backupattributes:function(_479,_47a){
var _47b=UserInterface.getBinding(_479);
if(_47b!=null){
if(_47a){
var _47c=this._attributesbuffer;
var map=new Map();
_47c.each(function(name,old){
var now=_479.getAttribute(name);
if(now!=null){
if(now!=old){
map.set(name,Types.castFromString(now));
}
}else{
map.set(name,null);
}
});
new List(_479.attributes).each(function(att){
if(att.specified){
if(!_47c.has(att.nodeName)){
map.set(att.nodeName,Types.castFromString(att.nodeValue));
}
}
});
map.each(function(name,_483){
var _484=_47b.propertyMethodMap[name];
if(_484!=null){
_484.call(_47b,_483);
}
});
}else{
var map=new Map();
new List(_479.attributes).each(function(att){
if(att.specified){
map.set(att.nodeName,att.nodeValue);
}
});
this._attributesbuffer=map;
}
}
},handleElement:function(_486,_487){
var _488=window.bindingMap[_486.getAttribute("id")];
if(_488!=null){
return _488.handleElement(_486,_487);
}
},updateElement:function(_489,_48a){
var _48b=window.bindingMap[_489.getAttribute("id")];
if(_48b!=null){
return _48b.updateElement(_489,_48a);
}
}};
var DocumentUpdatePlugin=new _DocumentUpdatePlugin();
DocumentCrawler.prototype=new ElementCrawler;
DocumentCrawler.prototype.constructor=DocumentCrawler;
DocumentCrawler.superclass=ElementCrawler.prototype;
DocumentCrawler.ID="documentcrawler";
DocumentCrawler.MODE_REGISTER="register";
DocumentCrawler.MODE_ATTACH="attach";
DocumentCrawler.MODE_DETACH="detach";
function DocumentCrawler(){
this.mode=DocumentCrawler.MODE_REGISTER;
this.id=DocumentCrawler.ID;
this._construct();
return this;
}
DocumentCrawler.prototype._construct=function(){
DocumentCrawler.superclass._construct.call(this);
var self=this;
this.addFilter(function(_48d,list){
var _48f=UserInterface.getBinding(_48d);
var _490=null;
switch(self.mode){
case DocumentCrawler.MODE_REGISTER:
if(_48f==null){
UserInterface.registerBinding(_48d);
}
break;
case DocumentCrawler.MODE_ATTACH:
if(_48f!=null){
if(!_48f.isAttached){
list.add(_48f);
}
if(_48f.isLazy==true){
_490=NodeCrawler.SKIP_CHILDREN;
}
}
break;
case DocumentCrawler.MODE_DETACH:
if(_48f!=null){
list.add(_48f);
}
break;
}
return _490;
});
};
function _DocumentManager(){
this._construct();
}
_DocumentManager.prototype={_logger:SystemLogger.getLogger("DocumentManager ["+document.title+"]"),_maxIndex:-1,customUserInterfaceMapping:null,isDocumentSelectable:false,hasNativeContextMenu:false,_construct:function(){
Application.framework(document);
EventBroadcaster.subscribe(WindowManager.WINDOW_LOADED_BROADCAST,this);
if(Client.isExplorer){
DOMEvents.addEventListener(document,DOMEvents.CLICK,this);
}
},handleBroadcast:function(_491,arg){
if(!this.isDocumentSelectable){
this._makeDocumentUnselectable();
}
if(!this.hasNativeContextMenu){
DOMEvents.addEventListener(document,DOMEvents.CONTEXTMENU,this);
}
if(!Application.isMalFunctional){
this._resolveCustomBindingMappings();
this.attachBindings(document.documentElement);
}
},handleEvent:function(e){
var _494=DOMEvents.getTarget(e);
switch(e.type){
case DOMEvents.SELECTSTART:
case DOMEvents.CONTEXTMENU:
if(!this._isTextInputElement(_494)){
DOMEvents.preventDefault(e);
}
break;
case DOMEvents.CLICK:
if(Client.isExplorer){
if(_494!=null){
if(_494.href!=null&&_494.href.indexOf(Constants.DUMMY_LINK)>-1){
DOMEvents.preventDefault(e);
}
}
}
break;
}
},_resolveCustomBindingMappings:function(){
var _495=DOMUtil.getElementsByTagName(document.documentElement,"bindingmappingset").item(0);
if(_495!=null){
var map={};
var _497=DOMUtil.getElementsByTagName(_495,"bindingmapping");
new List(_497).each(function(_498){
var _499=_498.getAttribute("element");
var _49a=_498.getAttribute("binding");
map[_499]=eval(_49a);
});
this.setCustomUserInterfaceMapping(new UserInterfaceMapping(map));
}
},setCustomUserInterfaceMapping:function(_49b){
if(this.customUserInterfaceMapping==null){
this.customUserInterfaceMapping=_49b;
}else{
this.customUserInterfaceMapping.merge(_49b);
}
},_registerBindings:function(_49c){
var _49d=new DocumentCrawler();
_49d.mode=DocumentCrawler.MODE_REGISTER;
_49d.crawl(_49c);
_49d.dispose();
},_attachBindings:function(_49e){
var _49f=new DocumentCrawler();
_49f.mode=DocumentCrawler.MODE_ATTACH;
var list=new List();
_49f.crawl(_49e,list);
var _4a1=false;
while(list.hasNext()){
var _4a2=list.getNext();
if(!_4a2.isAttached){
_4a2.onBindingAttach();
if(!_4a2.memberDependencies){
_4a2.onBindingInitialize();
}
if(Interfaces.isImplemented(IData,_4a2)){
_4a1=true;
}
}
}
if(_4a1){
var root=UserInterface.getBinding(document.body);
if(root!=null){
setTimeout(function(){
if(Binding.exists(root)){
root.dispatchAction(FocusBinding.ACTION_UPDATE);
}
},250);
}
}
_49f.dispose();
list.dispose();
},attachBindings:function(_4a4){
this._registerBindings(_4a4);
this._attachBindings(_4a4);
},detachBindings:function(_4a5,_4a6){
var _4a7=new DocumentCrawler();
_4a7.mode=DocumentCrawler.MODE_DETACH;
var list=new List();
_4a7.crawl(_4a5,list);
if(_4a6==true){
list.extractFirst();
}
var _4a9=false;
list.reverse().each(function(_4aa){
if(Interfaces.isImplemented(IData,_4aa)){
_4a9=true;
}
_4aa.dispose(true);
});
if(_4a9){
var root=UserInterface.getBinding(document.body);
if(root!=null){
setTimeout(function(){
if(Binding.exists(root)){
root.dispatchAction(FocusBinding.ACTION_UPDATE);
}
},250);
}
}
_4a7.dispose();
list.dispose();
},detachAllBindings:function(){
this.detachBindings(document.documentElement);
},computeMaxIndex:function(){
if(this._maxIndex==-1){
this._maxIndex=DOMUtil.getMaxIndex(document);
}
return this._maxIndex++;
},_isTextInputElement:function(_4ac){
return (/textarea|input/.test(DOMUtil.getLocalName(_4ac)));
},_makeDocumentUnselectable:function(){
if(Client.isExplorer){
DOMEvents.addEventListener(document,DOMEvents.SELECTSTART,this);
}else{
}
}};
var DocumentManager=new _DocumentManager();
function _DataManager(){
}
_DataManager.prototype={isPostBackFun:false,_logger:SystemLogger.getLogger("DataManager ["+document.title+"]"),_dataBindings:{},isDirty:false,dirty:function(_4ad){
this.isDirty=true;
var _4ae=false;
if(_4ad!=null&&!_4ad.isDirty){
_4ad.isDirty=true;
_4ad.dispatchAction(Binding.ACTION_DIRTY);
_4ae=true;
}
return _4ae;
},clean:function(_4af){
if(_4af.isDirty){
_4af.isDirty=false;
}
},registerDataBinding:function(name,_4b1){
if(Interfaces.isImplemented(IData,_4b1,true)){
if(this._dataBindings[name]!=null){
throw "no proper support for checkbox multiple values! "+name;
}else{
this._dataBindings[name]=_4b1;
}
}else{
throw "Invalid DataBinding: "+_4b1;
}
},unRegisterDataBinding:function(name){
if(this._dataBindings[name]!=null){
delete this._dataBindings[name];
}
},getDataBinding:function(name){
var _4b4=null;
if(this._dataBindings[name]!=null){
_4b4=this._dataBindings[name];
}
return _4b4;
},getAllDataBindings:function(_4b5){
var list=new List();
for(var name in this._dataBindings){
var _4b8=this._dataBindings[name];
list.add(_4b8);
if(_4b5&&_4b8 instanceof WindowBinding){
var _4b9=_4b8.getContentWindow().DataManager;
if(_4b9!=null){
list.merge(_4b9.getAllDataBindings());
}
}
}
return list;
},hasDataBindings:function(){
var _4ba=false;
for(var name in this._dataBindings){
_4ba=true;
break;
}
return _4ba;
},populateDataBindings:function(map){
if(map instanceof DataBindingMap){
map.each(function(name,_4be){
var _4bf=this._dataBindings[name];
if(_4bf!=null){
switch(map.type){
case DataBindingMap.TYPE_RESULT:
try{
_4bf.setResult(_4be);
}
catch(exception){
if(Application.isDeveloperMode){
alert(_4bf);
}
throw exception;
}
break;
case DataBindingMap.TYPE_VALUE:
throw "Not implemented!";
}
}
});
}
},getDataBindingValueMap:function(){
var _4c0=new DataBindingMap();
_4c0.type=DataBindingMap.TYPE_VALUE;
for(var name in this._dataBindings){
var _4c2=this._dataBindings[name];
if(_4c2 instanceof DataDialogBinding){
throw "DataDialogBinding valuemap not supported!";
}
_4c0[name]=_4c2.getValue();
}
return _4c0;
},getDataBindingResultMap:function(){
var _4c3=new DataBindingMap();
_4c3.type=DataBindingMap.TYPE_RESULT;
for(var name in this._dataBindings){
var _4c5=this._dataBindings[name];
var res=_4c5.getResult();
if(res instanceof DataBindingMap){
res.each(function(name,_4c8){
_4c3.set(name,_4c8);
});
}else{
_4c3.set(name,res);
}
}
return _4c3;
},getPostBackString:function(){
var _4c9="";
var form=document.forms[0];
if(form!=null){
var _4cb="";
new List(form.elements).each(function(_4cc){
var name=_4cc.name;
var _4ce=encodeURIComponent(_4cc.value);
switch(_4cc.type){
case "text":
case "hidden":
case "password":
case "textarea":
case "select-one":
_4c9+=name+"="+_4ce+"&";
break;
case "submit":
if(document.activeElement==_4cc){
_4c9+=name+"="+_4ce+"&";
}
break;
case "radio":
if(_4cc.checked){
_4c9+=name+"="+_4ce+"&";
}
break;
case "checkbox":
if(_4cc.checked){
if(_4cc.name==_4cb){
if(_4c9.lastIndexOf("&")==_4c9.length-1){
_4c9=_4c9.substr(0,_4c9.length-1);
}
_4c9+=","+_4ce;
}else{
_4c9+=name+"="+_4cc.value;
}
_4cb=name;
_4c9+="&";
}
break;
}
});
}
return _4c9.substr(0,_4c9.length-1);
}};
var DataManager=new _DataManager();
function _Templates(){
}
_Templates.prototype={_logger:SystemLogger.getLogger("Templates"),_cache:{},_mode:null,_modes:{MODE_PLAINTEXT:0,MODE_DOCUMENT:1,MODE_ELEMENT:2,MODE_DOCUMENTTEXT:3,MODE_ELEMENTTEXT:4},getTemplateDocument:function(name){
this._mode=this._modes.MODE_DOCUMENT;
return this._getIt(name);
},getTemplateElement:function(name){
this._mode=this._modes.MODE_ELEMENT;
return this._getIt(name);
},getTemplateDocumentText:function(name){
this._mode=this._modes.MODE_DOCUMENTTEXT;
return this._getIt(name);
},getTemplateElementText:function(name){
this._mode=this._modes.MODE_ELEMENTTEXT;
return this._getIt(name);
},getTemplateBodyText:function(name){
var tmp=this.getTemplateDocumentText(name);
tmp=tmp.split("<body>")[1].split("</body>")[0];
return tmp;
},getPlainText:function(name){
this._mode=this._modes.MODE_PLAINTEXT;
return this._getIt(name);
},_getIt:function(name){
var _4d7=null;
var _4d8=null;
var _4d9=false;
if(!this._cache[name]){
_4d9=true;
var uri=Constants.TEMPLATESROOT+"/"+name;
var _4db=DOMUtil.getXMLHTTPRequest();
_4db.open("get",uri,false);
_4db.setRequestHeader("Content-Type","text/xml; charset=UTF-8");
_4db.send(null);
switch(this._mode){
case this._modes.MODE_PLAINTEXT:
_4d8=_4db.responseText;
break;
default:
_4d8=_4db.responseXML;
break;
}
if(_4d8==null){
throw new Error("Templates: Could not read template. Malformed XML?");
}else{
this._cache[name]=_4d8;
}
}
_4d8=this._cache[name];
switch(this._mode){
case this._modes.MODE_PLAINTEXT:
_4d7=_4d8;
break;
case this._modes.MODE_DOCUMENT:
_4d7=DOMUtil.cloneNode(_4d8,true);
break;
case this._modes.MODE_ELEMENT:
_4d7=DOMUtil.cloneNode(_4d8.documentElement,true);
break;
case this._modes.MODE_DOCUMENTTEXT:
_4d7=DOMSerializer.serialize(_4d8,true);
break;
case this._modes.MODE_ELEMENTTEXT:
_4d7=DOMSerializer.serialize(_4d8.documentElement,true);
break;
}
if(_4d9&&Application.isDeveloperMode){
}
return _4d7;
}};
var Templates=new _Templates();
function DialogButton(obj){
this.label=null;
this.image=null;
this.response=null;
this.isFocusable=true;
this.isDefault=false;
this.isFocused=false;
if(obj){
for(var prop in obj){
if(typeof this[prop]!="undefined"){
this[prop]=obj[prop];
}
}
}
}
function _Dialog(){
}
_Dialog.prototype={_logger:SystemLogger.getLogger("Dialog"),_URL_STANDARDDIALOG:"${root}/content/dialogs/standard/standard.aspx",MODAL:"modal",NON_MODAL:"nonmodal",URL_TREESELECTOR:"${root}/content/dialogs/treeselector/treeselector.aspx",URL_TREESEARCH:"${root}/content/dialogs/treesearch/treeSearchForm.aspx",URL_IMAGESELECTOR:"${root}/content/dialogs/treeselector/special/imageselector.aspx",URL_TREEACTIONSELECTOR:"${root}/content/dialogs/treeselector/special/treeactionselector.aspx",URL_SERVICEFAULT:"${root}/content/dialogs/webservices/error.aspx",BUTTONS_YES_NO_CANCEL:["yes:default","no","cancel"],BUTTONS_ACCEPT_CANCEL:["accept:default","cancel"],BUTTONS_ACCEPT:["accept:default"],RESPONSE_YES:"yes",RESPONSE_NO:"no",RESPONSE_ACCEPT:"accept",RESPONSE_CANCEL:"cancel",RESPONSE_DEFAULT:"default",_TYPE_WARNING:"warning",_TYPE_MESSAGE:"message",_TYPE_ERROR:"error",_TYPE_QUESTION:"question",_dialogImages:{"warning":"${icon:warning}","message":"${icon:message}","error":"${icon:error}","question":"${icon:question}"},dialogButton:function(_4de){
if(this._dialogButtons==undefined){
this._dialogButtons={"yes":new DialogButton({label:StringBundle.getString("ui","Website.Dialogs.LabelYes"),response:this.RESPONSE_YES}),"no":new DialogButton({label:StringBundle.getString("ui","Website.Dialogs.LabelNo"),response:this.RESPONSE_NO}),"accept":new DialogButton({label:StringBundle.getString("ui","Website.Dialogs.LabelAccept"),response:this.RESPONSE_ACCEPT}),"cancel":new DialogButton({label:StringBundle.getString("ui","Website.Dialogs.LabelCancel"),response:this.RESPONSE_CANCEL})};
}
return Dialog._dialogButtons[_4de];
},invoke:function(url,_4e0,_4e1){
this._logger.error("Not implemented");
},invokeModal:function(url,_4e3,_4e4){
var _4e5=new DialogViewDefinition({handle:KeyMaster.getUniqueKey(),position:Dialog.MODAL,url:url,handler:_4e3,argument:_4e4});
StageBinding.presentViewDefinition(_4e5);
return _4e5;
},invokeDefinition:function(_4e6){
if(_4e6 instanceof DialogViewDefinition){
StageBinding.presentViewDefinition(_4e6);
}
return _4e6;
},question:function(_4e7,text,_4e9,_4ea){
if(!_4e9){
_4e9=this.BUTTONS_ACCEPT_CANCEL;
}
this._standardDialog(this._TYPE_QUESTION,_4e7,text,_4e9,_4ea);
},message:function(_4eb,text,_4ed,_4ee){
if(!_4ed){
_4ed=this.BUTTONS_ACCEPT;
}
this._standardDialog(this._TYPE_MESSAGE,_4eb,text,_4ed,_4ee);
},error:function(_4ef,text,_4f1,_4f2){
if(!_4f1){
_4f1=this.BUTTONS_ACCEPT;
}
this._standardDialog(this._TYPE_ERROR,_4ef,text,_4f1,_4f2);
},warning:function(_4f3,text,_4f5,_4f6){
if(!_4f5){
_4f5=this.BUTTONS_ACCEPT;
}
this._standardDialog(this._TYPE_WARNING,_4f3,text,_4f5,_4f6);
},_standardDialog:function(type,_4f8,text,_4fa,_4fb){
var _4fc=null;
if(!_4fa){
_4fc=new List(Dialog.BUTTONS_ACCEPT);
}else{
_4fc=new List();
new List(_4fa).each(function(_4fd){
var _4fe=null;
switch(typeof _4fd){
case "object":
_4fe=_4fd;
break;
case "string":
var _4ff=false;
if(_4fd.indexOf(":")>-1){
_4fd=_4fd.split(":")[0];
_4ff=true;
}
_4fe=Dialog.dialogButton(_4fd);
if(_4ff){
_4fe.isDefault=true;
}
break;
}
_4fc.add(_4fe);
});
}
var _500={title:_4f8,text:text,type:type,image:this._dialogImages[type],buttons:_4fc};
var _501=new DialogViewDefinition({handle:"standarddialog:"+type,position:Dialog.MODAL,url:this._URL_STANDARDDIALOG,handler:_4fb,argument:_500});
StageBinding.presentViewDefinition(_501);
}};
var Dialog=new _Dialog();
function _Commands(){
this._construct();
}
_Commands.prototype={_URL_ABOUTDIALOG:"${root}/content/dialogs/about/about.aspx",_URL_PREFERENCES:"${root}/content/dialogs/preferences/preferences.aspx",_construct:function(){
var self=this;
EventBroadcaster.subscribe(BroadcastMessages.SAVE_ALL,{handleBroadcast:function(_503,arg){
self.saveAll(arg);
}});
},about:function(){
this._dialog(this._URL_ABOUTDIALOG);
},preferences:function(){
this._dialog(this._URL_PREFERENCES);
},_dialog:function(url){
if(Client.hasTransitions){
setTimeout(function(){
Dialog.invokeModal(url);
},Animation.DEFAULT_TIME);
}else{
Dialog.invokeModal(url);
}
},close:function(){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_CURRENT);
},closeAll:function(){
this.saveAll(true);
},save:function(){
EventBroadcaster.broadcast(BroadcastMessages.SAVE_CURRENT);
},saveAll:function(_506){
var self=this;
var _508=Application.getDirtyDockTabsTabs();
if(_508.hasEntries()){
Dialog.invokeModal("${root}/content/dialogs/save/saveall.aspx",{handleDialogResponse:function(_509,_50a){
switch(_509){
case Dialog.RESPONSE_ACCEPT:
self._handleSaveAllResult(_50a,_506);
break;
case Dialog.RESPONSE_CANCEL:
EventBroadcaster.broadcast(BroadcastMessages.SAVE_ALL_DONE);
break;
}
}},_508);
}else{
if(_506){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_ALL);
}
}
},_handleSaveAllResult:function(_50b,_50c){
var _50d=false;
var list=new List();
_50b.each(function(name,tab){
if(tab!=false){
list.add(tab);
}
});
if(list.hasEntries()){
_50d=true;
var _511=list.getLength();
var _512={handleBroadcast:function(_513,tab){
if(--_511==0){
EventBroadcaster.unsubscribe(BroadcastMessages.DOCKTAB_CLEAN,this);
EventBroadcaster.broadcast(BroadcastMessages.SAVE_ALL_DONE);
if(_50c){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_ALL);
}
}
}};
EventBroadcaster.subscribe(BroadcastMessages.DOCKTAB_CLEAN,_512);
list.each(function(tab){
tab.saveContainedEditor();
});
}else{
EventBroadcaster.broadcast(BroadcastMessages.SAVE_ALL_DONE);
}
return _50d;
},systemLog:function(){
if(Application.isOperational){
StageBinding.handleViewPresentation("Composite.Management.SystemLog");
}else{
var win=window.open(Constants.APPROOT+"/content/views/dev/systemlog/systemlogoutput.html");
win.onload=function(){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMLOG_OPENED,this);
};
}
},help:function(){
var _517="Composite.Management.Help";
if(!StageBinding.isViewOpen(_517)){
StageBinding.handleViewPresentation(_517);
}
}};
var Commands=new _Commands();
function _Prism(){
}
_Prism.prototype={_logger:SystemLogger.getLogger("Prism"),clearCache:function(){
this._logger.fine("Clearing the cache");
this._dispatchToPrism("contenttochrome-clearcache");
},disableCache:function(){
this._logger.fine("Disabling cache");
this._dispatchToPrism("contenttochrome-cache-disable");
},enableCache:function(){
this._logger.fine("Enabling cache");
this._dispatchToPrism("contenttochrome-cache-enable");
},_dispatchToPrism:function(type){
if(Client.isPrism){
var _519=document.createEvent("Events");
_519.initEvent(type,true,true);
window.dispatchEvent(_519);
}else{
this._logger.warn("Prism methods should only be invoked in Prism! ("+type+")");
}
}};
var Prism=new _Prism();
function MediaUrl(url){
var _51b=/^(~?\/|(\.\.\/)+|https?:\/\/[\w\d\.:]*\/)media(\(|%28)[\w\d-\:]+(\)|%29)/;
if(_51b.test(url)){
var _51c={};
url.replace(/^[^\?]*/g,"").replace(/([^?=&]+)(=([^&]*))?/g,function($0,$1,$2,$3){
_51c[$1]=$3;
});
this.queryString=_51c;
this.path=url.replace(/\?.*/g,"");
this.isMedia=true;
}
return this;
}
MediaUrl.prototype.getPath=function(){
return this.path;
};
MediaUrl.prototype.hasParam=function(key){
return this.queryString[key]!=null;
};
MediaUrl.prototype.getParam=function(key){
return this.queryString[key];
};
MediaUrl.prototype.setParam=function(key,_524){
this.queryString[key]=_524;
};
MediaUrl.prototype.toString=function(){
var url=this.path;
var _526=[];
for(var key in this.queryString){
_526.push(key+"="+this.queryString[key]);
}
if(_526.length>0){
url+="?"+_526.join("&");
}
return url;
};
ViewDefinition.DEFAULT_URL="${root}/blank.aspx";
ViewDefinition.clone=function(_528,_529){
var _52a=null;
var _52b=ViewDefinitions[_528];
if(_52b.isMutable){
var impl=null;
if(_52b instanceof DialogViewDefinition){
impl=DialogViewDefinition;
}else{
impl=HostedViewDefinition;
}
if(_529!=null&&impl!=null){
var def=new impl();
for(var prop in _52b){
def[prop]=ViewDefinition.cloneProperty(_52b[prop]);
}
def.handle=_529;
_52a=def;
}else{
throw "Cannot clone without newhandle";
}
}else{
throw "Cannot clone non-mutable definition";
}
return _52a;
};
ViewDefinition.cloneProperty=function(_52f){
if(null==_52f){
return _52f;
}
if(typeof _52f==="object"){
var _530=(_52f.constructor===Array)?[]:{};
for(var prop in _52f){
_530[prop]=ViewDefinition.cloneProperty(_52f[prop]);
}
return _530;
}
return _52f;
};
function ViewDefinition(){
}
ViewDefinition.prototype={url:ViewDefinition.DEFAULT_URL,argument:null,handle:null,entityToken:null,flowHandle:null,label:null,image:null,toolTip:null};
SystemViewDefinition.prototype=new ViewDefinition;
SystemViewDefinition.prototype.constructor=SystemViewDefinition;
SystemViewDefinition.superclass=ViewDefinition.prototype;
SystemViewDefinition.DEFAULT_URL="${root}/content/views/systemview/systemview.aspx";
function SystemViewDefinition(node){
this.node=node;
this.argument=node;
this.url=SystemViewDefinition.DEFAULT_URL;
this.handle=node.getHandle();
this.label=node.getLabel();
this.image=node.getImageProfile().getDefaultImage();
this.toolTip=node.getToolTip();
}
HostedViewDefinition.prototype=new ViewDefinition;
HostedViewDefinition.prototype.constructor=HostedViewDefinition;
HostedViewDefinition.superclass=ViewDefinition.prototype;
HostedViewDefinition.POSTBACK_URL="${root}/postback.aspx";
function HostedViewDefinition(arg){
this.position=DockBinding.MAIN;
this.perspective=null;
this.entityToken=null;
this.label=null;
this.image=null;
if(arg){
for(var prop in arg){
if(this[prop]||this.prop==null){
this[prop]=arg[prop];
if(this.url){
this.url=Resolver.resolve(this.url);
}
}else{
throw "Property not recognized: "+prop;
}
}
}
}
DialogViewDefinition.prototype=new ViewDefinition;
DialogViewDefinition.prototype.constructor=HostedViewDefinition;
DialogViewDefinition.superclass=ViewDefinition.prototype;
function DialogViewDefinition(arg){
this.handler=null;
this.position=Dialog.MODAL;
this.label=null;
this.image=null;
this.width=null;
this.height=null;
if(arg){
for(var prop in arg){
if(this[prop]||this.prop==null){
this[prop]=arg[prop];
if(this.url){
this.url=Resolver.resolve(this.url);
}
if(this.handler){
if(!Interfaces.isImplemented(IDialogResponseHandler,this.handler)){
throw "IDialogResponseHandler not implemented";
}
}
}else{
throw "Property not recognized: "+prop;
}
}
}
}
Binding.prototype.constructor=Binding;
Binding.CALLBACKID="callbackid";
Binding.CALLBACKARG="callbackarg";
Binding.CLASSNAME_CLEARFLOAT="clearfloatelement";
Binding.CLASSNAME_FOCUSED="focused";
Binding.SNOOZE=Client.isMozilla==true?125:250;
Binding.ACTION_DRAG="bindingdrag";
Binding.ACTION_DROP="bindingdrop";
Binding.ACTION_DIRTY="bindingdirty";
Binding.ACTION_VALID="bindingvalid";
Binding.ACTION_UPDATED="bindingupdated";
Binding.ACTION_INVALID="bindinginvalid";
Binding.ACTION_RESIZED="bindingresized";
Binding.ACTION_FOCUSED="bindingfocused";
Binding.ACTION_BLURRED="bindingblurred";
Binding.ACTION_ATTACHED="bindingattached";
Binding.ACTION_DETACHED="bindingdetached";
Binding.ACTION_DISPOSED="bindingdisposed";
Binding.ACTION_MOVETOTOP="bindingmovetotop";
Binding.ACTION_ACTIVATED="bindingactivated";
Binding.ACTION_REGISTERED="bindingregistered";
Binding.ACTION_MOVEDONTOP="bindingmovedontop";
Binding.ACTION_INITIALIZED="bindinginitialized";
Binding.ACTION_FORCE_REFLEX="bindingforcereflex";
Binding.ACTION_DIMENSIONCHANGED="bindingdimensionchanged";
Binding.ACTION_VISIBILITYCHANGED="bindingvisibilitychanged";
Binding.ABSTRACT_METHOD=function(){
SystemDebug.stack(arguments);
throw (this.toString()+" abstract method not implemented");
};
Binding.evaluate=function(_537,_538){
var _539=null;
var _53a=_538.bindingWindow.WindowManager;
if(_53a!=null){
var _53b=Binding.parseScriptStatement(_537,_538.key);
_539=_53a.evaluate(_53b);
}
return _539;
};
Binding.parseScriptStatement=function(_53c,key){
if(_53c!=null&&key!=null){
var _53e="UserInterface.getBindingByKey ( \""+key+"\" )";
_53c=_53c.replace(/(\W|^)this(,| +|\)|;)/g,_53e);
_53c=_53c.replace(/(\W|^)this(\.)/g,_53e+".");
}
return _53c;
};
Binding.exists=function(_53f){
var _540=false;
try{
if(_53f&&_53f.bindingElement&&_53f.bindingElement.nodeType&&_53f.isDisposed==false){
_540=true;
}
}
catch(accessDeniedException){
_540=false;
}
finally{
return _540;
}
};
Binding.destroy=function(_541){
if(!_541.isDisposed){
if(_541.acceptor!=null){
_541.acceptor.dispose();
}
if(_541.dragger!=null){
_541.disableDragging();
}
if(_541.boxObject!=null){
_541.boxObject.dispose();
}
if(_541._domEventHandlers!=null){
DOMEvents.cleanupEventListeners(_541);
}
for(var _542 in _541.shadowTree){
var _543=_541.shadowTree[_542];
if(_543 instanceof Binding&&Binding.exists(_543)){
_543.dispose(true);
}
_541.shadowTree[_542]=null;
}
_541.isDisposed=true;
_541=null;
}
};
Binding.dotnetify=function(_544,_545){
var _546=_544.getCallBackID();
if(_546!=null){
var _547=DOMUtil.createElementNS(Constants.NS_XHTML,"input",_544.bindingDocument);
_547.type="hidden";
_547.id=_546;
_547.name=_546;
_547.value=_545!=null?_545:"";
_544.bindingElement.appendChild(_547);
_544.shadowTree.dotnetinput=_547;
}else{
throw _544.toString()+": Missing callback ID";
}
};
Binding.imageProfile=function(_548){
var _549=_548.getProperty("image");
var _54a=_548.getProperty("image-hover");
var _54b=_548.getProperty("image-active");
var _54c=_548.getProperty("image-disabled");
if(_548.imageProfile==null){
if(_548.image==null&&_549!=null){
_548.image=_549;
}
if(_548.imageHover==null&&_54a!=null){
_548.imageHover=_549;
}
if(_548.imageActive==null&&_54b!=null){
_548.imageActive=_54b;
}
if(_548.imageDisabled==null&&_54c!=null){
_548.imageDisabled=_54c;
}
if(_548.image||_548.imageHover||_548.imageActive||_548.imageDisabled){
_548.imageProfile=new ImageProfile(_548);
}
}
};
function Binding(){
this.logger=SystemLogger.getLogger("binding");
this.key=null;
this.bindingElement=null;
this.bindingDocument=null;
this.bindingWindow=null;
this.shadowTree=null;
this.actionListeners=null;
this.contextMenuBinding=null;
this.isRegistered=false;
this.isAttached=false;
this.isInitialized=false;
this.isDisposed=false;
this.isDraggable=false;
this.dragger=null;
this.memberDependencies=null;
this.dependentBindings=null;
this.propertyMethodMap=null;
this.isBlockingActions=false;
this.isVisible=true;
this.boxObject=null;
this.dragType=null;
this.dragAccept=null;
this.dragReject=false;
this.acceptor=null;
this.isLazy=false;
this._persist=null;
this.isBindingBuild=false;
this._hasActivationAwareness=false;
this.isFlexSuspended=false;
this.crawlerFilters=null;
this._subscriptions=null;
}
Binding.prototype.toString=function(){
return "[Binding]";
};
Binding.prototype.onBindingRegister=function(){
if(!this.isRegistered){
this.bindingElement=UserInterface.getElement(this);
this.bindingDocument=this.bindingElement.ownerDocument;
this.bindingWindow=DOMUtil.getParentWindow(this.bindingDocument);
this.shadowTree={};
this.actionListeners={};
this.propertyMethodMap={};
this.isRegistered=true;
this._subscriptions=new Map();
this._updateBindingMap(true);
if(this.getProperty("lazy")){
this.isLazy=true;
}
}
};
Binding.prototype.onBindingAttach=function(){
if(!this.isAttached){
if(!this.bindingElement.parentNode){
alert(this+" onBindingAttach: Binding must be positioned in document structure before attachment can be invoked.");
}else{
this.boxObject=new BindingBoxObject(this);
this._initializeBindingPersistanceFeatures();
this._initializeBindingGeneralFeatures();
this._initializeBindingDragAndDropFeatures();
this._updateBindingMap(true);
this.isAttached=true;
}
}
};
Binding.prototype.onBindingInitialize=function(){
if(this.dependentBindings!=null){
for(var key in this.dependentBindings){
var _54e=this.dependentBindings[key];
_54e.onMemberInitialize(this);
}
}
this.isInitialized=true;
};
Binding.prototype.onMemberInitialize=function(_54f){
if(_54f){
this.memberDependencies[_54f.key]=true;
var _550=true;
for(var key in this.memberDependencies){
if(this.memberDependencies[key]==false){
_550=false;
break;
}
}
if(_550){
this.onBindingInitialize();
}
}else{
throw new Error(this+" onMemberInitialize: Expected argument.");
}
};
Binding.prototype.attach=function(){
if(!this.isAttached){
this.onBindingAttach();
if(this.memberDependencies==null){
this.onBindingInitialize();
}
}
return this;
};
Binding.prototype.attachRecursive=function(){
this.bindingWindow.DocumentManager.attachBindings(this.bindingElement);
};
Binding.prototype.detachRecursive=function(_552){
if(_552==null){
_552=false;
}
this.bindingWindow.DocumentManager.detachBindings(this.bindingElement,!_552);
};
Binding.prototype.addMember=function(_553){
if(!this.isAttached){
throw "Cannot add members to unattached binding";
}else{
if(!_553.isInitialized){
if(!this.memberDependencies){
this.memberDependencies={};
}
this.memberDependencies[_553.key]=false;
_553.registerDependentBinding(this);
}
}
return _553;
};
Binding.prototype.addMembers=function(_554){
while(_554.hasNext()){
var _555=_554.getNext();
if(!_555.isInitialized){
this.addMember(_555);
}
}
return _554;
};
Binding.prototype.registerDependentBinding=function(_556){
if(!this.dependentBindings){
this.dependentBindings={};
}
this.dependentBindings[_556.key]=_556;
};
Binding.prototype._initializeBindingPersistanceFeatures=function(){
var _557=this.getProperty("persist");
if(_557&&Persistance.isEnabled){
var id=this.bindingElement.id;
if(!KeyMaster.hasKey(id)){
this._persist={};
var _559=new List(_557.split(" "));
while(_559.hasNext()){
var prop=_559.getNext();
var _55b=Persistance.getPersistedProperty(id,prop);
if(_55b!=null){
this._persist[prop]=_55b;
this.setProperty(prop,_55b);
}else{
_55b=this.getProperty(prop);
if(_55b!=null){
this._persist[prop]=_55b;
}
}
}
}else{
throw "Persistable bindings must have a specified ID.";
}
}
};
Binding.prototype._initializeBindingGeneralFeatures=function(){
var _55c=this.getProperty("disabled");
var _55d=this.getProperty("contextmenu");
var _55e=this.getProperty("observes");
var _55f=this.getProperty("onattach");
var _560=this.getProperty("hidden");
var _561=this.getProperty("blockactionevents");
if(_560==true&&this.isVisible==true){
this.hide();
}
if(_55c&&this.logger!=null){
this.logger.error("The 'disabled' property has been renamed 'isdisbaled'");
}
if(_55d){
this.setContextMenu(_55d);
}
if(_55e){
this.observe(this.getBindingForArgument(_55e));
}
if(_561==true){
this.isBlockingActions=true;
}
if(this.isActivationAware==true){
var root=UserInterface.getBinding(this.bindingDocument.body);
root.makeActivationAware(this);
this._hasActivationAwareness=true;
}
if(_55f!=null){
Binding.evaluate(_55f,this);
}
};
Binding.prototype._initializeBindingDragAndDropFeatures=function(){
var _563=this.getProperty("draggable");
var _564=this.getProperty("dragtype");
var _565=this.getProperty("dragaccept");
var _566=this.getProperty("dragreject");
if(_563!=null){
this.isDraggable=_563;
}
if(_564!=null){
this.dragType=_564;
if(_563!=false){
this.isDraggable=true;
}
}
if(_565!=null){
this.dragAccept=_565;
}
if(_566!=null){
this.dragReject=_566;
}
if(this.isDraggable){
this.enableDragging();
}
if(this.dragger!=null&&this.dragType!=null){
this.dragger.registerHandler(Application);
}
if(this.dragAccept!=null&&this.dragReject==true){
throw new Error("Binding cannot both accept and reject "+this);
}else{
if(this.dragAccept!=null||this.dragReject!=null){
this.acceptor=new BindingAcceptor(this);
}
}
};
Binding.prototype._updateBindingMap=function(_567){
try{
if(this.bindingWindow!=null){
var id=this.bindingElement.id;
var map=this.bindingWindow.bindingMap;
var _56a=null;
if(_567){
_56a=map[id];
if(_56a!=null&&_56a!=this){
var cry=this.toString()+" duplicate binding ID: "+id;
this.logger.error(cry);
if(Application.isDeveloperMode){
throw (cry);
}
}else{
map[id]=this;
}
}else{
_56a=map[id];
if(_56a!=null&&_56a==this){
delete map[id];
}
}
}else{
var _56c=new String("Binding#_updateBindingMap odd dysfunction: "+this.toString()+": "+_567);
if(Application.isDeveloperMode==true){
alert(_56c);
}else{
this.logger.error(_56c);
}
}
}
catch(exception){
this.logger.error(exception);
}
};
Binding.prototype.handleEvent=function(e){
};
Binding.prototype.handleAction=function(_56e){
};
Binding.prototype.handleBroadcast=function(_56f,arg){
};
Binding.prototype.handleElement=function(_571){
return false;
};
Binding.prototype.updateElement=function(_572){
return false;
};
Binding.prototype.getBindingForArgument=function(arg){
var _574=null;
switch(typeof arg){
case "object":
_574=arg;
break;
case "string":
_574=this.bindingDocument.getElementById(arg);
if(_574==null){
_574=Binding.evaluate(arg,this);
}
break;
}
if(_574!=null&&_574.nodeType!=null){
_574=UserInterface.getBinding(_574);
}
return _574;
};
Binding.prototype.serialize=function(){
var _575={};
var id=this.bindingElement.id;
if(id&&id!=this.key){
_575.id=id;
}
var _577=this.getProperty("binding");
if(_577){
_575.binding=_577;
}
return _575;
};
Binding.prototype.serializeToString=function(){
var _578=null;
if(this.isAttached){
_578=new BindingSerializer().serializeBinding(this);
}else{
throw "cannot serialize unattached binding";
}
return _578;
};
Binding.prototype.subTreeFromString=function(_579){
this.detachRecursive();
this.bindingElement.innerHTML=Client.fixUI(_579);
this.attachRecursive();
};
Binding.prototype.getProperty=function(_57a){
var _57b=this.bindingElement.getAttribute(_57a);
if(_57b){
_57b=Types.castFromString(_57b);
}
return _57b;
};
Binding.prototype.setProperty=function(prop,_57d){
if(_57d!=null){
_57d=_57d.toString();
if(String(this.bindingElement.getAttribute(prop))!=_57d){
this.bindingElement.setAttribute(prop,_57d);
if(this.isAttached==true){
if(Persistance.isEnabled&&_57d!=null){
if(this._persist!=null&&this._persist[prop]){
this._persist[prop]=_57d;
Persistance.setPersistedProperty(this.bindingElement.id,prop,_57d);
}
}
var _57e=this.propertyMethodMap[prop];
if(_57e){
_57e.call(this,this.getProperty(prop));
}
}
}
}else{
this.deleteProperty(prop);
}
};
Binding.prototype.deleteProperty=function(prop){
this.bindingElement.removeAttribute(prop);
};
Binding.prototype.getID=function(){
var _580=null;
if(Binding.exists(this)){
_580=this.bindingElement.id;
}else{
SystemDebug.stack(arguments);
}
return _580;
};
Binding.prototype.attachClassName=function(_581){
CSSUtil.attachClassName(this.bindingElement,_581);
};
Binding.prototype.detachClassName=function(_582){
CSSUtil.detachClassName(this.bindingElement,_582);
};
Binding.prototype.hasClassName=function(_583){
return CSSUtil.hasClassName(this.bindingElement,_583);
};
Binding.prototype.addActionListener=function(type,_585){
_585=_585!=null?_585:this;
if(Action.isValid(type)){
if(Interfaces.isImplemented(IActionListener,_585)){
if(!this.actionListeners[type]){
this.actionListeners[type]=[];
}
this.actionListeners[type].push(_585);
}else{
throw new Error("Could not add action-event listener. Method handleAction not implemented.");
}
}else{
alert(this+"\nCould not add undefined Action ("+_585+")");
}
};
Binding.prototype.removeActionListener=function(type,_587){
_587=_587?_587:this;
if(Action.isValid(type)){
var _588=this.actionListeners[type];
if(_588){
var i=0,_58a;
while((_58a=_588[i])!=null){
if(_58a==_587){
_588.splice(i,1);
break;
}
i++;
}
}
}
};
Binding.prototype.addEventListener=function(type,_58c){
_58c=_58c?_58c:this;
DOMEvents.addEventListener(this.bindingElement,type,_58c);
};
Binding.prototype.removeEventListener=function(type,_58e){
_58e=_58e?_58e:this;
DOMEvents.removeEventListener(this.bindingElement,type,_58e);
};
Binding.prototype.subscribe=function(_58f){
if(!this.hasSubscription(_58f)){
this._subscriptions.set(_58f,true);
EventBroadcaster.subscribe(_58f,this);
}else{
this.logger.error("Dubplicate subscription aborted:"+_58f);
}
};
Binding.prototype.unsubscribe=function(_590){
if(this.hasSubscription(_590)){
this._subscriptions.del(_590);
EventBroadcaster.unsubscribe(_590,this);
}
};
Binding.prototype.hasSubscription=function(_591){
return this._subscriptions.has(_591);
};
Binding.prototype.observe=function(_592,_593){
_592.addObserver(this,_593);
};
Binding.prototype.unObserve=function(_594,_595){
_594.removeObserver(this,_595);
};
Binding.prototype.setContextMenu=function(arg){
this.contextMenuBinding=this.getBindingForArgument(arg);
if(this.contextMenuBinding){
var self=this;
var menu=this.contextMenuBinding;
this.addEventListener(DOMEvents.CONTEXTMENU,{handleEvent:function(e){
if(Interfaces.isImplemented(IActionListener,self)==true){
var _59a={handleAction:function(){
menu.removeActionListener(MenuItemBinding.ACTION_COMMAND,self);
menu.removeActionListener(PopupBinding.ACTION_HIDE,_59a);
}};
menu.addActionListener(MenuItemBinding.ACTION_COMMAND,self);
menu.addActionListener(PopupBinding.ACTION_HIDE,_59a);
}
menu.snapToMouse(e);
}});
}else{
throw "No such contextmenu: "+arg;
}
};
Binding.prototype.getContextMenu=function(){
return this.contextMenuBinding;
};
Binding.prototype.dispatchAction=function(arg){
var _59c=null;
var _59d=null;
var _59e=false;
if(arg instanceof Action){
_59c=arg;
}else{
if(Action.isValid(arg)){
_59c=new Action(this,arg);
_59e=true;
}
}
if(_59c!=null&&Action.isValid(_59c.type)==true){
if(_59c.isConsumed==true){
_59d=_59c;
}else{
var _59f=this.actionListeners[_59c.type];
if(_59f!=null){
_59c.listener=this;
var i=0,_5a1;
while((_5a1=_59f[i++])!=null){
if(_5a1&&_5a1.handleAction){
_5a1.handleAction(_59c);
}
}
}
var _5a2=true;
if(this.isBlockingActions==true){
switch(_59c.type){
case Binding.ACTION_FOCUSED:
case Binding.ACTION_BLURRED:
case Binding.ACTION_ACTIVATED:
case Binding.ACTION_FORCE_REFLEX:
case DockTabBinding.ACTION_UPDATE_VISUAL:
case PageBinding.ACTION_DOPOSTBACK:
break;
default:
if(!_59e){
_5a2=false;
}
break;
}
}
if(_5a2){
_59d=this.migrateAction(_59c);
}else{
_59d=_59c;
}
}
}
return _59d;
};
Binding.prototype.migrateAction=function(_5a3){
var _5a4=null;
var _5a5=null;
var node=this.getMigrationParent();
if(node){
while(node&&!_5a4&&node.nodeType!=Node.DOCUMENT_NODE){
_5a4=UserInterface.getBinding(node);
node=node.parentNode;
}
if(_5a4){
_5a5=_5a4.dispatchAction(_5a3);
}else{
_5a5=_5a3;
}
}
return _5a5;
};
Binding.prototype.reflex=function(_5a7){
if(Application.isOperational==true){
FlexBoxBinding.reflex(this,_5a7);
}
};
Binding.prototype.getMigrationParent=function(){
var _5a8=null;
if(true){
try{
var _5a9=this.bindingElement.parentNode;
if(_5a9!=null){
_5a8=_5a9;
}
}
catch(wtfException){
this.logger.error("Binding#getMigrationParent exception");
SystemDebug.stack(arguments);
_5a8=null;
}
}
return _5a8;
};
Binding.prototype.add=function(_5aa){
if(_5aa.bindingDocument==this.bindingDocument){
this.bindingElement.appendChild(_5aa.bindingElement);
}else{
throw "Could not add "+_5aa.toString()+" of different document origin.";
}
return _5aa;
};
Binding.prototype.addFirst=function(_5ab){
if(_5ab.bindingDocument==this.bindingDocument){
this.bindingElement.insertBefore(_5ab.bindingElement,this.bindingElement.firstChild);
}else{
throw "Could not add "+_5ab.toString()+" of different document origin.";
}
return _5ab;
};
Binding.prototype.getAncestorBindingByLocalName=function(_5ac,_5ad){
return BindingFinder.getAncestorBindingByLocalName(this,_5ac,_5ad);
};
Binding.prototype.getAncestorBindingByType=function(impl,_5af){
return BindingFinder.getAncestorBindingByType(this,impl,_5af);
};
Binding.prototype.getChildBindingByType=function(impl){
return BindingFinder.getChildBindingByType(this,impl);
};
Binding.prototype.getChildElementsByLocalName=function(_5b1){
return BindingFinder.getChildElementsByLocalName(this,_5b1);
};
Binding.prototype.getChildElementByLocalName=function(_5b2){
return this.getChildElementsByLocalName(_5b2).getFirst();
};
Binding.prototype.getDescendantElementsByLocalName=function(_5b3){
return new List(DOMUtil.getElementsByTagName(this.bindingElement,_5b3));
};
Binding.prototype.getChildBindingsByLocalName=function(_5b4){
return this.getDescendantBindingsByLocalName(_5b4,true);
};
Binding.prototype.getChildBindingByLocalName=function(_5b5){
return this.getChildBindingsByLocalName(_5b5).getFirst();
};
Binding.prototype.getDescendantBindingsByLocalName=function(_5b6,_5b7){
return BindingFinder.getDescendantBindingsByLocalName(this,_5b6,_5b7);
};
Binding.prototype.getDescendantBindingByLocalName=function(_5b8){
return this.getDescendantBindingsByLocalName(_5b8,false).getFirst();
};
Binding.prototype.getDescendantBindingsByType=function(impl){
return BindingFinder.getDescendantBindingsByType(this,impl);
};
Binding.prototype.getDescendantBindingByType=function(impl){
return BindingFinder.getDescendantBindingByType(this,impl);
};
Binding.prototype.getNextBindingByLocalName=function(_5bb){
return BindingFinder.getNextBindingByLocalName(this,_5bb);
};
Binding.prototype.getPreviousBindingByLocalName=function(_5bc){
return BindingFinder.getPreviousBindingByLocalName(this,_5bc);
};
Binding.prototype.getBindingElement=function(){
return this.bindingDocument.getElementById(this.bindingElement.id);
};
Binding.prototype.getOrdinalPosition=function(_5bd){
return DOMUtil.getOrdinalPosition(this.bindingElement,_5bd);
};
Binding.prototype.isFirstBinding=function(_5be){
return (this.getOrdinalPosition(_5be)==0);
};
Binding.prototype.isLastBinding=function(_5bf){
return DOMUtil.isLastElement(this.bindingElement,_5bf);
};
Binding.prototype.hasCallBackID=function(){
return this.getProperty(Binding.CALLBACKID)!=null;
};
Binding.prototype.getCallBackID=function(){
return this.getProperty(Binding.CALLBACKID);
};
Binding.prototype.setCallBackID=function(id){
this.setProperty(Binding.CALLBACKID,id);
};
Binding.prototype.hasCallBackArg=function(){
return this.getCallBackArg()!=null;
};
Binding.prototype.getCallBackArg=function(){
return this.getProperty(Binding.CALLBACKARG);
};
Binding.prototype.setCallBackArg=function(_5c1){
this.setProperty(Binding.CALLBACKARG,_5c1);
};
Binding.prototype.dispose=function(_5c2){
if(!this.isDisposed){
if(!_5c2){
this.bindingWindow.DocumentManager.detachBindings(this.bindingElement);
var _5c3=this.bindingDocument.getElementById(this.bindingElement.id);
if(_5c3){
if(Client.isExplorer){
_5c3.outerHTML="";
}else{
_5c3.parentNode.removeChild(_5c3);
}
}
}else{
if(this._subscriptions.hasEntries()){
var self=this;
var list=new List();
this._subscriptions.each(function(_5c6){
list.add(_5c6);
});
list.each(function(_5c7){
self.unsubscribe(_5c7);
});
}
this.onBindingDispose();
UserInterface.unRegisterBinding(this);
}
}
};
Binding.prototype.onBindingDispose=function(){
if(this._hasActivationAwareness){
var root=UserInterface.getBinding(this.bindingDocument.body);
root.makeActivationAware(this,false);
this._hasActivationAwareness=false;
}
this._updateBindingMap(false);
};
Binding.prototype.enableDragging=function(){
if(this.dragger==null){
this.dragger=new BindingDragger(this);
this.addEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.addEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.addEventListener(DOMEvents.MOUSEUP,this.dragger);
}
this.isDraggable=true;
};
Binding.prototype.disableDragging=function(){
if(this.dragger!=null){
this.removeEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.removeEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.removeEventListener(DOMEvents.MOUSEUP,this.dragger);
this.dragger.dispose();
this.dragger=null;
}
this.isDraggable=false;
};
Binding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.display="block";
this.setProperty("hidden",true);
this.isVisible=true;
}
};
Binding.prototype.hide=function(){
if(this.isVisible==true){
this.bindingElement.style.display="none";
this.deleteProperty("hidden");
this.isVisible=false;
}
};
Binding.prototype.wakeUp=function(_5c9,_5ca){
_5ca=_5ca?_5ca:Binding.SNOOZE;
if(this.isLazy==true){
this.deleteProperty("lazy");
this.isLazy=false;
Application.lock(this);
this.dispatchAction(FocusBinding.ACTION_UPDATE);
var self=this;
setTimeout(function(){
self.attachRecursive();
setTimeout(function(){
if(_5c9!==undefined){
self[_5c9]();
}
LazyBindingBinding.wakeUp(self);
Application.unlock(self);
},_5ca);
},0);
}
};
Binding.prototype.handleCrawler=function(_5cc){
if(_5cc.response==null&&this.isLazy==true){
if(_5cc.id==DocumentCrawler.ID&&_5cc.mode==DocumentCrawler.MODE_REGISTER){
_5cc.response=NodeCrawler.NORMAL;
}else{
_5cc.response=NodeCrawler.SKIP_CHILDREN;
}
}
if(_5cc.response==null&&this.crawlerFilters!=null){
if(this.crawlerFilters.has(_5cc.id)){
_5cc.response=NodeCrawler.SKIP_CHILDREN;
}
}
if(_5cc.response==null){
switch(_5cc.id){
case FlexBoxCrawler.ID:
case FocusCrawler.ID:
if(!this.isVisible){
_5cc.response=NodeCrawler.SKIP_CHILDREN;
}
break;
}
}
};
Binding.newInstance=function(_5cd){
var _5ce=DOMUtil.createElementNS(Constants.NS_UI,"ui:binding",_5cd);
return UserInterface.registerBinding(_5ce,Binding);
};
DataBinding.prototype=new Binding;
DataBinding.prototype.constructor=DataBinding;
DataBinding.superclass=Binding.prototype;
DataBinding.AUTOGENERATED="autogenerateddatabindingname";
DataBinding.TYPE_NUMBER="number";
DataBinding.TYPE_INTEGER="integer";
DataBinding.TYPE_STRING="string";
DataBinding.CLASSNAME_INVALID="invalid";
DataBinding.CLASSNAME_WARNING="warning";
DataBinding.CLASSNAME_FOCUSED="focused";
DataBinding.CLASSNAME_DISABLED="disabled";
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_LOGIN,{handleBroadcast:function(){
var _5cf=new List(ConfigurationService.GetValidatingRegularExpressions("dummy"));
_5cf.each(function(_5d0){
DataBinding.expressions[_5d0.Key]=new RegExp(_5d0.Value);
});
}});
DataBinding.expressions={};
DataBinding.warnings={"required":"Required","number":"Numbers only","integer":"Integers only","programmingidentifier":"Invalid identifier","programmingnamespace":"Invalid namespace","url":"Invalid URL","minlength":"${count} characters minimum","maxlength":"${count} characters maximum","currency":"Invalid notation","email":"Invalid e-mail","guid":"Invalid GUID"};
DataBinding.errors={"programmingidentifier":"An identifier must not contain spaces or special characters. Only characters a-z, A-Z, 0-9 and '_' are allowed. An identifier must begin with a letter (not a number).","programmingnamespace":"A namespace must take the form Example.Name.Space where only characters a-z, A-Z, 0-9, '_' and dots (.) are allowed. Each part of the namespace must begin with a letter (not a number).","url":"A valid URL must begin with a forward slash, designating the site root, or an URL scheme name such as http://. Simpliefied addresses such as www.example.com cannot be resolved reliably by the browser. Relative URLs are not supported."};
DataBinding.getAssociatedLabel=function(_5d1){
var _5d2=null;
var _5d3=_5d1.getAncestorBindingByLocalName("field");
if(_5d3&&_5d3 instanceof FieldBinding){
var desc=_5d3.getDescendantBindingByLocalName("fielddesc");
if(desc&&desc instanceof FieldDescBinding){
_5d2=desc.getLabel();
}
}
return _5d2;
};
function DataBinding(){
this.logger=SystemLogger.getLogger("DataBinding");
this._name=null;
this.isDirty=false;
this.isFocusable=true;
this.isFocused=false;
this.error=null;
return this;
}
DataBinding.prototype.toString=function(){
return "[DataBinding]";
};
DataBinding.prototype.onBindingRegister=function(){
DataBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["isdisabled"]=this.setDisabled;
var name=this._name?this._name:this.getProperty("name");
if(name==null){
name=DataBinding.AUTOGENERATED+KeyMaster.getUniqueKey();
}
this.setName(name);
};
DataBinding.prototype.onBindingAttach=function(){
DataBinding.superclass.onBindingAttach.call(this);
if(this.getProperty("error")){
this.error=this.getProperty("error");
}
};
DataBinding.prototype.onBindingDispose=function(){
DataBinding.superclass.onBindingDispose.call(this);
if(this.isFocused==true){
this.blur();
}
var _5d6=this.bindingWindow.DataManager;
_5d6.unRegisterDataBinding(this._name);
};
DataBinding.prototype.setName=function(name){
var _5d8=this.bindingWindow.DataManager;
if(_5d8.getDataBinding(name)){
_5d8.unRegisterDataBinding(name);
}
_5d8.registerDataBinding(name,this);
this.setProperty("name",name);
this._name=name;
};
DataBinding.prototype.getName=function(){
return this._name;
};
DataBinding.prototype.focus=function(){
if(this.isFocusable&&!this.isFocused){
this.isFocused=true;
this.dispatchAction(Binding.ACTION_FOCUSED);
this.attachClassName(DataBinding.CLASSNAME_FOCUSED);
}
};
DataBinding.prototype.blur=function(){
if(this.isFocused){
this.isFocused=false;
this.dispatchAction(Binding.ACTION_BLURRED);
this.detachClassName(DataBinding.CLASSNAME_FOCUSED);
}
};
DataBinding.prototype.dirty=function(){
this.bindingWindow.DataManager.dirty(this);
};
DataBinding.prototype.clean=function(){
this.bindingWindow.DataManager.clean(this);
};
DataBinding.prototype.validate=Binding.ABSTRACT_METHOD;
DataBinding.prototype.manifest=Binding.ABSTRACT_METHOD;
DataBinding.prototype.getValue=Binding.ABSTRACT_METHOD;
DataBinding.prototype.setValue=Binding.ABSTRACT_METHOD;
DataBinding.prototype.getResult=Binding.ABSTRACT_METHOD;
DataBinding.prototype.setResult=Binding.ABSTRACT_METHOD;
RootBinding.prototype=new Binding;
RootBinding.prototype.constructor=RootBinding;
RootBinding.superclass=Binding.prototype;
RootBinding.ACTION_PHASE_1="root init phase 1";
RootBinding.ACTION_PHASE_2="root init phase 2";
RootBinding.ACTION_PHASE_3="root init phase 3";
RootBinding.ACTION_ACTIVATED="root activated";
RootBinding.ACTION_DEACTIVATED="root deactivated";
function RootBinding(){
this.logger=SystemLogger.getLogger("RootBinding");
this.isActivationAware=false;
this.isActivated=false;
this._activationawares=null;
return this;
}
RootBinding.prototype.toString=function(){
return "[RootBinding]";
};
RootBinding.prototype.onBindingRegister=function(){
RootBinding.superclass.onBindingRegister.call(this);
this.logger=SystemLogger.getLogger(this.bindingDocument.title.toString());
if(this.bindingWindow.WindowManager){
this.subscribe(this.bindingWindow.WindowManager.WINDOW_EVALUATED_BROADCAST);
}
this._activationawares=new List();
this.isActivated=false;
this._setupActivationAwareness(true);
};
RootBinding.prototype.onBindingDispose=function(){
RootBinding.superclass.onBindingDispose.call(this);
this._setupActivationAwareness(false);
EventBroadcaster.unsubscribe(this.bindingWindow.WindowManager.WINDOW_EVALUATED_BROADCAST,this);
};
RootBinding.prototype.handleBroadcast=function(_5d9,arg){
RootBinding.superclass.handleBroadcast.call(this,_5d9,arg);
var _5db=this.bindingWindow.WindowManager.WINDOW_EVALUATED_BROADCAST;
switch(_5d9){
case _5db:
this.dispatchAction(RootBinding.ACTION_PHASE_1);
this.dispatchAction(RootBinding.ACTION_PHASE_2);
this.dispatchAction(RootBinding.ACTION_PHASE_3);
this.unsubscribe(_5db);
break;
}
};
RootBinding.prototype.onActivate=function(){
this._onActivationChanged(true);
};
RootBinding.prototype.onDeactivate=function(){
this._onActivationChanged(false);
};
RootBinding.prototype._onActivationChanged=function(_5dc){
var _5dd=_5dc?RootBinding.ACTION_ACTIVATED:RootBinding.ACTION_DEACTIVATED;
if(_5dc!=this.isActivated){
this.isActivated=_5dc;
this.dispatchAction(_5dd);
var _5de=new List();
var self=this;
this._activationawares.each(function(_5e0){
if(_5e0.isActivationAware){
try{
if(_5dc){
if(!_5e0.isActivated){
_5e0.onActivate();
}
}else{
if(_5e0.isActivated){
_5e0.onDeactivate();
}
}
}
catch(exception){
self.logger.error(exception);
_5de.add(_5e0);
}
}
});
_5de.each(function(_5e1){
this._activationawares.del(_5e1);
});
_5de.dispose();
}else{
var _5e2="Activation dysfunction: "+this.bindingDocument.title;
if(Application.isDeveloperMode==true){
this.logger.error(_5e2);
}else{
this.logger.error(_5e2);
}
}
};
RootBinding.prototype.makeActivationAware=function(_5e3,_5e4){
if(Interfaces.isImplemented(IActivationAware,_5e3,true)==true){
if(_5e4==false){
this._activationawares.del(_5e3);
}else{
this._activationawares.add(_5e3);
if(this.isActivated==true){
_5e3.onActivate();
}
}
}else{
if(Application.isDeveloperMode==true){
alert("RootBinding: IActivationAware not implemented ("+_5e3+")");
}
}
};
RootBinding.prototype._setupActivationAwareness=function(_5e5){
var _5e6=this.getMigrationParent();
if(_5e6!=null){
var root=_5e6.ownerDocument.body;
var _5e8=UserInterface.getBinding(root);
if(_5e8!=null){
_5e8.makeActivationAware(this,_5e5);
}
}
};
RootBinding.prototype.handleCrawler=function(_5e9){
RootBinding.superclass.handleCrawler.call(this,_5e9);
if(_5e9.type==NodeCrawler.TYPE_ASCENDING){
_5e9.nextNode=this.bindingWindow.frameElement;
}
};
RootBinding.prototype.getMigrationParent=function(){
var _5ea=null;
if(this.bindingWindow.parent){
_5ea=this.bindingWindow.frameElement;
}
return _5ea;
};
MatrixBinding.prototype=new Binding;
MatrixBinding.prototype.constructor=MatrixBinding;
MatrixBinding.superclass=Binding.prototype;
MatrixBinding.CLASSNAME_MANIFESTER="matrixbindingmanifester";
MatrixBinding.CENTER="c";
MatrixBinding.NORTH="n";
MatrixBinding.SOUTH="s";
MatrixBinding.EAST="e";
MatrixBinding.WEST="w";
MatrixBinding.NORTHEAST="ne";
MatrixBinding.NORTHWEST="nw";
MatrixBinding.SOUTHEAST="se";
MatrixBinding.SOUTHWEST="sw";
MatrixBinding.markup=null;
function MatrixBinding(){
this.logger=SystemLogger.getLogger("MatrixBinding");
this.hasMatrix=true;
this.template="matrixbindingelement.xml";
this._isTableIndexed=false;
return this;
}
MatrixBinding.prototype.toString=function(){
return "[MatrixBinding]";
};
MatrixBinding.prototype.onBindingAttach=function(){
MatrixBinding.superclass.onBindingAttach.call(this);
if(this.hasMatrix){
this.bindingElement.innerHTML=Templates.getTemplateElementText(this.template);
this.shadowTree.table=this.bindingElement.firstChild;
}
};
MatrixBinding.prototype._indexTable=function(){
var _5eb=new List(DOMUtil.getElementsByTagName(this.bindingElement,"td"));
while(_5eb.hasNext()){
var cell=_5eb.getNext();
this.shadowTree[cell.className]=cell;
}
};
MatrixBinding.prototype.add=function(_5ed){
var _5ee=null;
if(this.hasMatrix){
if(!this._isTableIndexed){
this._indexTable();
}
this.shadowTree[MatrixBinding.CENTER].appendChild(_5ed.bindingElement);
_5ee=_5ed;
}else{
_5ee=MatrixBinding.superclass.add.call(this,_5ed);
}
return _5ee;
};
MatrixBinding.prototype.addFirst=function(_5ef){
var _5f0=null;
if(this.hasMatrix){
if(!this._isTableIndexed){
this._indexTable();
}
var _5f1=this.shadowTree[MatrixBinding.CENTER];
_5f1.insertBefore(_5ef.bindingElement,_5f1.firstChild);
_5f0=_5ef;
}else{
_5f0=MatrixBinding.superclass.addFirst.call(this,_5ef);
}
return _5ef;
};
MatrixBinding.prototype.manifest=function(){
if(!this._isTableIndexed){
this._indexTable();
}
var div=this.bindingDocument.createElement("div");
div.appendChild(this.bindingDocument.createTextNode("!"));
div.className=MatrixBinding.CLASSNAME_MANIFESTER;
this.shadowTree[MatrixBinding.CENTER].appendChild(div);
};
MatrixBinding.newInstance=function(_5f3){
var _5f4=DOMUtil.createElementNS(Constants.NS_UI,"ui:matrix",_5f3);
return UserInterface.registerBinding(_5f4,MatrixBinding);
};
FlexBoxBinding.prototype=new Binding;
FlexBoxBinding.prototype.constructor=FlexBoxBinding;
FlexBoxBinding.superclass=Binding.prototype;
FlexBoxBinding.CLASSNAME="flexboxelement";
FlexBoxBinding.TIMEOUT=250;
FlexBoxBinding.reflex=function(_5f5,_5f6){
var list=new List();
var _5f8=new FlexBoxCrawler();
_5f8.mode=_5f6?FlexBoxCrawler.MODE_FORCE:FlexBoxCrawler.MODE_NORMAL;
_5f8.startBinding=_5f5;
_5f8.crawl(_5f5.bindingElement,list);
list.each(function(_5f9){
_5f9.flex();
});
if(Client.isExplorer){
setTimeout(function(){
list.each(function(_5fa){
if(Binding.exists(_5fa)){
_5fa.flex();
}
});
},0.5*FlexBoxBinding.TIMEOUT);
}
setTimeout(function(){
list.each(function(_5fb){
if(Binding.exists(_5fb)){
_5fb.isFlexSuspended=false;
}
});
list.dispose();
},FlexBoxBinding.TIMEOUT);
_5f8.dispose();
};
function FlexBoxBinding(){
this.logger=SystemLogger.getLogger("FlexBoxBinding");
this.isFlexSuspended=false;
this.isFlexible=true;
this.isFit=true;
return this;
}
FlexBoxBinding.prototype.toString=function(){
return "[FlexBoxBinding]";
};
FlexBoxBinding.prototype.onBindingRegister=function(){
FlexBoxBinding.superclass.onBindingRegister.call(this);
if(this.getProperty("flex")==false){
this.isFlexible=false;
}
if(this.isFlexible){
this.attachClassName(FlexBoxBinding.CLASSNAME);
}
};
FlexBoxBinding.prototype.onBindingAttach=function(){
FlexBoxBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_UPDATED);
};
FlexBoxBinding.prototype.handleAction=function(_5fc){
FlexBoxBinding.superclass.handleAction.call(this,_5fc);
switch(_5fc.type){
case Binding.ACTION_UPDATED:
this.isFit=false;
break;
}
};
FlexBoxBinding.prototype._getSiblingsSpan=function(_5fd){
var _5fe=0;
var _5ff=new List(this.bindingElement.parentNode.childNodes);
while(_5ff.hasNext()){
var _600=_5ff.getNext();
if(_600.nodeType==Node.ELEMENT_NODE&&_600!=this.bindingElement){
if(!this._isOutOfFlow(_600)){
var rect=_600.getBoundingClientRect();
if(_5fd){
height+=(rect.right-rect.left);
}else{
_5fe+=(rect.bottom-rect.top);
}
}
}
}
return _5fe;
};
FlexBoxBinding.prototype._isOutOfFlow=function(_602){
var _603=CSSComputer.getPosition(_602);
var _604=CSSComputer.getFloat(_602);
return (_603=="absolute"||_604!="none"?true:false);
};
FlexBoxBinding.prototype._getCalculatedHeight=function(){
var _605=this.bindingElement.parentNode;
var rect=_605.getBoundingClientRect();
var _607=rect.bottom-rect.top;
var _608=CSSComputer.getPadding(_605);
var _609=CSSComputer.getBorder(_605);
_607-=(_608.top+_608.bottom);
_607-=(_609.top+_609.bottom);
return _607;
};
FlexBoxBinding.prototype._getCalculatedWidth=function(){
var _60a=this.bindingElement.parentNode;
var rect=_60a.getBoundingClientRect();
var _60c=rect.right-rect.left;
var _60d=CSSComputer.getPadding(_60a);
var _60e=CSSComputer.getBorder(_60a);
_60c-=(_60d.left+_60d.right);
_60c-=(_60e.left+_60e.right);
return _60c;
};
FlexBoxBinding.prototype.setFlexibility=function(_60f){
if(_60f!=this.isFlexible){
if(_60f){
this.attachClassName(FlexBoxBinding.CLASSNAME);
this.deleteProperty("flex");
}else{
this.detachClassName(FlexBoxBinding.CLASSNAME);
this.setProperty("flex",false);
}
this.isFlexible=_60f;
}
};
FlexBoxBinding.prototype.flex=function(){
if(Binding.exists(this)){
if(this.isFlexible==true){
var _610=this._getSiblingsSpan();
_610=this._getCalculatedHeight()-_610;
if(!isNaN(_610)&&_610>=0){
if(_610!=this.bindingElement.offsetHeight){
this.bindingElement.style.height=String(_610)+"px";
}
}
}
}
};
FlexBoxBinding.prototype.fit=function(_611){
if(!this.isFit||_611){
var _612=0;
new List(this.bindingElement.childNodes).each(function(_613){
if(_613.nodeType==Node.ELEMENT_NODE){
if(!this._isOutOfFlow(_613)){
var rect=_613.getBoundingClientRect();
_612+=(rect.bottom-rect.top);
}
}
},this);
this._setFitnessHeight(_612);
this.isFit=true;
}
};
FlexBoxBinding.prototype._setFitnessHeight=function(_615){
var _616=CSSComputer.getPadding(this.bindingElement);
var _617=CSSComputer.getBorder(this.bindingElement);
_615+=_616.top+_616.bottom;
_615+=_617.top+_617.bottom;
this.bindingElement.style.height=_615+"px";
};
ScrollBoxBinding.prototype=new FlexBoxBinding;
ScrollBoxBinding.prototype.constructor=ScrollBoxBinding;
ScrollBoxBinding.superclass=FlexBoxBinding.prototype;
function ScrollBoxBinding(){
this.logger=SystemLogger.getLogger("ScrollBoxBinding");
}
ScrollBoxBinding.prototype.toString=function(){
return "[ScrollBoxBinding]";
};
ScrollBoxBinding.prototype.onBindingRegister=function(){
ScrollBoxBinding.superclass.onBindingRegister.call(this);
this.addActionListener(BalloonBinding.ACTION_INITIALIZE);
};
ScrollBoxBinding.prototype.handleAction=function(_618){
ScrollBoxBinding.superclass.handleAction.call(this,_618);
switch(_618.type){
case BalloonBinding.ACTION_INITIALIZE:
_618.consume();
break;
}
};
ScrollBoxBinding.prototype.setPosition=function(_619){
this.bindingElement.scrollLeft=_619.x;
this.bindingElement.scrollTop=_619.y;
};
ScrollBoxBinding.prototype.getPosition=function(){
return new Point(this.bindingElement.scrollLeft,this.bindingElement.scrollTop);
};
LabelBinding.prototype=new Binding;
LabelBinding.prototype.constructor=LabelBinding;
LabelBinding.superclass=Binding.prototype;
LabelBinding.DIALOG_INDECATOR_SUFFIX=String.fromCharCode(8230);
LabelBinding.DEFAULT_IMAGE="${root}/images/blank.png";
LabelBinding.EXPLORER_IMAGE_FILTER="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='${url}',sizingMethod='crop');";
LabelBinding.CLASSNAME_TEXTOVERFLOW="textoverflow";
LabelBinding.CLASSNAME_GRAYTEXT="graytext";
LabelBinding.CLASSNAME_FLIPPED="flipped";
function LabelBinding(){
this.logger=SystemLogger.getLogger("LabelBinding");
this.hasImage=false;
this.hasLabel=false;
this.isFlipped=false;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
LabelBinding.prototype.toString=function(){
return "[LabelBinding]";
};
LabelBinding.prototype.onBindingRegister=function(){
LabelBinding.superclass.onBindingRegister.call(this);
if(this.isBindingBuild){
this.shadowTree.labelBody=this._getBuildElement("labelbody");
}else{
this.shadowTree.labelBody=DOMUtil.createElementNS(Constants.NS_UI,"ui:labelbody",this.bindingDocument);
this.bindingElement.appendChild(this.shadowTree.labelBody);
}
};
LabelBinding.prototype.onBindingAttach=function(){
LabelBinding.superclass.onBindingAttach.call(this);
if(this.isBindingBuild){
var _61a=this._getBuildElement("labeltext");
if(_61a){
this.shadowTree.labelText=_61a;
this.shadowTree.text=_61a.firstChild;
this.hasLabel=true;
}
}else{
var _61b=this.getProperty("label");
var _61c=this.getProperty("image");
var _61d=this.getProperty("tooltip");
if(_61b){
this.setLabel(_61b,false);
}
if(_61c){
this.setImage(_61c,false);
}
if(_61d){
this.setToolTip(_61d);
}
this.buildClassName();
}
};
LabelBinding.prototype.setLabel=function(_61e,_61f){
_61e=_61e!=null?_61e:"";
if(!this.hasLabel){
this.buildLabel();
}
this.shadowTree.text.data=Resolver.resolve(_61e);
this.setProperty("label",_61e);
if(!_61f){
this.buildClassName();
}
};
LabelBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
LabelBinding.prototype.setImage=function(url,_621){
if(url!=false){
url=url?url:LabelBinding.DEFAULT_IMAGE;
this.setAlphaTransparentBackdrop(Resolver.resolve(url));
this.setProperty("image",url);
this.hasImage=true;
if(!_621){
this.buildClassName();
}
}else{
this.setAlphaTransparentBackdrop(false);
this.deleteProperty("image");
this.hasImage=false;
this.buildClassName();
}
};
LabelBinding.prototype.setDefaultImage=function(url){
this.setImage(LabelBinding.DEFAULT_IMAGE);
};
LabelBinding.prototype.setAlphaTransparentBackdrop=function(url){
if(this.shadowTree.labelBody){
if(url!=false){
url=Resolver.resolve(url);
if(Client.isExplorer6){
this.shadowTree.labelBody.style.filter=LabelBinding.EXPLORER_IMAGE_FILTER.replace("${url}",url);
}else{
this.shadowTree.labelBody.style.backgroundImage="url('"+url+"')";
}
}else{
if(Client.isExplorer6){
this.shadowTree.labelBody.style.filter="none";
}else{
this.shadowTree.labelBody.style.backgroundImage="none";
}
}
}
};
LabelBinding.prototype.getImage=function(){
return this.getProperty("image");
};
LabelBinding.prototype.setToolTip=function(_624){
this.setProperty("tooltip",_624);
if(_624!=this.getLabel()){
this.setProperty("title",Resolver.resolve(_624));
}
};
LabelBinding.prototype.getToolTip=function(_625){
return this.getProperty("tooltip");
};
LabelBinding.prototype.flip=function(_626){
_626=_626==null?true:_626;
var _627=LabelBinding.CLASSNAME_FLIPPED;
if(!Client.isExplorer6){
this.isFlipped=_626;
if(_626){
this.attachClassName(_627);
}else{
this.detachClassName(_627);
}
}
};
LabelBinding.prototype.buildLabel=function(){
if(!this.hasLabel){
this.shadowTree.labelText=DOMUtil.createElementNS(Constants.NS_UI,"ui:labeltext",this.bindingDocument);
this.shadowTree.text=this.bindingDocument.createTextNode("");
this.shadowTree.labelText.appendChild(this.shadowTree.text);
this.shadowTree.labelBody.appendChild(this.shadowTree.labelText);
this.hasLabel=true;
}
};
LabelBinding.prototype.buildClassName=function(){
if(Client.isMozilla){
}
var _628="textonly";
var _629="imageonly";
var _62a="both";
if(this.hasLabel&&this.hasImage){
this.detachClassName(_628);
this.detachClassName(_629);
this.attachClassName(_62a);
}else{
if(this.hasLabel){
this.detachClassName(_62a);
this.detachClassName(_629);
this.attachClassName(_628);
}else{
if(this.hasImage){
this.detachClassName(_62a);
this.detachClassName(_628);
this.attachClassName(_629);
}
}
}
};
LabelBinding.prototype._buildOverflowClassName=function(){
if(Client.isMozilla&&this.isAttached&&this.getLabel()){
if(this.isAttached&&this.shadowTree.labelText){
this.detachClassName(LabelBinding.CLASSNAME_TEXTOVERFLOW);
if(this.shadowTree.labelText.offsetWidth>this.shadowTree.labelBody.offsetWidth){
this.attachClassName(LabelBinding.CLASSNAME_TEXTOVERFLOW);
}
}
}
};
LabelBinding.newInstance=function(_62b){
var _62c=DOMUtil.createElementNS(Constants.NS_UI,"ui:labelbox",_62b);
return UserInterface.registerBinding(_62c,LabelBinding);
};
TextBinding.prototype=new Binding;
TextBinding.prototype.constructor=TextBinding;
TextBinding.superclass=Binding.prototype;
function TextBinding(){
this.logger=SystemLogger.getLogger("TextBinding");
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
TextBinding.prototype.toString=function(){
return "[TextBinding]";
};
TextBinding.prototype.onBindingAttach=function(){
TextBinding.superclass.onBindingAttach.call(this);
var _62d=this.getProperty("label");
if(!_62d){
_62d=DOMUtil.getTextContent(this.bindingElement);
}
var text=this.bindingDocument.createTextNode(Resolver.resolve(_62d));
this.bindingElement.parentNode.replaceChild(text,this.bindingElement);
this.dispose();
};
TextBinding.prototype.setLabel=function(_62f){
this.setProperty("label",_62f);
};
TextBinding.newInstance=function(_630){
var _631=DOMUtil.createElementNS(Constants.NS_UI,"ui:text",_630);
return UserInterface.registerBinding(_631,TextBinding);
};
BroadcasterSetBinding.prototype=new Binding;
BroadcasterSetBinding.prototype.constructor=BroadcasterSetBinding;
BroadcasterSetBinding.superclass=Binding.prototype;
function BroadcasterSetBinding(){
this.logger=SystemLogger.getLogger("BroadcasterSetBinding");
}
BroadcasterSetBinding.prototype.toString=function(){
return "[BroadcasterSetBinding]";
};
BroadcasterBinding.prototype=new Binding;
BroadcasterBinding.prototype.constructor=BroadcasterBinding;
BroadcasterBinding.superclass=Binding.prototype;
function BroadcasterBinding(){
this.logger=SystemLogger.getLogger("BroadcasterBinding");
this._observers=null;
}
BroadcasterBinding.prototype.toString=function(){
return "[BroadcasterBinding]";
};
BroadcasterBinding.prototype.onBindingRegister=function(){
BroadcasterBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["isdisabled"]=this.setDisabled;
this._observers=new List();
};
BroadcasterBinding.prototype.setProperty=function(_632,_633){
BroadcasterBinding.superclass.setProperty.call(this,_632,_633);
function update(list){
if(list){
list.each(function(_635){
_635.setProperty(_632,_633);
});
}
}
if(this._observers["*"]!=null){
update(this._observers["*"]);
}
var _636=this._observers[_632];
if(_636){
update(_636);
}
};
BroadcasterBinding.prototype.deleteProperty=function(_637){
BroadcasterBinding.superclass.deleteProperty.call(this,_637);
function update(list){
if(list){
list.each(function(_639){
_639.deleteProperty(_637);
});
}
}
if(this._observers["*"]!=null){
update(this._observers["*"]);
}
var _63a=this._observers[_637];
if(_63a){
update(_63a);
}
};
BroadcasterBinding.prototype.addObserver=function(_63b,_63c){
_63c=_63c?_63c:"*";
_63c=new List(_63c.split(" "));
while(_63c.hasNext()){
var _63d=_63c.getNext();
switch(_63d){
case "*":
this._setAllProperties(_63b);
break;
default:
var _63e=this.getProperty(_63d);
_63b.setProperty(_63d,_63e);
break;
}
if(!this._observers[_63d]){
this._observers[_63d]=new List();
}
this._observers[_63d].add(_63b);
}
};
BroadcasterBinding.prototype._setAllProperties=function(_63f){
var atts=new List(this.bindingElement.attributes);
while(atts.hasNext()){
var att=atts.getNext();
if(att.specified){
var _642=att.nodeName;
switch(_642){
case "id":
case "key":
break;
default:
var _643=this.getProperty(_642);
_63f.setProperty(_642,_643);
break;
}
}
}
};
BroadcasterBinding.prototype.removeObserver=function(_644,_645){
_645=_645?_645:"*";
_645=new List(_645.split(" "));
while(_645.hasNext()){
var list=this._observers[_645.getNext()];
if(list){
while(list.hasNext()){
var _647=list.getNext();
if(_647==_644){
list.del(_647);
}
}
}
}
};
BroadcasterBinding.prototype.disable=function(){
this.setDisabled(true);
};
BroadcasterBinding.prototype.enable=function(){
this.setDisabled(false);
};
BroadcasterBinding.prototype.setDisabled=function(_648){
this.setProperty("isdisabled",_648);
};
BroadcasterBinding.prototype.isDisabled=function(){
return this.getProperty("isdisabled")==true;
};
ButtonBinding.prototype=new MatrixBinding;
ButtonBinding.prototype.constructor=ButtonBinding;
ButtonBinding.superclass=MatrixBinding.prototype;
ButtonBinding.ACTION_COMMAND="buttoncommand";
ButtonBinding.ACTION_RADIOBUTTON_ATTACHED="radiobutton attached";
ButtonBinding.TYPE_CHECKBUTTON="checkbox";
ButtonBinding.TYPE_RADIOBUTTON="radio";
ButtonBinding.CLASSNAME_FOCUSABLE="focusable";
ButtonBinding.CLASSNAME_FOCUSED="focused";
ButtonBinding.CLASSNAME_DEFAULT="default";
function ButtonBinding(){
this.logger=SystemLogger.getLogger("ButtonBinding");
this.isCheckButton=false;
this.isRadioButton=false;
this.isComboButton=false;
this.isCheckBox=false;
this.isActive=false;
this.isChecked=false;
this.isDisabled=false;
this.isFocusable=false;
this._isFocusableButton=false;
this.isFocused=false;
this.isDefault=false;
this.popupBinding=null;
this.labelBinding=null;
this.image=null;
this.imageHover=null;
this.imageActive=null;
this.imageDisabled=null;
this.imageProfile=null;
this._stateManager=null;
this.response=null;
this.popupBindingTargetElement=null;
this.commandAction=ButtonBinding.ACTION_COMMAND;
this.isFlipped=false;
this.isDirty=false;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID,FitnessCrawler.ID]);
}
ButtonBinding.prototype.toString=function(){
return "[ButtonBinding]";
};
ButtonBinding.prototype.onBindingRegister=function(){
ButtonBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["isdisabled"]=this.setDisabled;
};
ButtonBinding.prototype.onBindingAttach=function(){
ButtonBinding.superclass.onBindingAttach.call(this);
this.parseDOMProperties();
this.buildDOMContent();
if(this.isRadioButton==true){
this.dispatchAction(ButtonBinding.ACTION_RADIOBUTTON_ATTACHED);
}
};
ButtonBinding.prototype.onBindingDispose=function(){
ButtonBinding.superclass.onBindingDispose.call(this);
if(this._stateManager!=null){
this._stateManager.dispose();
this._stateManager=null;
}
};
ButtonBinding.prototype.parseDOMProperties=function(){
Binding.imageProfile(this);
};
ButtonBinding.prototype.buildDOMContent=function(){
var tree=this.shadowTree;
var _64a=this.getProperty("width");
var _64b=this.getProperty("label");
var type=this.getProperty("type");
var _64d=this.getProperty("popup");
var _64e=this.getProperty("tooltip");
var _64f=this.getProperty("isdisabled");
var _650=this.getProperty("response");
var _651=this.getProperty("oncommand");
var _652=this.getProperty("value");
var _653=this.getProperty("ischecked");
var _654=this.getProperty("callbackid");
var _655=this.getProperty("focusable");
var _656=this.getProperty("focused");
var _657=this.getProperty("default");
var url=this.getProperty("url");
var _659=this.getProperty("flip");
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
this.add(this.labelBinding);
this.labelBinding.attach();
this.shadowTree.labelBinding=this.labelBinding;
if(_659){
this.flip(true);
}
if(!this._stateManager){
this._stateManager=new ButtonStateManager(this);
}
if(this.imageProfile!=null&&this.imageProfile.getDefaultImage()!=null){
this.setImage(this.imageProfile.getDefaultImage());
}
if(_64b!=null){
this.setLabel(_64b);
}
if(type!=null){
this.setType(type);
}
if(_64e!=null){
this.setToolTip(_64e);
}
if(_64a!=null){
this.setWidth(_64a);
}
if(_64d!=null){
this.setPopup(_64d);
}
if(_650!=null){
this.response=_650;
}
if(_653==true){
if(this.isCheckButton||this.isRadioButton){
this.check(true);
}
}
if(_651!=null&&this.oncommand==null){
this.oncommand=function(){
Binding.evaluate(_651,this);
};
}
if(_655||this.isFocusable){
this._makeFocusable();
if(_657||this.isDefault){
this.isDefault=true;
}
if(_656){
this.focus();
}
}
if(_64f==true){
this.disable();
}
if(url!=null){
this.setURL(url);
}
if(_654!=null){
this.bindingWindow.DataManager.registerDataBinding(_654,this);
if(_652!=null){
Binding.dotnetify(this,_652);
}
if(this.oncommand==null){
this.oncommand=function(){
this.dirty();
if(this.getProperty("validate")==true){
this.dispatchAction(PageBinding.ACTION_DOVALIDATEDPOSTBACK);
}else{
this.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
}
};
}
}
};
ButtonBinding.prototype._makeFocusable=function(){
this.isFocusable=true;
this.attachClassName(ButtonBinding.CLASSNAME_FOCUSABLE);
this._isFocusableButton=true;
};
ButtonBinding.prototype.setImage=function(_65a){
if(this.isAttached){
this.labelBinding.setImage(_65a);
}
this.setProperty("image",_65a);
};
ButtonBinding.prototype.getImage=function(){
return this.getProperty("image");
};
ButtonBinding.prototype.setLabel=function(_65b){
if(this.isAttached){
this.labelBinding.setLabel(_65b);
}
this.setProperty("label",_65b);
};
ButtonBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
ButtonBinding.prototype.setType=function(type){
switch(type){
case ButtonBinding.TYPE_CHECKBUTTON:
this.isCheckButton=true;
break;
case ButtonBinding.TYPE_RADIOBUTTON:
this.isRadioButton=true;
break;
}
this.setProperty("type",type);
};
ButtonBinding.prototype.setToolTip=function(_65d){
this.setProperty("tooltip",_65d);
if(this.isAttached==true){
this.setProperty("title",Resolver.resolve(_65d));
}
};
ButtonBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
ButtonBinding.prototype.setImageProfile=function(_65e){
this.imageProfile=new _65e(this);
};
ButtonBinding.prototype.setPopup=function(arg){
this.popupBinding=this.getBindingForArgument(arg);
if(this.popupBinding){
this.setType(ButtonBinding.TYPE_CHECKBUTTON);
if(!this.popupBindingTargetElement){
this.popupBindingTargetElement=this.bindingElement;
}
var self=this;
this.popupBinding.addActionListener(PopupBinding.ACTION_HIDE,{handleAction:function(){
if(self.isChecked==true){
self.uncheck(true);
}
}});
}
};
ButtonBinding.prototype.setURL=function(url){
if(this.isAttached==true){
if(!this.shadowTree.buttonurl){
var a=this.bindingDocument.createElement("a");
a.className="buttonurl";
a.target="_blank";
this.shadowTree.buttonurl=a;
this.bindingElement.appendChild(a);
}
this.shadowTree.buttonurl.href=url;
}
this.setProperty("url",url);
};
ButtonBinding.prototype.getURL=function(){
return this.getProperty("url");
};
ButtonBinding.prototype.flip=function(_663){
_663=_663==null?true:_663;
this.isFlipped=_663;
this.setProperty("flip",_663);
if(this.isAttached){
this.labelBinding.flip(_663);
}
};
ButtonBinding.prototype.fireCommand=function(){
if(!this.isDisabled){
if(this.oncommand!=null){
this.oncommand();
}
this.dispatchAction(this.commandAction);
this.invokePopup();
}
};
ButtonBinding.prototype.invokePopup=function(){
if(!this.isDisabled){
if(this.popupBinding){
if(!this.isCheckButton||this.isChecked){
this.popupBinding.snapTo(this.popupBindingTargetElement);
this.popupBinding.show();
this.popupBinding.grabKeyboard();
}else{
this.popupBinding.hide();
this.popupBinding.releaseKeyboard();
}
}
}
};
ButtonBinding.prototype.oncommand=null;
ButtonBinding.prototype.invoke=function(){
if(!this.isCheckButton){
this.fireCommand();
}else{
if(this.isChecked){
this.uncheck();
}else{
this.check();
}
}
};
ButtonBinding.prototype.check=function(_664){
if((this.isCheckButton||this.isRadioButton)&&!this.isChecked){
if(this.isAttached==true){
this._check();
if(!_664==true){
this.fireCommand();
}
}
this.setProperty("ischecked",true);
}
};
ButtonBinding.prototype._check=function(_665){
this.isActive=true;
this.isChecked=true;
if(!_665){
this._stateManager.invokeActiveState();
}
};
ButtonBinding.prototype.uncheck=function(_666){
if((this.isCheckButton||this.isRadioButton)&&this.isChecked){
if(this.isAttached==true){
this._uncheck();
if(!_666==true){
this.fireCommand();
}
}
this.setProperty("ischecked",false);
}
};
ButtonBinding.prototype._uncheck=function(_667){
this.isActive=false;
this.isChecked=false;
if(!_667){
this._stateManager.invokeNormalState();
}
};
ButtonBinding.prototype.setChecked=function(_668,_669){
if(_668==null){
_668==false;
}
if(this.isCheckButton||this.isRadioButton){
switch(_668){
case true:
this.check(_669);
break;
case false:
this.uncheck(_669);
break;
}
}
};
ButtonBinding.prototype.setDisabled=function(bool){
if(bool==null){
bool=false;
}
this.isDisabled=bool;
switch(bool){
case true:
this.bindingElement.setAttribute("title","");
this.setProperty("isdisabled",true);
if(this._stateManager!=null){
this._stateManager.invokeDisabledState();
}
break;
case false:
this.deleteProperty("isdisabled");
var _66b=this.getProperty("tooltip");
if(_66b){
this.setToolTip(_66b);
}
if(this._stateManager!=null){
this._stateManager.invokeNormalState();
}
break;
}
if(this._isFocusableButton==true){
this.isFocusable=!this.isDisabled;
this.dispatchAction(FocusBinding.ACTION_UPDATE);
}
};
ButtonBinding.prototype.disable=function(){
this.setDisabled(true);
};
ButtonBinding.prototype.enable=function(){
this.setDisabled(false);
};
ButtonBinding.prototype.focus=function(){
if(this.isFocusable&&!this.isFocused){
this.isFocused=true;
FocusBinding.focusElement(this.bindingElement);
this.dispatchAction(Binding.ACTION_FOCUSED);
}
};
ButtonBinding.prototype.blur=function(){
if(this.isFocusable&&this.isFocused){
this.isFocused=false;
this.dispatchAction(Binding.ACTION_BLURRED);
}
};
ButtonBinding.prototype.onMouseDown=function(){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,this);
this.dispatchAction(Binding.ACTION_ACTIVATED);
};
ButtonBinding.prototype.onMouseUp=function(){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEUP,this);
};
ButtonBinding.prototype.getEqualSizeWidth=function(){
var _66c=null;
if(this.isAttached==true){
this.labelBinding.bindingElement.style.marginLeft="0";
this.labelBinding.bindingElement.style.marginRight="0";
_66c=this.labelBinding.bindingElement.offsetWidth;
}else{
throw "ButtonBinding: getEqualSizeWidth failed for non-attached button.";
}
return _66c;
};
ButtonBinding.prototype.setEqualSizeWidth=function(goal){
if(this.isAttached==true){
var _66e=this.getEqualSizeWidth();
if(goal>_66e){
var diff=goal-_66e;
var marg=Math.floor(diff*0.5);
this.labelBinding.bindingElement.style.marginLeft=marg+"px";
this.labelBinding.bindingElement.style.marginRight=marg+"px";
}
}
};
ButtonBinding.prototype.getWidth=function(){
var _671=null;
if(this.isAttached==true){
var _672=CSSComputer.getPadding(this.bindingElement);
var _673=CSSComputer.getPadding(this.bindingElement);
_671=this.shadowTree.c.offsetWidth+this.shadowTree.e.offsetWidth+this.shadowTree.w.offsetWidth;
_671=_671+_672.left+_672.right;
_671=_671+_673.left+_673.right;
}else{
throw "ButtonBinding: getWidth failed for non-attached button.";
}
return _671;
};
ButtonBinding.prototype.setWidth=function(_674){
if(this.isAttached==true){
var _675=this.shadowTree.e.offsetWidth+this.shadowTree.w.offsetWidth;
var _676=CSSComputer.getPadding(this.shadowTree.c);
var _677=_674-_675;
_677=_677-_676.left-_676.right;
this.shadowTree.c.style.width=String(_677)+"px";
if(this.getProperty("centered")){
this.labelBinding.bindingElement.style.marginLeft=String(0.5*(_677-this.labelBinding.bindingElement.offsetWidth))+"px";
}
}
this.setProperty("width",_674);
};
ButtonBinding.prototype.validate=function(){
return true;
};
ButtonBinding.prototype.manifest=function(){
};
ButtonBinding.prototype.dirty=DataBinding.prototype.dirty;
ButtonBinding.prototype.clean=DataBinding.prototype.clean;
ButtonBinding.prototype.getName=function(){
};
ButtonBinding.prototype.getValue=function(){
return this.shadowTree.dotnetinput.value;
};
ButtonBinding.prototype.setValue=function(_678){
this.shadowTree.dotnetinput.value=_678;
};
ButtonBinding.prototype.getResult=function(){
return this.getValue();
};
ButtonBinding.prototype.setResult=function(_679){
this.setValue(_679);
};
ButtonStateManager.STATE_NORMAL=0;
ButtonStateManager.STATE_HOVER=1;
ButtonStateManager.STATE_ACTIVE=2;
ButtonStateManager.RIGHT_BUTTON=2;
function ButtonStateManager(_67a){
this.logger=SystemLogger.getLogger("ButtonStateManager");
this.binding=_67a;
this.imageProfile=_67a.imageProfile;
this.assignDOMEvents(true);
return this;
}
ButtonStateManager.prototype.assignDOMEvents=function(_67b){
var _67c=_67b?"addEventListener":"removeEventListener";
this.binding[_67c](DOMEvents.MOUSEENTER,this);
this.binding[_67c](DOMEvents.MOUSELEAVE,this);
this.binding[_67c](DOMEvents.MOUSEDOWN,this);
this.binding[_67c](DOMEvents.MOUSEUP,this);
};
ButtonStateManager.prototype.dispose=function(){
this.assignDOMEvents(false);
this.binding=null;
this.imageProfile=null;
};
ButtonStateManager.prototype.handleEvent=function(e){
if(Binding.exists(this.binding)&&!this.binding.isDisabled&&!BindingDragger.isDragging){
var _67e=false,_67f=false,_680=null;
if(e.button==ButtonStateManager.RIGHT_BUTTON){
}else{
if(this.binding.isCheckBox){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
_680=ButtonStateManager.STATE_HOVER;
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
_680=this.binding.isChecked?ButtonStateManager.STATE_ACTIVE:ButtonStateManager.STATE_NORMAL;
break;
case DOMEvents.MOUSEDOWN:
_680=ButtonStateManager.STATE_HOVER;
break;
case DOMEvents.MOUSEUP:
this.binding.isChecked=!this.binding.isChecked;
_680=this.binding.isChecked?ButtonStateManager.STATE_ACTIVE:ButtonStateManager.STATE_NORMAL;
if(_680==ButtonStateManager.STATE_ACTIVE){
this.binding._check(true);
}else{
this.binding._uncheck(true);
}
_67e=true;
break;
}
}else{
if(this.binding.isComboButton){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
_680=ButtonStateManager.STATE_HOVER;
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
_680=ButtonStateManager.STATE_NORMAL;
break;
case DOMEvents.MOUSEDOWN:
_680=ButtonStateManager.STATE_ACTIVE;
break;
case DOMEvents.MOUSEUP:
_680=ButtonStateManager.STATE_NORMAL;
var _681=UserInterface.getBinding(e.target?e.target:e.srcElement);
if(_681 instanceof ComboBoxBinding){
this.binding.isChecked=!this.binding.isChecked;
_680=this.binding.isChecked?ButtonStateManager.STATE_ACTIVE:ButtonStateManager.STATE_NORMAL;
if(_680==ButtonStateManager.STATE_ACTIVE){
this.binding._check(true);
}else{
this.binding._uncheck(true);
}
_67f=true;
}else{
if(this.binding.isChecked){
this.binding._uncheck(true);
}
_680=ButtonStateManager.STATE_NORMAL;
_67e=true;
}
break;
}
}else{
if(this.binding.isCheckButton||this.binding.isRadioButton){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
if(!this.binding.isChecked){
_680=ButtonStateManager.STATE_HOVER;
}
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
if(!this.binding.isChecked){
_680=ButtonStateManager.STATE_NORMAL;
}
break;
case DOMEvents.MOUSEDOWN:
_680=ButtonStateManager.STATE_ACTIVE;
break;
case DOMEvents.MOUSEUP:
if(this.binding.isCheckButton||!this.binding.isChecked){
this.binding.isChecked=!this.binding.isChecked;
_680=this.binding.isChecked?ButtonStateManager.STATE_ACTIVE:ButtonStateManager.STATE_NORMAL;
if(_680==ButtonStateManager.STATE_ACTIVE){
this.binding._check(true);
}else{
this.binding._uncheck(true);
}
_67e=true;
}
break;
}
}else{
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
_680=ButtonStateManager.STATE_HOVER;
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
_680=ButtonStateManager.STATE_NORMAL;
break;
case DOMEvents.MOUSEDOWN:
_680=ButtonStateManager.STATE_ACTIVE;
break;
case DOMEvents.MOUSEUP:
_680=ButtonStateManager.STATE_NORMAL;
_67e=true;
break;
}
}
}
}
}
switch(_680){
case ButtonStateManager.STATE_NORMAL:
this.invokeNormalState();
break;
case ButtonStateManager.STATE_HOVER:
this.invokeHoverState();
break;
case ButtonStateManager.STATE_ACTIVE:
this.invokeActiveState();
break;
}
if(_67e){
this.binding.fireCommand();
}
if(_67f){
this.binding.invokePopup();
}
if(Binding.exists(this.binding)==true){
DOMEvents.stopPropagation(e);
switch(e.type){
case DOMEvents.MOUSEDOWN:
this.binding.onMouseDown();
break;
case DOMEvents.MOUSEUP:
this.binding.onMouseUp();
break;
}
}
}
};
ButtonStateManager.prototype.invokeNormalState=function(){
this.binding.detachClassName("hover");
this.binding.detachClassName("active");
this.binding.detachClassName("isdisabled");
if(this.imageProfile){
var url=this.imageProfile.getDefaultImage();
if(url){
this.binding.setImage(url);
}
}
};
ButtonStateManager.prototype.invokeHoverState=function(){
this.binding.attachClassName("hover");
this.binding.detachClassName("active");
if(this.imageProfile){
var url=this.imageProfile.getHoverImage();
if(url){
this.binding.setImage(url);
}
}
};
ButtonStateManager.prototype.invokeActiveState=function(){
this.binding.attachClassName("active");
this.binding.detachClassName("hover");
if(this.imageProfile){
var url=this.imageProfile.getActiveImage();
if(url){
this.binding.setImage(url);
}
}
};
ButtonStateManager.prototype.invokeDisabledState=function(){
this.binding.detachClassName("hover");
this.binding.detachClassName("active");
this.binding.attachClassName("isdisabled");
if(this.imageProfile){
var _685=this.imageProfile.getDisabledImage();
if(_685){
this.binding.setImage(_685);
}
}
};
ClickButtonBinding.prototype=new ButtonBinding;
ClickButtonBinding.prototype.constructor=ClickButtonBinding;
ClickButtonBinding.superclass=ButtonBinding.prototype;
function ClickButtonBinding(){
this.logger=SystemLogger.getLogger("ClickButtonBinding");
}
ClickButtonBinding.prototype.toString=function(){
return "[ClickButtonBinding]";
};
ClickButtonBinding.newInstance=function(_686){
var _687=DOMUtil.createElementNS(Constants.NS_UI,"ui:clickbutton",_686);
return UserInterface.registerBinding(_687,ClickButtonBinding);
};
RadioButtonBinding.prototype=new ButtonBinding;
RadioButtonBinding.prototype.constructor=RadioButtonBinding;
RadioButtonBinding.superclass=ButtonBinding.prototype;
RadioButtonBinding.IMG_DEFAULT="${skin}/buttons/radiobutton-default.png";
RadioButtonBinding.IMG_HOVER="${skin}/buttons/radiobutton-hover.png";
RadioButtonBinding.IMG_ACTIVE="${skin}/buttons/radiobutton-active.png";
RadioButtonBinding.IMG_DISABLED="${skin}/buttons/radiobutton-disabled.png";
function RadioButtonBinding(){
this.logger=SystemLogger.getLogger("RadioButtonBinding");
this.isRadioButton=true;
this.hasMatrix=false;
this.imageProfile=new ImageProfile({image:RadioButtonBinding.IMG_DEFAULT,imageHover:RadioButtonBinding.IMG_HOVER,imageActive:RadioButtonBinding.IMG_ACTIVE,imageDisabled:RadioButtonBinding.IMG_DISABLED});
return this;
}
RadioButtonBinding.prototype.toString=function(){
return "[RadioButtonBinding]";
};
RadioButtonBinding.newInstance=function(_688){
var _689=DOMUtil.createElementNS(Constants.NS_UI,"ui:radiobutton",_688);
return UserInterface.registerBinding(_689,RadioButtonBinding);
};
CheckButtonBinding.prototype=new ButtonBinding;
CheckButtonBinding.prototype.constructor=CheckButtonBinding;
CheckButtonBinding.superclass=ButtonBinding.prototype;
function CheckButtonBinding(){
this.logger=SystemLogger.getLogger("CheckButtonBinding");
this.isCheckButton=true;
this.isCheckBox=true;
this.hasMatrix=false;
this.imageProfile=new CheckButtonImageProfile(this);
}
CheckButtonBinding.prototype.toString=function(){
return "[CheckButtonBinding]";
};
CheckButtonBinding.newInstance=function(_68a){
var _68b=DOMUtil.createElementNS(Constants.NS_UI,"ui:checkbutton",_68a);
return UserInterface.registerBinding(_68b,CheckButtonBinding);
};
CheckButtonImageProfile.IMG_DEFAULT="${skin}/buttons/checkbutton-default.png";
CheckButtonImageProfile.IMG_HOVER="${skin}/buttons/checkbutton-hover.png";
CheckButtonImageProfile.IMG_ACTIVE="${skin}/buttons/checkbutton-active.png";
CheckButtonImageProfile.IMG_ACTIVE_HOVER="${skin}/buttons/checkbutton-active-hover.png";
CheckButtonImageProfile.IMG_DISABLED=null;
CheckButtonImageProfile.IMG_DISABLED_ON=null;
function CheckButtonImageProfile(_68c){
this._binding=_68c;
}
CheckButtonImageProfile.prototype.getDefaultImage=function(){
return CheckButtonImageProfile.IMG_DEFAULT;
};
CheckButtonImageProfile.prototype.getHoverImage=function(){
return this._binding.isChecked?CheckButtonImageProfile.IMG_ACTIVE_HOVER:CheckButtonImageProfile.IMG_HOVER;
};
CheckButtonImageProfile.prototype.getActiveImage=function(){
return CheckButtonImageProfile.IMG_ACTIVE;
};
CheckButtonImageProfile.prototype.getDisabledImage=function(){
return this._binding.isChecked?CheckButtonImageProfile.IMG_DISABLED:CheckButtonImageProfile.IMG_DISABLED_ON;
};
ViewButtonBinding.prototype=new ButtonBinding;
ViewButtonBinding.prototype.constructor=ViewButtonBinding;
ViewButtonBinding.superclass=ButtonBinding.prototype;
function ViewButtonBinding(){
return this;
}
ViewButtonBinding.prototype.toString=function(){
return "[ViewButtonBinding]";
};
ViewButtonBinding.prototype.oncommand=function(){
alert(this);
};
ControlGroupBinding.prototype=new Binding;
ControlGroupBinding.prototype.constructor=ControlGroupBinding;
ControlGroupBinding.superclass=Binding.prototype;
function ControlGroupBinding(){
this.logger=SystemLogger.getLogger("ControlGroupBinding");
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
ControlGroupBinding.prototype.toString=function(){
return "[ControlGroupBinding]";
};
ControlGroupBinding.prototype.onBindingAttach=function(){
ControlGroupBinding.superclass.onBindingAttach.call(this);
this.assignDOMEvents();
};
ControlGroupBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEUP);
};
ControlGroupBinding.prototype.onActivate=function(){
var _68d=this.getDescendantBindingsByLocalName("control");
_68d.each(function(_68e){
_68e.setControlType(_68e.controlType);
});
};
ControlGroupBinding.prototype.onDeactivate=ControlGroupBinding.prototype.onActivate;
ControlGroupBinding.prototype.handleEvent=function(e){
ControlGroupBinding.superclass.handleEvent.call(this,e);
DOMEvents.stopPropagation(e);
switch(e.type){
case DOMEvents.MOUSEDOWN:
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,e);
this.dispatchAction(Binding.ACTION_ACTIVATED);
break;
case DOMEvents.MOUSEUP:
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEUP,e);
break;
}
};
ControlGroupBinding.newInstance=function(_690){
var _691=DOMUtil.createElementNS(Constants.NS_UI,"ui:controlgroup",_690);
return UserInterface.registerBinding(_691,ControlGroupBinding);
};
ControlBinding.prototype=new ButtonBinding;
ControlBinding.prototype.constructor=ControlBinding;
ControlBinding.superclass=ButtonBinding.prototype;
ControlBinding.ACTION_COMMAND="controlcommand";
ControlBinding.TYPE_MINIMIZE="minimize";
ControlBinding.TYPE_MAXIMIZE="maximize";
ControlBinding.TYPE_UNMAXIMIZE="unmaximize";
ControlBinding.TYPE_UNMINIMIZE="unminimize";
ControlBinding.TYPE_CLOSE="close";
ControlBinding.TOOLTIP={"minimize":"${string:Website.App.ToolTipMinimize}","maximize":"${string:Website.App.ToolTipMaximize}","unmaximize":"${string:Website.App.ToolTipUnMaximize}","unminimize":"${string:Website.App.ToolTipUnMinimize}","close":"${string:Website.App.ToolTipClose}"};
function ControlBinding(){
this.logger=SystemLogger.getLogger("ControlBinding");
this.controlType=null;
this.commandAction=ControlBinding.ACTION_COMMAND;
this.imageProfile=true;
this.containingControlBoxBinding=null;
this.isVisible=true;
this.isGhostable=false;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
}
ControlBinding.prototype.toString=function(){
return "[ControlBinding]";
};
ControlBinding.prototype.onBindingAttach=function(){
this.controlType=this.getProperty("controltype");
this.setProperty("tooltip",ControlBinding.TOOLTIP[this.controlType]);
if(!this.isAttached){
if(this.controlType){
this.containingControlBoxBinding=this.getAncestorBindingByType(ControlBoxBinding);
if(this.containingControlBoxBinding){
this.containingControlBoxBinding.addActionListener(ControlBoxBinding.ACTION_STATECHANGE,this);
}
ControlBinding.superclass.onBindingAttach.call(this);
this.addEventListener(DOMEvents.MOUSEDOWN);
this.setImage(this.imageProfile.getDefaultImage());
}else{
throw "ControlBinding: type not specified.";
}
}
};
ControlBinding.prototype.handleEvent=function(e){
ControlBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.MOUSEDOWN:
DOMEvents.stopPropagation(e);
break;
}
};
ControlBinding.prototype.setControlType=function(type){
this.controlType=type;
this.setProperty("controltype",type);
this.setToolTip(ControlBinding.TOOLTIP[type]);
if(this.isAttached){
this.setImage(this.imageProfile.getDefaultImage());
}
};
ControlBinding.prototype.handleAction=function(_694){
ControlBinding.superclass.handleAction.call(this,_694);
switch(_694.type){
case ControlBoxBinding.ACTION_STATECHANGE:
this._handleStateChange();
break;
}
};
ControlBinding.prototype._handleStateChange=function(){
switch(this.containingControlBoxBinding.getState()){
case ControlBoxBinding.STATE_MAXIMIZED:
if(this.controlType==ControlBinding.TYPE_MAXIMIZE){
this.setControlType(ControlBinding.TYPE_UNMAXIMIZE);
}
if(this.controlType==ControlBinding.TYPE_UNMINIMIZE){
this.setControlType(ControlBinding.TYPE_MINIMIZE);
}
break;
case ControlBoxBinding.STATE_MINIMIZED:
if(this.controlType==ControlBinding.TYPE_MINIMIZE){
this.setControlType(ControlBinding.TYPE_UNMINIMIZE);
}
if(this.controlType==ControlBinding.TYPE_UNMAXIMIZE){
this.setControlType(ControlBinding.TYPE_MAXIMIZE);
}
break;
case ControlBoxBinding.STATE_NORMAL:
if(this.controlType==ControlBinding.TYPE_UNMAXIMIZE){
this.setControlType(ControlBinding.TYPE_MAXIMIZE);
}
if(this.controlType==ControlBinding.TYPE_UNMINIMIZE){
this.setControlType(ControlBinding.TYPE_MINIMIZE);
}
break;
}
};
ControlBinding.prototype.onMouseDown=function(){
};
ControlBinding.prototype.onMouseUp=function(){
};
ControlImageProfile.IMAGE_MINIMIZE=null;
ControlImageProfile.IMAGE_MAXIMIZE=null;
ControlImageProfile.IMAGE_RESTORE=null;
ControlImageProfile.IMAGE_CLOSE=null;
function ControlImageProfile(_695){
this.binding=_695;
}
ControlImageProfile.prototype._getImage=function(_696){
var _697=null;
switch(this.binding.controlType){
case ControlBinding.TYPE_MINIMIZE:
_697=this.constructor.IMAGE_MINIMIZE;
break;
case ControlBinding.TYPE_MAXIMIZE:
_697=this.constructor.IMAGE_MAXIMIZE;
break;
case ControlBinding.TYPE_UNMAXIMIZE:
case ControlBinding.TYPE_UNMINIMIZE:
_697=this.constructor.IMAGE_RESTORE;
break;
case ControlBinding.TYPE_CLOSE:
_697=this.constructor.IMAGE_CLOSE;
break;
}
return _697.replace("${string}",_696);
};
ControlImageProfile.prototype.getDefaultImage=function(){
var _698=true;
if(this.binding.isGhostable&&this.binding.containingControlBoxBinding){
_698=this.binding.containingControlBoxBinding.isActive?true:false;
}
return _698?this._getImage("default"):this._getImage("ghosted");
};
ControlImageProfile.prototype.getHoverImage=function(){
return this._getImage("hover");
};
ControlImageProfile.prototype.getActiveImage=function(){
return this._getImage("active");
};
ControlBoxBinding.prototype=new FlexBoxBinding;
ControlBoxBinding.prototype.constructor=ControlBoxBinding;
ControlBoxBinding.superclass=FlexBoxBinding.prototype;
ControlBoxBinding.STATE_NORMAL="normal";
ControlBoxBinding.STATE_MAXIMIZED="maximized";
ControlBoxBinding.STATE_MINIMIZED="minimized";
ControlBoxBinding.ACTION_NORMALIZE="controlbox normalizeaction";
ControlBoxBinding.ACTION_MAXIMIZE="controlbox maximizeaction";
ControlBoxBinding.ACTION_MINIMIZE="controlbox minimizeaction";
ControlBoxBinding.ACTION_STATECHANGE="controlbox statechangeacton";
function ControlBoxBinding(){
this.logger=SystemLogger.getLogger("ControlBoxBinding");
this.isNormalized=true;
this.isMaximized=false;
this.isMinimized=false;
}
ControlBoxBinding.prototype.toString=function(){
return "[ControlBoxBinding]";
};
ControlBoxBinding.prototype.onBindingAttach=function(){
ControlBoxBinding.superclass.onBindingAttach.call(this);
this.addActionListener(ControlBinding.ACTION_COMMAND,this);
this.attachClassName(ControlBoxBinding.STATE_NORMAL);
};
ControlBoxBinding.prototype.handleAction=function(_699){
ControlBoxBinding.superclass.handleAction.call(this,_699);
switch(_699.type){
case ControlBinding.ACTION_COMMAND:
var _69a=_699.target;
Application.lock(this);
var self=this;
setTimeout(function(){
self.handleInvokedControl(_69a);
Application.unlock(self);
},0);
_699.consume();
break;
}
};
ControlBoxBinding.prototype.handleInvokedControl=function(_69c){
switch(_69c.controlType){
case ControlBinding.TYPE_MAXIMIZE:
this.maximize();
break;
case ControlBinding.TYPE_MINIMIZE:
this.minimize();
break;
case ControlBinding.TYPE_UNMAXIMIZE:
case ControlBinding.TYPE_UNMINIMIZE:
this.normalize();
break;
}
};
ControlBoxBinding.prototype.maximize=function(){
this.dispatchAction(ControlBoxBinding.ACTION_MAXIMIZE);
this.setState(ControlBoxBinding.STATE_MAXIMIZED);
this.isNormalized=false;
this.isMaximized=true;
this.isMinimized=false;
};
ControlBoxBinding.prototype.minimize=function(){
this.dispatchAction(ControlBoxBinding.ACTION_MINIMIZE);
this.setState(ControlBoxBinding.STATE_MINIMIZED);
this.isNormalized=false;
this.isMaximized=false;
this.isMinimized=true;
};
ControlBoxBinding.prototype.normalize=function(){
this.dispatchAction(ControlBoxBinding.ACTION_NORMALIZE);
this.setState(ControlBoxBinding.STATE_NORMAL);
this.isNormalized=true;
this.isMaximized=false;
this.isMinimized=false;
};
ControlBoxBinding.prototype.setState=function(_69d){
var _69e=this.getState();
this.setProperty("state",_69d);
this.detachClassName(_69e);
this.attachClassName(_69d);
this.dispatchAction(ControlBoxBinding.ACTION_STATECHANGE);
};
ControlBoxBinding.prototype.getState=function(){
var _69f=this.getProperty("state");
if(!_69f){
_69f=ControlBoxBinding.STATE_NORMAL;
}
return _69f;
};
MenuContainerBinding.prototype=new Binding;
MenuContainerBinding.prototype.constructor=MenuContainerBinding;
MenuContainerBinding.superclass=Binding.prototype;
function MenuContainerBinding(){
this.logger=SystemLogger.getLogger("MenuContainerBinding");
this._isOpen=false;
this._openElement=null;
this.menuContainerBinding=null;
this.menuPopupBinding=null;
}
MenuContainerBinding.prototype.toString=function(){
return "[MenuContainerBinding]";
};
MenuContainerBinding.prototype.isOpen=function(_6a0){
var _6a1=null;
if(!_6a0){
_6a1=this._isOpen;
}else{
_6a1=(_6a0==this._openElement);
}
return _6a1;
};
MenuContainerBinding.prototype.setOpenElement=function(_6a2){
if(_6a2){
if(this._openElement){
this._openElement.hide();
}
this._openElement=_6a2;
this._isOpen=true;
}else{
this._openElement=null;
this._isOpen=false;
}
};
MenuContainerBinding.prototype.getMenuContainerBinding=function(){
if(!this.menuContainerBinding){
this.menuContainerBinding=this.getAncestorBindingByType(MenuContainerBinding);
}
return this.menuContainerBinding;
};
MenuContainerBinding.prototype.getMenuPopupBinding=function(){
var _6a3=this.getChildBindingByLocalName("menupopup");
if(_6a3&&_6a3!=this.menuPopupBinding){
this.menuPopupBinding=_6a3;
this.menuPopupBinding.addActionListener(PopupBinding.ACTION_HIDE,this);
}
return this.menuPopupBinding;
};
MenuContainerBinding.prototype.show=function(){
var _6a4=this.getMenuContainerBinding();
_6a4.setOpenElement(this);
var _6a5=this.getMenuPopupBinding();
_6a5.snapTo(this.bindingElement);
_6a5.show();
};
MenuContainerBinding.prototype.hide=function(){
this.reset();
this.getMenuPopupBinding().hide();
if(this._isOpen){
this._openElement.hide();
}
};
MenuContainerBinding.prototype.reset=Binding.ABSTRACT_METHOD;
MenuContainerBinding.prototype.handleAction=function(_6a6){
MenuContainerBinding.superclass.handleAction.call(this,_6a6);
if(_6a6.type==PopupBinding.ACTION_HIDE){
var _6a7=this.getMenuContainerBinding();
_6a7.setOpenElement(false);
this.reset();
_6a6.consume();
}
};
MenuBarBinding.prototype=new MenuContainerBinding;
MenuBarBinding.prototype.constructor=MenuBarBinding;
MenuBarBinding.superclass=MenuContainerBinding.prototype;
function MenuBarBinding(){
this.logger=SystemLogger.getLogger("MenuBarBinding");
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
MenuBarBinding.prototype.toString=function(){
return "[MenuBarBinding]";
};
MenuBarBinding.prototype.onBindingRegister=function(){
MenuBarBinding.superclass.onBindingRegister.call(this);
this.addActionListener(MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
};
MenuBarBinding.prototype.handleAction=function(_6a8){
MenuBarBinding.superclass.handleAction.call(this,_6a8);
switch(_6a8.type){
case MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY:
var _6a9=_6a8.target;
var _6aa=this.getChildBindingsByLocalName("menu");
while(_6aa.hasNext()){
var menu=_6aa.getNext();
}
switch(_6a9.arrowKey){
case KeyEventCodes.VK_LEFT:
this.logger.debug("LEFTG");
break;
case KeyEventCodes.VK_RIGHT:
this.logger.debug("RIGHT");
break;
}
break;
}
};
MenuBinding.prototype=new MenuContainerBinding;
MenuBinding.prototype.constructor=MenuBinding;
MenuBinding.superclass=MenuContainerBinding.prototype;
function MenuBinding(){
this.logger=SystemLogger.getLogger("MenuBinding");
this.labelBinding=null;
this.isFocused=false;
}
MenuBinding.prototype.toString=function(){
return "[MenuBinding]";
};
MenuBinding.prototype.onBindingAttach=function(){
MenuBinding.superclass.onBindingAttach.call(this);
this.buildDOMContent();
this.assignDOMEvents();
};
MenuBinding.prototype.buildDOMContent=function(){
var _6ac=this.getProperty("image");
var _6ad=this.getProperty("label");
var _6ae=this.getProperty("tooltip");
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
this.labelBinding.attachClassName("menulabel");
this.add(this.labelBinding);
if(_6ad){
this.setLabel(_6ad);
}
if(_6ac){
this.setImage(_6ac);
}
if(_6ae){
this.setToolTip(_6ae);
}
};
MenuBinding.prototype.reset=function(){
this.detachClassName("hover");
};
MenuBinding.prototype.setImage=function(url){
this.setProperty("image",url);
if(this.isAttached){
this.labelBinding.setImage(Resolver.resolve(url));
}
};
MenuBinding.prototype.setLabel=function(_6b0){
this.setProperty("label",_6b0);
if(this.isAttached){
this.labelBinding.setLabel(Resolver.resolve(_6b0));
}
};
MenuBinding.prototype.setToolTip=function(_6b1){
this.setProperty("tooltip",_6b1);
if(this.isAttached){
this.labelBinding.setToolTip(Resolver.resolve(_6b1));
}
};
MenuBinding.prototype.getImage=function(){
return this.getProperty("image");
};
MenuBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
MenuBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
MenuBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEOVER);
this.addEventListener(DOMEvents.MOUSEOUT);
this.addEventListener(DOMEvents.MOUSEUP);
};
MenuBinding.prototype.handleEvent=function(e){
MenuBinding.superclass.handleEvent.call(this,e);
var _6b3=this.getMenuContainerBinding();
if(!BindingDragger.isDragging){
switch(e.type){
case DOMEvents.MOUSEDOWN:
if(_6b3.isOpen(this)){
DOMEvents.stopPropagation(e);
}
break;
case DOMEvents.MOUSEOVER:
if(_6b3.isOpen()&&!_6b3.isOpen(this)){
this.show();
this.menuPopupBinding.grabKeyboard();
}
this.attachClassName("hover");
this.isFocused=true;
break;
case DOMEvents.MOUSEOUT:
if(!_6b3.isOpen()){
this.hide();
}
this.isFocused=false;
break;
case DOMEvents.MOUSEUP:
if(!_6b3.isOpen(this)){
this.show();
this.menuPopupBinding.grabKeyboard();
}
DOMEvents.stopPropagation(e);
break;
}
}
DOMEvents.stopPropagation(e);
};
MenuBodyBinding.prototype=new Binding;
MenuBodyBinding.prototype.constructor=MenuBodyBinding;
MenuBodyBinding.superclass=Binding.prototype;
MenuBodyBinding.CLASSNAME_CHECKBOXED="checkboxed";
MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY="menubody unhandled arrowkey";
MenuBodyBinding.activeInstance=null;
MenuBodyBinding.handleBroadcast=function(_6b4,arg){
var body=MenuBodyBinding.activeInstance;
var key=arg;
if(body){
switch(_6b4){
case BroadcastMessages.KEY_ARROW:
body.handleArrowKey(key);
break;
case BroadcastMessages.KEY_ENTER:
body.handleEnterKey();
break;
}
}
};
EventBroadcaster.subscribe(BroadcastMessages.KEY_ARROW,MenuBodyBinding);
EventBroadcaster.subscribe(BroadcastMessages.KEY_ENTER,MenuBodyBinding);
EventBroadcaster.subscribe(BroadcastMessages.KEY_ESCAPE,MenuBodyBinding);
function MenuBodyBinding(){
this.logger=SystemLogger.getLogger("MenuBodyBinding");
this._containingPopupBinding=null;
this._focused=null;
this._lastFocused=null;
this._showSubMenuTimeout=null;
this.arrowKey=null;
this.isDirty=true;
this._hasImageLayout=false;
this._hasCheckBoxLayout=false;
}
MenuBodyBinding.prototype.toString=function(){
return "[MenuBodyBinding]";
};
MenuBodyBinding.prototype.onBindingAttach=function(){
MenuBodyBinding.superclass.onBindingAttach.call(this);
this._focused={};
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEOVER);
this.addEventListener(DOMEvents.MOUSEOUT);
this.addEventListener(DOMEvents.MOUSEUP);
var self=this;
this.addActionListener(MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY,{handleAction:function(_6b9){
switch(_6b9.target){
case self:
self.releaseKeyboard();
self._containingPopupBinding.hide();
break;
default:
var _6ba=null;
var _6bb=true;
self._lastFocused.focus();
self.grabKeyboard();
_6b9.consume();
break;
}
}});
this._containingPopupBinding=UserInterface.getBinding(this.bindingElement.parentNode);
this._containingPopupBinding.addActionListener(PopupBinding.ACTION_HIDE,{handleAction:function(){
self.resetFocusedItems(true);
self.releaseKeyboard();
}});
};
MenuBodyBinding.prototype.onBindingDispose=function(){
MenuBodyBinding.superclass.onBindingDispose.call(this);
if(MenuBodyBinding.activeInstance==this){
MenuBodyBinding.activeInstance=null;
}
};
MenuBodyBinding.prototype.handleEvent=function(e){
MenuBodyBinding.superclass.handleEvent.call(this,e);
if(e.type==DOMEvents.MOUSEOUT){
this.resetFocusedItems();
}
switch(e.type){
case DOMEvents.MOUSEDOWN:
case DOMEvents.MOUSEOVER:
case DOMEvents.MOUSEOUT:
case DOMEvents.MOUSEUP:
DOMEvents.stopPropagation(e);
break;
}
};
MenuBodyBinding.prototype.handleFocusedItem=function(_6bd){
for(var key in this._focused){
if(key!=_6bd.key){
var item=this._focused[key];
item.blur();
}
}
this._focused[_6bd.key]=_6bd;
this._lastFocused=_6bd;
if(MenuBodyBinding.activeInstance!=this){
this.grabKeyboard();
}
};
MenuBodyBinding.prototype.handleBlurredItem=function(_6c0){
delete this._focused[_6c0.key];
};
MenuBodyBinding.prototype.resetFocusedItems=function(_6c1){
for(var key in this._focused){
var item=this._focused[key];
item.blur(_6c1);
}
if(_6c1){
this._lastFocused=null;
}
};
MenuBodyBinding.prototype.refreshMenuGroups=function(){
if(!this.isAttached){
throw "refreshMenuGroups: MenuBodyBinding not attached!";
}else{
var _6c4=this.getChildBindingsByLocalName("menugroup");
var _6c5=null;
var _6c6=null;
while(_6c4.hasNext()){
var _6c7=_6c4.getNext();
if(!_6c7.isDefaultContent){
_6c7.setLayout(MenuGroupBinding.LAYOUT_DEFAULT);
if(!_6c5&&_6c7.isVisible){
_6c5=_6c7;
}
if(_6c7.isVisible){
_6c6=_6c7;
}
}
}
if(_6c5&&_6c6){
_6c5.setLayout(MenuGroupBinding.LAYOUT_FIRST);
_6c6.setLayout(MenuGroupBinding.LAYOUT_LAST);
}
}
};
MenuBodyBinding.prototype.grabKeyboard=function(_6c8){
MenuBodyBinding.activeInstance=this;
if(_6c8){
var _6c9=this._getMenuItems().getFirst();
if(_6c9){
_6c9.focus();
}
}
};
MenuBodyBinding.prototype.releaseKeyboard=function(){
if(MenuBodyBinding.activeInstance==this){
MenuBodyBinding.activeInstance=null;
}
};
MenuBodyBinding.prototype.handleEnterKey=function(){
var _6ca=this._lastFocused;
if((_6ca!=null)&&(!_6ca.isMenuContainer)){
_6ca.fireCommand();
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN);
}
};
MenuBodyBinding.prototype.handleArrowKey=function(key){
this.arrowKey=key;
var _6cc=this._getMenuItems();
var _6cd=null;
var next=null;
if(this._lastFocused){
_6cd=this._lastFocused;
switch(key){
case KeyEventCodes.VK_UP:
next=_6cc.getPreceding(_6cd);
break;
case KeyEventCodes.VK_DOWN:
next=_6cc.getFollowing(_6cd);
break;
case KeyEventCodes.VK_LEFT:
this.dispatchAction(MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY);
break;
case KeyEventCodes.VK_RIGHT:
if(this._lastFocused.isMenuContainer){
this.releaseKeyboard();
this._lastFocused.show();
this._lastFocused.menuPopupBinding.grabKeyboard(true);
}else{
this.dispatchAction(MenuBodyBinding.ACTION_UNHANDLED_LEFTRIGHTKEY);
}
break;
}
}else{
next=_6cc.getFirst();
}
if(next){
next.focus();
}
};
MenuBodyBinding.prototype._getMenuItems=function(){
if(!this._menuItemsList||this.isDirty){
var list=new List();
var _6d0=null;
this.getChildBindingsByLocalName("menugroup").each(function(_6d1){
_6d0=_6d1.getChildBindingsByLocalName("menuitem");
_6d0.each(function(item){
list.add(item);
});
});
_6d0=this.getChildBindingsByLocalName("menuitem");
_6d0.each(function(item){
list.add(item);
});
this._menuItemsList=list;
this.isDirty=false;
}
return this._menuItemsList;
};
MenuBodyBinding.prototype.invokeCheckBoxLayout=function(){
if(!this.hasClassName(MenuBodyBinding.CLASSNAME_CHECKBOXED)){
this.attachClassName(MenuBodyBinding.CLASSNAME_CHECKBOXED);
}
};
MenuBodyBinding.prototype.invokeImageLayout=function(){
if(!this._hasImageLayout){
this.detachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this._hasImageLayout=true;
}
};
MenuBodyBinding.newInstance=function(_6d4){
var _6d5=DOMUtil.createElementNS(Constants.NS_UI,"ui:menubody",_6d4);
return UserInterface.registerBinding(_6d5,MenuBodyBinding);
};
MenuGroupBinding.prototype=new Binding;
MenuGroupBinding.prototype.constructor=MenuGroupBinding;
MenuGroupBinding.superclass=Binding.prototype;
MenuGroupBinding.LAYOUT_DEFAULT=0;
MenuGroupBinding.LAYOUT_FIRST=1;
MenuGroupBinding.LAYOUT_LAST=2;
function MenuGroupBinding(){
this.logger=SystemLogger.getLogger("MenuGroupBinding");
this.isVisible=true;
}
MenuGroupBinding.prototype.toString=function(){
return "[MenuGroupBinding]";
};
MenuGroupBinding.prototype.setLayout=function(_6d6){
switch(_6d6){
case MenuGroupBinding.LAYOUT_DEFAULT:
this.detachClassName("first");
this.detachClassName("last");
break;
case MenuGroupBinding.LAYOUT_FIRST:
this.attachClassName("first");
break;
case MenuGroupBinding.LAYOUT_LAST:
this.attachClassName("last");
break;
}
};
MenuGroupBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.display="block";
this.bindingElement.style.visibility="visible";
this.isVisible=true;
}
};
MenuGroupBinding.prototype.hide=function(){
if(this.isVisible){
this.bindingElement.style.display="none";
this.bindingElement.style.visibility="hidden";
this.isVisible=false;
}
};
MenuGroupBinding.prototype.empty=function(){
this.detachRecursive();
this.bindingElement.innerHTML="";
};
MenuGroupBinding.newInstance=function(_6d7){
var _6d8=DOMUtil.createElementNS(Constants.NS_UI,"ui:menugroup",_6d7);
return UserInterface.registerBinding(_6d8,MenuGroupBinding);
};
MenuItemBinding.prototype=new MenuContainerBinding;
MenuItemBinding.prototype.constructor=MenuItemBinding;
MenuItemBinding.superclass=MenuContainerBinding.prototype;
MenuItemBinding.ACTION_COMMAND="menuitemcommand";
MenuItemBinding.TYPE_CHECKBOX="checkbox";
MenuItemBinding.TYPE_MENUCONTAINER="menucontainer";
MenuItemBinding.CLASSNAME_CHECKBOX="checkboxindicator";
MenuItemBinding.CLASSNAME_SUBMENU="submenuindicator";
MenuItemBinding.CLASSNAME_HOVER="hover";
MenuItemBinding.CHAR_CHECKBOX="V";
MenuItemBinding.CHAR_SUBMENU=String.fromCharCode(9658);
MenuItemBinding.TIMEOUT=150;
function MenuItemBinding(){
this.logger=SystemLogger.getLogger("MenuItemBinding");
this.type=null;
this.oncommand=null;
this.isDisabled=false;
this.labelBinding=null;
this.image=null;
this.imageHover=null;
this.imageActive=null;
this.imageDisabled=null;
this.imageProfile=null;
this.isMenuContainer=false;
this.isTypeSet=false;
this.isChecked=false;
this.isFocused=false;
this._containingMenuBodyBinding=null;
}
MenuItemBinding.prototype.toString=function(){
return "[MenuItemBinding]";
};
MenuItemBinding.prototype.onBindingRegister=function(){
MenuItemBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["isdisabled"]=this.setDisabled;
if(this.type){
this.setProperty("type",this.type);
}
};
MenuItemBinding.prototype.onBindingAttach=function(){
MenuItemBinding.superclass.onBindingAttach.call(this);
this._containingMenuBodyBinding=this.getAncestorBindingByLocalName("menubody");
this._containingMenuBodyBinding.isDirty=true;
this.parseDOMProperties();
this.buildDOMContent();
this.assignDOMEvents();
this.dispatchAction(Binding.ACTION_ATTACHED);
};
MenuItemBinding.prototype.parseDOMProperties=function(){
var _6d9=this.getProperty("image");
var _6da=this.getProperty("image-hover");
var _6db=this.getProperty("image-active");
var _6dc=this.getProperty("image-disabled");
if(!this.image&&_6d9){
this.image=_6d9;
}
if(!this.imageHover&&_6da){
this.imageHover=_6d9;
}
if(!this.imageActive&&_6db){
this.imageActive=_6db;
}
if(!this.imageDisabled&&_6dc){
this.imageDisabled=_6dc;
}
};
MenuItemBinding.prototype.buildDOMContent=function(){
var _6dd=this.getProperty("label");
var _6de=this.getProperty("tooltip");
var type=this.getProperty("type");
var _6e0=this.getProperty("isdisabled");
var _6e1=this.getProperty("image");
var _6e2=this.getProperty("image-hover");
var _6e3=this.getProperty("image-active");
var _6e4=this.getProperty("image-disabled");
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
this.labelBinding.attachClassName("menuitemlabel");
this.add(this.labelBinding);
var _6e5=this.getMenuPopupBinding();
if(_6e5){
this.isMenuContainer=true;
this.setType(MenuItemBinding.TYPE_MENUCONTAINER);
}
if(!this.imageProfile){
if(!this.image&&_6e1){
this.image=_6e1;
}
if(!this.imageHover&&_6e2){
this.imageHover=_6e1;
}
if(!this.imageActive&&_6e3){
this.imageActive=_6e3;
}
if(!this.imageDisabled&&_6e4){
this.imageDisabled=_6e4;
}
if(this.image||this.imageHover||this.imageActive||this.imageDisabled){
this.imageProfile=new ImageProfile(this);
}
}
if(this.imageProfile){
this.setImage(this.imageProfile.getDefaultImage());
}else{
this.setImage(null);
}
if(_6dd!=null){
this.setLabel(_6dd);
}
if(_6de){
this.setToolTip(_6de);
}
if(type){
this.setType(type);
}
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
if(this.getProperty("ischecked")==true){
this.check(true);
}
}
if(_6e0==true){
this.disable();
}
var _6e6=this.getProperty("oncommand");
if(_6e6){
if(this.isMenuContainer){
throw new Error("MenuItemBinding with contained menuitems cannot fire commands.");
}else{
this.oncommand=function(){
this.bindingWindow.eval(_6e6);
};
}
}
};
MenuItemBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEOVER);
this.addEventListener(DOMEvents.MOUSEUP);
};
MenuItemBinding.prototype.handleEvent=function(e){
MenuItemBinding.superclass.handleEvent.call(this,e);
if(!this.isDisabled&&!BindingDragger.isDragging){
switch(e.type){
case DOMEvents.MOUSEOVER:
this.focus(e);
break;
case DOMEvents.MOUSEUP:
DOMEvents.stopPropagation(e);
if(!this.isMenuContainer){
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
this.setChecked(!this.isChecked);
}else{
this.fireCommand();
}
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,this);
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEUP,this);
}
break;
}
}
};
MenuItemBinding.prototype.fireCommand=function(){
if(!this.isMenuContainer){
if(this.oncommand){
this.oncommand();
}
this.dispatchAction(MenuItemBinding.ACTION_COMMAND);
}
};
MenuItemBinding.prototype.setImage=function(url){
url=url?url:LabelBinding.DEFAULT_IMAGE;
this.setProperty("image",url);
if(this.isAttached){
this.labelBinding.setImage(Resolver.resolve(url));
}
};
MenuItemBinding.prototype.setLabel=function(_6e9){
this.setProperty("label",_6e9);
if(this.isAttached){
this.labelBinding.setLabel(Resolver.resolve(_6e9));
}
};
MenuItemBinding.prototype.setToolTip=function(_6ea){
this.setProperty("tooltip",_6ea);
if(this.isAttached){
this.labelBinding.setToolTip(Resolver.resolve(_6ea));
}
};
MenuItemBinding.prototype.reset=function(){
if(this.labelBinding.hasClassName("hover")){
this.labelBinding.detachClassName("hover");
}
};
MenuItemBinding.prototype.setType=function(type){
if(this.isAttached){
if(!this.isTypeSet){
switch(type){
case MenuItemBinding.TYPE_CHECKBOX:
if(!this.isMenuContainer){
this._containingMenuBodyBinding.invokeCheckBoxLayout();
var _6ec=this.bindingDocument.createElement("div");
_6ec.className=MenuItemBinding.CLASSNAME_CHECKBOX;
_6ec.appendChild(this.bindingDocument.createTextNode(MenuItemBinding.CHAR_CHECKBOX));
var _6ed=this.labelBinding.bindingElement;
_6ed.insertBefore(_6ec,_6ed.firstChild);
_6ec.style.display="none";
this.shadowTree.checkBoxIndicator=_6ec;
}else{
throw new Error("MenuItemBinding: checkboxes cannot contain menus");
}
break;
case MenuItemBinding.TYPE_MENUCONTAINER:
var _6ec=this.bindingDocument.createElement("div");
_6ec.className=MenuItemBinding.CLASSNAME_SUBMENU;
_6ec.appendChild(this.bindingDocument.createTextNode(MenuItemBinding.CHAR_SUBMENU));
var _6ed=this.labelBinding.bindingElement;
_6ed.insertBefore(_6ec,_6ed.firstChild);
break;
}
this.type=type;
this.isTypeSet=true;
}else{
throw new Error("MenuItemBinding: Cannot set type twice.");
}
}
this.setProperty("type",type);
};
MenuItemBinding.prototype.getImage=function(){
return this.getProperty("image");
};
MenuItemBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
MenuItemBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
MenuItemBinding.prototype.disable=function(){
this.setDisabled(true);
};
MenuItemBinding.prototype.enable=function(){
this.setDisabled(false);
};
MenuItemBinding.prototype.setDisabled=function(bool){
this.isDisabled=bool;
if(this.isDisabled){
this.setProperty("isdisabled",true);
}else{
this.deleteProperty("isdisabled");
}
if(this.isAttached){
if(this.isDisabled){
this.labelBinding.detachClassName("hover");
this.attachClassName("isdisabled");
if(this.imageProfile){
var _6ef=this.imageProfile.getDisabledImage();
if(_6ef){
this.setImage(_6ef);
}
}
}else{
this.detachClassName("isdisabled");
if(this.imageProfile){
var _6ef=this.imageProfile.getDefaultImage();
if(_6ef){
this.setImage(_6ef);
}
}
}
}
};
MenuItemBinding.prototype.focus=function(e){
this.labelBinding.attachClassName(MenuItemBinding.CLASSNAME_HOVER);
var _6f1=this.getMenuContainerBinding();
if(_6f1.isOpen()&&!_6f1.isOpen(this)){
_6f1._openElement.hide();
_6f1.setOpenElement(false);
}
if(this.isMenuContainer&&e&&e.type==DOMEvents.MOUSEOVER){
var _6f1=this.getMenuContainerBinding();
if(!_6f1.isOpen(this)){
var self=this;
this._showSubMenuTimeout=window.setTimeout(function(){
self.show();
self._showSubMenuTimeout=null;
},MenuItemBinding.TIMEOUT);
}
}
if(!e||e.type!=DOMEvents.MOUSEOVER){
if(this.bindingElement.tabIndex!=-1){
if(Client.isMozilla){
FocusBinding.focusElement(this.bindingElement);
}else{
var self=this;
setTimeout(function(){
FocusBinding.focusElement(self.bindingElement);
},0);
}
}
}
this.isFocused=true;
this._containingMenuBodyBinding.handleFocusedItem(this);
};
MenuItemBinding.prototype.blur=function(_6f3){
if(this._showSubMenuTimeout){
window.clearTimeout(this._showSubMenuTimeout);
this._showSubMenuTimeout=null;
}
if(this.isFocused){
var _6f4=this.getMenuContainerBinding();
if(!_6f4||!_6f4.isOpen(this)||_6f3){
this.labelBinding.detachClassName(MenuItemBinding.CLASSNAME_HOVER);
this.isFocused=false;
this._containingMenuBodyBinding.handleBlurredItem(this);
}
}
};
MenuItemBinding.prototype.check=function(_6f5){
this.setChecked(true,_6f5);
};
MenuItemBinding.prototype.uncheck=function(_6f6){
this.setChecked(false,_6f6);
};
MenuItemBinding.prototype.show=function(){
this.menuPopupBinding.position=PopupBinding.POSITION_RIGHT;
MenuItemBinding.superclass.show.call(this);
};
MenuItemBinding.prototype.setChecked=function(_6f7,_6f8){
this.setProperty("ischecked",_6f7);
if(this.isAttached){
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
if(this.isChecked!=_6f7){
this.isChecked=_6f7;
this.shadowTree.checkBoxIndicator.style.display=_6f7?"block":"none";
if(!_6f8){
this.fireCommand();
}
}
}
}
};
MenuItemBinding.newInstance=function(_6f9){
var _6fa=DOMUtil.createElementNS(Constants.NS_UI,"ui:menuitem",_6f9);
UserInterface.registerBinding(_6fa,MenuItemBinding);
return UserInterface.getBinding(_6fa);
};
PopupSetBinding.prototype=new MenuContainerBinding;
PopupSetBinding.prototype.constructor=PopupSetBinding;
PopupSetBinding.superclass=MenuContainerBinding.prototype;
function PopupSetBinding(){
this.logger=SystemLogger.getLogger("PopupSetBinding");
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
PopupSetBinding.prototype.toString=function(){
return "[PopupSetBinding]";
};
PopupBinding.prototype=new Binding;
PopupBinding.prototype.constructor=PopupBinding;
PopupBinding.superclass=Binding.prototype;
PopupBinding.ACTION_SHOW="popupshow";
PopupBinding.ACTION_HIDE="popuphide";
PopupBinding.POSITION_TOP="top";
PopupBinding.POSITION_RIGHT="right";
PopupBinding.POSITION_BOTTOM="bottom";
PopupBinding.POSITION_LEFT="left";
PopupBinding.TYPE_NORMAL="normal";
PopupBinding.TYPE_FIXED="fixed";
PopupBinding.FIXED_MAX=12;
PopupBinding.CLASSNAME_OVERFLOW="overflow";
PopupBinding.activeInstances=new Map();
PopupBinding.hasActiveInstances=function(){
return PopupBinding.activeInstances.hasEntries();
};
PopupBinding.handleBroadcast=function(_6fb,arg){
switch(_6fb){
case BroadcastMessages.MOUSEEVENT_MOUSEDOWN:
if(PopupBinding.activeInstances.hasEntries()){
var list=new List();
PopupBinding.activeInstances.each(function(key){
var _6ff=PopupBinding.activeInstances.get(key);
var _700=(arg&&arg instanceof ButtonBinding&&arg.popupBinding==_6ff);
if(!_700){
list.add(_6ff);
}
});
list.each(function(_701){
_701.hide();
});
}
break;
case BroadcastMessages.KEY_ESCAPE:
if(PopupBinding.activeInstances.hasEntries()){
PopupBinding.activeInstances.each(function(key){
var _703=PopupBinding.activeInstances.get(key);
_703.hide();
});
}
break;
}
};
EventBroadcaster.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,PopupBinding);
EventBroadcaster.subscribe(BroadcastMessages.KEY_ESCAPE,PopupBinding);
function PopupBinding(){
this.logger=SystemLogger.getLogger("PopupBinding");
this._bodyBinding=null;
this.position=null;
this.isVisible=false;
this.onshow=null;
this.onhide=null;
this.geometry=null;
this._menuItems=null;
this._menuGroups=null;
this._menuItemCount=0;
this.type=PopupBinding.TYPE_NORMAL;
this._isOverflow=false;
return this;
}
PopupBinding.prototype.toString=function(){
return "[PopupBinding]";
};
PopupBinding.prototype.onBindingAttach=function(){
PopupBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_ATTACHED);
this.geometry={x:0,y:0,w:0,h:0};
this.buildDOMContent();
this.parseDOMProperties();
this.assignDOMEvents();
};
PopupBinding.prototype.onBindingDispose=function(){
PopupBinding.superclass.onBindingDispose.call(this);
if(PopupBinding.activeInstances.has(this.key)){
PopupBinding.activeInstances.del(this.key);
}
};
PopupBinding.prototype.buildDOMContent=function(){
var _704=DOMUtil.getElementsByTagName(this.bindingElement,"menubody").item(0);
var _705=DOMUtil.getElementsByTagName(this.bindingElement,"popupbody").item(0);
if(_704){
this._bodyBinding=UserInterface.getBinding(_704);
}else{
if(_705){
this._bodyBinding=UserInterface.getBinding(_705);
}else{
if(this.bindingElement.childElementCount>0){
throw new Error(this+": DOM structure invalid.");
}else{
this._bodyBinding=this.add(MenuBodyBinding.newInstance(this.bindingDocument)).attach();
}
}
}
if(Client.hasTransitions){
this.bindingElement.style.opacity="0";
}
};
PopupBinding.prototype.parseDOMProperties=function(){
if(!this.position){
var _706=this.getProperty("position");
this.position=_706?_706:PopupBinding.POSITION_BOTTOM;
}
};
PopupBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEUP);
};
PopupBinding.prototype.add=function(_707){
var _708=null;
if(this._bodyBinding){
this._bodyBinding.add(_707);
_708=_707;
}else{
_708=PopupBinding.superclass.add.call(this,_707);
}
return _708;
};
PopupBinding.prototype.addFirst=function(_709){
var _70a=null;
if(this._bodyBinding){
this._bodyBinding.addFirst(_709);
_70a=_709;
}else{
_70a=PopupBinding.superclass.addFirst.call(this,_709);
}
return _70a;
};
PopupBinding.prototype.handleAction=function(_70b){
PopupBinding.superclass.handleAction.call(this,_70b);
var _70c=_70b.target;
switch(_70b.type){
case Binding.ACTION_ATTACHED:
if(_70c instanceof MenuItemBinding){
this._count(true);
_70b.consume();
}
break;
case Binding.ACTION_DETACHED:
if(_70c instanceof MenuItemBinding){
this._count(false);
_70b.consume();
}
break;
}
};
PopupBinding.prototype._count=function(_70d){
if(this.type==PopupBinding.TYPE_FIXED){
this._menuItemCount=this._menuItemCount+(_70d?1:-1);
if(!this._isOverflow){
if(this._menuItemCount>=PopupBinding.FIXED_MAX){
this.bindingElement.style.height="";
this.attachClassName(PopupBinding.CLASSNAME_OVERFLOW);
this._isOverflow=true;
}
}else{
if(this._menuItemCount<PopupBinding.FIXED_MAX){
this.bindingElement.style.height="auto";
this.detachClassName(PopupBinding.CLASSNAME_OVERFLOW);
this._isOverflow=false;
}
}
}
};
PopupBinding.prototype.snapTo=function(_70e){
var _70f=this._getElementPosition(_70e);
switch(this.position){
case PopupBinding.POSITION_TOP:
_70f.y-=this.bindingElement.offsetHeight;
break;
case PopupBinding.POSITION_RIGHT:
_70f.x+=_70e.offsetWidth;
break;
case PopupBinding.POSITION_BOTTOM:
_70f.y+=_70e.offsetHeight;
break;
case PopupBinding.POSITION_LEFT:
_70f.x-=this.bindingElement.offsetWidth;
break;
}
this.targetElement=_70e;
this.bindingElement.style.display="block";
this.setPosition(_70f.x,_70f.y);
};
PopupBinding.prototype.snapToMouse=function(e){
this.snapToPoint(this._getMousePosition(e));
};
PopupBinding.prototype.snapToPoint=function(_711){
this.bindingElement.style.display="block";
this.setPosition(_711.x,_711.y);
this.show();
};
PopupBinding.prototype.setPosition=function(x,y){
this.geometry.x=x;
this.geometry.y=y;
this.bindingElement.style.left=this.geometry.x+"px";
this.bindingElement.style.top=this.geometry.y+"px";
};
PopupBinding.prototype.getPosition=function(x,y){
return new Point(this.geometry.x,this.geometry.y);
};
PopupBinding.prototype.getDimension=function(){
return new Dimension(this.bindingElement.offsetWidth,this.bindingElement.offsetHeight);
};
PopupBinding.prototype._getElementPosition=function(_716){
return _716.ownerDocument==this.bindingDocument?DOMUtil.getGlobalPosition(_716):DOMUtil.getUniversalPosition(_716);
};
PopupBinding.prototype._getMousePosition=function(e){
var _718=DOMEvents.getTarget(e);
return _718.ownerDocument==this.bindingDocument?DOMUtil.getGlobalMousePosition(e):DOMUtil.getUniversalMousePosition(e);
};
PopupBinding.prototype.show=function(){
if(this.isVisible==true){
this.hide();
}
if(!this.isVisible){
PopupBinding.activeInstances.set(this.key,this);
this.bindingElement.style.display="block";
this.dispatchAction(PopupBinding.ACTION_SHOW);
this.fitOnScreen();
this._makeVisible(true);
if(this._bodyBinding instanceof MenuBodyBinding){
this._bodyBinding.refreshMenuGroups();
}
this._enableTab(true);
}
};
PopupBinding.prototype._makeVisible=function(_719){
var _71a=this.bindingElement;
if(_719){
if(Client.hasTransitions){
_71a.style.visibility="visible";
_71a.style.opacity="1";
}else{
_71a.style.visibility="visible";
}
}else{
_71a.style.visibility="hidden";
_71a.style.display="none";
if(Client.hasTransitions){
_71a.style.opacity="0";
}
}
this.isVisible=_719;
};
PopupBinding.prototype._enableTab=function(_71b){
var self=this;
var _71d=this.getDescendantBindingsByLocalName("menuitem");
setTimeout(function(){
if(Binding.exists(self)==true){
_71d.each(function(_71e){
_71e.bindingElement.tabIndex=_71b?0:-1;
});
}
},0);
};
PopupBinding.prototype.hide=function(){
this.releaseKeyboard();
if(this.isVisible){
this._makeVisible(false);
this.targetElement=null;
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
this.dispatchAction(PopupBinding.ACTION_HIDE);
this._enableTab(false);
var self=this;
setTimeout(function(){
if(!self.isVisible){
PopupBinding.activeInstances.del(self.key);
}
},0);
}
};
PopupBinding.prototype.fitOnScreen=function(){
var x=this.bindingElement.offsetLeft;
var y=this.bindingElement.offsetTop;
var w=this.bindingElement.offsetWidth;
var h=this.bindingElement.offsetHeight;
var dim=this.bindingWindow.WindowManager.getWindowDimensions();
var pos=this.boxObject.getGlobalPosition();
if(this.targetElement!=null){
if(pos.y+h>=dim.h){
switch(CSSComputer.getPosition(this.bindingElement.offsetParent)){
case "absolute":
y=y-h-this.targetElement.offsetHeight;
if(y<0){
y=0;
}
break;
case "relative":
y=y-h+this.targetElement.offsetHeight+9;
var _726=DOMUtil.getGlobalPosition(this.targetElement);
if(y+_726.y<0){
y=-_726.y;
}
break;
}
}
if(pos.x+w>=dim.w){
x-=w;
switch(this.position){
case PopupBinding.POSITION_RIGHT:
x-=this.targetElement.offsetWidth;
break;
case PopupBinding.POSITION_BOTTOM:
x+=this.targetElement.offsetWidth;
break;
}
}
}else{
if(pos.y+h>=dim.h){
y-=h;
if(y<0){
y=0;
}
}
if(pos.x+w>=dim.w){
x-=w;
if(x<0){
x=0;
}
}
}
this.setPosition(x,y);
};
PopupBinding.prototype.handleEvent=function(e){
PopupBinding.superclass.handleEvent.call(this,e);
DOMEvents.stopPropagation(e);
};
PopupBinding.prototype.empty=function(){
this._bodyBinding.detachRecursive();
this._bodyBinding.bindingElement.innerHTML="";
};
PopupBinding.prototype.grabKeyboard=function(_728){
};
PopupBinding.prototype.releaseKeyboard=function(){
if(this._bodyBinding!=null&&this._bodyBinding instanceof MenuBodyBinding){
this._bodyBinding.releaseKeyboard();
}
};
PopupBinding.prototype._indexMenuContent=function(){
this._menuItems={};
this._menuGroups={};
var list=this.getDescendantBindingsByLocalName("menugroup");
while(list.hasNext()){
var item=list.getNext();
var rel=item.getProperty("rel");
if(rel){
if(!this._menuGroups[rel]){
this._menuGroups[rel]=new List();
}
this._menuGroups[rel].add(item);
}
}
list=this.getDescendantBindingsByLocalName("menuitem");
while(list.hasNext()){
var item=list.getNext();
var cmd=item.getProperty("cmd");
this._menuItems[cmd]=item;
}
};
PopupBinding.prototype.getMenuItemForCommand=function(cmd){
var _72e=null;
if(this._menuItems){
if(this._menuItems[cmd]){
_72e=this._menuItems[cmd];
}else{
throw "PopupBinding.getMenuItemForCommand: No binding for command "+cmd;
}
}else{
throw "Must invoke _indexMenuContent method first!";
}
return _72e;
};
PopupBinding.prototype.clear=function(){
var _72f=this._bodyBinding;
if(_72f){
_72f.detachRecursive();
_72f.bindingElement.innerHTML="";
}
this.bindingElement.style.height="auto";
this.detachClassName(PopupBinding.CLASSNAME_OVERFLOW);
this._isOverflow=false;
this._menuItemCount=0;
};
PopupBinding.newInstance=function(_730){
var _731=DOMUtil.createElementNS(Constants.NS_UI,"ui:popup",_730);
return UserInterface.registerBinding(_731,PopupBinding);
};
PopupBodyBinding.prototype=new Binding;
PopupBodyBinding.prototype.constructor=PopupBodyBinding;
PopupBodyBinding.superclass=Binding.prototype;
function PopupBodyBinding(){
this.logger=SystemLogger.getLogger("PopupBodyBinding");
}
PopupBodyBinding.prototype.toString=function(){
return "[PopupBodyBinding]";
};
PopupBodyBinding.prototype.setDimension=function(dim){
this.getBindingElement().style.width=new String(dim.w)+"px";
};
PopupBodyBinding.newInstance=function(_733){
var _734=DOMUtil.createElementNS(Constants.NS_UI,"ui:popupbody",_733);
return UserInterface.registerBinding(_734,PopupBodyBinding);
};
MenuPopupBinding.prototype=new PopupBinding;
MenuPopupBinding.prototype.constructor=MenuPopupBinding;
MenuPopupBinding.superclass=PopupBinding.prototype;
function MenuPopupBinding(){
this.logger=SystemLogger.getLogger("MenuPopupBinding");
return this;
}
MenuPopupBinding.prototype.toString=function(){
return "[MenuPopupBinding]";
};
MenuPopupBinding.prototype._getElementPosition=function(_735){
return new Point(_735.offsetLeft,0);
};
MenuPopupBinding.newInstance=function(_736){
var _737=DOMUtil.createElementNS(Constants.NS_UI,"ui:menupopup",_736);
return UserInterface.registerBinding(_737,MenuPopupBinding);
};
DialogBinding.prototype=new ControlBoxBinding;
DialogBinding.prototype.constructor=DialogBinding;
DialogBinding.superclass=ControlBoxBinding.prototype;
DialogBinding.MODE_DRAGGING="dialogdragging";
DialogBinding.MODE_RESIZING="dialogresizing";
DialogBinding.ACTION_OPEN="dialogopen";
DialogBinding.ACTION_CLOSE="dialogclose";
DialogBinding.DEFAULT_WIDTH=540;
DialogBinding.DEFAULT_HEIGHT=100;
function DialogBinding(){
this.logger=SystemLogger.getLogger("DialogBinding");
this.isFlexible=false;
this._matrix=null;
this._head=null;
this._body=null;
this._cover=null;
this._titlebar=null;
this._border=null;
this.startPoint=null;
this.geometry=null;
this.isActive=false;
this.isActivatable=false;
this.isVisible=false;
this._isResizable=true;
this.isDialogResizable=true;
this.isModal=false;
this.mode=null;
this.controlBindings={};
this._index=null;
this._hasTransitions=false;
return this;
}
DialogBinding.prototype.toString=function(){
return "[DialogBinding]";
};
DialogBinding.prototype.onBindingRegister=function(){
DialogBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_DRAG,this);
this.addActionListener(FocusBinding.ACTION_ACTIVATED);
this.subscribe(this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST);
this.buildDescendantBindings();
};
DialogBinding.prototype.onBindingAttach=function(){
DialogBinding.superclass.onBindingAttach.call(this);
this.geometry=this.computeDefaultGeometry();
this.parseDOMProperties();
this.buildControlBindings();
this.buildBorderBindings();
this.attachRecursive();
if(this._isResizable){
this.attachClassName("resizable");
}
if(this._hasTransitions){
this.bindingElement.style.opacity="0";
}
this.setPosition(new Point(0,0));
this.setDimension(new Dimension(DialogBinding.DEFAULT_WIDTH,DialogBinding.DEFAULT_HEIGHT));
if(this.getProperty("open")){
this.open();
}
};
DialogBinding.prototype.buildDescendantBindings=function(){
this._matrix=DialogMatrixBinding.newInstance(this.bindingDocument);
this._head=DialogHeadBinding.newInstance(this.bindingDocument);
this._titlebar=DialogTitleBarBinding.newInstance(this.bindingDocument);
this.add(this._matrix);
this.addFirst(this._head);
this._head.add(this._titlebar);
var _738=DOMUtil.getElementsByTagName(this.bindingElement,"dialogbody").item(0);
if(_738){
this._body=UserInterface.getBinding(_738);
}else{
this._body=DialogBodyBinding.newInstance(this.bindingDocument);
this.add(this._body);
}
};
DialogBinding.prototype.buildBorderBindings=function(){
var _739=new List([DialogBorderBinding.TYPE_NORTH,DialogBorderBinding.TYPE_SOUTH,DialogBorderBinding.TYPE_EAST,DialogBorderBinding.TYPE_WEST]);
while(_739.hasNext()){
var _73a=DialogBorderBinding.newInstance(this.bindingDocument);
_73a.setType(_739.getNext());
this.add(_73a);
}
};
DialogBinding.prototype.buildControlBindings=function(){
var _73b=this.getProperty("controls");
if(_73b){
var _73c=new List(_73b.split(" "));
while(_73c.hasNext()){
var type=_73c.getNext();
switch(type){
case ControlBinding.TYPE_MAXIMIZE:
case ControlBinding.TYPE_MINIMIZE:
case ControlBinding.TYPE_CLOSE:
var _73e=DialogControlBinding.newInstance(this.bindingDocument);
_73e.setControlType(type);
this._titlebar.addControl(_73e);
this.controlBindings[type]=_73e;
break;
default:
throw new Error("DialogBinding: Control not added: "+type);
break;
}
}
}
};
DialogBinding.prototype.buildDialogCoverBinding=function(){
this._cover=DialogCoverBinding.newInstance(this.bindingDocument);
this.getAncestorBindingByLocalName("dialogset").add(this._cover);
this._cover.cover(this);
};
DialogBinding.prototype.parseDOMProperties=function(){
var _73f=this.getProperty("image");
var _740=this.getProperty("label");
var _741=this.getProperty("draggable");
var _742=this.getProperty("resizable");
var _743=this.getProperty("modal");
if(_73f){
this.setImage(_73f);
}
if(_740){
this.setLabel(_740);
}
if(_741==false){
this.isDialogDraggable=false;
}
if(_742==false){
this.isPanelResizable=false;
}
if(_743==true){
this.setModal(true);
}
};
DialogBinding.prototype.setModal=function(_744){
this.isModal=_744;
};
DialogBinding.prototype.setLabel=function(_745){
this.setProperty("label",_745);
if(this.isAttached==true){
this._titlebar.setLabel(Resolver.resolve(_745));
}
};
DialogBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
DialogBinding.prototype.setImage=function(url){
this.setProperty("image",url);
if(this.isAttached){
this._titlebar.setImage(Resolver.resolve(url));
}
};
DialogBinding.prototype.handleAction=function(_747){
DialogBinding.superclass.handleAction.call(this,_747);
switch(_747.type){
case Binding.ACTION_DRAG:
var _748=_747.target;
if(this.getState()==ControlBoxBinding.STATE_NORMAL){
switch(_748.constructor){
case DialogTitleBarBinding:
this.mode=DialogBinding.MODE_DRAGGING;
_748.dragger.registerHandler(this);
break;
case DialogBorderBinding:
if(this._isResizable){
this.mode=DialogBinding.MODE_RESIZING;
this._border=_748;
_748.dragger.registerHandler(this);
}
break;
}
}
_747.consume();
break;
case Binding.ACTION_ACTIVATED:
if(!this.isActive){
this.activate();
}
_747.consume();
break;
}
};
DialogBinding.prototype.handleBroadcast=function(_749,arg){
DialogBinding.superclass.handleBroadcast.call(this,_749,arg);
switch(_749){
case this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST:
this.startPoint=this.getPosition();
this._setComputedPosition(new Point(0,0));
break;
}
};
DialogBinding.prototype.handleInvokedControl=function(_74b){
DialogBinding.superclass.handleInvokedControl.call(this,_74b);
switch(_74b.controlType){
case ControlBinding.TYPE_CLOSE:
this.close();
break;
}
};
DialogBinding.prototype.open=function(_74c){
if(this.isModal&&this._cover==null){
this.buildDialogCoverBinding();
}
if(!this.isVisible){
this.setProperty("open","true");
this.isVisible=true;
this.isActivatable=true;
this.activate();
if(_74c){
}else{
this.centerOnScreen();
this.reflex(true);
}
this.bindingElement.style.marginTop="0";
this.dispatchAction(DialogBinding.ACTION_OPEN);
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
if(this._hasTransitions){
this.bindingElement.style.opacity="1";
}
}
};
DialogBinding.prototype.close=function(){
if(this.isVisible){
this.isActivatable=false;
this.deActivate();
var self=this;
function doit(){
self.isVisible=false;
self.deleteProperty("open");
self.bindingElement.style.marginTop="-10000px";
self.dispatchAction(DialogBinding.ACTION_CLOSE);
}
if(!this._hasTransitions){
doit();
}else{
var _74e=self.bindingElement;
setTimeout(function(){
_74e.style.opacity="0";
setTimeout(function(){
doit();
},Animation.DEFAULT_TIME);
},Animation.DEFAULT_TIME);
}
}
};
DialogBinding.prototype.activate=function(){
if(!this.isActive){
this.isActive=true;
this.attachClassName("active");
this.moveToTop();
this._titlebar.onActivate();
Application.activate(this);
}
};
DialogBinding.prototype.deActivate=function(){
if(this.isActive==true){
this.isActive=false;
this.detachClassName("active");
this._titlebar.onDeactivate();
Application.deActivate(this);
}
};
DialogBinding.prototype.moveToTop=function(){
this.dispatchAction(Binding.ACTION_MOVETOTOP);
this.dispatchAction(Binding.ACTION_MOVEDONTOP);
};
DialogBinding.prototype.getZIndex=function(){
return CSSComputer.getZIndex(this.bindingElement);
};
DialogBinding.prototype.setZIndex=function(_74f){
this.bindingElement.style.zIndex=new String(_74f);
};
DialogBinding.prototype.onDragStart=function(_750){
switch(this.mode){
case DialogBinding.MODE_DRAGGING:
case DialogBinding.MODE_RESIZING:
this.startPoint=new Point(this.bindingElement.offsetLeft,this.bindingElement.offsetTop);
this.startDimension=new Dimension(this.bindingElement.offsetWidth,this.bindingElement.offsetHeight);
break;
}
};
DialogBinding.prototype.onDrag=function(diff){
switch(this.mode){
case DialogBinding.MODE_DRAGGING:
this._setComputedPosition(diff);
break;
case DialogBinding.MODE_RESIZING:
switch(this._border.getType()){
case DialogBorderBinding.TYPE_NORTH:
this.resizeNorth(diff);
break;
case DialogBorderBinding.TYPE_SOUTH:
this.resizeSouth(diff);
break;
case DialogBorderBinding.TYPE_EAST:
this.resizeEast(diff);
break;
case DialogBorderBinding.TYPE_WEST:
this.resizeWest(diff);
break;
}
this.reflex(true);
break;
}
};
DialogBinding.prototype.onDragStop=function(diff){
switch(this.mode){
case DialogBinding.MODE_DRAGGING:
this._setComputedPosition(diff);
break;
case DialogBinding.MODE_RESIZING:
break;
}
this.mode=null;
};
DialogBinding.prototype.resizeNorth=function(diff){
this.setPosition(new Point(this.startPoint.x,this.startPoint.y+diff.y));
this.setDimension(new Dimension(this.startDimension.w,this.startDimension.h-diff.y));
};
DialogBinding.prototype.resizeSouth=function(diff){
this.setDimension(new Dimension(this.startDimension.w,this.startDimension.h+diff.y));
};
DialogBinding.prototype.resizeEast=function(diff){
this.setDimension(new Dimension(this.startDimension.w+diff.x,this.startDimension.h));
};
DialogBinding.prototype.resizeWest=function(diff){
this.setPosition(new Point(this.startPoint.x+diff.x,this.startPoint.y));
this.setDimension(new Dimension(this.startDimension.w-diff.x,this.startDimension.h));
};
DialogBinding.prototype._setComputedPosition=function(diff){
var win=this.bindingWindow.WindowManager.getWindowDimensions();
var dim=this.getDimension();
var x=this.startPoint.x+diff.x;
var y=this.startPoint.y+diff.y;
x=x<0?0:x+dim.w>win.w?win.w-dim.w:x;
y=y<0?0:y+dim.h>win.h?win.h-dim.h:y;
this.setPosition(new Point(x,y));
};
DialogBinding.prototype.setPosition=function(p){
var x=p.x;
var y=p.y;
x=Math.round(x);
this.bindingElement.style.left=x+"px";
this.geometry.x=x;
y=Math.round(y);
this.bindingElement.style.top=y+"px";
this.geometry.y=y;
};
DialogBinding.prototype.getPosition=function(){
return new Point(this.geometry.x,this.geometry.y);
};
DialogBinding.prototype.setDimension=function(dim){
if(!dim){
SystemDebug.stack(arguments);
}
var w=dim.w;
var h=dim.h;
w=Math.round(w);
this.bindingElement.style.width=w+"px";
this.geometry.w=w;
h=Math.round(h);
this.bindingElement.style.height=h+"px";
this.geometry.h=h;
};
DialogBinding.prototype.getDimension=function(){
return new Dimension(this.geometry.w,this.geometry.h);
};
DialogBinding.prototype.setResizable=function(_762){
if(this._isResizable!=_762){
if(_762){
this.attachClassName("resizable");
}else{
this.detachClassName("resizable");
}
this._isResizable=_762;
}
};
DialogBinding.prototype.computeDefaultGeometry=function(){
var _763=null;
var _764=this.bindingDocument.body.offsetWidth;
var _765=this.bindingDocument.body.offsetHeight;
_763={x:0.125*_764,y:0.125*_765,w:0.75*_764,h:0.5*_765};
return _763;
};
DialogBinding.prototype.centerOnScreen=function(){
var _766=this.bindingWindow.WindowManager.getWindowDimensions();
var dim=this.getDimension();
this.setPosition(new Point(0.5*(_766.w-dim.w),0.5*(_766.h-dim.h)));
};
DialogBinding.prototype.alert=function(){
var _768=this;
var i=0;
function blink(){
if(i%2==0){
_768.detachClassName("active");
}else{
_768.attachClassName("active");
}
if(i++<7){
setTimeout(blink,50);
}
}
blink();
};
DialogBinding.prototype.setControls=function(list){
for(var type in this.controlBindings){
this.controlBindings[type].dispose();
}
var _76c="";
while(list.hasNext()){
var type=list.getNext();
_76c+=type+list.hasNext()?" ":"";
}
this.setProperty("controls",_76c);
if(this.isAttached){
this.buildControlBindings();
}
};
DialogBinding.newInstance=function(_76d){
var _76e=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialog",_76d);
return UserInterface.registerBinding(_76e,DialogBinding);
};
DialogHeadBinding.prototype=new Binding;
DialogHeadBinding.prototype.constructor=DialogHeadBinding;
DialogHeadBinding.superclass=Binding.prototype;
function DialogHeadBinding(){
this.logger=SystemLogger.getLogger("DialogHeadBinding");
}
DialogHeadBinding.prototype.toString=function(){
return "[DialogHeadBinding]";
};
DialogHeadBinding.newInstance=function(_76f){
var _770=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialoghead",_76f);
return UserInterface.registerBinding(_770,DialogHeadBinding);
};
DialogBodyBinding.prototype=new FlexBoxBinding;
DialogBodyBinding.prototype.constructor=DialogBodyBinding;
DialogBodyBinding.superclass=FlexBoxBinding.prototype;
function DialogBodyBinding(){
this.logger=SystemLogger.getLogger("DialogBodyBinding");
this.panelBinding=null;
this.isVisible=true;
this._dialogBinding=null;
}
DialogBodyBinding.prototype.toString=function(){
return "[DialogBodyBinding]";
};
DialogBodyBinding.prototype.onBindingAttach=function(){
DialogBodyBinding.superclass.onBindingAttach.call(this);
this._dialogBinding=UserInterface.getBinding(this.bindingElement.parentNode);
};
DialogBodyBinding.prototype.getPosition=function(){
var pos=this._dialogBinding.getPosition();
return new Position(pos.x+this.offsetLeft+DialogBorderBinding.DIMENSION,pos.y+this.offsetTop);
};
DialogBodyBinding.prototype.getDimension=function(){
var dim=this.boxObject.getDimension();
return new Dimension(dim.w-2*DialogBorderBinding.DIMENSION,dim.h-DialogBorderBinding.DIMENSION);
};
DialogBodyBinding.newInstance=function(_773){
var _774=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialogbody",_773);
return UserInterface.registerBinding(_774,DialogBodyBinding);
};
DialogMatrixBinding.prototype=new MatrixBinding;
DialogMatrixBinding.prototype.constructor=DialogMatrixBinding;
DialogMatrixBinding.superclass=MatrixBinding.prototype;
function DialogMatrixBinding(){
this.logger=SystemLogger.getLogger("DialogMatrixBinding");
this.isDraggable=true;
this._type=null;
}
DialogMatrixBinding.prototype.toString=function(){
return "[DialogMatrixBinding]";
};
DialogMatrixBinding.prototype.onBindingAttach=function(){
DialogMatrixBinding.superclass.onBindingAttach.call(this);
this.shadowTree.table.className="matrix dialogmatrix";
this._indexTable();
this.shadowTree[MatrixBinding.CENTER].appendChild(this.bindingDocument.createTextNode("."));
};
DialogMatrixBinding.newInstance=function(_775){
var _776=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialogmatrix",_775);
return UserInterface.registerBinding(_776,DialogMatrixBinding);
};
DialogSetBinding.prototype=new Binding;
DialogSetBinding.prototype.constructor=DialogSetBinding;
DialogSetBinding.superclass=Binding.prototype;
function DialogSetBinding(){
this.logger=SystemLogger.getLogger("DialogSetBinding");
}
DialogSetBinding.prototype.toString=function(){
return "[DialogSetBinding]";
};
DialogSetBinding.prototype.onBindingAttach=function(){
DialogSetBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_MOVETOTOP,this);
this.addActionListener(Binding.ACTION_MOVEDONTOP,this);
};
DialogSetBinding.prototype.handleAction=function(_777){
DialogSetBinding.superclass.handleAction.call(this,_777);
var _778=_777.target;
switch(_777.type){
case Binding.ACTION_MOVETOTOP:
if(_778 instanceof DialogBinding){
this._moveToTop(_778);
}
break;
case Binding.ACTION_MOVEDONTOP:
_777.consume();
break;
}
};
DialogSetBinding.prototype._moveToTop=function(_779){
var _77a=0;
var _77b=this.getChildBindingsByLocalName("dialog");
_77b.each(function(_77c){
var _77d=_77c.getZIndex();
_77a=_77d>_77a?_77d:_77a;
});
_779.setZIndex(_77a+2);
};
DialogBorderBinding.prototype=new Binding;
DialogBorderBinding.prototype.constructor=DialogBorderBinding;
DialogBorderBinding.superclass=Binding.prototype;
DialogBorderBinding.TYPE_NORTH="n";
DialogBorderBinding.TYPE_SOUTH="s";
DialogBorderBinding.TYPE_EAST="e";
DialogBorderBinding.TYPE_WEST="w";
DialogBorderBinding.DIMENSION=4;
function DialogBorderBinding(){
this.logger=SystemLogger.getLogger("DialogBorderBinding");
this.isDraggable=true;
this._type=null;
}
DialogBorderBinding.prototype.toString=function(){
return "[DialogBorderBinding]";
};
DialogBorderBinding.prototype.setType=function(type){
this.attachClassName(type);
this._type=type;
};
DialogBorderBinding.prototype.getType=function(){
return this._type;
};
DialogBorderBinding.newInstance=function(_77f){
var _780=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialogborder",_77f);
return UserInterface.registerBinding(_780,DialogBorderBinding);
};
DialogCoverBinding.prototype=new Binding;
DialogCoverBinding.prototype.constructor=DialogCoverBinding;
DialogCoverBinding.superclass=Binding.prototype;
function DialogCoverBinding(){
this.logger=SystemLogger.getLogger("DialogCoverBinding");
this._dialogBinding=null;
}
DialogCoverBinding.prototype.toString=function(){
return "[DialogCoverBinding]";
};
DialogCoverBinding.prototype.cover=function(_781){
this._dialogBinding=_781;
this._dialogBinding.addActionListener(DialogBinding.ACTION_OPEN,this);
this._dialogBinding.addActionListener(DialogBinding.ACTION_CLOSE,this);
this._dialogBinding.addActionListener(Binding.ACTION_MOVEDONTOP,this);
this.addEventListener(DOMEvents.MOUSEDOWN);
};
DialogCoverBinding.prototype.handleEvent=function(e){
DialogCoverBinding.superclass.handleEvent.call(this,e);
this._dialogBinding.alert();
};
DialogCoverBinding.prototype.handleAction=function(_783){
DialogCoverBinding.superclass.handleAction.call(this,_783);
var _784=_783.target;
if(this._dialogBinding.isModal){
switch(_783.type){
case DialogBinding.ACTION_OPEN:
this.show();
break;
case DialogBinding.ACTION_CLOSE:
this.hide();
break;
case Binding.ACTION_MOVEDONTOP:
if(_784==this._dialogBinding){
this.bindingElement.style.zIndex=new String(_784.getZIndex()-1);
}
break;
}
}
};
DialogCoverBinding.prototype.handleBroadcast=function(_785,arg){
DialogCoverBinding.superclass.handleBroadcast.call(this,_785,arg);
switch(_785){
case this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST:
this._max();
break;
}
};
DialogCoverBinding.prototype._max=function(){
var dim=this.bindingWindow.WindowManager.getWindowDimensions();
this.bindingElement.style.width=dim.w+"px";
this.bindingElement.style.height=dim.h+"px";
};
DialogCoverBinding.prototype.show=function(){
this._max();
var _788=this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST;
this.subscribe(_788);
DialogCoverBinding.superclass.show.call(this);
};
DialogCoverBinding.prototype.hide=function(){
var _789=this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST;
this.unsubscribe(_789);
DialogCoverBinding.superclass.hide.call(this);
};
DialogCoverBinding.newInstance=function(_78a){
var _78b=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialogcover",_78a);
return UserInterface.registerBinding(_78b,DialogCoverBinding);
};
DialogTitleBarBinding.prototype=new Binding;
DialogTitleBarBinding.prototype.constructor=DialogTitleBarBinding;
DialogTitleBarBinding.superclass=Binding.prototype;
function DialogTitleBarBinding(){
this.logger=SystemLogger.getLogger("DialogTitleBarBinding");
this.bodyBinding=null;
this.labelBinding=null;
this._controlGroupBinding=null;
this.isDraggable=true;
}
DialogTitleBarBinding.prototype.toString=function(){
return "[DialogTitleBarBinding]";
};
DialogTitleBarBinding.prototype.onBindingRegister=function(){
DialogTitleBarBinding.superclass.onBindingRegister.call(this);
this.bodyBinding=this.add(DialogTitleBarBodyBinding.newInstance(this.bindingDocument));
this.labelBinding=this.bodyBinding.add(LabelBinding.newInstance(this.bindingDocument));
this.labelBinding.attachClassName("dialogtitle");
};
DialogTitleBarBinding.prototype.onBindingAttach=function(){
DialogTitleBarBinding.superclass.onBindingAttach.call(this);
var _78c=this.getProperty("image");
if(_78c){
this.setImage(_78c);
}
var _78d=this.getProperty("label");
if(_78d){
this.setLabel(_78d);
}
};
DialogTitleBarBinding.prototype.setLabel=function(_78e){
if(this.isAttached){
this.labelBinding.setLabel(_78e);
}
this.setProperty("label",_78e);
};
DialogTitleBarBinding.prototype.setImage=function(url){
if(this.isAttached&&Client.isWindows){
this.labelBinding.setImage(url);
}
this.setProperty("image",url);
};
DialogTitleBarBinding.prototype.addControl=function(_790){
if(!this._controlGroupBinding){
this._controlGroupBinding=this.bodyBinding.addFirst(ControlGroupBinding.newInstance(this.bindingDocument));
}
this._controlGroupBinding.add(_790);
};
DialogTitleBarBinding.prototype.onActivate=function(){
if(this._controlGroupBinding){
this._controlGroupBinding.onActivate();
}
};
DialogTitleBarBinding.prototype.onDeactivate=function(){
if(this._controlGroupBinding){
this._controlGroupBinding.onDeactivate();
}
};
DialogTitleBarBinding.newInstance=function(_791){
var _792=DOMUtil.createElementNS(Constants.NS_UI,"ui:titlebar",_791);
return UserInterface.registerBinding(_792,DialogTitleBarBinding);
};
DialogTitleBarBodyBinding.prototype=new Binding;
DialogTitleBarBodyBinding.prototype.constructor=DialogTitleBarBodyBinding;
DialogTitleBarBodyBinding.superclass=Binding.prototype;
function DialogTitleBarBodyBinding(){
this.logger=SystemLogger.getLogger("DialogTitleBarBodyBinding");
}
DialogTitleBarBodyBinding.prototype.toString=function(){
return "[DialogTitleBarBodyBinding]";
};
DialogTitleBarBodyBinding.prototype.onBindingRegister=function(){
DialogTitleBarBodyBinding.superclass.onBindingRegister.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
};
DialogTitleBarBodyBinding.newInstance=function(_793){
var _794=DOMUtil.createElementNS(Constants.NS_UI,"ui:titlebarbody",_793);
return UserInterface.registerBinding(_794,DialogTitleBarBodyBinding);
};
DialogControlBinding.prototype=new ControlBinding;
DialogControlBinding.prototype.constructor=DialogControlBinding;
DialogControlBinding.superclass=ControlBinding.prototype;
DialogControlBinding.CLASSNAME="dialogcontrol";
function DialogControlBinding(){
this.logger=SystemLogger.getLogger("DialogControlBinding");
this.hasMatrix=false;
this.isGhostable=true;
}
DialogControlBinding.prototype.toString=function(){
return "[DialogControlBinding]";
};
DialogControlBinding.prototype.onBindingRegister=function(){
DialogControlBinding.superclass.onBindingRegister.call(this);
this.setImageProfile(DialogControlImageProfile);
this.attachClassName(DialogControlBinding.CLASSNAME);
};
DialogControlBinding.newInstance=function(_795){
var _796=DOMUtil.createElementNS(Constants.NS_UI,"ui:control",_795);
return UserInterface.registerBinding(_796,DialogControlBinding);
};
DialogControlImageProfile.prototype=new ControlImageProfile;
DialogControlImageProfile.prototype.constructor=DialogControlImageProfile;
DialogControlImageProfile.superclass=ControlImageProfile.prototype;
var os=Client.isVista?"vista/":(!Client.isWindows?"osx/":"");
DialogControlImageProfile.IMAGE_MINIMIZE="${root}/skins/system/controls/"+os+"control-minimize-${string}.png";
DialogControlImageProfile.IMAGE_MAXIMIZE="${root}/skins/system/controls/"+os+"control-maximize-${string}.png";
DialogControlImageProfile.IMAGE_RESTORE="${root}/skins/system/controls/"+os+"control-restore-${string}.png";
DialogControlImageProfile.IMAGE_CLOSE="${root}/skins/system/controls/"+os+"control-close-${string}.png";
function DialogControlImageProfile(_797){
this.binding=_797;
}
DialogTitleBarPopupBinding.prototype=new PopupBinding;
DialogTitleBarPopupBinding.prototype.constructor=DialogTitleBarPopupBinding;
DialogTitleBarPopupBinding.superclass=PopupBinding.prototype;
DialogTitleBarPopupBinding.CMD_RESTORE="restore";
DialogTitleBarPopupBinding.CMD_MINIMIZE="minimize";
DialogTitleBarPopupBinding.CMD_MAXIMIZE="maximize";
DialogTitleBarPopupBinding.CMD_REFRESH="refreshview";
DialogTitleBarPopupBinding.CMD_CLOSE="closedialog";
DialogTitleBarPopupBinding.CMD_VIEWSOURCE="viewsource";
DialogTitleBarPopupBinding.CMD_VIEWGENERATED="viewgenerated";
DialogTitleBarPopupBinding.CMD_VIEWSERIALIZED="viewserialized";
function DialogTitleBarPopupBinding(){
this.logger=SystemLogger.getLogger("DialogTitleBarPopupBinding");
}
DialogTitleBarPopupBinding.prototype.toString=function(){
return "[DialogTitleBarPopupBinding]";
};
DialogTitleBarPopupBinding.prototype.onBindingAttach=function(){
DialogTitleBarPopupBinding.superclass.onBindingAttach.call(this);
this._indexMenuContent();
};
WindowBindingHighlightNodeCrawler.prototype=new NodeCrawler;
WindowBindingHighlightNodeCrawler.prototype.constructor=WindowBindingHighlightNodeCrawler;
WindowBindingHighlightNodeCrawler.superclass=NodeCrawler.prototype;
WindowBindingHighlightNodeCrawler.CLASSNAME_HIGHLIGHT="compositec1generatedhighlight";
function WindowBindingHighlightNodeCrawler(){
this._keywords=null;
this._map=new Map();
this._textnodes=null;
this._construct();
return this;
}
WindowBindingHighlightNodeCrawler.prototype._construct=function(){
ElementCrawler.superclass._construct.call(this);
this.addFilter(function(node,arg){
var _79a=null;
if(node.nodeType==Node.ELEMENT_NODE){
var _79b=node.nodeName.toLowerCase();
switch(_79b){
case "script":
case "style":
case "textarea":
_79a=NodeCrawler.SKIP_NODE+NodeCrawler.SKIP_CHILDREN;
break;
}
}
return _79a;
});
var self=this;
this.addFilter(function(node,arg){
if(node.nodeType==Node.TEXT_NODE){
var text=node.nodeValue.toLowerCase();
self._map.each(function(key,exp){
var _7a2=true;
if(exp.test(text)){
self._textnodes.add(node);
_7a2=false;
}
return _7a2;
});
}
});
};
WindowBindingHighlightNodeCrawler.prototype.crawl=function(_7a3,arg){
this._textnodes=new List();
WindowBindingHighlightNodeCrawler.superclass.crawl.call(this,_7a3,arg);
};
WindowBindingHighlightNodeCrawler.prototype.setKeys=function(list){
list.reset();
this._map.empty();
while(list.hasNext()){
var key=list.getNext();
var _7a7=key.toLowerCase().replace(/ /g,"\\W");
var exp=new RegExp("("+_7a7+")");
this._map.set(key,exp);
}
};
WindowBindingHighlightNodeCrawler.prototype.onCrawlStop=function(){
var self=this;
if(this._textnodes.hasEntries()){
this._textnodes.each(function(node){
var div=self.contextDocument.createElement("div");
var frag=self.contextDocument.createDocumentFragment();
div.innerHTML=self._getMarkup(node.nodeValue);
while(div.hasChildNodes()){
frag.appendChild(div.firstChild);
}
node.parentNode.replaceChild(frag,node);
});
}
};
WindowBindingHighlightNodeCrawler.prototype._getMarkup=function(_7ad){
var _7ae="";
var _7af="<span class=\""+WindowBindingHighlightNodeCrawler.CLASSNAME_HIGHLIGHT+"\" style=\"background-color:yellow;color:black;\">";
var _7b0="</span>";
var self=this;
function iterate(_7b2){
var _7b3=-1;
var _7b4=null;
self._map.each(function(key,exp){
var low=_7b2.toLowerCase();
var _7b8=low.search(exp);
if(_7b8>-1){
if(_7b3==-1){
_7b3=_7b8;
}
if(_7b8<=_7b3){
_7b3=_7b8;
_7b4=key;
}
}
});
if(_7b3>-1&&_7b4!=null){
var pre=_7b2.substring(0,_7b3);
var hit=_7b2.substring(_7b3,_7b3+_7b4.length);
var pst=_7b2.substring(_7b3+_7b4.length,_7b2.length);
_7ae+=pre+_7af+hit+_7b0;
iterate(pst);
}else{
_7ae+=_7b2;
}
}
iterate(_7ad);
return _7ae;
};
WindowBindingHighlightNodeCrawler.prototype.reset=function(_7bc){
var _7bd=new List(_7bc.getElementsByTagName("span"));
_7bd.each(function(span){
if(span.className==WindowBindingHighlightNodeCrawler.CLASSNAME_HIGHLIGHT){
var node=_7bc.ownerDocument.createTextNode(DOMUtil.getTextContent(span));
span.parentNode.replaceChild(node,span);
}
});
};
WindowBinding.prototype=new FlexBoxBinding;
WindowBinding.prototype.constructor=WindowBinding;
WindowBinding.superclass=FlexBoxBinding.prototype;
WindowBinding.ACTION_LOADED="window loaded";
WindowBinding.ACTION_ONLOAD="alien window loaded";
WindowBinding.DEFAULT_URL="${root}/blank.aspx";
WindowBinding.DEFAULT_TITLE="Composite.Management.Blank";
WindowBinding.POSTBACK_URL="${root}/postback.aspx";
WindowBinding.POSTBACK_TITLE="Composite.Management.DefaultPostBack";
WindowBinding.getMarkup=function(_7c0){
var _7c1=null;
if(_7c0.isAttached){
var doc=_7c0.getContentDocument();
if(doc!=null){
var root=doc.getElementsByTagName("html").item(0);
var html="<html xmlns=\""+Constants.NS_XHTML+"\">"+root.innerHTML+"</html>";
WebServiceProxy.isFaultHandler=false;
_7c1=top.MarkupFormatService.HtmlToXhtml(html);
WebServiceProxy.isFaultHandler=true;
if(_7c1 instanceof SOAPFault){
_7c1=null;
}
}
}
return _7c1;
};
WindowBinding.highlightKeywords=function(_7c5,list){
if(WindowBinding._highlightcrawler==null){
WindowBinding._highlightcrawler=new WindowBindingHighlightNodeCrawler();
}
if(_7c5.isAttached){
var doc=_7c5.getContentDocument();
if(doc!=null){
var _7c8=WindowBinding._highlightcrawler;
_7c8.reset(doc.body);
if(list!=null){
_7c8.setKeys(list);
_7c8.crawl(doc.body);
}
}
}
};
WindowBinding._highlightcrawler=null;
function WindowBinding(){
this.logger=SystemLogger.getLogger("WindowBinding");
this._target=null;
this._parameterMap=null;
this._pageBinding=null;
this._isReloading=false;
this._onloadHandler=null;
this._unloadHandler=null;
this._hasLoadActionFired=false;
return this;
}
WindowBinding.prototype.toString=function(){
return "[WindowBinding]";
};
WindowBinding.prototype.serialize=function(){
var _7c9=WindowBinding.superclass.serialize.call(this);
if(_7c9){
_7c9.url=this.getURL();
}
return _7c9;
};
WindowBinding.prototype.onBindingRegister=function(){
WindowBinding.superclass.onBindingRegister.call(this);
this.addActionListener(RootBinding.ACTION_PHASE_3);
this.addActionListener(PageBinding.ACTION_INITIALIZED);
this.addActionListener(RootBinding.ACTION_ACTIVATED);
this.addActionListener(RootBinding.ACTION_DEACTIVATED);
};
WindowBinding.prototype.onBindingAttach=function(){
this.buildDOMContent();
WindowBinding.superclass.onBindingAttach.call(this);
this.setURL(this.getURL());
};
WindowBinding.prototype.onBindingDispose=function(){
WindowBinding.superclass.onBindingDispose.call(this);
this._disposeContentDocument();
};
WindowBinding.prototype._disposeContentDocument=function(){
if(this._pageBinding!=null){
var win=this.getContentWindow();
if(win!=null){
var _7cb=this.getContentWindow().DocumentManager;
if(_7cb!=null){
_7cb.detachAllBindings();
this._pageBinding=null;
}
}
}
};
WindowBinding.prototype.handleAction=function(_7cc){
WindowBinding.superclass.handleAction.call(this,_7cc);
var _7cd=_7cc.target;
switch(_7cc.type){
case RootBinding.ACTION_PHASE_3:
if(_7cd.bindingDocument==this.getContentDocument()){
if(this._isReloading==true){
this._isReloading=false;
if(Client.isPrism==true){
Prism.enableCache();
}
}
this.dispatchAction(WindowBinding.ACTION_LOADED);
}
break;
case PageBinding.ACTION_INITIALIZED:
this._onPageInitialize(_7cd);
break;
case RootBinding.ACTION_ACTIVATED:
case RootBinding.ACTION_DEACTIVATED:
_7cc.consume();
break;
}
};
WindowBinding.prototype.fit=function(_7ce){
if(!this.isFit||_7ce){
if(this._pageBinding!=null){
this.setHeight(this._pageBinding.getHeight());
this.isFit=true;
}
}
};
WindowBinding.prototype._onPageInitialize=function(_7cf){
if(this._pageBinding==null){
if(_7cf.bindingWindow==this.getContentWindow()){
this._pageBinding=_7cf;
}
}
};
WindowBinding.prototype.buildDOMContent=function(){
this.shadowTree.iframe=DOMUtil.createElementNS(Constants.NS_XHTML,"iframe",this.bindingDocument);
this.shadowTree.iframe.setAttribute("frameborder","0");
this.shadowTree.iframe.frameBorder=0;
this.bindingElement.appendChild(this.shadowTree.iframe);
this._registerOnloadListener(true);
};
WindowBinding.prototype._registerOnloadListener=function(_7d0){
var _7d1=this.shadowTree.iframe;
var _7d2=_7d0?"addEventListener":"removeEventListener";
if(this._onloadHandler==null){
var self=this;
this._onloadHandler={handleEvent:function(e){
var _7d5=true;
if(Client.isExplorer){
_7d5=_7d1.readyState=="complete";
}
if(_7d5==true){
if(self.getURL()!=WindowBinding.DEFAULT_URL){
if(!self._hasLoadActionFired){
self.onWindowLoaded(self.getContentWindow());
}
}
}
}};
}
DOMEvents[_7d2](this.shadowTree.iframe,Client.isExplorer==true?"readystatechange":DOMEvents.LOAD,this._onloadHandler);
};
WindowBinding.prototype._registerUnloadListener=function(_7d6){
var _7d7=_7d6?"addEventListener":"removeEventListener";
if(this._unloadHandler==null){
var self=this;
this._unloadHandler={handleEvent:function(){
self._disposeContentDocument();
self._hasLoadActionFired=false;
}};
}
DOMEvents[_7d7](this.getContentWindow(),DOMEvents.UNLOAD,this._unloadHandler);
};
WindowBinding.prototype.onWindowLoaded=function(win){
if(win==null){
this.logger.error("WindowBinding#onWindowLoaded: Bad argument: "+this.getURL());
}else{
if(this.getURL()!=WindowBinding.DEFAULT_URL){
if(!this._hasLoadActionFired){
if(win!=null&&win.document!=null&&win.document.body!=null){
win.document.body.style.border="none";
if(win.WindowManager==undefined){
Application.framework(win.document);
}
if(this._isReloading==true){
this._isReloading=false;
if(Client.isPrism){
Prism.enableCache();
}
}
}
this._registerUnloadListener(true);
this.dispatchAction(WindowBinding.ACTION_ONLOAD);
this._hasLoadActionFired=true;
}
}
}
};
WindowBinding.prototype.setURL=function(url){
this.setProperty("url",url);
this._hasLoadActionFired=false;
if(this.isAttached==true){
this._disposeContentDocument();
this.getFrameElement().src=Resolver.resolve(url);
}
};
WindowBinding.prototype.getURL=function(){
var _7db=WindowBinding.DEFAULT_URL;
var url=this.getProperty("url");
if(url){
_7db=url;
}
return _7db;
};
WindowBinding.prototype.reload=function(_7dd){
this._disposeContentDocument();
if(Client.isPrism){
Prism.disableCache();
}
this._isReloading=true;
this.getContentDocument().location.reload();
};
WindowBinding.prototype.getFrameElement=function(){
var _7de=null;
if(this.shadowTree.iframe!=null){
_7de=this.shadowTree.iframe;
}
return _7de;
};
WindowBinding.prototype.getContentWindow=function(){
var _7df=null,_7e0=this.getFrameElement();
if(_7e0!==null){
try{
_7df=_7e0.contentWindow;
}
catch(e){
this.logger.error("WindowBinding#getContentWindow: strange IE9 error");
}
}
return _7df;
};
WindowBinding.prototype.getContentDocument=function(){
var _7e1=null,win=this.getContentWindow();
if(win){
_7e1=win.document;
}
return _7e1;
};
WindowBinding.prototype.getRootBinding=function(){
var _7e3=null,doc=this.getContentDocument();
if(doc&&doc.body){
_7e3=UserInterface.getBinding(doc.body);
}
return _7e3;
};
WindowBinding.prototype.getPageBinding=function(){
return this._pageBinding;
};
WindowBinding.prototype.setHeight=function(_7e5){
this.bindingElement.style.height=_7e5+"px";
};
WindowBinding.prototype.hide=function(){
if(this.isVisible==true){
this.bindingElement.style.visibility="hidden";
this.isVisible=false;
}
};
WindowBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.visibility="visible";
this.isVisible=true;
}
};
WindowBinding.prototype.handleCrawler=function(_7e6){
WindowBinding.superclass.handleCrawler.call(this,_7e6);
if(_7e6.type==NodeCrawler.TYPE_DESCENDING){
var root=this.getRootBinding();
if(root!=null){
_7e6.nextNode=root.bindingElement;
}else{
_7e6.response=NodeCrawler.SKIP_CHILDREN;
}
}
};
WindowBinding.prototype.post=function(list,url){
var win=this.getContentWindow();
if(win.isPostBackDocument){
win.submit(list,url);
}else{
throw "Post aborted";
}
};
WindowBinding.newInstance=function(_7eb){
var _7ec=DOMUtil.createElementNS(Constants.NS_UI,"ui:window",_7eb);
var _7ed=UserInterface.registerBinding(_7ec,WindowBinding);
return _7ed;
};
PreviewWindowBinding.prototype=new WindowBinding;
PreviewWindowBinding.prototype.constructor=PreviewWindowBinding;
PreviewWindowBinding.superclass=WindowBinding.prototype;
PreviewWindowBinding.URL_FULL_STOP="${root}/content/misc/preview/stop.aspx";
PreviewWindowBinding.URL_ERROR="${root}/content/misc/preview/error.aspx";
PreviewWindowBinding.ACTION_RETURN="return";
PreviewWindowBinding.TIMEOUT_RETURN=parseInt(2300);
function PreviewWindowBinding(){
this.logger=SystemLogger.getLogger("PreviewWindowBinding");
this._postBackList=null;
this._postBackURL=null;
this._coverBinding=null;
this._windowBinding=null;
this._errorBinding=null;
this._hasFullStop=false;
this._isReturning=false;
this._loadhandler=null;
this._timeout=null;
return this;
}
PreviewWindowBinding.prototype.toString=function(){
return "[PreviewWindowBinding]";
};
PreviewWindowBinding.prototype.onBindingAttach=function(){
PreviewWindowBinding.superclass.onBindingAttach.call(this);
this.bindingElement.style.backgroundColor="white";
this._coverBinding=this.add(CoverBinding.newInstance(this.bindingDocument));
this._coverBinding.attach();
};
PreviewWindowBinding.prototype.onWindowLoaded=function(win){
if(this.getURL()!=WindowBinding.DEFAULT_URL){
if(!this._hasFullStop){
if(win.isPostBackDocument){
if(this._isReturning){
win.submit(this._postBackList,this._postBackURL);
this._isReturning=false;
}
}else{
this._coverBinding.hide();
}
if(!win.isDefaultDocument){
var self=this;
this._loadhandler={handleEvent:function(e){
self._coverBinding.show();
if(win.isPostBackDocument){
self._postBackList=win.postBackList;
self._postBackURL=win.postBackURL;
}else{
if(!win.isDefaultDocument){
self._fullStop();
}
}
}};
DOMEvents.addEventListener(win,DOMEvents.BEFOREUNLOAD,this._loadhandler);
}
}
}
PreviewWindowBinding.superclass.onWindowLoaded.call(this,win);
};
PreviewWindowBinding.prototype._fullStop=function(){
this._coverBinding.show();
if(this._windowBinding==null){
this._windowBinding=this._getWindowBinding();
this._windowBinding.setURL(PreviewWindowBinding.URL_FULL_STOP);
this._windowBinding.hide();
this._windowBinding.attach();
this._windowBinding.addActionListener(WindowBinding.ACTION_LOADED,{handleAction:function(_7f1){
_7f1.target.show();
_7f1.consume();
}});
}else{
this._windowBinding.show();
}
this._hasFullStop=true;
this.addActionListener(PreviewWindowBinding.ACTION_RETURN);
this.setURL(WindowBinding.DEFAULT_URL);
var self=this;
this._timeout=setTimeout(function(){
self._return();
},PreviewWindowBinding.TIMEOUT_RETURN);
};
PreviewWindowBinding.prototype.error=function(){
this._coverBinding.show();
if(this._errorBinding==null){
this._errorBinding=this._getWindowBinding();
this._errorBinding.setURL(PreviewWindowBinding.URL_ERROR);
this._errorBinding.hide();
this._errorBinding.attach();
this._errorBinding.addActionListener(WindowBinding.ACTION_LOADED,{handleAction:function(_7f3){
_7f3.target.show();
_7f3.consume();
}});
}else{
this._errorBinding.show();
}
this._hasError=true;
this.setURL(WindowBinding.DEFAULT_URL);
};
PreviewWindowBinding.prototype._getWindowBinding=function(){
var win=this._coverBinding.add(WindowBinding.newInstance(this.bindingDocument));
win.isFlexible=false;
win.bindingElement.style.position="absolute";
win.bindingElement.style.width="100%";
win.bindingElement.style.height="100%";
return win;
};
PreviewWindowBinding.prototype.handleAction=function(_7f5){
PreviewWindowBinding.superclass.handleAction.call(this,_7f5);
switch(_7f5.type){
case PreviewWindowBinding.ACTION_RETURN:
this._return();
break;
}
};
PreviewWindowBinding.prototype._return=function(){
clearTimeout(this._timeout);
this._timeout=null;
this.removeActionListener(PreviewWindowBinding.ACTION_RETURN);
this._windowBinding.hide();
this._hasFullStop=false;
this._isReturning=true;
this.setURL(WindowBinding.POSTBACK_URL);
};
PreviewWindowBinding.prototype.reset=function(){
if(this._timeout!=null){
clearTimeout(this._timeout);
this._timeout=null;
}
if(this._errorBinding!=null){
if(this._errorBinding.isVisible){
this._errorBinding.hide();
}
}
if(this._windowBinding!=null){
if(this._windowBinding.isVisible){
this._windowBinding.hide();
}
}
if(this._loadhandler!=null){
if(this.getURL()!=WindowBinding.DEFAULT_URL){
DOMEvents.removeEventListener(this.getContentWindow(),DOMEvents.BEFOREUNLOAD,this._loadhandler);
this._loadhandler=null;
}
}
this._hasError=false;
this._hasFullStop=false;
this._isReturning=false;
this._coverBinding.show();
this.setURL(WindowBinding.DEFAULT_URL);
};
RadioGroupBinding.prototype=new Binding;
RadioGroupBinding.prototype.constructor=RadioGroupBinding;
RadioGroupBinding.superclass=Binding.prototype;
RadioGroupBinding.ACTION_SELECTIONCHANGED="radiogroupselectionchanged";
function RadioGroupBinding(){
this.logger=SystemLogger.getLogger("RadioGroupBinding");
this._checkedRadioBinding=null;
this._radioButtonBindings=null;
this._isUpToDate=false;
return this;
}
RadioGroupBinding.prototype.toString=function(){
return "[RadioGroupBinding]";
};
RadioGroupBinding.prototype.onBindingRegister=function(){
RadioGroupBinding.superclass.onBindingRegister.call(this);
this.addActionListener(ButtonBinding.ACTION_RADIOBUTTON_ATTACHED,this);
this.addActionListener(ButtonBinding.ACTION_COMMAND,this);
};
RadioGroupBinding.prototype.onBindingInitialize=function(){
var _7f6=null;
this._getRadioButtonBindings().each(function(_7f7){
if(_7f7.getProperty("ischecked")){
_7f6=_7f7;
return false;
}else{
return true;
}
});
if(_7f6){
this._checkedRadioBinding=_7f6;
}
RadioGroupBinding.superclass.onBindingInitialize.call(this);
};
RadioGroupBinding.prototype.handleAction=function(_7f8){
RadioGroupBinding.superclass.handleAction.call(this,_7f8);
var _7f9=_7f8.target;
switch(_7f8.type){
case ButtonBinding.ACTION_RADIOBUTTON_ATTACHED:
this._isUpToDate=false;
_7f8.consume();
break;
case ButtonBinding.ACTION_COMMAND:
if(_7f9.isRadioButton&&!_7f9.isDisabled){
if(this._checkedRadioBinding){
this._unCheckRadioBindingsExcept(_7f9);
}
this._checkedRadioBinding=_7f9;
this.dispatchAction(RadioGroupBinding.ACTION_SELECTIONCHANGED);
_7f8.consume();
}
break;
}
};
RadioGroupBinding.prototype.setCheckedButtonBinding=function(_7fa,_7fb){
if(_7fa instanceof RadioDataBinding){
_7fa=_7fa.getButton();
}
if(_7fa.isRadioButton){
switch(_7fb){
case true:
this._unCheckRadioBindingsExcept(_7fa);
this._checkedRadioBinding=_7fa;
_7fa.check(true);
break;
default:
_7fa.check();
break;
}
}
};
RadioGroupBinding.prototype.getCheckedButtonBinding=function(){
return this._checkedRadioBinding;
};
RadioGroupBinding.prototype._unCheckRadioBindingsExcept=function(_7fc){
var _7fd=this._getRadioButtonBindings();
_7fd.each(function(_7fe){
if(_7fe.isChecked&&_7fe!=_7fc){
_7fe.uncheck(true);
}
});
};
RadioGroupBinding.prototype._getRadioButtonBindings=function(){
if(this._radioButtonBindings===null||!this._isUpToDate){
var _7ff=new Crawler();
var list=new List();
_7ff.addFilter(function(_801){
var _802=true;
var _803=UserInterface.getBinding(_801);
if(_803 instanceof RadioGroupBinding){
_802=NodeCrawler.SKIP_CHILDREN;
}else{
if(_803 instanceof ButtonBinding&&_803.isRadioButton){
list.add(_803);
}
}
return _802;
});
_7ff.crawl(this.bindingElement);
this._radioButtonBindings=list;
}
return this._radioButtonBindings;
};
RadioGroupBinding.newInstance=function(_804){
var _805=DOMUtil.createElementNS(Constants.NS_UI,"ui:radiogroup",_804);
return UserInterface.registerBinding(_805,RadioGroupBinding);
};
DataBindingMap.prototype=new Map;
DataBindingMap.prototype.constructor=DataBindingMap;
DataBindingMap.superclass=Map.prototype;
DataBindingMap.TYPE_VALUE="databindingmap valuetype";
DataBindingMap.TYPE_RESULT="databindingmap resulttype";
function DataBindingMap(map){
this._map=map?map:{};
this.type=DataBindingMap.TYPE_RESULT;
}
DataInputBinding.prototype=new DataBinding;
DataInputBinding.prototype.constructor=DataInputBinding;
DataInputBinding.superclass=DataBinding.prototype;
function DataInputBinding(){
this.logger=SystemLogger.getLogger("DataInputBinding");
this.type=null;
this.isRequired=false;
this.expression=null;
this.isPassword=false;
this._value=null;
this._isValid=true;
this._isInvalidBecauseRequired=false;
this._isInvalidBecauseMinLength==true;
this._isInvalidBecauseMinLength==true;
this._isInvalidBecauseMaxLength==true;
this._sessionResult=null;
this.isDisabled=false;
this.isReadOnly=false;
this._dirtyinterval=null;
this._isAutoSelect=false;
this.minlength=null;
this.maxlength=null;
this._isAutoPost=false;
this._timeout=null;
this._time=1500;
this.crawlerFilters=new List([DocumentCrawler.ID,FocusCrawler.ID]);
this.spellcheck=true;
return this;
}
DataInputBinding.prototype.toString=function(){
return "[DataInputBinding]";
};
DataInputBinding.prototype.onBindingRegister=function(){
DataInputBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["value"]=this.setValue;
};
DataInputBinding.prototype.onBindingAttach=function(){
DataInputBinding.superclass.onBindingAttach.call(this);
this._parseDOMProperties();
this._buildDOMContent();
this._attachDOMEvents();
};
DataInputBinding.prototype.onBindingDispose=function(){
DataInputBinding.superclass.onBindingDispose.call(this);
if(Client.isExplorer&&this.isFocused){
this.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,this);
}
if(this._dirtyinterval){
window.clearInterval(this._dirtyinterval);
}
if(!this._isValid){
this.dispatchAction(Binding.ACTION_VALID);
}
};
DataInputBinding.prototype._parseDOMProperties=function(){
this.type=this.getProperty("type");
this.isRequired=this.getProperty("required");
this.isPassword=this.getProperty("password")==true;
this.minlength=this.getProperty("minlength");
this.maxlength=this.getProperty("maxlength");
this._isAutoPost=this.getProperty("autopost")==true;
this.spellcheck=this.getProperty("spellcheck")!==false;
if(this.type=="programmingidentifier"){
this.spellcheck=false;
}
if(this.type=="programmingnamespace"){
this.spellcheck=false;
}
var _807=this.getProperty("regexrule");
if(_807!=null){
this.expression=new RegExp(_807);
}
var _808=this.getProperty("onbindingblur");
if(_808!=null){
this.onblur=function(){
Binding.evaluate(_808,this);
};
}
var _809=this.getProperty("onvaluechange");
if(_809!=null){
this.onValueChange=function(){
Binding.evaluate(_809,this);
};
}
if(this.error==null&&this.type!=null){
var _80a=DataBinding.errors[this.type];
if(_80a!=null){
this.error=_80a;
}
}
};
DataInputBinding.prototype._buildDOMContent=function(){
this.shadowTree.input=this._getInputElement();
this.shadowTree.box=DOMUtil.createElementNS(Constants.NS_UI,"ui:box",this.bindingDocument);
if(Client.isExplorer==true){
this.bindingElement.hideFocus=true;
}
var _80b=this.getProperty("value");
if(_80b!=null){
this.setValue(String(_80b));
}
var name=this.getProperty("name");
if(name!=null){
this.setName(name);
}
var _80d=this.getProperty("isdisabled");
if(_80d==true){
this.setDisabled(true);
}
var _80e=this.getProperty("readonly");
if(_80e==true){
this.setReadOnly(true);
}
var _80f=this.getProperty("autoselect");
if(_80f==true){
this._isAutoSelect=true;
}
this.shadowTree.box.appendChild(this.shadowTree.input);
this.bindingElement.appendChild(this.shadowTree.box);
if(this.spellcheck&&Client.isFirefox){
var _810=Localization.currentLang();
if(_810!=null){
this.shadowTree.input.setAttribute("spellcheck","true");
this.shadowTree.input.setAttribute("lang",Localization.currentLang());
}else{
this.shadowTree.input.setAttribute("spellcheck","false");
}
}else{
this.shadowTree.input.setAttribute("spellcheck","false");
}
if(this.hasCallBackID()){
}else{
if(this._isAutoPost){
this.logger.warn("Autopost "+this.toString()+" without a callbackid?");
}
}
};
DataInputBinding.prototype._getInputElement=function(){
var _811=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_811.type=this.isPassword==true?"password":"text";
_811.tabIndex=-1;
return _811;
};
DataInputBinding.prototype._attachDOMEvents=function(){
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.FOCUS,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.BLUR,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.KEYDOWN,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.KEYPRESS,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.DRAGOVER,this);
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.DROP,this);
};
DataInputBinding.prototype.handleEvent=function(e){
DataInputBinding.superclass.handleEvent.call(this,e);
if(this.isFocusable==true){
switch(e.type){
case DOMEvents.DRAGOVER:
DOMEvents.preventDefault(e);
break;
case DOMEvents.DROP:
if(e.dataTransfer){
this.setValue(e.dataTransfer.getData("Text"));
this.checkDirty();
this.validate(true);
}
DOMEvents.preventDefault(e);
break;
case DOMEvents.FOCUS:
case DOMEvents.BLUR:
this._handleFocusAndBlur(e.type==DOMEvents.FOCUS);
break;
case DOMEvents.KEYPRESS:
switch(e.keyCode){
case KeyEventCodes.VK_BACK:
case KeyEventCodes.VK_INSERT:
case KeyEventCodes.VK_DELETE:
this._testDirty();
break;
}
break;
case DOMEvents.KEYDOWN:
this._testDirty();
switch(e.keyCode){
case KeyEventCodes.VK_ENTER:
this._handleEnterKey(e);
break;
case KeyEventCodes.VK_ESCAPE:
DOMEvents.preventDefault(e);
break;
}
if(this.isFocusable&&this._isAutoPost){
if(this._timeout!=null){
top.window.clearTimeout(this._timeout);
}
var self=this;
this._timeout=top.window.setTimeout(function(){
if(Binding.exists(self)){
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
}
},this._time);
}
break;
}
}
};
DataInputBinding.prototype._handleFocusAndBlur=function(_814){
if(_814){
this.focus(true);
this.bindingWindow.standardEventHandler.enableNativeKeys();
if(Client.isExplorer==true){
var self=this;
setTimeout(function(){
if(Binding.exists(self)==true){
self.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEDOWN);
}
},0);
}
}else{
this.blur(true);
this.bindingWindow.standardEventHandler.disableNativeKeys();
if(Client.isExplorer==true){
this.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEDOWN);
}
}
};
DataInputBinding.prototype._handleEnterKey=function(e){
DOMEvents.preventDefault(e);
DOMEvents.stopPropagation(e);
EventBroadcaster.broadcast(BroadcastMessages.KEY_ENTER);
};
DataInputBinding.prototype.handleBroadcast=function(_817,arg){
DataInputBinding.superclass.handleBroadcast.call(this,_817,arg);
var self=this;
switch(_817){
case BroadcastMessages.MOUSEEVENT_MOUSEDOWN:
if(Client.isExplorer==true){
var _81a=DOMEvents.getTarget(arg);
if(_81a!=this.shadowTree.input){
setTimeout(function(){
if(Binding.exists(self)==true){
if(self.isFocused==true){
self.blur();
}
}
},100);
}
}
break;
}
};
DataInputBinding.prototype.focus=function(_81b){
if(!this.isFocused&&!this.isReadOnly&&!this.isDisabled){
DataInputBinding.superclass.focus.call(this);
if(this.isFocused==true){
this._focus();
if(this._isAutoSelect==true){
if(_81b){
var self=this,_81d=this.bindingElement,_81e={handleEvent:function(){
self.select();
DOMEvents.removeEventListener(_81d,DOMEvents.MOUSEUP,this);
}};
DOMEvents.addEventListener(_81d,DOMEvents.MOUSEUP,_81e);
}else{
this.select();
}
}
this.onfocus();
if(!_81b){
var _81f=this.shadowTree.input;
setTimeout(function(){
FocusBinding.focusElement(_81f);
},0);
}
}
}
};
DataInputBinding.prototype.select=function(){
var _820=this.shadowTree.input;
setTimeout(function(){
if(Client.isExplorer==true){
var _821=_820.createTextRange();
_821.moveStart("character",0);
_821.moveEnd("character",_820.value.length);
_821.select();
}else{
_820.setSelectionRange(0,_820.value.length);
}
},0);
};
DataInputBinding.prototype.blur=function(_822){
if(this.isFocused==true){
DataInputBinding.superclass.blur.call(this);
if(!_822){
this.shadowTree.input.blur();
}
this._blur();
}
};
DataInputBinding.prototype._focus=function(){
if(!this._isValid){
if(this.isPassword){
if(Client.isMozilla){
this.shadowTree.input.type="password";
this.setValue(this._value);
}
}else{
this.setValue(this._value);
}
this.shadowTree.input.className="";
}
this._sessionResult=this.getResult();
var self=this;
this._dirtyinterval=window.setInterval(function(){
if(Binding.exists(self)==true){
self.checkDirty();
if(!self._isValid){
self.validate(true);
}
}else{
window.clearInterval(self._dirtyinterval);
self._dirtyinterval=null;
}
},500);
};
DataInputBinding.prototype._blur=function(){
if(this._dirtyinterval){
window.clearInterval(this._dirtyinterval);
this._dirtyinterval=null;
}
this.checkDirty();
this._isValid=true;
this._normalizeToValid();
this.validate(true);
if(Types.isFunction(this.onblur)){
this.onblur();
}
if(this._isValid){
if(this.getResult()!=this._sessionResult){
this.onValueChange();
}
}
};
DataInputBinding.prototype.onfocus=function(){
};
DataInputBinding.prototype.onblur=function(){
};
DataInputBinding.prototype.checkDirty=function(){
if(!this.isDirty){
if(this.getResult()!=this._sessionResult){
this.dirty();
}
}
};
DataInputBinding.prototype._testDirty=function(){
var val=this.getValue();
var self=this;
setTimeout(function(){
if(Binding.exists(self)){
if(self.getValue()!=val){
self.dirty();
}
}
},0);
};
DataInputBinding.prototype.onValueChange=function(){
};
DataInputBinding.prototype.validate=function(_826){
if(_826==true||this._isValid){
var _827=this.isValid();
if(_827!=this._isValid){
this._isValid=_827;
if(!_827){
this.attachClassName(DataBinding.CLASSNAME_INVALID);
this._value=this.getValue();
this.dispatchAction(Binding.ACTION_INVALID);
if(!this.isFocused){
var _828=null;
if(this._isInvalidBecauseRequired==true){
_828=DataBinding.warnings["required"];
}else{
if(this._isInvalidBecauseMinLength==true){
_828=DataBinding.warnings["minlength"];
_828=_828.replace("${count}",String(this.minlength));
}else{
if(this._isInvalidBecauseMaxLength==true){
_828=DataBinding.warnings["maxlength"];
_828=_828.replace("${count}",String(this.maxlength));
}else{
_828=DataBinding.warnings[this.type];
}
}
}
this.shadowTree.input.className=DataBinding.CLASSNAME_WARNING;
if(_828!=null){
if(this.isPassword){
if(Client.isMozilla){
this.shadowTree.input.type="text";
this.setValue(_828);
}
}else{
this.setValue(_828);
}
}
}
}else{
this._normalizeToValid();
}
}
}
return this._isValid;
};
DataInputBinding.prototype._normalizeToValid=function(){
if(this._isValid){
if(this._timeout!=null){
top.window.clearTimeout(this._timeout);
}
if(this.hasClassName(DataBinding.CLASSNAME_INVALID)){
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}
this.shadowTree.input.className="";
this.dispatchAction(Binding.ACTION_VALID);
}
};
DataInputBinding.prototype.isValid=function(){
var _829=true;
this._isInvalidBecauseRequired=false;
this._isInvalidBecauseMinLength=false;
this._isInvalidaBecuaseMaxLength=false;
var _82a=this.getValue();
if(_82a==""){
if(this.isRequired==true){
_829=false;
this._isInvalidBecauseRequired=true;
}
}else{
if(this.type!=null){
var _82b=DataBinding.expressions[this.type];
if(!_82b.test(_82a)){
_829=false;
}
}else{
if(this.expression!=null){
if(!this.expression.test(_82a)){
_829=false;
}
}
}
}
if(_829&&this.minlength!=null){
if(_82a.length<this.minlength){
this._isInvalidBecauseMinLength=true;
_829=false;
}
}
if(_829&&this.maxlength!=null){
if(_82a.length>this.maxlength){
this._isInvalidBecauseMaxLength=true;
_829=false;
}
}
return _829;
};
DataInputBinding.prototype.setDisabled=function(_82c){
if(_82c!=this.isDisabled){
if(_82c){
this.attachClassName("isdisabled");
}else{
this.detachClassName("isdisabled");
}
var _82d=this.shadowTree.input;
if(_82c){
this._disabledHandler={handleEvent:function(e){
DOMEvents.preventDefault(e);
DOMEvents.stopPropagation(e);
}};
DOMEvents.addEventListener(_82d,DOMEvents.MOUSEDOWN,this._disabledHandler);
}else{
DOMEvents.removeEventListener(_82d,DOMEvents.MOUSEDOWN,this._disabledHandler);
this._disabledHandler=null;
}
if(Client.isExplorer){
this.shadowTree.input.disabled=_82c;
this.shadowTree.input.unselectable=_82c?"on":"off";
}
this.isDisabled=_82c;
this.isFocusable=!_82c;
this.dispatchAction(FocusBinding.ACTION_UPDATE);
}
};
DataInputBinding.prototype.setReadOnly=function(_82f){
if(_82f!=this.isReadOnly){
if(_82f){
this.attachClassName("readonly");
}else{
this.detachClassName("readonly");
}
this.shadowTree.input.readOnly=_82f;
this.isReadOnly=_82f;
}
};
DataInputBinding.prototype.disable=function(){
if(!this.isDisabled){
this.setDisabled(true);
}
};
DataInputBinding.prototype.enable=function(){
if(this.isDisabled){
this.setDisabled(false);
}
};
DataInputBinding.prototype.handleElement=function(_830){
return true;
};
DataInputBinding.prototype.updateElement=function(_831){
var _832=_831.getAttribute("value");
var _833=_831.getAttribute("type");
var _834=_831.getAttribute("maxlength");
var _835=_831.getAttribute("minlength");
if(_832==null){
_832="";
}
var _836=this.bindingWindow.UpdateManager;
if(this.getValue()!=_832){
_836.report("Property [value] updated on binding \""+this.getID()+"\"");
this.setValue(_832);
}
if(this.type!=_833){
_836.report("Property [type] updated on binding \""+this.getID()+"\"");
this.type=_833;
}
if(this.maxlength!=_834){
_836.report("Property [maxlength] updated on binding \""+this.getID()+"\"");
this.maxlength=_834;
}
if(this.minlength!=_835){
_836.report("Property [minlength] updated on binding \""+this.getID()+"\"");
this.minlength=_835;
}
return true;
};
DataInputBinding.prototype.manifest=function(){
if(!this._isValid){
this.setValue("");
this._isValid=true;
this._normalizeToValid();
}
};
DataInputBinding.prototype.clean=function(){
DataInputBinding.superclass.clean.call(this);
this._sessionResult=this.getResult();
};
DataInputBinding.prototype.setValue=function(_837){
if(_837===null){
_837="";
}
if(_837!=this.getValue()){
this.setProperty("value",_837);
if(this.shadowTree.input!=null){
this.shadowTree.input.value=String(_837);
}
}
};
DataInputBinding.prototype.getValue=function(){
var _838=null;
if(this.shadowTree.input!=null){
_838=this.shadowTree.input.value;
}else{
_838=this.getProperty("value");
}
return _838;
};
DataInputBinding.prototype.setName=function(name){
DataInputBinding.superclass.setName.call(this,name);
if(this.isAttached==true){
this.shadowTree.input.name=name;
}
};
DataInputBinding.prototype.getResult=function(){
var _83a=this.getValue();
switch(this.type){
case DataBinding.TYPE_NUMBER:
case DataBinding.TYPE_INTEGER:
_83a=Number(_83a);
break;
}
return _83a;
};
DataInputBinding.prototype.setResult=DataInputBinding.prototype.setValue;
DataInputBinding.newInstance=function(_83b){
var _83c=DOMUtil.createElementNS(Constants.NS_UI,"ui:datainput",_83b);
return UserInterface.registerBinding(_83c,DataInputBinding);
};
TextBoxBinding.prototype=new DataInputBinding;
TextBoxBinding.prototype.constructor=TextBoxBinding;
TextBoxBinding.superclass=DataInputBinding.prototype;
function TextBoxBinding(){
this.logger=SystemLogger.getLogger("TextBoxBinding");
this._hasWordWrap=true;
return this;
}
TextBoxBinding.prototype.toString=function(){
return "[TextBoxBinding]";
};
TextBoxBinding.prototype._buildDOMContent=function(){
var _83d=DOMUtil.getElementsByTagName(this.bindingElement,"textarea").item(0);
if(_83d!=null){
this.setValue(_83d.value);
_83d.parentNode.removeChild(_83d);
}
TextBoxBinding.superclass._buildDOMContent.call(this);
if(!this._hasWordWrap){
this.shadowTree.input.setAttribute("wrap","off");
}
};
TextBoxBinding.prototype._getInputElement=function(){
var _83e=DOMUtil.createElementNS(Constants.NS_XHTML,"textarea",this.bindingDocument);
_83e.tabIndex=-1;
return _83e;
};
TextBoxBinding.prototype.handleElement=function(_83f){
return true;
};
TextBoxBinding.prototype.updateElement=function(_840){
var _841,area=_840.getElementsByTagName("textarea").item(0);
if(area!=null&&area.hasChildNodes()){
_841=DOMUtil.getTextContent(area);
}
if(_841==null){
_841="";
}
var _843=this.bindingWindow.UpdateManager;
if(this.getValue()!=_841){
_843.report("Property [value] updated on binding \""+this.getID()+"\"");
this.setValue(_841);
}
var _844=_840.getAttribute("type");
if(this.type!=_844){
_843.report("Property [type] updated on binding \""+this.getID()+"\"");
this.type=_844;
}
return true;
};
TextBoxBinding.prototype._handleEnterKey=function(e){
DOMEvents.stopPropagation(e);
};
EditorTextBoxBinding.prototype=new TextBoxBinding;
EditorTextBoxBinding.prototype.constructor=EditorTextBoxBinding;
EditorTextBoxBinding.superclass=TextBoxBinding.prototype;
function EditorTextBoxBinding(){
this.logger=SystemLogger.getLogger("EditorTextBoxBinding");
this._hasWordWrap=false;
}
EditorTextBoxBinding.prototype.toString=function(){
return "[EditorTextBoxBinding]";
};
EditorTextBoxBinding.prototype.handleEvent=function(e){
if(this.isFocusable==true){
switch(e.type){
case DOMEvents.FOCUS:
case DOMEvents.BLUR:
this._handleFocusAndBlur(e.type==DOMEvents.FOCUS);
break;
case DOMEvents.KEYDOWN:
this._handleKeyEvent(e);
break;
}
}
};
EditorTextBoxBinding.prototype._handleKeyEvent=function(e){
switch(e.keyCode){
case KeyEventCodes.VK_TAB:
this._handleTabKey(e.shiftKey);
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
break;
case KeyEventCodes.VK_ENTER:
this._handleEnterKey();
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
break;
case KeyEventCodes.VK_ESCAPE:
DOMEvents.preventDefault(e);
break;
}
};
EditorTextBoxBinding.prototype._handleTabKey=Binding.ABSTRACT_METHOD;
EditorTextBoxBinding.prototype._handleEnterKey=Binding.ABSTRACT_METHOD;
IEEditorTextBoxBinding.prototype=new EditorTextBoxBinding;
IEEditorTextBoxBinding.prototype.constructor=IEEditorTextBoxBinding;
IEEditorTextBoxBinding.superclass=EditorTextBoxBinding.prototype;
function IEEditorTextBoxBinding(){
this.logger=SystemLogger.getLogger("IEEditorTextBoxBinding");
}
IEEditorTextBoxBinding.prototype.toString=function(){
return "[IEEditorTextBoxBinding]";
};
IEEditorTextBoxBinding.prototype._handleTabKey=function(_848){
var _849=this.bindingDocument.selection.createRange();
var _84a=_849.text=="";
if(_84a&&!_848){
_849.text="\t";
}else{
var text="";
var _84c=_849.text.length;
while((_849.moveStart("word",-1)&&_849.text.charAt(1)!="\n")){
}
_849.moveStart("character",1);
var _84d=0;
var i=0,line,_850=_849.text.split("\n");
while((line=_850[i++])!=null){
if(_848){
line=line.replace(/^(\s)/mg,"");
_84d++;
}else{
line=line.replace(/^(.)/mg,"\t$1");
}
text+=line+(_850[i+1]?"\n":"");
}
_849.text=text;
_849.moveStart("character",-_84c);
if(_848){
_849.moveStart("character",2*_850.length-2);
}
_849.select();
}
};
IEEditorTextBoxBinding.prototype._handleEnterKey=function(){
var _851=this.bindingDocument.selection.createRange();
var _852=_851.duplicate();
while((_852.moveStart("word",-1)&&_852.text.indexOf("\n")==-1)){
}
_852.moveStart("character",1);
_851.text="\n"+_852.text.match(/^(\s)*/)[0]+"!";
_851.moveStart("character",-1);
_851.select();
_851.text="";
_851.select();
};
MozEditorTextBoxBinding.prototype=new EditorTextBoxBinding;
MozEditorTextBoxBinding.prototype.constructor=MozEditorTextBoxBinding;
MozEditorTextBoxBinding.superclass=EditorTextBoxBinding.prototype;
function MozEditorTextBoxBinding(){
this.logger=SystemLogger.getLogger("MozEditorTextBoxBinding");
return this;
}
MozEditorTextBoxBinding.prototype.toString=function(){
return "[MozEditorTextBoxBinding]";
};
MozEditorTextBoxBinding.prototype._handleTabKey=function(_853){
var _854;
var _855;
var oss;
var osy;
var i;
var fnd;
var _85a=this._getSelectedText();
var el=this.shadowTree.input;
_854=el.scrollLeft;
_855=el.scrollTop;
if(!_85a.match(/\n/)){
oss=el.selectionStart;
el.value=el.value.substr(0,el.selectionStart)+"\t"+el.value.substr(el.selectionEnd);
el.selectionStart=oss+1;
el.selectionEnd=oss+1;
}else{
oss=el.selectionStart;
osy=el.selectionEnd;
fnd=0;
for(i=oss-1;i>=0;i--){
if(el.value.charAt(i)=="\n"){
oss=i+1;
fnd=1;
break;
}
}
if(fnd==0){
oss=0;
}
fnd=0;
for(i=osy;i<el.value.length;i++){
if(el.value.charAt(i)=="\n"){
osy=i;
fnd=1;
break;
}
}
if(fnd==0){
osy=el.value.length;
}
el.selectionStart=oss;
el.selectionEnd=osy;
_85a=this._getSelectedText();
if(_853){
ntext=_85a.replace(/^(\s)/mg,"");
}else{
ntext=_85a.replace(/^(.)/mg,"\t$1");
}
el.value=el.value.substr(0,el.selectionStart)+ntext+el.value.substr(el.selectionEnd);
el.selectionStart=oss;
el.selectionEnd=osy+(ntext.length-_85a.length);
}
el.scrollLeft=_854;
el.scrollTop=_855;
};
MozEditorTextBoxBinding.prototype._handleEnterKey=function(){
var _85c;
var _85d;
var oss;
var osy;
var el=this.shadowTree.input;
_85c=el.scrollLeft;
_85d=el.scrollTop;
oss=el.selectionStart;
osy=el.selectionEnd;
var bfs=el.value.substr(0,el.selectionStart);
var bfsm=bfs.split(/\r|\n/g);
var spm=bfsm[bfsm.length-1].match(/^(\s)*/);
el.value=el.value.substr(0,el.selectionStart)+"\n"+spm[0]+el.value.substr(el.selectionEnd);
el.selectionStart=oss+1+spm[0].length;
el.selectionEnd=oss+1+spm[0].length;
el.scrollLeft=_85c;
el.scrollTop=_85d;
};
MozEditorTextBoxBinding.prototype._getSelectedText=function(){
var _864=this.shadowTree.input.value;
var _865=this.shadowTree.input.selectionStart;
var end=this.shadowTree.input.selectionEnd;
return _864.substr(_865,end-_865);
};
SelectorBinding.prototype=new DataBinding;
SelectorBinding.prototype.constructor=SelectorBinding;
SelectorBinding.superclass=DataBinding.prototype;
SelectorBinding.INDICATOR_IMAGE=Resolver.resolve("${skin}/fields/selectorindicator.png");
SelectorBinding.ACTION_SELECTIONCHANGED="selectorselectionchanged";
SelectorBinding.ACTION_COMMAND="selectorcommand";
SelectorBinding.CLASSNAME_POPUP="selectorpopup";
function SelectorBinding(){
this.logger=SystemLogger.getLogger("SelectorBinding");
this.type=null;
this._buttonBinding=null;
this._popupBinding=null;
this._menuBodyBinding=null;
this._selectionValue=null;
this._selectionLabel=null;
this._searchString="";
this.isSearchSelectionEnabled=false;
this.selections=null;
this.isDisabled=false;
this.label=null;
this.value=null;
this.width=null;
this.defaultSelection=null;
this.image=null;
this.imageHover=null;
this.imageActive=null;
this.imageDisabled=null;
this.isDirty=false;
this._isUpToDate=false;
this._hasKeyboard=false;
this.BUTTON_IMPLEMENTATION=ClickButtonBinding;
this.MENUITEM_IMPLEMENTATION=MenuItemBinding;
this._isImageLayout=true;
this.isRequired=false;
this._isValid=true;
this.crawlerFilters=new List([DocumentCrawler.ID,FocusCrawler.ID]);
}
SelectorBinding.prototype.toString=function(){
return "[SelectorBinding]";
};
SelectorBinding.prototype.onBindingAttach=function(){
SelectorBinding.superclass.onBindingAttach.call(this);
this.selections=new List();
this.parseDOMProperties();
this.buildDOMContent();
this.addEventListener(DOMEvents.FOCUS);
this.addEventListener(DOMEvents.KEYPRESS);
this.addEventListener(DOMEvents.KEYDOWN);
this.addActionListener(ButtonBinding.ACTION_COMMAND);
var _867=this.getProperty("isdisabled");
if(this.isDisabled||_867){
this.disable();
}
};
SelectorBinding.prototype.onBindingDispose=function(){
SelectorBinding.superclass.onBindingDispose.call(this);
if(this._popupBinding&&Binding.exists(this._popupBinding)){
this._popupBinding.dispose();
}
if(this._hasKeyboard==true){
this._releaseKeyboard();
}
};
SelectorBinding.prototype.parseDOMProperties=function(){
var type=this.getProperty("type");
var _869=this.getProperty("label");
var _86a=this.getProperty("value");
var _86b=this.getProperty("width");
var _86c=this.getProperty("onchange");
var _86d=this.getProperty("required")==true;
if(!this.type&&type){
this.type=type;
}
if(!this.label&&_869!=null){
this.label=_869;
}
if(!this.value&&_86a!=null){
this.value=_86a;
}
if(!this.width&&_86b){
this.width=_86b;
}
if(_86d){
this.isRequired=true;
}
if(_86c){
this.onValueChange=function(){
Binding.evaluate(_86c,this);
};
}
this._computeImageProfile();
};
SelectorBinding.prototype._computeImageProfile=function(){
Binding.imageProfile(this);
};
SelectorBinding.prototype.buildDOMContent=function(){
this.buildButton();
this.buildIndicator();
this.buildPopup();
this.buildSelections();
this.bindingElement.tabIndex=0;
if(Client.isExplorer==true){
this.bindingElement.hideFocus=true;
}
};
SelectorBinding.prototype.buildFormField=function(){
var _86e=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_86e.name=this.getName();
_86e.value=this.getValue();
_86e.type="hidden";
if(this.hasCallBackID()){
_86e.id=this.getCallBackID();
}
this.shadowTree.input=_86e;
this.bindingElement.appendChild(_86e);
};
SelectorBinding.prototype.buildButton=function(){
var _86f=this.BUTTON_IMPLEMENTATION;
var _870=this.add(_86f.newInstance(this.bindingDocument));
if(this.imageProfile!=null){
_870.imageProfile=this.imageProfile;
}
if(this.width!=null){
_870.setWidth(this.width);
}
this._buttonBinding=_870;
this.shadowTree.button=_870;
_870.attach();
};
SelectorBinding.prototype.buildIndicator=function(){
var img=this.bindingDocument.createElement("img");
img.src=SelectorBinding.INDICATOR_IMAGE;
img.className="selectorindicatorimage";
this._buttonBinding.bindingElement.appendChild(img);
this.shadowTree.selectorindicatorimage=img;
};
SelectorBinding.prototype.buildPopup=function(){
var _872=top.app.bindingMap.selectorpopupset;
var doc=_872.bindingDocument;
var _874=_872.add(PopupBinding.newInstance(doc));
var _875=_874.add(MenuBodyBinding.newInstance(doc));
this._popupBinding=_874;
this._menuBodyBinding=_875;
this._popupBinding.attachClassName(SelectorBinding.CLASSNAME_POPUP);
this._popupBinding.attachRecursive();
this._popupBinding.type=PopupBinding.TYPE_FIXED;
_874.attachClassName("selectorpopup");
_874.addActionListener(PopupBinding.ACTION_SHOW,this);
_874.addActionListener(MenuItemBinding.ACTION_COMMAND,this);
_874.addActionListener(PopupBinding.ACTION_HIDE,this);
this._buttonBinding.setPopup(_874);
};
SelectorBinding.prototype.buildSelections=function(){
if(this.defaultSelection==null&&(this.label||this.value)){
this.defaultSelection=new SelectorBindingSelection(this.label,this.value,true,null);
}
var list=this._getSelectionsList();
this.populateFromList(list);
};
SelectorBinding.prototype._getSelectionsList=function(){
var list=new List();
var _878=DOMUtil.getElementsByTagName(this.bindingElement,"selection");
new List(_878).each(function(_879){
var _87a=_879.getAttribute("label");
var _87b=_879.getAttribute("value");
var _87c=_879.getAttribute("selected");
var _87d=_879.getAttribute("image");
var _87e=_879.getAttribute("image-hover");
var _87f=_879.getAttribute("image-active");
var _880=_879.getAttribute("image-disabled");
var _881=null;
if(_87d||_87e||_87f||_880){
_881=new ImageProfile({image:_87d,imageHover:_87e,imageActive:_87f,imageDisabled:_880});
}
list.add(new SelectorBindingSelection(_87a?_87a:null,_87b?_87b:null,_87c&&_87c=="true",_881));
});
return list;
};
SelectorBinding.prototype.populateFromList=function(list){
if(this.isAttached){
this.clear();
if(list.hasEntries()){
var _883=null;
while(list.hasNext()){
var _884=list.getNext();
var item=this.addSelection(_884);
if(_884.isSelected){
this.select(item,true);
}
if(!_883){
_883=item;
}
}
if(!this._selectedItemBinding){
this.select(_883,true);
}
this.shadowTree.selectorindicatorimage.style.display="block";
}else{
this.shadowTree.selectorindicatorimage.style.display="none";
}
}else{
throw "Could not populate unattached selector";
}
};
SelectorBinding.prototype.addSelection=function(_886,_887){
var _888=this.MENUITEM_IMPLEMENTATION;
var _889=this._menuBodyBinding;
var _88a=_889.bindingDocument;
var _88b=_888.newInstance(_88a);
_88b.imageProfile=_886.imageProfile;
_88b.setLabel(_886.label);
if(_886.tooltip!=null){
_88b.setToolTip(_886.tooltip);
}
_88b.selectionValue=_886.value;
_886.menuItemBinding=_88b;
if(_887){
_889.addFirst(_88b);
this.selections.addFirst(_886);
}else{
_889.add(_88b);
this.selections.add(_886);
}
this._isUpToDate=false;
return _88b;
};
SelectorBinding.prototype.addSelectionFirst=function(_88c){
return this.addSelection(_88c,true);
};
SelectorBinding.prototype.clear=function(_88d){
this._selectedItemBinding=null;
if(this._popupBinding){
this._popupBinding.clear();
this.selections.clear();
if(!_88d&&this.defaultSelection!=null){
var _88e=this.addSelection(this.defaultSelection);
this.select(_88e,true);
}
}
};
SelectorBinding.prototype.clearAll=function(){
this.clear(true);
};
SelectorBinding.prototype.disable=function(){
this.setDisabled(true);
};
SelectorBinding.prototype.enable=function(){
this.setDisabled(false);
};
SelectorBinding.prototype.focus=function(){
if(!this.isFocused){
DataBinding.prototype.focus.call(this);
if(this.isFocused==true){
FocusBinding.focusElement(this.bindingElement);
this._grabKeyboard();
}
}
};
SelectorBinding.prototype.blur=function(){
if(this.isFocused==true){
DataBinding.prototype.blur.call(this);
this._releaseKeyboard();
if(this._popupBinding.isVisible){
this._popupBinding.hide();
}
}
};
SelectorBinding.prototype._grabKeyboard=function(){
if(!this._hasKeyboard){
this.subscribe(BroadcastMessages.KEY_ARROW);
this._hasKeyboard=true;
}
};
SelectorBinding.prototype._releaseKeyboard=function(){
if(this._hasKeyboard==true){
this.unsubscribe(BroadcastMessages.KEY_ARROW);
this._hasKeyboard=false;
}
};
SelectorBinding.prototype.setDisabled=function(_88f){
if(this.isAttached==true){
var _890=this._buttonBinding;
this.shadowTree.selectorindicatorimage.style.display=_88f?"none":"block";
_890.setDisabled(_88f);
}
if(_88f){
this.setProperty("isdisabled",true);
}else{
this.deleteProperty("isdisabled");
}
};
SelectorBinding.prototype.reset=function(_891){
if(this.defaultSelection!=null){
this.selectByValue(this.defaultSelection.value,_891);
}
};
SelectorBinding.prototype.handleAction=function(_892){
SelectorBinding.superclass.handleAction.call(this,_892);
switch(_892.type){
case ButtonBinding.ACTION_COMMAND:
this._onButtonCommand();
_892.consume();
break;
case PopupBinding.ACTION_SHOW:
this._onPopupShowing();
_892.consume();
break;
case MenuItemBinding.ACTION_COMMAND:
this._onMenuItemCommand(_892.target);
_892.consume();
break;
case PopupBinding.ACTION_HIDE:
var self=this;
setTimeout(function(){
if(self.isFocused){
self._grabKeyboard();
}
},0);
if(this._clearSearchSelection){
this._clearSearchSelection();
}
_892.consume();
break;
}
};
SelectorBinding.prototype._onButtonCommand=function(){
this.focus();
this._attachSelections();
this._restoreSelection();
this.dispatchAction(SelectorBinding.ACTION_COMMAND);
};
SelectorBinding.prototype._onPopupShowing=function(){
this._fitMenuToSelector();
this._releaseKeyboard();
};
SelectorBinding.prototype._onMenuItemCommand=function(_894){
this.select(_894);
FocusBinding.focusElement(this.bindingElement);
this._grabKeyboard();
};
SelectorBinding.prototype._restoreSelection=function(){
if(this._selectedItemBinding){
this._selectedItemBinding.focus();
}
};
SelectorBinding.prototype._fitMenuToSelector=function(){
var _895=this._buttonBinding.bindingElement.offsetWidth+"px";
var _896=this._popupBinding.bindingElement;
_896.style.minWidth=_895;
};
SelectorBinding.prototype.handleEvent=function(e){
SelectorBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.FOCUS:
this.focus();
break;
case DOMEvents.KEYDOWN:
var _898=Client.isExplorer?e.keyCode:e.which;
if(_898==8){
this._popSearchSelection();
}
break;
case DOMEvents.KEYPRESS:
var _898=Client.isExplorer?e.keyCode:e.which;
if(_898>=32){
this._buttonBinding.check();
var _899=String.fromCharCode(_898);
this._pushSearchSelection(_899);
}
break;
}
};
SelectorBinding.prototype._pushSearchSelection=function(_89a){
this._searchString+=_89a.toLowerCase();
this._applySearchSelection();
};
SelectorBinding.prototype._popSearchSelection=function(_89b){
this._searchString=this._searchString.substring(0,this._searchString.length-1);
this._applySearchSelection();
};
SelectorBinding.prototype._clearSearchSelection=function(){
if(this._searchString!=null&&this._searchString!=""){
this._searchString="";
this._applySearchSelection();
}
};
SelectorBinding.prototype._applySearchSelection=function(){
if(this.isSearchSelectionEnabled){
var _89c=this._menuBodyBinding;
if(_89c!=null){
var _89d=this.MENUITEM_IMPLEMENTATION;
var _89e=_89c.bindingDocument;
var list=this._getSelectionsList();
if(this._searchString!=null&&this._searchString!=""){
this._popupBinding.clear();
this._buttonBinding.setLabel(this._searchString);
if(list.hasEntries()){
while(list.hasNext()){
var _8a0=list.getNext();
if(_8a0.label.toLowerCase().indexOf(this._searchString)>-1){
this.addSelection(_8a0);
}
}
}
this._attachSelections();
var _8a1=new RegExp(this._searchString.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),"gi");
var _8a2=_89c.getDescendantBindingsByType(_89d);
if(_8a2.hasEntries()){
while(_8a2.hasNext()){
var _8a3=_8a2.getNext();
var _8a4=_8a3.labelBinding;
if(_8a4!=null&&_8a4.shadowTree!=null&&_8a4.shadowTree.labelText!=null){
_8a4.shadowTree.labelText.innerHTML=_8a4.shadowTree.labelText.innerHTML.replace(_8a1,"<b>$&</b>");
}
}
_8a2.getFirst().focus();
this.attachClassName(DataBinding.CLASSNAME_INFOBOX);
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}else{
_8a4=LabelBinding.newInstance(_89e);
_8a4.setLabel(StringBundle.getString("ui","AspNetUiControl.Selector.NoMatchesFor").replace("{0}",this._searchString));
_89c.add(_8a4);
this._attachSelections();
this.detachClassName(DataBinding.CLASSNAME_INFOBOX);
this.attachClassName(DataBinding.CLASSNAME_INVALID);
}
}else{
this._popupBinding.clear();
this._buttonBinding.setLabel(this._selectionLabel);
if(list.hasEntries()){
while(list.hasNext()){
var _8a0=list.getNext();
var item=this.addSelection(_8a0);
if(this._selectionValue==_8a0.value){
this._selectedItemBinding=item;
}
}
}
this._attachSelections();
this._restoreSelection();
this.detachClassName(DataBinding.CLASSNAME_INFOBOX);
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}
if(this._bodyBinding instanceof MenuBodyBinding){
this._bodyBinding.refreshMenuGroups();
}
this._popupBinding._enableTab(true);
}
}
};
SelectorBinding.prototype.handleBroadcast=function(_8a6,arg){
SelectorBinding.superclass.handleBroadcast.call(this,_8a6,arg);
switch(_8a6){
case BroadcastMessages.KEY_ARROW:
this.logger.debug(this._buttonBinding.getLabel());
this._handleArrowKey(arg);
break;
}
};
SelectorBinding.prototype._handleArrowKey=function(key){
if(!this._popupBinding.isVisible){
switch(key){
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_UP:
this._buttonBinding.check();
break;
}
}
};
SelectorBinding.prototype.select=function(_8a9,_8aa){
var _8ab=false;
if(_8a9!=this._selectedItemBinding){
this._selectedItemBinding=_8a9;
_8ab=true;
var _8ac=this._buttonBinding;
this._selectionValue=_8a9.selectionValue;
this._selectionLabel=_8a9.getLabel();
_8ac.setLabel(_8a9.getLabel());
if(_8a9.imageProfile!=null){
_8ac.imageProfile=_8a9.imageProfile;
}
if(_8ac.imageProfile!=null){
_8ac.setImage(this.isDisabled==true?_8ac.imageProfile.getDisabledImage():_8ac.imageProfile.getDefaultImage());
}
this._updateImageLayout();
if(!_8aa){
this.onValueChange();
this.dispatchAction(SelectorBinding.ACTION_SELECTIONCHANGED);
this.dirty();
}
if(!this._isValid||(this.isRequired&&!_8aa)){
this.validate();
}
}
return _8ab;
};
SelectorBinding.prototype._relate=function(){
var _8ad=this.getProperty("relate");
if(_8ad){
var _8ae=this.bindingDocument.getElementById(_8ad);
if(_8ae){
var _8af=UserInterface.getBinding(_8ae);
if(_8af){
if(this.isChecked){
_8af.show();
}else{
_8af.hide();
}
}
}
}
};
SelectorBinding.prototype._updateImageLayout=function(){
if(this._buttonBinding.getImage()==null){
if(this._isImageLayout==true){
this._buttonBinding.attachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this._isImageLayout=false;
}
}else{
if(!this._isImageLayout){
this._buttonBinding.detachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this._isImageLayout=true;
}
}
};
SelectorBinding.prototype.onValueChange=function(){
};
SelectorBinding.prototype.selectByValue=function(_8b0,_8b1){
var _8b2=false;
var _8b3=this._menuBodyBinding;
var _8b4=_8b3.getDescendantElementsByLocalName("menuitem");
while(_8b4.hasNext()){
var _8b5=UserInterface.getBinding(_8b4.getNext());
if(_8b5.selectionValue==_8b0){
_8b2=this.select(_8b5,_8b1);
break;
}
}
return _8b2;
};
SelectorBinding.prototype.getValue=function(){
var _8b6=this._selectionValue;
if(_8b6!=null){
_8b6=String(_8b6);
}
return _8b6;
};
SelectorBinding.prototype.setValue=function(_8b7){
this.selectByValue(String(_8b7),true);
};
SelectorBinding.prototype.getResult=function(){
var _8b8=this._selectionValue;
if(_8b8=="null"){
_8b8=null;
}
if(_8b8){
switch(this.type){
case DataBinding.TYPE_NUMBER:
case DataBinding.TYPE_INTEGER:
_8b8=Number(_8b8);
break;
}
}
return _8b8;
};
SelectorBinding.prototype.setResult=function(_8b9){
this.selectByValue(_8b9,true);
};
SelectorBinding.prototype.validate=function(){
var _8ba=true;
if(this.isRequired==true&&this.defaultSelection!=null){
var _8bb=this.getValue();
if(_8bb==this.defaultSelection.value){
_8ba=false;
}
if(_8ba!=this._isValid){
if(_8ba){
this.dispatchAction(Binding.ACTION_VALID);
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}else{
this.dispatchAction(Binding.ACTION_INVALID);
this.attachClassName(DataBinding.CLASSNAME_INVALID);
this._buttonBinding.setLabel(DataBinding.warnings["required"]);
}
}
this._isValid=_8ba;
}
return _8ba;
};
SelectorBinding.prototype.manifest=function(){
if(this.isAttached==true){
if(this.getResult()){
if(!this.shadowTree.input){
this.buildFormField();
}
this.shadowTree.input.value=this.getValue();
}else{
if(this.shadowTree.input){
this.shadowTree.input.parentNode.removeChild(this.shadowTree.input);
this.shadowTree.input=null;
}
}
}
};
SelectorBinding.prototype._attachSelections=function(){
var _8bc=this._popupBinding;
if(!this._isUpToDate){
_8bc.attachRecursive();
this._isUpToDate=true;
}
};
SelectorBinding.prototype.handleElement=function(){
return true;
};
SelectorBinding.prototype.updateElement=function(_8bd,_8be){
this.bindingWindow.UpdateManager.addUpdate(new this.bindingWindow.ReplaceUpdate(this.getID(),_8bd));
return true;
};
SelectorBinding.newInstance=function(_8bf){
var _8c0=DOMUtil.createElementNS(Constants.NS_UI,"ui:selector",_8bf);
return UserInterface.registerBinding(_8c0,SelectorBinding);
};
SimpleSelectorBinding.prototype=new DataBinding;
SimpleSelectorBinding.prototype.constructor=SimpleSelectorBinding;
SimpleSelectorBinding.superclass=DataBinding.prototype;
function SimpleSelectorBinding(){
this.logger=SystemLogger.getLogger("SimpleSelectorBinding");
this._select=null;
this.isRequired=false;
this._isValid=true;
this._cachewidth=0;
return this;
}
SimpleSelectorBinding.prototype.toString=function(){
return "[SimpleSelectorBinding]";
};
SimpleSelectorBinding.prototype.onBindingRegister=function(){
SimpleSelectorBinding.superclass.onBindingRegister.call(this);
var name=this.getProperty("name");
if(name!=null){
this.setName(name);
}
};
SimpleSelectorBinding.prototype.onBindingAttach=function(){
SimpleSelectorBinding.superclass.onBindingAttach.call(this);
this._select=this.getChildElementByLocalName("select");
var name=this.getName();
if(name!=null){
this._select.name=name;
}
this._parseDOMProperties();
this._buildDOMContent();
};
SimpleSelectorBinding.prototype._parseDOMProperties=function(){
var _8c3=this.getProperty("onchange");
this.isRequired=this.getProperty("required")==true;
if(this.hasCallBackID()){
this._select.id=this.getCallBackID();
}
if(_8c3){
this.onValueChange=function(){
Binding.evaluate(_8c3,this);
};
}
};
SimpleSelectorBinding.prototype._buildDOMContent=function(){
this.bindingElement.tabIndex=0;
if(Client.isExplorer==true){
this.bindingElement.hideFocus=true;
}
var self=this;
this._select.onchange=function(){
self.onValueChange();
self.dirty();
if(!self._isValid){
self.validate();
}
};
this._select.onfocus=function(){
self.focus(true);
};
if(Client.isExplorer){
this._buildDOMContentIE();
}
};
SimpleSelectorBinding.prototype._buildDOMContentIE=function(){
if(Client.isExplorer){
this.bindingElement.style.height=this.bindingElement.offsetHeight+"px";
this._cachewidth=this._select.offsetWidth;
this._select.style.position="absolute";
var self=this;
this._select.onmouseover=function(){
if(!self.isFocused){
self._hack(true);
}
};
this._select.onmouseout=function(){
if(!self.isFocused){
self._hack(false);
}
};
}
};
SimpleSelectorBinding.prototype.onValueChange=function(){
};
SimpleSelectorBinding.prototype.focus=function(_8c6){
SimpleSelectorBinding.superclass.focus.call(this);
if(this.isFocused){
if(!_8c6){
FocusBinding.focusElement(this._select);
if(Client.isExplorer){
this._hack(true);
}
}
this.bindingWindow.standardEventHandler.enableNativeKeys(false);
}
};
SimpleSelectorBinding.prototype.blur=function(){
SimpleSelectorBinding.superclass.blur.call(this);
if(!this.isFocused){
this._select.blur();
this.bindingWindow.standardEventHandler.disableNativeKeys();
if(Client.isExplorer){
this._hack(false);
}
if(this.isRequired){
this.validate();
}
}
};
SimpleSelectorBinding.prototype._hack=function(_8c7){
if(Client.isExplorer){
this._select.style.width=_8c7?"auto":this._cachewidth+"px";
if(_8c7){
if(this._select.offsetWidth<=this._cachewidth){
this._hack(false);
}
}
}
};
SimpleSelectorBinding.prototype.validate=function(){
var _8c8=true;
if(this.isRequired){
if(this.getValue()==null){
_8c8=false;
}
}
if(_8c8!=this._isValid){
if(_8c8){
this.detachClassName(DataBinding.CLASSNAME_INVALID);
}else{
this.attachClassName(DataBinding.CLASSNAME_INVALID);
var _8c9=this._select;
var _8ca=_8c9.options[_8c9.selectedIndex];
var text=DOMUtil.getTextContent(_8ca);
_8c9.blur();
_8c9.style.color="#A40000";
_8c9.style.fontWeight="bold";
if(!Client.isExplorer6){
DOMUtil.setTextContent(_8ca,DataBinding.warnings["required"]);
}
_8c9.onfocus=function(){
this.style.color="black";
this.style.fontWeight="normal";
this.onfocus=null;
if(!Client.isExplorer6){
DOMUtil.setTextContent(_8ca,text);
}
};
}
this._isValid=_8c8;
}
return _8c8;
};
SimpleSelectorBinding.prototype.manifest=function(){
};
SimpleSelectorBinding.prototype.getValue=function(){
var _8cc=null;
var _8cd=this._select;
var _8ce=_8cd.options[_8cd.selectedIndex];
var _8cf=true;
if(Client.isExplorer){
var html=_8ce.outerHTML.toLowerCase();
if(html.indexOf("value=")==-1){
_8cf=false;
}
}
if(_8cf){
_8cc=_8ce.getAttribute("value");
}
return _8cc;
};
SimpleSelectorBinding.prototype.setValue=function(_8d1){
};
SimpleSelectorBinding.prototype.getResult=function(){
return this.getValue();
};
SimpleSelectorBinding.prototype.setResult=function(_8d2){
this.setValue(_8d2);
};
SimpleSelectorBinding.newInstance=function(_8d3){
var _8d4=DOMUtil.createElementNS(Constants.NS_XHTML,"select",_8d3);
return UserInterface.registerBinding(_8d4,SimpleSelectorBinding);
};
function SelectorBindingSelection(_8d5,_8d6,_8d7,_8d8,_8d9){
this._init(_8d5,_8d6,_8d7,_8d8,_8d9);
}
SelectorBindingSelection.prototype={label:null,value:null,tooltip:null,isSelected:null,imageProfile:null,menuItemBinding:null,_init:function(_8da,_8db,_8dc,_8dd,_8de){
if(_8da!=null){
this.label=String(_8da);
}
if(_8db!=null){
this.value=String(_8db);
}
if(_8dd!=null){
this.imageProfile=_8dd;
}
if(_8de!=null){
this.tooltip=_8de;
}
this.isSelected=_8dc?true:false;
}};
DataInputSelectorBinding.prototype=new DataInputBinding;
DataInputSelectorBinding.prototype.constructor=DataInputSelectorBinding;
DataInputSelectorBinding.superclass=DataInputBinding.prototype;
DataInputSelectorBinding.INDICATOR_IMAGE=Resolver.resolve("${skin}/fields/selectorindicator.png");
DataInputSelectorBinding.ACTION_SELECTIONCHANGED="datainputselectorselectionchanged";
function DataInputSelectorBinding(){
this.logger=SystemLogger.getLogger("DataInputSelectorBinding");
this._buttonBinding=null;
this._popupBinding=null;
this._menuBodyBinding=null;
this._selectionValue=null;
this.isDirty=false;
this._hasKeyboard=false;
this._isUpToDate=false;
this._selectedItemBinding=null;
this.crawlerFilters=new List([DocumentCrawler.ID,FocusCrawler.ID]);
}
DataInputSelectorBinding.prototype.toString=function(){
return "[DataInputSelectorBinding]";
};
DataInputSelectorBinding.prototype.onBindingDispose=SelectorBinding.prototype.onBindingDispose;
DataInputSelectorBinding.prototype._buildDOMContent=function(){
DataInputSelectorBinding.superclass._buildDOMContent.call(this);
this.buildButton();
this.buildPopup();
this.buildSelections();
};
DataInputSelectorBinding.prototype.buildButton=function(){
var _8df=this.addFirst(ToolBarButtonBinding.newInstance(this.bindingDocument));
_8df.popupBindingTargetElement=this.shadowTree.input;
_8df.setImage(DataInputSelectorBinding.INDICATOR_IMAGE);
_8df.attach();
var self=this;
_8df.oncommand=function(){
self._attachSelections();
};
this._buttonBinding=_8df;
};
DataInputSelectorBinding.prototype.buildPopup=SelectorBinding.prototype.buildPopup;
DataInputSelectorBinding.prototype.buildSelections=function(){
var list=new List();
var _8e2=DOMUtil.getElementsByTagName(this.bindingElement,"selection");
new List(_8e2).each(function(_8e3){
if(_8e3.getAttribute("label")){
throw "label not supported - use value property!";
}else{
var _8e4=_8e3.getAttribute("value");
var _8e5=_8e3.getAttribute("selected");
var _8e6=_8e3.getAttribute("tooltip");
list.add({value:_8e4?_8e4:null,toolTip:_8e6?_8e6:null,isSelected:(_8e5&&_8e5=="true")?true:false});
}
});
if(list.hasEntries()){
this.populateFromList(list);
}
};
DataInputSelectorBinding.prototype.populateFromList=function(list){
var _8e8=this._menuBodyBinding;
var _8e9=_8e8.bindingDocument;
while(_8e8.bindingElement.hasChildNodes()){
var node=_8e8.bindingElement.lastChild;
if(node.nodeType==Node.ELEMENT_NODE&&UserInterface.hasBinding(node)){
UserInterface.getBinding(node).dispose();
}else{
_8e8.removeChild(node);
}
}
if(list.hasEntries()){
this._isUpToDate=false;
if(!this._buttonBinding.isVisible){
this._buttonBinding.show();
}
while(list.hasNext()){
var _8eb=list.getNext();
var _8ec=MenuItemBinding.newInstance(_8e9);
_8ec.setLabel(_8eb.value);
_8ec.selectionValue=_8eb.value;
if(_8eb.toolTip){
_8ec.setToolTip(_8eb.toolTip);
}
if(_8eb.isSelected){
this.select(_8ec,true);
}
_8e8.add(_8ec);
}
}else{
this._buttonBinding.hide();
}
};
DataInputSelectorBinding.prototype.handleAction=SelectorBinding.prototype.handleAction;
DataInputSelectorBinding.prototype._onButtonCommand=function(){
this.focus();
this._restoreSelection();
this.dispatchAction(SelectorBinding.ACTION_COMMAND);
};
DataInputSelectorBinding.prototype._onPopupShowing=function(){
this._fitMenuToSelector();
this._restoreSelection();
this._releaseKeyboard();
};
DataInputSelectorBinding.prototype._onMenuItemCommand=function(_8ed){
this.select(_8ed);
FocusBinding.focusElement(this.bindingElement);
this._grabKeyboard();
};
DataInputSelectorBinding.prototype.handleBroadcast=function(_8ee,arg){
SelectorBinding.prototype.handleBroadcast.call(this,_8ee,arg);
switch(_8ee){
case BroadcastMessages.MOUSEEVENT_MOUSEDOWN:
if(arg!=this._buttonBinding){
DataInputSelectorBinding.superclass.handleBroadcast.call(this,_8ee,arg);
}
break;
}
};
DataInputSelectorBinding.prototype._grabKeyboard=SelectorBinding.prototype._grabKeyboard;
DataInputSelectorBinding.prototype._releaseKeyboard=SelectorBinding.prototype._releaseKeyboard;
DataInputSelectorBinding.prototype._handleArrowKey=SelectorBinding.prototype._handleArrowKey;
DataInputSelectorBinding.prototype.focus=function(_8f0){
if(!this.isFocused){
DataInputSelectorBinding.superclass.focus.call(this,_8f0);
if(this.isFocused==true){
this._grabKeyboard();
}
}
};
DataInputSelectorBinding.prototype.blur=function(_8f1){
if(this.isFocused==true){
DataInputSelectorBinding.superclass.blur.call(this,_8f1);
this._releaseKeyboard();
if(this._popupBinding.isVisible){
this._popupBinding.hide();
}
}
};
DataInputSelectorBinding.prototype._fitMenuToSelector=function(){
var _8f2=this.bindingElement.offsetWidth+"px";
var _8f3=this._popupBinding.bindingElement;
_8f3.style.minWidth=_8f2;
};
DataInputSelectorBinding.prototype._restoreSelection=function(){
if(!this._isUpToDate){
this._attachSelections();
}
var _8f4=this._menuBodyBinding.getDescendantBindingsByLocalName("menuitem");
var _8f5=this.getValue();
var _8f6=null;
_8f4.each(function(item){
if(item.getLabel()==_8f5){
_8f6=item;
}
});
if(_8f6){
_8f6.focus();
}
};
DataInputSelectorBinding.prototype.select=function(item,_8f9){
if(item!=this._selectedItemBinding){
this._selectedItemBinding=item;
this.setValue(item.selectionValue);
if(!_8f9){
this.dirty();
this.dispatchAction(DataInputSelectorBinding.ACTION_SELECTIONCHANGED);
}
}
this.shadowTree.input.focus();
};
DataInputSelectorBinding.prototype._attachSelections=SelectorBinding.prototype._attachSelections;
DataInputSelectorBinding.prototype.setResult=DataInputSelectorBinding.prototype.setValue;
DataInputDialogBinding.prototype=new DataInputBinding;
DataInputDialogBinding.prototype.constructor=DataInputDialogBinding;
DataInputDialogBinding.superclass=DataInputBinding.prototype;
function DataInputDialogBinding(){
this.logger=SystemLogger.getLogger("DataInputDialogBinding");
this._handle=null;
this._dialogButtonBinding=null;
this._isButtonClicked=false;
}
DataInputDialogBinding.prototype.toString=function(){
return "[DataInputDialogBinding]";
};
DataInputDialogBinding.prototype._buildDOMContent=function(){
DataInputSelectorBinding.superclass._buildDOMContent.call(this);
this.buildButton();
};
DataInputDialogBinding.prototype.buildButton=function(){
var _8fa=ToolBarButtonBinding.newInstance(this.bindingDocument);
_8fa.setImage("${icon:popup}");
this.addFirst(_8fa);
_8fa.attach();
var self=this;
_8fa.oncommand=function(){
self._isButtonClicked=true;
setTimeout(function(){
self._isButtonClicked=false;
},1000);
var _8fc=self.getProperty("handle");
var _8fd=ViewDefinitions[_8fc];
if(_8fd instanceof DialogViewDefinition){
_8fd.handler={handleDialogResponse:function(_8fe,_8ff){
self._isButtonClicked=false;
if(_8fe==Dialog.RESPONSE_ACCEPT){
self.logger.debug("Usecase scenario was hardcoded into DataInputDialogBinding#buildButton");
var _900=_8ff.getFirst();
self.setValue(_900);
self.validate(true);
}
self.focus();
}};
_8fd.argument.selectedResult=self.getValue();
StageBinding.presentViewDefinition(_8fd);
}else{
throw "Definition was either undefine or of a non-dialog type.";
}
};
DOMEvents.addEventListener(_8fa.getBindingElement(),DOMEvents.MOUSEDOWN,{handleEvent:function(e){
self._isButtonClicked=true;
}});
this._dialogButtonBinding=_8fa;
};
DataInputDialogBinding.prototype.oncommand=function(){
var _902=this._dialogButtonBinding;
if(_902!=null){
_902.oncommand();
}
};
DataInputDialogBinding.prototype.validate=function(arg){
var _904=true;
if(this._isButtonClicked==true){
this._isButtonClicked=false;
}else{
_904=DataInputDialogBinding.superclass.validate.call(this,arg);
}
return _904;
};
ImageInputDialogBinding.prototype=new DataInputBinding;
ImageInputDialogBinding.prototype.constructor=ImageInputDialogBinding;
ImageInputDialogBinding.superclass=DataInputBinding.prototype;
ImageInputDialogBinding.IMAGE_SELECTED="image input image selected";
function ImageInputDialogBinding(){
this.logger=SystemLogger.getLogger("ImageInputDialogBinding");
this.handle="Composite.Management.ImageSelectorDialog";
this._dialogButtonBinding=null;
this._isButtonClicked=false;
this.value=null;
}
ImageInputDialogBinding.prototype.toString=function(){
return "[ImageInputDialogBinding]";
};
ImageInputDialogBinding.prototype._buildDOMContent=function(){
DataInputSelectorBinding.superclass._buildDOMContent.call(this);
this.buildButton();
var self=this;
DOMEvents.addEventListener(this.shadowTree.input,DOMEvents.DOUBLECLICK,{handleEvent:function(e){
self.setReadOnly(false);
self.focus();
}});
};
ImageInputDialogBinding.prototype.buildButton=function(){
var _907=ToolBarButtonBinding.newInstance(this.bindingDocument);
_907.setImage("${icon:popup}");
this.addFirst(_907);
_907.attach();
var self=this;
_907.oncommand=function(){
self._isButtonClicked=true;
setTimeout(function(){
self._isButtonClicked=false;
},1000);
var _909=ViewDefinitions[self.handle];
if(_909 instanceof DialogViewDefinition){
_909.handler={handleDialogResponse:function(_90a,_90b){
self._isButtonClicked=false;
if(_90a==Dialog.RESPONSE_ACCEPT){
self.logger.debug("Usecase scenario was hardcoded into ImageInputDialogBinding#buildButton");
var _90c=_90b.getFirst();
self.setValue(_90c);
self.validate(true);
self.dispatchAction(ImageInputDialogBinding.IMAGE_SELECTED);
}
self.focus();
}};
_909.argument.selectedResult=self.getValue();
StageBinding.presentViewDefinition(_909);
}else{
throw "Definition was either undefine or of a non-dialog type.";
}
};
DOMEvents.addEventListener(_907.getBindingElement(),DOMEvents.MOUSEDOWN,{handleEvent:function(e){
self._isButtonClicked=true;
}});
this._dialogButtonBinding=_907;
};
ImageInputDialogBinding.prototype.oncommand=function(){
var _90e=this._dialogButtonBinding;
if(_90e!=null){
_90e.oncommand();
}
};
ImageInputDialogBinding.prototype.onblur=function(){
ImageInputDialogBinding.superclass.onblur.call(this);
this.dispatchAction(ImageInputDialogBinding.IMAGE_SELECTED);
};
ImageInputDialogBinding.prototype.validate=function(arg){
var _910=true;
if(this._isButtonClicked==true){
this._isButtonClicked=false;
}else{
_910=ImageInputDialogBinding.superclass.validate.call(this,arg);
}
return _910;
};
ImageInputDialogBinding.prototype.setValue=function(_911){
if(this.isReadOnly){
this.value=_911;
this.shadowTree.input.value=TreeService.GetMediaLabel(_911);
}else{
ImageInputDialogBinding.superclass.setValue.call(this,_911);
}
};
ImageInputDialogBinding.prototype.getValue=function(){
if(this.isReadOnly){
result=this.value;
}else{
result=ImageInputDialogBinding.superclass.getValue.call(this);
}
return result;
};
ImageInputDialogBinding.prototype.setReadOnly=function(_912){
var _913=this.isReadOnly;
ImageInputDialogBinding.superclass.setReadOnly.call(this,_912);
if(_913==true&&_912==false){
ImageInputDialogBinding.superclass.setValue.call(this,this.value);
}
if(_913==false&&_912==true){
this.value=ImageInputDialogBinding.superclass.getValue.call(this);
var _914=TreeService.GetMediaLabel(this.value);
this.shadowTree.input.value=_914;
this.shadowTree.input.title=_914;
}
};
DataInputButtonBinding.prototype=new DataInputBinding;
DataInputButtonBinding.prototype.constructor=DataInputButtonBinding;
DataInputButtonBinding.superclass=DataInputBinding.prototype;
function DataInputButtonBinding(){
this.logger=SystemLogger.getLogger("DataInputButtonBinding");
this._dialogButtonBinding=null;
}
DataInputButtonBinding.prototype.toString=function(){
return "[DataInputButtonBinding]";
};
DataInputButtonBinding.prototype.onBindingAttach=function(){
DataInputButtonBinding.superclass.onBindingAttach.call(this);
if(this.hasCallBackID()){
Binding.dotnetify(this);
}
};
DataInputButtonBinding.prototype._buildDOMContent=function(){
DataInputSelectorBinding.superclass._buildDOMContent.call(this);
this.buildButton();
};
DataInputButtonBinding.prototype.buildButton=function(){
var _915=ToolBarButtonBinding.newInstance(this.bindingDocument);
var _916=this.getProperty("image");
if(_916!=null){
_915.setImage(_916);
}else{
_915.setImage("${icon:popup}");
}
this.addFirst(_915);
_915.attach();
var self=this;
_915.oncommand=function(){
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
};
this._dialogButtonBinding=_915;
};
DataInputButtonBinding.prototype.oncommand=function(){
var _918=this._dialogButtonBinding;
if(_918!=null){
_918.oncommand();
}
};
DataDialogBinding.prototype=new DataBinding;
DataDialogBinding.prototype.constructor=DataDialogBinding;
DataDialogBinding.superclass=DataBinding.prototype;
DataDialogBinding.ACTION_COMMAND="datadialog command";
function DataDialogBinding(){
this.logger=SystemLogger.getLogger("DataDialogBinding");
this._buttonBinding=null;
this._handler=null;
this._map=null;
this._dialogViewHandle=null;
this._hasKeyboard=false;
this._hasFocus=false;
}
DataDialogBinding.prototype.toString=function(){
return "[DataDialogBinding]";
};
DataDialogBinding.prototype.onBindingRegister=function(){
DataDialogBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["image"]=this.setImage;
this.propertyMethodMap["label"]=this.setLabel;
this.propertyMethodMap["tooltip"]=this.setToolTip;
this.propertyMethodMap["handle"]=this.setHandle;
this.propertyMethodMap["url"]=this.setURL;
this.propertyMethodMap["value"]=this.setValue;
};
DataDialogBinding.prototype.onBindingAttach=function(){
DataDialogBinding.superclass.onBindingAttach.call(this);
Binding.imageProfile(this);
this._buildButton();
if(this.getProperty("handle")!=null||this.getProperty("url")){
this._buildIndicator();
}
this.bindingElement.tabIndex=0;
if(Client.isExplorer){
this.bindingElement.hideFocus=true;
}
};
DataDialogBinding.prototype._buildButton=function(){
var _919=this.getProperty("label");
var _91a=this.getProperty("tooltip");
this._buttonBinding=this.add(ClickButtonBinding.newInstance(this.bindingDocument));
if(_919!=null){
if(this.getProperty("handle")!=null||this.getProperty("url")!=null){
this._buttonBinding.setLabel(_919+LabelBinding.DIALOG_INDECATOR_SUFFIX);
}else{
this._buttonBinding.setLabel(_919);
}
}
if(this.imageProfile){
this._buttonBinding.imageProfile=this.imageProfile;
}
if(_91a!=null){
this._buttonBinding.setToolTip(_91a);
}
this._buttonBinding.addActionListener(ButtonBinding.ACTION_COMMAND,this);
this._buttonBinding.attach();
};
DataDialogBinding.prototype._buildIndicator=function(){
var img=this.bindingDocument.createElement("img");
img.src=Resolver.resolve("${icon:popup}");
img.className="dialogindicatorimage";
this._buttonBinding.bindingElement.appendChild(img);
this.shadowTree.indicatorimage=img;
};
DataDialogBinding.prototype.handleAction=function(_91c){
DataDialogBinding.superclass.handleAction.call(this,_91c);
var _91d=_91c.target;
var self=this;
switch(_91c.type){
case ButtonBinding.ACTION_COMMAND:
if(this._handler==null){
this._handler={handleDialogResponse:function(_91f,_920){
if(_91f==Dialog.RESPONSE_ACCEPT){
if(_920 instanceof DataBindingMap){
self._map=_920;
}else{
throw "Invalid dialog result";
}
}
}};
}
if(_91d==this._buttonBinding){
_91c.consume();
this.focus();
this.fireCommand();
}
break;
}
};
DataDialogBinding.prototype.handleBroadcast=function(_921,arg){
DataDialogBinding.superclass.handleBroadcast.call(this,_921,arg);
switch(_921){
case BroadcastMessages.KEY_SPACE:
this.fireCommand();
break;
}
};
DataDialogBinding.prototype.fireCommand=function(def){
this.dispatchAction(this.constructor.ACTION_COMMAND);
var _924=this.getProperty("handle");
var url=this.getURL();
var _926=null;
if(_924!=null||def!=null){
if(def!=null){
_926=def;
}else{
_926=ViewDefinitions[_924];
}
if(_926 instanceof DialogViewDefinition){
_926.handler=this._handler;
if(this._map!=null){
_926.argument=this._map;
}
StageBinding.presentViewDefinition(_926);
}
}else{
if(url!=null){
_926=Dialog.invokeModal(url,this._handler,this._map);
}
}
if(_926!=null){
this._dialogViewHandle=_926.handle;
this._releaseKeyboard();
}
};
DataDialogBinding.prototype.setLabel=function(_927){
this.setProperty("label",_927);
if(this.isAttached){
this._buttonBinding.setLabel(_927+LabelBinding.DIALOG_INDECATOR_SUFFIX);
}
};
DataDialogBinding.prototype.setImage=function(_928){
this.setProperty("image",_928);
if(this.imageProfile!=null){
this.imageProfile.setDefaultImage(_928);
if(this._buttonBinding!=null){
this._buttonBinding.imageProfile=this.imageProfile;
this._buttonBinding.setImage(this._buttonBinding.imageProfile.getDefaultImage());
}
}
};
DataDialogBinding.prototype.setToolTip=function(_929){
this.setProperty("tooltip",_929);
if(this.isAttached){
this._buttonBinding.setToolTip(_929);
}
};
DataDialogBinding.prototype.setHandle=function(_92a){
this.setProperty("handle",_92a);
};
DataDialogBinding.prototype.setURL=function(url){
this.setProperty("url",url);
};
DataDialogBinding.prototype.getURL=function(){
return this.getProperty("url");
};
DataDialogBinding.prototype.setHandler=function(_92c){
this._handler=_92c;
};
DataDialogBinding.prototype.focus=function(){
if(!this.isFocused){
DataBinding.prototype.focus.call(this);
FocusBinding.focusElement(this.bindingElement);
if(this.isFocused){
this._grabKeyboard();
}
}
};
DataDialogBinding.prototype.blur=function(){
if(this.isFocused){
DataBinding.prototype.blur.call(this);
if(this._hasKeyboard){
this._releaseKeyboard();
}
}
};
DataDialogBinding.prototype._grabKeyboard=function(){
if(!this._hasKeyboard){
this.subscribe(BroadcastMessages.KEY_SPACE);
this._hasKeyboard=true;
}
};
DataDialogBinding.prototype._releaseKeyboard=function(){
if(this._hasKeyboard){
this.unsubscribe(BroadcastMessages.KEY_SPACE);
this._hasKeyboard=false;
}
};
DataDialogBinding.prototype.validate=function(){
return true;
};
DataDialogBinding.prototype.manifest=function(){
};
DataDialogBinding.prototype.getValue=function(){
return null;
};
DataDialogBinding.prototype.getResult=function(){
return this._map;
};
DataDialogBinding.prototype.setResult=function(map){
if(map instanceof DataBindingMap){
this._map=map;
}else{
throw "Invalid argument";
}
};
DataDialogBinding.newInstance=function(_92e){
var _92f=DOMUtil.createElementNS(Constants.NS_UI,"ui:datadialog",_92e);
return UserInterface.registerBinding(_92f,DataDialogBinding);
};
PostBackDataDialogBinding.prototype=new DataDialogBinding;
PostBackDataDialogBinding.prototype.constructor=PostBackDataDialogBinding;
PostBackDataDialogBinding.superclass=DataDialogBinding.prototype;
PostBackDataDialogBinding.ACTION_COMMAND="postbackdialog command";
function PostBackDataDialogBinding(){
this.input=null;
return this;
}
PostBackDataDialogBinding.prototype.onBindingAttach=function(){
PostBackDataDialogBinding.superclass.onBindingAttach.call(this);
Binding.dotnetify(this);
var self=this;
this._handler={handleDialogResponse:function(_931,_932){
if(_931==Dialog.RESPONSE_ACCEPT){
self._onDialogAccept(_932);
}else{
self._onDialogCancel();
}
}};
};
PostBackDataDialogBinding.prototype._onDialogAccept=function(_933){
_933=new String(_933);
this.dirty();
this.setValue(encodeURIComponent(_933));
var self=this;
setTimeout(function(){
if(self.ondialogaccept!=null){
self.ondialogaccept();
}
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
},0);
};
PostBackDataDialogBinding.prototype._onDialogCancel=function(){
if(this.ondialogcancel!=null){
this.ondialogcancel();
}
};
PostBackDataDialogBinding.prototype.getURL=function(){
var url=this.getProperty("url");
var suf=this.getValue();
if(suf==null){
suf=this.getProperty("defaultValue");
}
return new String(url+suf);
};
PostBackDataDialogBinding.prototype.manifest=function(){
var _937=this.getValue();
if(_937==null){
_937="";
}
this.shadowTree.dotnetinput.value=_937;
};
PostBackDataDialogBinding.prototype.setValue=function(_938){
this.setProperty("value",_938);
};
PostBackDataDialogBinding.prototype.getValue=function(){
return this.getProperty("value");
};
PostBackDataDialogBinding.prototype.getResult=function(){
return null;
};
PostBackDataDialogBinding.prototype.setResult=function(_939){
};
PostBackDataDialogBinding.newInstance=function(_93a){
var _93b=DOMUtil.createElementNS(Constants.NS_UI,"ui:postbackdialog",_93a);
return UserInterface.registerBinding(_93b,PostBackDataDialogBinding);
};
ViewDefinitionPostBackDataDialogBinding.prototype=new PostBackDataDialogBinding;
ViewDefinitionPostBackDataDialogBinding.prototype.constructor=ViewDefinitionPostBackDataDialogBinding;
ViewDefinitionPostBackDataDialogBinding.superclass=PostBackDataDialogBinding.prototype;
function ViewDefinitionPostBackDataDialogBinding(){
this.logger=SystemLogger.getLogger("ViewDefinitionPostBackDataDialogBinding");
return this;
}
ViewDefinitionPostBackDataDialogBinding.prototype.toString=function(){
return "[ViewDefinitionPostBackDataDialogBinding]";
};
ViewDefinitionPostBackDataDialogBinding.prototype.fireCommand=function(){
var _93c=this.getProperty("dialoglabel");
var _93d=this.getProperty("providersearch");
var key=this.getProperty("providerkey");
var _93f=this.getProperty("handle");
if(_93f!=null){
var def=ViewDefinition.clone(_93f,"Generated.ViewDefinition.Handle."+KeyMaster.getUniqueKey());
if(_93c!=null){
if(def.argument==null){
def.argument={};
}
def.argument.label=_93c;
}
if(_93d!=null){
if(def.argument==null){
def.argument={};
}
if(def.argument.nodes==null){
def.argument.nodes=[];
}
def.argument.nodes[0].search=_93d;
}
if(key!=null){
if(def.argument==null){
def.argument={};
}
if(def.argument.nodes==null){
def.argument.nodes=[];
}
def.argument.nodes[0].key=key;
}
ViewDefinitionPostBackDataDialogBinding.superclass.fireCommand.call(this,def);
}else{
throw "Attribute \"handle\" required.";
}
};
ViewDefinitionPostBackDataDialogBinding.newInstance=function(_941){
var _942=DOMUtil.createElementNS(Constants.NS_UI,"ui:postbackdialog",_941);
return UserInterface.registerBinding(_942,ViewDefinitionPostBackDataDialogBinding);
};
NullPostBackDataDialogBinding.prototype=new DataBinding;
NullPostBackDataDialogBinding.prototype.constructor=NullPostBackDataDialogBinding;
NullPostBackDataDialogBinding.superclass=DataBinding.prototype;
NullPostBackDataDialogBinding.LABEL_NULL="(No selection)";
NullPostBackDataDialogBinding.LABEL_DEFAULT="Select";
NullPostBackDataDialogBinding.VALUE_NULL="null";
NullPostBackDataDialogBinding.VALUE_SELECTED="selected";
NullPostBackDataDialogBinding.ACTION_COMMAND="nullpostbackdatadialog command";
function NullPostBackDataDialogBinding(){
this.logger=SystemLogger.getLogger("NullPostBackDataDialogBinding");
this._datathing=null;
this._selector=null;
return this;
}
NullPostBackDataDialogBinding.prototype.toString=function(){
return "[NullPostBackDataDialogBinding]";
};
NullPostBackDataDialogBinding.prototype.onBindingAttach=function(){
NullPostBackDataDialogBinding.superclass.onBindingAttach.call(this);
this.propertyMethodMap["label"]=this.setLabel;
var self=this;
this.propertyMethodMap["value"]=function(_944){
self._datathing.setValue(_944);
};
this.propertyMethodMap["selectorlabel"]=function(){
if(Application.isDeveloperMode){
alert("Selectorlabel property not supported yet!");
}
};
this.addActionListener(PageBinding.ACTION_DOPOSTBACK);
this._buildDataDialog();
this._buildSelector();
};
NullPostBackDataDialogBinding.prototype._buildDataDialog=function(){
this._datathing=this.add(ViewDefinitionPostBackDataDialogBinding.newInstance(this.bindingDocument));
new List(["callbackid","handle","name","providersearch","providerkey","value"]).each(function(prop){
this._datathing.setProperty(prop,this.getProperty(prop));
this.setProperty(prop,null);
},this);
var self=this;
this._datathing.ondialogcancel=function(){
var _947=self.getValue();
if(_947==""||_947==null){
self._selector.setLabel(NullPostBackDataDialogBinding.LABEL_NULL);
}else{
self._selector.setLabel(self.getLabel());
}
};
this._datathing.hide();
this._datathing.attach();
};
NullPostBackDataDialogBinding.prototype._buildSelector=function(){
this._selector=this.add(NullPostBackDataDialogSelectorBinding.newInstance(this.bindingDocument));
var _948=this.getProperty("value");
var _949=this.getProperty("selectorlabel");
if(_949==null){
_949=NullPostBackDataDialogBinding.LABEL_DEFAULT;
}
var list=new List();
list.add(new SelectorBindingSelection(NullPostBackDataDialogBinding.LABEL_NULL,NullPostBackDataDialogBinding.VALUE_NULL,_948==null));
list.add(new SelectorBindingSelection(_949+LabelBinding.DIALOG_INDECATOR_SUFFIX,NullPostBackDataDialogBinding.VALUE_SELECTED,_948!=null,new ImageProfile({image:"${icon:popup}"})));
this._selector.master=this;
this._selector.attach();
this._selector.populateFromList(list);
var _948=this.getValue();
if(_948==""||_948==null){
this._selector.setLabel(NullPostBackDataDialogBinding.LABEL_NULL);
}else{
this._selector.setLabel(this.getLabel());
}
};
NullPostBackDataDialogBinding.prototype.handleAction=function(_94b){
NullPostBackDataDialogBinding.superclass.handleAction.call(this,_94b);
switch(_94b.type){
case PageBinding.ACTION_DOPOSTBACK:
if(_94b.target==this._datathing){
var _94c=this.getProperty("label");
this._selector.setLabel("");
this.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
var self=this;
setTimeout(function(){
if(self.getProperty("label")==_94c){
self._selector.setLabel(_94c);
}
},500);
_94b.consume();
}
break;
}
};
NullPostBackDataDialogBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
NullPostBackDataDialogBinding.prototype.setLabel=function(_94e){
this.setProperty("label",_94e);
if(this._selector!=null){
this._selector.setLabel(_94e);
}
};
NullPostBackDataDialogBinding.prototype.getValue=function(){
return this._datathing.getValue();
};
NullPostBackDataDialogBinding.prototype.setValue=function(_94f){
this._datathing.setValue(_94f);
this.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
};
NullPostBackDataDialogBinding.prototype.action=function(){
this._datathing.fireCommand();
};
NullPostBackDataDialogBinding.prototype.validate=function(){
return true;
};
NullPostBackDataDialogBinding.prototype.manifest=function(){
};
NullPostBackDataDialogBinding.prototype.getResult=function(){
};
NullPostBackDataDialogBinding.prototype.setResult=function(){
};
NullPostBackDataDialogSelectorBinding.prototype=new SelectorBinding;
NullPostBackDataDialogSelectorBinding.prototype.constructor=NullPostBackDataDialogSelectorBinding;
NullPostBackDataDialogSelectorBinding.superclass=SelectorBinding.prototype;
function NullPostBackDataDialogSelectorBinding(){
this.logger=SystemLogger.getLogger("NullPostBackDataDialogSelectorBinding");
this.master=null;
return this;
}
NullPostBackDataDialogSelectorBinding.prototype.toString=function(){
return "[NullPostBackDataDialogSelectorBinding]";
};
NullPostBackDataDialogSelectorBinding.prototype.select=function(_950,_951){
if(NullPostBackDataDialogSelectorBinding.superclass.select.call(this,_950,_951)){
this._buttonBinding.setImage(null);
this._updateImageLayout();
if(this._selectionValue==NullPostBackDataDialogBinding.VALUE_SELECTED){
if(this.master.getValue()!=null){
}
}
}
};
NullPostBackDataDialogSelectorBinding.prototype.setLabel=function(_952){
this._buttonBinding.setLabel(_952);
};
NullPostBackDataDialogSelectorBinding.prototype.setToolTip=function(_953){
this._buttonBinding.setToolTip(_953);
};
NullPostBackDataDialogSelectorBinding.prototype.handleAction=function(_954){
NullPostBackDataDialogSelectorBinding.superclass.handleAction.call(this,_954);
switch(_954.type){
case MenuItemBinding.ACTION_COMMAND:
var _955=_954.target;
var _956=this.master;
if(_955.selectionValue==NullPostBackDataDialogBinding.VALUE_SELECTED){
this.setLabel(_955.getLabel());
setTimeout(function(){
_956.action();
},0);
}else{
this.master.setValue("");
}
_956.dirty();
break;
}
};
NullPostBackDataDialogSelectorBinding.prototype.manifest=function(){
};
NullPostBackDataDialogSelectorBinding.newInstance=function(_957){
var _958=DOMUtil.createElementNS(Constants.NS_UI,"ui:selector",_957);
return UserInterface.registerBinding(_958,NullPostBackDataDialogSelectorBinding);
};
MultiSelectorBinding.prototype=new DataBinding;
MultiSelectorBinding.prototype.constructor=MultiSelectorBinding;
MultiSelectorBinding.superclass=DataBinding.prototype;
MultiSelectorBinding.DISPLAY_SELECTED="selected";
MultiSelectorBinding.DISPLAY_UNSELECTED="unselected";
MultiSelectorBinding.ACTION_COMMAND="multiselector command";
MultiSelectorBinding.ACTION_SELECTIONCHANGED="multiselector selection changed";
function MultiSelectorBinding(){
this.logger=SystemLogger.getLogger("MultiSelectorBinding");
this.isEditable=true;
this.isSelectable=false;
this._dataDialogBinding=null;
this.selections=null;
this._selectionMap=null;
this._display=MultiSelectorBinding.DISPLAY_SELECTED;
this._lastSelectedElement=null;
this.crawlerFilters=new List([DocumentCrawler.ID,FocusCrawler.ID]);
}
MultiSelectorBinding.prototype.toString=function(){
return "[MultiSelectorBinding]";
};
MultiSelectorBinding.prototype.onBindingAttach=function(){
MultiSelectorBinding.superclass.onBindingAttach.call(this);
this.selections=this._getSelectionsList();
this.addActionListener(DataDialogBinding.ACTION_COMMAND);
this.addActionListener(MultiSelectorDataDialogBinding.ACTION_RESULT);
this.addEventListener(DOMEvents.MOUSEDOWN);
this._buildDOMContent();
this._parseDOMProperties();
this.populateFromList(this.selections);
var _959=this._dataDialogBinding;
if(_959!=null){
DOMEvents.addEventListener(this.shadowTree.box,DOMEvents.DOUBLECLICK,{handleEvent:function(){
_959.fireCommand();
}});
}
};
MultiSelectorBinding.prototype._buildDOMContent=function(){
this.shadowTree.box=DOMUtil.createElementNS(Constants.NS_UI,"ui:box",this.bindingDocument);
this.bindingElement.appendChild(this.shadowTree.box);
};
MultiSelectorBinding.prototype._parseDOMProperties=function(){
var _95a=this.getProperty("editable");
var _95b=this.getProperty("selectable");
var _95c=this.getProperty("display");
if(_95a!=false){
this._buildEditorButton();
}else{
this.isEditable=false;
}
if(_95b){
this.isSelectable=true;
this._selectionMap=new Map();
}
if(_95c){
this._display=_95c;
}
};
MultiSelectorBinding.prototype._buildEditorButton=function(){
if(this.isEditable){
var _95d=MultiSelectorDataDialogBinding.newInstance(this.bindingDocument);
_95d.selections=this.selections;
this.add(_95d);
_95d.attach();
this._dataDialogBinding=_95d;
this.shadowTree.datadialog=_95d;
}
};
MultiSelectorBinding.prototype.populateFromList=function(list){
list.reset();
var _95f=false;
this.shadowTree.box.innerHTML="";
while(list.hasNext()){
var _960=list.getNext();
switch(this._display){
case MultiSelectorBinding.DISPLAY_SELECTED:
_95f=_960.isSelected;
break;
case MultiSelectorBinding.DISPLAY_UNSELECTED:
_95f=_960.isSelected!=true;
break;
}
if(_95f){
this.shadowTree.box.appendChild(this._getElementForSelection(_960));
}
}
this.selections=list;
if(this._dataDialogBinding){
this._dataDialogBinding.selections=this.selections;
}
};
MultiSelectorBinding.prototype.cumulateFromList=function(list,_962){
var box=this.shadowTree.box;
var _964=false;
if(list.hasEntries()){
list.reverse().reset();
while(list.hasNext()){
var _965=list.getNext();
if(_962){
_965.isSelected=this._display==MultiSelectorBinding.DISPLAY_SELECTED;
_964=true;
}else{
switch(this._display){
case MultiSelectorBinding.DISPLAY_SELECTED:
_964=_965.isSelected;
break;
case MultiSelectorBinding.DISPLAY_UNSELECTED:
_964=_965.isSelected!=true;
break;
}
}
if(_964){
var _966=this._getElementForSelection(_965);
box.insertBefore(_966,box.firstChild);
CSSUtil.attachClassName(_966,"selected");
this._selectionMap.set(_965.value,_966);
}
}
this.dispatchAction(MultiSelectorBinding.ACTION_SELECTIONCHANGED);
}
};
MultiSelectorBinding.prototype._getElementForSelection=function(_967){
var _968=DOMUtil.createElementNS(Constants.NS_XHTML,"div",this.bindingDocument);
_968.appendChild(this.bindingDocument.createTextNode(_967.label));
_968.setAttribute("label",_967.label);
_968.setAttribute("value",_967.value);
return _968;
};
MultiSelectorBinding.prototype.hasHighlight=function(){
return this._selectionMap&&this._selectionMap.hasEntries();
};
MultiSelectorBinding.prototype.handleEvent=function(e){
MultiSelectorBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.MOUSEDOWN:
if(!this.isFocused){
this.focus();
}
if(this.isSelectable){
var _96a=DOMEvents.getTarget(e);
var _96b=DOMUtil.getLocalName(_96a);
if(_96b=="div"){
this._handleMouseDown(_96a);
this.dispatchAction(MultiSelectorBinding.ACTION_SELECTIONCHANGED);
}
}
break;
}
};
MultiSelectorBinding.prototype._handleMouseDown=function(_96c){
if(Keyboard.isShiftPressed&&this._lastSelectedElement){
var _96d=this._getElements();
var _96e=_96c.getAttribute("value");
var _96f=this._lastSelectedElement.getAttribute("value");
var _970=false;
while(_96d.hasNext()){
var el=_96d.getNext();
switch(el.getAttribute("value")){
case _96e:
case _96f:
_970=!_970;
break;
}
if(_970){
this._hilite(el);
}else{
this._unhilite(el);
}
this._hilite(this._lastSelectedElement);
this._hilite(_96c);
}
}else{
if(Keyboard.isControlPressed&&this._isHilited(_96c)){
this._unhilite(_96c);
}else{
this._hilite(_96c);
}
if(!Keyboard.isControlPressed){
var self=this;
this._getElements().each(function(el){
if(el!=_96c){
self._unhilite(el);
}
});
}
}
this._lastSelectedElement=_96c;
};
MultiSelectorBinding.prototype._hilite=function(_974){
var _975=_974.getAttribute("value");
if(!this._selectionMap.has(_975)){
CSSUtil.attachClassName(_974,"selected");
this._selectionMap.set(_975,_974);
}
};
MultiSelectorBinding.prototype._unhilite=function(_976){
var _977=_976.getAttribute("value");
if(this._selectionMap.has(_977)){
CSSUtil.detachClassName(_976,"selected");
this._selectionMap.del(_977);
}
};
MultiSelectorBinding.prototype._isHilited=function(_978){
return CSSUtil.hasClassName(_978,"selected");
};
MultiSelectorBinding.prototype.handleAction=function(_979){
MultiSelectorBinding.superclass.handleAction.call(this,_979);
var _97a=_979.target;
switch(_979.type){
case DataDialogBinding.ACTION_COMMAND:
if(_97a==this._dataDialogBinding){
if(!this.isFocused){
this.focus();
}
this.dispatchAction(MultiSelectorBinding.ACTION_COMMAND);
_979.consume();
}
break;
case MultiSelectorDataDialogBinding.ACTION_RESULT:
this.populateFromList(_97a.result);
this.dirty();
_97a.result=null;
_979.consume();
break;
}
};
MultiSelectorBinding.prototype.extractSelected=function(){
var _97b=null;
if(this.isSelectable){
_97b=new List();
if(this._selectionMap&&this._selectionMap.hasEntries()){
var self=this;
this._getElements().each(function(_97d){
if(self._isHilited(_97d)){
_97d.parentNode.removeChild(_97d);
_97b.add(new SelectorBindingSelection(_97d.getAttribute("label"),_97d.getAttribute("value"),true));
}
});
this._selectionMap=new Map();
this.dispatchAction(MultiSelectorBinding.ACTION_SELECTIONCHANGED);
}
}
return _97b;
};
MultiSelectorBinding.prototype.reposition=function(isUp){
var _97f=this._getElements();
if(!isUp){
_97f.reverse();
}
var _980=true;
while(_980&&_97f.hasNext()){
var _981=_97f.getNext();
if(this._isHilited(_981)){
switch(isUp){
case true:
if(_981.previousSibling){
_981.parentNode.insertBefore(_981,_981.previousSibling);
}else{
_980=false;
}
break;
case false:
if(_981.nextSibling){
_981.parentNode.insertBefore(_981,_981.nextSibling.nextSibling);
}else{
_980=false;
}
break;
}
}
}
};
MultiSelectorBinding.prototype.toSelectionList=function(){
var _982=new List();
var _983=this._display==MultiSelectorBinding.DISPLAY_SELECTED;
var self=this;
this._getElements().each(function(_985){
var _986=new SelectorBindingSelection(_985.getAttribute("label"),_985.getAttribute("value"),_983);
_986.isHighlighted=self._isHilited(_985);
_982.add(_986);
});
return _982;
};
MultiSelectorBinding.prototype._getElements=function(){
if(!this.shadowTree.box){
return new List();
}
return new List(DOMUtil.getElementsByTagName(this.shadowTree.box,"div"));
};
MultiSelectorBinding.prototype._getSelectionsList=SelectorBinding.prototype._getSelectionsList;
MultiSelectorBinding.prototype.validate=function(){
return true;
};
MultiSelectorBinding.prototype.manifest=function(){
var _987=new List(DOMUtil.getElementsByTagName(this.bindingElement,"input"));
if(_987.hasEntries()){
_987.each(function(_988){
_988.parentNode.removeChild(_988);
});
}
this.selections.reset();
while(this.selections.hasNext()){
var _989=this.selections.getNext();
if(_989.isSelected){
var _98a=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_98a.name=this._name;
_98a.value=_989.value;
this.bindingElement.appendChild(_98a);
}
}
};
MultiSelectorBinding.prototype.getValue=function(){
return "HEJ!";
};
MultiSelectorBinding.prototype.setValue=function(_98b){
alert(_98b);
};
MultiSelectorBinding.prototype.getResult=function(){
alert("TODO: MultiSelectorBinding#getResult");
return new Array();
};
MultiSelectorBinding.prototype.setResult=function(_98c){
alert("TODO: MultiSelectorBinding#setResult");
};
HTMLDataDialogBinding.prototype=new PostBackDataDialogBinding;
HTMLDataDialogBinding.prototype.constructor=HTMLDataDialogBinding;
HTMLDataDialogBinding.superclass=PostBackDataDialogBinding.prototype;
function HTMLDataDialogBinding(){
this.logger=SystemLogger.getLogger("HTMLDataDialogBinding");
}
HTMLDataDialogBinding.prototype.toString=function(){
return "[HTMLDataDialogBinding]";
};
HTMLDataDialogBinding.prototype.onBindingAttach=function(){
if(this.getProperty("label")==null){
this.setProperty("label","Edit HTML");
}
HTMLDataDialogBinding.superclass.onBindingAttach.call(this);
};
HTMLDataDialogBinding.prototype.fireCommand=function(){
this.dispatchAction(DataDialogBinding.ACTION_COMMAND);
var _98d={label:DataBinding.getAssociatedLabel(this),value:decodeURIComponent(this.getValue()),configuration:{"formattingconfiguration":this.getProperty("formattingconfiguration"),"elementclassconfiguration":this.getProperty("elementclassconfiguration"),"configurationstylesheet":this.getProperty("configurationstylesheet"),"presentationstylesheet":this.getProperty("presentationstylesheet"),"embedablefieldstypenames":this.getProperty("embedablefieldstypenames")}};
var _98e=ViewDefinitions["Composite.Management.VisualEditorDialog"];
_98e.handler=this._handler;
_98e.argument=_98d;
StageBinding.presentViewDefinition(_98e);
this._releaseKeyboard();
};
MultiSelectorDataDialogBinding.prototype=new DataDialogBinding;
MultiSelectorDataDialogBinding.prototype.constructor=MultiSelectorDataDialogBinding;
MultiSelectorDataDialogBinding.superclass=DataDialogBinding.prototype;
MultiSelectorDataDialogBinding.ACTION_RESULT="multiselectordatadialog result";
function MultiSelectorDataDialogBinding(){
this.logger=SystemLogger.getLogger("MultiSelectorDataDialogBinding");
this._dialogViewHandle="Composite.Management.MultiSelectorDialog";
this.isFocusable=false;
this.selections=null;
return this;
}
MultiSelectorDataDialogBinding.prototype.toString=function(){
return "[MultiSelectorDataDialogBinding]";
};
MultiSelectorDataDialogBinding.prototype.onBindingAttach=function(){
this.setProperty("label",StringBundle.getString("ui","Website.Misc.MultiSelector.LabelEditSelections"));
MultiSelectorDataDialogBinding.superclass.onBindingAttach.call(this);
};
MultiSelectorDataDialogBinding.prototype.fireCommand=function(){
this.dispatchAction(DataDialogBinding.ACTION_COMMAND);
var _98f={label:DataBinding.getAssociatedLabel(this),selections:this.selections};
var self=this;
var _991={handleDialogResponse:function(_992,_993){
if(_992==Dialog.RESPONSE_ACCEPT){
self.result=_993;
self.dispatchAction(MultiSelectorDataDialogBinding.ACTION_RESULT);
}
}};
var _994=ViewDefinitions[this._dialogViewHandle];
_994.handler=_991;
_994.argument=_98f;
StageBinding.presentViewDefinition(_994);
};
MultiSelectorDataDialogBinding.newInstance=function(_995){
var _996=DOMUtil.createElementNS(Constants.NS_UI,"ui:datadialog",_995);
return UserInterface.registerBinding(_996,MultiSelectorDataDialogBinding);
};
LazyBindingSetBinding.prototype=new Binding;
LazyBindingSetBinding.prototype.constructor=LazyBindingSetBinding;
LazyBindingSetBinding.superclass=Binding.prototype;
function LazyBindingSetBinding(){
this.logger=SystemLogger.getLogger("LazyBindingSetBinding");
}
LazyBindingSetBinding.prototype.toString=function(){
return "[LazyBindingSetBinding]";
};
LazyBindingBinding.prototype=new DataBinding;
LazyBindingBinding.prototype.constructor=LazyBindingBinding;
LazyBindingBinding.superclass=DataBinding.prototype;
LazyBindingBinding.ID_APPENDIX="lazybinding";
LazyBindingBinding.wakeUp=function(_997){
var id=_997.bindingElement.id+LazyBindingBinding.ID_APPENDIX;
var _999=_997.bindingDocument.getElementById(id);
if(_999!=null){
var _99a=UserInterface.getBinding(_999);
_99a.setResult(true);
}
};
function LazyBindingBinding(){
this.logger=SystemLogger.getLogger("LazyBindingBinding");
this.isFocusable=false;
this._isLazy=false;
}
LazyBindingBinding.prototype.toString=function(){
return "[LazyBindingBinding]";
};
LazyBindingBinding.prototype.onBindingRegister=function(){
LazyBindingBinding.superclass.onBindingRegister.call(this);
var id=this.getProperty("bindingid");
if(id!=null){
var _99c=this.bindingDocument.getElementById(id);
if(_99c!=null){
var _99d=UserInterface.getBinding(_99c);
if(_99d&&!_99d.isAttached){
_99d.isLazy=true;
}else{
_99c.setAttribute("lazy",true);
}
}
}
};
LazyBindingBinding.prototype.validate=function(){
return true;
};
LazyBindingBinding.prototype.manifest=function(){
if(this.isAttached){
if(this.shadowTree.input==null){
this.shadowTree.input=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
this.shadowTree.input.type="hidden";
this.shadowTree.input.name=this.getName();
this.bindingElement.appendChild(this.shadowTree.input);
}
this.shadowTree.input.value=this.getValue();
}
};
LazyBindingBinding.prototype.getValue=function(){
return String(this._isLazy);
};
LazyBindingBinding.prototype.setValue=function(){
throw "Not implemented";
};
LazyBindingBinding.prototype.getResult=function(){
return this._isLazy;
};
LazyBindingBinding.prototype.setResult=function(_99e){
this._isLazy=_99e;
};
EditorDataBinding.prototype=new WindowBinding;
EditorDataBinding.prototype.constructor=EditorDataBinding;
EditorDataBinding.superclass=WindowBinding.prototype;
function EditorDataBinding(){
this.logger=SystemLogger.getLogger("EditorDataBinding");
this.isFocusable=false;
this._url=WindowBinding.DEFAULT_URL;
this.isDirty=false;
return this;
}
EditorDataBinding.prototype.toString=function(){
return "[EditorDataBinding]";
};
EditorDataBinding.prototype.onBindingRegister=function(){
EditorDataBinding.superclass.onBindingRegister.call(this);
DataBinding.prototype.onBindingRegister.call(this);
this._coverBinding=this.add(CoverBinding.newInstance(this.bindingDocument)).attach();
var url=this._url;
var _9a0=this.getProperty("stateprovider");
var _9a1=this.getProperty("handle");
if(_9a0!=null&&_9a1!=null){
url=url.replace("${stateprovider}",_9a0).replace("${handle}",_9a1);
}else{
url=url.split("?")[0];
}
this.logger.debug("Loading URL: "+url);
this.setURL(url);
};
EditorDataBinding.prototype.onBindingAttach=function(){
EditorDataBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_DIRTY);
Application.lock(this);
};
EditorDataBinding.prototype._onPageInitialize=function(_9a2){
EditorDataBinding.superclass._onPageInitialize.call(this,_9a2);
if(this._pageBinding!=null){
Application.unlock(this);
this._coverBinding.hide();
}
};
EditorDataBinding.prototype.setName=DataBinding.prototype.setName;
EditorDataBinding.prototype.validate=function(){
return this._pageBinding.validateAllDataBindings();
};
EditorDataBinding.prototype.handleAction=function(_9a3){
EditorDataBinding.superclass.handleAction.call(this,_9a3);
switch(_9a3.type){
case Binding.ACTION_DIRTY:
if(_9a3.target!=this){
if(!this.isDirty){
this.dirty();
}
_9a3.consume();
}
break;
}
};
EditorDataBinding.prototype.manifest=function(){
};
EditorDataBinding.prototype.dirty=function(){
if(!this.isDirty){
this.isDirty=true;
this.dispatchAction(Binding.ACTION_DIRTY);
}
};
EditorDataBinding.prototype.clean=function(){
this._pageBinding.cleanAllDataBindings();
DataBinding.prototype.clean.call(this);
};
EditorDataBinding.prototype.focus=function(){
};
EditorDataBinding.prototype.blur=function(){
};
EditorDataBinding.prototype.getName=function(){
};
EditorDataBinding.prototype.getValue=function(){
};
EditorDataBinding.prototype.setValue=function(_9a4){
};
EditorDataBinding.prototype.getResult=function(){
return null;
};
EditorDataBinding.prototype.setResult=function(_9a5){
};
FunctionEditorDataBinding.prototype=new EditorDataBinding;
FunctionEditorDataBinding.prototype.constructor=FunctionEditorDataBinding;
FunctionEditorDataBinding.superclass=EditorDataBinding.prototype;
function FunctionEditorDataBinding(){
this.logger=SystemLogger.getLogger("FunctionEditorDataBinding");
this._url="${root}/content/misc/editors/functioncalleditor/functioncalleditor.aspx?StateProvider=${stateprovider}&Handle=${handle}";
return this;
}
FunctionEditorDataBinding.prototype.toString=function(){
return "[FunctionEditorDataBinding]";
};
ParameterEditorDataBinding.prototype=new EditorDataBinding;
ParameterEditorDataBinding.prototype.constructor=ParameterEditorDataBinding;
ParameterEditorDataBinding.superclass=EditorDataBinding.prototype;
function ParameterEditorDataBinding(){
this.logger=SystemLogger.getLogger("ParameterEditorDataBinding");
this._url="${root}/controls/FormsControls/FormUiControlTemplates/DeveloperTools/FunctionParameterEditor.aspx?StateProvider=${stateprovider}&handle=${handle}";
return this;
}
ParameterEditorDataBinding.prototype.toString=function(){
return "[ParameterEditorDataBinding]";
};
ParameterEditorDataBinding.prototype.getValue=function(){
return Math.random();
};
FilePickerBinding.prototype=new DataBinding;
FilePickerBinding.prototype.constructor=FilePickerBinding;
FilePickerBinding.superclass=DataBinding.prototype;
function FilePickerBinding(){
this.logger=SystemLogger.getLogger("FilePickerBinding");
this.isReadOnly=true;
this._isValid=true;
return this;
}
FilePickerBinding.prototype.toString=function(){
return "[FilePickerBinding]";
};
FilePickerBinding.prototype.onBindingAttach=function(){
FilePickerBinding.superclass.onBindingAttach.call(this);
var real=this.getDescendantElementsByLocalName("input").getLast();
var fake=this.getDescendantBindingByLocalName("datainput");
fake.isFocusable=false;
var self=this;
real.onchange=function(){
var val=this.value;
if(val.indexOf("/")>-1){
val=val.substring(val.lastIndexOf("/")+1);
}else{
if(val.indexOf("\\")>-1){
val=val.substring(val.lastIndexOf("\\")+1);
}
}
fake.setValue(val);
self.dirty();
if(!self._isValid){
self.validate();
}
};
};
FilePickerBinding.prototype.validate=function(){
var _9aa=true;
if(this.getProperty("required")){
var fake=this.getDescendantBindingByLocalName("datainput");
_9aa=fake.getValue()!="";
}
if(!_9aa&&this._isValid){
this._isValid=false;
this.dispatchAction(Binding.ACTION_INVALID);
}else{
if(_9aa&&!this._isValid){
this.dispatchAction(Binding.ACTION_VALID);
}
}
return _9aa;
};
FilePickerBinding.prototype.focus=function(){
FilePickerBinding.superclass.focus.call(this);
if(this.isFocused){
var fake=this.getDescendantBindingByLocalName("datainput");
if(fake!=null){
fake.attachClassName(DataBinding.CLASSNAME_FOCUSED);
}
}
};
FilePickerBinding.prototype.blur=function(){
FilePickerBinding.superclass.blur.call(this);
if(!this.isFocused){
var fake=this.getDescendantBindingByLocalName("datainput");
if(fake!=null){
fake.detachClassName(DataBinding.CLASSNAME_FOCUSED);
}
}
};
FilePickerBinding.prototype.manifest=function(){
};
FilePickerBinding.prototype.getValue=function(){
};
FilePickerBinding.prototype.setValue=function(){
};
FilePickerBinding.prototype.getResult=function(){
};
FilePickerBinding.prototype.setResult=function(){
};
RequestBinding.prototype=new Binding;
RequestBinding.prototype.constructor=RequestBinding;
RequestBinding.superclass=Binding.prototype;
RequestBinding.CALLBACK_ID="__REQUEST";
RequestBinding.INPUT_ID="__CONSOLEID";
function RequestBinding(){
this.logger=SystemLogger.getLogger("RequestBinding");
return this;
}
RequestBinding.prototype.toString=function(){
return "[RequestBinding]";
};
RequestBinding.prototype.onBindingAttach=function(){
RequestBinding.superclass.onBindingAttach.call(this);
this.setCallBackID(RequestBinding.CALLBACK_ID);
Binding.dotnetify(this);
var _9ae=this.bindingDocument.getElementById(RequestBinding.INPUT_ID);
if(_9ae!=null){
_9ae.value=Application.CONSOLE_ID;
}
};
RequestBinding.prototype.postback=function(_9af){
_9af=_9af!=null?_9af:EditorPageBinding.message;
this.shadowTree.dotnetinput.value=_9af;
this.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
};
FieldGroupBinding.prototype=new Binding;
FieldGroupBinding.prototype.constructor=FieldGroupBinding;
FieldGroupBinding.superclass=Binding.prototype;
FieldGroupBinding.CENTER="group-c";
FieldGroupBinding.NORTH="group-n";
FieldGroupBinding.SOUTH="group-s";
FieldGroupBinding.EAST="group-e";
FieldGroupBinding.WEST="group-w";
FieldGroupBinding.NORTHEAST="group-ne";
FieldGroupBinding.NORTHWEST="group-nw";
FieldGroupBinding.SOUTHEAST="group-se";
FieldGroupBinding.SOUTHWEST="group-sw";
FieldGroupBinding.ACTION_HIDE="fieldgrouphide";
FieldGroupBinding.CLASSNAME_NOLABEL="nolabel";
FieldGroupBinding.CLASSNAME_FIRST="first";
function FieldGroupBinding(){
this.logger=SystemLogger.getLogger("FieldGroupBinding");
}
FieldGroupBinding.prototype.toString=function(){
return "[FieldGroupBinding]";
};
FieldGroupBinding.prototype.onBindingRegister=function(){
FieldGroupBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["label"]=this.setLabel;
this._innerHTML();
this._buildDOMContent();
};
FieldGroupBinding.prototype._innerHTML=function(){
var _9b0=Templates.getTemplateElementText("fieldgroupmatrix.xml");
var _9b1=_9b0.replace("MARKUP",this.bindingElement.innerHTML);
try{
this.bindingElement.innerHTML=_9b1;
}
catch(exception1){
this.logger.error("Exeption in innerHTML!");
_9b1=_9b1.replace(/\&nbsp;/g,"");
this.bindingElement.innerHTML=_9b1;
}
var self=this;
var _9b3=DOMUtil.getElementsByTagName(this.bindingElement,"table").item(0);
new List(_9b3.rows).each(function(row){
new List(row.cells).each(function(cell){
self.shadowTree[cell.className]=cell;
});
});
};
FieldGroupBinding.prototype._buildDOMContent=function(){
var _9b6=this.getProperty("label");
if(_9b6){
this.setLabel(_9b6);
}else{
this.attachClassName(FieldGroupBinding.CLASSNAME_NOLABEL);
}
};
FieldGroupBinding.prototype.setLabel=function(_9b7){
this.setProperty("label",_9b7);
if(this.shadowTree.labelBinding==null){
var _9b8=LabelBinding.newInstance(this.bindingDocument);
var cell=this.shadowTree[FieldGroupBinding.NORTH];
_9b8.attachClassName("fieldgrouplabel");
cell.insertBefore(_9b8.bindingElement,cell.getElementsByTagName("div").item(1));
_9b8.attach();
this.shadowTree.labelBinding=_9b8;
}
this.shadowTree.labelBinding.setLabel(Resolver.resolve(_9b7));
};
FieldGroupBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
FieldGroupBinding.prototype.add=function(_9ba){
this.shadowTree[FieldGroupBinding.CENTER].appendChild(_9ba.bindingElement);
return _9ba;
};
FieldGroupBinding.prototype.addFirst=function(_9bb){
var _9bc=this.shadowTree[FieldGroupBinding.CENTER];
_9bc.insertBefore(_9bb.bindingElement,_9bc.firstChild);
return _9bb;
};
FieldBinding.prototype=new Binding;
FieldBinding.prototype.constructor=FieldBinding;
FieldBinding.superclass=Binding.prototype;
function FieldBinding(){
this.logger=SystemLogger.getLogger("FieldBinding");
this.bindingRelation=null;
return this;
}
FieldBinding.prototype.toString=function(){
return "[FieldBinding]";
};
FieldBinding.prototype.onBindingRegister=function(){
FieldBinding.superclass.onBindingRegister.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
var _9bd=this.getProperty("relation");
if(_9bd!=null){
this.bindingRelation=_9bd;
this.subscribe(BroadcastMessages.BINDING_RELATE);
this.hide();
}
};
FieldBinding.prototype.handleBroadcast=function(_9be,arg){
FieldBinding.superclass.handleBroadcast.call(this,_9be,arg);
switch(_9be){
case BroadcastMessages.BINDING_RELATE:
if(arg.relate==this.bindingRelation&&arg.origin==this.bindingDocument){
if(arg.result==true){
if(!this.isVisible){
this.show();
this.dispatchAction(Binding.ACTION_UPDATED);
}
}else{
if(this.isVisible){
this.hide();
this.dispatchAction(Binding.ACTION_UPDATED);
}
}
}
break;
}
};
FieldBinding.newInstance=function(_9c0){
var _9c1=DOMUtil.createElementNS(Constants.NS_UI,"ui:field",_9c0);
return UserInterface.registerBinding(_9c1,FieldBinding);
};
FieldsBinding.prototype=new Binding;
FieldsBinding.prototype.constructor=FieldsBinding;
FieldsBinding.superclass=Binding.prototype;
FieldsBinding.ACTION_LAYOUT_UPDATED="fieldslayoutupdated";
function FieldsBinding(){
this.logger=SystemLogger.getLogger("FieldsBinding");
this._invalidCount=0;
this._invalidFieldLabels=null;
this.crawlerFilters=new List([FlexBoxCrawler.ID,FitnessCrawler.ID]);
return this;
}
FieldsBinding.prototype.toString=function(){
return "[FieldsBinding]";
};
FieldsBinding.prototype.onBindingRegister=function(){
FieldsBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_INVALID);
this.addActionListener(Binding.ACTION_VALID);
this.addActionListener(FieldGroupBinding.ACTION_HIDE);
this._invalidFieldLabels=new Map();
};
FieldsBinding.prototype.onBindingInitialize=function(){
FieldsBinding.superclass.onBindingInitialize.call(this);
this.bindingElement.style.display="block";
var _9c2=this.getDescendantBindingByLocalName("fieldgroup");
if(_9c2!=null){
_9c2.attachClassName(FieldGroupBinding.CLASSNAME_FIRST);
}
};
FieldsBinding.prototype.onBindingDispose=function(){
FieldsBinding.superclass.onBindingDispose.call(this);
if(this._invalidCount>0){
this.dispatchAction(Binding.ACTION_VALID);
}
};
FieldsBinding.prototype.validate=function(){
var _9c3=true;
var _9c4=this.getDescendantBindingsByLocalName("*");
while(_9c4.hasNext()){
var _9c5=_9c4.getNext();
if(Interfaces.isImplemented(IData,_9c5)){
var _9c6=_9c5.validate();
if(_9c3&&!_9c6){
_9c3=false;
}
}
}
return _9c3;
};
FieldsBinding.prototype.handleAction=function(_9c7){
FieldsBinding.superclass.handleAction.call(this,_9c7);
var _9c8=_9c7.target;
if(_9c8!=this){
switch(_9c7.type){
case Binding.ACTION_INVALID:
var _9c9=DataBinding.getAssociatedLabel(_9c8);
if(_9c9){
this._invalidFieldLabels.set(_9c8.key,_9c9);
}
if(_9c8.error){
if(!_9c8.isInvalidBecauseRequired){
ErrorBinding.presentError({text:_9c8.error},_9c8);
}
}
if(this._invalidCount==0){
this.dispatchAction(Binding.ACTION_INVALID);
}
this._invalidCount++;
_9c7.consume();
break;
case Binding.ACTION_VALID:
if(this._invalidFieldLabels.has(_9c8.key)){
this._invalidFieldLabels.del(_9c8.key);
}
this._invalidCount--;
if(this._invalidCount==0){
this.dispatchAction(Binding.ACTION_VALID);
}
_9c7.consume();
break;
}
}
};
FieldsBinding.prototype.getInvalidLabels=function(){
var _9ca=null;
if(this._invalidFieldLabels.hasEntries()){
_9ca=this._invalidFieldLabels.toList();
}
return _9ca;
};
FieldsBinding.newInstance=function(_9cb){
var _9cc=DOMUtil.createElementNS(Constants.NS_UI,"ui:fields",_9cb);
return UserInterface.registerBinding(_9cc,FieldsBinding);
};
FieldDescBinding.prototype=new Binding;
FieldDescBinding.prototype.constructor=FieldDescBinding;
FieldDescBinding.superclass=Binding.prototype;
function FieldDescBinding(){
this.logger=SystemLogger.getLogger("FieldDescBinding");
return this;
}
FieldDescBinding.prototype.toString=function(){
return "[FieldDescBinding]";
};
FieldDescBinding.prototype.onBindingAttach=function(){
Binding.prototype.onBindingAttach.call(this);
this.buildDOMContent();
this.attachDOMEvents();
};
FieldDescBinding.prototype.buildDOMContent=function(){
var _9cd=this.getProperty("image");
if(_9cd){
this.setImage(_9cd);
}
var _9ce=this.getProperty("tooltip");
if(_9ce){
this.setToolTip(_9ce);
}
var _9cf=this.getProperty("label");
if(_9cf){
this.setLabel(_9cf);
}
};
FieldDescBinding.prototype.attachDOMEvents=function(){
this.addEventListener(DOMEvents.CLICK);
};
FieldDescBinding.prototype.handleEvent=function(e){
FieldDescBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.CLICK:
var _9d1=this.getAncestorBindingByLocalName("field");
if(_9d1){
var _9d2=true;
_9d1.getDescendantBindingsByLocalName("*").each(function(_9d3){
if(Interfaces.isImplemented(IData,_9d3)){
_9d3.focus();
_9d2=false;
}
return _9d2;
});
}
break;
}
};
FieldDescBinding.prototype.setLabel=function(_9d4){
this.setProperty("label",_9d4);
if(this.isAttached){
this.bindingElement.innerHTML=Resolver.resolve(_9d4);
}
};
FieldDescBinding.prototype.getLabel=function(){
var _9d5=this.getProperty("label");
if(!_9d5){
var node=this.bindingElement.firstChild;
if(node&&node.nodeType==Node.TEXT_NODE){
_9d5=node.data;
}
}
return _9d5;
};
FieldDescBinding.prototype.setImage=function(_9d7){
this.setProperty("image",_9d7);
if(this.isAttached){
throw "FieldDescBinding: Images not suppoerted!";
}
};
FieldDescBinding.prototype.setToolTip=function(_9d8){
this.setProperty("tooltip",_9d8);
if(this.isAttached){
this.bindingElement.title=_9d8;
}
};
FieldDescBinding.newInstance=function(_9d9){
var _9da=DOMUtil.createElementNS(Constants.NS_UI,"ui:fielddesc",_9d9);
return UserInterface.registerBinding(_9da,FieldDescBinding);
};
FieldDataBinding.prototype=new Binding;
FieldDataBinding.prototype.constructor=FieldDataBinding;
FieldDataBinding.superclass=Binding.prototype;
function FieldDataBinding(){
this.logger=SystemLogger.getLogger("FieldDataBinding");
return this;
}
FieldDataBinding.prototype.toString=function(){
return "[FieldDataBinding]";
};
FieldDataBinding.newInstance=function(_9db){
var _9dc=DOMUtil.createElementNS(Constants.NS_UI,"ui:fielddata",_9db);
return UserInterface.registerBinding(_9dc,FieldDataBinding);
};
FieldHelpBinding.prototype=new Binding;
FieldHelpBinding.prototype.constructor=FieldHelpBinding;
FieldHelpBinding.superclass=Binding.prototype;
FieldHelpBinding.INDICATOR_IMAGE="${skin}/fields/fieldhelpindicator.png";
function FieldHelpBinding(){
this.logger=SystemLogger.getLogger("FieldHelpBinding");
return this;
}
FieldHelpBinding.prototype.toString=function(){
return "[FieldHelpBinding]";
};
FieldHelpBinding.prototype.onBindingAttach=function(){
FieldHelpBinding.superclass.onBindingAttach.call(this);
this.buildPopupBinding();
this.buildPopupButton();
};
FieldHelpBinding.prototype.onBindingDispose=function(){
FieldHelpBinding.superclass.onBindingDispose.call(this);
var _9dd=this._fieldHelpPopupBinding;
if(_9dd){
_9dd.dispose();
}
};
FieldHelpBinding.prototype.buildPopupBinding=function(){
var _9de=app.bindingMap.fieldhelpopupset;
var doc=_9de.bindingDocument;
var _9e0=_9de.add(PopupBinding.newInstance(doc));
var _9e1=_9e0.add(PopupBodyBinding.newInstance(doc));
_9e0.position=PopupBinding.POSITION_RIGHT;
_9e0.attachClassName("fieldhelppopup");
if(this.bindingElement.hasChildNodes()){
_9e1.bindingElement.innerHTML=this.bindingElement.innerHTML;
}else{
var _9e2=this.getProperty("label");
if(_9e2){
_9e1.bindingElement.innerHTML=Resolver.resolve(_9e2);
}
}
this.bindingElement.innerHTML="";
this._fieldHelpPopupBinding=_9e0;
};
FieldHelpBinding.prototype.buildPopupButton=function(){
var _9e3=this.getAncestorBindingByLocalName("field");
if(_9e3){
_9e3.attachClassName("fieldhelp");
var _9e4=ClickButtonBinding.newInstance(this.bindingDocument);
_9e4.attachClassName("fieldhelp");
_9e4.setImage(FieldHelpBinding.INDICATOR_IMAGE);
this.add(_9e4);
_9e4.attach();
var self=this;
_9e4.oncommand=function(){
self.attachPopupBinding();
};
_9e4.setPopup(this._fieldHelpPopupBinding);
this._fieldHelpButton=_9e4;
}
};
FieldHelpBinding.prototype.attachPopupBinding=function(){
var _9e6=this._fieldHelpPopupBinding;
if(_9e6&&!_9e6.isAttached){
_9e6.attachRecursive();
}
};
RadioDataGroupBinding.prototype=new RadioGroupBinding;
RadioDataGroupBinding.prototype.constructor=RadioDataGroupBinding;
RadioDataGroupBinding.superclass=RadioGroupBinding.prototype;
function RadioDataGroupBinding(){
this.logger=SystemLogger.getLogger("RadioDataGroupBinding");
this._name=null;
this.isDirty=false;
this._hasFocus=false;
this.isFocusable=true;
this.isFocused=false;
}
RadioDataGroupBinding.prototype.toString=function(){
return "[RadioDataGroupBinding]";
};
RadioDataGroupBinding.prototype.onBindingRegister=function(){
RadioDataGroupBinding.superclass.onBindingRegister.call(this);
DataBinding.prototype.onBindingRegister.call(this);
this.addActionListener(RadioGroupBinding.ACTION_SELECTIONCHANGED,this);
};
RadioDataGroupBinding.prototype.onBindingAttach=function(){
RadioDataGroupBinding.superclass.onBindingAttach.call(this);
this.bindingElement.tabIndex=0;
if(Client.isExplorer){
this.bindingElement.hideFocus=true;
}
var self=this;
DOMEvents.addEventListener(this.bindingElement,DOMEvents.FOCUS,{handleEvent:function(){
self.focus(true);
}});
};
RadioDataGroupBinding.prototype.onBindingDispose=function(){
RadioDataGroupBinding.superclass.onBindingDispose.call(this);
DataBinding.prototype.onBindingDispose.call(this);
};
RadioDataGroupBinding.prototype.handleAction=function(_9e8){
RadioDataGroupBinding.superclass.handleAction.call(this,_9e8);
switch(_9e8.type){
case RadioGroupBinding.ACTION_SELECTIONCHANGED:
this.dirty();
break;
}
};
RadioDataGroupBinding.prototype.handleEvent=function(e){
RadioDataGroupBinding.superclass.handleEvent.call(this,e);
if(e.type==DOMEvents.KEYDOWN){
switch(e.keyCode){
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_UP:
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
Keyboard.keyArrow(e.keyCode);
break;
}
}
};
RadioDataGroupBinding.prototype.handleBroadcast=function(_9ea,arg){
RadioDataGroupBinding.superclass.handleBroadcast.call(this,_9ea,arg);
switch(_9ea){
case BroadcastMessages.KEY_ARROW:
var _9ec=null;
var next=null;
var _9ee=null;
switch(arg){
case KeyEventCodes.VK_DOWN:
case KeyEventCodes.VK_UP:
_9ee=this.getChildBindingsByLocalName("radio");
while(!_9ec&&_9ee.hasNext()){
var _9ef=_9ee.getNext();
if(_9ef.getProperty("ischecked")){
_9ec=_9ef;
}
}
break;
}
if(_9ec){
switch(arg){
case KeyEventCodes.VK_DOWN:
next=_9ee.getFollowing(_9ec);
while(next!=null&&next.isDisabled){
next=_9ee.getFollowing(next);
}
break;
case KeyEventCodes.VK_UP:
next=_9ee.getPreceding(_9ec);
while(next!=null&&next.isDisabled){
next=_9ee.getPreceding(next);
}
break;
}
}
if(next!=null){
this.setCheckedButtonBinding(next);
}
break;
}
};
RadioDataGroupBinding.prototype.setName=DataBinding.prototype.setName;
RadioDataGroupBinding.prototype.getName=DataBinding.prototype.getName;
RadioDataGroupBinding.prototype.dirty=DataBinding.prototype.dirty;
RadioDataGroupBinding.prototype.clean=DataBinding.prototype.clean;
RadioDataGroupBinding.prototype.focus=function(_9f0){
if(!this.isFocused){
DataBinding.prototype.focus.call(this);
if(this.isFocused){
if(!_9f0){
FocusBinding.focusElement(this.bindingElement);
}
this.addEventListener(DOMEvents.KEYDOWN);
this.subscribe(BroadcastMessages.KEY_ARROW);
}
}
};
RadioDataGroupBinding.prototype.blur=function(){
if(this.isFocused){
DataBinding.prototype.blur.call(this);
this.removeEventListener(DOMEvents.KEYDOWN);
this.unsubscribe(BroadcastMessages.KEY_ARROW);
}
};
RadioDataGroupBinding.prototype.validate=function(){
return true;
};
RadioDataGroupBinding.prototype.manifest=function(){
if(this.isAttached){
if(!this.shadowTree.input){
var _9f1=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_9f1.type="hidden";
_9f1.name=this._name;
this.bindingElement.appendChild(_9f1);
this.shadowTree.input=_9f1;
}
this.shadowTree.input.value=this.getValue();
}
};
RadioDataGroupBinding.prototype.getValue=function(){
var _9f2=null;
var _9f3=this.getChildBindingsByLocalName("radio");
while(!_9f2&&_9f3.hasNext()){
var _9f4=_9f3.getNext();
if(_9f4.isChecked){
_9f2=_9f4.getProperty("value");
}
}
return _9f2;
};
RadioDataGroupBinding.prototype.getResult=RadioDataGroupBinding.prototype.getValue;
RadioDataGroupBinding.prototype.setValue=function(_9f5){
};
RadioDataGroupBinding.prototype.setResult=function(_9f6){
};
RadioDataBinding.prototype=new Binding;
RadioDataBinding.prototype.constructor=RadioDataBinding;
RadioDataBinding.superclass=Binding.prototype;
function RadioDataBinding(){
this.logger=SystemLogger.getLogger("RadioDataBinding");
this.isRadioButton=false;
this.isChecked=false;
this._result=null;
this.bindingRelate=null;
return this;
}
RadioDataBinding.prototype.toString=function(){
return "[RadioDataBinding]";
};
RadioDataBinding.prototype.onBindingRegister=function(){
RadioDataBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["checked"]=function(_9f7){
if(_9f7!=this.isChecked){
this.setChecked(_9f7,true);
}
};
this.propertyMethodMap["checksum"]=function(){
var _9f8=this.getProperty("ischecked");
if(_9f8!=this.isChecked){
this.setChecked(_9f8,true);
}
};
this._buttonBinding=this.add(RadioButtonBinding.newInstance(this.bindingDocument));
this._hack();
if(this.getProperty("ischecked")==true){
this.check(true);
}
};
RadioDataBinding.prototype.onBindingAttach=function(){
RadioDataBinding.superclass.onBindingAttach.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
this._buttonBinding.attach();
this._buildDOMContent();
};
RadioDataBinding.prototype._buildDOMContent=function(){
var _9f9=this.getProperty("relate");
var _9fa=this.getProperty("oncommand");
var _9fb=this.getProperty("isdisabled");
if(_9f9){
this.bindingRelate=_9f9;
this.relate();
}
if(_9fa){
this.oncommand=function(){
Binding.evaluate(_9fa,this);
};
}
if(_9fb==true){
this.disable();
}
if(this.hasCallBackID()){
Binding.dotnetify(this);
}
this._buildLabelText();
};
RadioDataBinding.prototype.relate=function(){
if(this.bindingRelate!=null){
this.logger.warn("Relations not properly implemented!");
EventBroadcaster.broadcast(BroadcastMessages.BINDING_RELATE,{relate:this.bindingRelate,origin:this.bindingDocument,result:this.isChecked});
}
};
RadioDataBinding.prototype.getButton=function(){
return this._buttonBinding;
};
RadioDataBinding.prototype._hack=function(){
var self=this;
var _9fd=this.getCallBackID();
this._buttonBinding.check=function(_9fe){
RadioButtonBinding.prototype.check.call(this,_9fe);
self.setProperty("ischecked",true);
self.isChecked=true;
self.relate();
};
this._buttonBinding.uncheck=function(_9ff){
RadioButtonBinding.prototype.uncheck.call(this,_9ff);
self.deleteProperty("ischecked");
self.isChecked=false;
self.relate();
};
this._buttonBinding.oncommand=function(){
self.isChecked=this.isChecked;
self.relate();
if(Types.isFunction(self.oncommand)){
self.oncommand();
}
};
};
RadioDataBinding.prototype.setChecked=function(_a00,_a01){
this._buttonBinding.setChecked(_a00,_a01);
if(this.bindingRelate!=null){
this.relate();
}
this.setProperty("ischecked",_a00);
};
RadioDataBinding.prototype.check=function(_a02){
this.setChecked(true,_a02);
};
RadioDataBinding.prototype.uncheck=function(_a03){
this.setChecked(false,_a03);
};
RadioDataBinding.prototype.setDisabled=function(_a04){
if(_a04!=this.isDisabled){
this.isDisabled=_a04;
this._buttonBinding.setDisabled(_a04);
if(_a04){
this.attachClassName(DataBinding.CLASSNAME_DISABLED);
}else{
this.detachClassName(DataBinding.CLASSNAME_DISABLED);
}
}
};
RadioDataBinding.prototype.disable=function(){
if(!this.isDisabled){
this.setDisabled(true);
}
};
RadioDataBinding.prototype.enable=function(){
if(this.isDisabled){
this.setDisabled(false);
}
};
RadioDataBinding.prototype.handleEvent=function(e){
RadioDataBinding.superclass.handleEvent.call(this,e);
if(e.type==DOMEvents.CLICK){
var _a06=DOMEvents.getTarget(e);
switch(_a06){
case this.shadowTree.labelText:
if(!this.isChecked&&!this.isDisabled){
this.check();
}
break;
}
}
};
RadioDataBinding.prototype._buildLabelText=function(){
var _a07=this.getProperty("label");
if(_a07){
this.shadowTree.labelText=DOMUtil.createElementNS(Constants.NS_UI,"ui:datalabeltext",this.bindingDocument);
this.shadowTree.labelText.appendChild(this.bindingDocument.createTextNode(Resolver.resolve(_a07)));
DOMEvents.addEventListener(this.shadowTree.labelText,DOMEvents.CLICK,this);
this.bindingElement.appendChild(this.shadowTree.labelText);
}
};
RadioDataBinding.prototype.setLabel=function(_a08){
if(this.shadowTree.labelText!=null){
this.shadowTree.labelText.firstChild.data=_a08;
}
this.setProperty("label",_a08);
};
CheckBoxBinding.prototype=new Binding;
CheckBoxBinding.prototype.constructor=CheckBoxBinding;
CheckBoxBinding.superclass=Binding.prototype;
CheckBoxBinding.ACTION_COMMAND="checkbox command";
function CheckBoxBinding(){
this.logger=SystemLogger.getLogger("CheckBoxBinding");
this._buttonBinding=null;
this._name=null;
this.isDirty=false;
this.isChecked=false;
this._result=null;
this.isFocusable=true;
this.isFocused=false;
}
CheckBoxBinding.prototype.toString=function(){
return "[CheckBoxBinding]";
};
CheckBoxBinding.prototype.onBindingRegister=function(){
CheckBoxBinding.superclass.onBindingRegister.call(this);
DataBinding.prototype.onBindingRegister.call(this);
this._buildButtonBinding();
this.propertyMethodMap["checked"]=function(_a09){
if(_a09!=this.isChecked){
this.setChecked(_a09,true);
}
};
this.propertyMethodMap["checksum"]=function(){
var _a0a=this.getProperty("ischecked");
if(_a0a!=this.isChecked){
this.setChecked(_a0a,true);
}
};
};
CheckBoxBinding.prototype.onBindingAttach=function(){
CheckBoxBinding.superclass.onBindingAttach.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
this.bindingElement.tabIndex=0;
if(Client.isExplorer){
this.bindingElement.hideFocus=true;
}
this._buildDOMContent();
};
CheckBoxBinding.prototype.onBindingDispose=function(){
CheckBoxBinding.superclass.onBindingRegister.call(this);
DataBinding.prototype.onBindingDispose.call(this);
};
CheckBoxBinding.prototype._buildDOMContent=RadioDataBinding.prototype._buildDOMContent;
CheckBoxBinding.prototype.handleEvent=function(e){
CheckBoxBinding.superclass.handleEvent.call(this,e);
if(e.type==DOMEvents.CLICK){
var _a0c=DOMEvents.getTarget(e);
switch(_a0c){
case this.shadowTree.labelText:
this.setChecked(!this.isChecked);
break;
}
}
};
CheckBoxBinding.prototype.relate=RadioDataBinding.prototype.relate;
CheckBoxBinding.prototype.handleBroadcast=function(_a0d,arg){
CheckBoxBinding.superclass.handleBroadcast.call(this,_a0d,arg);
switch(_a0d){
case BroadcastMessages.KEY_SPACE:
this.setChecked(!this.isChecked);
break;
}
};
CheckBoxBinding.prototype._buildButtonBinding=function(){
this._buttonBinding=this.add(CheckButtonBinding.newInstance(this.bindingDocument));
var self=this;
this._buttonBinding.addActionListener(ButtonBinding.ACTION_COMMAND,{handleAction:function(_a10){
_a10.consume();
self.dispatchAction(CheckBoxBinding.ACTION_COMMAND);
}});
this._hack();
this._buttonBinding.attach();
if(this.getProperty("ischecked")){
this.check(true);
}
};
CheckBoxBinding.prototype._hack=function(){
var self=this;
var _a12=this.getCallBackID();
this._buttonBinding.check=function(_a13){
ButtonBinding.prototype.check.call(this,_a13);
self.setProperty("ischecked",true);
self.isChecked=true;
self.relate();
if(!_a13){
self.focus();
}
};
this._buttonBinding.uncheck=function(_a14){
ButtonBinding.prototype.uncheck.call(this,_a14);
self.setProperty("ischecked",false);
self.isChecked=false;
self.relate();
};
this._buttonBinding.oncommand=function(){
self.isChecked=this.isChecked;
self.focus();
self.relate();
if(self.oncommand){
self.oncommand();
}
self.dirty();
if(_a12!=null){
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
}
};
};
CheckBoxBinding.prototype.setChecked=RadioDataBinding.prototype.setChecked;
CheckBoxBinding.prototype.check=RadioDataBinding.prototype.check;
CheckBoxBinding.prototype.uncheck=RadioDataBinding.prototype.uncheck;
CheckBoxBinding.prototype._buildLabelText=RadioDataBinding.prototype._buildLabelText;
CheckBoxBinding.prototype.setLabel=RadioDataBinding.prototype.setLabel;
CheckBoxBinding.prototype.setName=DataBinding.prototype.setName;
CheckBoxBinding.prototype.getName=DataBinding.prototype.getName;
CheckBoxBinding.prototype.dirty=DataBinding.prototype.dirty;
CheckBoxBinding.prototype.clean=DataBinding.prototype.clean;
CheckBoxBinding.prototype.focus=function(){
if(!this.isFocused){
DataBinding.prototype.focus.call(this);
if(this.isFocused){
FocusBinding.focusElement(this.bindingElement);
this.subscribe(BroadcastMessages.KEY_SPACE);
}
}
};
CheckBoxBinding.prototype.blur=function(){
if(this.isFocused){
DataBinding.prototype.blur.call(this);
this.unsubscribe(BroadcastMessages.KEY_SPACE);
}
};
CheckBoxBinding.prototype.validate=function(){
var _a15=true;
var _a16=this.bindingElement.parentNode;
if(_a16){
var _a17=UserInterface.getBinding(_a16);
if(_a17&&_a17 instanceof CheckBoxGroupBinding){
if(_a17.isRequired){
if(_a17.isValid){
_a15=_a17.validate();
}else{
_a15=false;
}
}
}
}
return _a15;
};
CheckBoxBinding.prototype.manifest=function(){
if(this.isAttached){
switch(this.isChecked){
case true:
if(!this.shadowTree.input){
var _a18=DOMUtil.createElementNS(Constants.NS_XHTML,"input",this.bindingDocument);
_a18.type="hidden";
_a18.name=this._name;
_a18.style.display="none";
this.bindingElement.appendChild(_a18);
this.shadowTree.input=_a18;
}
this.shadowTree.input.value=this.getValue();
break;
case false:
if(this.shadowTree.input){
this.bindingElement.removeChild(this.shadowTree.input);
this.shadowTree.input=null;
}
break;
}
}
};
CheckBoxBinding.prototype.getValue=function(){
var _a19=null;
var _a1a=this.getProperty("value");
if(this.isChecked){
_a19=_a1a?_a1a:"on";
}
return _a19;
};
CheckBoxBinding.prototype.setValue=function(_a1b){
if(_a1b==this.getValue()||_a1b=="on"){
this.check(true);
}else{
if(_a1b!="on"){
this.setPropety("value",_a1b);
}
}
};
CheckBoxBinding.prototype.getResult=function(){
var _a1c=false;
if(this.isChecked){
_a1c=this._result!=null?this._result:true;
}
return _a1c;
};
CheckBoxBinding.prototype.setResult=function(_a1d){
if(typeof _a1d=="boolean"){
this.setChecked(_a1d,true);
}else{
this._result=_a1d;
}
};
CheckBoxBinding.newInstance=function(_a1e){
var _a1f=DOMUtil.createElementNS(Constants.NS_UI,"ui:checkbox",_a1e);
return UserInterface.registerBinding(_a1f,CheckBoxBinding);
};
CheckBoxGroupBinding.prototype=new Binding;
CheckBoxGroupBinding.prototype.constructor=CheckBoxGroupBinding;
CheckBoxGroupBinding.superclass=Binding.prototype;
function CheckBoxGroupBinding(){
this.logger=SystemLogger.getLogger("CheckBoxGroupBinding");
this.isRequired=false;
this.isValid=true;
}
CheckBoxGroupBinding.prototype.toString=function(){
return "[CheckBoxGroupBinding]";
};
CheckBoxGroupBinding.prototype.onBindingAttach=function(){
CheckBoxGroupBinding.superclass.onBindingAttach.call(this);
this.isRequired=this.getProperty("required")==true;
};
CheckBoxGroupBinding.prototype.validate=function(){
var _a20=true;
if(this.isRequired){
var _a21=this.getDescendantBindingsByLocalName("checkbox");
if(_a21.hasEntries()){
_a20=false;
while(_a21.hasNext()&&!_a20){
if(_a21.getNext().isChecked){
_a20=true;
}
}
}
if(_a20==false){
this._showWarning(true);
this.dispatchAction(Binding.ACTION_INVALID);
this.addActionListener(CheckBoxBinding.ACTION_COMMAND);
}
}
return _a20;
};
CheckBoxGroupBinding.prototype._showWarning=function(_a22){
if(_a22){
if(!this._labelBinding){
var _a23=LabelBinding.newInstance(this.bindingDocument);
_a23.attachClassName("invalid");
_a23.setImage("${icon:error}");
_a23.setLabel("Selection required");
this._labelBinding=this.addFirst(_a23);
this._labelBinding.attach();
}
}else{
if(this._labelBinding){
this._labelBinding.dispose();
this._labelBinding=null;
}
}
};
CheckBoxGroupBinding.prototype.handleAction=function(_a24){
CheckBoxGroupBinding.superclass.handleAction.call(this,_a24);
switch(_a24.type){
case CheckBoxBinding.ACTION_COMMAND:
this._showWarning(false);
this.dispatchAction(Binding.ACTION_VALID);
this.removeActionListener(CheckBoxBinding.ACTION_COMMAND);
break;
}
};
CheckBoxGroupBinding.newInstance=function(_a25){
var _a26=DOMUtil.createElementNS(Constants.NS_UI,"ui:checkboxgroup",_a25);
return UserInterface.registerBinding(_a26,CheckBoxGroupBinding);
};
BalloonSetBinding.prototype=new Binding;
BalloonSetBinding.prototype.constructor=BalloonSetBinding;
BalloonSetBinding.superclass=Binding.prototype;
function BalloonSetBinding(){
this.logger=SystemLogger.getLogger("BalloonSetBinding");
}
BalloonSetBinding.prototype.toString=function(){
return "[BalloonSetBinding]";
};
BalloonBinding.prototype=new MatrixBinding;
BalloonBinding.prototype.constructor=BalloonBinding;
BalloonBinding.superclass=MatrixBinding.prototype;
BalloonBinding.TIMEOUT=parseInt(200);
BalloonBinding.OFFSET_X=parseInt(14);
BalloonBinding.OFFSET_Y=parseInt(6);
BalloonBinding.ACTION_SNAP="balloon snap";
BalloonBinding.CLASSNAME_LEFT="left";
BalloonBinding.ACTION_INITIALIZE="ballon initialize";
function BalloonBinding(){
this.logger=SystemLogger.getLogger("BalloonBinding");
this._snapTargetBinding=null;
this._environmentBinding=null;
return this;
}
BalloonBinding.prototype.toString=function(){
return "[BalloonBinding]";
};
BalloonBinding.prototype.onBindingAttach=function(){
BalloonBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_ACTIVATED);
this.addActionListener(ControlBinding.ACTION_COMMAND);
this._controlGroupBinding=this.add(ControlGroupBinding.newInstance(this.bindingDocument));
var _a27=DialogControlBinding.newInstance(this.bindingDocument);
_a27.setControlType(ControlBinding.TYPE_CLOSE);
this._controlGroupBinding.add(_a27);
this._controlGroupBinding.attachRecursive();
var _a28=DOMUtil.createElementNS(Constants.NS_UI,"ui:balloonspeak",this.bindingDocument);
this.bindingElement.appendChild(_a28);
var _a29=this.getLabel();
if(_a29!=null){
this.setLabel(_a29);
}
};
BalloonBinding.prototype.onBindingDispose=function(){
BalloonBinding.superclass.onBindingDispose.call(this);
if(this._updateInterval){
window.clearInterval(this._updateInterval);
this._updateInterval=null;
}
var _a2a=this._snapTargetBinding;
if(Binding.exists(_a2a)==true){
_a2a.removeActionListener(Binding.ACTION_BLURRED,this);
_a2a.removeActionListener(Binding.ACTION_VALID,this);
}
};
BalloonBinding.prototype.snapTo=function(_a2b){
if(Interfaces.isImplemented(IData,_a2b)){
this._snapTargetBinding=_a2b;
var _a2c=_a2b.dispatchAction(BalloonBinding.ACTION_INITIALIZE);
if(_a2c&&_a2c.isConsumed){
this._environmentBinding=_a2c.listener;
}
if(this._environmentBinding){
_a2b.addActionListener(Binding.ACTION_BLURRED,this);
_a2b.addActionListener(Binding.ACTION_VALID,this);
this.subscribe(BroadcastMessages.VIEW_CLOSED);
var self=this;
this._updateInterval=window.setInterval(function(){
if(Binding.exists(_a2b)==true){
self._updatePosition();
}else{
self.dispose();
}
},BalloonBinding.TIMEOUT);
_a2b.dispatchAction(BalloonBinding.ACTION_SNAP);
}else{
throw "No environment fit for balloons!";
}
}
};
BalloonBinding.prototype._updatePosition=function(){
var _a2e=this._snapTargetBinding;
var _a2f=this._environmentBinding;
var root=UserInterface.getBinding(_a2e.bindingDocument.body);
if(Binding.exists(_a2e)&&Binding.exists(_a2f)){
if(!root.isActivated){
if(this.isVisible==true){
this.hide();
}
}else{
if(_a2e.isAttached&&_a2f.isAttached){
var _a31=_a2e.boxObject.getUniversalPosition();
var _a32=_a2f.boxObject.getUniversalPosition();
_a32.y+=_a2f.bindingElement.scrollTop;
_a32.x+=_a2f.bindingElement.scrollLeft;
var tDim=_a2e.boxObject.getDimension();
var eDim=_a2f.boxObject.getDimension();
var _a35=false;
if(_a31.y+tDim.h<_a32.y){
_a35=true;
}else{
if(_a31.x+tDim.w<_a32.x){
_a35=true;
}else{
if(_a31.y>_a32.y+eDim.h){
_a35=true;
}else{
if(_a31.x>_a32.x+eDim.w){
_a35=true;
}
}
}
}
if(!_a35){
this._setComputedPosition(_a31,_a32,tDim,eDim);
if(!this.isVisible){
this.show();
}
}else{
if(this.isVisible==true){
this.hide();
}
}
}
}
}else{
this.dispose();
}
};
BalloonBinding.prototype._setComputedPosition=function(_a36,_a37,tDim,eDim){
var wDim=WindowManager.getWindowDimensions();
var bDim=this._getDimension();
var _a3c=_a36;
var _a3d=false;
if(_a36.x+tDim.w+bDim.w+BalloonBinding.OFFSET_X>=wDim.w){
_a3d=true;
}else{
if(_a36.x+tDim.w>=_a37.x+eDim.w){
_a3d=true;
}
}
if(_a3d){
_a3c.x-=(bDim.w+BalloonBinding.OFFSET_X);
this.attachClassName(BalloonBinding.CLASSNAME_LEFT);
}else{
_a3c.x+=tDim.w+BalloonBinding.OFFSET_X;
this.detachClassName(BalloonBinding.CLASSNAME_LEFT);
}
_a3c.y-=(bDim.h);
_a3c.y+=BalloonBinding.OFFSET_Y;
this._setPosition(_a3c);
};
BalloonBinding.prototype.handleBroadcast=function(_a3e,arg){
BalloonBinding.superclass.handleBroadcast.call(this,_a3e,arg);
switch(_a3e){
case BroadcastMessages.VIEW_CLOSED:
if(this._isAssociatedView(arg)==true){
this.dispose();
}
break;
}
};
BalloonBinding.prototype._isAssociatedView=function(_a40){
var _a41=false;
if(this._snapTargetBinding){
var view=this._snapTargetBinding.getAncestorBindingByType(ViewBinding,true);
if(view&&view.getHandle()==_a40){
_a41=true;
}
}
return _a41;
};
BalloonBinding.prototype._setPosition=function(_a43){
var _a44=false;
var pos=this.boxObject.getLocalPosition();
if(this._point!=null){
if(pos.x!=this._point.x||pos.y!=this._point.y){
_a44=true;
}
}
if(!_a44){
this.bindingElement.style.left=_a43.x+"px";
this.bindingElement.style.top=_a43.y+"px";
this._point=_a43;
}
};
BalloonBinding.prototype._getPosition=function(){
return new Point(this.bindingElement.offsetLeft,this.bindingElement.offsetTop);
};
BalloonBinding.prototype._getDimension=function(){
return new Dimension(this.bindingElement.offsetWidth,this.bindingElement.offsetHeight);
};
BalloonBinding.prototype.hide=function(){
if(this.isVisible){
this.bindingElement.style.visibility="hidden";
this.isVisible=false;
}
};
BalloonBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.visibility="visible";
this.isVisible=true;
}
};
BalloonBinding.prototype.handleAction=function(_a46){
BalloonBinding.superclass.handleAction.call(this,_a46);
var _a47=_a46.target;
switch(_a46.type){
case Binding.ACTION_ACTIVATED:
if(this._snapTargetBinding){
this._snapTargetBinding.dispatchAction(Binding.ACTION_ACTIVATED);
_a46.consume();
}
case Binding.ACTION_BLURRED:
case Binding.ACTION_VALID:
if(_a47==this._snapTargetBinding){
var self=this;
setTimeout(function(){
if(!Binding.exists(_a47)){
self.dispose();
}else{
if(_a47.validate()){
var _a49=true;
if(_a46.type==Binding.ACTION_BLURRED){
var root=_a47.bindingDocument.body;
var bind=UserInterface.getBinding(root);
if(!root.isActivated){
_a49=false;
}
}
if(_a49){
self.dispose();
}
}
}
},0);
}
break;
case ControlBinding.ACTION_COMMAND:
this.dispose();
break;
}
};
BalloonBinding.prototype.setLabel=function(_a4c){
if(this.isAttached==true){
if(!this._isTableIndexed){
this._indexTable();
}
var _a4d=DOMUtil.createElementNS(Constants.NS_UI,"ui:balloontext",this.bindingDocument);
var text=this.bindingDocument.createTextNode(_a4c);
_a4d.appendChild(text);
this.shadowTree[MatrixBinding.CENTER].appendChild(_a4d);
}
this.setProperty("label",_a4c);
};
BalloonBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
BalloonBinding.newInstance=function(_a4f){
var _a50=DOMUtil.createElementNS(Constants.NS_UI,"ui:balloon",_a4f);
var _a51=UserInterface.registerBinding(_a50,BalloonBinding);
_a51.hide();
return _a51;
};
ErrorBinding.prototype=new Binding;
ErrorBinding.prototype.constructor=ErrorBinding;
ErrorBinding.superclass=Binding.prototype;
ErrorBinding.ACTION_INITIALIZE="error initialize";
ErrorBinding.presentError=function(_a52,_a53){
if(Interfaces.isImplemented(IData,_a53)==true){
var _a54,_a55=_a53.dispatchAction(ErrorBinding.ACTION_INITIALIZE);
if(_a55&&_a55.isConsumed){
switch(_a55.listener.constructor){
case StageBinding:
_a54=false;
break;
case StageDialogBinding:
_a54=true;
break;
}
}
var _a56=_a54?top.app.bindingMap.dialogballoonset:top.app.bindingMap.balloonset;
var _a57=_a56.add(BalloonBinding.newInstance(top.app.document));
_a57.setLabel(_a52.text);
_a57.snapTo(_a53);
_a57.attach();
}
};
function ErrorBinding(){
this.logger=SystemLogger.getLogger("ErrorBinding");
return this;
}
ErrorBinding.prototype.toString=function(){
return "[ErrorBinding]";
};
ErrorBinding.prototype.onBindingAttach=function(){
ErrorBinding.superclass.onBindingAttach.call(this);
var _a58=this.bindingWindow.DataManager;
var text=this.getProperty("text");
var name=this.getProperty("targetname");
var _a5b=_a58.getDataBinding(name);
if(_a5b){
ErrorBinding.presentError({text:text},_a5b);
}else{
alert("ErrorBinding dysfunction: No such DataBinding!\n"+name);
if(name.indexOf("_")>-1){
alert("Name contaings '_' - replace with '$' ?");
}
}
this.dispose();
};
FocusBinding.prototype=new FlexBoxBinding;
FocusBinding.prototype.constructor=FocusBinding;
FocusBinding.superclass=FlexBoxBinding.prototype;
FocusBinding.MARKER="focusbindingcurrentfocus";
FocusBinding.ACTION_ACTIVATED="focusmanager activated";
FocusBinding.ACTION_ATTACHED="focusmanager attached";
FocusBinding.ACTION_UPDATE="focusmanager update required";
FocusBinding.ACTION_FOCUS="focusmanager focus";
FocusBinding.ACTION_BLUR="focusmanager blur";
FocusBinding.focusElement=function(_a5c){
var _a5d=true;
try{
_a5c.focus();
Application.focused(true);
}
catch(exception){
var _a5e=UserInterface.getBinding(_a5c);
var _a5f=SystemLogger.getLogger("FocusBinding.focusElement");
_a5f.warn("Could not focus "+(_a5e?_a5e.toString():String(_a5c)));
_a5d=false;
}
return _a5d;
};
FocusBinding.focusedBinding=null;
FocusBinding.activeInstance=null;
FocusBinding.getCachedFocus=function(_a60){
var win=_a60.bindingWindow;
var id=_a60.bindingElement.id;
return {getBinding:function(){
var _a63=null;
try{
if(Binding.exists(_a60)){
_a63=win.bindingMap[id];
}
}
catch(exception){
}
return _a63;
}};
};
FocusBinding.navigateNext=function(_a64){
if(Binding.exists(FocusBinding.activeInstance)){
FocusBinding.activeInstance.focusNext(_a64);
}
};
FocusBinding.navigatePrevious=function(){
FocusBinding.navigateNext(true);
};
function FocusBinding(){
this.logger=SystemLogger.getLogger("FocusManangerBinding");
this._focusableList=null;
this._isUpToDate=false;
this._isFocusManager=true;
this.isStrongFocusManager=true;
this._cachedFocus=null;
this.isFlexible=false;
return this;
}
FocusBinding.prototype.toString=function(){
return "[FocusManangerBinding]";
};
FocusBinding.prototype.onBindingAttach=function(){
if(this.getProperty("focusmanager")==false){
this._isFocusManager=false;
}else{
if(this.getProperty("strongfocusmanager")==false){
this.isStrongFocusManager=false;
}
if(this._isFocusManager){
var _a65=this.dispatchAction(FocusBinding.ACTION_ATTACHED);
if(_a65&&_a65.isConsumed){
if(_a65.listener.isStrongFocusManager){
this._isFocusManager=false;
}
}
if(this._isFocusManager){
this.addActionListener(Binding.ACTION_ACTIVATED);
this.addActionListener(Binding.ACTION_FOCUSED);
this.addActionListener(Binding.ACTION_BLURRED);
this.addActionListener(FocusBinding.ACTION_UPDATE);
this.addActionListener(FocusBinding.ACTION_FOCUS);
this.addActionListener(FocusBinding.ACTION_BLUR);
this.addActionListener(FocusBinding.ACTION_ATTACHED);
}
}
}
FocusBinding.superclass.onBindingAttach.call(this);
};
FocusBinding.prototype.onBindingDispose=function(){
FocusBinding.superclass.onBindingDispose.call(this);
if(FocusBinding.activeInstance==this){
FocusBinding.activeInstance=null;
}
};
FocusBinding.prototype.handleAction=function(_a66){
FocusBinding.superclass.handleAction.call(this,_a66);
var _a67=_a66.target;
var _a68=null;
if(this._isFocusManager){
switch(_a66.type){
case FocusBinding.ACTION_ATTACHED:
if(_a67!=this){
this._isUpToDate=false;
}
_a66.consume();
break;
case FocusBinding.ACTION_UPDATE:
if(_a67!=this){
this._isUpToDate=false;
_a66.consume();
}
break;
case FocusBinding.ACTION_BLUR:
if(Application.isOperational){
_a68=new FocusCrawler();
_a68.mode=FocusCrawler.MODE_BLUR;
_a68.crawl(_a67.bindingElement);
if(this._cachedFocus!=null){
this._cachedFocus=null;
}
}
_a66.consume();
break;
case FocusBinding.ACTION_FOCUS:
if(Application.isOperational&&_a67!=this){
_a68=new FocusCrawler();
_a68.mode=FocusCrawler.MODE_FOCUS;
_a68.crawl(_a67.bindingElement);
}
_a66.consume();
break;
case Binding.ACTION_FOCUSED:
if(Interfaces.isImplemented(IFocusable,_a67)){
this.claimFocus();
this._onFocusableFocused(_a67);
}
_a66.consume();
break;
case Binding.ACTION_BLURRED:
if(Interfaces.isImplemented(IFocusable,_a67)){
this._onFocusableBlurred(_a67);
}
_a66.consume();
break;
}
}
};
FocusBinding.prototype.focusNext=function(_a69){
var _a6a=null;
var list=this._getFocusableList();
if(list.reset().hasEntries()){
while(_a6a==null&&list.hasNext()){
var _a6c=list.getNext();
if(this._cachedFocus&&_a6c==this._cachedFocus.getBinding()){
_a6a=_a6c;
}
}
if(_a6a!=null){
if(_a6c.isFocused){
var next=_a69?list.getPreceding(_a6a):list.getFollowing(_a6a);
if(!next){
next=_a69?list.getLast():list.getFirst();
}
next.focus();
}else{
_a6a.focus();
}
}else{
list.getFirst().focus();
}
}
};
FocusBinding.prototype.claimFocus=function(){
FocusBinding.activeInstance=this;
};
FocusBinding.prototype._getFocusableList=function(){
if(!this._isUpToDate){
var _a6e=new FocusCrawler();
var list=new List();
_a6e.mode=FocusCrawler.MODE_INDEX;
_a6e.crawl(this.bindingElement,list);
this._focusableList=list;
this._isUpToDate=true;
}
return this._focusableList;
};
FocusBinding.prototype._focusFirstFocusable=function(){
if(this._isFocusManager&&this.isActivated){
var list=this._getFocusableList();
if(list!=null){
if(list.hasEntries()){
list.getFirst().focus();
}
}else{
this.logger.warn("Could not compute focusable list.");
}
}
};
FocusBinding.prototype._focusPreviouslyFocused=function(){
if(this._cachedFocus){
var _a71=this._cachedFocus.getBinding();
if(_a71&&!_a71.isFocused){
_a71.focus();
}
}
};
FocusBinding.prototype._onFocusableFocused=function(_a72){
if(_a72!=FocusBinding.focusedBinding){
if(FocusBinding.focusedBinding!=null){
if(Binding.exists(FocusBinding.focusedBinding)){
FocusBinding.focusedBinding.blur();
}
}
FocusBinding.focusedBinding=_a72;
_a72.setProperty(FocusBinding.MARKER,true);
this._cachedFocus=FocusBinding.getCachedFocus(_a72);
}
};
FocusBinding.prototype._onFocusableBlurred=function(_a73){
_a73.deleteProperty(FocusBinding.MARKER);
if(_a73==FocusBinding.focusedBinding){
FocusBinding.focusedBinding=null;
}
};
TabsButtonBinding.prototype=new ButtonBinding;
TabsButtonBinding.prototype.constructor=TabsButtonBinding;
TabsButtonBinding.superclass=ButtonBinding.prototype;
TabsButtonBinding.RESERVED_SPACE=36;
TabsButtonBinding.NODENAME_TABBOX="tabbox";
TabsButtonBinding.CHAR_INDICATOR=String.fromCharCode(187);
function TabsButtonBinding(){
this.logger=SystemLogger.getLogger("TabsButtonBinding");
this.hiddenTabBindings=null;
this.menuItemBindings=null;
this.containingTabBoxBinding=null;
this.selectedTabBinding=null;
this.isVisible=false;
this.snapshotWindowWidth=null;
}
TabsButtonBinding.prototype.toString=function(){
return "[TabsButtonBinding]";
};
TabsButtonBinding.prototype.onBindingRegister=function(){
TabsButtonBinding.superclass.onBindingRegister.call(this);
this.hiddenTabBindings=new List();
this.menuItemBindings=new List();
};
TabsButtonBinding.prototype.buildDOMContent=function(){
TabsButtonBinding.superclass.buildDOMContent.call(this);
this.containingTabBoxBinding=this.getAncestorBindingByLocalName(this.constructor.NODENAME_TABBOX);
var span=this.bindingDocument.createElement("span");
span.appendChild(this.bindingDocument.createTextNode(TabsButtonBinding.CHAR_INDICATOR));
span.className="arrow";
this.labelBinding.bindingElement.appendChild(span);
};
TabsButtonBinding.prototype.show=function(_a75){
this.bindingElement.style.left=_a75+"px";
this.setLabel(this.hiddenTabBindings.getLength().toString());
TabsButtonBinding.superclass.show.call(this);
};
TabsButtonBinding.prototype.reset=function(){
if(this.menuItemBindings.hasEntries()){
while(this.menuItemBindings.hasNext()){
this.menuItemBindings.getNext().dispose();
}
}
this.hiddenTabBindings.clear();
this.menuItemBindings.clear();
this.selectedTabBinding=null;
this.isPopulated=false;
};
TabsButtonBinding.prototype.registerHiddenTabBinding=function(_a76){
this.hiddenTabBindings.add(_a76);
};
TabsButtonBinding.prototype.fireCommand=function(){
if(this.isChecked&&!this.isPopulated){
this.hiddenTabBindings.reset();
while(this.hiddenTabBindings.hasNext()){
var _a77=this.hiddenTabBindings.getNext();
var item=MenuItemBinding.newInstance(this.popupBinding.bindingDocument);
item.setLabel(_a77.getLabel());
item.setImage(_a77.getImage());
item.associatedTabBinding=_a77;
var self=this;
item.oncommand=function(){
self.selectedTabBinding=this.associatedTabBinding;
};
this.popupBinding.add(item);
this.menuItemBindings.add(item);
this.popupBinding.attachRecursive();
}
this.isPopulated=true;
}
this.popupBinding.addActionListener(PopupBinding.ACTION_HIDE,this);
TabsButtonBinding.superclass.fireCommand.call(this);
};
TabsButtonBinding.prototype.handleAction=function(_a7a){
TabsButtonBinding.superclass.handleAction.call(this,_a7a);
switch(_a7a.type){
case PopupBinding.ACTION_HIDE:
this.popupBinding.removeActionListener(PopupBinding.ACTION_HIDE,this);
var _a7b=this.selectedTabBinding;
if(_a7b){
this.containingTabBoxBinding.moveToOrdinalPosition(_a7b,0);
this.containingTabBoxBinding.select(_a7b);
}
_a7a.consume();
break;
}
};
TabsButtonBinding.newInstance=function(_a7c){
var _a7d=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_a7c);
_a7d.setAttribute("type","checkbox");
_a7d.setAttribute("popup","app.bindingMap.tabsbuttonpopup");
_a7d.className="tabbutton";
return UserInterface.registerBinding(_a7d,TabsButtonBinding);
};
TabBoxBinding.prototype=new FlexBoxBinding;
TabBoxBinding.prototype.constructor=TabBoxBinding;
TabBoxBinding.superclass=FlexBoxBinding.prototype;
TabBoxBinding.ASSOCIATION_KEY="tabboxkey";
TabBoxBinding.ACTION_ATTACHED="tabbox attached";
TabBoxBinding.ACTION_SELECTED="tabbox selected";
TabBoxBinding.ACTION_UNSELECTED="tabbox unselected";
TabBoxBinding.ACTION_UPDATED="tabbox updated";
TabBoxBinding.UPDATE_ORDINAL="tabbox ordinalupdate";
TabBoxBinding.UPDATE_ATTACH="tabbox attachupdate";
TabBoxBinding.UPDATE_DETACH="tabbox detachupdate";
TabBoxBinding.INVALID_TAB_IMAGE="${icon:error}";
TabBoxBinding.BALLOON_TAB_IMAGE="${icon:balloon}";
EventBroadcaster.subscribe(BroadcastMessages.KEY_TAB,{handleBroadcast:function(){
if(Keyboard.isControlPressed){
var _a7e=TabBoxBinding.currentActiveInstance;
if(_a7e!=null&&Binding.exists(_a7e)){
}
}
}});
TabBoxBinding.currentActiveInstance=null;
function TabBoxBinding(){
this.logger=SystemLogger.getLogger("TabBoxBinding");
this._tabBoxPairs={};
this._selectedTabElement=null;
this._selectedTabBinding=null;
this._tabsElement=null;
this._tabPanelsElement=null;
this._attachedMemberCount=0;
this._isMembersAttached=false;
this.isEqualSize=false;
this._nodename_tab="tab";
this._nodename_tabs="tabs";
this._nodename_tabpanel="tabpanel";
this._nodename_tabpanels="tabpanels";
this._impl_tab=TabBinding;
this._impl_tabs=TabsBinding;
this._impl_tabpanel=TabPanelBinding;
this._impl_tabpanels=TabPanelsBinding;
this.updateType=null;
this._hasBastardUpdates=false;
return this;
}
TabBoxBinding.prototype.toString=function(){
return "[TabBoxBinding]";
};
TabBoxBinding.prototype.onBindingRegister=function(){
TabBoxBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_ATTACHED);
this.addActionListener(Binding.ACTION_DETACHED);
this.addActionListener(Binding.ACTION_ACTIVATED);
this.addActionListener(Binding.ACTION_FOCUSED);
this.addActionListener(PageBinding.ACTION_INITIALIZED);
DOMEvents.addEventListener(this.bindingDocument.documentElement,DOMEvents.AFTERUPDATE,this);
DOMEvents.addEventListener(this.bindingElement,DOMEvents.AFTERUPDATE,this);
};
TabBoxBinding.prototype.onBindingAttach=function(){
TabBoxBinding.superclass.onBindingAttach.call(this);
TabBoxBinding.currentActiveInstance=this;
this._tabsElement=this.getTabsElement();
this._tabPanelsElement=this.getTabPanelsElement();
var _a7f=this.getTabElements().getLength();
var _a80=this.getTabPanelElements().getLength();
if(!this._tabsElement||!this._tabPanelsElement){
throw new Error(this.toString()+" DOM subtree invalid.");
}else{
if(_a7f!=_a80){
throw new Error(this.toString()+" DOM subtree invalid.");
}else{
if(this.getProperty("type")=="boxed"){
this.setFlexibility(false);
this.attachClassName("boxed");
}
this.buildDOMContent();
this._TEMPNAME();
if(this.getProperty("equalsize")==true){
this.dispatchAction(PageBinding.ACTION_BLOCK_INIT);
this.setFlexibility(false);
this.attachClassName("equalsize");
this.isEqualSize=true;
this.addMembers(this.getDescendantBindingsByLocalName("*"));
}else{
this.addMember(this.getTabsBinding());
this.addMember(this.getTabPanelsBinding());
this.addMembers(this.getTabBindings());
this.addMembers(this.getTabPanelBindings());
}
}
}
};
TabBoxBinding.prototype.onBindingInitialize=function(){
var _a81=this.getTabPanelElements();
while(_a81.hasNext()){
this._setupWarningSystem(UserInterface.getBinding(_a81.getNext()));
}
if(this.isEqualSize){
this.enforceEqualSize();
this.dispatchAction(PageBinding.ACTION_UNBLOCK_INIT);
}
this.dispatchAction(TabBoxBinding.ACTION_ATTACHED);
TabBoxBinding.superclass.onBindingInitialize.call(this);
};
TabBoxBinding.prototype.buildDOMContent=function(){
var _a82=DOMUtil.getOrdinalPosition(this._tabsElement);
var _a83=DOMUtil.getOrdinalPosition(this._tabPanelsElement);
var _a84=_a82>_a83?"tabsbelow":"tabsontop";
this.attachClassName(_a84);
};
TabBoxBinding.prototype._TEMPNAME=function(){
var tabs=this.getTabElements();
var _a86=this.getTabPanelElements();
var _a87=null;
var _a88=this.getProperty("selectedindex");
if(_a88!=null){
if(_a88>tabs.getLength()-1){
throw "Selectedindex out of range";
}
}
if(tabs.hasEntries()){
var _a89=0;
while(tabs.hasNext()){
var tab=tabs.getNext();
var _a8b=_a86.getNext();
this.registerTabBoxPair(tab,_a8b);
if(_a88&&_a89==_a88){
tab.setAttribute("selected","true");
}else{
if(tab.getAttribute("selected")=="true"){
_a87=tab;
}
}
_a89++;
}
if(!_a87){
_a87=tabs.getFirst();
_a87.setAttribute("selected","true");
}
}
};
TabBoxBinding.prototype.enforceEqualSize=function(_a8c){
var _a8d=null;
var _a8e=null;
if(this.isEqualSize){
var _a8f=CSSComputer.getPadding(this._tabPanelsElement);
var max=0,_a91=this.getTabPanelElements();
_a91.each(function(_a92){
max=_a92.offsetHeight>max?_a92.offsetHeight:max;
});
_a8e=max+_a8f.top+_a8f.bottom;
if(_a8c&&this._tabPanelsElement.style.height!=null){
_a8d=this._tabPanelsElement.offsetHeight;
}
if(_a8d!=null||_a8e>_a8d){
this._tabPanelsElement.style.height=_a8e+"px";
}
}
};
TabBoxBinding.prototype._setupWarningSystem=function(_a93){
_a93._invalidCount=0;
_a93.addActionListener(Binding.ACTION_INVALID,this);
_a93.addActionListener(Binding.ACTION_VALID,this);
_a93.addActionListener(BalloonBinding.ACTION_SNAP,this);
};
TabBoxBinding.prototype.handleAction=function(_a94){
TabBoxBinding.superclass.handleAction.call(this,_a94);
var _a95=_a94.target;
var _a96=_a94.listener;
switch(_a94.type){
case Binding.ACTION_ATTACHED:
break;
case Binding.ACTION_DETACHED:
if(_a95.constructor==this._impl_tab){
this.updateType=TabBoxBinding.UPDATE_DETACH;
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
_a94.consume();
}
break;
case PageBinding.ACTION_INITIALIZED:
if(_a95.isDialogSubPage&&this.isEqualSize){
this.enforceEqualSize();
}
break;
case Binding.ACTION_INVALID:
_a96._invalidCount++;
if(_a96._invalidCount==1){
var self=this;
setTimeout(function(){
if(!_a96.isSelected){
self._showWarning(_a96,true);
}
},0);
}
break;
case Binding.ACTION_VALID:
if(_a96._invalidCount>0){
_a96._invalidCount--;
if(_a96._invalidCount==0){
if(_a96.isSelected){
this._showWarning(_a96,false);
}
}
}
break;
case BalloonBinding.ACTION_SNAP:
this._showBalloon(_a96,true);
break;
case Binding.ACTION_ACTIVATED:
case Binding.ACTION_FOCUSED:
if(_a94._tabboxstamp==null){
TabBoxBinding.currentActiveInstance=this;
_a94._tabboxstamp="stamped";
}
break;
}
};
TabBoxBinding.prototype.handleEvent=function(e){
TabBoxBinding.superclass.handleEvent.call(this,e);
switch(e.type){
case DOMEvents.AFTERUPDATE:
var _a99=DOMEvents.getTarget(e);
if(_a99==this.bindingDocument.documentElement){
if(this._hasBastardUpdates){
this._hasBastardUpdates=false;
var tabs=this.getTabElements();
var _a9b=this.getTabPanelElements();
tabs.each(function(tab,_a9d){
if(tab.getAttribute(TabBoxBinding.ASSOCIATION_KEY)==null){
var _a9e=_a9b.get(_a9d);
this.registerTabBoxPair(tab,_a9e);
}
},this);
var _a9f=this._tabBoxPairs;
for(var key in _a9f){
var tab=_a9f[key].tab;
if(tab.parentNode==null){
this.unRegisterTabBoxPair(tab);
}
}
}
}else{
if(!this._hasBastardUpdates){
var name=DOMUtil.getLocalName(_a99);
switch(_a99.__updateType){
case Update.TYPE_INSERT:
switch(name){
case this._nodename_tab:
case this._nodename_tabpanel:
var _aa3=_a99.parentNode;
if(_aa3==this._tabsElement||_aa3==this._tabPanelsElement){
this._hasBastardUpdates=true;
}
break;
}
break;
case Update.TYPE_REMOVE:
switch(name){
case this._nodename_tabs:
case this._nodename_tabpanels:
if(_a99==this._tabsElement||_a99==this._tabPanelsElement){
this._hasBastardUpdates=true;
}
break;
}
break;
}
}
}
break;
}
};
TabBoxBinding.prototype.select=function(arg,_aa5){
var _aa6=this.getBindingForArgument(arg);
if(_aa6!=null&&!_aa6.isSelected){
if(this._selectedTabBinding!=null){
this._selectedTabBinding.unselect();
this.getTabPanelBinding(this._selectedTabBinding).unselect();
}
this.dispatchAction(TabBoxBinding.ACTION_UNSELECTED);
_aa6.select(_aa5);
this.getTabPanelBinding(_aa6).select(_aa5);
var _aa7=this.getProperty("selectedindex");
if(_aa7!=null){
this.setProperty("selectedindex",DOMUtil.getOrdinalPosition(_aa6.bindingElement,true));
}
this._selectedTabBinding=_aa6;
this.dispatchAction(TabBoxBinding.ACTION_SELECTED);
this.dispatchAction(FocusBinding.ACTION_UPDATE);
if(_aa6.getImage()==TabBoxBinding.BALLOON_TAB_IMAGE){
var _aa8=this.getTabPanelBinding(_aa6);
this._showBalloon(_aa8,false);
}
}
};
TabBoxBinding.prototype.registerTabBoxPair=function(tab,_aaa){
var key=KeyMaster.getUniqueKey();
tab.setAttribute(TabBoxBinding.ASSOCIATION_KEY,key);
_aaa.setAttribute(TabBoxBinding.ASSOCIATION_KEY,key);
this._tabBoxPairs[key]={tab:tab,tabPanel:_aaa};
};
TabBoxBinding.prototype.unRegisterTabBoxPair=function(tab){
var key=tab.getAttribute(TabBoxBinding.ASSOCIATION_KEY);
delete this._tabBoxPairs[key];
};
TabBoxBinding.prototype.getTabPanelBinding=function(_aae){
var _aaf=null;
try{
var key=_aae.getProperty(TabBoxBinding.ASSOCIATION_KEY);
var _ab1=this._tabBoxPairs[key].tabPanel;
_aaf=UserInterface.getBinding(_ab1);
}
catch(exception){
this.logger.error(exception);
SystemDebug.stack(arguments);
}
return _aaf;
};
TabBoxBinding.prototype.getTabBinding=function(_ab2){
var key=_ab2.getProperty(TabBoxBinding.ASSOCIATION_KEY);
var _ab4=this._tabBoxPairs[key].tab;
return UserInterface.getBinding(_ab4);
};
TabBoxBinding.prototype.summonTabBinding=function(){
return TabBinding.newInstance(this.bindingDocument);
};
TabBoxBinding.prototype.summonTabPanelBinding=function(){
var _ab5=this._impl_tabpanel.newInstance(this.bindingDocument);
this._setupWarningSystem(_ab5);
return _ab5;
};
TabBoxBinding.prototype.appendTabByBindings=function(_ab6,_ab7){
var _ab8=_ab6.bindingElement;
_ab6.setProperty("selected",true);
var _ab9=this.summonTabPanelBinding();
var _aba=_ab9.bindingElement;
if(_ab7){
_aba.appendChild(_ab7 instanceof Binding?_ab7.bindingElement:_ab7);
}
this.registerTabBoxPair(_ab8,_aba);
UserInterface.getBinding(this._tabsElement).add(_ab6);
this._tabPanelsElement.appendChild(_aba);
_ab6.attach();
UserInterface.getBinding(_aba).attachRecursive();
this.updateType=TabBoxBinding.UPDATE_ATTACH;
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
return _ab6;
};
TabBoxBinding.prototype.importTabBinding=function(_abb){
var that=_abb.containingTabBoxBinding;
var _abd=that.getTabPanelBinding(_abb);
var _abe=_abd.getBindingElement();
var _abf=_abb.getBindingElement();
that.dismissTabBinding(_abb);
this._tabsElement.appendChild(_abf);
this._tabPanelsElement.appendChild(_abe);
this.registerTabBoxPair(_abf,_abe);
_abb.containingTabBoxBinding=this;
this.select(_abb);
this.dispatchAction(Binding.ACTION_ACTIVATED);
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
};
TabBoxBinding.prototype.removeTab=function(_ac0){
var _ac1=null;
if(_ac0.isSelected){
_ac1=this.getBestTab(_ac0);
this._selectedTabBinding=null;
}
var _ac2=this.getTabPanelBinding(_ac0);
this.unRegisterTabBoxPair(_ac0.bindingElement);
_ac0.dispose();
_ac2.dispose();
if(_ac1!=null){
this.select(_ac1);
}
this.updateType=TabBoxBinding.UPDATE_DETACH;
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
};
TabBoxBinding.prototype.dismissTabBinding=function(_ac3){
if(_ac3.isSelected){
this.selectBestTab(_ac3);
}
};
TabBoxBinding.prototype.selectBestTab=function(_ac4){
var _ac5=this.getBestTab(_ac4);
if(_ac5){
this.select(_ac5);
}else{
this._selectedTabBinding=null;
}
};
TabBoxBinding.prototype.getBestTab=function(_ac6){
var _ac7=null;
var _ac8=_ac6.getOrdinalPosition(true);
var _ac9=this.getTabBindings();
var _aca=_ac9.getLength();
var _acb=_aca-1;
if(_aca==1){
_ac7=null;
}else{
if(_ac8==_acb){
_ac7=_ac9.get(_ac8-1);
}else{
_ac7=_ac9.get(_ac8+1);
}
}
return _ac7;
};
TabBoxBinding.prototype.moveToOrdinalPosition=function(_acc,_acd){
var _ace=this.bindingDocument.getElementById(_acc.bindingElement.id);
var tab=this.getTabElements().get(_acd);
this._tabsElement.insertBefore(_ace,tab);
this.updateType=TabBoxBinding.UPDATE_ORDINAL;
this.dispatchAction(TabBoxBinding.ACTION_UPDATED);
};
TabBoxBinding.prototype.getTabsElement=function(){
return DOMUtil.getElementsByTagName(this.bindingElement,this._nodename_tabs).item(0);
};
TabBoxBinding.prototype.getTabPanelsElement=function(){
return DOMUtil.getElementsByTagName(this.bindingElement,this._nodename_tabpanels).item(0);
};
TabBoxBinding.prototype.getTabElements=function(){
var _ad0=this._nodename_tab;
var _ad1=new List(this._tabsElement.childNodes);
var _ad2=new List();
while(_ad1.hasNext()){
var _ad3=_ad1.getNext();
if(_ad3.nodeType==Node.ELEMENT_NODE&&DOMUtil.getLocalName(_ad3)==_ad0){
_ad2.add(_ad3);
}
}
return _ad2;
};
TabBoxBinding.prototype.getTabPanelElements=function(){
var _ad4=this._nodename_tabpanel;
var _ad5=new List(this._tabPanelsElement.childNodes);
var _ad6=new List();
_ad5.each(function(_ad7){
if(_ad7.nodeType==Node.ELEMENT_NODE&&DOMUtil.getLocalName(_ad7)==_ad4){
_ad6.add(_ad7);
}
});
return _ad6;
};
TabBoxBinding.prototype.getTabsBinding=function(){
return this.getChildBindingByLocalName(this._nodename_tabs);
};
TabBoxBinding.prototype.getTabPanelsBinding=function(){
return this.getChildBindingByLocalName(this._nodename_tabpanels);
};
TabBoxBinding.prototype.getTabBindings=function(){
var _ad8=new List();
var _ad9=this.getTabElements();
_ad9.each(function(_ada){
_ad8.add(UserInterface.getBinding(_ada));
});
return _ad8;
};
TabBoxBinding.prototype.getTabPanelBindings=function(){
var _adb=new List();
this.getTabPanelElements().each(function(_adc){
_adb.add(UserInterface.getBinding(_adc));
});
return _adb;
};
TabBoxBinding.prototype.getSelectedTabBinding=function(){
return this._selectedTabBinding;
};
TabBoxBinding.prototype.getSelectedTabPanelBinding=function(){
var _add=null;
if(this._selectedTabBinding){
_add=this.getTabPanelBinding(this._selectedTabBinding);
}
return _add;
};
TabBoxBinding.prototype._showWarning=function(_ade,_adf){
var _ae0=this.getTabBinding(_ade);
if(_adf){
if(_ae0.labelBinding.hasImage){
_ae0._backupImage=_ae0.getImage();
}
_ae0.setImage(TabBoxBinding.INVALID_TAB_IMAGE);
}else{
if(_ae0._backupImage){
_ae0.setImage(_ae0._backupImage);
}else{
_ae0.setImage(false);
}
}
};
TabBoxBinding.prototype._showBalloon=function(_ae1,_ae2){
var _ae3=this.getTabBinding(_ae1);
if((_ae2&&!_ae3.isSelected)||!_ae2){
if(_ae3.getImage()!=TabBoxBinding.INVALID_TAB_IMAGE){
if(_ae2){
if(_ae3.labelBinding.hasImage){
_ae3._backupImage=_ae3.getImage();
}
_ae3.setImage(TabBoxBinding.BALLOON_TAB_IMAGE);
}else{
if(_ae3._backupImage!=null){
_ae3.setImage(_ae3._backupImage);
}else{
_ae3.setImage(false);
}
}
}
}
};
TabBoxBinding.prototype.advanceSelection=function(_ae4){
var tab=this.getSelectedTabBinding();
var tabs=this.getTabBindings();
var _ae7=tab.getOrdinalPosition(true);
var next=null;
var _ae9=new List();
tabs.each(function(t){
if(t.isVisible){
_ae9.add(t);
}
});
if(_ae9.getLength()>1){
if(_ae7==0&&!_ae4){
next=_ae9.getLast();
}else{
if(_ae7==_ae9.getLength()-1&&_ae4){
next=_ae9.getFirst();
}else{
if(_ae4){
next=tab.getNextBindingByLocalName(this._nodename_tab);
}else{
next=tab.getPreviousBindingByLocalName(this._nodename_tab);
}
}
}
if(next!=null){
this.select(next);
}
}
};
TabsBinding.prototype=new Binding;
TabsBinding.prototype.constructor=TabsBinding;
TabsBinding.superclass=Binding.prototype;
TabsBinding.NODENAME_TABBOX="tabbox";
TabsBinding.TABBUTTON_IMPLEMENTATION=TabsButtonBinding;
function TabsBinding(){
this.logger=SystemLogger.getLogger("TabsBinding");
this.containingTabBoxBinding=null;
this.tabsButtonBinding=null;
this._cachedOffsetWidth=parseInt(0);
this.isManaging=false;
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
TabsBinding.prototype.toString=function(){
return "[TabsBinding]";
};
TabsBinding.prototype.onBindingRegister=function(){
TabsBinding.superclass.onBindingRegister.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
};
TabsBinding.prototype.onBindingAttach=function(){
TabsBinding.superclass.onBindingAttach.call(this);
this.containingTabBoxBinding=this.getAncestorBindingByType(TabBoxBinding);
this.containingTabBoxBinding.addActionListener(TabBoxBinding.ACTION_UPDATED,this);
this.buildDOMContent();
this.dispatchAction(Binding.ACTION_ATTACHED);
};
TabsBinding.prototype.buildDOMContent=function(){
var div=this.bindingDocument.createElement("div");
div.className="tabliner";
this.bindingElement.insertBefore(div,this.bindingElement.firstChild);
this.shadowTree.tabManager=this.bindingDocument.createElement("div");
this.shadowTree.tabManager.className="tabmanager";
var _aec=this.constructor.TABBUTTON_IMPLEMENTATION;
this.tabsButtonBinding=_aec.newInstance(this.bindingDocument);
this.shadowTree.tabsButton=this.tabsButtonBinding;
this.add(this.tabsButtonBinding);
this.tabsButtonBinding.attach();
};
TabsBinding.prototype.handleAction=function(_aed){
TabsBinding.superclass.handleAction.call(this,_aed);
switch(_aed.type){
case TabBoxBinding.ACTION_UPDATED:
if(!this.isManaging){
var self=this;
function manage(){
self.manage();
}
setTimeout(manage,0);
}
break;
}
};
TabsBinding.prototype.flex=function(){
if(this.isAttached==true){
var self=this;
function manage(){
if(Binding.exists(self)==true){
var _af0=self.bindingElement.offsetWidth;
if(_af0!=self._cachedOffsetWidth){
self.manage();
}
self._cachedOffsetWidth=_af0;
}
}
setTimeout(manage,0);
}
};
TabsBinding.prototype.add=function(_af1){
if(_af1 instanceof TabBinding){
if(this.tabsButtonBinding&&this.tabsButtonBinding.isVisible){
this.tabsButtonBinding.hide();
}
}
return TabsBinding.superclass.add.call(this,_af1);
};
TabsBinding.prototype.manage=function(){
if(Binding.exists(this)==true&&this.isVisible){
this.isManaging=true;
var _af2=false;
var _af3,tab,tabs=this.containingTabBoxBinding.getTabElements();
var _af6=this.constructor.TABBUTTON_IMPLEMENTATION;
var _af7=this.bindingElement.offsetWidth-_af6.RESERVED_SPACE;
var _af8=null;
var sum=0,_afa=0;
var _afb=true;
if(tabs.hasEntries()){
this.tabsButtonBinding.reset();
while(tabs.hasNext()&&_afb){
tab=tabs.getNext();
_af3=UserInterface.getBinding(tab);
if(!_af8){
_af8=_af3;
}
sum+=tab.offsetWidth;
if(sum>=_af7){
_af2=true;
if(_af3.isSelected){
if(!DOMUtil.isFirstElement(_af3.bindingElement,true)){
this.isManaging=false;
if(_af8){
_af8.hide();
if(this.tabsButtonBinding.isVisible){
this.tabsButtonBinding.hide();
}
}
this.containingTabBoxBinding.moveToOrdinalPosition(_af3,_afa-1);
_afb=false;
}
}else{
_af3.hide();
this.tabsButtonBinding.registerHiddenTabBinding(_af3);
}
}else{
_af3.show();
_af8=_af3;
_afa++;
}
}
if(_afb){
if(_af2&&this.tabsButtonBinding.hiddenTabBindings.hasEntries()){
var _afc=_af8.getBindingElement();
var _afd=_afc.offsetLeft+_afc.offsetWidth;
var _afe=this.tabsButtonBinding;
setTimeout(function(){
_afe.show(_afd+4);
},50);
}else{
this.tabsButtonBinding.hide();
}
}
}
this.isManaging=false;
}
};
TabBinding.prototype=new MatrixBinding;
TabBinding.prototype.constructor=TabBinding;
TabBinding.superclass=MatrixBinding.prototype;
TabBinding.ACTION_SELECTED="tabselected";
TabBinding.ACTION_UNSELECTED="tabunselected";
TabBinding.NODENAME_TABBOX="tabbox";
function TabBinding(){
this.logger=SystemLogger.getLogger("TabBinding");
this.tabboxkey=null;
this.isSelected=false;
this.labelBinding=null;
this.containingTabBoxBinding=null;
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
TabBinding.prototype.toString=function(){
return "[TabBinding]";
};
TabBinding.prototype.serialize=function(){
var _aff=TabBinding.superclass.serialize.call(this);
if(_aff){
_aff.label=this.getLabel();
_aff.image=this.getImage();
_aff.tooltip=this.getToolTip();
}
return _aff;
};
TabBinding.prototype.onBindingAttach=function(){
TabBinding.superclass.onBindingAttach.call(this);
this.defaultElementPosition=DOMUtil.getComputedStyle(this.bindingElement,"position");
this.defaultElementLeft=DOMUtil.getComputedStyle(this.bindingElement,"left");
this.containingTabBoxBinding=this.getAncestorBindingByType(TabBoxBinding);
this.buildDOMContent();
this.assignDOMEvents();
this.dispatchAction(Binding.ACTION_ATTACHED);
if(this.getProperty("selected")==true){
this.containingTabBoxBinding.select(this);
}
};
TabBinding.prototype.buildDOMContent=function(){
var _b00=this.bindingElement.getAttribute("image");
var _b01=this.bindingElement.getAttribute("label");
var _b02=this.bindingElement.getAttribute("tooltip");
this.bindingElement.className="default";
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
this.shadowTree.labelBinding=this.labelBinding;
this.labelBinding.attachClassName("tablabel");
this.add(this.labelBinding);
if(_b01){
this.setLabel(_b01);
}
if(_b00){
this.setImage(_b00);
}
if(_b02){
this.setToolTip(_b02);
}
};
TabBinding.prototype.setImage=function(url){
this.setProperty("image",url);
if(this.isAttached){
this.labelBinding.setImage(url);
}
};
TabBinding.prototype.getImage=function(){
return this.getProperty("image");
};
TabBinding.prototype.setLabel=function(_b04){
if(_b04!=null){
this.setProperty("label",_b04);
if(this.isAttached){
this.labelBinding.setLabel(_b04);
}
}
};
TabBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
TabBinding.prototype.setToolTip=function(_b05){
if(_b05){
this.setProperty("tooltip",_b05);
if(this.isAttached){
this.labelBinding.setToolTip(_b05);
}
}
};
TabBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
TabBinding.prototype.assignDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEENTER);
this.addEventListener(DOMEvents.MOUSELEAVE);
};
TabBinding.prototype.handleEvent=function(e){
TabBinding.superclass.handleEvent.call(this,e);
if(!this.isSelected){
var _b07=false;
if(Client.isMozilla==true){
}
if(!_b07){
switch(e.type){
case DOMEvents.MOUSEENTER:
case DOMEvents.MOUSEOVER:
if(!this.isSelected){
this.bindingElement.className="hover";
}
break;
case DOMEvents.MOUSELEAVE:
case DOMEvents.MOUSEOUT:
if(!this.isSelected){
this.bindingElement.className="default";
}
break;
case DOMEvents.MOUSEDOWN:
if(!DOMEvents.isRightButton(e)){
this.containingTabBoxBinding.select(this);
}
break;
}
}
}
};
TabBinding.prototype.select=function(_b08){
this.show();
this.isSelected=true;
this.setProperty("selected",true);
this.bindingElement.className="selected";
};
TabBinding.prototype.unselect=function(){
this.isSelected=false;
this.deleteProperty("selected");
this.bindingElement.className="default";
};
TabBinding.prototype.hide=function(){
if(this.isVisible){
this.bindingElement.style.position="absolute";
this.bindingElement.style.left="-1000px";
this.isVisible=false;
}
};
TabBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.position=this.defaultElementPosition;
this.bindingElement.style.left=this.defaultElementLeft;
this.isVisible=true;
}
};
TabBinding.newInstance=function(_b09){
var _b0a=DOMUtil.createElementNS(Constants.NS_UI,"ui:tab",_b09);
return UserInterface.registerBinding(_b0a,TabBinding);
};
TabPanelsBinding.prototype=new FlexBoxBinding;
TabPanelsBinding.prototype.constructor=TabPanelsBinding;
TabPanelsBinding.superclass=FlexBoxBinding.prototype;
function TabPanelsBinding(){
this.logger=SystemLogger.getLogger("TabPanelsBinding");
this.containingTabBoxBinding=null;
this._lastKnownDimension=null;
}
TabPanelsBinding.prototype.toString=function(){
return "[TabPanelsBinding]";
};
TabPanelsBinding.prototype.onBindingRegister=function(){
TabPanelsBinding.superclass.onBindingRegister.call(this);
this._lastKnownDimension=new Dimension(0,0);
};
TabPanelsBinding.prototype.hasDimensionsChanged=function(){
var _b0b=false;
var dim1=this.boxObject.getDimension();
var dim2=this._lastKnownDimension;
if(dim2==null||!Dimension.isEqual(dim1,dim2)){
_b0b=true;
this._lastKnownDimension=dim1;
}
return _b0b;
};
TabPanelsBinding.prototype.onBindingAttach=function(){
TabPanelsBinding.superclass.onBindingAttach.call(this);
this.containingTabBoxBinding=this.getAncestorBindingByType(TabBoxBinding);
this.setFlexibility(this.containingTabBoxBinding.isFlexible);
this.dispatchAction(Binding.ACTION_ATTACHED);
};
TabPanelBinding.prototype=new Binding;
TabPanelBinding.prototype.constructor=TabPanelBinding;
TabPanelBinding.superclass=Binding.prototype;
function TabPanelBinding(){
this.logger=SystemLogger.getLogger("TabPanelBinding");
this.tabboxkey=null;
this.isVisible=false;
this._focusedBinding=null;
return this;
}
TabPanelBinding.prototype.toString=function(){
return "[TabPanelBinding]";
};
TabPanelBinding.prototype.onBindingAttach=function(){
TabPanelBinding.superclass.onBindingAttach.call(this);
this.dispatchAction(Binding.ACTION_ATTACHED);
this.addActionListener(BalloonBinding.ACTION_INITIALIZE);
};
TabPanelBinding.prototype.select=function(_b0e){
if(!this.isSelected){
if(this.isLazy){
this.wakeUp("select");
}else{
this.isSelected=true;
this.isVisible=true;
this.bindingElement.style.position="static";
this._invokeManagedRecursiveFlex();
if(_b0e!=true){
this.dispatchAction(FocusBinding.ACTION_FOCUS);
}
}
}
};
TabPanelBinding.prototype.unselect=function(){
if(this.isSelected){
this.dispatchAction(FocusBinding.ACTION_BLUR);
this.isSelected=false;
this.isVisible=false;
this.bindingElement.style.position="absolute";
}
};
TabPanelBinding.prototype._invokeManagedRecursiveFlex=function(){
this.reflex(true);
};
TabPanelBinding.prototype.handleAction=function(_b0f){
TabPanelBinding.superclass.handleAction.call(this,_b0f);
var _b10=_b0f.target;
switch(_b0f.type){
case BalloonBinding.ACTION_INITIALIZE:
_b0f.consume();
break;
}
};
TabPanelBinding.newInstance=function(_b11){
var _b12=DOMUtil.createElementNS(Constants.NS_UI,"ui:tabpanel",_b11);
UserInterface.registerBinding(_b12,TabPanelBinding);
return UserInterface.getBinding(_b12);
};
SplitBoxBinding.prototype=new FlexBoxBinding;
SplitBoxBinding.prototype.constructor=SplitBoxBinding;
SplitBoxBinding.superclass=FlexBoxBinding.prototype;
SplitBoxBinding.ORIENT_HORIZONTAL="horizontal";
SplitBoxBinding.ORIENT_VERTICAL="vertical";
function SplitBoxBinding(){
this.logger=SystemLogger.getLogger("SplitBoxBinding");
this._orient=SplitBoxBinding.ORIENT_HORIZONTAL;
this.isLayoutInitialized=false;
this._isFirstLayout=true;
return this;
}
SplitBoxBinding.prototype.toString=function(){
return "[SplitBoxBinding]";
};
SplitBoxBinding.prototype.serialize=function(){
var _b13=SplitBoxBinding.superclass.serialize.call(this);
if(_b13){
_b13.orient=this.getOrient();
_b13.layout=this.getLayout();
}
return _b13;
};
SplitBoxBinding.prototype.onBindingAttach=function(){
SplitBoxBinding.superclass.onBindingAttach.call(this);
this.addActionListener(SplitterBinding.ACTION_DRAGGED,this);
this.addActionListener(SplitterBinding.ACTION_COLLAPSE,this);
this.addActionListener(SplitterBinding.ACTION_UNCOLLAPSE,this);
this._initializeLayout();
this._initializeOrient();
this._initializeSplitters();
};
SplitBoxBinding.prototype._initializeLayout=function(){
var _b14=this.getSplitPanelElements();
if(_b14.hasEntries()){
var _b15=new List(this.getLayout().split(":"));
if(_b15.getLength()!=_b14.getLength()){
throw new Error(this+" DOM subree invalid");
}else{
_b14.each(function(_b16){
_b16.setAttribute("ratio",_b15.getNext());
});
}
}
this.isLayoutInitialized=true;
};
SplitBoxBinding.prototype._initializeOrient=function(){
var _b17=this.getProperty("orient");
if(_b17){
this._orient=_b17;
}
this.attachClassName(this._orient);
};
SplitBoxBinding.prototype._initializeSplitters=function(){
var _b18=this.getSplitterBindings();
while(_b18.hasNext()){
var _b19=_b18.getNext();
if(_b19&&_b19.getProperty("collapsed")==true){
_b19.collapse();
}
}
};
SplitBoxBinding.prototype.handleAction=function(_b1a){
SplitBoxBinding.superclass.handleAction.call(this,_b1a);
switch(_b1a.type){
case SplitterBinding.ACTION_DRAGGED:
this.refreshLayout();
_b1a.consume();
break;
case SplitterBinding.ACTION_COLLAPSE:
this.collapse(_b1a.target);
_b1a.consume();
break;
case SplitterBinding.ACTION_UNCOLLAPSE:
this.unCollapse(_b1a.target);
_b1a.consume();
break;
}
};
SplitBoxBinding.prototype.flex=function(){
SplitBoxBinding.superclass.flex.call(this);
if(this.isAttached==true){
this.invokeLayout(true);
}
};
SplitBoxBinding.prototype.collapse=function(_b1b){
this._getSplitPanelBindingForSplitter(_b1b).collapse();
this.invokeLayout();
};
SplitBoxBinding.prototype.unCollapse=function(_b1c){
this._getSplitPanelBindingForSplitter(_b1c).unCollapse();
this.invokeLayout();
};
SplitBoxBinding.prototype._getSplitPanelBindingForSplitter=function(_b1d){
var _b1e=DOMUtil.getOrdinalPosition(_b1d.bindingElement,true);
var _b1f,_b20=this.getSplitPanelElements();
switch(_b1d.getCollapseDirection()){
case SplitterBinding.COLLAPSE_BEFORE:
_b1f=_b20.get(_b1e);
break;
case SplitterBinding.COLLAPSE_AFTER:
_b1f=_b20.get(_b1e+1);
break;
}
return UserInterface.getBinding(_b1f);
};
SplitBoxBinding.prototype.invokeLayout=function(_b21){
var _b22=this.isHorizontalOrient();
var _b23=this.getSplitPanelBindings();
var _b24=this.getSplitterBindings();
var _b25=new List();
var _b26,sum=0;
var _b28=0;
_b23.each(function(_b29){
if(_b29.isFixed==true){
if(!_b23.hasNext()){
_b28+=_b29.getFix();
}
_b25.add(0);
sum+=0;
}else{
_b26=_b29.getRatio();
_b25.add(_b26);
sum+=_b26;
}
});
if(sum==0){
this.logger.warn("Division by zero was hacked");
sum=1;
}
if(_b25.getLength()!=_b23.getLength()){
throw new Error(this+" Invalid property (ratio)");
}else{
var _b2a=_b22?this.getWidth():this.getHeight();
_b2a-=_b28;
_b24.each(function(_b2b){
if(_b2b.isVisible){
_b2a-=SplitterBinding.DIMENSION;
}
});
var unit=_b2a/sum;
var _b2d=0;
var self=this;
_b23.each(function(_b2f){
var span=0;
var _b31=_b25.getNext();
if(_b2f.isFixed){
span=_b2f.getFix();
}else{
span=Math.round(unit*_b31);
if(isNaN(span)){
alert("isNaN ( span ) ["+this.getProperty("layout")+"]");
}
}
_b2d+=span;
while(_b2d>_b2a){
_b2d--;
span--;
}
if(!_b2f.isFixed){
if(_b22){
_b2f.setWidth(span);
}else{
_b2f.setHeight(span);
}
}
});
}
if(_b21!=true){
this.reflex();
}
if(this._persist&&this._persist.layout){
var _b32=this.getLayout();
if(_b32){
this.setProperty("layout",_b32);
}
}
};
SplitBoxBinding.prototype.computeLayout=function(){
var _b33=this.isHorizontalOrient();
var _b34=this.getSplitPanelBindings();
var _b35=this.getSplitterBindings();
var _b36=null;
var _b37=null;
var unit=null;
var _b39=null;
var span=null;
_b34.each(function(_b3b){
if(!unit){
unit=_b33?_b3b.getWidth():_b3b.getHeight();
}
span=_b33?_b3b.getWidth():_b3b.getHeight();
if(_b39){
span-=_b39;
_b39=null;
}
_b36=_b35.getNext();
if(_b36&&_b36.offset){
_b39=_b36.offset;
span+=_b39;
}
_b3b.setRatio(span/unit);
});
};
SplitBoxBinding.prototype.refreshLayout=function(){
this.computeLayout();
this.invokeLayout();
};
SplitBoxBinding.prototype.setLayout=function(_b3c){
this.logger.debug(_b3c);
this.setProperty("layout",_b3c);
this._initializeLayout();
this.invokeLayout();
};
SplitBoxBinding.prototype.getLayout=function(){
if(!this.isLayoutInitialized){
if(!this.getProperty("layout")){
this.setProperty("layout",this.getDefaultLayout());
}
}else{
var _b3d="",_b3e=this.getSplitPanelBindings();
_b3e.each(function(_b3f){
_b3d+=_b3f.getRatio().toString();
_b3d+=_b3e.hasNext()?":":"";
});
this.setProperty("layout",_b3d);
}
return new String(this.getProperty("layout"));
};
SplitBoxBinding.prototype.getDefaultLayout=function(){
var _b40=this.getSplitPanelElements();
_b40.each(function(_b41){
layout+="1"+(_b40.hasNext()?":":"");
});
this.setProperty("layout",layout);
};
SplitBoxBinding.prototype.setWidth=function(_b42){
this.bindingElement.style.width=_b42+"px";
};
SplitBoxBinding.prototype.getWidth=function(){
return this.bindingElement.offsetWidth;
};
SplitBoxBinding.prototype.setHeight=function(_b43){
this.bindingElement.style.height=_b43+"px";
};
SplitBoxBinding.prototype.getHeight=function(){
return this.bindingElement.offsetHeight;
};
SplitBoxBinding.prototype.getOrient=function(){
return this.getProperty("orient");
};
SplitBoxBinding.prototype.isHorizontalOrient=function(){
return this._orient==SplitBoxBinding.ORIENT_HORIZONTAL;
};
SplitBoxBinding.prototype.getSplitPanelElements=function(){
return this.getChildElementsByLocalName("splitpanel");
};
SplitBoxBinding.prototype.getSplitPanelBindings=function(){
return this.getChildBindingsByLocalName("splitpanel");
};
SplitBoxBinding.prototype.getSplitterElements=function(){
return this.getChildElementsByLocalName("splitter");
};
SplitBoxBinding.prototype.getSplitterBindings=function(){
return this.getChildBindingsByLocalName("splitter");
};
SplitBoxBinding.prototype.fit=function(_b44){
if(!this.isFit||_b44){
if(this.isHorizontalOrient()){
var max=0;
var _b46=this.getSplitPanelBindings();
_b46.each(function(_b47){
var _b48=_b47.bindingElement.offsetHeight;
max=_b48>max?_b48:max;
});
this._setFitnessHeight(max);
}else{
throw "SplitBoxBinding enforceFitness not supported vertically!";
}
this.isFit=true;
}
};
SplitBoxBinding.newInstance=function(_b49){
var _b4a=DOMUtil.createElementNS(Constants.NS_UI,"ui:splitbox",_b49);
return UserInterface.registerBinding(_b4a,SplitBoxBinding);
};
SplitPanelBinding.prototype=new ControlBoxBinding;
SplitPanelBinding.prototype.constructor=SplitPanelBinding;
SplitPanelBinding.superclass=ControlBoxBinding.prototype;
function SplitPanelBinding(){
this.logger=SystemLogger.getLogger("SplitPanelBinding");
this._containingSplitBoxBinding=null;
this.isCollapsed=false;
this.isFixed=false;
this.isVisible=true;
this._fixedSpan=null;
this.isFlexible=true;
return this;
}
SplitPanelBinding.prototype.toString=function(){
return "[SplitPanelBinding]";
};
SplitPanelBinding.prototype.onBindingAttach=function(){
SplitPanelBinding.superclass.onBindingAttach.call(this);
this._containingSplitBoxBinding=this.getAncestorBindingByLocalName("splitbox");
this.attachClassName(this._containingSplitBoxBinding.getOrient());
this.parseDOMProperties();
};
SplitPanelBinding.prototype.parseDOMProperties=function(){
var type=this.getProperty("type");
if(type){
this.attachClassName(type);
}
var fix=this.getProperty("fix");
if(fix){
this.setFix(fix);
}
var _b4d=this.getProperty("hidden");
if(_b4d){
this.hide();
}
};
SplitPanelBinding.prototype.collapse=function(){
this.hide();
this.isCollapsed=true;
this.setProperty("collapsed","true");
};
SplitPanelBinding.prototype.unCollapse=function(){
this.show();
this.isCollapsed=false;
this.deleteProperty("collapsed");
};
SplitPanelBinding.prototype.hide=function(){
if(this.isVisible==true){
this.setProperty("ratiocache",this.getRatio());
this.setRatio(0);
this.bindingElement.style.display="none";
this.setProperty("hidden",true);
this.isVisible=false;
}
};
SplitPanelBinding.prototype.show=function(){
if(!this.isVisible){
var _b4e=this.getProperty("ratiocache");
if(_b4e){
this.setRatio(_b4e);
this.deleteProperty("ratiocache");
}else{
this._containingSplitBoxBinding.computeLayout();
}
this.bindingElement.style.display="block";
this.deleteProperty("hidden");
this.isVisible=true;
}
};
SplitPanelBinding.prototype.setWidth=function(_b4f){
if(!this.isFixed){
if(_b4f!=this.getWidth()){
if(_b4f<0){
_b4f=this.getWidth();
this.logger.warn("SplitPanelBinding#setWidth bug in Internet Explorer!");
}
try{
this.bindingElement.style.width=_b4f+"px";
}
catch(exception){
alert("SplitPanelBinding#setWidth: Occult width: "+_b4f);
alert(arguments.caller.callee);
}
}
}
};
SplitPanelBinding.prototype.getWidth=function(){
var _b50=null;
if(this.isFixed){
_b50=this.getFix();
}else{
_b50=this.bindingElement.offsetWidth;
}
return _b50;
};
SplitPanelBinding.prototype.setHeight=function(_b51){
if(!this.isFixed){
if(_b51!=this.getHeight()){
try{
this.bindingElement.style.height=_b51+"px";
}
catch(exception){
alert("SplitPanelBinding.prototype.setHeight"+arguments.caller.callee);
}
}
}
};
SplitPanelBinding.prototype.getHeight=function(){
var _b52=null;
if(this.isFixed){
_b52=this.getFix();
}else{
_b52=this.bindingElement.offsetHeight;
}
return _b52;
};
SplitPanelBinding.prototype.setRatio=function(_b53){
this.setProperty("ratio",_b53);
};
SplitPanelBinding.prototype.getRatio=function(){
return this.getProperty("ratio");
};
SplitPanelBinding.prototype.setFix=function(_b54){
if(_b54){
this._fixedSpan=_b54;
switch(this._containingSplitBoxBinding.getOrient()){
case SplitBoxBinding.ORIENT_HORIZONTAL:
this.logger.warn("Fix not properly supported on horizontal splitboxes!");
this.setWidth(_b54);
break;
case SplitBoxBinding.ORIENT_VERTICAL:
this.setHeight(_b54);
break;
}
this.isFixed=true;
}else{
this._fixedSpan=null;
this.isFixed=false;
}
};
SplitPanelBinding.prototype.getFix=function(){
return this._fixedSpan;
};
SplitPanelBinding.newInstance=function(_b55){
var _b56=DOMUtil.createElementNS(Constants.NS_UI,"ui:splitpanel",_b55);
return UserInterface.registerBinding(_b56,SplitPanelBinding);
};
SplitterBinding.prototype=new Binding;
SplitterBinding.prototype.constructor=SplitterBinding;
SplitterBinding.superclass=Binding.prototype;
SplitterBinding.DIMENSION=8;
SplitterBinding.BUFFER=30;
SplitterBinding.COLLAPSE_AFTER="after";
SplitterBinding.COLLAPSE_BEFORE="before";
SplitterBinding.ACTION_DRAGSTART="splitter dragstart";
SplitterBinding.ACTION_DRAGGED="splitter dragged";
SplitterBinding.ACTION_COLLAPSE="splitter collapse";
SplitterBinding.ACTION_UNCOLLAPSE="splitter uncollapse";
SplitterBinding.CLASSNAME_ACTIVE="active";
SplitterBinding.CLASSNAME_HOVER="hover";
function SplitterBinding(){
this.logger=SystemLogger.getLogger("SplitterBinding");
this.isDraggable=true;
this.isDragging=false;
this.isCollapsed=false;
this.isDisabled=true;
this._containingSplitBoxBinding=null;
this._collapseDirection=SplitterBinding.COLLAPSE_AFTER;
this.offset=null;
return this;
}
SplitterBinding.prototype.toString=function(){
return "[SplitterBinding]";
};
SplitterBinding.prototype.serialize=function(){
var _b57=SplitBoxBinding.superclass.serialize.call(this);
if(_b57){
_b57.collapse=this.getProperty("collapse");
_b57.collapsed=this.getProperty("collapsed");
_b57.disabled=this.getProperty("isdisabled");
}
return _b57;
};
SplitterBinding.prototype.onBindingAttach=function(){
SplitterBinding.superclass.onBindingAttach.call(this);
this.addActionListener(Binding.ACTION_DRAG);
this._containingSplitBoxBinding=this.getAncestorBindingByLocalName("splitbox");
this.attachClassName(this._containingSplitBoxBinding.getOrient());
this._collapseDirection=this.getProperty("collapse");
this.buildDOMContent();
this.attachDOMEvents();
var _b58=this.getProperty("hidden");
if(_b58){
this.hide();
}
};
SplitterBinding.prototype.buildDOMContent=function(){
this.shadowTree.splitterBody=DOMUtil.createElementNS(Constants.NS_UI,"ui:splitterbody",this.bindingDocument);
this.bindingElement.appendChild(this.shadowTree.splitterBody);
if(Client.isMozilla==true){
var text=this.bindingDocument.createTextNode("!");
this.bindingElement.appendChild(text);
}
};
SplitterBinding.prototype.attachDOMEvents=function(){
this.addEventListener(DOMEvents.MOUSEOVER);
this.addEventListener(DOMEvents.MOUSEOUT);
};
SplitterBinding.prototype.collapse=function(){
if(!this.isCollapsed){
this.hide();
this.setProperty("collapsed","true");
this.isCollapsed=true;
this.dispatchAction(SplitterBinding.ACTION_COLLAPSE);
}
};
SplitterBinding.prototype.unCollapse=function(){
if(this.isCollapsed==true){
this.show();
this.deleteProperty("collapsed");
this.isCollapsed=false;
this.dispatchAction(SplitterBinding.ACTION_UNCOLLAPSE);
}
};
SplitterBinding.prototype.getCollapseDirection=function(){
return this._collapseDirection;
};
SplitterBinding.prototype.setCollapseDirection=function(_b5a){
this.setProperty("collapse",_b5a);
this._collapseDirection=_b5a;
};
SplitterBinding.prototype.handleAction=function(_b5b){
SplitterBinding.superclass.handleAction.call(this,_b5b);
switch(_b5b.type){
case Binding.ACTION_DRAG:
this.dragger.registerHandler(this);
_b5b.consume();
break;
}
};
SplitterBinding.prototype.handleEvent=function(e){
SplitterBinding.superclass.handleEvent.call(this,e);
var _b5d=this;
if(!this.isDragging&&!this.isDisabled){
switch(e.type){
case DOMEvents.MOUSEOVER:
window.splitterTimeout=window.setTimeout(function(){
_b5d.shadowTree.splitterBody.className=SplitterBinding.CLASSNAME_HOVER;
},250);
break;
case DOMEvents.MOUSEOUT:
if(window.splitterTimeout){
window.clearTimeout(window.splitterTimeout);
}
if(_b5d.shadowTree.splitterBody.className==SplitterBinding.CLASSNAME_HOVER){
this.shadowTree.splitterBody.className="";
}
break;
}
}
};
SplitterBinding.prototype.onDragStart=function(_b5e){
this.attachClassName(SplitterBinding.CLASSNAME_ACTIVE);
this.shadowTree.splitterBody.className=SplitterBinding.CLASSNAME_ACTIVE;
this.isDragging=true;
};
SplitterBinding.prototype.onDrag=function(diff){
diff=this.getEvaluatedDiff(diff);
if(this._containingSplitBoxBinding.isHorizontalOrient()){
this.shadowTree.splitterBody.style.left=diff.x+"px";
}else{
this.shadowTree.splitterBody.style.top=diff.y+"px";
}
};
SplitterBinding.prototype.onDragStop=function(diff){
diff=this.getEvaluatedDiff(diff);
this.offset=this._containingSplitBoxBinding.isHorizontalOrient()?diff.x:diff.y;
this.dispatchAction(SplitterBinding.ACTION_DRAGGED);
this.offset=null;
this.detachClassName(SplitterBinding.CLASSNAME_ACTIVE);
this.shadowTree.splitterBody.className="";
this.isDragging=false;
if(this._containingSplitBoxBinding.isHorizontalOrient()){
this.shadowTree.splitterBody.style.left="0";
}else{
this.shadowTree.splitterBody.style.top="0";
}
};
SplitterBinding.prototype.getEvaluatedDiff=function(diff){
switch(this._containingSplitBoxBinding.getOrient()){
case SplitBoxBinding.ORIENT_HORIZONTAL:
var x=this.bindingElement.offsetLeft;
var w=this.bindingElement.offsetWidth;
var t=this.bindingElement.parentNode.offsetWidth;
var min=-x+SplitterBinding.BUFFER;
var max=t-x-w-SplitterBinding.BUFFER;
diff.x=diff.x<=min?min:diff.x;
diff.x=diff.x>=max?max:diff.x;
break;
case SplitBoxBinding.ORIENT_VERTICAL:
var y=this.bindingElement.offsetTop;
var h=this.bindingElement.offsetHeight;
var t=this.bindingElement.parentNode.offsetHeight;
var min=-y+SplitterBinding.BUFFER;
var max=t-y-h-SplitterBinding.BUFFER;
diff.y=diff.y<=min?min:diff.y;
diff.y=diff.y>=max?max:diff.y;
break;
}
return diff;
};
SplitterBinding.prototype.disable=function(){
if(!this.isDisabled){
alert("disable");
this.isDisabled=true;
this.disableDragging();
this.setProperty("isdisabled",true);
}
};
SplitterBinding.prototype.enable=function(){
if(this.isDisabled==true){
this.isDisabled=false;
this.enableDragging();
this.deleteProperty("isdisabled");
}
};
SplitterBinding.newInstance=function(_b69){
var _b6a=DOMUtil.createElementNS(Constants.NS_UI,"ui:splitter",_b69);
return UserInterface.registerBinding(_b6a,SplitterBinding);
};
DecksBinding.prototype=new FlexBoxBinding;
DecksBinding.prototype.constructor=DecksBinding;
DecksBinding.superclass=FlexBoxBinding.prototype;
DecksBinding.ACTION_SELECTED="decks deck selected";
DecksBinding.NODENAME_DECK="deck";
function DecksBinding(){
this.logger=SystemLogger.getLogger("DecksBinding");
this._selectedDeckBinding=null;
this._lastKnownDimension=null;
}
DecksBinding.prototype.toString=function(){
return "[DecksBinding]";
};
DecksBinding.prototype.onBindingRegister=function(){
DecksBinding.superclass.onBindingRegister.call(this);
this._lastKnownDimension=new Dimension(0,0);
this.attachClassName("deckselement");
};
DecksBinding.prototype.onBindingAttach=function(){
DecksBinding.superclass.onBindingAttach.call(this);
var _b6b=this.getProperty("selectedindex");
var _b6c=this.getDeckElements();
if(_b6c.hasEntries()){
var _b6d=false;
var _b6e=0;
while(_b6c.hasNext()){
var deck=_b6c.getNext();
if(_b6b&&_b6e==_b6b){
deck.setAttribute("selected","true");
_b6d=true;
}else{
if(deck.getAttribute("selected")=="true"){
_b6d=true;
}
}
_b6e++;
}
if(!_b6d){
_b6c.getFirst().setAttribute("selected","true");
}
}
};
DecksBinding.prototype.getDeckElements=function(){
return this.getChildElementsByLocalName(this.constructor.NODENAME_DECK);
};
DecksBinding.prototype.select=function(arg){
var _b71=this.getBindingForArgument(arg);
if(_b71!=null){
if(_b71!=this._selectedDeckBinding){
if(this._selectedDeckBinding){
this._selectedDeckBinding.unselect();
}
_b71.select();
this._selectedDeckBinding=_b71;
var _b72=this.getProperty("selectedindex");
if(_b72!=null){
this.setProperty("selectedindex",DOMUtil.getOrdinalPosition(_b71.bindingElement,true));
}
this.dispatchAction(DecksBinding.ACTION_SELECTED);
this.dispatchAction(FocusBinding.ACTION_UPDATE);
}
}else{
throw "No deck for argument "+arg;
}
};
DecksBinding.prototype.hasDimensionsChanged=function(){
var _b73=false;
var dim1=this.boxObject.getDimension();
var dim2=this._lastKnownDimension;
if(!Dimension.isEqual(dim1,dim2)){
_b73=true;
this._lastKnownDimension=dim1;
}
return _b73;
};
DecksBinding.prototype.getSelectedDeckBinding=function(){
return this._selectedDeckBinding;
};
DecksBinding.newInstance=function(_b76){
var _b77=DOMUtil.createElementNS(Constants.NS_UI,"ui:decks",_b76);
return UserInterface.registerBinding(_b77,DecksBinding);
};
DeckBinding.prototype=new FlexBoxBinding;
DeckBinding.prototype.constructor=DeckBinding;
DeckBinding.superclass=FlexBoxBinding.prototype;
DeckBinding.ACTION_SELECTED="deck selected";
DeckBinding.ACTION_UNSELECTED="deck unselected";
DeckBinding.NODENAME_DECKS="decks";
DeckBinding.CLASSNAME="deckelement";
function DeckBinding(){
this.logger=SystemLogger.getLogger("DeckBinding");
this.isSelected=false;
this.isVisible=false;
this.containingDecksBinding=null;
return this;
}
DeckBinding.prototype.toString=function(){
return "[DeckBinding]";
};
DeckBinding.prototype.onBindingRegister=function(){
DeckBinding.superclass.onBindingRegister.call(this);
this.addActionListener(BalloonBinding.ACTION_INITIALIZE);
this.attachClassName(DeckBinding.CLASSNAME);
};
DeckBinding.prototype.onBindingAttach=function(){
DeckBinding.superclass.onBindingAttach.call(this);
this.containingDecksBinding=this.getAncestorBindingByLocalName(this.constructor.NODENAME_DECKS);
if(this.getProperty("selected")==true){
this.containingDecksBinding.select(this);
}
};
DeckBinding.prototype.handleAction=function(_b78){
DeckBinding.superclass.handleAction.call(this,_b78);
var _b79=_b78.target;
switch(_b78.type){
case BalloonBinding.ACTION_INITIALIZE:
_b78.consume();
break;
}
};
DeckBinding.prototype.select=function(){
if(!this.isSelected){
if(this.isLazy==true){
this.wakeUp("select");
}else{
this.isSelected=true;
this.isVisible=true;
this.setProperty("selected","true");
this.bindingElement.style.position="static";
this._invokeManagedRecursiveFlex();
this.dispatchAction(DeckBinding.ACTION_SELECTED);
var root=UserInterface.getBinding(this.bindingDocument.body);
if(root.isActivated){
this.dispatchAction(FocusBinding.ACTION_FOCUS);
}
}
}
};
DeckBinding.prototype.unselect=function(){
if(this.isSelected){
this.dispatchAction(FocusBinding.ACTION_BLUR);
this.deleteProperty("selected");
this.isSelected=false;
this.isVisible=false;
this.bindingElement.style.position="absolute";
this.dispatchAction(DeckBinding.ACTION_UNSELECTED);
}
};
DeckBinding.prototype._invokeManagedRecursiveFlex=function(){
this.reflex(true);
};
DeckBinding.newInstance=function(_b7b){
var _b7c=DOMUtil.createElementNS(Constants.NS_UI,"ui:deck",_b7b);
return UserInterface.registerBinding(_b7c,DeckBinding);
};
ToolBarBinding.prototype=new Binding;
ToolBarBinding.prototype.constructor=ToolBarBinding;
ToolBarBinding.superclass=Binding.prototype;
ToolBarBinding.TYPE_TEXTONLY="textonly";
ToolBarBinding.TYPE_IMAGESONLY="imagesonly";
ToolBarBinding.TYPE_DEFAULT="imagesandtext";
ToolBarBinding.CLASSNAME_TEXTONLY="textonly";
ToolBarBinding.CLASSNAME_IMAGESONLY="imagesonly";
ToolBarBinding.CLASSNAME_IMAGESIZELARGE="imagesizelarge";
ToolBarBinding.CLASSNAME_IMAGESIZEXLARGE="imagesizexlarge";
ToolBarBinding.IMAGESIZE_NORMAL="normal";
ToolBarBinding.IMAGESIZE_LARGE="large";
ToolBarBinding.IMAGESIZE_XLARGE="xlarge";
function ToolBarBinding(){
this.logger=SystemLogger.getLogger("ToolBarBinding");
this.hasImages=true;
this.hasText=true;
this._imageSize=ToolBarBinding.IMAGESIZE_NORMAL;
this.type=ToolBarBinding.TYPE_DEFAULT;
this._hasDefaultContent=true;
this._toolBarBodyRight=null;
this._toolBarBodyLeft=null;
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID,FitnessCrawler.ID]);
this._hasDOMContent=false;
return this;
}
ToolBarBinding.prototype.toString=function(){
return "[ToolBarBinding]";
};
ToolBarBinding.prototype.onBindingRegister=function(){
ToolBarBinding.superclass.onBindingRegister.call(this);
this.attachClassName(Binding.CLASSNAME_CLEARFLOAT);
};
ToolBarBinding.prototype.onBindingAttach=function(){
ToolBarBinding.superclass.onBindingAttach.call(this);
this.parseDOMProperties();
this.buildDOMContent();
this.addMembers(this.getChildBindingsByLocalName("toolbarbody"));
};
ToolBarBinding.prototype.onMemberInitialize=function(_b7d){
if(_b7d instanceof ToolBarBodyBinding){
if(_b7d.isRightAligned){
if(!this._toolBarBodyRight){
this._toolBarBodyRight=_b7d;
}
}else{
if(!this._toolBarBodyLeft){
this._toolBarBodyLeft=_b7d;
}
}
}
ToolBarBinding.superclass.onMemberInitialize.call(this,_b7d);
};
ToolBarBinding.prototype.parseDOMProperties=function(){
var _b7e=this.getProperty("imagesize");
var type=this.getProperty("type");
if(_b7e){
this.setImageSize(_b7e);
}
if(type){
this.setType(type);
}else{
this.setType(this.type);
}
};
ToolBarBinding.prototype.buildDOMContent=function(){
if(this._hasDefaultContent==true&&!this._hasDOMContent){
var _b80=ToolBarGroupBinding.newInstance(this.bindingDocument);
_b80.add(ToolBarButtonBinding.newInstance(this.bindingDocument));
_b80.isDefaultContent=true;
this.add(_b80);
_b80.attachRecursive();
this._hasDOMContent=true;
}
};
ToolBarBinding.prototype.flex=function(){
var left=this._toolBarBodyLeft;
var _b82=this._toolBarBodyRight;
if(left!=null&&left.hasClassName("max")){
this._maxToolBarGroup(left,_b82);
}
if(_b82!=null&&_b82.hasClassName("max")){
this._maxToolBarGroup(_b82,left);
}
};
ToolBarBinding.prototype._maxToolBarGroup=function(max,_b84){
var _b85=this.boxObject.getDimension().w;
var _b86=CSSComputer.getPadding(this.bindingElement);
_b85-=(_b86.left+_b86.right);
if(_b84!=null){
_b85-=_b84.boxObject.getDimension().w;
if(!Client.isWindows){
_b85-=1;
}
if(Client.isExplorer){
_b85-=15;
}
}
max.bindingElement.style.width=_b85+"px";
};
ToolBarBinding.prototype.getToolBarGroupByIndex=function(_b87){
return this.getDescendantBindingsByLocalName("toolbargroup").get(_b87);
};
ToolBarBinding.prototype.addLeft=function(_b88,_b89){
var _b8a=null;
if(this._toolBarBodyLeft!=null){
_b8a=this._toolBarBodyLeft.add(_b88,_b89);
}else{
throw new Error("No left toolbarbody");
}
return _b8a;
};
ToolBarBinding.prototype.addLeftFirst=function(_b8b,_b8c){
var _b8d=null;
if(this._toolBarBodyLeft){
_b8d=this._toolBarBodyLeft.addFirst(_b8b,_b8c);
}else{
throw new Error("No left toolbarbody");
}
return _b8d;
};
ToolBarBinding.prototype.addRight=function(_b8e){
var _b8f=null;
if(this._toolBarBodyRight){
_b8f=this._toolBarBodyRight.add(_b8e);
}else{
throw new Error("No left toolbarbody");
}
return _b8f;
};
ToolBarBinding.prototype.empty=function(){
this.emptyLeft();
this.emptyRight();
};
ToolBarBinding.prototype.emptyLeft=function(){
if(this._toolBarBodyLeft){
this._toolBarBodyLeft.empty();
}
};
ToolBarBinding.prototype.emptyRight=function(){
if(this._toolBarBodyRight){
this._toolBarBodyRight.empty();
}
};
ToolBarBinding.prototype.setImageSize=function(size){
switch(size){
case ToolBarBinding.IMAGESIZE_LARGE:
this.attachClassName(ToolBarBinding.CLASSNAME_IMAGESIZELARGE);
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESIZEXLARGE);
break;
case ToolBarBinding.IMAGESIZE_XLARGE:
this.attachClassName(ToolBarBinding.CLASSNAME_IMAGESIZEXLARGE);
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESIZELARGE);
break;
default:
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESIZELARGE);
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESIZEXLARGE);
break;
}
this._imageSize=size;
this.setProperty("imagesize",size);
};
ToolBarBinding.prototype.getImageSize=function(){
return this._imageSize;
};
ToolBarBinding.prototype.showImagesOnly=function(){
this.detachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this.attachClassName(ToolBarBinding.CLASSNAME_IMAGESONLY);
this.hasImages=true;
this.hasText=false;
};
ToolBarBinding.prototype.showTextOnly=function(){
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESONLY);
this.attachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this.hasImages=false;
this.hasText=true;
};
ToolBarBinding.prototype.showBoth=function(){
this.detachClassName(ToolBarBinding.CLASSNAME_IMAGESONLY);
this.detachClassName(ToolBarBinding.CLASSNAME_TEXTONLY);
this.hasImages=true;
this.hasText=true;
};
ToolBarBinding.prototype.setType=function(type){
switch(type){
case ToolBarBinding.TYPE_TEXTONLY:
this.showTextOnly();
break;
case ToolBarBinding.TYPE_IMAGESONLY:
this.showImagesOnly();
break;
default:
this.showBoth();
break;
}
this.setProperty("type",type);
};
ToolBarBinding.newInstance=function(_b92){
var _b93=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbar",_b92);
return UserInterface.registerBinding(_b93,ToolBarBinding);
};
ToolBarBodyBinding.prototype=new Binding;
ToolBarBodyBinding.prototype.constructor=ToolBarBodyBinding;
ToolBarBodyBinding.superclass=Binding.prototype;
function ToolBarBodyBinding(){
this.logger=SystemLogger.getLogger("ToolBarBodyBinding");
this.isRightAligned=false;
return this;
}
ToolBarBodyBinding.prototype.toString=function(){
return "[ToolBarBodyBinding]";
};
ToolBarBodyBinding.prototype.onBindingAttach=function(){
ToolBarBodyBinding.superclass.onBindingAttach.call(this);
this.addMembers(this.getChildBindingsByLocalName("toolbargroup"));
if(this.getProperty("align")=="right"||this.isRightAligned){
this.alignRight();
}
};
ToolBarBodyBinding.prototype.onBindingInitialize=function(){
this.refreshToolBarGroups();
ToolBarBodyBinding.superclass.onBindingInitialize.call(this);
};
ToolBarBodyBinding.prototype.alignRight=function(){
this.attachClassName("alignright");
this.setProperty("align","right");
this.isRightAligned=true;
};
ToolBarBodyBinding.prototype.refreshToolBarGroups=function(){
var _b94=this.getDescendantBindingsByLocalName("toolbargroup");
var _b95=new List();
var _b96=true;
_b94.each(function(_b97){
if(_b97.isVisible&&!_b97.isDefaultContent){
_b95.add(_b97);
}
});
while(_b95.hasNext()){
var _b98=_b95.getNext();
_b98.setLayout(ToolBarGroupBinding.LAYOUT_DEFAULT);
if(_b96){
_b98.setLayout(ToolBarGroupBinding.LAYOUT_FIRST);
_b96=false;
}
if(!_b95.hasNext()){
_b98.setLayout(ToolBarGroupBinding.LAYOUT_LAST);
}
}
if(this.getProperty("equalsize")){
this.enforceEqualSize();
}
};
ToolBarBodyBinding.prototype.enforceEqualSize=function(){
var max=0,list=this.getDescendantBindingsByLocalName("clickbutton");
while(list.hasNext()){
var _b9b=list.getNext();
var _b9c=_b9b.getEqualSizeWidth();
if(_b9c>max){
max=_b9c;
}
}
if(max!=0){
list.reset();
while(list.hasNext()){
var _b9b=list.getNext();
_b9b.setEqualSizeWidth(max);
}
}
};
ToolBarBodyBinding.prototype.empty=function(){
this.detachRecursive();
this.bindingElement.innerHTML="";
};
ToolBarBodyBinding.prototype.add=function(_b9d,_b9e){
var _b9f=ToolBarBinding.superclass.add.call(this,_b9d);
if(!_b9e){
if(_b9d instanceof ToolBarGroupBinding&&this.isAttached){
this.refreshToolBarGroups();
}
}
return _b9f;
};
ToolBarBodyBinding.prototype.addFirst=function(_ba0,_ba1){
var _ba2=ToolBarBinding.superclass.addFirst.call(this,_ba0);
if(!_ba1){
if(_ba0 instanceof ToolBarGroupBinding&&this.isAttached){
this.refreshToolBarGroups();
}
}
return _ba2;
};
ToolBarBodyBinding.newInstance=function(_ba3){
var _ba4=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbody",_ba3);
return UserInterface.registerBinding(_ba4,ToolBarBodyBinding);
};
ToolBarGroupBinding.prototype=new RadioGroupBinding;
ToolBarGroupBinding.prototype.constructor=ToolBarGroupBinding;
ToolBarGroupBinding.superclass=RadioGroupBinding.prototype;
ToolBarGroupBinding.LAYOUT_DEFAULT=0;
ToolBarGroupBinding.LAYOUT_FIRST=1;
ToolBarGroupBinding.LAYOUT_LAST=2;
ToolBarGroupBinding.CLASSNAME_DEFAULTCONTENT="defaultcontent";
function ToolBarGroupBinding(){
this.logger=SystemLogger.getLogger("ToolBarGroupBinding");
this.isDefaultContent=false;
}
ToolBarGroupBinding.prototype.toString=function(){
return "[ToolBarGroupBinding]";
};
ToolBarGroupBinding.prototype.onBindingAttach=function(){
ToolBarGroupBinding.superclass.onBindingAttach.call(this);
this.addMembers(this.getDescendantBindingsByLocalName("toolbarbutton"));
this.addMembers(this.getDescendantBindingsByLocalName("toolbarlabel"));
this.addMembers(this.getDescendantBindingsByLocalName("clickbutton"));
if(this.isDefaultContent==true){
this.attachClassName(ToolBarGroupBinding.CLASSNAME_DEFAULTCONTENT);
}
};
ToolBarGroupBinding.prototype.setLayout=function(_ba5){
switch(_ba5){
case ToolBarGroupBinding.LAYOUT_DEFAULT:
this.detachClassName("first");
this.detachClassName("last");
break;
case ToolBarGroupBinding.LAYOUT_FIRST:
this.attachClassName("first");
break;
case ToolBarGroupBinding.LAYOUT_LAST:
this.attachClassName("last");
break;
}
};
ToolBarGroupBinding.prototype.show=function(){
ToolBarGroupBinding.superclass.show.call(this);
var _ba6=this.bindingElement.parentNode;
if(DOMUtil.getLocalName(_ba6)=="toolbarbody"){
UserInterface.getBinding(_ba6).refreshToolBarGroups();
}
};
ToolBarGroupBinding.prototype.hide=function(){
ToolBarGroupBinding.superclass.hide.call(this);
var _ba7=this.bindingElement.parentNode;
if(DOMUtil.getLocalName(_ba7)=="toolbarbody"){
UserInterface.getBinding(_ba7).refreshToolBarGroups();
}
};
ToolBarGroupBinding.newInstance=function(_ba8){
var _ba9=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbargroup",_ba8);
return UserInterface.registerBinding(_ba9,ToolBarGroupBinding);
};
ToolBarButtonBinding.prototype=new ButtonBinding;
ToolBarButtonBinding.prototype.constructor=ToolBarButtonBinding;
ToolBarButtonBinding.superclass=ButtonBinding.prototype;
function ToolBarButtonBinding(){
this.logger=SystemLogger.getLogger("ToolBarButtonBinding");
}
ToolBarButtonBinding.prototype.toString=function(){
return "[ToolBarButtonBinding]";
};
ToolBarButtonBinding.newInstance=function(_baa){
var _bab=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_baa);
return UserInterface.registerBinding(_bab,ToolBarButtonBinding);
};
ToolBarLabelBinding.prototype=new Binding;
ToolBarLabelBinding.prototype.constructor=ToolBarLabelBinding;
ToolBarLabelBinding.superclass=Binding.prototype;
function ToolBarLabelBinding(){
this.logger=SystemLogger.getLogger("ToolBarLabelBinding");
}
ToolBarLabelBinding.prototype.toString=function(){
return "[ToolBarLabelBinding]";
};
ToolBarLabelBinding.prototype.onBindingAttach=function(){
ToolBarLabelBinding.superclass.onBindingAttach.call(this);
this._labelBinding=this.add(LabelBinding.newInstance(this.bindingDocument));
this.shadowTree.label=this._labelBinding;
var _bac=this.getProperty("label");
var _bad=this.getProperty("image");
if(_bac){
this.setLabel(_bac);
}
if(_bad){
this.setImage(_bad);
}
};
ToolBarLabelBinding.prototype.setLabel=function(_bae,_baf){
if(this.isAttached){
this._labelBinding.setLabel(_bae,_baf);
}
this.setProperty("label",_bae);
};
ToolBarLabelBinding.prototype.setImage=function(_bb0,_bb1){
if(this.isAttached){
this._labelBinding.setImage(_bb0,_bb1);
}
this.setProperty("image",_bb0);
};
ToolBarLabelBinding.newInstance=function(_bb2){
var _bb3=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarlabel",_bb2);
return UserInterface.registerBinding(_bb3,ToolBarLabelBinding);
};
DialogToolBarBinding.prototype=new ToolBarBinding;
DialogToolBarBinding.prototype.constructor=DialogToolBarBinding;
DialogToolBarBinding.superclass=ToolBarBinding.prototype;
function DialogToolBarBinding(){
this.logger=SystemLogger.getLogger("DialogToolBarBinding");
this._buttons=null;
this._defaultButton=null;
this._focusedButton=null;
this._isListening=false;
this.crawlerFilters=new List([FlexBoxCrawler.ID]);
return this;
}
DialogToolBarBinding.prototype.toString=function(){
return "[DialogToolBarBinding]";
};
DialogToolBarBinding.prototype.onBindingRegister=function(){
DialogToolBarBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_FOCUSED);
this.addActionListener(Binding.ACTION_BLURRED);
};
DialogToolBarBinding.prototype.onBindingDispose=function(){
DialogToolBarBinding.superclass.onBindingDispose.call(this);
if(this._isListening==true){
this.unsubscribe(BroadcastMessages.KEY_ENTER);
}
};
DialogToolBarBinding.prototype.onBindingInitialize=function(){
this.indexDialogButtons();
DialogToolBarBinding.superclass.onBindingInitialize.call(this);
};
DialogToolBarBinding.prototype.indexDialogButtons=function(){
var _bb4=this.getDescendantBindingsByLocalName("clickbutton");
if(_bb4.hasEntries()){
while(_bb4.hasNext()){
var _bb5=_bb4.getNext();
if(_bb5.isDefault){
this._defaultButton=_bb5;
_bb5.attachClassName(ButtonBinding.CLASSNAME_DEFAULT);
}
if(!this._isListening&&_bb5.isFocusable){
this.subscribe(BroadcastMessages.KEY_ENTER);
this._isListening=true;
}
}
this._buttons=_bb4;
}
};
DialogToolBarBinding.prototype.handleBroadcast=function(_bb6,arg){
DialogToolBarBinding.superclass.handleBroadcast.call(this,_bb6,arg);
switch(_bb6){
case BroadcastMessages.KEY_ENTER:
if(!PopupBinding.hasActiveInstances()&&!EditorBinding.isActive){
if(Binding.exists(this)){
var _bb8=this.getAncestorBindingByType(DialogBinding,true);
if(_bb8!=null&&_bb8.isActive){
if(this._focusedButton!=null){
if(!this._focusedButton.isDisabled){
this.unsubscribe(BroadcastMessages.KEY_ENTER);
this._focusedButton.fireCommand();
}
}else{
if(!this._defaultButton.isDisabled){
this.unsubscribe(BroadcastMessages.KEY_ENTER);
this._defaultButton.fireCommand();
}
}
}
}else{
this.logger.error("Ouch: DialogToolBarBinding#handleBroadcast");
}
}
break;
}
};
DialogToolBarBinding.prototype.handleAction=function(_bb9){
DialogToolBarBinding.superclass.handleAction.call(this,_bb9);
var _bba=_bb9.target;
var _bbb=false;
var _bbc=this._buttons.reset();
if(_bba instanceof ClickButtonBinding){
switch(_bb9.type){
case Binding.ACTION_FOCUSED:
_bba.attachClassName(ButtonBinding.CLASSNAME_FOCUSED);
this._focusedButton=_bba;
if(this._defaultButton){
this._defaultButton.detachClassName(ButtonBinding.CLASSNAME_DEFAULT);
}
break;
case Binding.ACTION_BLURRED:
_bba.detachClassName(ButtonBinding.CLASSNAME_FOCUSED);
break;
}
}
if(this._defaultButton){
while(!_bbb&&_bbc.hasNext()){
var _bbd=_bbc.getNext();
_bbb=_bbd.isFocused;
}
if(!_bbb){
this._defaultButton.attachClassName(ButtonBinding.CLASSNAME_DEFAULT);
this._focusedButton=null;
}
}
};
ComboBoxBinding.prototype=new Binding;
ComboBoxBinding.prototype.constructor=ComboBoxBinding;
ComboBoxBinding.superclass=Binding.prototype;
function ComboBoxBinding(){
this.logger=SystemLogger.getLogger("ComboBoxBinding");
return this;
}
ComboBoxBinding.prototype.toString=function(){
return "[ComboBoxBinding]";
};
ComboBoxBinding.prototype.onBindingAttach=function(){
ComboBoxBinding.superclass.onBindingAttach.call(this);
var text=this.bindingDocument.createTextNode(Resolver.resolve("\u25bc"));
this.bindingElement.appendChild(text);
};
ComboBoxBinding.newInstance=function(_bbf){
var _bc0=DOMUtil.createElementNS(Constants.NS_UI,"ui:combobox",_bbf);
return UserInterface.registerBinding(_bc0,ComboBoxBinding);
};
ToolBarComboButtonBinding.prototype=new ToolBarButtonBinding;
ToolBarComboButtonBinding.prototype.constructor=ToolBarComboButtonBinding;
ToolBarComboButtonBinding.superclass=ToolBarButtonBinding.prototype;
ToolBarComboButtonBinding.CLASSNAME_COMBOBUTTON="combobutton";
function ToolBarComboButtonBinding(){
this.logger=SystemLogger.getLogger("ToolBarComboButtonBinding");
this.isComboButton=true;
this.isCheckButton=true;
return this;
}
ToolBarComboButtonBinding.prototype.toString=function(){
return "[ToolBarComboButtonBinding]";
};
ToolBarComboButtonBinding.prototype.onBindingAttach=function(){
ToolBarComboButtonBinding.superclass.onBindingAttach.call(this);
this.comboBoxBinding=ComboBoxBinding.newInstance(this.bindingDocument);
this.add(this.comboBoxBinding);
this.comboBoxBinding.attach();
this.attachClassName(ToolBarComboButtonBinding.CLASSNAME_COMBOBUTTON);
};
ToolBarComboButtonBinding.prototype.handleBroadcast=function(_bc1,arg){
ToolBarComboButtonBinding.superclass.handleBroadcast.call(this,_bc1,arg);
};
ToolBarComboButtonBinding.prototype.setPopup=function(arg){
ToolBarComboButtonBinding.superclass.setPopup.call(this,arg);
var self=this;
var _bc5=this.popupBinding.getDescendantBindingsByType(MenuItemBinding);
_bc5.each(function(_bc6){
var _bc7=_bc6.getProperty("oncommand");
_bc6.setProperty("hiddencommand",_bc7);
_bc6.deleteProperty("oncommand");
_bc6.oncommand=function(){
self.setAndFireButton(this);
};
});
var _bc8=null;
var _bc9=this.getActiveMenuItemId();
_bc5.reset();
while(_bc5.hasNext()){
var _bca=_bc5.getNext();
if(_bca.getProperty("id")==_bc9){
_bc8=_bca;
break;
}
}
if(_bc8==null&&_bc5.hasEntries()){
_bc8=_bc5.getFirst();
}
if(_bc8!=null){
this.setButton(_bc8);
}
};
ToolBarComboButtonBinding.prototype.setButton=function(_bcb){
if(_bcb instanceof MenuItemBinding){
var _bcc=_bcb.getProperty("label");
var _bcd=_bcb.getProperty("image");
var _bce=_bcb.getProperty("image-hover");
var _bcf=_bcb.getProperty("image-active");
var _bd0=_bcb.getProperty("image-disabled");
var _bd1=_bcb.getProperty("hiddencommand");
this.setLabel(_bcc?_bcc:"");
this.image=_bcd;
this.imageHover=_bcd;
this.imageActive=_bcf;
this.imageDisabled=_bd0;
this.imageProfile=new ImageProfile(this);
this._stateManager.imageProfile=this.imageProfile;
this.setImage(this.imageProfile.getDefaultImage());
this.oncommand=function(){
Binding.evaluate(_bd1,this);
};
this.hideActiveItem(_bcb);
}
};
ToolBarComboButtonBinding.prototype.setAndFireButton=function(_bd2){
if(_bd2 instanceof MenuItemBinding){
this.setButton(_bd2);
this.setActiveMenuItemId(_bd2.getProperty("id"));
this.fireCommand();
}
};
ToolBarComboButtonBinding.prototype.hideActiveItem=function(_bd3){
this.popupBinding.getDescendantBindingsByType(MenuItemBinding).each(function(_bd4){
if(_bd4==_bd3){
Binding.prototype.hide.call(_bd4);
}else{
Binding.prototype.show.call(_bd4);
}
});
};
ToolBarComboButtonBinding.prototype.setActiveMenuItemId=function(id){
Cookies.createCookie(this.getProperty("id"),id,365);
};
ToolBarComboButtonBinding.prototype.getActiveMenuItemId=function(){
return Cookies.readCookie(this.getProperty("id"));
};
ToolBoxToolBarButtonBinding.prototype=new ToolBarButtonBinding;
ToolBoxToolBarButtonBinding.prototype.constructor=ToolBoxToolBarButtonBinding;
ToolBoxToolBarButtonBinding.superclass=ToolBarButtonBinding.prototype;
function ToolBoxToolBarButtonBinding(){
this.logger=SystemLogger.getLogger("ToolBoxToolBarButtonBinding");
this._views=new Map();
this._lastGeneratedPerspective=null;
return this;
}
ToolBoxToolBarButtonBinding.prototype.toString=function(){
return "[ToolBoxToolBarButtonBinding]";
};
ToolBoxToolBarButtonBinding.prototype.onBindingAttach=function(){
ToolBoxToolBarButtonBinding.superclass.onBindingAttach.call(this);
if(System.hasActivePerspectives){
this.subscribe(BroadcastMessages.PERSPECTIVE_CHANGED);
var _bd6=this._views;
for(var _bd7 in ViewDefinitions){
var def=ViewDefinitions[_bd7];
var key=def.perspective;
if(key!=null){
if(!_bd6.has(key)){
_bd6.set(key,new List());
}
var list=_bd6.get(key);
list.add(def);
}
}
}else{
this.hide();
}
};
ToolBoxToolBarButtonBinding.prototype.handleBroadcast=function(_bdb,arg){
ToolBoxToolBarButtonBinding.superclass.handleBroadcast.call(this,_bdb,arg);
switch(_bdb){
case BroadcastMessages.PERSPECTIVE_CHANGED:
var tag=arg;
if(tag!=this._lastGeneratedPerspective){
this._lastGeneratedPerspective=tag;
var _bde=this.bindingWindow.bindingMap.toolboxpopupgroup;
_bde.empty();
if(this._views.has(tag)){
var list=this._views.get(tag);
list.each(function(def){
var item=_bde.add(StageViewMenuItemBinding.newInstance(_bde.bindingDocument));
item.setType(MenuItemBinding.TYPE_CHECKBOX);
item.setHandle(def.handle);
item.setLabel(def.label);
item.setImage(def.image);
item.setToolTip(def.toolTip);
item.attach();
});
_bde.show();
}else{
_bde.hide();
}
}
break;
}
};
TreeBinding.prototype=new FlexBoxBinding;
TreeBinding.prototype.constructor=TreeBinding;
TreeBinding.superclass=FlexBoxBinding.prototype;
TreeBinding.ACTION_SELECTIONCHANGED="tree selection changed";
TreeBinding.ACTION_NOSELECTION="tree selection none";
TreeBinding.SELECTIONTYPE_SINGLE="single";
TreeBinding.SELECTIONTYPE_MULTIPLE="multiple";
TreeBinding.grid=function(_be2){
var _be3=TreeNodeBinding.HEIGHT;
var ceil=Math.ceil(_be2);
var _be5=_be2%_be3;
if(_be5>0){
_be2=_be2-_be5+_be3;
}
return _be2+TreeBodyBinding.PADDING_TOP;
};
function TreeBinding(){
this.logger=SystemLogger.getLogger("TreeBinding");
this.isFocusable=true;
this.isFocused=false;
this._treeBodyBinding=null;
this._positionIndicatorBinding=null;
this._treeNodeBuffer=null;
this._treeNodeBindings=null;
this._focusedTreeNodeBindings=null;
this._isFocusable=true;
this._isSelectable=false;
this._selectionProperty=null;
this._selectonValue=null;
this._selectedTreeNodeBindings=null;
this._selectionType=TreeBinding.SELECTIONTYPE_SINGLE;
this._acceptingPosition=null;
this._acceptingDimension=null;
this._acceptingTreeNodeBinding=null;
this._acceptingPositions=null;
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID,FitnessCrawler.ID]);
this._hasKeyboard=false;
this._yposition=0;
this._openTreeNodesBackupMap=null;
return this;
}
TreeBinding.prototype.toString=function(){
return "[TreeBinding]";
};
TreeBinding.prototype.onBindingRegister=function(){
TreeBinding.superclass.onBindingRegister.call(this);
this._treeNodeBindings=new Map();
this._treeNodeBuffer=new List();
this._focusedTreeNodeBindings=new List();
};
TreeBinding.prototype.onBindingAttach=function(){
TreeBinding.superclass.onBindingAttach.call(this);
var _be6=this.getProperty("focusable");
if(_be6!=null){
this._isFocusable=_be6;
}
if(!this._treeBodyBinding){
this._treeBodyBinding=this.addMember(this.getChildBindingByLocalName("treebody"));
}
if(!this._treeBodyBinding){
var cry="TreeBinding structure invalid. Missing TreeBodyBinding.";
this.logger.error(cry);
if(Application.isDeveloperMode){
alert(cry);
}
}else{
this.addActionListener(Binding.ACTION_ACTIVATED);
this.addActionListener(TreeNodeBinding.ACTION_OPEN);
this.addActionListener(TreeNodeBinding.ACTION_CLOSE);
this.addActionListener(TreeNodeBinding.ACTION_DISPOSE);
if(this._isFocusable){
this.addActionListener(TreeNodeBinding.ACTION_ONFOCUS);
this.addActionListener(TreeNodeBinding.ACTION_ONMULTIFOCUS);
this.addActionListener(TreeNodeBinding.ACTION_BLUR);
}
this.subscribe(BroadcastMessages.TYPEDRAG_START);
this.subscribe(BroadcastMessages.TYPEDRAG_STOP);
this.addEventListener(DOMEvents.BEFOREUPDATE);
this.addEventListener(DOMEvents.AFTERUPDATE);
}
};
TreeBinding.prototype.onBindingInitialize=function(){
TreeBinding.superclass.onBindingInitialize.call(this);
this._setupTreeSelection();
var _be8=this.getProperty("builder");
if(_be8){
this._buildFromTextArea(_be8);
}else{
if(this._treeNodeBuffer.hasEntries()){
while(this._treeNodeBuffer.hasNext()){
this.add(this._treeNodeBuffer.getNext());
}
}
}
};
TreeBinding.prototype._setupTreeSelection=function(){
var _be9=this.getProperty("selectable");
var _bea=this.getProperty("selectionproperty");
var _beb=this.getProperty("selectionvalue");
if(_be9){
this.setSelectable(true);
if(_bea){
this.setSelectionProperty(_bea);
}
if(_beb){
this.setSelectionValue(_beb);
}
}
this._positionIndicatorBinding=this.add(TreePositionIndicatorBinding.newInstance(this.bindingDocument));
this.shadowTree.positionIndicator=this._positionIndicatorBinding;
this._positionIndicatorBinding.attach();
};
TreeBinding.prototype._buildFromTextArea=function(id){
var area=this.bindingDocument.getElementById(id);
if(area!=null){
var _bee=UserInterface.getBinding(area);
var _bef=this._treeBodyBinding;
function build(){
_bef.subTreeFromString(area.value);
}
_bee.addActionListener(Binding.ACTION_UPDATED,{handleAction:function(){
build();
}});
setTimeout(build,0);
}
};
TreeBinding.prototype.registerTreeNodeBinding=function(_bf0){
var _bf1=_bf0.getHandle();
if(this._treeNodeBindings.has(_bf1)){
throw "Duplicate treenodehandles registered: "+_bf0.getLabel();
}else{
this._treeNodeBindings.set(_bf1,_bf0);
var map=this._openTreeNodesBackupMap;
if(map!=null&&map.has(_bf1)){
_bf0.open();
}
}
};
TreeBinding.prototype.unRegisterTreeNodeBinding=function(_bf3){
this._treeNodeBindings.del(_bf3.getHandle());
};
TreeBinding.prototype.getTreeNodeBindingByHandle=function(_bf4){
var _bf5=null;
if(this._treeNodeBindings.has(_bf4)){
_bf5=this._treeNodeBindings.get(_bf4);
}else{
throw "No such treenode: "+_bf4;
}
return _bf5;
};
TreeBinding.prototype.handleAction=function(_bf6){
TreeBinding.superclass.handleAction.call(this,_bf6);
var _bf7=_bf6.target;
switch(_bf6.type){
case TreeNodeBinding.ACTION_OPEN:
_bf6.consume();
break;
case TreeNodeBinding.ACTION_CLOSE:
this._blurDescendantBindings(_bf7);
_bf6.consume();
break;
case TreeNodeBinding.ACTION_ONFOCUS:
this._nodePrimary=_bf7;
this.focusSingleTreeNodeBinding(_bf7);
if(!this.isFocused){
this.focus();
}
_bf6.consume();
break;
case TreeNodeBinding.ACTION_ONMULTIFOCUS:
switch(this._selectionType){
case TreeBinding.SELECTIONTYPE_SINGLE:
this._nodePrimary=_bf7;
this.focusSingleTreeNodeBinding(_bf7);
break;
case TreeBinding.SELECTIONTYPE_SINGLE:
this._nodeSecondary=_bf7;
if(!this._nodePrimary||this._nodeSecondary==this._nodePrimary){
this._nodePrimary=_bf7;
this.focusSingleTreeNodeBinding(_bf7);
}else{
this.focusMultipeTreeNodeBindings(this._getVisibleTreeNodeBindingsInRange(this._nodePrimary,this._nodeSecondary));
}
break;
}
if(!this.isFocused){
this.focus();
}
_bf6.consume();
break;
case TreeNodeBinding.ACTION_DISPOSE:
if(_bf7.isFocused){
this.blurSelectedTreeNodes();
}
_bf6.consume();
break;
case TreeNodeBinding.ACTION_BLUR:
break;
case Binding.ACTION_ACTIVATED:
if(!this.isFocused){
this.focus();
}
break;
}
};
TreeBinding.prototype._getVisibleTreeNodeBindingsInRange=function(_bf8,_bf9){
alert("TreeBinding#_getVisibleTreeNodeBindingsInRange");
};
TreeBinding.prototype.focusSingleTreeNodeBinding=function(_bfa){
if(_bfa!=null&&!_bfa.isFocused){
this.blurSelectedTreeNodes();
this._focusedTreeNodeBindings.add(_bfa);
_bfa.invokeManagedFocus();
if(this._isSelectable){
this._manageSelections();
}
}
};
TreeBinding.prototype.focusMultipeTreeNodeBindings=function(_bfb){
this.blurSelectedTreeNodes();
while(_bfb.hasNext()){
var _bfc=_bfb.getNext();
this._focusedTreeNodeBindings.add(_bfc);
_bfc.invokeManagedFocus();
}
if(this._isSelectable){
this._manageSelections();
}
};
TreeBinding.prototype._manageSelections=function(){
var _bfd=this._selectedTreeNodeBindings;
this._selectedTreeNodeBindings={};
var _bfe=false;
var _bff=null;
this._focusedTreeNodeBindings.reset();
while(this._focusedTreeNodeBindings.hasNext()){
var _c00=this._focusedTreeNodeBindings.getNext();
var _c01=_c00.getProperty(this._selectionProperty);
if(_c01!=null){
if(!this._selectionValue||this._selectionValue[_c01]){
_bff=(this._selectedTreeNodeBindings[_c00.key]=_c00);
var _c02=_bfd[_c00.key];
if(!_c02||_c02!=_bff){
_bfe=true;
}
}
}
}
if(_bff){
if(_bfe){
this.dispatchAction(TreeBinding.ACTION_SELECTIONCHANGED);
}
}else{
if(_bfd){
for(var key in _bfd){
this.dispatchAction(TreeBinding.ACTION_NOSELECTION);
break;
}
}
}
};
TreeBinding.prototype.getSelectedTreeNodeBindings=function(){
var _c04=new List();
for(var key in this._selectedTreeNodeBindings){
_c04.add(this._selectedTreeNodeBindings[key]);
}
return _c04;
};
TreeBinding.prototype.blurSelectedTreeNodes=function(){
this._focusedTreeNodeBindings.reset().each(function(_c06){
_c06.blur();
});
this._focusedTreeNodeBindings.clear();
};
TreeBinding.prototype._blurDescendantBindings=function(_c07){
var _c08=_c07.getDescendantBindingsByLocalName("treenode");
var _c09=true;
var self=this;
_c08.each(function(desc){
if(desc.isFocused){
desc.blur();
self._focusedTreeNodeBindings.del(self._focusedTreeNodeBindings.getIndex(desc));
}
return _c09;
});
};
TreeBinding.prototype.getFocusedTreeNodeBindings=function(){
return this._focusedTreeNodeBindings.reset();
};
TreeBinding.prototype.focus=function(){
if(!this.isFocused){
this.isFocused=true;
FocusBinding.focusElement(this.bindingElement);
this.attachClassName(Binding.CLASSNAME_FOCUSED);
this.dispatchAction(Binding.ACTION_FOCUSED);
if(!this.getFocusedTreeNodeBindings().hasEntries()){
if(this.isFocusable){
this._focusDefault();
}
}
this._grabKeyboard();
}
};
TreeBinding.prototype._focusDefault=function(){
var _c0c=this._treeBodyBinding.getChildBindingByLocalName("treenode");
if(_c0c!=null){
this.focusSingleTreeNodeBinding(_c0c);
_c0c.callback();
}
};
TreeBinding.prototype.blur=function(){
if(this.isFocused){
this.isFocused=false;
this.detachClassName(Binding.CLASSNAME_FOCUSED);
this.dispatchAction(Binding.ACTION_BLURRED);
this._releaseKeyboard();
}
};
TreeBinding.prototype._grabKeyboard=function(){
this.subscribe(BroadcastMessages.KEY_ARROW);
this.subscribe(BroadcastMessages.KEY_ENTER);
this._hasKeyboard=true;
};
TreeBinding.prototype._releaseKeyboard=function(){
this.unsubscribe(BroadcastMessages.KEY_ARROW);
this.unsubscribe(BroadcastMessages.KEY_ENTER);
this._hasKeyboard=false;
};
TreeBinding.prototype.add=function(_c0d){
var _c0e=null;
if(this._treeBodyBinding){
_c0e=this._treeBodyBinding.add(_c0d);
}else{
this._treeNodeBuffer.add(_c0d);
_c0e=_c0d;
}
return _c0e;
};
TreeBinding.prototype.addFirst=function(_c0f){
throw new Error("Not implemented");
};
TreeBinding.prototype.empty=function(){
this._treeBodyBinding.detachRecursive();
var _c10=this._treeBodyBinding.bindingElement;
_c10.innerHTML="";
};
TreeBinding.prototype.isEmpty=function(){
return this._treeNodeBindings.hasEntries()==false;
};
TreeBinding.prototype.collapse=function(){
this.blurSelectedTreeNodes();
this._treeNodeBindings.each(function(_c11,_c12){
if(_c12.isContainer&&_c12.isOpen){
_c12.close();
}
});
};
TreeBinding.prototype.setSelectable=function(_c13){
this._isSelectable=_c13;
if(_c13){
this._selectedTreeNodeBindings={};
}else{
this._selectedTreeNodeBindings=null;
this._selectionProperty=null;
this._selectionValue=null;
}
};
TreeBinding.prototype.setSelectionProperty=function(_c14){
this._selectionProperty=_c14;
};
TreeBinding.prototype.setSelectionValue=function(_c15){
if(_c15){
var list=new List(_c15.split(" "));
this._selectionValue={};
while(list.hasNext()){
this._selectionValue[list.getNext()]=true;
}
}
};
TreeBinding.prototype.handleBroadcast=function(_c17,arg){
TreeBinding.superclass.handleBroadcast.call(this,_c17,arg);
switch(_c17){
case BroadcastMessages.TYPEDRAG_START:
this.addEventListener(DOMEvents.MOUSEMOVE);
this._yposition=this.boxObject.getGlobalPosition().y;
break;
case BroadcastMessages.TYPEDRAG_STOP:
this.removeEventListener(DOMEvents.MOUSEMOVE);
this._positionIndicatorBinding.hide();
this._yposition=-1;
break;
case BroadcastMessages.KEY_ARROW:
this._navigateByKey(arg);
break;
case BroadcastMessages.KEY_ENTER:
var _c19=this.getFocusedTreeNodeBindings();
if(_c19.hasEntries()){
var node=_c19.getFirst();
if(node.isContainer){
if(node.isOpen){
node.close();
}else{
node.open();
}
}else{
node.fireCommand();
}
}
break;
}
};
TreeBinding.prototype._navigateByKey=function(key){
var _c1c=this.getFocusedTreeNodeBindings();
if(_c1c.hasEntries()){
var node=_c1c.getFirst();
var next=null;
switch(key){
case KeyEventCodes.VK_UP:
next=node.getPreviousBindingByLocalName("treenode");
if(next!=null){
while(next.isContainer&&next.hasChildren()&&next.isOpen){
next=next.getChildBindingsByLocalName("treenode").getLast();
}
}
if(next==null){
next=node.getAncestorBindingByLocalName("treenode");
}
break;
case KeyEventCodes.VK_DOWN:
if(node.isContainer&&node.hasChildren()&&node.isOpen){
next=node.getChildBindingByLocalName("treenode");
}else{
next=node.getNextBindingByLocalName("treenode");
if(next==null){
var _c1f=null;
while(next==null&&(_c1f=node.getAncestorBindingByLocalName("treenode"))!=null){
if(_c1f!=null){
next=_c1f.getNextBindingByLocalName("treenode");
}
node=_c1f;
}
}
}
break;
case KeyEventCodes.VK_RIGHT:
if(node.isContainer){
if(!node.isOpen){
node.open();
}else{
if(node.hasChildren()){
next=node.getChildBindingByLocalName("treenode");
}
}
}
break;
case KeyEventCodes.VK_LEFT:
if(node.isContainer&&node.isOpen){
node.close();
}
break;
}
if(next!=null){
this.focusSingleTreeNodeBinding(next);
}
}
};
TreeBinding.prototype.handleEvent=function(e){
TreeBinding.superclass.handleEvent.call(this,e);
var _c21=DOMEvents.getTarget(e);
switch(e.type){
case DOMEvents.MOUSEMOVE:
try{
this._updatePositionIndicator(e);
}
catch(exception){
this.removeEventListener(DOMEvents.MOUSEMOVE);
throw (exception);
}
break;
case DOMEvents.BEFOREUPDATE:
var _c22=new TreeCrawler();
var list=new List();
_c22.mode=TreeCrawler.MODE_GETOPEN;
_c22.crawl(this.bindingElement,list);
var map=new Map();
if(list.hasEntries()){
while(list.hasNext()){
var _c25=list.getNext();
map.set(_c25.getHandle(),true);
}
this._openTreeNodesBackupMap=map;
}
break;
case DOMEvents.AFTERUPDATE:
this._openTreeNodesBackupMap=null;
break;
}
};
TreeBinding.prototype._updatePositionIndicator=function(e){
var y=e.clientY-this._yposition;
var pos=this._acceptingPosition;
var dim=this._acceptingDimension;
var _c2a=this._positionIndicatorBinding;
if(this._acceptingTreeNodeBinding){
var miny=pos.y;
var maxy=pos.y+dim.h;
if(y>=miny&&y<=maxy){
y=y<miny+TreeNodeBinding.HEIGHT?miny+TreeNodeBinding.HEIGHT:y;
y=y-TreeNodeBinding.HEIGHT;
y=TreeBinding.grid(y);
while(!this._acceptingPositions[y]){
y+=TreeNodeBinding.HEIGHT;
}
if(y!=_c2a.getPosition().y){
_c2a.setPosition(new Point(this._acceptingPosition.x+TreeNodeBinding.INDENT,y));
}
if(!_c2a.isVisible){
_c2a.show();
}
}else{
if(_c2a.isVisible){
_c2a.hide();
}
}
}else{
if(_c2a.isVisible){
_c2a.hide();
}
}
};
TreeBinding.prototype.enablePositionIndicator=function(_c2d){
this._acceptingTreeNodeBinding=_c2d;
this._acceptingPosition=_c2d.boxObject.getLocalPosition();
this._acceptingDimension=_c2d.boxObject.getDimension();
this._acceptingPositions=this._getChildPositions(_c2d);
};
TreeBinding.prototype.disablePositionIndicator=function(){
this._acceptingTreeNodeBinding=null;
this._acceptingPosition=null;
this._acceptingDimension=null;
};
TreeBinding.prototype._getChildPositions=function(_c2e){
var map={};
var _c30=_c2e.getChildBindingsByLocalName("treenode");
var _c31,pos,dim,y;
y=TreeBinding.grid(_c2e.boxObject.getLocalPosition().y);
map[y]=true;
while(_c30.hasNext()){
_c31=_c30.getNext();
pos=_c31.boxObject.getLocalPosition();
dim=_c31.boxObject.getDimension();
y=TreeBinding.grid(pos.y+dim.h)-TreeNodeBinding.HEIGHT;
map[y]=true;
}
return map;
};
TreeBinding.prototype.getDropIndex=function(){
var y=this._positionIndicatorBinding.getPosition().y;
var drop=0;
for(var _c37 in this._acceptingPositions){
if(_c37==y){
break;
}else{
drop++;
}
}
return Number(drop);
};
TreeBinding.prototype.getRootTreeNodeBindings=function(){
return this._treeBodyBinding.getChildBindingsByLocalName("treenode");
};
TreeBinding.newInstance=function(_c38){
var _c39=DOMUtil.createElementNS(Constants.NS_UI,"ui:tree",_c38);
var _c3a=UserInterface.registerBinding(_c39,TreeBinding);
_c3a.treeBodyBinding=TreeBodyBinding.newInstance(_c38);
return _c3a;
};
TreeBodyBinding.prototype=new FlexBoxBinding;
TreeBodyBinding.prototype.constructor=TreeBodyBinding;
TreeBodyBinding.superclass=FlexBoxBinding.prototype;
TreeBodyBinding.PADDING_TOP=8;
function TreeBodyBinding(){
this.logger=SystemLogger.getLogger("TreeBodyBinding");
this.containingTreeBinding=null;
return this;
}
TreeBodyBinding.prototype.toString=function(){
return "[TreeBodyBinding]";
};
TreeBodyBinding.prototype.onBindingAttach=function(){
TreeBodyBinding.superclass.onBindingAttach.call(this);
this.addActionListener(TreeNodeBinding.ACTION_FOCUSED);
this.containingTreeBinding=UserInterface.getBinding(this.bindingElement.parentNode);
};
TreeBodyBinding.prototype.accept=function(_c3b){
if(_c3b instanceof TreeNodeBinding){
this.logger.debug(_c3b);
}
};
TreeBodyBinding.prototype.handleAction=function(_c3c){
TreeBodyBinding.superclass.handleAction.call(this,_c3c);
switch(_c3c.type){
case TreeNodeBinding.ACTION_FOCUSED:
this._scrollIntoView(_c3c.target);
_c3c.consume();
break;
}
};
TreeBodyBinding.prototype._scrollIntoView=function(_c3d){
var a=this.boxObject.getDimension().h;
var y=_c3d.boxObject.getLocalPosition().y;
var h=_c3d.boxObject.getDimension().h;
var t=this.bindingElement.scrollTop;
var l=this.bindingElement.scrollLeft;
var _c43=_c3d.labelBinding.bindingElement;
if(y-t<0){
_c43.scrollIntoView(true);
}else{
if(y-t+h>a){
_c43.scrollIntoView(false);
}
}
try{
top.document.documentElement.scrollTop=0;
top.document.body.scrollTop=0;
top.app.document.documentElement.scrollTop=0;
top.app.document.body.scrollTop=0;
}
catch(exception){
}
if(Client.isExplorer){
this.bindingElement.scrollLeft=l;
}
};
TreeBodyBinding.newInstance=function(_c44){
var _c45=DOMUtil.createElementNS(Constants.NS_UI,"ui:treebody",_c44);
return UserInterface.registerBinding(_c45,TreeBodyBinding);
};
TreeNodeBinding.prototype=new Binding;
TreeNodeBinding.prototype.constructor=TreeNodeBinding;
TreeNodeBinding.superclass=Binding.prototype;
TreeNodeBinding.DEFAULT_FOLDER_CLOSED="${icon:folder}";
TreeNodeBinding.DEFAULT_FOLDER_OPEN="${icon:folder_active}";
TreeNodeBinding.DEFAULT_FOLDER_DISABLED="${icon:default}";
TreeNodeBinding.DEFAULT_ITEM="${root}/images/icons/harmony/composite/default_16.png";
TreeNodeBinding.DEFAULT_ITEM_DISABLED="${icon:default}";
TreeNodeBinding.ACTION_OPEN="treenodeopen";
TreeNodeBinding.ACTION_CLOSE="treenodeclose";
TreeNodeBinding.ACTION_ONFOCUS="treenodeonfocus";
TreeNodeBinding.ACTION_ONMULTIFOCUS="treenodeonmultifocus";
TreeNodeBinding.ACTION_FOCUSED="treenodefocused";
TreeNodeBinding.ACTION_BLUR="treenodeblur";
TreeNodeBinding.ACTION_COMMAND="treenodecommand";
TreeNodeBinding.ACTION_DISPOSE="treenodedisposed";
TreeNodeBinding.CLASSNAME_DRAGGED="dragged";
TreeNodeBinding.HEIGHT=19;
TreeNodeBinding.INDENT=16+18;
function TreeNodeBinding(){
this.logger=SystemLogger.getLogger("TreeNodeBinding");
this.hasBeenOpened=false;
this.isDisabled=false;
this.isFocused=false;
this.isOpen=false;
this.isContainer=false;
this.imageProfile=null;
this.image=null;
this.imageHover=null;
this.imageActive=null;
this.imageDisabled=null;
this.containingTreeBinding=null;
return this;
}
TreeNodeBinding.prototype.toString=function(){
return "[TreeNodeBinding]";
};
TreeNodeBinding.prototype.serialize=function(){
var _c46=TreeNodeBinding.superclass.serialize.call(this);
if(_c46){
_c46.label=this.getLabel();
_c46.image=this.getImage();
var _c47=this.getHandle();
if(_c47&&_c47!=this.key){
_c46.handle=_c47;
}
if(this.isOpen){
_c46.open=true;
}
if(this.isDisabled){
_c46.disabled=true;
}
if(this.dragType){
_c46.dragtype=this.dragType;
}
if(this.dragAccept){
_c46.dragaccept=this.dragAccept;
}
}
return _c46;
};
TreeNodeBinding.prototype.onBindingRegister=function(){
TreeNodeBinding.superclass.onBindingRegister.call(this);
this.propertyMethodMap["label"]=this.setLabel;
this.propertyMethodMap["image"]=this.setImage;
this.propertyMethodMap["tooltip"]=this.setToolTip;
};
TreeNodeBinding.prototype.onBindingAttach=function(){
TreeBinding.superclass.onBindingAttach.call(this);
this.isOpen=this.isOpen?true:this.getProperty("open");
if(!this.isContainer){
this.isContainer=this.hasChildren();
}
this.buildDOMContent();
this.assignDOMEvents();
if(this.isDisabled){
this.labelBinding.attachClassName(LabelBinding.CLASSNAME_GRAYTEXT);
}
this.addActionListener(TreeNodeBinding.ACTION_FOCUSED);
this.addEventListener(UpdateManager.EVENT_AFTERUPDATE);
this._registerWithAncestorTreeBinding();
};
TreeNodeBinding.prototype.onBindingDispose=function(){
if(this.isAttached){
if(this.dragger!=null){
this.labelBinding.removeEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.labelBinding.removeEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.labelBinding.removeEventListener(DOMEvents.MOUSEUP,this.dragger);
this.disableDragging();
this.dragger.dispose();
}
this.dispatchAction(TreeNodeBinding.ACTION_DISPOSE);
this.containingTreeBinding.unRegisterTreeNodeBinding(this);
this.labelBinding.dispose();
}
TreeNodeBinding.superclass.onBindingDispose.call(this);
};
TreeNodeBinding.prototype._registerWithAncestorTreeBinding=function(){
var node=this.bindingElement;
while((node=node.parentNode)!=null&&!this.containingTreeBinding){
var _c49=UserInterface.getBinding(node);
if(_c49&&_c49.containingTreeBinding){
this.containingTreeBinding=_c49.containingTreeBinding;
}
}
if(this.containingTreeBinding){
this.containingTreeBinding.registerTreeNodeBinding(this);
}else{
alert(this.bindingElement.parentNode.nodeName);
throw "TreeNodeBinding attached outside TreeBodyBinding";
}
};
TreeNodeBinding.prototype.getHandle=function(){
var _c4a=this.key;
var _c4b=this.getProperty("handle");
if(_c4b){
_c4a=_c4b;
}
return _c4a;
};
TreeNodeBinding.prototype.setHandle=function(_c4c){
this.setProperty("handle",_c4c);
};
TreeNodeBinding.prototype.buildDOMContent=function(){
var url=this.getProperty("url");
var _c4e=this.getProperty("label");
var _c4f=this.getProperty("tooltip");
var _c50=this.getProperty("oncommand");
var _c51=this.getProperty("onbindingfocus");
var _c52=this.getProperty("onbindingblur");
var _c53=this.getProperty("focused");
var _c54=this.getProperty("callbackid");
if(url){
var link=DOMUtil.createElementNS(Constants.NS_XHTML,"a",this.bindingDocument);
link.href=url;
this.bindingElement.appendChild(link);
this.shadowTree.link=link;
}
this.labelBinding=LabelBinding.newInstance(this.bindingDocument);
if(url){
this.shadowTree.link.appendChild(this.labelBinding.bindingElement);
}else{
this.addFirst(this.labelBinding);
}
this.shadowTree.label=this.labelBinding;
if(this.dragger!=null){
this.removeEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.removeEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.removeEventListener(DOMEvents.MOUSEUP,this.dragger);
this.labelBinding.addEventListener(DOMEvents.MOUSEDOWN,this.dragger);
this.labelBinding.addEventListener(DOMEvents.MOUSEMOVE,this.dragger);
this.labelBinding.addEventListener(DOMEvents.MOUSEUP,this.dragger);
}
if(this.isContainer&&!this.dragAccept){
this.acceptor=new BindingAcceptor(this);
}
if(_c4e!=null){
this.setLabel(_c4e);
}
if(_c4f!=null){
this.setToolTip(_c4f);
}
if(!this.imageProfile){
this._computeImageProfile();
}
this.setImage(this.computeImage());
if(this.isContainer){
this.updateClassNames();
}
var _c56=this.bindingWindow.WindowManager;
if(_c50!=null){
this.oncommand=function(){
Binding.evaluate(_c50,this);
};
}
if(_c51!=null){
this.onfocus=function(){
Binding.evaluate(_c51,this);
};
}
if(_c52!=null){
this.onblur=function(){
Binding.evaluate(_c52,this);
};
}
if(_c53==true){
this.focus();
}
if(_c54!=null){
Binding.dotnetify(this,_c54);
}
};
TreeNodeBinding.prototype.handleAction=function(_c57){
TreeNodeBinding.superclass.handleAction.call(this,_c57);
switch(_c57.type){
case TreeNodeBinding.ACTION_FOCUSED:
if(_c57.target!=this){
if(this.isContainer&&!this.isOpen){
this.open(true);
}
}
break;
}
};
TreeNodeBinding.prototype.enableDragging=function(){
};
TreeNodeBinding.prototype.disableDragging=function(){
this.isDraggable=false;
};
TreeNodeBinding.prototype.accept=function(_c58,_c59){
var _c5a=true;
if(_c58 instanceof TreeNodeBinding){
var _c5b=false;
var _c5c=this.bindingElement;
var _c5d=this.containingTreeBinding.bindingElement;
while(!_c5b&&_c5c!=_c5d){
if(_c5c==_c58.getBindingElement()){
_c5b=true;
}else{
_c5c=_c5c.parentNode;
}
}
if(_c5b){
Dialog.error("Not Allowed","You cannot move a folder into itself.");
_c5a=false;
}else{
this.acceptTreeNodeBinding(_c58,_c59);
}
}else{
_c5a=false;
}
return _c5a;
};
TreeNodeBinding.prototype.acceptTreeNodeBinding=function(_c5e,_c5f){
var _c60=_c5e.serializeToString();
var _c61=new BindingParser(this.bindingDocument);
var _c62=_c61.parseFromString(_c60).getFirst();
_c5f=_c5f?_c5f:this.containingTreeBinding.getDropIndex();
var _c63=this.getChildElementsByLocalName("treenode");
this.bindingElement.insertBefore(_c62,_c63.get(_c5f));
this.bindingWindow.DocumentManager.attachBindings(this.bindingElement);
_c5e.dispose();
};
TreeNodeBinding.prototype.showAcceptance=function(){
this.containingTreeBinding.enablePositionIndicator(this);
};
TreeNodeBinding.prototype.hideAcceptance=function(){
this.containingTreeBinding.disablePositionIndicator();
};
TreeNodeBinding.prototype._computeImageProfile=function(){
var _c64=this.getProperty("image");
var _c65=this.getProperty("image-active");
var _c66=this.getProperty("image-disabled");
_c65=_c65?_c65:this.isContainer?_c64?_c64:TreeNodeBinding.DEFAULT_FOLDER_OPEN:_c64?_c64:TreeNodeBinding.DEFAULT_ITEM;
_c66=_c66?_c66:this.isContainer?_c64?_c64:TreeNodeBinding.DEFAULT_FOLDER_DISABLED:_c64?_c64:TreeNodeBinding.DEFAULT_ITEM_DISABLED;
_c64=_c64?_c64:this.isContainer?TreeNodeBinding.DEFAULT_FOLDER_CLOSED:TreeNodeBinding.DEFAULT_ITEM;
this.imageProfile=new ImageProfile({image:_c64,imageHover:null,imageActive:_c65,imageDisabled:_c66});
};
TreeNodeBinding.prototype.assignDOMEvents=function(){
this.labelBinding.addEventListener(DOMEvents.DOUBLECLICK,this);
this.labelBinding.addEventListener(DOMEvents.MOUSEDOWN,this);
this.labelBinding.addEventListener(DOMEvents.MOUSEOVER,this);
this.labelBinding.addEventListener(DOMEvents.MOUSEOUT,this);
};
TreeNodeBinding.prototype.setImage=function(url){
this.setProperty("image",url);
if(this.isAttached){
this.labelBinding.setImage(url);
}
};
TreeNodeBinding.prototype.setLabel=function(_c68){
this.setProperty("label",String(_c68));
if(this.isAttached){
this.labelBinding.setLabel(String(_c68));
}
};
TreeNodeBinding.prototype.setToolTip=function(_c69){
this.setProperty("tooltip",String(_c69));
if(this.isAttached){
this.labelBinding.setToolTip(String(_c69));
}
};
TreeNodeBinding.prototype.getImage=function(){
return this.getProperty("image");
};
TreeNodeBinding.prototype.getLabel=function(){
return this.getProperty("label");
};
TreeNodeBinding.prototype.getToolTip=function(){
return this.getProperty("tooltip");
};
TreeNodeBinding.prototype.computeImage=function(){
var _c6a=this.imageProfile.getDefaultImage();
var _c6b=this.imageProfile.getActiveImage();
_c6b=_c6b?_c6b:_c6a;
return this.isOpen?_c6b:_c6a;
};
TreeNodeBinding.prototype.handleEvent=function(e){
TreeNodeBinding.superclass.handleEvent.call(this,e);
var _c6d=DOMEvents.getTarget(e);
var _c6e=this.labelBinding.bindingElement;
var _c6f=this.labelBinding.shadowTree.labelBody;
var _c70=this.labelBinding.shadowTree.labelText;
switch(e.type){
case DOMEvents.MOUSEDOWN:
switch(_c6d){
case _c6e:
this._onAction(e);
break;
case _c6f:
case _c70:
if(!this.isDisabled){
this._onFocus(e);
}
break;
}
break;
case DOMEvents.DOUBLECLICK:
this._onAction(e);
break;
case UpdateManager.EVENT_AFTERUPDATE:
if(_c6d.parentNode==this.bindingElement&&_c6d.__updateType==Update.TYPE_INSERT){
var _c6e=this.labelBinding.bindingElement;
if(DOMUtil.getLocalName(_c6d)=="treenode"){
if(_c6d==this.bindingElement.firstChild){
this.bindingElement.insertBefore(_c6d,_c6e.nextSibling);
}
}
break;
}
break;
}
if(BindingDragger.isDragging&&this.isContainer&&!this.isOpen){
switch(e.type){
case DOMEvents.MOUSEOVER:
case DOMEvents.MOUSEOUT:
switch(_c6d){
case _c6e:
case _c6f:
case _c70:
this._folderDragOverTimeout(e);
break;
}
break;
}
}
};
TreeNodeBinding.prototype._folderDragOverTimeout=function(e){
var self=this;
switch(e.type){
case DOMEvents.MOUSEOVER:
this._dragTimeout=this.bindingWindow.setTimeout(function(){
self.open();
},500);
break;
case DOMEvents.MOUSEOUT:
this.bindingWindow.clearTimeout(this._dragTimeout);
break;
}
};
TreeNodeBinding.prototype._onAction=function(e){
var _c74=true;
if(e.type=="mousedown"){
var _c75=e.button==(e.target?0:1);
if(!_c75){
_c74=false;
}
}
if(_c74){
if(this.isContainer){
if(!this.isOpen){
this.open();
}else{
this.close();
}
}else{
this.fireCommand();
}
}
};
TreeNodeBinding.prototype.fireCommand=function(){
if(this.oncommand){
this.oncommand();
}
this.dispatchAction(TreeNodeBinding.ACTION_COMMAND);
};
TreeNodeBinding.prototype._onFocus=function(e){
var _c77=false;
if(e!=null){
_c77=e.shiftKey;
}
this.dispatchAction(_c77?TreeNodeBinding.ACTION_ONMULTIFOCUS:TreeNodeBinding.ACTION_ONFOCUS);
if(e!=null){
this.stopPropagation(e);
}
if(this.onfocus!=null){
this.onfocus();
}
if(e!=null){
if(this.hasCallBackID()){
this.callback();
}
}
};
TreeNodeBinding.prototype.callback=function(){
if(this.hasCallBackID()){
var self=this;
setTimeout(function(){
self.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
},0);
}
};
TreeNodeBinding.prototype.invokeManagedFocus=function(){
if(!this.isFocused){
this.isFocused=true;
this.setProperty("focused",true);
this.labelBinding.attachClassName("focused");
this.dispatchAction(TreeNodeBinding.ACTION_FOCUSED);
}
};
TreeNodeBinding.prototype.focus=function(){
this.setProperty("focused",true);
if(this.isAttached){
this._onFocus();
}
};
TreeNodeBinding.prototype.blur=function(){
if(this.isFocused){
this.isFocused=false;
this.deleteProperty("focused");
this.labelBinding.detachClassName("focused");
if(this.onblur){
this.onblur();
}
this.dispatchAction(TreeNodeBinding.ACTION_BLUR);
}
};
TreeNodeBinding.prototype.stopPropagation=function(e){
if(e.type=="mousedown"){
EventBroadcaster.broadcast(BroadcastMessages.MOUSEEVENT_MOUSEDOWN,e);
this.dispatchAction(Binding.ACTION_ACTIVATED);
}
DOMEvents.stopPropagation(e);
};
TreeNodeBinding.prototype.open=function(){
if(this.isContainer&&!this.isOpen){
this.isOpen=true;
this.setProperty("open",true);
this.dispatchAction(TreeNodeBinding.ACTION_OPEN);
this.setImage(this.computeImage());
this.updateClassNames();
this.hasBeenOpened=true;
}
};
TreeNodeBinding.prototype.close=function(){
if(this.isContainer&&this.isOpen){
this.isOpen=false;
this.setProperty("open",false);
this.dispatchAction(TreeNodeBinding.ACTION_CLOSE);
this.setImage(this.computeImage());
this.updateClassNames();
}
};
TreeNodeBinding.prototype.updateClassNames=function(){
if(this.isContainer){
if(!this.hasClassName("container")){
this.attachClassName("container");
}
if(this.isOpen){
this.detachClassName("closed");
this.attachClassName("open");
this.labelBinding.detachClassName("closed");
this.labelBinding.attachClassName("open");
}else{
this.detachClassName("open");
this.attachClassName("closed");
this.labelBinding.detachClassName("open");
this.labelBinding.attachClassName("closed");
}
}else{
if(this.hasClassName("container")){
this.detachClassName("container");
this.labelBinding.detachClassName("closed");
this.labelBinding.detachClassName("open");
}
}
};
TreeNodeBinding.prototype.empty=function(){
var _c7a=this.getDescendantBindingsByLocalName("treenode");
_c7a.each(function(_c7b){
_c7b.dispose();
});
};
TreeNodeBinding.prototype.showDrag=function(){
this.attachClassName(TreeNodeBinding.CLASSNAME_DRAGGED);
};
TreeNodeBinding.prototype.hideDrag=function(){
this.detachClassName(TreeNodeBinding.CLASSNAME_DRAGGED);
};
TreeNodeBinding.prototype.hasChildren=function(){
return this.bindingElement.hasChildNodes();
};
TreeNodeBinding.prototype.handleElement=function(_c7c){
var _c7d=_c7c.getAttribute("focused");
if(_c7d=="true"){
if(!this.isFocused){
this.focus();
}
}
return false;
};
TreeNodeBinding.newInstance=function(_c7e){
var _c7f=DOMUtil.createElementNS(Constants.NS_UI,"ui:treenode",_c7e);
return UserInterface.registerBinding(_c7f,TreeNodeBinding);
};
TreeContentBinding.prototype=new Binding;
TreeContentBinding.prototype.constructor=TreeContentBinding;
TreeContentBinding.superclass=Binding.prototype;
function TreeContentBinding(){
this.logger=SystemLogger.getLogger("TreeContentBinding");
return this;
}
TreeContentBinding.prototype.toString=function(){
return "[TreeContentBinding]";
};
TreeContentBinding.newInstance=function(_c80){
var _c81=DOMUtil.createElementNS(Constants.NS_UI,"ui:treecontent",_c80);
return UserInterface.registerBinding(_c81,TreeContentBinding);
};
TreePositionIndicatorBinding.prototype=new Binding;
TreePositionIndicatorBinding.prototype.constructor=TreePositionIndicatorBinding;
TreePositionIndicatorBinding.superclass=Binding.prototype;
function TreePositionIndicatorBinding(){
this.logger=SystemLogger.getLogger("TreePositionIndicatorBinding");
this._geometry={x:0,y:0};
}
TreePositionIndicatorBinding.prototype.toString=function(){
return "[TreePositionIndicatorBinding]";
};
TreePositionIndicatorBinding.prototype.onBindingAttach=function(){
TreePositionIndicatorBinding.superclass.onBindingAttach.call(this);
this.hide();
};
TreePositionIndicatorBinding.prototype.setPosition=function(_c82){
this.bindingElement.style.left=_c82.x+"px";
this.bindingElement.style.top=_c82.y+"px";
this._geometry.x=_c82.x;
this._geometry.y=_c82.y;
};
TreePositionIndicatorBinding.prototype.getPosition=function(){
return new Point(this._geometry.x,this._geometry.y);
};
TreePositionIndicatorBinding.newInstance=function(_c83){
var _c84=DOMUtil.createElementNS(Constants.NS_UI,"ui:treepositionindicator",_c83);
return UserInterface.registerBinding(_c84,TreePositionIndicatorBinding);
};
TreeCrawler.prototype=new BindingCrawler;
TreeCrawler.prototype.constructor=TreeCrawler;
TreeCrawler.superclass=BindingCrawler.prototype;
TreeCrawler.ID="treecrawler";
TreeCrawler.MODE_GETOPEN="get open treenodes";
function TreeCrawler(){
this.mode=TreeCrawler.MODE_GETOPEN;
this.id=TreeCrawler.ID;
this._construct();
return this;
}
TreeCrawler.prototype._construct=function(){
TreeCrawler.superclass._construct.call(this);
var self=this;
this.addFilter(function(_c86){
var _c87=UserInterface.getBinding(_c86);
var _c88=null;
var _c88=null;
if(!_c87 instanceof TreeNodeBinding){
_c88=NodeCrawler.SKIP_NODE;
}
return _c88;
});
this.addFilter(function(_c89,list){
var _c8b=UserInterface.getBinding(_c89);
var _c8c=null;
switch(self.mode){
case TreeCrawler.MODE_GETOPEN:
if(_c8b.isOpen){
list.add(_c8b);
}
break;
}
return _c8c;
});
};
DockControlImageProfile.prototype=new ControlImageProfile;
DockControlImageProfile.prototype.constructor=DockControlImageProfile;
DockControlImageProfile.superclass=ControlImageProfile.prototype;
DockControlImageProfile.IMAGE_MINIMIZE=Resolver.resolve("${skin}/docks/control-minimize-${string}.png");
DockControlImageProfile.IMAGE_MAXIMIZE=Resolver.resolve("${skin}/docks/control-maximize-${string}.png");
DockControlImageProfile.IMAGE_RESTORE=Resolver.resolve("${skin}/docks/control-restore-${string}.png");
DockControlImageProfile.IMAGE_CLOSE=null;
function DockControlImageProfile(_c8d){
this.binding=_c8d;
}
DockControlImageProfile.prototype.getHoverImage=function(){
return null;
};
DockControlImageProfile.prototype.getActiveImage=function(){
return null;
};
DockTabsButtonBinding.prototype=new TabsButtonBinding;
DockTabsButtonBinding.prototype.constructor=DockTabsButtonBinding;
DockTabsButtonBinding.superclass=TabsButtonBinding.prototype;
DockTabsButtonBinding.RESERVED_SPACE=50;
DockTabsButtonBinding.NODENAME_TABBOX="dock";
function DockTabsButtonBinding(){
this.logger=SystemLogger.getLogger("DockTabsButtonBinding");
}
DockTabsButtonBinding.prototype.toString=function(){
return "[DockTabsButtonBinding]";
};
DockTabsButtonBinding.newInstance=function(_c8e){
var _c8f=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_c8e);
_c8f.setAttribute("type","checkbox");
_c8f.setAttribute("popup","app.bindingMap.tabsbuttonpopup");
_c8f.className="tabbutton";
return UserInterface.registerBinding(_c8f,DockTabsButtonBinding);
};
DockBinding.prototype=new TabBoxBinding;
DockBinding.prototype.constructor=DockBinding;
DockBinding.superclass=TabBoxBinding.prototype;
DockBinding.START="start";
DockBinding.EXTERNAL="external";
DockBinding.EXPLORER="explorer";
DockBinding.MAIN="main";
DockBinding.BOTTOMLEFT="bottomleft";
DockBinding.BOTTOMRIGHT="bottomright";
DockBinding.RIGHTTOP="righttop";
DockBinding.RIGHTBOTTOM="rightbottom";
DockBinding.ABSBOTTOMLEFT="absbottomleft";
DockBinding.ABSBOTTOMRIGHT="absbottomright";
DockBinding.ABSRIGHTTOP="absrighttop";
DockBinding.ABSRIGHTBOTTOM="absrightbottom";
DockBinding.TYPE_START="start";
DockBinding.TYPE_EXPLORER="explorer";
DockBinding.TYPE_EDITORS="editors";
DockBinding.TYPE_TOOLS="tools";
DockBinding.ACTION_OPENED="dockopened";
DockBinding.ACTION_EMPTIED="dockemptied";
DockBinding.CLASSNAME_ACTIVE="active";
function DockBinding(){
this.logger=SystemLogger.getLogger("DockBinding");
this.isActive=false;
this.isActivatable=true;
this.type=null;
this.reference=null;
this.isCollapsed=false;
this.isEmpty=true;
this._containingSplitPanelBinding=null;
this._viewBindingList=null;
this.perspectiveNode=null;
this._nodename_tab="docktab";
this._nodename_tabs="docktabs";
this._nodename_tabpanel="dockpanel";
this._nodename_tabpanels="dockpanels";
this._impl_tab=DockTabBinding;
this._impl_tabs=DockTabsBinding;
this._impl_tabpanel=DockPanelBinding;
this._impl_tabpanels=DockPanelsBinding;
}
DockBinding.prototype.toString=function(){
return "[DockBinding]";
};
DockBinding.prototype.serialize=function(){
var _c90=DockBinding.superclass.serialize.call(this);
if(_c90){
_c90.active=this.isActive?true:null;
_c90.collapsed=this.isCollapsed?true:null;
}
return _c90;
};
DockBinding.prototype.onBindingRegister=function(){
DockBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_ACTIVATED,this);
this.addActionListener(TabBoxBinding.ACTION_UPDATED,this);
this.addActionListener(ViewBinding.ACTION_LOADED);
this.addActionListener(ViewBinding.ACTION_CLOSED);
this.subscribe(BroadcastMessages.SYSTEMTREENODEBINDING_FOCUS);
this._viewBindingList=new List();
this.reference=this.getProperty("reference");
};
DockBinding.prototype.onBindingAttach=function(){
DockBinding.superclass.onBindingAttach.call(this);
this._containingSplitPanelBinding=this.getAncestorBindingByLocalName("splitpanel");
if(this.getTabBindings().hasEntries()){
this.isEmpty=false;
this.isActivatable=true;
}else{
this.dispatchAction(DockBinding.ACTION_EMPTIED);
}
};
DockBinding.prototype.onBindingInitialize=function(){
if(this.type==DockBinding.TYPE_EDITORS){
this.showControls(false);
}
DockBinding.superclass.onBindingInitialize.call(this);
};
DockBinding.prototype.buildDOMContent=function(){
var _c91=UserInterface.getBinding(this.bindingElement.parentNode);
var _c92=MatrixBinding.newInstance(this.bindingDocument);
_c92.attachClassName("dockliner");
this.shadowTree.dockLiner=_c92;
_c91.add(_c92);
_c92.attach();
_c92.manifest();
var type=this.getProperty("type");
this.type=type?type:DockBinding.TYPE_TOOLS;
this.attachClassName(this.type);
if(this.getProperty("active")==true){
this.activate();
}
};
DockBinding.prototype.interceptDisplayChange=function(_c94){
var _c95=this.getSelectedTabPanelBinding();
if(_c95){
_c95.isVisible=_c94;
_c95.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
}
};
DockBinding.prototype.prepareNewView=function(_c96){
var _c97=this._getBindingForDefinition(_c96);
var _c98=DockTabBinding.newInstance(this.bindingDocument);
_c98.setHandle(_c96.handle);
_c98.setLabel(this.type==DockBinding.TYPE_EDITORS?null:_c96.label);
_c98.setImage(_c96.image);
_c98.setToolTip(_c96.toolTip);
_c98.setEntityToken(_c96.entityToken);
_c98.setAssociatedView(_c97);
this.appendTabByBindings(_c98,null);
this._setupPageBindingListeners(_c98);
var _c99=this.getTabPanelBinding(_c98);
_c97.snapToBinding(_c99);
var _c9a=this.bindingWindow.bindingMap.views;
_c9a.add(_c97);
if(!this.isActive){
this.activate();
}
_c97.attach();
};
DockBinding.prototype.prepareOpenView=function(_c9b,_c9c){
this.logger.debug("DockBinding.prototype.prepareOpenView: _setupDirtyStuff required?");
_c9c.setLabel(_c9b.label);
_c9c.setImage(_c9b.image);
_c9c.setToolTip(_c9b.toolTip);
this._setupPageBindingListeners(_c9c);
var _c9d=this.getTabPanelBinding(_c9c);
var _c9e=this._getBindingForDefinition(_c9b);
_c9c.setAssociatedView(_c9e);
_c9e.snapToBinding(_c9d);
UserInterface.getBinding(this.bindingDocument.body).add(_c9e);
_c9e.attach();
};
DockBinding.prototype._getBindingForDefinition=function(_c9f){
var _ca0=this.bindingWindow.bindingMap.views;
var view=ViewBinding.newInstance(_ca0.bindingDocument);
view.setDefinition(_c9f);
return view;
};
DockBinding.prototype._setupPageBindingListeners=function(_ca2){
var _ca3=this.getTabPanelBinding(_ca2);
var self=this;
var _ca5={handleAction:function(_ca6){
var _ca7=_ca6.target;
switch(_ca6.type){
case PageBinding.ACTION_ATTACHED:
TabBoxBinding.currentActiveInstance=self;
break;
case PageBinding.ACTION_INITIALIZED:
_ca7.reflex(true);
var view=_ca2.getAssociatedView();
if(_ca7.bindingWindow==view.getContentWindow()){
_ca2.updateDisplay(_ca7);
EventBroadcaster.broadcast(BroadcastMessages.VIEW_COMPLETED,view.getHandle());
if(StatusBar.state==StatusBar.BUSY){
StatusBar.clear();
}
}
_ca2.onPageInitialize(_ca7);
_ca6.consume();
break;
case DockTabBinding.ACTION_UPDATE_VISUAL:
_ca2.updateDisplay(_ca7);
_ca6.consume();
break;
case DockTabBinding.ACTION_UPDATE_TOKEN:
_ca2.updateEntityToken(_ca7);
_ca6.consume();
break;
case EditorPageBinding.ACTION_DIRTY:
_ca2.setDirty(true);
break;
case EditorPageBinding.ACTION_SAVE:
case EditorPageBinding.ACTION_SAVE_AND_PUBLISH:
_ca2.onSaveStart();
break;
case ViewBinding.ACTION_ONCLOSE:
self.closeTab(_ca2);
_ca6.consume();
break;
case ViewBinding.ACTION_ONCLOSE_FORCE:
self.closeTab(_ca2,true);
_ca6.consume();
break;
case DockPanelBinding.ACTION_FORCE_SELECT:
self.select(_ca2);
break;
case Binding.ACTION_FORCE_REFLEX:
_ca3.reflex(true);
_ca6.consume();
break;
case DockTabBinding.ACTION_FORCE_CLEAN:
case EditorPageBinding.ACTION_CLEAN:
if(_ca2.isDirty){
_ca2.setDirty(false);
}
break;
case WindowBinding.ACTION_ONLOAD:
alert("HWEJ");
break;
}
}};
new List([DockTabBinding.ACTION_UPDATE_VISUAL,DockTabBinding.ACTION_UPDATE_TOKEN,PageBinding.ACTION_ATTACHED,PageBinding.ACTION_INITIALIZED,EditorPageBinding.ACTION_DIRTY,EditorPageBinding.ACTION_CLEAN,EditorPageBinding.ACTION_SAVE,EditorPageBinding.ACTION_SAVE_AND_PUBLISH,ViewBinding.ACTION_ONCLOSE,ViewBinding.ACTION_ONCLOSE_FORCE,DockPanelBinding.ACTION_FORCE_SELECT,Binding.ACTION_FORCE_REFLEX,DockTabBinding.ACTION_FORCE_CLEAN,WindowBinding.ACTION_ONLOAD]).each(function(_ca9){
_ca3.addActionListener(_ca9,_ca5);
});
};
DockBinding.prototype.summonTabPanelBinding=function(){
return DockPanelBinding.newInstance(this.bindingDocument);
};
DockBinding.prototype.handleAction=function(_caa){
DockBinding.superclass.handleAction.call(this,_caa);
var _cab=_caa.target;
switch(_caa.type){
case Binding.ACTION_ACTIVATED:
if(!this.isActive){
this.activate();
}
_caa.consume();
break;
case TabBoxBinding.ACTION_UPDATED:
if(_cab instanceof DockBinding){
if(_cab.updateType==TabBoxBinding.UPDATE_DETACH){
if(!this.getTabElements().hasEntries()){
this.isEmpty=true;
this.isActivatable=false;
if(this.isActive==true){
this.deActivate();
}
this.dispatchAction(DockBinding.ACTION_EMPTIED);
}
}
}
break;
case ViewBinding.ACTION_LOADED:
this._viewBindingList.add(_cab);
if(this.isActive){
_cab.onActivate();
}
break;
case ViewBinding.ACTION_CLOSED:
this._viewBindingList.del(_cab);
break;
}
};
DockBinding.prototype.handleBroadcast=function(_cac,arg){
DockBinding.superclass.handleBroadcast.call(this,_cac,arg);
switch(_cac){
case BroadcastMessages.SYSTEMTREENODEBINDING_FOCUS:
var _cae=arg;
if(_cae.perspectiveNode==this.perspectiveNode){
this._selectTabByEntityToken(_cae.node.getEntityToken());
}
break;
}
};
DockBinding.prototype._selectTabByEntityToken=function(_caf){
var tabs=this.getTabBindings();
var _cb1=false;
while(tabs.hasNext()&&!_cb1){
var tab=tabs.getNext();
var _cb3=tab.getEntityToken();
if(_cb3!=null&&_cb3==_caf){
if(!tab.isSelected){
this.select(tab,true);
_cb1=true;
}
}
}
};
DockBinding.prototype.collapse=function(_cb4){
this._handleCollapse(true,_cb4);
};
DockBinding.prototype.unCollapse=function(_cb5){
this._handleCollapse(false,_cb5);
};
DockBinding.prototype._handleCollapse=function(_cb6,_cb7){
var _cb8=this.getChildBindingByLocalName("dockpanels");
var _cb9=this.getAncestorBindingByLocalName("splitbox");
if(_cb6){
_cb8.hide();
this.bindingElement.style.height="auto";
this.isFlexible=false;
this.isActivatable=false;
this.setProperty("collapsed",true);
if(_cb7&&_cb9.hasBothPanelsVisible()){
this.setWidth(200);
}
}else{
_cb8.show();
this.isFlexible=true;
this.isActivatable=true;
this.deleteProperty("collapsed");
if(_cb7){
this.setWidth(false);
}
}
this.interceptDisplayChange(!_cb6);
this.isCollapsed=_cb6;
};
DockBinding.prototype.activate=function(){
if(!this.isActive){
this.isActive=true;
this.attachClassName(DockBinding.CLASSNAME_ACTIVE);
this.setProperty("active",true);
if(this._containingSplitPanelBinding){
this._containingSplitPanelBinding.isActive=true;
}
this.getTabBindings().each(function(tab){
tab.onActivate();
});
this._viewBindingList.each(function(view){
view.onActivate();
});
Application.activate(this);
}
};
DockBinding.prototype.deActivate=function(){
if(this.isActive==true){
this.isActive=false;
this.detachClassName(DockBinding.CLASSNAME_ACTIVE);
this.deleteProperty("active");
if(this._containingSplitPanelBinding){
this._containingSplitPanelBinding.isActive=false;
}
this.getTabBindings().each(function(tab){
tab.onDeactivate();
});
this._viewBindingList.each(function(view){
view.onDeactivate();
});
Application.deActivate(this);
}
};
DockBinding.prototype.closeTab=function(_cbe,_cbf){
if(_cbe.isDirty&&!_cbf){
var _cc0=Resolver.resolve(_cbe.getLabel());
var self=this;
Dialog.question(StringBundle.getString("ui","WebSite.Application.DialogSaveResource.Title"),StringBundle.getString("ui","WebSite.Application.DialogSaveResource.Text").replace("${resourcename}",_cc0),Dialog.BUTTONS_YES_NO_CANCEL,{handleDialogResponse:function(_cc2){
switch(_cc2){
case Dialog.RESPONSE_YES:
setTimeout(function(){
self.saveContainedEditor(_cbe);
},0);
break;
case Dialog.RESPONSE_NO:
self.removeTab(_cbe);
break;
}
}});
}else{
this.removeTab(_cbe);
}
};
DockBinding.prototype.closeTabsExcept=function(_cc3){
var tabs=this.getTabBindings();
while(tabs.hasNext()){
var tab=tabs.getNext();
if(tab!=_cc3){
this.closeTab(tab);
}
}
};
DockBinding.prototype.saveContainedEditor=function(_cc6){
var _cc7=_cc6.getAssociatedView();
_cc7.saveContainedEditor();
var self=this;
var _cc9={handleBroadcast:function(_cca,arg){
switch(_cca){
case BroadcastMessages.CURRENT_SAVED:
if(arg.handle==_cc7.getHandle()){
EventBroadcaster.unsubscribe(BroadcastMessages.CURRENT_SAVED,_cc9);
if(arg.isSuccess){
self.removeTab(_cc6);
}
}
break;
}
}};
EventBroadcaster.subscribe(BroadcastMessages.CURRENT_SAVED,_cc9);
};
DockBinding.prototype.appendTabByBindings=function(_ccc,_ccd){
if(this.isEmpty){
this.isEmpty=false;
this.isActivatable=true;
this.setWidth(false);
this.dispatchAction(DockBinding.ACTION_OPENED);
}
DockBinding.superclass.appendTabByBindings.call(this,_ccc,_ccd);
};
DockBinding.prototype.getHeight=function(){
return this.bindingElement.offsetHeight;
};
DockBinding.prototype.getWidth=function(){
return this.bindingElement.offsetWidth;
};
DockBinding.prototype.setWidth=function(_cce){
_cce=_cce?_cce+"px":"100%";
this.bindingElement.style.width=_cce;
};
DockBinding.prototype.show=function(){
if(this.isVisible){
DockBinding.superclass.show.call(this);
this.isFlexible=true;
this.shadowTree.dockLiner.style.display="block";
}
};
DockBinding.prototype.hide=function(){
if(!this.isVisible){
DockBinding.superclass.hide.call(this);
this.shadowTree.dockLiner.style.display="none";
this.isFlexible=false;
if(this.isActive){
this.deActivate();
}
}
};
DockBinding.prototype.showControls=function(_ccf){
var tabs=this.getChildBindingByLocalName(this._nodename_tabs);
if(_ccf){
tabs.controlGroupBinding.show();
}else{
tabs.controlGroupBinding.hide();
}
};
DockTabsBinding.prototype=new TabsBinding;
DockTabsBinding.prototype.constructor=DockTabsBinding;
DockTabsBinding.superclass=TabsBinding.prototype;
DockTabsBinding.NODENAME_TABBOX="dock";
DockTabsBinding.TABBUTTON_IMPLEMENTATION=DockTabsButtonBinding;
function DockTabsBinding(){
this.logger=SystemLogger.getLogger("DockTabsBinding");
}
DockTabsBinding.prototype.toString=function(){
return "[DockTabsBinding]";
};
DockTabsBinding.prototype.buildDOMContent=function(){
DockTabsBinding.superclass.buildDOMContent.call(this);
if(this.containingTabBoxBinding.type!=DockBinding.TYPE_EXPLORER){
this.controlGroupBinding=this.add(ControlGroupBinding.newInstance(this.bindingDocument));
this.controlGroupBinding.attachClassName("docktabscontrolgroup");
this.controlGroupBinding.add(this.getControlBinding(ControlBinding.TYPE_MAXIMIZE));
this.controlGroupBinding.attachRecursive();
}
};
DockTabsBinding.prototype.getControlBinding=function(type){
var _cd2=DockControlBinding.newInstance(this.bindingDocument);
_cd2.setControlType(type);
return _cd2;
};
DockTabsBinding.prototype.flex=function(){
if(Client.isExplorer&&this.containingTabBoxBinding!=null){
var self=this;
function fix(){
var _cd4=self.containingTabBoxBinding.getWidth();
if(!isNaN(_cd4)){
_cd4=_cd4>0?_cd4-1:0;
self.bindingElement.style.width=new String(_cd4)+"px";
}
}
setTimeout(fix,250);
fix();
}
DockTabsBinding.superclass.flex.call(this);
};
DockTabsBinding.prototype.handleCrawler=function(_cd5){
DockTabsBinding.superclass.handleCrawler.call(this,_cd5);
switch(_cd5.id){
case FlexBoxCrawler.ID:
this._explorerFlexHack();
break;
}
};
DockTabsBinding.prototype._explorerFlexHack=function(){
if(Client.isExplorer&&this.containingTabBoxBinding!=null){
var self=this;
function fix(){
var _cd7=self.containingTabBoxBinding.getWidth();
if(!isNaN(_cd7)){
_cd7=_cd7>0?_cd7-1:0;
self.bindingElement.style.width=new String(_cd7)+"px";
}
}
setTimeout(fix,250);
fix();
}
};
DockTabsBinding.newInstance=function(_cd8){
var _cd9=DOMUtil.createElementNS(Constants.NS_UI,"ui:docktabs",_cd8);
return UserInterface.registerBinding(_cd9,DockTabsBinding);
};
DockTabBinding.prototype=new TabBinding;
DockTabBinding.prototype.constructor=DockTabBinding;
DockTabBinding.superclass=TabBinding.prototype;
DockTabBinding.ACTION_FORCE_CLEAN="docktab force clean";
DockTabBinding.ACTION_UPDATE_VISUAL="docktab update visual";
DockTabBinding.ACTION_UPDATE_TOKEN="docktab update token";
DockTabBinding.NODENAME_TABBOX="dock";
DockTabBinding.LABEL_TABLOADING="${string:Website.App.LabelLoading}";
DockTabBinding.LABEL_TABDEFAULT="${string:Website.App.LabelLoaded}";
DockTabBinding.LABEL_TABSAVED="${string:Website.App.LabelSaved}";
DockTabBinding.IMG_TABLOADING="${icon:loading}";
DockTabBinding.IMG_TABDEFAULT="${icon:default}";
function DockTabBinding(){
this.logger=SystemLogger.getLogger("DockTabBinding");
this.perspectiveNode=null;
this._controlGroupBinding=null;
this._viewBinding=null;
this.isDirty=false;
this.isInitiallyHidden=true;
this._entityToken=null;
this._canUpdateTree=true;
return this;
}
DockTabBinding.prototype.toString=function(){
return "[DockTabBinding]";
};
DockTabBinding.prototype.onBindingAttach=function(){
DockTabBinding.superclass.onBindingAttach.call(this);
this.subscribe(BroadcastMessages.BIND_TOKEN_TO_VIEW);
this.perspectiveNode=this.containingTabBoxBinding.perspectiveNode;
this.addActionListener(ControlBinding.ACTION_COMMAND,this);
if(this.containingTabBoxBinding.type!=DockBinding.EXPLORER){
this.setContextMenu(top.app.bindingMap.docktabpopup);
}
};
DockTabBinding.prototype.setAssociatedView=function(_cda){
this._viewBinding=_cda;
};
DockTabBinding.prototype.getAssociatedView=function(){
return this._viewBinding;
};
DockTabBinding.prototype.serialize=function(){
var _cdb=DockTabBinding.superclass.serialize.call(this);
if(_cdb){
_cdb.label=null;
_cdb.image=null;
_cdb.handle=this.getHandle();
}
return _cdb;
};
DockTabBinding.prototype.setHandle=function(_cdc){
this.setProperty("handle",_cdc);
};
DockTabBinding.prototype.getHandle=function(){
return this.getProperty("handle");
};
DockTabBinding.prototype.setEntityToken=function(_cdd){
if(this._entityToken==null){
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_LOCKTOEDITOR);
}
this._entityToken=_cdd;
if(this.isAttached){
if(this.isSelected){
this._updateTree(true);
}
}
};
DockTabBinding.prototype.getEntityToken=function(){
return this._entityToken;
};
DockTabBinding.prototype.buildDOMContent=function(){
DockTabBinding.superclass.buildDOMContent.call(this);
this._controlGroupBinding=this.labelBinding.add(ControlGroupBinding.newInstance(this.bindingDocument));
var _cde=DialogControlBinding.newInstance(this.bindingDocument);
_cde.setControlType(ControlBinding.TYPE_CLOSE);
this._controlGroupBinding.add(_cde);
this._controlGroupBinding.attachRecursive();
};
DockTabBinding.prototype.setDirty=function(_cdf){
if(this.containingTabBoxBinding.type==DockBinding.TYPE_EDITORS){
if(this.isDirty!=_cdf){
this.isDirty=_cdf;
if(Binding.exists(this.labelBinding)){
var _ce0=this.labelBinding.getLabel();
if(_ce0!=null){
this.labelBinding.setLabel(_cdf?"*"+_ce0:_ce0.slice(1,_ce0.length));
}else{
this.labelBinding.setLabel(_cdf?"*":"");
}
}
}
var _ce1=top.app.bindingMap.broadcasterCurrentTabDirty;
if(this.isDirty==true){
this.subscribe(BroadcastMessages.SAVE_CURRENT);
EventBroadcaster.broadcast(BroadcastMessages.DOCKTAB_DIRTY,this);
_ce1.enable();
}else{
this.unsubscribe(BroadcastMessages.SAVE_CURRENT);
EventBroadcaster.broadcast(BroadcastMessages.DOCKTAB_CLEAN,this);
_ce1.disable();
}
}else{
Dialog.warning("Dirty denied","Only editor docks should invoke the dirty state!");
}
};
DockTabBinding.prototype.updateDisplay=function(_ce2){
this.setLabel(_ce2.getLabel());
this.setImage(_ce2.getImage());
this.setToolTip(_ce2.getToolTip());
};
DockTabBinding.prototype.updateEntityToken=function(_ce3){
this.setEntityToken(_ce3.getEntityToken());
};
DockTabBinding.prototype.handleAction=function(_ce4){
DockTabBinding.superclass.handleAction.call(this,_ce4);
var _ce5=_ce4.target;
switch(_ce4.type){
case ControlBinding.ACTION_COMMAND:
if(_ce5.controlType==ControlBinding.TYPE_CLOSE){
this.close();
}
break;
case MenuItemBinding.ACTION_COMMAND:
if(_ce4.listener==this.contextMenuBinding){
this._handleContextMenuItemBinding(_ce5);
}
break;
}
};
DockTabBinding.prototype._handleContextMenuItemBinding=function(_ce6){
var cmd=_ce6.getProperty("cmd");
switch(cmd){
case DockTabPopupBinding.CMD_REFRESH:
if(this.containingTabBoxBinding.type!=DockBinding.TYPE_TOOLS){
this.setLabel(DockTabBinding.LABEL_TABLOADING);
}
this.setImage(DockTabBinding.IMG_TABLOADING);
this._viewBinding.reload(Application.isDeveloperMode);
this.isDirty=false;
break;
case DockTabPopupBinding.CMD_MAKEDIRTY:
this.setDirty(true);
break;
case DockTabPopupBinding.CMD_VIEWSOURCE:
case DockTabPopupBinding.CMD_VIEWGENERATED:
case DockTabPopupBinding.CMD_VIEWSERIALIZED:
this._viewSource(cmd);
break;
case DockTabPopupBinding.CMD_CLOSETAB:
this.close();
break;
case DockTabPopupBinding.CMD_CLOSEOTHERS:
this.containingTabBoxBinding.closeTabsExcept(this);
break;
default:
alert("TODO!");
break;
}
};
DockTabBinding.prototype.setLabel=function(_ce8){
if(!_ce8){
if(!this.getLabel()){
_ce8=DockTabBinding.LABEL_TABLOADING;
}else{
if(this.getLabel()==DockTabBinding.LABEL_TABLOADING){
_ce8=DockTabBinding.LABEL_TABDEFAULT;
}
}
}
DockTabBinding.superclass.setLabel.call(this,_ce8);
};
DockTabBinding.prototype.setImage=function(_ce9){
if(!_ce9){
if(!this.getImage()){
_ce9=DockTabBinding.IMG_TABLOADING;
}else{
if(this.getImage()==DockTabBinding.IMG_TABLOADING){
_ce9=DockTabBinding.IMG_TABDEFAULT;
}
}
}
DockTabBinding.superclass.setImage.call(this,_ce9);
};
DockTabBinding.prototype._viewSource=function(cmd){
var def=ViewDefinitions["Composite.Management.SourceCodeViewer"];
def.argument={action:cmd,doc:this._viewBinding.windowBinding.getContentDocument()};
var _cec=Resolver.resolve(this.getLabel());
switch(cmd){
case DockTabPopupBinding.CMD_VIEWSOURCE:
def.label="Source: "+_cec;
break;
case DockTabPopupBinding.CMD_VIEWGENERATED:
def.label="Generated: "+_cec;
break;
case DockTabPopupBinding.CMD_VIEWSERIALIZED:
def.label="Serialized: "+_cec;
break;
}
StageBinding.presentViewDefinition(def);
};
DockTabBinding.prototype.onActivate=function(){
this._updateBroadcasters();
if(this.isSelected){
this._updateTree();
}
if(this._controlGroupBinding){
this._controlGroupBinding.onActivate();
}
if(this.isSelected){
this._updateGlobalEntityToken();
}
};
DockTabBinding.prototype.onDeactivate=function(){
if(this._controlGroupBinding){
this._controlGroupBinding.onDeactivate();
}
};
DockTabBinding.prototype.onPageInitialize=function(page){
this._updateBroadcasters();
if(this._isEditorDockTab()){
if(!this.hasSubscription(BroadcastMessages.CLOSE_ALL)){
this.subscribe(BroadcastMessages.CLOSE_CURRENT);
this.subscribe(BroadcastMessages.CLOSE_ALL);
}
}
};
DockTabBinding.prototype.saveContainedEditor=function(){
if(this._isEditorDockTab()&&this.isDirty==true){
this._viewBinding.saveContainedEditor();
}
};
DockTabBinding.prototype.show=function(){
DockTabBinding.superclass.show.call(this);
if(this.isVisible&&this.isInitiallyHidden&&Binding.exists(this)){
this.isInitiallyHidden=false;
var _cee=this.bindingElement;
setTimeout(function(){
_cee.style.bottom="auto";
},25);
}
};
DockTabBinding.prototype.handleBroadcast=function(_cef,arg){
DockTabBinding.superclass.handleBroadcast.call(this,_cef,arg);
var body=this._viewBinding.getContentDocument().body;
var root=UserInterface.getBinding(body);
switch(_cef){
case BroadcastMessages.SAVE_CURRENT:
if(this.isDirty&&this.isSelected&&root.isActivated){
this.saveContainedEditor();
}
break;
case BroadcastMessages.CURRENT_SAVED:
if(arg.handle==this.getAssociatedView().getHandle()){
this.unsubscribe(BroadcastMessages.CURRENT_SAVED);
if(arg.isSuccess){
this._onSaveSuccess();
}else{
this._onSaveFailure();
}
}
break;
case BroadcastMessages.CLOSE_CURRENT:
if(this._isEditorDockTab()){
if(this.isSelected&&root.isActivated){
this.close();
}
}
break;
case BroadcastMessages.CLOSE_ALL:
if(this._isEditorDockTab()){
this.close();
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_LOCKTOEDITOR:
if(this.isSelected){
if(UserInterface.isBindingVisible(this)){
this._updateTree();
}
}
break;
case BroadcastMessages.BIND_TOKEN_TO_VIEW:
if(arg.handle==this._viewBinding.getDefinition().handle){
this.setEntityToken(arg.entityToken);
if(this.isSelected){
this._updateTree();
}
}
break;
}
};
DockTabBinding.prototype.onSaveStart=function(){
this.subscribe(BroadcastMessages.CURRENT_SAVED);
};
DockTabBinding.prototype._onSaveSuccess=function(){
var page=this._viewBinding.getPageBinding();
if(page!=null&&page instanceof EditorPageBinding){
page.onSaveSuccess();
}
};
DockTabBinding.prototype._onSaveFailure=function(){
};
DockTabBinding.prototype.select=function(_cf4){
DockTabBinding.superclass.select.call(this,_cf4);
this._updateBroadcasters();
if(_cf4!=true){
this._updateTree();
}
this._updateGlobalEntityToken();
};
DockTabBinding.prototype.close=function(){
this.containingTabBoxBinding.closeTab(this);
};
DockTabBinding.prototype._updateBroadcasters=function(){
if(this.isSelected){
var _cf5=top.app.bindingMap.broadcasterCurrentTabDirty;
var _cf6=top.app.bindingMap.broadcasterCurrentIsEditor;
if(this._isEditorDockTab()){
_cf6.enable();
if(this.isDirty){
_cf5.enable();
}else{
_cf5.disable();
}
}else{
_cf6.disable();
_cf5.disable();
}
}
};
DockTabBinding.prototype._updateTree=function(_cf7){
if(this._canUpdateTree||_cf7){
EventBroadcaster.broadcast(BroadcastMessages.DOCKTABBINDING_SELECT,this);
}
};
DockTabBinding.prototype._isEditorDockTab=function(){
var _cf8=false;
if(this._viewBinding!=null){
var win=this._viewBinding.getContentWindow();
if(win!=null&&win.bindingMap!=null){
var _cfa=win.bindingMap.savebutton;
if(_cfa!=null){
_cf8=true;
}
}
}
return _cf8;
};
DockTabBinding.prototype._updateGlobalEntityToken=function(){
StageBinding.entityToken=this._entityToken;
};
DockTabBinding.newInstance=function(_cfb){
var _cfc=DOMUtil.createElementNS(Constants.NS_UI,"ui:docktab",_cfb);
return UserInterface.registerBinding(_cfc,DockTabBinding);
};
DockPanelsBinding.prototype=new TabPanelsBinding;
DockPanelsBinding.prototype.constructor=DockPanelsBinding;
DockPanelsBinding.superclass=TabPanelsBinding.prototype;
function DockPanelsBinding(){
this.logger=SystemLogger.getLogger("DockPanelsBinding");
this.isVisible=true;
return this;
}
DockPanelsBinding.prototype.toString=function(){
return "[DockPanelsBinding]";
};
DockPanelsBinding.newInstance=function(_cfd){
var _cfe=DOMUtil.createElementNS(Constants.NS_UI,"ui:dockpanels",_cfd);
return UserInterface.registerBinding(_cfe,DockPanelsBinding);
};
DockPanelBinding.prototype=new TabPanelBinding;
DockPanelBinding.prototype.constructor=DockPanelBinding;
DockPanelBinding.superclass=TabPanelBinding.prototype;
DockPanelBinding.ACTION_FORCE_SELECT="dockpanel force select";
function DockPanelBinding(){
this.logger=SystemLogger.getLogger("DockPanelBinding");
this.viewBinding=null;
return this;
}
DockPanelBinding.prototype.toString=function(){
return "[DockPanelBinding]";
};
DockPanelBinding.prototype.onBindingDispose=function(){
DockPanelBinding.superclass.onBindingDispose.call(this);
this.dispatchAction(Binding.ACTION_DISPOSED);
};
DockPanelBinding.prototype.select=function(_cff){
DockPanelBinding.superclass.select.call(this,_cff);
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
};
DockPanelBinding.prototype.unselect=function(){
DockPanelBinding.superclass.unselect.call(this);
this.dispatchAction(Binding.ACTION_VISIBILITYCHANGED);
};
DockPanelBinding.prototype.flex=function(){
this.dispatchAction(Binding.ACTION_DIMENSIONCHANGED);
};
DockPanelBinding.prototype.handleCrawler=function(_d00){
DockPanelBinding.superclass.handleCrawler.call(this,_d00);
if(_d00.response==null){
if(_d00.type==NodeCrawler.TYPE_DESCENDING){
if(this.viewBinding!=null){
if(_d00.id==FocusCrawler.ID){
_d00.nextNode=this.viewBinding.bindingElement;
}
}
}
}
};
DockPanelBinding.newInstance=function(_d01){
var _d02=DOMUtil.createElementNS(Constants.NS_UI,"ui:dockpanel",_d01);
return UserInterface.registerBinding(_d02,DockPanelBinding);
};
DockControlBinding.prototype=new ControlBinding;
DockControlBinding.prototype.constructor=DockControlBinding;
DockControlBinding.superclass=ControlBinding.prototype;
function DockControlBinding(){
this.logger=SystemLogger.getLogger("DockControlBinding");
}
DockControlBinding.prototype.toString=function(){
return "[DockControlBinding]";
};
DockControlBinding.prototype.onBindingRegister=function(){
DockControlBinding.superclass.onBindingRegister.call(this);
this.setImageProfile(DockControlImageProfile);
};
DockControlBinding.newInstance=function(_d03){
var _d04=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_d03);
return UserInterface.registerBinding(_d04,DockControlBinding);
};
DockTabPopupBinding.prototype=new PopupBinding;
DockTabPopupBinding.prototype.constructor=DockTabPopupBinding;
DockTabPopupBinding.superclass=PopupBinding.prototype;
DockTabPopupBinding.CMD_RESTORE="restore";
DockTabPopupBinding.CMD_MINIMIZE="minimize";
DockTabPopupBinding.CMD_MAXIMIZE="maximize";
DockTabPopupBinding.CMD_REFRESH="refreshview";
DockTabPopupBinding.CMD_MAKEDIRTY="makedirty";
DockTabPopupBinding.CMD_CLOSETAB="closetab";
DockTabPopupBinding.CMD_CLOSEOTHERS="closeothers";
DockTabPopupBinding.CMD_CLOSEALL="closeall";
DockTabPopupBinding.CMD_VIEWSOURCE="viewsource";
DockTabPopupBinding.CMD_VIEWGENERATED="viewgenerated";
DockTabPopupBinding.CMD_VIEWSERIALIZED="viewserialized";
function DockTabPopupBinding(){
this.logger=SystemLogger.getLogger("DockTabPopupBinding");
}
DockTabPopupBinding.prototype.toString=function(){
return "[DockTabPopupBinding]";
};
DockTabPopupBinding.prototype.onBindingAttach=function(){
DockTabPopupBinding.superclass.onBindingAttach.call(this);
this._indexMenuContent();
};
ViewSetBinding.prototype=new Binding;
ViewSetBinding.prototype.constructor=ViewSetBinding;
ViewSetBinding.superclass=Binding.prototype;
function ViewSetBinding(){
this.logger=SystemLogger.getLogger("ViewSetBinding");
this.crawlerFilters=new List([FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
ViewSetBinding.prototype.toString=function(){
return "[ViewSetBinding]";
};
ViewBinding.prototype=new FlexBoxBinding;
ViewBinding.prototype.constructor=ViewBinding;
ViewBinding.superclass=FlexBoxBinding.prototype;
ViewBinding.ACTION_LOADED="view loaded";
ViewBinding.ACTION_ONCLOSE="view onclose";
ViewBinding.ACTION_ONCLOSE_FORCE="view onclose force";
ViewBinding.ACTION_CLOSED="view closed";
ViewBinding.ACTION_DETACH="view detach";
ViewBinding.HORIZONTAL_ADJUST=1;
ViewBinding.VERTICAL_ADJUST=1;
ViewBinding.TYPE_EXPLORERVIEW="explorerview";
ViewBinding.TYPE_DOCKVIEW="dockview";
ViewBinding.TYPE_DIALOGVIEW="dialogview";
ViewBinding.CLASSNAME_ACTIVE="active";
ViewBinding.TIMEOUT=15;
ViewBinding._instances=new Map();
ViewBinding.getInstance=function(_d05){
var _d06=ViewBinding._instances.get(_d05);
if(!_d06){
var cry="ViewBinding.getInstance: No such instance: "+_d05;
SystemLogger.getLogger("ViewBinding [static]").error(cry);
SystemDebug.stack(arguments);
if(Application.isDeveloperMode){
alert(cry);
}
}
return _d06;
};
function ViewBinding(){
this.logger=SystemLogger.getLogger("ViewBinding");
this._viewDefinition=null;
this.isVisible=false;
this._isViewBindingInitialized=false;
this._snapBinding=null;
this.isFreeFloating=false;
this.windowBinding=null;
this._coverBinding=null;
this._isLoaded=false;
this._isFirstShow=true;
this._type=ViewBinding.TYPE_DOCKVIEW;
this._pageBinding=null;
this._lastknownposition=null;
this._lastknowndimension=null;
this.isActivated=false;
return this;
}
ViewBinding.prototype.toString=function(){
return "[ViewBinding]";
};
ViewBinding.prototype.onBindingRegister=function(){
ViewBinding.superclass.onBindingRegister.call(this);
this.addActionListener(RootBinding.ACTION_PHASE_1);
this.addActionListener(RootBinding.ACTION_PHASE_2);
this.addActionListener(RootBinding.ACTION_PHASE_3);
this.addActionListener(WindowBinding.ACTION_LOADED);
this.addActionListener(WindowBinding.ACTION_ONLOAD);
this.addActionListener(PageBinding.ACTION_ATTACHED);
this.addActionListener(PageBinding.ACTION_INITIALIZED);
this.addActionListener(ViewBinding.ACTION_DETACH);
this.addActionListener(WizardPageBinding.ACTION_NAVIGATE_NEXT);
this.addActionListener(WizardPageBinding.ACTION_NAVIGATE_PREVIOUS);
this.addActionListener(WizardPageBinding.ACTION_FINISH);
this.subscribe(BroadcastMessages.CLOSE_VIEW);
this.subscribe(BroadcastMessages.APPLICATION_SHUTDOWN);
};
ViewBinding.prototype.onBindingAttach=function(){
ViewBinding.superclass.onBindingAttach.call(this);
this.attachClassName(this._type);
if(Client.isExplorer==true){
this._coverBinding=this.add(CoverBinding.newInstance(this.bindingDocument));
this._coverBinding.attach();
}
this.windowBinding.attach();
};
ViewBinding.prototype.updatePositionDimension=function(){
var snap=this._snapBinding;
var _d09=!System.hasActivePerspectives&&Client.isExplorer;
if(this.isFreeFloating==true&&!_d09){
if(snap.isVisible==true){
if(snap.isAttached==true){
var _d0a=snap.boxObject.getGlobalPosition();
var _d0b=snap.boxObject.getDimension();
if(!Point.isEqual(_d0a,this._lastknownposition)){
this.setPosition(_d0a);
this._lastknownposition=_d0a;
}
if(!Dimension.isEqual(_d0b,this._lastknowndimension)){
this.setDimension(_d0b);
this._lastknowndimension=_d0b;
var _d0c=_d0b.h-ViewBinding.VERTICAL_ADJUST;
_d0c=_d0c<0?0:_d0c;
this.windowBinding.getBindingElement().style.height=new String(_d0c)+"px";
this.windowBinding.reflex();
}else{
throw "Could not snap to unattached binding!";
}
}
}
}
};
ViewBinding.prototype.onBindingDispose=function(){
ViewBinding.superclass.onBindingDispose.call(this);
if(this._viewDefinition!=null){
var _d0d=this._viewDefinition.flowHandle;
if(_d0d!=null){
FlowControllerService.CancelFlow(_d0d);
}
}
if(this._viewDefinition!=null){
var _d0e=this._viewDefinition.handle;
EventBroadcaster.broadcast(BroadcastMessages.VIEW_CLOSED,_d0e);
this.logger.fine("ViewBinding closed: \""+_d0e+"\"");
}
this.dispatchAction(ViewBinding.ACTION_CLOSED);
};
ViewBinding.prototype.setType=function(type){
this._type=type;
};
ViewBinding.prototype.getType=function(){
return this._type;
};
ViewBinding.prototype.getHandle=function(){
var _d10=null;
if(this._viewDefinition!=null){
_d10=this._viewDefinition.handle;
}
return _d10;
};
ViewBinding.prototype.initialize=function(){
if(!this._isViewBindingInitialized){
this._isViewBindingInitialized=true;
this.windowBinding.setURL(this._viewDefinition.url);
EventBroadcaster.broadcast(BroadcastMessages.VIEW_OPENING,this.getHandle());
}else{
throw ("Somehow ViewBinding got initialized twice: "+this.getHandle());
}
};
ViewBinding.prototype.setDefinition=function(_d11){
this._viewDefinition=_d11;
if(_d11.position==DockBinding.MAIN){
this.subscribe(BroadcastMessages.CLOSE_VIEWS);
}
};
ViewBinding.prototype.getDefinition=function(){
return this._viewDefinition;
};
ViewBinding.prototype.handleAction=function(_d12){
ViewBinding.superclass.handleAction.call(this,_d12);
var _d13=_d12.target;
switch(_d12.type){
case RootBinding.ACTION_PHASE_1:
case RootBinding.ACTION_PHASE_2:
case RootBinding.ACTION_PHASE_3:
if(_d12.type==RootBinding.ACTION_PHASE_1){
if(this.isActivated&&!_d13.isActivated){
_d13.onActivate();
}
}
_d12.consume();
break;
case Binding.ACTION_DIMENSIONCHANGED:
if(this.isFreeFloating==true){
if(_d13==this._snapBinding){
if(this.isVisible==true){
this.updatePositionDimension();
_d12.consume();
}
}
}
break;
case Binding.ACTION_VISIBILITYCHANGED:
if(this.isFreeFloating==true){
if(_d13==this._snapBinding){
if(_d13.isVisible==true){
this.show();
}else{
this.hide();
}
}
}
break;
case WindowBinding.ACTION_LOADED:
case WindowBinding.ACTION_ONLOAD:
if(_d13.getContentWindow().isPostBackDocument){
if(_d12.type==WindowBinding.ACTION_ONLOAD){
var arg=this._viewDefinition.argument;
if(arg!=null&&arg.list!=null&&arg.url!=null){
_d13.post(arg.list,arg.url);
arg.list=null;
arg.url=null;
}
}
}else{
if(Client.isExplorer==true){
if(_d13==this.windowBinding){
var self=this;
DOMEvents.addEventListener(_d13.getContentWindow(),DOMEvents.UNLOAD,{handleEvent:function(e){
if(Binding.exists(self._coverBinding)==true){
self._coverBinding.show();
}
}});
}
if(_d12.type==WindowBinding.ACTION_ONLOAD){
if(this._coverBinding){
this._coverBinding.hide();
}
}
}
}
if(_d12.type==WindowBinding.ACTION_ONLOAD){
var win=_d13.getContentWindow();
if(win.WindowManager==null){
if(!this._isLoaded){
this._onLoadingCompleted(_d13);
}
}
}
_d12.consume();
break;
case PageBinding.ACTION_ATTACHED:
if(!_d13.label&&this._viewDefinition.label){
_d13.label=this._viewDefinition.label;
}
if(!_d13.image&&this._viewDefinition.image){
_d13.image=this._viewDefinition.image;
}
if(_d13.bindingWindow==this.getContentWindow()){
this._pageBinding=_d13;
this._injectPageArgument();
}
case PageBinding.ACTION_INITIALIZED:
if(_d13.bindingWindow==this.getContentWindow()){
if(Client.isExplorer&&this._coverBinding){
this._coverBinding.hide();
}
if(!this._isLoaded){
this._onLoadingCompleted();
}
}
break;
case Binding.ACTION_DISPOSED:
if(this.isFreeFloating&&_d13==this._snapBinding){
this.removeActionListener(Binding.ACTION_DISPOSED);
this.dispose();
_d12.consume();
}
break;
case WizardPageBinding.ACTION_NAVIGATE_NEXT:
case WizardPageBinding.ACTION_NAVIGATE_PREVIOUS:
case WizardPageBinding.ACTION_FINISH:
EventBroadcaster.broadcast(BroadcastMessages.VIEW_OPENING,this.getHandle());
_d12.consume();
break;
case ViewBinding.ACTION_DETACH:
this.setDefinition(ViewDefinitions["Composite.Management.Null"]);
ViewBinding._instances.set(this._viewDefinition.handle,this);
break;
}
};
ViewBinding.prototype.handleBroadcast=function(_d18,arg){
ViewBinding.superclass.handleBroadcast.call(this,_d18,arg);
switch(_d18){
case BroadcastMessages.CLOSE_VIEW:
if(arg==this._viewDefinition.handle){
this.dispatchAction(ViewBinding.ACTION_ONCLOSE);
}
break;
case BroadcastMessages.CLOSE_VIEWS:
if(this._viewDefinition.position==DockBinding.MAIN){
this.dispatchAction(ViewBinding.ACTION_ONCLOSE_FORCE);
}
break;
case BroadcastMessages.APPLICATION_SHUTDOWN:
this.dispose();
break;
}
};
ViewBinding.prototype._onLoadingCompleted=function(){
if(!this._isLoaded){
this._open();
this._isLoaded=true;
}
};
ViewBinding.prototype._open=function(){
ViewBinding._instances.set(this._viewDefinition.handle,this);
this.dispatchAction(ViewBinding.ACTION_LOADED);
EventBroadcaster.broadcast(BroadcastMessages.VIEW_OPENED,this._viewDefinition.handle);
this.show();
this.logger.fine("ViewBinding opened: \""+this._viewDefinition.handle+"\"");
};
ViewBinding.prototype.update=function(){
this.dispatchAction(Binding.ACTION_ACTIVATED);
this._injectPageArgument();
};
ViewBinding.prototype._injectPageArgument=function(){
var page=this._pageBinding;
var def=this._viewDefinition;
if(page!=null){
var _d1c=def.argument;
if(_d1c!=null){
page.setPageArgument(_d1c);
}
var _d1d=def.width;
if(_d1d!=null){
page.width=_d1d;
}
var _d1e=def.height;
if(_d1e!=null){
page.height=_d1e;
}
}
};
ViewBinding.prototype.handleCrawler=function(_d1f){
ViewBinding.superclass.handleCrawler.call(this,_d1f);
switch(_d1f.type){
case NodeCrawler.TYPE_DESCENDING:
if(this.isFreeFloating==true){
if(_d1f.id==FocusCrawler.ID){
if(_d1f.previousNode!=this._snapBinding.bindingElement){
_d1f.response=NodeCrawler.SKIP_NODE;
}
}
}
break;
case NodeCrawler.TYPE_ASCENDING:
if(this.isFreeFloating==true){
_d1f.nextNode=this._snapBinding.bindingElement;
}
break;
}
};
ViewBinding.prototype.show=function(){
if(!this.isVisible){
if(this.isFreeFloating==true){
if(this._type==ViewBinding.TYPE_DOCKVIEW&&this.windowBinding!=null){
this.windowBinding.getBindingElement().style.position="static";
}
this.updatePositionDimension();
this.isVisible=true;
}else{
ViewBinding.superclass.show.call(this);
}
}
};
ViewBinding.prototype.hide=function(){
if(this.isVisible==true){
if(this.isFreeFloating==true){
if(this.windowBinding){
this.windowBinding.getBindingElement().style.position="absolute";
}
this.bindingElement.style.top="-10000px";
this.isVisible=false;
}else{
ViewBinding.superclass.hide.call(this);
}
}
};
ViewBinding.prototype.setPosition=function(_d20){
_d20.x+=ViewBinding.HORIZONTAL_ADJUST;
this.bindingElement.style.left=_d20.x+"px";
this.bindingElement.style.top=_d20.y+"px";
};
ViewBinding.prototype.setDimension=function(_d21){
_d21.h-=ViewBinding.VERTICAL_ADJUST;
_d21.w-=ViewBinding.HORIZONTAL_ADJUST;
_d21.w-=1;
if(_d21.h<0){
_d21.h=0;
}
if(_d21.w<0){
_d21.w=0;
}
this.bindingElement.style.width=String(_d21.w)+"px";
this.bindingElement.style.height=String(_d21.h)+"px";
};
ViewBinding.prototype.snapToBinding=function(_d22){
this.isFlexBoxBehavior=false;
_d22.addActionListener(Binding.ACTION_DIMENSIONCHANGED,this);
_d22.addActionListener(Binding.ACTION_VISIBILITYCHANGED,this);
_d22.addActionListener(Binding.ACTION_DISPOSED,this);
if(this._snapBinding){
this._snapBinding.removeActionListener(Binding.ACTION_DIMENSIONCHANGED,this);
this._snapBinding.removeActionListener(Binding.ACTION_VISIBILITYCHANGED,this);
this._snapBinding.removeActionListener(Binding.ACTION_DISPOSED,this);
this._snapBinding.viewBinding=null;
}
this._snapBinding=_d22;
this._snapBinding.viewBinding=this;
this.isFreeFloating=true;
if(!this._isViewBindingInitialized){
this.initialize();
}
};
ViewBinding.prototype.getMigrationParent=function(){
var _d23=null;
if(this.isFreeFloating==true){
_d23=this._snapBinding.getBindingElement();
}else{
_d23=ViewBinding.superclass.getMigrationParent.call(this);
}
return _d23;
};
ViewBinding.prototype.getContentWindow=function(){
return this.windowBinding.getContentWindow();
};
ViewBinding.prototype.getContentDocument=function(){
return this.windowBinding.getContentDocument();
};
ViewBinding.prototype.getRootBinding=function(){
return this.windowBinding.getRootBinding();
};
ViewBinding.prototype.getPageBinding=function(){
return this._pageBinding;
};
ViewBinding.prototype.reload=function(_d24){
this._isLoaded=false;
this.windowBinding.reload(_d24);
EventBroadcaster.broadcast(BroadcastMessages.VIEW_OPENING,this.getHandle());
};
ViewBinding.prototype.saveContainedEditor=function(){
var _d25=false;
var page=this._pageBinding;
if(page!=null&&page instanceof EditorPageBinding){
if(page.canSave()){
page.doSave();
_d25=true;
}
}
if(!_d25){
this.logger.error("saveContainedEditor failed");
}
};
ViewBinding.prototype.onActivate=function(){
if(!this.isActivated){
this.isActivated=true;
var root=this.getRootBinding();
if(root!=null){
root.onActivate();
}
}
};
ViewBinding.prototype.onDeactivate=function(){
if(this.isActivated==true){
this.isActivated=false;
var root=this.getRootBinding();
if(root!=null){
this.getRootBinding().onDeactivate();
}
}
};
ViewBinding.newInstance=function(_d29){
var _d2a=DOMUtil.createElementNS(Constants.NS_UI,"ui:view",_d29);
var _d2b=UserInterface.registerBinding(_d2a,ViewBinding);
_d2b.windowBinding=_d2b.add(WindowBinding.newInstance(_d29));
_d2b.windowBinding.isFlexible=false;
return _d2b;
};
PageBinding.prototype=new FocusBinding;
PageBinding.prototype.constructor=Binding;
PageBinding.superclass=FocusBinding.prototype;
PageBinding.ACTION_ATTACHED="page attached";
PageBinding.ACTION_DETACHED="page detached";
PageBinding.ACTION_INITIALIZED="page initialized";
PageBinding.ACTION_DOPOSTBACK="page do postback";
PageBinding.ACTION_VALIDATE="page validate";
PageBinding.ACTION_DOVALIDATEDPOSTBACK="page do validated postback";
PageBinding.ACTION_BLOCK_INIT="page block init";
PageBinding.ACTION_UNBLOCK_INIT="page unblock init";
PageBinding.ACTION_UPDATING="page updating";
PageBinding.ACTION_UPDATED="page updated";
PageBinding.ACTION_GETMESSAGES="page poll messagequeue";
PageBinding.CLASSNAME_SUBPAGE="dialogsubpage";
PageBinding.TIMEOUT=250;
function PageBinding(){
this.logger=SystemLogger.getLogger("PageBinding");
this.label=null;
this.image=null;
this.toolTip=null;
this._isPageBindingInitialized=false;
this.pageArgument=null;
this.isDialogSubPage=false;
this.isFitAsDialogSubPage=true;
this._initBlockers=null;
this._isReadyForInitialize=false;
this.isActivationAware=false;
this.isActivated=false;
this._canPostBack=true;
this._responseResolver=null;
this._isUpdating=false;
}
PageBinding.prototype.toString=function(){
return "[PageBinding]";
};
PageBinding.prototype.onBindingRegister=function(){
PageBinding.superclass.onBindingRegister.call(this);
var root=UserInterface.getBinding(this.bindingDocument.body);
root.addActionListener(RootBinding.ACTION_PHASE_3,this);
this.addActionListener(PageBinding.ACTION_DOPOSTBACK);
this.addActionListener(PageBinding.ACTION_DOVALIDATEDPOSTBACK);
this.addActionListener(BalloonBinding.ACTION_INITIALIZE);
this.addActionListener(PageBinding.ACTION_BLOCK_INIT);
this.addActionListener(PageBinding.ACTION_UNBLOCK_INIT);
this.addActionListener(PageBinding.ACTION_GETMESSAGES);
this.subscribe(BroadcastMessages.MESSAGEQUEUE_REQUESTED);
};
PageBinding.prototype.onBindingAttach=function(){
PageBinding.superclass.onBindingAttach.call(this);
Application.lock(this);
this.parseDOMProperties();
this.dispatchAction(PageBinding.ACTION_ATTACHED);
};
PageBinding.prototype.onBindingDispose=function(){
var root=UserInterface.getBinding(this.bindingDocument.body);
root.removeActionListener(RootBinding.ACTION_PHASE_3,this);
this.dispatchAction(PageBinding.ACTION_DETACHED);
};
PageBinding.prototype.parseDOMProperties=function(){
this.label=this.getProperty("label");
this.image=this.getProperty("image");
this.toolTip=this.getProperty("tooltip");
if(this.getProperty("fitasdialogsubpage")==false){
this.isFitAsDialogSubPage=false;
}
};
PageBinding.prototype.setPageArgument=function(arg){
if(Application.isOperational){
this.dispatchAction(DockPanelBinding.ACTION_FORCE_SELECT);
}
this.pageArgument=arg;
};
PageBinding.prototype.onBeforePageInitialize=function(){
this._isReadyForInitialize=true;
if(this._initBlockers==null){
this.onPageInitialize();
}
};
PageBinding.prototype.onPageInitialize=function(){
if(!this._isPageBindingInitialized){
this._isPageBindingInitialized=true;
if(this._isDotNet()){
this._setupDotNet();
}
if(this.pageArgument&&this.pageArgument instanceof DataBindingMap){
this.bindingWindow.DataManager.populateDataBindings(this.pageArgument);
}
var self=this;
setTimeout(function(){
try{
if(Binding.exists(self)==true){
self.bindingElement.style.visibility="visible";
self.dispatchAction(PageBinding.ACTION_INITIALIZED);
self.onAfterPageInitialize();
}else{
Application.unlock(Application,true);
SystemLogger.getLogger("PageBinding").warn("Premature PageBinding dispose? Please consult your developer.");
}
}
catch(exception){
self.logger.error(exception);
SystemDebug.stack(arguments);
throw exception;
}
},PageBinding.TIMEOUT);
}else{
if(Client.isExplorer==true){
this.logger.error("PageBinding: Somehow initialized twice");
this.logger.error(arguments.caller.callee.toString());
}else{
throw "PageBinding: Somehow initialized twice";
}
}
};
PageBinding.prototype.onAfterPageInitialize=function(){
this.removeActionListener(PageBinding.ACTION_BLOCK_INIT);
this.removeActionListener(PageBinding.ACTION_UNBLOCK_INIT);
Application.unlock(this);
this.isActivationAware=true;
var root=UserInterface.getBinding(this.bindingDocument.body);
root.makeActivationAware(this);
if(UserInterface.isBindingVisible(this)){
this.dispatchAction(FocusBinding.ACTION_FOCUS);
}
};
PageBinding.prototype.onBeforeUpdates=function(){
this._isUpdating=true;
this.dispatchAction(PageBinding.ACTION_UPDATING);
};
PageBinding.prototype.onAfterUpdates=function(){
this._isUpdating=false;
this.dispatchAction(PageBinding.ACTION_UPDATED);
};
PageBinding.prototype.makeDialogSubPage=function(){
if(this.isFitAsDialogSubPage){
if(Client.isExplorer){
this.setFlexibility(true);
}
this.attachClassName(PageBinding.CLASSNAME_SUBPAGE);
this.isDialogSubPage=true;
}
};
PageBinding.prototype._setupDotNet=function(){
var self=this;
var form=this.bindingDocument.forms[0];
var _d33=this.bindingWindow.__doPostBack;
var _d34=false;
if(!form.__isSetup){
DOMEvents.addEventListener(this.bindingWindow,DOMEvents.UNLOAD,{handleEvent:function(){
if(_d34){
Application.unlock(self);
}
}});
}
this.bindingWindow.__doPostBack=function(_d35,_d36){
if(!form.__isSetup){
Application.lock(self);
_d34=true;
}
self.manifestAllDataBindings();
_d33(_d35,_d36);
if(Application.isDeveloperMode){
self._debugDotNetPostback();
}
};
};
PageBinding.prototype.postMessage=function(_d37,list){
var _d39=this.bindingWindow.bindingMap.__REQUEST;
if(_d39!=null&&this._isDotNet()){
switch(_d37){
case EditorPageBinding.MESSAGE_SAVE:
case EditorPageBinding.MESSAGE_PERSIST:
if(this.bindingWindow.DataManager.isDirty){
if(this.validateAllDataBindings()){
if(list!=null){
list.add(this);
}
_d39.postback(_d37);
}
}
break;
default:
_d39.postback(_d37);
break;
}
}
if(list!=null){
this._postMessageToDescendants(_d37,list);
}
};
PageBinding.prototype._postMessageToDescendants=function(_d3a,list){
var _d3c=this.getDescendantBindingsByType(WindowBinding);
_d3c.each(function(win){
var page=win.getPageBinding();
if(page!=null){
page.postMessage(_d3a,list);
}
});
};
PageBinding.prototype._debugDotNetPostback=function(){
var list=new List();
new List(this.bindingDocument.forms[0].elements).each(function(_d40){
list.add({name:_d40.name,value:_d40.value});
});
var out="";
list.each(function(_d42){
out+=_d42.name+": "+_d42.value+"\n";
});
this.logger.debug(out);
};
PageBinding.prototype.handleAction=function(_d43){
PageBinding.superclass.handleAction.call(this,_d43);
var _d44=_d43.target;
switch(_d43.type){
case RootBinding.ACTION_PHASE_3:
if(_d44==UserInterface.getBinding(this.bindingDocument.body)){
_d44.removeActionListener(RootBinding.ACTION_PHASE_3,this);
if(!this._isPageBindingInitialized){
try{
this.onBeforePageInitialize();
}
catch(exception){
alert(exception);
SystemDebug.stack(arguments);
throw exception;
}
}
}
break;
case PageBinding.ACTION_DOPOSTBACK:
if(this._isDotNet()){
this.doPostBack(_d44);
}
_d43.consume();
break;
case PageBinding.ACTION_DOVALIDATEDPOSTBACK:
if(this._isDotNet()){
var _d45=this.validateAllDataBindings();
if(_d45){
this.doPostBack(_d44);
}
}
_d43.consume();
break;
case BalloonBinding.ACTION_INITIALIZE:
_d43.consume();
break;
case PageBinding.ACTION_BLOCK_INIT:
if(this._initBlockers==null){
this._initBlockers=new Map();
}
this._initBlockers.set(_d44.key,true);
break;
case PageBinding.ACTION_UNBLOCK_INIT:
if(this._initBlockers!=null){
if(this._initBlockers.has(_d44.key)){
this._initBlockers.del(_d44.key);
if(!this._initBlockers.hasEntries()){
this._initBlockers=null;
if(this._isReadyForInitialize==true){
var self=this;
setTimeout(function(){
self.onBeforePageInitialize();
},0);
}
}
}
}
break;
case PageBinding.ACTION_GETMESSAGES:
if(UpdateMananger.isUpdating){
var self=this;
var _d47={handleAction:function(_d48){
if(_d48.target==self){
self.removeActionListener(PageBinding.ACTION_UPDATED,_d47);
MessageQueue.udpdate();
}
}};
this.addActionListener(PageBinding.ACTION_UPDATED,_d47);
}else{
MessageQueue.udpdate();
}
_d43.consume();
break;
}
};
PageBinding.prototype.handleBroadcast=function(_d49,arg){
PageBinding.superclass.handleBroadcast.call(this,_d49,arg);
switch(_d49){
case BroadcastMessages.MESSAGEQUEUE_REQUESTED:
var _d4b=arg;
if(!this._canPostBack&&!_d4b){
this._canPostBack=true;
Application.unlock(this);
}
break;
}
};
PageBinding.prototype._isDotNet=function(){
var form=this.bindingDocument.forms[0];
return (form!=null&&typeof this.bindingWindow.__doPostBack!="undefined");
};
PageBinding.prototype.doPostBack=function(_d4d){
if(this._canPostBack){
if(_d4d!=null&&this._isDotNet()){
var _d4e=_d4d.getCallBackID();
var _d4f=_d4d.getCallBackArg();
if(_d4e!=null){
_d4e=_d4e.replace(/_/g,"$");
}else{
_d4e="";
}
if(_d4f==null){
_d4f="";
}
this.bindingWindow.__doPostBack(_d4e,_d4f);
}
}
};
PageBinding.prototype.validateAllDataBindings=function(){
var _d50=true;
var _d51=this.bindingWindow.DataManager.getAllDataBindings();
while(_d51.hasNext()&&_d50){
var _d52=_d51.getNext();
if(_d52.isAttached){
var _d53=_d52.validate();
if(_d50&&!_d53){
_d50=false;
this.logger.debug("Invalid DataBinding: "+_d52.toString()+" ("+_d52.getName()+")");
break;
}
}
}
return _d50;
};
PageBinding.prototype.manifestAllDataBindings=function(){
var list=new List();
var _d55=this.bindingWindow.DataManager.getAllDataBindings();
while(_d55.hasNext()){
var _d56=_d55.getNext();
if(_d56.isAttached){
var _d57=_d56.manifest();
if(_d57!=null){
list.add(_d57);
}
}
}
return list;
};
PageBinding.prototype.cleanAllDataBindings=function(){
var _d58=this.bindingWindow.DataManager.getAllDataBindings();
while(_d58.hasNext()){
var _d59=_d58.getNext();
if(_d59.isAttached){
_d59.clean();
}
}
};
PageBinding.prototype.getLabel=function(){
return this.label;
};
PageBinding.prototype.getImage=function(){
return this.image;
};
PageBinding.prototype.getToolTip=function(){
return this.toolTip;
};
PageBinding.prototype.getHeight=function(){
return this.bindingElement.offsetHeight;
};
PageBinding.prototype.onActivate=function(){
if(Binding.exists(this)){
if(!this.isActivated){
this.isActivated=true;
if(this._isFocusManager){
if(UserInterface.isBindingVisible(this)){
try{
var win=this.bindingWindow;
win.focus();
}
catch(exception){
}
if(this._cachedFocus!=null){
var self=this;
setTimeout(function(){
if(FocusBinding.focusedBinding==null){
self._focusPreviouslyFocused();
}
},0);
}else{
this._focusFirstFocusable();
}
}
}
}
}
};
PageBinding.prototype.onDeactivate=function(){
if(this.isActivated==true){
this.isActivated=false;
if(this._cachedFocus!=null){
var _d5c=this._cachedFocus.getBinding();
if(_d5c){
_d5c.blur();
}
}
if(FocusBinding.activeInstance==this){
FocusBinding.activeInstance=null;
}
}
};
DialogPageBinding.prototype=new PageBinding;
DialogPageBinding.prototype.constructor=DialogPageBinding;
DialogPageBinding.superclass=PageBinding.prototype;
DialogPageBinding.DEFAULT_WIDTH=443;
DialogPageBinding.DEFAULT_TABBOXED_WIDTH=476;
DialogPageBinding.DEFAULT_HEIGHT="auto";
DialogPageBinding.DEFAULT_CONTROLS="close";
DialogPageBinding.DEFAULT_RESIZABLE=false;
DialogPageBinding.ACTION_RESPONSE="dialogpageresponse";
DialogPageBinding.ACTION_LAYOUT_D="dialoglayoutd";
DialogPageBinding.CLASSNAME_TABBOXED="tabboxed";
function DialogPageBinding(){
this.logger=SystemLogger.getLogger("DialogPageBinding");
this.response=null;
this.result=null;
this.width=null;
this.height=null;
this.minheight=null;
this.controls=null;
this.isResizable=null;
this.isAutoHeightLayoutMode=false;
}
DialogPageBinding.prototype.toString=function(){
return "[DialogPageBinding]";
};
DialogPageBinding.prototype.onBindingRegister=function(){
DialogPageBinding.superclass.onBindingRegister.call(this);
this.addActionListener(PageBinding.ACTION_ATTACHED);
this.addActionListener(Binding.ACTION_DIRTY);
this.addActionListener(Binding.ACTION_VALID);
this.addActionListener(Binding.ACTION_INVALID);
this.addActionListener(ButtonBinding.ACTION_COMMAND);
};
DialogPageBinding.prototype.parseDOMProperties=function(){
DialogPageBinding.superclass.parseDOMProperties.call(this);
if(this.width==null){
var _d5d=this.getProperty("width");
if(!_d5d){
_d5d=this.hasClassName(DialogPageBinding.CLASSNAME_TABBOXED)?DialogPageBinding.DEFAULT_TABBOXED_WIDTH:DialogPageBinding.DEFAULT_WIDTH;
}
this.width=_d5d;
}
if(this.height==null){
var _d5e=this.getProperty("height");
this.height=_d5e?_d5e:DialogPageBinding.DEFAULT_HEIGHT;
}
if(this.minheight==null){
var _d5f=this.getProperty("minheight");
if(_d5f!=null){
this.minheight=_d5f;
}
}
if(this.controls==null){
var _d60=this.getProperty("controls");
this.controls=_d60?_d60:DialogPageBinding.DEFAULT_CONTROLS;
}
if(!this.isResizable){
var _d61=this.getProperty("resizable");
this.isResizable=_d61?_d61:DialogPageBinding.DEFAULT_RESIZABLE;
}
if(this.height=="auto"){
this.enableAutoHeightLayoutMode(true);
}
};
DialogPageBinding.prototype.enableAutoHeightLayoutMode=function(_d62){
if(_d62!=this.isAutoHeightLayoutMode){
if(_d62){
this.attachClassName("auto");
}else{
this.detachClassName("auto");
}
this.isAutoHeightLayoutMode=_d62;
}
};
DialogPageBinding.prototype.handleAction=function(_d63){
DialogPageBinding.superclass.handleAction.call(this,_d63);
var _d64=_d63.target;
switch(_d63.type){
case PageBinding.ACTION_ATTACHED:
if(_d64!=this&&_d64.isFitAsDialogSubPage){
_d64.makeDialogSubPage();
}
break;
case ButtonBinding.ACTION_COMMAND:
_d63.consume();
if(_d64.response!=null){
this.response=_d64.response;
switch(_d64.response){
case Dialog.RESPONSE_ACCEPT:
if(this.validateAllDataBindings()==true){
this.onDialogAccept();
}else{
this.onDialogInvalid();
}
break;
case Dialog.RESPONSE_CANCEL:
this.onDialogCancel();
break;
default:
this.onDialogResponse();
break;
}
}
break;
case Binding.ACTION_INVALID:
this._disableAcceptButton(true);
break;
case Binding.ACTION_VALID:
this._disableAcceptButton(false);
break;
}
};
DialogPageBinding.prototype._disableAcceptButton=function(_d65){
var _d66=this.bindingWindow.bindingMap.buttonAccept;
if(_d66!=null){
_d66.setDisabled(_d65);
}
};
DialogPageBinding.prototype.onDialogAccept=function(){
if(this.result===null){
try{
this.result=this.bindingWindow.DataManager.getDataBindingResultMap();
}
catch(exception){
alert(exception);
throw exception;
}
}
this.onDialogResponse();
};
DialogPageBinding.prototype.onDialogInvalid=function(){
};
DialogPageBinding.prototype.onDialogCancel=function(){
this.onDialogResponse();
};
DialogPageBinding.prototype.onDialogResponse=function(){
this.dispatchAction(DialogPageBinding.ACTION_RESPONSE);
};
DialogPageBodyBinding.prototype=new FlexBoxBinding;
DialogPageBodyBinding.prototype.constructor=DialogPageBodyBinding;
DialogPageBodyBinding.superclass=FlexBoxBinding.prototype;
function DialogPageBodyBinding(){
this.logger=SystemLogger.getLogger("DialogPageBodyBinding");
}
DialogPageBodyBinding.prototype.toString=function(){
return "[DialogPageBodyBinding]";
};
DialogPageBodyBinding.prototype._setFitnessHeight=function(_d67){
var _d68=CSSComputer.getPadding(this.bindingElement);
var _d69=CSSComputer.getBorder(this.bindingElement);
_d67+=_d68.top+_d68.bottom;
_d67+=_d69.top+_d69.bottom;
if(_d67>this.bindingElement.offsetHeight){
this.bindingElement.style.height=_d67+"px";
}
};
EditorPageBinding.prototype=new PageBinding;
EditorPageBinding.prototype.constructor=EditorPageBinding;
EditorPageBinding.superclass=PageBinding.prototype;
EditorPageBinding.ACTION_ATTACHED="editorpage attached";
EditorPageBinding.ACTION_DIRTY="editorpage dirty";
EditorPageBinding.ACTION_CLEAN="editorpage clean";
EditorPageBinding.ACTION_SAVE="editorpage save";
EditorPageBinding.ACTION_SAVE_AND_PUBLISH="editorpage save and publish";
EditorPageBinding.ID_SAVEASBUTTON="saveasbutton";
EditorPageBinding.ID_PREVIEWTAB="previewtab";
EditorPageBinding.ID_MAINTABBOX="maintabbox";
EditorPageBinding.ID_PREVIEWWINDOW="previewwindow";
EditorPageBinding.MESSAGE_SAVE="save";
EditorPageBinding.MESSAGE_SAVE_AND_PUBLISH="saveandpublish";
EditorPageBinding.MESSAGE_PERSIST="persist";
EditorPageBinding.MESSAGE_REFRESH="refresh";
EditorPageBinding.message=null;
EditorPageBinding.isTabbing=false;
EditorPageBinding._registry=new Map();
EditorPageBinding.register=function(page){
var map=EditorPageBinding._registry;
if(!map.hasEntries()){
top.app.bindingMap.broadcasterHasOpenEditors.enable();
}
map.set(page.key,page);
};
EditorPageBinding.unregister=function(page){
var map=EditorPageBinding._registry;
map.del(page.key);
if(!map.hasEntries()){
top.app.bindingMap.broadcasterHasOpenEditors.disable();
}
};
function EditorPageBinding(){
this.logger=SystemLogger.getLogger("EditorPageBinding");
this.isDirty=false;
this._tabBoxBinding=null;
this._tabBinding=null;
this._windowBinding=null;
this._isGeneratingPreview=false;
this._isPreviewWindowVisible=false;
this._message=null;
this._messages=null;
this._messengers=null;
this._isWaitingForPreview=false;
this._isPreviewing=false;
}
EditorPageBinding.prototype.toString=function(){
return "[EditorPageBinding]";
};
EditorPageBinding.prototype.onBindingRegister=function(){
EditorPageBinding.superclass.onBindingRegister.call(this);
this.addActionListener(Binding.ACTION_DIRTY);
this.addActionListener(Binding.ACTION_VALID);
this.addActionListener(Binding.ACTION_INVALID);
this.addActionListener(EditorPageBinding.ACTION_SAVE);
this.addActionListener(EditorPageBinding.ACTION_SAVE_AND_PUBLISH);
this.addActionListener(ResponseBinding.ACTION_SUCCESS);
this.addActionListener(ResponseBinding.ACTION_FAILURE);
this.addActionListener(ResponseBinding.ACTION_OOOOKAY);
EditorPageBinding.register(this);
this._invalidBindings=new Map();
this._messengers=new List();
this._messages=new List();
};
EditorPageBinding.prototype.onBindingDispose=function(){
this.dispatchAction(EditorPageBinding.ACTION_CLEAN);
if(this._isPreviewWindowVisible==true){
setTimeout(function(){
EventBroadcaster.broadcast(BroadcastMessages.XHTML_MARKUP_OFF);
},250);
}
EditorPageBinding.unregister(this);
EditorPageBinding.superclass.onBindingDispose.call(this);
};
EditorPageBinding.prototype.onBeforePageInitialize=function(){
this._setupPreviewListeners();
EditorPageBinding.superclass.onBeforePageInitialize.call(this);
};
EditorPageBinding.prototype.onPageInitialize=function(){
EditorPageBinding.superclass.onPageInitialize.call(this);
this.enableSaveAs();
};
EditorPageBinding.prototype._setupPreviewListeners=function(){
var box=this.bindingDocument.getElementById(EditorPageBinding.ID_MAINTABBOX);
var tab=this.bindingDocument.getElementById(EditorPageBinding.ID_PREVIEWTAB);
var win=this.bindingDocument.getElementById(EditorPageBinding.ID_PREVIEWWINDOW);
if(box!=null){
this._tabBoxBinding=UserInterface.getBinding(box);
this._tabBoxBinding.addActionListener(TabBoxBinding.ACTION_SELECTED,this);
this._tabBoxBinding.addActionListener(TabBoxBinding.ACTION_UNSELECTED,this);
if(tab!=null&&win!=null){
this._tabBinding=UserInterface.getBinding(tab);
this._windowBinding=UserInterface.getBinding(win);
this._windowBinding.addActionListener(WindowBinding.ACTION_LOADED,this);
this._windowBinding.addActionListener(WindowBinding.ACTION_ONLOAD,this);
this.subscribe(BroadcastMessages.HIGHLIGHT_KEYWORDS);
if(this._tabBinding.isSelected){
this._startPreview();
}
}
}
};
EditorPageBinding.prototype.onSaveSuccess=function(){
this.enableSave(false);
this.enableSaveAs();
this.cleanAllDataBindings();
this.isDirty=false;
EditorPageBinding.message=null;
this.dispatchAction(EditorPageBinding.ACTION_CLEAN);
};
EditorPageBinding.prototype.handleAction=function(_d71){
EditorPageBinding.superclass.handleAction.call(this,_d71);
var _d72=_d71.target;
switch(_d71.type){
case EditorPageBinding.ACTION_SAVE:
this.postMessage(EditorPageBinding.MESSAGE_SAVE);
break;
case EditorPageBinding.ACTION_SAVE_AND_PUBLISH:
this.postMessage(EditorPageBinding.MESSAGE_SAVE_AND_PUBLISH);
break;
case ResponseBinding.ACTION_OOOOKAY:
if(Application.isDeveloperMode){
}
break;
case ResponseBinding.ACTION_SUCCESS:
if(Application.isDeveloperMode){
}
if(this._messengers.hasEntries()){
var _d73=-1;
this._messengers.each(function(page){
var res=page.bindingWindow==_d72.bindingWindow;
if(res){
page.bindingWindow.DataManager.isDirty=false;
if(_d73==-1){
_d73=0;
}
}else{
_d73++;
}
return res;
});
if(_d73>-1){
this._messengers.del(_d73);
}
if(!this._messengers.hasEntries()){
switch(this._message){
case EditorPageBinding.MESSAGE_SAVE:
this._saveEditorPage();
break;
case EditorPageBinding.MESSAGE_SAVE_AND_PUBLISH:
this._saveAndPublishEditorPage();
break;
case EditorPageBinding.MESSAGE_PERSIST:
this._refresh();
this._message=null;
if(this._isWaitingForPreview){
this._isWaitingForPreview=false;
this._startPreview();
}
break;
}
}
}else{
this._refresh();
this._message=null;
}
break;
case ResponseBinding.ACTION_FAILURE:
if(Application.isDeveloperMode){
}
this._message=null;
this._messengers=new List();
break;
case Binding.ACTION_DIRTY:
if(this.canSave()){
if(!this.isDirty){
this.enableSave(true);
this.isDirty=true;
this.dispatchAction(EditorPageBinding.ACTION_DIRTY);
}
}
_d71.consume();
break;
case Binding.ACTION_INVALID:
this.enableSave(false);
this._invalidBindings.set(_d72.key,_d72);
if(_d72 instanceof FieldsBinding){
this._updateStatusBar();
}
break;
case Binding.ACTION_VALID:
this._invalidBindings.del(_d72.key);
if(_d72 instanceof FieldsBinding){
this._updateStatusBar();
}
if(!this._invalidBindings.hasEntries()){
this.enableSave(true);
}
break;
case TabBoxBinding.ACTION_SELECTED:
if(_d72==this._tabBoxBinding){
if(this._windowBinding!=null){
var tab=_d72.getSelectedTabBinding();
if(tab.getID()==EditorPageBinding.ID_PREVIEWTAB){
this._isPreviewing=true;
if(this._messengers.hasEntries()){
this._isWaitingForPreview=true;
}else{
this._startPreview();
}
}else{
if(this._isPreviewing){
this._isPreviewing=false;
this._stopPreview();
}
}
}
}
_d71.consume();
break;
case TabBoxBinding.ACTION_UNSELECTED:
if(_d72==this._tabBoxBinding){
this.postMessage(EditorPageBinding.MESSAGE_PERSIST);
}
_d71.consume();
break;
case WindowBinding.ACTION_LOADED:
if(_d72==this._windowBinding){
if(this._isGeneratingPreview==true){
this._generatePreview();
this._isGeneratingPreview=false;
}
_d71.consume();
}
break;
case WindowBinding.ACTION_ONLOAD:
if(_d72==this._windowBinding){
if(_d72.getContentWindow().isPostBackDocument!=true){
if(Client.isPrism){
Prism.enableCache();
}
var self=this;
setTimeout(function(){
Application.unlock(self);
},100);
if(EventBroadcaster.hasSubscribers(BroadcastMessages.XHTML_MARKUP_ON)){
var _d78=WindowBinding.getMarkup(this._windowBinding);
EventBroadcaster.broadcast(BroadcastMessages.XHTML_MARKUP_ON,_d78);
}
}
}
break;
}
};
EditorPageBinding.prototype.canSave=function(){
return this.bindingWindow.bindingMap.savebutton!=null;
};
EditorPageBinding.prototype.doSave=function(){
var _d79=this.bindingWindow.bindingMap.savebutton;
if(_d79!=null&&!_d79.isDisabled){
_d79.fireCommand();
}
};
EditorPageBinding.prototype._saveEditorPage=function(){
if(Application.isDeveloperMode){
}
if(this.validateAllDataBindings()){
this.bindingWindow.DataManager.isDirty=false;
var _d7a=this.bindingWindow.bindingMap.__REQUEST;
if(_d7a!=null){
_d7a.postback(EditorPageBinding.MESSAGE_SAVE);
}else{
this.logger.error("Save aborted: Could not locate RequestBinding");
}
}
};
EditorPageBinding.prototype._saveAndPublishEditorPage=function(){
if(this.validateAllDataBindings()){
this.bindingWindow.DataManager.isDirty=false;
var _d7b=this.bindingWindow.bindingMap.__REQUEST;
if(_d7b!=null){
_d7b.postback(EditorPageBinding.MESSAGE_SAVE_AND_PUBLISH);
}else{
this.logger.error("Save aborted: Could not locate RequestBinding");
}
}
};
EditorPageBinding.prototype._refresh=function(){
if(Application.isDeveloperMode){
}
this.postMessage(EditorPageBinding.MESSAGE_REFRESH);
};
EditorPageBinding.prototype.postMessage=function(_d7c){
this._message=null;
switch(_d7c){
case EditorPageBinding.MESSAGE_SAVE:
this._postMessageToDescendants(_d7c,this._messengers);
if(!this._messengers.hasEntries()){
this._saveEditorPage();
}else{
this._message=_d7c;
}
break;
case EditorPageBinding.MESSAGE_SAVE_AND_PUBLISH:
this._postMessageToDescendants(_d7c,this._messengers);
if(!this._messengers.hasEntries()){
this._saveAndPublishEditorPage();
}else{
this._message=_d7c;
}
break;
case EditorPageBinding.MESSAGE_PERSIST:
this._message=_d7c;
EditorPageBinding.superclass.postMessage.call(this,_d7c,this._messengers);
break;
case EditorPageBinding.MESSAGE_REFRESH:
EditorPageBinding.superclass.postMessage.call(this,_d7c,this._messengers);
break;
}
};
EditorPageBinding.prototype.handleBroadcast=function(_d7d,arg){
EditorPageBinding.superclass.handleBroadcast.call(this,_d7d,arg);
switch(_d7d){
case BroadcastMessages.HIGHLIGHT_KEYWORDS:
var _d7f=arg;
if(UserInterface.isBindingVisible(this._windowBinding)){
WindowBinding.highlightKeywords(this._windowBinding,_d7f);
}
break;
}
};
EditorPageBinding.prototype.onActivate=function(){
EditorPageBinding.superclass.onActivate.call(this);
if(this._isPreviewWindowVisible==true){
EventBroadcaster.broadcast(BroadcastMessages.XHTML_MARKUP_ACTIVATE);
}
};
EditorPageBinding.prototype.onDeactivate=function(){
EditorPageBinding.superclass.onDeactivate.call(this);
if(this._isPreviewWindowVisible==true){
EventBroadcaster.broadcast(BroadcastMessages.XHTML_MARKUP_DEACTIVATE);
}
};
EditorPageBinding.prototype._updateStatusBar=function(){
var _d80=new List();
this._invalidBindings.each(function(key,_d82){
var list=_d82.getInvalidLabels();
if(list){
list.each(function(_d84){
_d80.add(_d84);
});
}
});
if(_d80.hasEntries()){
var _d85="";
while(_d80.hasNext()){
_d85+=_d80.getNext().toLowerCase();
if(_d80.hasNext()){
_d85+=", ";
}else{
_d85+=".";
}
}
var _d86=StringBundle.getString("ui","Website.App.StatusBar.ErrorInField");
StatusBar.error(_d86+" "+_d85);
}else{
StatusBar.clear();
}
};
EditorPageBinding.prototype._startPreview=function(){
Application.lock(this);
this._isGeneratingPreview=true;
if(Client.isPrism){
Prism.disableCache();
}
this._windowBinding.setURL(WindowBinding.POSTBACK_URL);
};
EditorPageBinding.prototype._stopPreview=function(){
this._windowBinding.reset();
if(Application.isLocked){
Application.unlock(this);
}
};
EditorPageBinding.prototype.enableSave=function(_d87){
var _d88=this.bindingDocument.getElementById("broadcasterCanSave");
if(_d88){
var _d89=UserInterface.getBinding(_d88);
if(_d87){
_d89.enable();
}else{
_d89.disable();
}
}else{
throw new Error("A required BroadcasterBinding could not be located.");
}
};
EditorPageBinding.prototype.enableSaveAs=function(){
var _d8a=this.bindingDocument.getElementById(EditorPageBinding.ID_SAVEASBUTTON);
if(_d8a!=null){
UserInterface.getBinding(_d8a).enable();
}
};
EditorPageBinding.prototype.handleInvalidData=function(){
this.logger.error("INVALID DATA :(");
if(this._isGeneratingPreview){
this._isGeneratingPreview=false;
this._windowBinding.error();
this._message=null;
this._messengers=new List();
Application.unlock(this);
}
};
EditorPageBinding.prototype._generatePreview=function(){
var _d8b=this._windowBinding.getContentDocument().title;
if(_d8b==WindowBinding.POSTBACK_TITLE){
if(this.validateAllDataBindings()){
this.manifestAllDataBindings();
var _d8c=this._tabBinding.getCallBackID();
var list=new List();
new List(this.bindingDocument.forms[0].elements).each(function(_d8e){
if(_d8e.name=="__EVENTTARGET"&&_d8c){
_d8e.value=_d8c;
}
list.add({name:_d8e.name,value:_d8e.value});
});
var url=String(this.bindingDocument.location);
this._windowBinding.getContentWindow().submit(list,url);
this._latestPostbackList=list.reset();
}else{
this.handleInvalidData();
}
}
};
WizardPageBinding.prototype=new DialogPageBinding;
WizardPageBinding.prototype.constructor=WizardPageBinding;
WizardPageBinding.superclass=DialogPageBinding.prototype;
WizardPageBinding.ID_NEXTBUTTON="nextbutton";
WizardPageBinding.ID_PREVIOUSBUTTON="previousbutton";
WizardPageBinding.ID_FINISHBUTTON="finishbutton";
WizardPageBinding.ACTION_NAVIGATE_NEXT="wizardnavigatenext";
WizardPageBinding.ACTION_NAVIGATE_PREVIOUS="wizardnavigateprevious";
WizardPageBinding.ACTION_FINISH="wizardfinish";
function WizardPageBinding(){
this.logger=SystemLogger.getLogger("WizardPageBinding");
return this;
}
WizardPageBinding.prototype.toString=function(){
return "[WizardPageBinding]";
};
WizardPageBinding.prototype.onPageInitialize=function(){
WizardPageBinding.superclass.onPageInitialize.call(this);
this.addActionListener(WizardPageBinding.ACTION_NAVIGATE_NEXT,this);
this.addActionListener(WizardPageBinding.ACTION_NAVIGATE_PREVIOUS,this);
this.addActionListener(WizardPageBinding.ACTION_FINISH,this);
};
WizardPageBinding.prototype.handleAction=function(_d90){
WizardPageBinding.superclass.handleAction.call(this,_d90);
var _d91=_d90.target;
switch(_d90.type){
case WizardPageBinding.ACTION_NAVIGATE_NEXT:
case WizardPageBinding.ACTION_FINISH:
if(this.validateAllDataBindings()==true){
this.doPostBack(_d91);
}else{
_d90.consume();
}
break;
case WizardPageBinding.ACTION_NAVIGATE_PREVIOUS:
this.doPostBack(_d91);
break;
case Binding.ACTION_INVALID:
this._enableNextAndFinish(false);
_d90.consume();
break;
case Binding.ACTION_VALID:
this._enableNextAndFinish(true);
_d90.consume();
break;
}
};
WizardPageBinding.prototype._enableNextAndFinish=function(_d92){
var next=this.bindingWindow.bindingMap.nextbutton;
var _d94=this.bindingWindow.bindingMap.finishbutton;
if(next){
next.setDisabled(!_d92);
}
if(_d94){
_d94.setDisabled(!_d92);
}
};
MarkupAwarePageBinding.prototype=new PageBinding;
MarkupAwarePageBinding.prototype.constructor=MarkupAwarePageBinding;
MarkupAwarePageBinding.superclass=PageBinding.prototype;
function MarkupAwarePageBinding(){
this.logger=SystemLogger.getLogger("MarkupAwarePageBinding");
this._isActivated=false;
this._isWaiting=false;
return this;
}
MarkupAwarePageBinding.prototype.toString=function(){
return "[MarkupAwarePageBinding]";
};
MarkupAwarePageBinding.prototype.onBeforePageInitialize=function(){
MarkupAwarePageBinding.superclass.onBeforePageInitialize.call(this);
this.subscribe(BroadcastMessages.XHTML_MARKUP_ON);
this.subscribe(BroadcastMessages.XHTML_MARKUP_OFF);
this.subscribe(BroadcastMessages.XHTML_MARKUP_ACTIVATE);
this.subscribe(BroadcastMessages.XHTML_MARKUP_DEACTIVATE);
};
MarkupAwarePageBinding.prototype.handleBroadcast=function(_d95,arg){
MarkupAwarePageBinding.superclass.handleBroadcast.call(this,_d95,arg);
var self=this;
switch(_d95){
case BroadcastMessages.XHTML_MARKUP_ON:
this._activate(true);
this._handleMarkup(arg);
break;
case BroadcastMessages.XHTML_MARKUP_OFF:
this._activate(false);
break;
case BroadcastMessages.XHTML_MARKUP_ACTIVATE:
this._isWaiting=true;
this._activate(true);
setTimeout(function(){
self._isWaiting=false;
},20);
break;
case BroadcastMessages.XHTML_MARKUP_DEACTIVATE:
setTimeout(function(){
if(!self._isActivated){
self._activate(false);
}
},0);
break;
}
};
MarkupAwarePageBinding.prototype.onActivate=function(){
MarkupAwarePageBinding.superclass.onActivate.call(this);
this._activate(true);
this._isActivated=true;
};
MarkupAwarePageBinding.prototype.onDeactivate=function(){
MarkupAwarePageBinding.superclass.onDeactivate.call(this);
this._isActivated=false;
var self=this;
setTimeout(function(){
if(!self._isWaiting){
self._activate(false);
}
},0);
};
MarkupAwarePageBinding.prototype._handleMarkup=function(_d99){
};
MarkupAwarePageBinding.prototype._activate=function(_d9a){
};
SystemToolBarBinding.prototype=new ToolBarBinding;
SystemToolBarBinding.prototype.constructor=SystemToolBarBinding;
SystemToolBarBinding.superclass=ToolBarBinding.prototype;
function SystemToolBarBinding(){
this.logger=SystemLogger.getLogger("SystemToolBarBinding");
this._currentProfileKey=null;
this._actionFolderNames={};
this._actionProfile=null;
this._moreActionsWidth=0;
this._moreActions=null;
this._activePosition=SystemAction.activePositions.NavigatorTree;
return this;
}
SystemToolBarBinding.prototype.toString=function(){
return "[SystemToolBarBinding]";
};
SystemToolBarBinding.prototype.onBindingAttach=function(){
SystemToolBarBinding.superclass.onBindingAttach.call(this);
if(System.hasActivePerspectives){
this.subscribe(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED);
this.subscribe(this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST);
this.subscribe(BroadcastMessages.INVOKE_DEFAULT_ACTION);
this.addActionListener(ButtonBinding.ACTION_COMMAND);
}else{
this.hide();
}
};
SystemToolBarBinding.prototype.onBindingInitialize=function(){
var _d9b=this.bindingWindow.bindingMap.moreactionstoolbargroup;
this._moreActionsWidth=_d9b.boxObject.getDimension().w;
_d9b.hide();
var _d9c=this.boxObject.getDimension().h;
this.bindingElement.style.height=_d9c+"px";
var self=this;
var _d9e=this.bindingWindow.bindingMap.moreactionsbutton;
_d9e.addActionListener(ButtonBinding.ACTION_COMMAND,{handleAction:function(_d9f){
self._showMoreActions();
_d9f.consume();
}});
var _da0=this.bindingWindow.bindingMap.moreactionspopup;
_da0.addActionListener(MenuItemBinding.ACTION_COMMAND,{handleAction:function(_da1){
var item=_da1.target;
self._handleSystemAction(item.associatedSystemAction);
}});
SystemToolBarBinding.superclass.onBindingInitialize.call(this);
};
SystemToolBarBinding.prototype.handleBroadcast=function(_da3,arg){
SystemToolBarBinding.superclass.handleBroadcast.call(this,_da3,arg);
switch(_da3){
case BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED:
var self=this;
if(arg!=null){
if(arg.activePosition==this.getActivePosition()){
if(arg.actionProfile!=null&&arg.actionProfile.hasEntries()){
this._actionProfile=arg.actionProfile;
var key=this._getProfileKey();
if(key!=this._currentProfileKey){
setTimeout(function(){
self.emptyLeft();
self._actionFolderNames={};
self.buildLeft();
self._currentProfileKey=key;
},0);
}
}else{
setTimeout(function(){
self.emptyLeft();
self._actionFolderNames={};
self._currentProfileKey=null;
var _da7=self.bindingWindow.bindingMap.moreactionstoolbargroup;
if(_da7!=null){
_da7.hide();
}
},0);
}
}
}
break;
case this.bindingWindow.WindowManager.WINDOW_RESIZED_BROADCAST:
var _da8=this.bindingWindow.WindowManager;
this._toolBarBodyLeft.refreshToolBarGroups();
this._containAllButtons();
break;
case BroadcastMessages.INVOKE_DEFAULT_ACTION:
var self=this;
setTimeout(function(){
self._invokeDefaultAction();
},0);
break;
}
};
SystemToolBarBinding.prototype._getProfileKey=function(){
var _da9=new String("");
this._actionProfile.each(function(_daa,list){
list.each(function(_dac){
_da9+=_dac.getHandle()+";"+_dac.getKey()+";";
if(_dac.isDisabled()){
_da9+="isDisabled='true';";
}
});
});
return _da9;
};
SystemToolBarBinding.prototype.handleAction=function(_dad){
SystemToolBarBinding.superclass.handleAction.call(this,_dad);
switch(_dad.type){
case ButtonBinding.ACTION_COMMAND:
var _dae=_dad.target;
this._handleSystemAction(_dae.associatedSystemAction);
break;
}
};
SystemToolBarBinding.prototype._handleSystemAction=function(_daf){
if(_daf!=null){
var list=ExplorerBinding.getFocusedTreeNodeBindings();
if(list.hasEntries()){
var _db1=list.getFirst();
var _db2=_db1.node;
}
SystemAction.invoke(_daf,_db2);
}
};
SystemToolBarBinding.prototype.buildLeft=function(){
if(this.isInitialized&&this._actionProfile!=null&&this._actionProfile.hasEntries()){
var doc=this.bindingDocument;
var self=this;
this._actionProfile.each(function(_db5,list){
var _db7=new List();
list.reset();
while(list.hasNext()){
var _db8=list.getNext();
var _db9=null;
if(_db8.isInToolBar()){
if(_db8.isInFolder()){
alert("IsInFolder not implemented!");
}else{
_db9=self.getToolBarButtonBinding(_db8);
}
}
if(_db9!=null){
_db7.add(_db9);
}
}
if(_db7.hasEntries()){
var _dba=ToolBarGroupBinding.newInstance(doc);
_db7.each(function(_dbb){
_dba.add(_dbb);
});
self.addLeft(_dba);
}
});
this.attachRecursive();
this._containAllButtons();
}
};
SystemToolBarBinding.prototype._containAllButtons=function(){
var _dbc=this.bindingWindow.bindingMap.toolsbutton;
var _dbd=this.bindingWindow.bindingMap.moreactionstoolbargroup;
var _dbe=_dbc.bindingElement.offsetLeft-this._moreActionsWidth;
var _dbf=0;
var _dc0=new List();
var _dc1,_dc2=this._toolBarBodyLeft.getDescendantBindingsByLocalName("toolbarbutton");
while((_dc1=_dc2.getNext())!=null){
if(!_dc1.isVisible){
_dc1.show();
}
_dbf+=_dc1.boxObject.getDimension().w;
if(_dbf>=_dbe){
_dc0.add(_dc1);
_dc1.hide();
}
}
if(_dc0.hasEntries()){
var _dc3=_dc0.getFirst().bindingElement.parentNode;
UserInterface.getBinding(_dc3).setLayout(ToolBarGroupBinding.LAYOUT_LAST);
this._moreActions=new List();
while((_dc1=_dc0.getNext())!=null){
this._moreActions.add(_dc1.associatedSystemAction);
}
_dbd.show();
}else{
this._moreActions=null;
_dbd.hide();
}
};
SystemToolBarBinding.prototype._showMoreActions=function(){
if(this._moreActions!=null){
var _dc4=this.bindingWindow.bindingMap.moreactionspopup;
_dc4.empty();
while((action=this._moreActions.getNext())!=null){
var item=MenuItemBinding.newInstance(_dc4.bindingDocument);
item.setLabel(action.getLabel());
item.setToolTip(action.getToolTip());
item.imageProfile=new ImageProfile({image:action.getImage(),imageDisabled:action.getDisabledImage()});
if(action.isDisabled()){
item.disable();
}
item.associatedSystemAction=action;
_dc4.add(item);
}
_dc4.attachRecursive();
this._moreActions=null;
}
};
SystemToolBarBinding.prototype.getToolBarButtonBinding=function(_dc6){
var _dc7=ToolBarButtonBinding.newInstance(this.bindingDocument);
var _dc8=_dc6.getLabel();
var _dc9=_dc6.getToolTip();
var _dca=_dc6.getImage();
var _dcb=_dc6.isDisabled();
if(_dca&&_dca.indexOf("size=")==-1){
_dca=_dca+"&size="+this.getImageSize();
_dc7.imageProfile=new ImageProfile({image:_dca});
}
if(_dc8){
_dc7.setLabel(_dc8);
}
if(_dc9){
_dc7.setToolTip(_dc9);
}
if(_dc6.isDisabled()){
_dc7.disable();
}
_dc7.associatedSystemAction=_dc6;
return _dc7;
};
SystemToolBarBinding.prototype._invokeDefaultAction=function(){
var _dcc=this.getDescendantBindingByLocalName("toolbarbutton");
if(_dcc!=null){
_dcc.fireCommand();
}
};
SystemToolBarBinding.prototype.getActivePosition=function(){
return this._activePosition;
};
SystemToolBarBinding.newInstance=function(_dcd){
var _dce=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbar",_dcd);
return UserInterface.registerBinding(_dce,SystemToolBarBinding);
};
SystemTreeBinding.prototype=new TreeBinding;
SystemTreeBinding.prototype.constructor=SystemTreeBinding;
SystemTreeBinding.superclass=TreeBinding.prototype;
SystemTreeBinding.HAS_NO_MEMORY=false;
SystemTreeBinding.clipboard=null;
SystemTreeBinding.clipboardOperation=null;
SystemTreeBinding.URL_DIALOG_DETAILEDPASTE="${root}/content/dialogs/systemtrees/detailedpaste.aspx";
function SystemTreeBinding(){
this.logger=SystemLogger.getLogger("SystemTreeBinding");
this.perspectiveNode=null;
this._defaultTreeNode=null;
this._isActionProfileAware=true;
this._activePosition=SystemAction.activePositions.NavigatorTree;
this._backupfocushandle=null;
this._tempSelectedNode=null;
this._tempSelectionTimeout=false;
this._entityTokenRegistry=null;
this._refreshingTreeNodes=null;
this._refreshToken=null;
this.isLockedToEditor=true;
this.isLockFeatureFocus=false;
this._restorableFocusHandle=null;
}
SystemTreeBinding.prototype.toString=function(){
return "[SystemTreeBinding]";
};
SystemTreeBinding.prototype.onBindingRegister=function(){
SystemTreeBinding.superclass.onBindingRegister.call(this);
this.perspectiveNode=StageBinding.perspectiveNode;
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESH);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_FOCUS);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_CUT);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_COPY);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_PASTE);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_COLLAPSEALL);
this.subscribe(BroadcastMessages.DOCKTABBINDING_SELECT);
this.subscribe(BroadcastMessages.STAGEDIALOG_OPENED);
this.addActionListener(SystemTreeNodeBinding.ACTION_REFRESHED_YEAH);
this.addActionListener(TreeNodeBinding.ACTION_COMMAND);
this._entityTokenRegistry=new Map();
this._refreshingTreeNodes=new Map();
if(this.getProperty("actionaware")==false){
this._isActionProfileAware=false;
}else{
this.setContextMenu(top.app.bindingMap.systemtreepopup);
}
if(this.getProperty("treeselector")==true){
this._activePosition=SystemAction.activePositions.SelectorTree;
}
if(this.getProperty("locktoeditor")!=null){
this.isLockedToEditor=this.getProperty("locktoeditor");
}
};
SystemTreeBinding.prototype.add=function(_dcf){
var _dd0=SystemTreeBinding.superclass.add.call(this,_dcf);
if(!this._defaultTreeNode){
if(_dcf instanceof SystemTreeNodeBinding){
this._defaultTreeNode=_dcf;
}
}
return _dd0;
};
SystemTreeBinding.prototype.handleAction=function(_dd1){
SystemTreeBinding.superclass.handleAction.call(this,_dd1);
var _dd2=_dd1.target;
switch(_dd1.type){
case TreeNodeBinding.ACTION_ONFOCUS:
case TreeNodeBinding.ACTION_ONMULTIFOCUS:
this._restorableFocusHandle=null;
this._handleSystemTreeFocus();
break;
case SystemTreeNodeBinding.ACTION_REFRESHED_YEAH:
this._updateRefreshingTrees(_dd2.key);
this._updateFocusedNode();
_dd1.consume();
break;
case TreeNodeBinding.ACTION_DISPOSE:
case TreeNodeBinding.ACTION_BLUR:
var self=this;
setTimeout(function(){
if(!self._focusedTreeNodeBindings.hasEntries()){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED,{position:self._activePosition});
}
},0);
if(_dd1.type==TreeNodeBinding.ACTION_BLUR){
this._restorableFocusHandle=_dd2.getHandle();
}
break;
case TreeNodeBinding.ACTION_COMMAND:
EventBroadcaster.broadcast(BroadcastMessages.INVOKE_DEFAULT_ACTION);
_dd1.consume();
break;
}
};
SystemTreeBinding.prototype.focus=function(){
SystemTreeBinding.superclass.focus.call(this);
if(this.isFocused){
this._handleSystemTreeFocus();
}
};
SystemTreeBinding.prototype._focusDefault=function(){
this._attemptRestorableFocus();
if(!this.getFocusedTreeNodeBindings().hasEntries()){
SystemTreeBinding.superclass._focusDefault.call(this);
}
};
SystemTreeBinding.prototype._attemptRestorableFocus=function(){
if(this._treeNodeBindings.has(this._restorableFocusHandle)){
var _dd4=this._treeNodeBindings.get(this._restorableFocusHandle);
this.focusSingleTreeNodeBinding(_dd4);
}
this._restorableFocusHandle=null;
};
SystemTreeBinding.prototype._handleSystemTreeFocus=function(){
if(this.getFocusedTreeNodeBindings().hasEntries()){
this._computeClipboardSetup();
this._computeRefreshSetup();
if(this._isActionProfileAware){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED,{activePosition:this._activePosition,actionProfile:this.getCompiledActionProfile()});
}
}
};
SystemTreeBinding.prototype.registerTreeNodeBinding=function(_dd5){
SystemTreeBinding.superclass.registerTreeNodeBinding.call(this,_dd5);
var reg=this._entityTokenRegistry;
var _dd7=_dd5.node.getEntityToken();
if(reg.has(_dd7)){
reg.get(_dd7).add(_dd5);
}else{
reg.set(_dd7,new List([_dd5]));
}
var _dd8=null;
if(this.isLockedToEditor){
if(_dd7==StageBinding.entityToken){
if(_dd5.node.isTreeLockEnabled()){
_dd8=_dd5;
}
}
}else{
if(this._backupfocushandle!=null){
if(this._backupfocushandle==_dd5.node.getHandle()){
_dd8=_dd5;
}
}
}
if(_dd8!=null){
this.focusSingleTreeNodeBinding(_dd8);
}
};
SystemTreeBinding.prototype.unRegisterTreeNodeBinding=function(_dd9){
SystemTreeBinding.superclass.unRegisterTreeNodeBinding.call(this,_dd9);
var reg=this._entityTokenRegistry;
var _ddb=_dd9.node.getEntityToken();
if(reg.has(_ddb)){
var list=reg.get(_ddb);
list.del(_dd9);
if(!list.hasEntries()){
reg.del(_ddb);
}
}else{
this.logger.fatal("SystemTreeBinding out of synch: unRegisterTreeNodeBinding");
if(Application.isDeveloperMode){
Dialog.error("Attention Developer","Tree is out of synch. Please reproduce this bug and file a report.");
}
}
if(!this.isLockedToEditor){
if(_dd9.isFocused&&this._backupfocushandle==null){
this._backupfocushandle=_dd9.node.getHandle();
var self=this;
setTimeout(function(){
self._backupfocushandle=null;
},200);
}
}
};
SystemTreeBinding.prototype._updateRefreshingTrees=function(key){
var _ddf=this._refreshingTreeNodes;
if(_ddf.hasEntries()&&_ddf.has(key)){
_ddf.del(key);
if(!_ddf.hasEntries()){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this._refreshToken);
this._refreshToken=null;
this._attemptRestorableFocus();
}
}
};
SystemTreeBinding.prototype._updateFocusedNode=function(){
if(!this._focusedTreeNodeBindings.hasEntries()&&this._activePosition!=SystemAction.activePositions.SelectorTree){
var _de0=StageBinding.entityToken;
if(_de0!=null){
this._focusTreeNodeByEntityToken(_de0);
}
}
};
SystemTreeBinding.prototype._computeClipboardSetup=function(){
var _de1=false;
var _de2=this.getFocusedTreeNodeBindings();
if(this._activePosition==SystemAction.activePositions.SelectorTree){
_de1=false;
}else{
if(_de2.hasEntries()){
_de1=true;
while(_de1&&_de2.hasNext()){
var _de3=_de2.getNext();
if(!_de3.isDraggable){
_de1=false;
}
}
}
}
SystemTreePopupBinding.isCutAllowed=_de1;
};
SystemTreeBinding.prototype._computeRefreshSetup=function(){
SystemTreePopupBinding.isRefreshAllowed=SystemTreeBinding.clipboard===null;
};
SystemTreeBinding.prototype.handleBroadcast=function(_de4,arg){
SystemTreeBinding.superclass.handleBroadcast.call(this,_de4,arg);
switch(_de4){
case BroadcastMessages.SYSTEMTREEBINDING_REFRESH:
if(arg!=null||this.isFocused){
this._handleCommandBroadcast(_de4,arg);
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_CUT:
case BroadcastMessages.SYSTEMTREEBINDING_COPY:
case BroadcastMessages.SYSTEMTREEBINDING_PASTE:
if(this.isFocused){
this._handleCommandBroadcast(_de4);
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_COLLAPSEALL:
this.collapse(true);
break;
case BroadcastMessages.DOCKTABBINDING_SELECT:
if(this.isLockedToEditor){
var tab=arg;
if(tab.getHandle()!="Composite.Management.Explorer"){
this._handleDockTabSelect(tab);
}
}
break;
case BroadcastMessages.STAGEDIALOG_OPENED:
if(this.isLockedToEditor){
this.blurSelectedTreeNodes();
}
EventBroadcaster.broadcast(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED,{activePosition:this._activePosition});
break;
case BroadcastMessages.SYSTEMTREEBINDING_FOCUS:
var self=this,_de8=arg;
setTimeout(function(){
if(_de8!=null){
self._focusTreeNodeByEntityToken(_de8);
}
},250);
break;
}
};
SystemTreeBinding.prototype._handleDockTabSelect=function(tab){
var _dea=tab.perspectiveNode==null;
if(!_dea){
_dea=tab.perspectiveNode==this.perspectiveNode;
}
if(_dea){
var self=this,_dec=tab.getEntityToken();
setTimeout(function(){
if(_dec==null){
self.blurSelectedTreeNodes();
}else{
self._focusTreeNodeByEntityToken(_dec);
}
},250);
}
};
SystemTreeBinding.prototype._focusTreeNodeByEntityToken=function(_ded,_dee){
this.isLockFeatureFocus=true;
var _def=null;
if(this._entityTokenRegistry.has(_ded)){
var list=this._entityTokenRegistry.get(_ded);
list.each(function(tn){
var _df2=true;
if(tn.node.isTreeLockEnabled()){
_def=tn;
_df2=false;
}
return _df2;
});
if(_def!=null){
if(!_def.isFocused){
this.focusSingleTreeNodeBinding(_def,true);
}else{
_def.dispatchAction(TreeNodeBinding.ACTION_FOCUSED);
}
}
}
this.isLockFeatureFocus=false;
if(_def==null&&_dee!=true){
Application.lock(this);
StatusBar.busy();
var self=this;
setTimeout(function(){
if(Binding.exists(self)){
self._fetchTreeForEntityToken(_ded);
self._focusTreeNodeByEntityToken(_ded,true);
}
Application.unlock(self);
StatusBar.clear();
},0);
}
};
SystemTreeBinding.prototype._fetchTreeForEntityToken=function(_df4){
var _df5=new List();
if(this._activePosition==SystemAction.activePositions.SelectorTree){
var _df6=this.getRootTreeNodeBindings();
while(_df6.hasNext()){
var _df7=_df6.getNext();
_df5.add(_df7.node.getEntityToken());
}
}else{
_df5.add(StageBinding.perspectiveNode.getEntityToken());
}
while(_df5.hasNext()){
var _df8=_df5.getNext();
var _df9=this.getOpenSystemNodes();
var map=System.getInvisibleBranch(_df8,_df4,_df9);
if(map==null){
this.isLockedToEditor=false;
if(Application.isDeveloperMode){
Dialog.warning("Ouch!","Because the web service failed, tree has disabled the lock-tree-to-editor "+"feature. Otherwise, re-focus would fire the error indefinitely. Please try again.");
}
}else{
if(map.hasEntries()){
var self=this;
var _dfc=this._treeNodeBindings;
var _dfd=new Map();
function fix(_dfe,list){
if(!_dfe.hasBeenOpened){
if(list.hasEntries()){
list.each(function(node){
if(!_dfc.has(node.getHandle())){
var _e01=SystemTreeNodeBinding.newInstance(node,self.bindingDocument);
_dfd.set(node.getHandle(),_e01);
_dfe.add(_e01);
}
});
_dfe.attachRecursive();
}
}
_dfe.open(true);
}
map.each(function(_e02,list){
if(_dfc.has(_e02)){
var _e04=_dfc.get(_e02);
fix(_e04,list);
}else{
if(_dfd.has(_e02)){
var _e05=_dfd.get(_e02);
fix(_e05,list);
}else{
}
}
});
}
}
}
};
SystemTreeBinding.prototype._handleCommandBroadcast=function(_e06,arg){
switch(_e06){
case BroadcastMessages.SYSTEMTREEBINDING_REFRESH:
var _e08=arg;
if(_e08!=null){
this._invokeServerRefresh(_e08);
}else{
this._invokeManualRefresh();
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_CUT:
if(SystemTreeBinding.clipboard!=null){
SystemTreeBinding.clipboard.hideDrag();
}
var _e09=this.getFocusedTreeNodeBindings().getFirst();
SystemTreeBinding.clipboardOperation=SystemTreePopupBinding.CMD_CUT;
SystemTreeBinding.clipboard=_e09;
_e09.showDrag();
break;
case BroadcastMessages.SYSTEMTREEBINDING_COPY:
var _e09=this.getFocusedTreeNodeBindings().getFirst();
SystemTreeBinding.clipboardOperation=SystemTreePopupBinding.CMD_COPY;
SystemTreeBinding.clipboard=_e09;
break;
case BroadcastMessages.SYSTEMTREEBINDING_PASTE:
this._handlePaste();
break;
}
};
SystemTreeBinding.prototype._invokeServerRefresh=function(_e0a){
if(_e0a!=null&&_e0a=="null"){
if(Application.isDeveloperMode){
alert("Saa har vi balladen.");
}
}
if(this._entityTokenRegistry.has(_e0a)){
var list=this._entityTokenRegistry.get(_e0a).reset();
this._refreshToken=_e0a;
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this._refreshToken);
while(list.hasNext()){
var _e0c=list.getNext();
this._refreshingTreeNodes.set(_e0c.key,true);
setTimeout(function(){
_e0c.refresh(true);
},0);
}
}
};
SystemTreeBinding.prototype._invokeManualRefresh=function(){
var _e0d=this.getFocusedTreeNodeBindings().getFirst();
if(_e0d){
var _e0e=_e0d.getLabel();
var _e0f=_e0d.getAncestorBindingByLocalName("treenode");
if(_e0f){
_e0d=_e0f;
}
this._refreshToken=null;
this._refreshingTreeNodes.set(_e0d.key,true);
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,null);
if(!StatusBar.state){
var _e10=StringBundle.getString("ui","Website.App.StatusBar.Refreshing");
StatusBar.busy(_e10,[_e0e]);
}
_e0d.refresh();
}
};
SystemTreeBinding.prototype._handlePaste=function(){
var _e11=SystemTreeBinding.clipboard;
if(_e11){
var type=_e11.dragType;
var _e13=this.getFocusedTreeNodeBindings().getFirst();
if(_e13.dragAccept){
if(_e13.acceptor.isAccepting(type)){
this._performPaste(_e13);
}else{
Dialog.message(StringBundle.getString("ui","Website.Misc.Trees.DialogTitle.PasteTypeNotAllowed"),StringBundle.getString("ui","Website.Misc.Trees.DialogText.PasteTypeNotAllowed"));
}
}else{
Dialog.message(StringBundle.getString("ui","Website.Misc.Trees.DialogTitle.PasteNotAllowed"),StringBundle.getString("ui","Website.Misc.Trees.DialogText.PasteNotAllowed"));
}
}
};
SystemTreeBinding.prototype._performPaste=function(_e14){
var self=this;
function update(){
MessageQueue.update();
Application.unlock(self);
}
if(_e14.node.hasDetailedDropSupport()){
if(_e14.node.hasChildren()){
var _e16=_e14.node.getChildren();
Dialog.invokeModal(SystemTreeBinding.URL_DIALOG_DETAILEDPASTE,{handleDialogResponse:function(_e17,_e18){
if(_e17==Dialog.RESPONSE_ACCEPT){
Application.lock(self);
var _e19=_e18.get("switch");
var _e1a=_e18.get("sibling");
if(_e19=="after"){
_e1a++;
}
var _e1b=_e14.accept(SystemTreeBinding.clipboard,_e1a);
if(_e1b){
SystemTreeBinding.clipboard=null;
SystemTreeBinding.clipboardOperation=null;
setTimeout(update,0);
}else{
update();
}
}
}},_e16);
}else{
Application.lock(self);
var _e1c=_e14.accept(SystemTreeBinding.clipboard,0);
if(_e1c){
SystemTreeBinding.clipboard=null;
SystemTreeBinding.clipboardOperation=null;
setTimeout(update,0);
}else{
update();
}
}
}else{
Application.lock(self);
var _e1c=_e14.accept(SystemTreeBinding.clipboard,0);
if(_e1c){
SystemTreeBinding.clipboard=null;
SystemTreeBinding.clipboardOperation=null;
}
update();
}
};
SystemTreeBinding.prototype.selectDefault=function(){
if(this._defaultTreeNode){
this._defaultTreeNode.focus();
this._defaultTreeNode=null;
}
};
SystemTreeBinding.prototype.collapse=function(_e1d){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED,{position:this._activePosition});
if(_e1d){
this.blurSelectedTreeNodes();
var _e1e=this.getRootTreeNodeBindings();
_e1e.each(function(_e1f){
if(_e1f.isContainer&&_e1f.isOpen){
_e1f.close();
_e1f.hasBeenOpened=false;
_e1f.empty();
}
});
}else{
SystemTreeBinding.superclass.collapse.call(this);
}
};
SystemTreeBinding.prototype.setLockToEditor=function(_e20){
if(_e20!=this.isLockedToEditor){
this.isLockedToEditor=_e20;
if(_e20){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_LOCKTOEDITOR);
}
}
};
SystemTreeBinding.prototype.getOpenSystemNodes=function(){
var list=new List([StageBinding.perspectiveNode]);
if(this._activePosition==SystemAction.activePositions.SelectorTree){
list=new List();
}
var _e22=this.getRootTreeNodeBindings();
_e22.each(function(_e23){
var _e24=_e23.getOpenSystemNodes();
if(_e24!=null&&_e24.hasEntries()){
list.merge(_e24);
}else{
if(_e23.isOpen){
list.add(_e23.node);
}
}
});
return list;
};
SystemTreeBinding.prototype.focusSingleTreeNodeBinding=function(_e25){
SystemTreeBinding.superclass.focusSingleTreeNodeBinding.call(this,_e25);
if(_e25!=null){
this._handleSystemTreeFocus();
}
};
SystemTreeBinding.prototype.getCompiledActionProfile=function(){
var temp={};
var _e27=new Map();
var _e28=this.getFocusedTreeNodeBindings();
var _e29=_e28.getFirst().node.getActionProfile();
var self=this;
_e29.each(function(_e2b,list){
var _e2d=new List();
list.each(function(_e2e){
if(_e2e.getActivePositions()&self._activePosition){
_e2d.add(_e2e);
}
});
if(_e2d.hasEntries()){
_e27.set(_e2b,_e2d);
}
});
_e27.activePosition=this._activePosition;
return _e27;
};
SystemTreePopupBinding.prototype=new PopupBinding;
SystemTreePopupBinding.prototype.constructor=SystemTreePopupBinding;
SystemTreePopupBinding.superclass=PopupBinding.prototype;
SystemTreePopupBinding.CMD_CUT="cut";
SystemTreePopupBinding.CMD_COPY="copy";
SystemTreePopupBinding.CMD_PASTE="paste";
SystemTreePopupBinding.CMD_REFRESH="refresh";
SystemTreePopupBinding.isCutAllowed=false;
SystemTreePopupBinding.isRefreshAllowed=true;
function SystemTreePopupBinding(){
this.logger=SystemLogger.getLogger("SystemTreePopupBinding");
this._currentProfileKey=null;
this._actionProfile=null;
this.selectedTreeNodeBinding=null;
}
SystemTreePopupBinding.prototype.onBindingRegister=function(){
SystemTreePopupBinding.superclass.onBindingRegister.call(this);
this.subscribe(BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED);
this.addActionListener(MenuItemBinding.ACTION_COMMAND,this);
};
SystemTreePopupBinding.prototype.onBindingAttach=function(){
SystemTreePopupBinding.superclass.onBindingAttach.call(this);
this._indexMenuContent();
};
SystemTreePopupBinding.prototype.handleBroadcast=function(_e2f,arg){
SystemTreePopupBinding.superclass.handleBroadcast.call(this,_e2f,arg);
switch(_e2f){
case BroadcastMessages.SYSTEM_ACTIONPROFILE_PUBLISHED:
if(arg!=null&&arg.actionProfile!=null){
this._actionProfile=arg.actionProfile;
}else{
this._currentProfileKey=null;
}
break;
}
};
SystemTreePopupBinding.prototype._getProfileKey=SystemToolBarBinding.prototype._getProfileKey;
SystemTreePopupBinding.prototype.show=function(){
var key=this._getProfileKey();
if(key!=this._currentProfileKey){
this.disposeContent();
this.constructContent();
this._currentProfileKey=key;
}
this._setupClipboardItems();
this._setupRefreshItem();
SystemTreePopupBinding.superclass.show.call(this);
};
SystemTreePopupBinding.prototype._setupClipboardItems=function(){
var cut=this.getMenuItemForCommand(SystemTreePopupBinding.CMD_CUT);
var copy=this.getMenuItemForCommand(SystemTreePopupBinding.CMD_COPY);
var _e34=this.getMenuItemForCommand(SystemTreePopupBinding.CMD_PASTE);
cut.setDisabled(!SystemTreePopupBinding.isCutAllowed);
copy.setDisabled(!SystemTreePopupBinding.isCutAllowed);
_e34.setDisabled(SystemTreeBinding.clipboard==null);
};
SystemTreePopupBinding.prototype._setupRefreshItem=function(){
var _e35=this.getMenuItemForCommand(SystemTreePopupBinding.CMD_REFRESH);
_e35.setDisabled(!SystemTreePopupBinding.isRefreshAllowed);
};
SystemTreePopupBinding.prototype.handleAction=function(_e36){
SystemTreePopupBinding.superclass.handleAction.call(this,_e36);
switch(_e36.type){
case MenuItemBinding.ACTION_COMMAND:
var _e37=_e36.target;
var _e38=_e37.associatedSystemAction;
if(_e38){
var list=ExplorerBinding.getFocusedTreeNodeBindings();
if(list.hasEntries()){
var _e3a=list.getFirst();
var _e3b=_e3a.node;
}
SystemAction.invoke(_e38,_e3b);
}else{
var cmd=_e37.getProperty("cmd");
if(cmd){
this._handleCommand(cmd);
}
}
this._currentProfileKey=null;
break;
}
};
SystemTreePopupBinding.prototype._handleCommand=function(cmd){
var _e3e=null;
switch(cmd){
case SystemTreePopupBinding.CMD_CUT:
_e3e=BroadcastMessages.SYSTEMTREEBINDING_CUT;
break;
case SystemTreePopupBinding.CMD_COPY:
_e3e=BroadcastMessages.SYSTEMTREEBINDING_COPY;
break;
case SystemTreePopupBinding.CMD_PASTE:
_e3e=BroadcastMessages.SYSTEMTREEBINDING_PASTE;
break;
case SystemTreePopupBinding.CMD_REFRESH:
_e3e=BroadcastMessages.SYSTEMTREEBINDING_REFRESH;
break;
}
if(_e3e){
setTimeout(function(){
EventBroadcaster.broadcast(_e3e);
},0);
}
};
SystemTreePopupBinding.prototype.disposeContent=function(){
var _e3f=new List(DOMUtil.getElementsByTagName(this.bindingElement,"menugroup"));
while(_e3f.hasNext()){
var _e40=UserInterface.getBinding(_e3f.getNext());
if(!_e40.getProperty("rel")){
_e40.dispose();
}
}
};
SystemTreePopupBinding.prototype.constructContent=function(){
if(this._actionProfile!=null){
var doc=this.bindingDocument;
var _e42=new List();
var self=this;
this._actionProfile.each(function(_e44,list){
var _e46=MenuGroupBinding.newInstance(doc);
list.each(function(_e47){
var _e48=self.getMenuItemBinding(_e47);
_e46.add(_e48);
});
_e42.add(_e46);
});
_e42.reverse();
while(_e42.hasNext()){
this._bodyBinding.addFirst(_e42.getNext());
}
this._bodyBinding.attachRecursive();
}
};
SystemTreePopupBinding.prototype.getMenuItemBinding=function(_e49){
var _e4a=MenuItemBinding.newInstance(this.bindingDocument);
var _e4b=_e49.getLabel();
var _e4c=_e49.getToolTip();
var _e4d=_e49.getImage();
var _e4e=_e49.getDisabledImage();
var _e4f=_e49.isCheckBox();
if(_e4b){
_e4a.setLabel(_e4b);
}
if(_e4c){
_e4a.setToolTip(_e4c);
}
if(_e4d){
_e4a.imageProfile=new ImageProfile({image:_e4d,imageDisabled:_e4e});
}
if(_e4f){
_e4a.setType(MenuItemBinding.TYPE_CHECKBOX);
if(_e49.isChecked()){
_e4a.check(true);
}
}
if(_e49.isDisabled()){
_e4a.disable();
}
_e4a.associatedSystemAction=_e49;
return _e4a;
};
SystemTreePopupBinding.prototype.snapToMouse=function(e){
var node=e.target?e.target:e.srcElement;
var name=DOMUtil.getLocalName(node);
var _e53=null;
if(name!="tree"){
switch(name){
case "treenode":
break;
default:
node=DOMUtil.getAncestorByLocalName("treenode",node);
if(node!=null){
_e53=UserInterface.getBinding(node);
if(_e53.isDisabled){
_e53=null;
}
}
break;
}
if(_e53!=null&&_e53.node!=null&&_e53.node.getActionProfile()!=null){
SystemTreePopupBinding.superclass.snapToMouse.call(this,e);
}
}
};
SystemTreeNodeBinding.prototype=new TreeNodeBinding;
SystemTreeNodeBinding.prototype.constructor=SystemTreeNodeBinding;
SystemTreeNodeBinding.superclass=TreeNodeBinding.prototype;
SystemTreeNodeBinding.ACTION_REFRESHED="systemtreenoderefreshed";
SystemTreeNodeBinding.ACTION_REFRESHED_YEAH="systemtreenoderefreshedyeah!";
SystemTreeNodeBinding.MAX_CHILD_IMPORT=10000;
function SystemTreeNodeBinding(){
this.logger=SystemLogger.getLogger("SystemTreeNodeBinding");
this.perspectiveNode=null;
this._isForcedOpen=false;
this.node=null;
this.autoExpand=false;
}
SystemTreeNodeBinding.prototype.onBindingAttach=function(){
this.addActionListener(SystemTreeNodeBinding.ACTION_REFRESHED);
this.subscribe(BroadcastMessages.SYSTEMTREENODEBINDING_FORCE_OPEN);
this.isDisabled=this.node.isDisabled();
var _e54=this.node.getLabel();
if(_e54){
this.setLabel(_e54);
}
var _e55=this.node.getToolTip();
if(_e55){
this.setToolTip(_e55);
}
var _e56=this.node.getHandle();
if(_e56){
this.setHandle(_e56);
}
var bag=this.node.getPropertyBag();
if(bag){
for(var key in bag){
switch(key.toLowerCase()){
case "id":
case "key":
throw new Error("Illegal propertybag key: "+key);
break;
default:
this.setProperty(key,bag[key]);
break;
}
}
}
SystemTreeNodeBinding.superclass.onBindingAttach.call(this);
this.perspectiveNode=this.containingTreeBinding.perspectiveNode;
};
SystemTreeNodeBinding.prototype._initializeBindingDragAndDropFeatures=function(){
if(this.node.hasDragType()){
this.setProperty("dragtype",this.node.getDragType());
}
if(this.node.hasDragAccept()){
var _e59="";
var list=this.node.getDragAccept();
while(list.hasNext()){
_e59+=list.getNext();
if(list.hasNext()){
_e59+=" ";
}
}
this.setProperty("dragaccept",_e59);
}
SystemTreeNodeBinding.superclass._initializeBindingDragAndDropFeatures.call(this);
};
SystemTreeNodeBinding.prototype.handleAction=function(_e5b){
SystemTreeNodeBinding.superclass.handleAction.call(this,_e5b);
switch(_e5b.type){
case SystemTreeNodeBinding.ACTION_REFRESHED:
if(_e5b.target==this){
if(!this.isOpen){
this.hasBeenOpened=false;
_e5b.consume();
}
}
break;
}
};
SystemTreeNodeBinding.prototype.handleBroadcast=function(_e5c,arg){
SystemTreeNodeBinding.superclass.handleBroadcast.call(this,_e5c,arg);
switch(_e5c){
case BroadcastMessages.SYSTEMTREENODEBINDING_FORCE_OPEN:
if(arg==this.node.getEntityToken()){
if(this.isContainer&&!this.isOpen){
this._isForcedOpen=true;
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREENODEBINDING_FORCING_OPEN,this);
var self=this;
setTimeout(function(){
self.open();
},0);
}
}
break;
}
};
SystemTreeNodeBinding.prototype._computeImageProfile=function(){
};
SystemTreeNodeBinding.prototype.computeImage=function(){
var _e5f=null;
var _e60=this.node.getImageProfile();
if(_e60){
if(this.isOpen){
_e5f=_e60.getActiveImage();
}else{
_e5f=_e60.getDefaultImage();
}
}
if(!_e5f){
_e5f=SystemTreeNodeBinding.superclass.computeImage.call(this);
}
return _e5f;
};
SystemTreeNodeBinding.prototype.open=function(_e61){
var _e62=this.isContainer&&!this.isOpen;
var _e63=!this.hasBeenOpened;
SystemTreeNodeBinding.superclass.open.call(this);
if(_e62&&(_e63||SystemTreeBinding.HAS_NO_MEMORY)&&_e61!=true){
this.refresh();
if(this._isForcedOpen){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREENODEBINDING_FORCED_OPEN,this);
this._isForcedOpen=false;
}
}
};
SystemTreeNodeBinding.prototype.refresh=function(){
var _e64=null;
if(this.isContainer){
_e64=this.getOpenSystemNodes();
}
this.isRefreshing=true;
Application.lock(this);
StatusBar.busy();
var self=this;
setTimeout(function(){
if(Binding.exists(self)){
self._performRefresh(_e64);
Application.unlock(self);
}else{
Application.unlock(Application,true);
}
StatusBar.clear();
},0);
};
SystemTreeNodeBinding.prototype._performRefresh=function(_e66){
if(_e66!=null){
this._refreshBranch(_e66);
}else{
this._refreshChildren();
}
this.isRefreshing=false;
this.isContainer=DOMUtil.getElementsByTagName(this.bindingElement,"treenode").item(0)!=null;
this.updateClassNames();
this.dispatchAction(SystemTreeNodeBinding.ACTION_REFRESHED);
this.dispatchAction(SystemTreeNodeBinding.ACTION_REFRESHED_YEAH);
};
SystemTreeNodeBinding.prototype._refreshChildren=function(){
var _e67=new List();
var _e68=this.node.getChildren();
this.empty();
if(_e68.hasEntries()){
this._insertTreeNodesRegulated(_e68);
}
};
SystemTreeNodeBinding.prototype._insertTreeNodesRegulated=function(_e69){
var _e6a=0;
var _e6b=new List([]);
while(_e69.hasEntries()&&_e6a<=SystemTreeNodeBinding.MAX_CHILD_IMPORT){
var _e6c=SystemTreeNodeBinding.newInstance(_e69.extractFirst(),this.bindingDocument);
_e6c.autoExpand=this.autoExpand;
this.add(_e6c);
_e6c.attach();
_e6a++;
if(this.autoExpand){
if(_e6a==1&&!_e69.hasEntries()||LastOpenedSystemNodes.isOpen(_e6c)){
_e6b.add(_e6c);
}
}
}
if(_e69.hasEntries()){
this._insertBufferTreeNode(_e69);
}
_e6b.each(function(node){
if(node.isContainer&&!node.isOpen){
var self=node;
setTimeout(function(){
self.open();
},0);
}
});
};
SystemTreeNodeBinding.prototype._insertBufferTreeNode=function(_e6f){
alert("Max treenode count reached. This is not handled!");
alert("TODO: SystemTreeNodeBinding#._insertBufferTreeNode");
};
SystemTreeNodeBinding.prototype._refreshBranch=function(list){
var _e71=this.node.getDescendantBranch(list);
if(_e71.hasEntries()){
this.XXX(_e71);
}
};
SystemTreeNodeBinding.prototype.XXX=function(_e72){
var self=this;
var map=new Map();
this.empty();
_e72.each(function(key,_e76){
if(_e76.hasEntries()){
_e76.each(function(node){
var _e78=SystemTreeNodeBinding.newInstance(node,self.bindingDocument);
map.set(node.getHandle(),_e78);
if(map.has(key)){
var _e79=map.get(key);
_e79.add(_e78);
_e79.isOpen=true;
_e79.hasBeenOpened=true;
}else{
if(key==self.node.getHandle()){
self.add(_e78);
}else{
}
}
});
}
});
this.attachRecursive();
_e72.dispose();
map.dispose();
};
SystemTreeNodeBinding.prototype.getOpenDescendants=function(){
var _e7a=new TreeCrawler();
var _e7b=new List();
_e7a.mode=TreeCrawler.MODE_GETOPEN;
_e7a.crawl(this.bindingElement,_e7b);
if(_e7b.hasEntries()){
_e7b.extractFirst();
}
_e7a.dispose();
return _e7b;
};
SystemTreeNodeBinding.prototype.getOpenSystemNodes=function(){
var _e7c=null;
var list=this.getOpenDescendants();
if(list.hasEntries()){
_e7c=new List([this.node]);
list.each(function(_e7e){
_e7c.add(_e7e.node);
});
}
return _e7c;
};
SystemTreeNodeBinding.prototype.updateClassNames=function(){
if(!this.isRefreshing){
SystemTreeNodeBinding.superclass.updateClassNames.call(this);
}
};
SystemTreeNodeBinding.prototype.acceptTreeNodeBinding=function(_e7f,_e80){
var _e81=(SystemTreeBinding.clipboardOperation==SystemTreePopupBinding.CMD_COPY);
if(_e7f instanceof SystemTreeNodeBinding){
if(TreeService.ExecuteDropElementAction){
TreeService.ExecuteDropElementAction(_e7f.node.getData(),this.node.getData(),_e80?_e80:this.containingTreeBinding.getDropIndex(),Application.CONSOLE_ID,_e81);
}
}
};
SystemTreeNodeBinding.prototype.invokeManagedFocus=function(e){
if(!this.isFocused){
SystemTreeNodeBinding.superclass.invokeManagedFocus.call(this);
var tree=this.containingTreeBinding;
if(tree.isLockedToEditor&&!tree.isLockFeatureFocus){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREENODEBINDING_FOCUS,this);
}
}
};
SystemTreeNodeBinding.prototype.hasChildren=function(){
return this.node.hasChildren();
};
SystemTreeNodeBinding.newInstance=function(node,_e85){
var _e86=DOMUtil.createElementNS(Constants.NS_UI,"ui:treenode",_e85);
var _e87=UserInterface.registerBinding(_e86,SystemTreeNodeBinding);
_e87.node=node;
return _e87;
};
SystemPageBinding.prototype=new PageBinding;
SystemPageBinding.prototype.constructor=SystemPageBinding;
SystemPageBinding.superclass=PageBinding.prototype;
function SystemPageBinding(){
this.logger=SystemLogger.getLogger("SystemPageBinding");
this.node=null;
this._tree=null;
}
SystemPageBinding.prototype.toString=function(){
return "[SystemPageBinding]";
};
SystemPageBinding.prototype.onBindingRegister=function(){
SystemPageBinding.superclass.onBindingRegister.call(this);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESH);
this.addActionListener(ButtonBinding.ACTION_COMMAND);
};
SystemPageBinding.prototype.setPageArgument=function(_e88){
this.node=_e88;
SystemPageBinding.superclass.setPageArgument.call(this,_e88);
};
SystemPageBinding.prototype.onBeforePageInitialize=function(){
if(this.node){
this._tree=this.bindingWindow.bindingMap.tree;
if(this._tree){
this._buildTree();
}else{
throw "SystemPageBinding requires a SystemTreeBinding";
}
}else{
throw "SystemPageBinding requires a SystemNode";
}
SystemPageBinding.superclass.onBeforePageInitialize.call(this);
};
SystemPageBinding.prototype._buildTree=function(){
var _e89=this.node.getChildren();
if(_e89.hasEntries()){
while(_e89.hasNext()){
var node=SystemTreeNodeBinding.newInstance(_e89.getNext(),this.bindingDocument);
this._tree.add(node);
node.attach();
}
}
};
SystemPageBinding.prototype._refreshTree=function(){
var _e8b=this._tree._treeBodyBinding.getChildBindingsByLocalName("treenode");
_e8b.each(function(root){
if(!root.isContainer){
root.isOpen=true;
}
});
var _e8d=new TreeCrawler();
var _e8e=new List();
_e8d.mode=TreeCrawler.MODE_GETOPEN;
_e8d.crawl(this.bindingElement,_e8e);
_e8d.dispose();
var list=new List([this.node]);
_e8e.each(function(_e90){
list.add(_e90.node);
});
this._tree.empty();
var _e91=this.node.getDescendantBranch(list);
if(_e91.hasEntries()){
var self=this;
var map=new Map();
_e91.each(function(key,_e95){
_e95.each(function(node){
var _e97=SystemTreeNodeBinding.newInstance(node,self.bindingDocument);
map.set(node.getHandle(),_e97);
if(map.has(key)){
var _e98=map.get(key);
_e98.add(_e97);
_e98.isOpen=true;
}else{
if(key==self.node.getHandle()){
self._tree.add(_e97);
}
}
});
});
this._tree.attachRecursive();
}
};
SystemPageBinding.prototype.onAfterPageInitialize=function(){
SystemPageBinding.superclass.onAfterPageInitialize.call(this);
this._tree.selectDefault();
};
SystemPageBinding.prototype.handleAction=function(_e99){
SystemPageBinding.superclass.handleAction.call(this,_e99);
switch(_e99.type){
case ButtonBinding.ACTION_COMMAND:
var _e9a=_e99.target;
switch(_e9a.getID()){
case "locktreebutton":
this._tree.setLockToEditor(_e9a.isChecked);
break;
case "collapsebutton":
this._tree.collapse();
break;
}
break;
}
};
SystemPageBinding.prototype.handleBroadcast=function(_e9b,arg){
SystemPageBinding.superclass.handleBroadcast.call(this,_e9b,arg);
switch(_e9b){
case BroadcastMessages.SYSTEMTREEBINDING_REFRESH:
var _e9d=arg;
if(this.node&&this.node.getEntityToken()==_e9d){
try{
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,_e9d);
var self=this;
Application.lock(this);
setTimeout(function(){
self._refreshTree();
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,_e9d);
Application.unlock(self);
},0);
}
catch(exception){
alert(exception);
SystemDebug.stack(arguments);
}
}
break;
}
};
StageContainerBinding.prototype=new FlexBoxBinding;
StageContainerBinding.prototype.constructor=StageContainerBinding;
StageContainerBinding.superclass=FlexBoxBinding.prototype;
function StageContainerBinding(){
this.logger=SystemLogger.getLogger("StageContainerBinding");
}
StageContainerBinding.prototype.toString=function(){
return "[StageContainerBinding]";
};
StageContainerBinding.prototype.onBindingAttach=function(){
StageContainerBinding.superclass.onBindingAttach.call(this);
this.subscribe(BroadcastMessages.APPLICATION_OPERATIONAL);
};
StageContainerBinding.prototype.handleBroadcast=function(_e9f,arg){
StageContainerBinding.superclass.handleBroadcast.call(this,_e9f,arg);
var _ea1=this.bindingWindow.WindowManager;
switch(_e9f){
case BroadcastMessages.APPLICATION_OPERATIONAL:
this.subscribe(_ea1.WINDOW_RESIZED_BROADCAST);
this._fit();
this.reflex();
break;
case _ea1.WINDOW_RESIZED_BROADCAST:
if(Client.isMozilla==true){
this._fit();
this.reflex();
}else{
Application.lock(this);
var self=this;
setTimeout(function(){
self._fit();
self.reflex();
Application.unlock(self);
},0);
}
break;
}
};
StageContainerBinding.prototype._fit=function(){
var _ea3=this.bindingWindow.WindowManager;
this.bindingElement.style.width=_ea3.getWindowDimensions().w+"px";
};
StageBinding.prototype=new FocusBinding;
StageBinding.prototype.constructor=StageBinding;
StageBinding.superclass=FocusBinding.prototype;
StageBinding.bindingInstance=null;
StageBinding.perspectiveNode=null;
StageBinding.entityToken=null;
StageBinding.treeSelector=null;
StageBinding.handleViewPresentation=function(_ea4){
if(StageBinding.isViewOpen(_ea4)){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEW,_ea4);
}else{
var _ea5=ViewDefinitions[_ea4];
StageBinding.presentViewDefinition(_ea5);
}
};
StageBinding.isViewOpen=function(_ea6){
return StageBinding.bindingInstance._activeViewDefinitions[_ea6]!=null;
};
StageBinding.presentViewDefinition=function(_ea7){
if(_ea7.label!=null){
var _ea8=StringBundle.getString("ui","Website.App.StatusBar.Opening");
StatusBar.busy(_ea8,[_ea7.label]);
}else{
StatusBar.busy();
}
StageBinding.bindingInstance._presentViewDefinition(_ea7);
};
function StageBinding(){
this.logger=SystemLogger.getLogger("StageBinding");
this._activeViewDefinitions={};
this._decksBinding=null;
this._explorerBinding=null;
this._isStageReady=false;
this._isExplorerReady=false;
this._isDecksReady=false;
this._dockBindings=new Map();
this._isShowingStart=false;
this._isShowingDefaultStart=false;
this.isActivationAware=false;
return this;
}
StageBinding.prototype.toString=function(){
return "[StageBinding]";
};
StageBinding.prototype.onBindingRegister=function(){
StageBinding.superclass.onBindingRegister.call(this);
StageBinding.bindingInstance=this;
StageBoxHandlerAbstraction.onBindingRegister.call(this);
this.addActionListener(ExplorerBinding.ACTION_INITIALIZED);
this.addActionListener(StageDecksBinding.ACTION_INITIALIZED);
this.addActionListener(ExplorerMenuBinding.ACTION_SELECTIONCHANGED);
this.addActionListener(TabBoxBinding.ACTION_ATTACHED);
this.addActionListener(TabBoxBinding.ACTION_SELECTED);
this.addActionListener(WindowBinding.ACTION_LOADED);
this.addActionListener(ExplorerBinding.ACTION_DECK_LOADED);
this.addActionListener(StageDeckBinding.ACTION_LOADED);
this.addActionListener(ErrorBinding.ACTION_INITIALIZE);
this.subscribe(BroadcastMessages.VIEW_CLOSED);
this.subscribe(BroadcastMessages.VIEW_OPENED);
this.subscribe(BroadcastMessages.COMPOSITE_START);
this.subscribe(BroadcastMessages.COMPOSITE_STOP);
this.subscribe(BroadcastMessages.DOCK_MAXIMIZED);
this.subscribe(BroadcastMessages.DOCK_NORMALIZED);
var root=System.getRootNode();
this._initializeRootActions(root);
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESH,{handleBroadcast:function(_eaa,arg){
if(arg==root.getEntityToken()){
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHALL);
}
}});
var _eac=System.getPerspectiveNodes();
if(_eac.hasEntries()){
this._initializeSystemViewDefinitions(_eac);
}else{
top.app.bindingMap.stagecontainer.hide();
this._onStageReady();
Dialog.message(StringBundle.getString("ui","Website.Dialogs.NoAccessTitle"),StringBundle.getString("ui","Website.Dialogs.NoAccessText"));
}
};
StageBinding.prototype._renameThisMethod=function(){
if(LocalStore.isInitialized){
this._initializeWorkbenchLayout();
}else{
var self=this;
EventBroadcaster.subscribe(BroadcastMessages.LOCALSTORE_INITIALIZED,{handleBroadcast:function(){
self._initializeWorkbenchLayout();
}});
}
};
StageBinding.prototype._initializeWorkbenchLayout=function(){
if(this._explorerBinding){
var _eae=null;
if(LocalStore.isEnabled){
_eae=LocalStore.getProperty(LocalStore.SELECTED_PERSPECTIVE_HANDLE);
}
if(_eae&&ViewDefinitions[_eae]){
alert("StageBinding#_initializeWorkbenchLayout !!!!");
this._explorerBinding.setSelectionByHandle(unescape(_eae));
}else{
this._explorerBinding.setSelectionDefault();
}
}else{
this._onStageReady();
}
};
StageBinding.prototype._onStageReady=function(){
if(!this._isStageReady){
if(!Application.hasStartPage||!Application.hasExternalConnection){
top.app.bindingMap.defaultstartdeck.select();
this._isShowingDefaultStart=true;
}
EventBroadcaster.broadcast(BroadcastMessages.STAGE_INITIALIZED);
this._isStageReady=true;
}
};
StageBinding.prototype._initializeRootActions=function(root){
var _eb0=root.getActionProfile();
if(_eb0&&_eb0.hasEntries()){
var _eb1=top.app.bindingMap.toolsmenugroup;
if(_eb1){
_eb0.each(function(_eb2,list){
list.each(function(_eb4){
var item=MenuItemBinding.newInstance(_eb1.bindingDocument);
item.setLabel(_eb4.getLabel());
item.setToolTip(_eb4.getToolTip());
item.setImage(_eb4.getImage());
item.setDisabled(_eb4.isDisabled());
item.associatedSystemAction=_eb4;
var _eb6=_eb1;
var tag=_eb4.getTag();
if(tag!=null){
switch(tag){
case SystemAction.TAG_CHANGEFROMLANGUAGE:
_eb6=top.app.bindingMap.translationsmenugroup;
break;
}
}
_eb6.add(item);
});
});
_eb1.attachRecursive();
}
}
};
StageBinding.prototype._initializeSystemViewDefinitions=function(_eb8){
while(_eb8.hasNext()){
var node=_eb8.getNext();
var _eba=node.getHandle();
ViewDefinitions[_eba]=new SystemViewDefinition(node);
}
};
StageBinding.prototype.handleAction=function(_ebb){
StageBinding.superclass.handleAction.call(this,_ebb);
var _ebc=_ebb.target;
switch(_ebb.type){
case StageDecksBinding.ACTION_INITIALIZED:
if(!Application.isOperational){
ProgressBarBinding.notch(4);
}
this._decksBinding=_ebc;
this._inflateBinding(_ebc);
_ebb.consume();
break;
case ExplorerBinding.ACTION_INITIALIZED:
if(!Application.isOperational){
ProgressBarBinding.notch(4);
}
this._explorerBinding=_ebc;
this._inflateBinding(_ebc);
_ebb.consume();
break;
case ExplorerMenuBinding.ACTION_SELECTIONCHANGED:
if(!Application.isOperational){
ProgressBarBinding.notch(5);
}
this.handlePerspectiveChange(_ebc);
_ebb.consume();
break;
case TabBoxBinding.ACTION_ATTACHED:
if(_ebc instanceof DockBinding){
switch(_ebc.reference){
case DockBinding.START:
case DockBinding.ABSBOTTOMLEFT:
case DockBinding.ABSBOTTOMRIGHT:
case DockBinding.ABSRIGHTTOP:
case DockBinding.ABSRIGHTBOTTOM:
this._dockBindings.set(_ebc.reference,_ebc);
break;
}
this.handleAttachedDock(_ebc);
_ebb.consume();
}
break;
case TabBoxBinding.ACTION_SELECTED:
if(_ebc instanceof DockBinding){
this.handleSelectedDockTab(_ebc.getSelectedTabBinding());
_ebb.consume();
}
break;
case WindowBinding.ACTION_LOADED:
break;
case ExplorerBinding.ACTION_DECK_LOADED:
this._isExplorerReady=true;
if(this._isDecksReady==true){
if(!this._isStageReady){
ProgressBarBinding.notch(3);
this._onStageReady();
}
}
break;
case StageSplitPanelBinding.ACTION_LAYOUTUPDATE:
if(!this._isFlexAbort&&Application.isOperational){
this._isFlexAbort=true;
this.reflex(true);
var self=this;
setTimeout(function(){
if(Client.isMozilla==true){
self.reflex(true);
}
self._isFlexAbort=false;
},0);
}
_ebb.consume();
break;
case StageDeckBinding.ACTION_LOADED:
this._isDecksReady=true;
if(this._isExplorerReady==true){
if(!this._isStageReady){
this._onStageReady();
}
}
break;
case ErrorBinding.ACTION_INITIALIZE:
_ebb.consume();
break;
}
StageBoxHandlerAbstraction.handleAction.call(this,_ebb);
};
StageBinding.prototype.handleBroadcast=function(_ebe,arg){
StageBinding.superclass.handleBroadcast.call(this,_ebe,arg);
switch(_ebe){
case BroadcastMessages.VIEW_OPENED:
Application.unlock(this);
break;
case BroadcastMessages.VIEW_CLOSED:
var _ec0=arg;
this._dontView(_ec0);
break;
case BroadcastMessages.COMPOSITE_START:
this._showStart(true);
break;
case BroadcastMessages.COMPOSITE_STOP:
this._showStart(false);
break;
case BroadcastMessages.DOCK_MAXIMIZED:
this._stabilizeExplorer();
if(this._isShowingStart){
EventBroadcaster.broadcast(BroadcastMessages.STOP_COMPOSITE);
}
break;
case BroadcastMessages.DOCK_NORMALIZED:
this._stabilizeExplorer();
break;
}
};
StageBinding.prototype._stabilizeExplorer=function(){
if(Client.isExplorer==true){
var self=this;
if(Client.isExplorer==true){
setTimeout(function(){
self.reflex(true);
},0);
}
}
};
StageBinding.prototype._showStart=function(_ec2){
if(_ec2!=this._isShowingStart){
var view=ViewBinding.getInstance("Composite.Management.Start");
var dock=this._dockBindings.get(DockBinding.START);
var _ec5=this.bindingWindow.bindingMap.maindecks;
if(_ec2){
_ec5.select("startdeck");
view.show();
}else{
view.hide();
_ec5.select("stagedeck");
if(dock!=null&&dock.isActive){
dock.deActivate();
}
}
this._isShowingStart=_ec2;
}
};
StageBinding.prototype._inflateBinding=function(_ec6){
for(var _ec7 in ViewDefinitions){
var _ec8=ViewDefinitions[_ec7];
if(_ec8 instanceof SystemViewDefinition){
_ec6.mountDefinition(_ec8);
}
}
var _ec9=(this._decksBinding!=null&&this._explorerBinding!=null);
if(_ec9){
var self=this;
setTimeout(function(){
self._renameThisMethod();
},0);
}
};
StageBinding.prototype.iterateContainedStageBoxBindings=function(mode){
var _ecc=new StageCrawler();
_ecc.mode=mode;
_ecc.crawl(this.bindingElement);
_ecc.dispose();
};
StageBinding.prototype.handlePerspectiveChange=function(_ecd){
var _ece=_ecd.getSelectionHandle();
this._decksBinding.setSelectionByHandle(_ece);
if(LocalStore.isEnabled){
LocalStore.setProperty(LocalStore.SELECTED_PERSPECTIVE_HANDLE,escape(_ece));
}
};
StageBinding.prototype.handleAttachedDock=function(_ecf){
var _ed0=_ecf.getTabBindings();
if(_ed0.hasEntries()){
while(_ed0.hasNext()){
var _ed1=_ed0.getNext();
var _ed2=_ed1.getHandle();
if(_ed2){
if(_ed2=="Composite.Management.Start"&&(!Application.hasStartPage||!Application.hasExternalConnection)){
}else{
var _ed3=ViewDefinitions[_ed2];
if(_ed3){
this._view(_ecf,_ed1,_ed3,false);
}else{
alert("StageBinding: no such predefined viewdefinition ("+_ed2+")");
}
}
}
}
}
};
StageBinding.prototype._presentViewDefinition=function(_ed4){
var _ed5=null;
var _ed6=false;
switch(_ed4.position){
case Dialog.MODAL:
_ed5=app.bindingMap.masterdialogset.getModalInstance();
break;
case Dialog.NON_MODAL:
_ed5=app.bindingMap.masterdialogset.getInstance();
break;
default:
if(this._dockBindings.hasEntries()){
switch(_ed4.position){
case DockBinding.ABSBOTTOMLEFT:
case DockBinding.ABSBOTTOMRIGHT:
case DockBinding.ABSRIGHTTOP:
case DockBinding.ABSRIGHTBOTTOM:
_ed5=this._dockBindings.get(_ed4.position);
break;
case DockBinding.EXTERNAL:
window.open(_ed4.url);
_ed6=true;
break;
default:
var _ed7=this._decksBinding.getSelectedDeckBinding();
_ed5=_ed7.getDockBindingByReference(_ed4.position);
if(this._isShowingStart){
EventBroadcaster.broadcast(BroadcastMessages.STOP_COMPOSITE);
}else{
if(this._isShowingDefaultStart){
var _ed8=this.bindingWindow.bindingMap.maindecks;
_ed8.select("stagedeck");
this._isShowingDefaultStart=false;
}
}
break;
}
}else{
_ed6=true;
}
break;
}
if(!_ed6){
if(_ed5!=null){
this._view(_ed5,null,_ed4,true);
}else{
throw "StageBinding: Could not position view: "+_ed4.handle;
}
}
};
StageBinding.prototype._view=function(_ed9,_eda,_edb,_edc){
var _edd=_edb.handle;
if(_edb.isMutable){
_edd+=KeyMaster.getUniqueKey();
}
if(this._activeViewDefinitions[_edd]){
var _ede=ViewBinding.getInstance(_edd);
if(_ede!=null){
_ede.update();
}else{
this.logger.error("Could not update ViewBinding (declared open): \n"+_edd);
}
}else{
this._activeViewDefinitions[_edd]=_edb;
Application.lock(this);
switch(_ed9.constructor){
case DockBinding:
if(_edc){
_ed9.prepareNewView(_edb);
}else{
_ed9.prepareOpenView(_edb,_eda);
}
break;
case StageDialogBinding:
if(_edc){
_ed9.prepareNewView(_edb);
}
break;
}
}
};
StageBinding.prototype._dontView=function(_edf){
if(this._activeViewDefinitions[_edf]!=null){
delete this._activeViewDefinitions[_edf];
}else{
this.logger.debug("Could not unregister active view: "+_edf);
}
};
StageBinding.prototype.handleSelectedDockTab=function(_ee0){
};
StageCrawler.prototype=new BindingCrawler;
StageCrawler.prototype.constructor=StageCrawler;
StageCrawler.superclass=BindingCrawler.prototype;
StageCrawler.ID="stagecrawler";
StageCrawler.MODE_MAXIMIZE="maximize";
StageCrawler.MODE_UNMAXIMIZE="minimize";
function StageCrawler(){
this.mode=StageCrawler.MODE_MAXIMIZE;
this.id=StageCrawler.ID;
this._construct();
return this;
}
StageCrawler.prototype._construct=function(){
StageCrawler.superclass._construct.call(this);
var self=this;
this.addFilter(function(_ee2){
var _ee3=UserInterface.getBinding(_ee2);
var _ee4=null;
if(_ee3){
switch(_ee3.constructor){
case StageSplitBoxBinding:
case StageSplitPanelBinding:
case StageSplitterBinding:
switch(self.mode){
case StageCrawler.MODE_MAXIMIZE:
_ee3.handleMaximization();
break;
case StageCrawler.MODE_UNMAXIMIZE:
_ee3.handleUnMaximization();
break;
}
break;
case DockBinding:
_ee4=NodeCrawler.SKIP_NODE;
break;
}
}
return _ee4;
});
};
StageDialogSetBinding.prototype=new DialogSetBinding;
StageDialogSetBinding.prototype.constructor=StageDialogSetBinding;
StageDialogSetBinding.superclass=DialogSetBinding.prototype;
function StageDialogSetBinding(){
this.logger=SystemLogger.getLogger("StageDialogSetBinding");
this._dialogs=new List();
}
StageDialogSetBinding.prototype.toString=function(){
return "[StageDialogSetBinding]";
};
StageDialogSetBinding.prototype.getInstance=function(){
var _ee5=null;
this._dialogs.each(function(_ee6){
if(!_ee6.isVisible){
_ee5=_ee6;
}
return _ee5!=null;
});
if(!_ee5){
this._newInstance();
_ee5=this._dialogs.getLast();
}
_ee5.setModal(false);
return _ee5;
};
StageDialogSetBinding.prototype.getModalInstance=function(){
var _ee7=this.getInstance();
_ee7.setModal(true);
return _ee7;
};
StageDialogSetBinding.prototype._newInstance=function(){
var _ee8=this.add(StageDialogBinding.newInstance(this.bindingDocument));
this._dialogs.add(_ee8);
_ee8.attach();
};
StageDialogBinding.prototype=new DialogBinding;
StageDialogBinding.prototype.constructor=StageDialogBinding;
StageDialogBinding.superclass=DialogBinding.prototype;
function StageDialogBinding(){
this.logger=SystemLogger.getLogger("StageDialogBinding");
this._viewBinding=null;
this._pageBinding=null;
this._dialogResponseHandler=null;
this._isFirstPage=true;
return this;
}
StageDialogBinding.prototype.toString=function(){
return "[StageDialogBinding]";
};
StageDialogBinding.prototype.onBindingRegister=function(){
StageDialogBinding.superclass.onBindingRegister.call(this);
this.addActionListener(PageBinding.ACTION_INITIALIZED);
this.addActionListener(PageBinding.ACTION_DETACHED);
this.addActionListener(DialogPageBinding.ACTION_RESPONSE);
this.addActionListener(Binding.ACTION_INVALID);
this.addActionListener(Binding.ACTION_VALID);
this.addActionListener(ViewBinding.ACTION_LOADED);
this.addActionListener(ViewBinding.ACTION_ONCLOSE);
this.addActionListener(ViewBinding.ACTION_CLOSED);
this.addActionListener(ErrorBinding.ACTION_INITIALIZE);
this.addActionListener(PageBinding.ACTION_UPDATING);
this.addActionListener(PageBinding.ACTION_UPDATED);
this.addActionListener(DialogBinding.ACTION_CLOSE);
this.subscribe(BroadcastMessages.KEY_ESCAPE);
};
StageDialogBinding.prototype.onBindingAttach=function(){
StageDialogBinding.superclass.onBindingAttach.call(this);
this.defaultSetup();
};
StageDialogBinding.prototype.prepareNewView=function(_ee9){
if(_ee9 instanceof DialogViewDefinition){
var _eea=ViewBinding.newInstance(this.bindingDocument);
_eea.setDefinition(_ee9);
_eea.setType(ViewBinding.TYPE_DIALOGVIEW);
if(_ee9.handler){
if(Interfaces.isImplemented(IDialogResponseHandler,_ee9.handler)){
this._dialogResponseHandler=_ee9.handler;
}else{
throw "IDialogResponseHandler not implemented";
}
}
this._viewBinding=_eea;
this._body.add(_eea);
_eea.attach();
_eea.initialize();
}
};
StageDialogBinding.prototype.handleAction=function(_eeb){
StageDialogBinding.superclass.handleAction.call(this,_eeb);
var _eec=_eeb.target;
switch(_eeb.type){
case PageBinding.ACTION_INITIALIZED:
this._handleInitializedPageBinding(_eec);
_eeb.consume();
break;
case PageBinding.ACTION_DETACHED:
if(_eec.bindingDocument==this._viewBinding.getContentDocument()){
this._pageBinding=null;
}
_eeb.consume();
break;
case DialogPageBinding.ACTION_RESPONSE:
if(_eec.response){
this._handleDialogPageResponse(_eec);
}
_eeb.consume();
break;
case Binding.ACTION_INVALID:
this._disableDialogAcceptButton(true);
_eeb.consume();
break;
case Binding.ACTION_VALID:
this._disableDialogAcceptButton(false);
_eeb.consume();
break;
case ViewBinding.ACTION_ONCLOSE:
this.close();
_eec.dispose();
_eeb.consume();
break;
case ViewBinding.ACTION_CLOSED:
this._isFirstPage=true;
_eeb.consume();
break;
case ErrorBinding.ACTION_INITIALIZE:
_eeb.consume();
break;
case PageBinding.ACTION_UPDATING:
this._isUpdating=true;
_eeb.consume();
break;
case PageBinding.ACTION_UPDATED:
if(this._isUpdating){
this._isUpdating=false;
this._fit();
}
_eeb.consume();
break;
case Binding.ACTION_UPDATED:
if(!this._isUpdating){
this._fit();
}
_eeb.consume();
break;
case DialogBinding.ACTION_CLOSE:
if(_eec==this){
this._viewBinding.dispose();
this.defaultSetup();
}
break;
}
};
StageDialogBinding.prototype.handleBroadcast=function(_eed,arg){
StageDialogBinding.superclass.handleBroadcast.call(this,_eed,arg);
switch(_eed){
case BroadcastMessages.KEY_ESCAPE:
if(this.isVisible==true){
if(!PopupBinding.hasActiveInstances()){
this._defaultClose();
}
}
break;
}
};
StageDialogBinding.prototype._fit=function(_eef){
var _ef0=new FitnessCrawler();
var list=new List();
if(_eef){
_ef0.mode=FitnessCrawler.MODE_BRUTAL;
}
_ef0.crawl(this.bindingElement,list);
_ef0.dispose();
if(list.hasEntries()){
list.reverse();
list.each(function(_ef2){
_ef2.fit(_eef);
});
list.dispose();
this._fitMe();
}
};
StageDialogBinding.prototype._fitMe=function(){
if(this._pageBinding!=null){
this._pageBinding.enableAutoHeightLayoutMode(true);
this._fixAutoHeight(this._pageBinding);
this._pageBinding.enableAutoHeightLayoutMode(false);
var _ef3=this.getDimension().h;
this.reflex(true);
var self=this;
if(this.getDimension().h==_ef3){
var self=this;
setTimeout(function(){
self.reflex(true);
},0);
}
}
};
StageDialogBinding.prototype._handleContextMenuItemBinding=function(_ef5){
var cmd=_ef5.getProperty("cmd");
switch(cmd){
case DialogTitleBarPopupBinding.CMD_CLOSE:
this._defaultClose();
break;
case DialogTitleBarPopupBinding.CMD_REFRESH:
this._titlebar.setLabel(DockTabBinding.LABEL_TABLOADING);
this._titlebar.setImage(DockTabBinding.IMG_TABLOADING);
this._pageBinding=null;
this._viewBinding.reload(Application.isDeveloperMode);
break;
case DialogTitleBarPopupBinding.CMD_VIEWSOURCE:
case DialogTitleBarPopupBinding.CMD_VIEWGENERATED:
case DialogTitleBarPopupBinding.CMD_VIEWSERIALIZED:
this._viewSource(cmd);
break;
default:
alert("TODO!");
break;
}
};
StageDialogBinding.prototype._viewSource=DockTabBinding.prototype._viewSource;
StageDialogBinding.prototype._handleInitializedPageBinding=function(_ef7){
if(_ef7.bindingDocument==this._viewBinding.getContentDocument()){
if(_ef7 instanceof DialogPageBinding){
if(this._pageBinding==null){
this._parsePageBinding(_ef7);
}
this._pageBinding=_ef7;
if(_ef7.height=="auto"){
_ef7.enableAutoHeightLayoutMode(true);
this._fixAutoHeight(_ef7);
_ef7.enableAutoHeightLayoutMode(false);
this.reflex(true);
}
}
if(StatusBar.state==StatusBar.BUSY){
StatusBar.clear();
}
if(this._isFirstPage){
EventBroadcaster.broadcast(BroadcastMessages.VIEW_COMPLETED,this._viewBinding.getHandle());
EventBroadcaster.broadcast(BroadcastMessages.STAGEDIALOG_OPENED);
}
}else{
if(_ef7.isDialogSubPage){
this._pageBinding.enableAutoHeightLayoutMode(true);
this._fixAutoHeight(_ef7);
this._pageBinding.enableAutoHeightLayoutMode(false);
this._fit(true);
this.reflex(true);
}
}
this._isFirstPage=false;
};
StageDialogBinding.prototype._disableDialogAcceptButton=function(_ef8){
var _ef9=this._viewBinding.getContentDocument().getElementById("dialogacceptbutton");
if(_ef9){
var _efa=UserInterface.getBinding(_ef9);
_efa.setDisabled(_ef8);
}
};
StageDialogBinding.prototype._handleDialogPageResponse=function(_efb){
if(this._dialogResponseHandler!=null){
this._dialogResponseHandler.handleDialogResponse(_efb.response,_efb.result!=null?_efb.result:null);
}
var self=this;
setTimeout(function(){
self.close();
},0);
};
StageDialogBinding.prototype.handleInvokedControl=function(_efd){
if(_efd.controlType==ControlBinding.TYPE_CLOSE){
this._defaultClose();
}
StageDialogBinding.superclass.handleInvokedControl.call(this,_efd);
};
StageDialogBinding.prototype.buildDescendantBindings=function(){
StageDialogBinding.superclass.buildDescendantBindings.call(this);
this._titlebar.setContextMenu(app.bindingMap.dialogtitlebarpopup);
var self=this;
this._titlebar.handleAction=function(_eff){
switch(_eff.type){
case MenuItemBinding.ACTION_COMMAND:
if(_eff.listener==this.contextMenuBinding){
self._handleContextMenuItemBinding(_eff.target);
}
break;
}
};
};
StageDialogBinding.prototype._parsePageBinding=function(_f00){
var _f01=_f00.label;
var _f02=_f00.image;
var _f03=_f00.width;
var _f04=_f00.height;
var _f05=_f00.controls;
var _f06=_f00.isResizable;
if(_f01){
this.setLabel(_f01);
}
if(_f02){
this.setImage(_f02);
}
if(_f03||_f04){
var old=this.getDimension();
var nev=new Dimension();
if(this._isFirstPage){
nev.w=_f03?_f03:old.w;
}else{
nev.w=old.w;
}
nev.h=(_f04!=null&&_f04!="auto")?_f04:old.h;
this.setDimension(nev);
}
if(_f05){
this.controlBindings[ControlBinding.TYPE_MAXIMIZE].hide();
this.controlBindings[ControlBinding.TYPE_MINIMIZE].hide();
this.controlBindings[ControlBinding.TYPE_CLOSE].hide();
var type,_f0a=new List(_f05.split(" "));
while((type=_f0a.getNext())!=null){
this.controlBindings[type].show();
}
}
if(_f06!=this._isResizable){
this.setResizable(_f06);
}
if(_f04=="auto"){
this._fixAutoHeight(_f00);
}
if(_f00==this._pageBinding){
this.centerOnScreen();
}
if(!this.isOpen){
this.reflex(true);
this.open(true);
}
};
StageDialogBinding.prototype._fixAutoHeight=function(_f0b){
var dim=this.getDimension();
var _f0d=0;
var _f0e=0;
if(_f0b.isDialogSubPage){
_f0b=this._pageBinding;
}
if(this._isFirstPage){
_f0d=_f0b.width!=null?_f0b.width:dim.w;
}else{
_f0d=dim.w;
}
_f0e=_f0b.bindingElement.offsetHeight;
_f0e+=this._titlebar.bindingElement.offsetHeight;
_f0e+=4;
if(_f0e<dim.h){
_f0e=dim.h;
}
if(_f0b.minheight!=null){
if(_f0e<_f0b.minheight){
_f0e=_f0b.minheight;
}
}
this.setDimension(new Dimension(_f0d,_f0e));
};
StageDialogBinding.prototype._defaultClose=function(){
if(this._dialogResponseHandler!=null){
this._dialogResponseHandler.handleDialogResponse(Dialog.RESPONSE_CANCEL);
}
this.close();
};
StageDialogBinding.prototype.open=function(){
StageDialogBinding.superclass.open.call(this);
if(this.isVisible==true){
this._viewBinding.onActivate();
}
};
StageDialogBinding.prototype.defaultSetup=function(){
this.setImage(LabelBinding.DEFAULT_IMAGE);
this.setLabel("");
this.setDimension(new Dimension(DialogBinding.DEFAULT_WIDTH,DialogBinding.DEFAULT_HEIGHT));
this.controlBindings[ControlBinding.TYPE_MAXIMIZE].hide();
this.controlBindings[ControlBinding.TYPE_MINIMIZE].hide();
this.controlBindings[ControlBinding.TYPE_CLOSE].show();
this._pageBinding=null;
this._dialogResponseHandler=null;
if(!this._isResizable){
this.setResizable(true);
}
};
StageDialogBinding.prototype.setPosition=function(p){
StageDialogBinding.superclass.setPosition.call(this,p);
this._body.dispatchAction(Binding.ACTION_POSITIONCHANGED);
};
StageDialogBinding.prototype.setDimension=function(dim){
StageDialogBinding.superclass.setDimension.call(this,dim);
this._body.dispatchAction(Binding.ACTION_DIMENSIONCHANGED);
};
StageDialogBinding.prototype.activate=function(){
if(!this.isActive){
StageDialogBinding.superclass.activate.call(this);
this._viewBinding.onActivate();
}
};
StageDialogBinding.prototype.deActivate=function(){
if(this.isActive==true){
StageDialogBinding.superclass.deActivate.call(this);
this._viewBinding.onDeactivate();
}
};
StageDialogBinding.newInstance=function(_f11){
var _f12=DOMUtil.createElementNS(Constants.NS_UI,"ui:dialog",_f11);
var _f13=UserInterface.registerBinding(_f12,StageDialogBinding);
_f13.setProperty("controls","minimize maximize close");
return _f13;
};
FitnessCrawler.prototype=new Crawler;
FitnessCrawler.prototype.constructor=FitnessCrawler;
FitnessCrawler.superclass=Crawler.prototype;
FitnessCrawler.ID="fitnesscrawler";
FitnessCrawler.MODE_BRUTAL="brutal fitness";
FitnessCrawler.MODE_TRAINING="train fitness";
function FitnessCrawler(){
this.id=FitnessCrawler.ID;
this.mode=FitnessCrawler.MODE_TRAINING;
this._construct();
return this;
}
FitnessCrawler.prototype._construct=function(){
FitnessCrawler.superclass._construct.call(this);
this.addFilter(function(_f14,list){
var _f16=null;
var _f17=UserInterface.getBinding(_f14);
if(!_f17.isVisible){
_f16=NodeCrawler.SKIP_NODE+NodeCrawler.SKIP_CHILDREN;
}
return _f16;
});
this.addFilter(function(_f18,list){
var _f1a=null;
var _f1b=UserInterface.getBinding(_f18);
if(_f1b.isAttached){
if(Interfaces.isImplemented(IFit,_f1b)){
if(!_f1b.isFit||this.mode==FitnessCrawler.MODE_BRUTAL){
list.add(_f1b);
}
}
}
return null;
});
};
StageDecksBinding.prototype=new DecksBinding;
StageDecksBinding.prototype.constructor=StageDecksBinding;
StageDecksBinding.superclass=DecksBinding.prototype;
StageDecksBinding.NODENAME_DECK="stagedeck";
StageDecksBinding.ACTION_INITIALIZED="stagedecks initialized";
function StageDecksBinding(){
this.logger=SystemLogger.getLogger("StageDecksBinding");
this._decks={};
}
StageDecksBinding.prototype.toString=function(){
return "[StageDecksBinding]";
};
StageDecksBinding.prototype.onBindingInitialize=function(){
StageDecksBinding.superclass.onBindingInitialize.call(this);
this.dispatchAction(StageDecksBinding.ACTION_INITIALIZED);
};
StageDecksBinding.prototype.mountDefinition=function(_f1c){
var _f1d=StageDeckBinding.newInstance(this.bindingDocument);
_f1d.handle=_f1c.handle;
_f1d.perspectiveNode=_f1c.node;
this._decks[_f1d.handle]=_f1d;
this.add(_f1d);
_f1d.attach();
};
StageDecksBinding.prototype.setSelectionByHandle=function(_f1e){
var _f1f=this._decks[_f1e];
StageBinding.perspectiveNode=_f1f.perspectiveNode;
this.select(_f1f);
};
StageDeckBinding.prototype=new DeckBinding;
StageDeckBinding.prototype.constructor=StageDeckBinding;
StageDeckBinding.superclass=DeckBinding.prototype;
StageDeckBinding.ACTION_LOADED="stagedeck loaded";
StageDeckBinding.NODENAME_DECKS="stagedecks";
StageDeckBinding.DEFAULT_URL="${root}/content/misc/stage/stagedeck.aspx";
StageDeckBinding.CLASSNAME_TOOLS_OPEN="toolsopen";
function StageDeckBinding(){
this.logger=SystemLogger.getLogger("StageDeckBinding");
this.handle=null;
this.perspectiveNode=null;
this.isReady=false;
this._isStageDeckBindingInitialized=false;
this._dockBindings=null;
this._dockBindingCount=0;
this.windowBinding=null;
this.isSubPanelMaximized=false;
}
StageDeckBinding.prototype.toString=function(){
return "[StageDeckBinding]";
};
StageDeckBinding.prototype.onBindingRegister=function(){
StageDeckBinding.superclass.onBindingRegister.call(this);
StageBoxHandlerAbstraction.onBindingRegister.call(this);
this._dockBindings=new Map();
this.addActionListener(WindowBinding.ACTION_LOADED);
this.addActionListener(TabBoxBinding.ACTION_ATTACHED);
};
StageDeckBinding.prototype.handleAction=function(_f20){
StageDeckBinding.superclass.handleAction.call(this,_f20);
var _f21=_f20.target;
switch(_f20.type){
case WindowBinding.ACTION_LOADED:
if(_f21==this.windowBinding){
top.app.bindingMap.stagedeckscover.hide();
this.removeActionListener(WindowBinding.ACTION_LOADED);
this.addActionListener(StageSplitBoxBinding.ACTION_DOCK_EMPTIED);
this.addActionListener(StageSplitBoxBinding.ACTION_DOCK_OPENED);
this.dispatchAction(StageDeckBinding.ACTION_LOADED);
_f20.consume();
}
break;
case TabBoxBinding.ACTION_ATTACHED:
if(_f21 instanceof DockBinding){
this._dockBindings.set(_f21.reference,_f21);
_f21.perspectiveNode=this.perspectiveNode;
}
break;
case StageSplitBoxBinding.ACTION_DOCK_OPENED:
this._dockBindingCount++;
if(this._dockBindingCount==2){
this._dockBindings.get("main").showControls(true);
}
_f20.consume();
break;
case StageSplitBoxBinding.ACTION_DOCK_EMPTIED:
this._dockBindingCount--;
if(this._dockBindingCount==1){
this._dockBindings.get("main").showControls(false);
}
_f20.consume();
break;
}
StageBoxHandlerAbstraction.handleAction.call(this,_f20);
StageDeckBinding.superclass.handleAction.call(this,_f20);
};
StageDeckBinding.prototype.iterateContainedStageBoxBindings=function(mode){
var _f23=new StageCrawler();
_f23.mode=mode;
_f23.crawl(this.windowBinding.getContentDocument().body);
_f23.dispose();
};
StageDeckBinding.prototype.select=function(){
if(!this._isStageDeckBindingInitialized){
this.initialize();
}
StageDeckBinding.superclass.select.call(this);
};
StageDeckBinding.prototype.getDockBindingByReference=function(_f24){
return this._dockBindings.get(_f24);
};
StageDeckBinding.prototype.initialize=function(){
if(!this._isStageDeckBindingInitialized){
top.app.bindingMap.stagedeckscover.show();
this.windowBinding=this.add(WindowBinding.newInstance(this.bindingDocument));
var url=StageDeckBinding.DEFAULT_URL+"?handle="+this.handle;
this.windowBinding.setURL(url);
this.windowBinding.attach();
this._isStageDeckBindingInitialized=true;
}
};
StageDeckBinding.newInstance=function(_f26){
var _f27=DOMUtil.createElementNS(Constants.NS_UI,"ui:stagedeck",_f26);
var _f28=UserInterface.registerBinding(_f27,StageDeckBinding);
return _f28;
};
StageDeckRootBinding.prototype=new RootBinding;
StageDeckRootBinding.prototype.constructor=StageDeckRootBinding;
StageDeckRootBinding.superclass=RootBinding.prototype;
StageDeckRootBinding.DEFAULT_TEMPLATE="defaultstagedeck.xml";
function StageDeckRootBinding(){
this.logger=SystemLogger.getLogger("StageDeckRootBinding");
}
StageDeckRootBinding.prototype.toString=function(){
return "[StageDeckRootBinding]";
};
StageSplitBoxBinding.prototype=new SplitBoxBinding;
StageSplitBoxBinding.prototype.constructor=StageSplitBoxBinding;
StageSplitBoxBinding.superclass=SplitBoxBinding.prototype;
StageSplitBoxBinding.ACTION_HIDE="stagesplitboxbinding hide";
StageSplitBoxBinding.ACTION_SHOW="stagesplitboxbinding show";
StageSplitBoxBinding.ACTION_DOCK_EMPTIED="stagesplitbox says dock emptied";
StageSplitBoxBinding.ACTION_DOCK_OPENED="stagesplitbox says dock opened";
function StageSplitBoxBinding(){
this.logger=SystemLogger.getLogger("StageSplitBoxBinding");
this.isMaximizePrepared=false;
this.isMaximizedForReal=null;
this.isMinimizedForReal=null;
return this;
}
StageSplitBoxBinding.prototype.toString=function(){
return "[StageSplitBoxBinding]";
};
StageSplitBoxBinding.prototype.onBindingRegister=function(){
StageSplitBoxBinding.superclass.onBindingRegister.call(this);
StageBoxAbstraction.onBindingRegister.call(this);
this.addActionListener(DockBinding.ACTION_EMPTIED,this);
this.addActionListener(DockBinding.ACTION_OPENED,this);
this.addActionListener(StageSplitBoxBinding.ACTION_SHOW,this);
this.addActionListener(StageSplitBoxBinding.ACTION_HIDE,this);
};
StageSplitBoxBinding.prototype.handleAction=function(_f29){
StageSplitBoxBinding.superclass.handleAction.call(this,_f29);
StageBoxAbstraction.handleAction.call(this,_f29);
var _f2a=_f29.target;
var _f2b=null;
var _f2c=null;
switch(_f29.type){
case DockBinding.ACTION_EMPTIED:
_f2c=this.getChildBindingByLocalName("splitter");
if(_f2c.isVisible){
_f2c.hide();
}
_f2b=this.getDescendantBindingsByLocalName("dock");
if(_f2b.getFirst().isEmpty&&_f2b.getLast().isEmpty){
if(_f2b.getFirst().type!=DockBinding.TYPE_EDITORS){
this.dispatchAction(StageSplitBoxBinding.ACTION_HIDE);
this.hide();
}
}else{
this.flex();
this.invokeLayout();
}
this.dispatchAction(StageSplitBoxBinding.ACTION_DOCK_EMPTIED);
_f29.consume();
break;
case DockBinding.ACTION_OPENED:
_f2b=this.getDescendantBindingsByLocalName("dock");
if(!_f2b.getFirst().isEmpty&&!_f2b.getLast().isEmpty){
_f2c=this.getChildBindingByLocalName("splitter");
if(!_f2c.isVisible){
_f2c.show();
}
}
if(!this.isVisible){
this.show();
this.dispatchAction(StageSplitBoxBinding.ACTION_SHOW);
}
this.flex();
this.invokeLayout();
this.dispatchAction(StageSplitBoxBinding.ACTION_DOCK_OPENED);
_f29.consume();
break;
case StageSplitBoxBinding.ACTION_HIDE:
if(_f2a!=this){
_f2c=this.getChildBindingByLocalName("splitter");
if(_f2c.isVisible){
_f2c.hide();
}
this.invokeLayout();
_f29.consume();
}
break;
case StageSplitBoxBinding.ACTION_SHOW:
if(_f2a!=this){
var _f2d=this.getChildBindingsByLocalName("splitpanel");
if(_f2d.getFirst().isVisible&&_f2d.getLast().isVisible){
_f2c=this.getChildBindingByLocalName("splitter");
if(!_f2c.isVisible){
_f2c.show();
}
}
this.invokeLayout();
_f29.consume();
}
break;
}
};
StageSplitBoxBinding.prototype.handleMaximization=function(){
StageBoxAbstraction.handleMaximization.call(this);
};
StageSplitBoxBinding.prototype.handleUnMaximization=function(){
StageBoxAbstraction.handleUnMaximization.call(this);
};
StageSplitBoxBinding.prototype.flex=function(){
if(this.isMaximizedForReal==null){
StageSplitBoxBinding.superclass.flex.call(this);
}
};
StageSplitBoxBinding.prototype.handleCrawler=function(_f2e){
StageSplitBoxBinding.superclass.handleCrawler.call(this,_f2e);
switch(_f2e.id){
case FlexBoxCrawler.ID:
if(this.isMaximizedForReal==false){
_f2e.response=NodeCrawler.SKIP_CHILDREN;
}
break;
}
};
StageSplitBoxBinding.prototype.hasBothPanelsVisible=function(){
var _f2f=this.getChildBindingsByLocalName("splitpanel");
return _f2f.getFirst().isVisible&&_f2f.getLast().isVisible;
};
StageSplitBoxBinding.prototype.hasBothPanelsFixed=function(){
var _f30=this.getChildBindingsByLocalName("splitpanel");
return _f30.getFirst().isFixed&&_f30.getLast().isFixed;
};
StageSplitPanelBinding.prototype=new SplitPanelBinding;
StageSplitPanelBinding.prototype.constructor=StageSplitPanelBinding;
StageSplitPanelBinding.superclass=SplitPanelBinding.prototype;
StageSplitPanelBinding.ACTION_LAYOUTUPDATE="stagesplitpanel layout changed";
function StageSplitPanelBinding(){
this.logger=SystemLogger.getLogger("StageSplitPanelBinding");
this.isMaximizePrepared=false;
this.isMaximizedForReal=null;
this.isMinimizedForReal=null;
this._isInvisibilized=false;
this.isActive=true;
this.isFixed=false;
}
StageSplitPanelBinding.prototype.toString=function(){
return "[StageSplitPanelBinding]";
};
StageSplitPanelBinding.prototype.onBindingRegister=function(){
StageSplitPanelBinding.superclass.onBindingRegister.call(this);
StageBoxAbstraction.onBindingRegister.call(this);
this.addActionListener(DockBinding.ACTION_OPENED,this);
this.addActionListener(DockBinding.ACTION_EMPTIED,this);
this.addActionListener(StageSplitBoxBinding.ACTION_HIDE,this);
this.addActionListener(StageSplitBoxBinding.ACTION_SHOW,this);
this.addActionListener(StageSplitPanelBinding.ACTION_LAYOUTUPDATE,this);
};
StageSplitPanelBinding.prototype.handleAction=function(_f31){
StageSplitPanelBinding.superclass.handleAction.call(this,_f31);
StageBoxAbstraction.handleAction.call(this,_f31);
switch(_f31.type){
case DockBinding.ACTION_EMPTIED:
case StageSplitBoxBinding.ACTION_HIDE:
if(this.isMaximized==true){
this.normalize();
}
var dock=this.getContainedDock();
if(dock&&dock.type==DockBinding.TYPE_EDITORS){
this._invisibilize(true);
if(_f31.type==StageSplitBoxBinding.ACTION_HIDE){
_f31.consume();
}
}else{
this.hide();
if(this.isFixed==true){
this.setFix(false);
}
}
if(_f31.type==DockBinding.ACTION_EMPTIED){
var self=this;
setTimeout(function(){
self.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
},0);
}
break;
case DockBinding.ACTION_OPENED:
case StageSplitBoxBinding.ACTION_SHOW:
var dock=this.getContainedDock();
if(dock&&dock.type==DockBinding.TYPE_EDITORS){
this._invisibilize(false);
if(_f31.type==StageSplitBoxBinding.ACTION_SHOW){
_f31.consume();
}
}else{
this.show();
if(this.isFixed==true){
this.setFix(false);
}
}
break;
case StageSplitPanelBinding.ACTION_LAYOUTUPDATE:
var _f34=_f31.target;
if(_f34!=this&&_f34.getContainedDock()){
if(this._containingSplitBoxBinding.getOrient()==SplitBoxBinding.ORIENT_VERTICAL){
var _f35=_f34._containingSplitBoxBinding;
if(_f35.getOrient()==SplitBoxBinding.ORIENT_HORIZONTAL){
var _f36=_f35.getChildBindingsByLocalName("splitpanel");
var _f37=_f36.getFirst();
var _f38=_f36.getLast();
if(this.isFixed==true){
if(!_f37.isFixed||!_f38.isFixed||(!_f35.hasBothPanelsVisible()&&_f34.isMinimizedForReal)){
this.setFix(false);
_f31.consume();
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
}
}else{
if(_f35.hasBothPanelsFixed()||(!_f35.hasBothPanelsVisible()&&_f34.isMinimizedForReal)){
this.setFix(_f34.getContainedDock().getHeight());
_f31.consume();
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
}
}
}
}else{
}
}
break;
}
};
StageSplitPanelBinding.prototype.handleMaximization=function(){
StageBoxAbstraction.handleMaximization.call(this);
var _f39=this.getContainedDock();
if(_f39){
if(this.isMaximizePrepared==true){
}else{
_f39.interceptDisplayChange(false);
}
}
};
StageSplitPanelBinding.prototype.handleUnMaximization=function(){
StageBoxAbstraction.handleUnMaximization.call(this);
var _f3a=this.getContainedDock();
if(_f3a){
if(_f3a.type==DockBinding.TYPE_EDITORS){
if(_f3a.isEmpty){
this._invisibilize(true);
}
}
if(this.isMaximized==true){
this.normalize();
}else{
_f3a.interceptDisplayChange(true);
}
}
};
StageSplitPanelBinding.prototype.maximize=function(){
if(this.isMinimized==true){
this.normalize(true);
}
StageSplitPanelBinding.superclass.maximize.call(this);
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
var _f3b=this.getContainedDock();
if(_f3b){
_f3b.activate();
EventBroadcaster.broadcast(BroadcastMessages.DOCK_MAXIMIZED,_f3b);
}
};
StageSplitPanelBinding.prototype.minimize=function(){
var _f3c=this._containingSplitBoxBinding.getOrient()==SplitBoxBinding.ORIENT_HORIZONTAL;
var _f3d=this.getContainedDock();
if(_f3d){
_f3d.collapse(_f3c);
if(!_f3c){
this.setFix(_f3d.getHeight());
}else{
this.setFix(_f3d.getWidth());
}
}
if(this.isMaximized==true){
this.normalize(true);
}
StageSplitPanelBinding.superclass.minimize.call(this);
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
if(_f3d&&_f3d.isActive){
_f3d.deActivate();
EventBroadcaster.broadcast(BroadcastMessages.DOCK_MINIMIZED,_f3d);
}
};
StageSplitPanelBinding.prototype.normalize=function(_f3e){
var _f3f=this._containingSplitBoxBinding.getOrient()==SplitBoxBinding.ORIENT_HORIZONTAL;
var _f40=this.getContainedDock();
if(_f40){
if(this.isMinimized==true){
_f40.unCollapse(_f3f);
this.setFix(false);
}
}
StageSplitPanelBinding.superclass.normalize.call(this);
if(!_f3e){
this.dispatchAction(StageSplitPanelBinding.ACTION_LAYOUTUPDATE);
if(_f40){
_f40.activate();
EventBroadcaster.broadcast(BroadcastMessages.DOCK_NORMALIZED,_f40);
}
}
};
StageSplitPanelBinding.prototype.getContainedDock=function(){
return this.getChildBindingByLocalName("dock");
};
StageSplitPanelBinding.prototype.invisibilize=function(_f41){
var _f42=true;
var dock=this.getContainedDock();
if(dock!=null&&dock.type==DockBinding.TYPE_EDITORS){
if(dock.isEmpty==true){
_f42=false;
}
}
if(_f42==true){
this._invisibilize(_f41);
}
};
StageSplitPanelBinding.prototype._invisibilize=function(_f44){
if(_f44!=this._isInvisibilized){
if(_f44){
this.bindingElement.style.visibility="hidden";
}else{
this.bindingElement.style.visibility="visible";
}
this._isInvisibilized=!this._isInvisibilized;
}
};
StageSplitterBinding.prototype=new SplitterBinding;
StageSplitterBinding.prototype.constructor=StageSplitterBinding;
StageSplitterBinding.superclass=SplitterBinding.prototype;
function StageSplitterBinding(){
this.logger=SystemLogger.getLogger("StageSplitterBinding");
this._wasHidden=null;
}
StageSplitterBinding.prototype.toString=function(){
return "[StageSplitterBinding]";
};
StageSplitterBinding.prototype.handleMaximization=function(){
this._wasHidden=!this.isVisible;
this.bindingElement.style.display="none";
};
StageSplitterBinding.prototype.handleUnMaximization=function(){
if(!this._wasHidden){
this.bindingElement.style.display="block";
this._wasHidden=null;
}
};
StageSplitterBinding.prototype.onDragStart=function(_f45){
var _f46=top.app.bindingMap.stagesplittercover;
var _f47=this._containingSplitBoxBinding.getOrient();
switch(_f47){
case SplitBoxBinding.ORIENT_HORIZONTAL:
_f46.bindingElement.style.cursor="e-resize";
break;
case SplitBoxBinding.ORIENT_VERTICAL:
_f46.bindingElement.style.cursor="n-resize";
break;
}
_f46.show();
var body=top.app.bindingMap.stagesplitterbody;
body.setPosition(this.getPosition());
body.setDimension(this.getDimension());
body.setOrient(_f47);
body.show();
this.isDragging=true;
};
StageSplitterBinding.prototype.onDrag=function(diff){
this._updateSplitterBodyPosition(this.getEvaluatedDiff(diff));
};
StageSplitterBinding.prototype.onDragStop=function(diff){
this._updateSplitterBodyPosition(this.getEvaluatedDiff(diff));
top.app.bindingMap.stagesplitterbody.hide();
top.app.bindingMap.stagesplittercover.hide();
this.isDragging=false;
this.offset=this._containingSplitBoxBinding.isHorizontalOrient()?diff.x:diff.y;
this.dispatchAction(SplitterBinding.ACTION_DRAGGED);
};
StageSplitterBinding.prototype._updateSplitterBodyPosition=function(diff){
var pos=this.getPosition();
pos.x+=diff.x;
pos.y+=diff.y;
app.bindingMap.stagesplitterbody.setPosition(pos);
};
StageSplitterBinding.prototype.getPosition=function(){
return DOMUtil.getUniversalPosition(this.bindingElement);
};
StageSplitterBinding.prototype.getDimension=function(){
return new Dimension(this.bindingElement.offsetWidth,this.bindingElement.offsetHeight);
};
StageSplitterBodyBinding.prototype=new Binding;
StageSplitterBodyBinding.prototype.constructor=StageSplitterBodyBinding;
StageSplitterBodyBinding.superclass=Binding.prototype;
function StageSplitterBodyBinding(){
this.logger=SystemLogger.getLogger("StageSplitterBodyBinding");
this._orient=null;
}
StageSplitterBodyBinding.prototype.toString=function(){
return "[StageSplitterBodyBinding]";
};
StageSplitterBodyBinding.prototype.setOrient=function(_f4d){
this._orient=_f4d;
this.attachClassName(_f4d);
};
StageSplitterBodyBinding.prototype.setPosition=function(pos){
var _f4f=true;
var _f50=true;
switch(this._orient){
case SplitBoxBinding.ORIENT_HORIZONTAL:
_f50=false;
break;
case SplitBoxBinding.ORIENT_VERTICAL:
_f4f=false;
break;
}
if(_f4f){
this.bindingElement.style.left=pos.x+"px";
}
if(_f50){
this.bindingElement.style.top=pos.y+"px";
}
};
StageSplitterBodyBinding.prototype.setDimension=function(dim){
this.bindingElement.style.width=dim.w+"px";
this.bindingElement.style.height=dim.h+"px";
};
StageSplitterBodyBinding.prototype.show=function(){
this.bindingElement.style.display="block";
};
StageSplitterBodyBinding.prototype.hide=function(){
this.bindingElement.style.display="none";
this.detachClassName(SplitBoxBinding.ORIENT_HORIZONTAL);
this.detachClassName(SplitBoxBinding.ORIENT_VERTICAL);
this._orient=null;
};
StageBoxAbstraction.ACTION_HIDDENSTUFF_UPDATED="hidden stagebox stuff updated";
function StageBoxAbstraction(){
this.isMaximizePrepared=false;
this.isMaximizedForReal=null;
this.isMinimizedForReal=null;
this.isHiddenForReal=null;
}
StageBoxAbstraction.onBindingRegister=function(){
this.addActionListener(ControlBoxBinding.ACTION_MAXIMIZE);
this.addActionListener(ControlBoxBinding.ACTION_MINIMIZE);
this.addActionListener(ControlBoxBinding.ACTION_NORMALIZE);
this.addActionListener(TabBoxBinding.ACTION_UPDATED);
};
StageBoxAbstraction.handleAction=function(_f52){
switch(_f52.type){
case ControlBoxBinding.ACTION_MAXIMIZE:
this.isMaximizePrepared=true;
break;
case ControlBoxBinding.ACTION_MINIMIZE:
this.isMinimizedForReal=true;
break;
case ControlBoxBinding.ACTION_NORMALIZE:
this.isMaximizePrepared=false;
this.isMinimizedForReal=null;
break;
case TabBoxBinding.ACTION_UPDATED:
if(_f52.target instanceof DockBinding){
if(this.isHiddenForReal){
this.dispatchAction(StageBoxAbstraction.ACTION_HIDDENSTUFF_UPDATED);
}else{
if(this.isMinimizedForReal){
this.normalize();
}
}
}
_f52.consume();
break;
}
};
StageBoxAbstraction.handleMaximization=function(){
if(this.isMaximizePrepared==true){
this.isMaximizedForReal=true;
this.isHiddenForReal=false;
this.isFlexible=false;
if(Client.isMozilla==true){
var _f53=this.bindingElement.style;
_f53.position="absolute";
_f53.width="100%";
_f53.height="100%";
_f53.top="0";
_f53.left="0";
}else{
this.attachClassName("maximized");
if(this instanceof StageSplitPanelBinding){
StageBoxAbstraction._emulateBasicCSS(this,true);
}
}
}else{
this.isMaximizedForReal=false;
this.isHiddenForReal=true;
if(this instanceof StageSplitPanelBinding){
this.invisibilize(true);
}
}
};
StageBoxAbstraction.handleUnMaximization=function(){
if(this.isMaximizedForReal==true){
this.isFlexible=true;
if(Client.isMozilla==true){
var _f54=this.bindingElement.style;
_f54.position="relative";
_f54.width="auto";
_f54.height="auto";
_f54.top="auto";
_f54.left="auto";
}else{
this.detachClassName("maximized");
if(this instanceof StageSplitPanelBinding){
StageBoxAbstraction._emulateBasicCSS(this,false);
}
}
}else{
if(this instanceof StageSplitPanelBinding){
this.invisibilize(false);
}
}
this.isMaximizePrepared=false;
this.isMaximizedForReal=null;
this.isHiddenForReal=null;
};
StageBoxAbstraction._emulateBasicCSS=function(_f55,_f56){
var _f57=_f55.bindingElement.style;
var _f58=_f55.bindingElement.parentNode;
var box=_f55._containingSplitBoxBinding;
if(Client.isExplorer==true){
if(_f56){
_f55._unmodifiedFlexMethod=_f55.flex;
_f55.flex=function(){
_f57.width=_f58.offsetWidth+"px";
_f57.height=_f58.offsetHeight+"px";
};
}else{
_f57.width="100%";
_f57.height="100%";
if(!box.isHorizontalOrient()){
setTimeout(function(){
_f57.width="auto";
_f57.height="auto";
box.reflex(true);
},0);
}
_f55.flex=_f55._unmodifiedFlexMethod;
_f55._unmodifiedFlexMethod=null;
}
}
};
function StageBoxHandlerAbstraction(){
this.isSubPanelMaximized=false;
}
StageBoxHandlerAbstraction.onBindingRegister=function(){
this.addActionListener(ControlBoxBinding.ACTION_MAXIMIZE,this);
this.addActionListener(ControlBoxBinding.ACTION_NORMALIZE,this);
this.addActionListener(StageBoxAbstraction.ACTION_HIDDENSTUFF_UPDATED,this);
this.addActionListener(StageSplitPanelBinding.ACTION_LAYOUTUPDATE,this);
};
StageBoxHandlerAbstraction.handleAction=function(_f5a){
var _f5b=_f5a.target;
switch(_f5a.type){
case ControlBoxBinding.ACTION_MAXIMIZE:
case ControlBoxBinding.ACTION_NORMALIZE:
if(_f5b instanceof StageSplitPanelBinding){
StageBoxHandlerAbstraction.handleControlBoxAction.call(this,_f5a);
_f5a.consume();
}
break;
case StageBoxAbstraction.ACTION_HIDDENSTUFF_UPDATED:
if(this.isSubPanelMaximized){
this.iterateContainedStageBoxBindings(StageCrawler.MODE_UNMAXIMIZE);
this.isSubPanelMaximized=false;
}
_f5a.consume();
break;
case StageSplitPanelBinding.ACTION_LAYOUTUPDATE:
break;
}
};
StageBoxHandlerAbstraction.handleControlBoxAction=function(_f5c){
var mode=null;
switch(_f5c.type){
case ControlBoxBinding.ACTION_MAXIMIZE:
if(!this.isSubPanelMaximized){
mode=StageCrawler.MODE_MAXIMIZE;
this.isSubPanelMaximized=true;
}
break;
case ControlBoxBinding.ACTION_NORMALIZE:
if(this.isSubPanelMaximized){
mode=StageCrawler.MODE_UNMAXIMIZE;
this.isSubPanelMaximized=false;
}
break;
}
if(mode!=null){
this.iterateContainedStageBoxBindings(mode);
}
};
StageMenuBarBinding.prototype=new MenuBarBinding;
StageMenuBarBinding.prototype.constructor=StageMenuBarBinding;
StageMenuBarBinding.superclass=MenuBarBinding.prototype;
function StageMenuBarBinding(){
this.logger=SystemLogger.getLogger("StageMenuBarBinding");
this._rootNode=null;
}
StageMenuBarBinding.prototype.toString=function(){
return "[StageMenuBarBinding]";
};
StageMenuBarBinding.prototype.onBindingAttach=function(){
StageMenuBarBinding.superclass.onBindingAttach.call(this);
if(System.hasActivePerspectives){
this.addActionListener(MenuItemBinding.ACTION_COMMAND);
}else{
Binding.prototype.hide.call(this);
}
};
StageMenuBarBinding.prototype.handleAction=function(_f5e){
StageMenuBarBinding.superclass.handleAction.call(this,_f5e);
switch(_f5e.type){
case MenuItemBinding.ACTION_COMMAND:
var _f5f=_f5e.target.associatedSystemAction;
if(Application.isLoggedIn){
if(!this._rootNode){
this._rootNode=System.getRootNode();
}
if(_f5f){
SystemAction.invoke(_f5f,this._rootNode);
}
}
_f5e.consume();
break;
}
};
StageViewMenuItemBinding.prototype=new MenuItemBinding;
StageViewMenuItemBinding.prototype.constructor=StageViewMenuItemBinding;
StageViewMenuItemBinding.superclass=MenuItemBinding.prototype;
function StageViewMenuItemBinding(){
this.logger=SystemLogger.getLogger("StageViewMenuItemBinding");
this._handle=null;
}
StageViewMenuItemBinding.prototype.toString=function(){
return "[StageViewMenuItemBinding]";
};
StageViewMenuItemBinding.prototype.onBindingAttach=function(){
StageViewMenuItemBinding.superclass.onBindingAttach.call(this);
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
this.subscribe(BroadcastMessages.VIEW_OPENED);
this.subscribe(BroadcastMessages.VIEW_CLOSED);
this.subscribe(BroadcastMessages.STAGE_INITIALIZED);
}
};
StageViewMenuItemBinding.prototype.buildDOMContent=function(){
StageViewMenuItemBinding.superclass.buildDOMContent.call(this);
var _f60=this.getProperty("handle");
if(_f60){
this._handle=_f60;
if(StageBinding.isViewOpen(_f60)){
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
this.check(true);
}
}
this.oncommand=function(){
var self=this;
Application.lock(self);
setTimeout(function(){
StageBinding.handleViewPresentation(_f60);
Application.unlock(self);
},Client.hasTransitions?Animation.DEFAULT_TIME:0);
};
}else{
throw new Error("StageViewMenuItemBinding: missing handle");
}
};
StageViewMenuItemBinding.prototype.setHandle=function(_f62){
this.setProperty("handle",_f62);
};
StageViewMenuItemBinding.prototype.handleBroadcast=function(_f63,arg){
StageViewMenuItemBinding.superclass.handleBroadcast.call(this,_f63,arg);
if(this.type==MenuItemBinding.TYPE_CHECKBOX){
switch(_f63){
case BroadcastMessages.STAGE_INITIALIZED:
if(this.isChecked){
this.fireCommand();
}
break;
case BroadcastMessages.VIEW_OPENED:
if(arg==this._handle){
this.check(true);
}
break;
case BroadcastMessages.VIEW_CLOSED:
if(arg==this._handle){
this.uncheck(true);
}
break;
}
}
};
StageViewMenuItemBinding.newInstance=function(_f65){
var _f66=DOMUtil.createElementNS(Constants.NS_UI,"ui:menuitem",_f65);
UserInterface.registerBinding(_f66,StageViewMenuItemBinding);
return UserInterface.getBinding(_f66);
};
StageStatusBarBinding.prototype=new ToolBarBinding;
StageStatusBarBinding.prototype.constructor=StageStatusBarBinding;
StageStatusBarBinding.superclass=ToolBarBinding.prototype;
function StageStatusBarBinding(){
this.logger=SystemLogger.getLogger("StageStatusBarBinding");
this._label=null;
}
StageStatusBarBinding.prototype.toString=function(){
return "[StageStatusBarBinding]";
};
StageStatusBarBinding.prototype.onBindingInitialize=function(){
this._label=this.bindingWindow.bindingMap.statusbarlabel;
StatusBar.initialize(this);
StageStatusBarBinding.superclass.onBindingInitialize.call(this);
};
StageStatusBarBinding.prototype.setLabel=function(_f67){
this._label.setLabel(_f67);
};
StageStatusBarBinding.prototype.setImage=function(_f68){
this._label.setImage(_f68);
};
StageStatusBarBinding.prototype.clear=function(){
this._label.setLabel(null);
this._label.setImage(false);
};
StageStatusBarBinding.prototype.startFadeOut=function(_f69){
this.logger.debug("START FADEOUT");
};
ExplorerBinding.prototype=new FlexBoxBinding;
ExplorerBinding.prototype.constructor=ExplorerBinding;
ExplorerBinding.superclass=FlexBoxBinding.prototype;
ExplorerBinding.ACTION_INITIALIZED="explorer initialized";
ExplorerBinding.ACTION_DECK_LOADED="explorer deck loaded";
ExplorerBinding.PERSPECTIVE_CONTENT="Content";
ExplorerBinding.PERSPECTIVE_MEDIA="Media";
ExplorerBinding.PERSPECTIVE_DATA="Datas";
ExplorerBinding.PERSPECTIVE_DESIGN="Design";
ExplorerBinding.PERSPECTIVE_FUNCTIONS="Functions";
ExplorerBinding.PERSPECTIVE_USERS="Users";
ExplorerBinding.PERSPECTIVE_SYSTEM="System";
ExplorerBinding.bindingInstance=null;
ExplorerBinding.getFocusedTreeNodeBindings=function(){
var _f6a=ExplorerBinding.bindingInstance.getSelectedDeckBinding();
var _f6b=_f6a.getAssociatedView();
var _f6c=_f6b.getContentWindow().bindingMap.tree;
var _f6d=_f6c.getFocusedTreeNodeBindings();
if(!_f6d.hasEntries()&&StageBinding.treeSelector){
_f6d=StageBinding.treeSelector.getFocusedTreeNodeBindings();
}
return _f6d;
};
function ExplorerBinding(){
this.logger=SystemLogger.getLogger("ExplorerBinding");
this._decksBinding=null;
this._menuBinding=null;
this._splitterBinding=null;
this._dragStart=0;
this._dragSlot=0;
this._dragHeight=0;
return this;
}
ExplorerBinding.prototype.toString=function(){
return "[ExplorerBinding]";
};
ExplorerBinding.prototype.onBindingAttach=function(){
ExplorerBinding.superclass.onBindingAttach.call(this);
this.addActionListener(ExplorerMenuBinding.ACTION_SELECTIONCHANGED);
this.addActionListener(ViewBinding.ACTION_LOADED);
this.addActionListener(Binding.ACTION_DRAG);
this._decksBinding=this.addMember(this.getDescendantBindingByLocalName("explorerdecks"));
this._splitterBinding=this.addMember(this.getDescendantBindingByLocalName("explorersplitter"));
this._menuBinding=this.addMember(this.getDescendantBindingByLocalName("explorermenu"));
};
ExplorerBinding.prototype.onBindingInitialize=function(){
ExplorerBinding.bindingInstance=this;
ExplorerBinding.superclass.onBindingInitialize.call(this);
this.dispatchAction(ExplorerBinding.ACTION_INITIALIZED);
};
ExplorerBinding.prototype.handleAction=function(_f6e){
ExplorerBinding.superclass.handleAction.call(this,_f6e);
var _f6f=_f6e.target;
switch(_f6e.type){
case ExplorerMenuBinding.ACTION_SELECTIONCHANGED:
this._decksBinding.setSelectionByHandle(this._menuBinding.getSelectionHandle());
var tag=this._menuBinding.getSelectionTag();
EventBroadcaster.broadcast(BroadcastMessages.PERSPECTIVE_CHANGED,tag);
break;
case ViewBinding.ACTION_LOADED:
this.dispatchAction(ExplorerBinding.ACTION_DECK_LOADED);
_f6e.consume();
break;
case Binding.ACTION_DRAG:
if(_f6f instanceof ExplorerSplitterBinding){
_f6f.dragger.registerHandler(this);
}
_f6e.consume();
}
};
ExplorerBinding.prototype.setSelectionByHandle=function(_f71){
this._menuBinding.setSelectionByHandle(_f71);
};
ExplorerBinding.prototype.setSelectionDefault=function(){
this._menuBinding.setSelectionDefault();
};
ExplorerBinding.prototype.getSelectedDeckBinding=function(){
return this._decksBinding.getSelectedDeckBinding();
};
ExplorerBinding.prototype.mountDefinition=function(_f72){
if(_f72 instanceof SystemViewDefinition){
this._decksBinding.mountDefinition(_f72);
this._menuBinding.mountDefinition(_f72);
}
};
ExplorerBinding.prototype.onDragStart=function(_f73){
var _f74=this._menuBinding.getDescendantBindingsByLocalName("explorertoolbarbutton");
if(_f74.hasEntries()){
var _f75=_f74.getFirst();
this._dragStart=_f75.boxObject.getLocalPosition().y;
this._dragSlot=0;
if(this._dragHeight==0){
this._dragHeight=_f75.boxObject.getDimension().h;
}
this.bindingWindow.bindingMap.explorercover.show();
}
};
ExplorerBinding.prototype.onDrag=function(diff){
var y=this._dragStart+diff.y;
if(y>this._dragStart+this._dragSlot+this._dragHeight){
if(this._menuBinding.showLess()){
this._decksBinding.expandBy(this._dragHeight);
this._dragSlot+=this._dragHeight;
}
}
if(y<this._dragStart+this._dragSlot){
if(this._menuBinding.showMore()){
this._decksBinding.expandBy(-this._dragHeight);
this._dragSlot-=this._dragHeight;
}
}
};
ExplorerBinding.prototype.onDragStop=function(diff){
this.bindingWindow.bindingMap.explorercover.hide();
};
ExplorerDecksBinding.prototype=new DecksBinding;
ExplorerDecksBinding.prototype.constructor=ExplorerDecksBinding;
ExplorerDecksBinding.superclass=DecksBinding.prototype;
ExplorerDecksBinding.NODENAME_DECK="explorerdeck";
function ExplorerDecksBinding(){
this.logger=SystemLogger.getLogger("ExplorerDecksBinding");
this._decks={};
return this;
}
ExplorerDecksBinding.prototype.onBindingAttach=function(){
ExplorerDecksBinding.superclass.onBindingAttach.call(this);
this.addActionListener(PageBinding.ACTION_ATTACHED);
};
ExplorerDecksBinding.prototype.toString=function(){
return "[ExplorerDecksBinding]";
};
ExplorerDecksBinding.prototype.mountDefinition=function(_f79){
if(_f79 instanceof SystemViewDefinition){
var _f7a=ViewBinding.newInstance(this.bindingDocument);
_f7a.setType(ViewBinding.TYPE_EXPLORERVIEW);
_f7a.setDefinition(_f79);
var _f7b=ExplorerDeckBinding.newInstance(this.bindingDocument);
_f7b.setAssociatedView(_f7a);
this._decks[_f79.handle]=_f7b;
_f7b.add(_f7a);
this.add(_f7b);
function attach(){
_f7b.attach();
_f7a.attach();
}
if(Client.isWebKit){
setTimeout(function(){
attach();
},0);
}else{
attach();
}
}
};
ExplorerDecksBinding.prototype.setSelectionByHandle=function(_f7c){
var _f7d=this._decks[_f7c];
this.select(_f7d);
};
DecksBinding.prototype.expandBy=function(_f7e){
var deck=this.getSelectedDeckBinding();
if(deck){
var _f80=this.bindingElement.offsetHeight+_f7e;
var view=deck.getAssociatedView();
this.bindingElement.style.height=_f80+"px";
this.reflex(true);
}
};
ExplorerDecksBinding.newInstance=function(_f82){
var _f83=DOMUtil.createElementNS(Constants.NS_UI,"ui:explorerdecks",_f82);
return UserInterface.registerBinding(_f83,ExplorerDecksBinding);
};
ExplorerDeckBinding.prototype=new DeckBinding;
ExplorerDeckBinding.prototype.constructor=ExplorerDeckBinding;
ExplorerDeckBinding.superclass=DeckBinding.prototype;
ExplorerDeckBinding.NODENAME_DECKS="explorerdecks";
function ExplorerDeckBinding(){
this.logger=SystemLogger.getLogger("ExplorerDeckBinding");
this._entityToken=null;
this._isRefreshRequired=false;
this._viewBinding=null;
this._isExplorerDeckBindingInitialized=false;
return this;
}
ExplorerDeckBinding.prototype.toString=function(){
return "[ExplorerDeckBinding]";
};
ExplorerDeckBinding.prototype.onBindingRegister=function(){
ExplorerDeckBinding.superclass.onBindingRegister.call(this);
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHALL);
};
ExplorerDeckBinding.prototype.setAssociatedView=function(_f84){
this._viewBinding=_f84;
};
ExplorerDeckBinding.prototype.getAssociatedView=function(){
return this._viewBinding;
};
ExplorerDeckBinding.prototype.select=function(){
if(!this._isExplorerDeckBindingInitialized){
Application.lock(this);
var _f85=StringBundle.getString("ui","Website.App.StatusBar.Loading");
var _f86=this._viewBinding.getDefinition().label;
StatusBar.busy(_f85,[_f86]);
this.bindingWindow.bindingMap.explorerdeckscover.show();
this.addActionListener(PageBinding.ACTION_INITIALIZED);
this._viewBinding.initialize();
}
if(this._isRefreshRequired==true){
this._refreshTree();
this._isRefreshRequired=false;
}else{
ExplorerDeckBinding.superclass.select.call(this);
this.dispatchAction(DockTabBinding.ACTION_UPDATE_VISUAL);
}
};
ExplorerDeckBinding.prototype.handleAction=function(_f87){
ExplorerDeckBinding.superclass.handleAction.call(this,_f87);
var _f88=_f87.target;
switch(_f87.type){
case PageBinding.ACTION_INITIALIZED:
if(_f88 instanceof SystemPageBinding){
this._isExplorerDeckBindingInitialized=true;
this._entityToken=_f88.node.getEntityToken();
this.removeActionListener(PageBinding.ACTION_INITIALIZED);
this.bindingWindow.bindingMap.explorerdeckscover.hide();
this.dispatchAction(DockTabBinding.ACTION_UPDATE_VISUAL);
Application.unlock(this);
if(StatusBar.state==StatusBar.BUSY){
StatusBar.clear();
}
}
break;
}
};
ExplorerDeckBinding.prototype.handleBroadcast=function(_f89,arg){
ExplorerDeckBinding.superclass.handleBroadcast.call(this,_f89,arg);
switch(_f89){
case BroadcastMessages.SYSTEMTREEBINDING_REFRESHALL:
if(this.isSelected==true){
this._refreshTree();
}else{
if(this._entityToken!=null){
this._isRefreshRequired=true;
}
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_REFRESHED:
this.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED);
this.select();
break;
}
};
ExplorerDeckBinding.prototype._refreshTree=function(){
if(this._entityToken!=null){
this.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED);
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESH,this._entityToken);
}
};
ExplorerDeckBinding.prototype._collapseTree=function(){
alert("ExplorerDeckBinding: collapse tree!");
};
ExplorerDeckBinding.prototype.getLabel=function(){
var _f8b=null;
if(this._isExplorerDeckBindingInitialized){
_f8b=this._viewBinding.getDefinition().label;
}else{
_f8b=DockTabBinding.LABEL_TABLOADING;
}
return _f8b;
};
ExplorerDeckBinding.prototype.getImage=function(){
var _f8c=null;
if(this._isExplorerDeckBindingInitialized){
_f8c=this._viewBinding.getDefinition().image;
}else{
_f8c=DockTabBinding.IMG_TABLOADING;
}
return _f8c;
};
ExplorerDeckBinding.prototype.getToolTip=function(){
var _f8d=null;
if(this._isExplorerDeckBindingInitialized){
_f8d=this._viewBinding.getDefinition().toolTip;
}
return _f8d;
};
ExplorerDeckBinding.newInstance=function(_f8e){
var _f8f=DOMUtil.createElementNS(Constants.NS_UI,"ui:explorerdeck",_f8e);
return UserInterface.registerBinding(_f8f,ExplorerDeckBinding);
};
ExplorerSplitterBinding.prototype=new Binding;
ExplorerSplitterBinding.prototype.constructor=ExplorerSplitterBinding;
ExplorerSplitterBinding.superclass=Binding.prototype;
function ExplorerSplitterBinding(){
this.logger=SystemLogger.getLogger("ExplorerSplitterBinding");
this.isDraggable=true;
return this;
}
ExplorerSplitterBinding.prototype.toString=function(){
return "[ExplorerSplitterBinding]";
};
ExplorerMenuBinding.prototype=new Binding;
ExplorerMenuBinding.prototype.constructor=ExplorerMenuBinding;
ExplorerMenuBinding.superclass=Binding.prototype;
ExplorerMenuBinding.ACTION_SELECTIONCHANGED="explorermenu selectionchanged";
function ExplorerMenuBinding(){
this.logger=SystemLogger.getLogger("ExplorerMenuBinding");
this._maxButtons=new Map();
this._maxList=new List();
this._minButtons=new Map();
this._minList=new List();
this._index=-1;
this._maxGroup=null;
this._minGroup=null;
this._selectedHandle=null;
this._selectedTag=null;
}
ExplorerMenuBinding.prototype.toString=function(){
return "[ExplorerMenuBinding]";
};
ExplorerMenuBinding.prototype.onBindingRegister=function(){
ExplorerMenuBinding.superclass.onBindingRegister.call(this);
this.addActionListener(RadioGroupBinding.ACTION_SELECTIONCHANGED,this);
};
ExplorerMenuBinding.prototype.onBindingAttach=function(){
ExplorerMenuBinding.superclass.onBindingAttach.call(this);
this.addMember(this.getChildBindingByLocalName("explorertoolbar"));
this.addMember(this.getChildBindingByLocalName("toolbar"));
};
ExplorerMenuBinding.prototype.onMemberInitialize=function(_f90){
switch(_f90.constructor){
case ExplorerToolBarBinding:
this._maxGroup=_f90.getToolBarGroupByIndex(0);
break;
case ToolBarBinding:
this._minGroup=_f90.getToolBarGroupByIndex(0);
break;
}
ExplorerMenuBinding.superclass.onMemberInitialize.call(this,_f90);
};
ExplorerMenuBinding.prototype.mountDefinition=function(_f91){
this._maxButtons.set(_f91.handle,this._mountMaxButton(_f91));
this._minButtons.set(_f91.handle,this._mountMinButton(_f91));
this._index++;
};
ExplorerMenuBinding.prototype._mountMaxButton=function(_f92){
var _f93=ExplorerToolBarButtonBinding.newInstance(this.bindingDocument,ExplorerToolBarButtonBinding.TYPE_LARGE);
_f93.setLabel(_f92.label);
_f93.setToolTip(_f92.toolTip);
_f93.handle=_f92.handle;
_f93.node=_f92.node;
this._maxGroup.add(_f93);
this._maxList.add(_f93);
_f93.attach();
return _f93;
};
ExplorerMenuBinding.prototype._mountMinButton=function(_f94){
var _f95=ExplorerToolBarButtonBinding.newInstance(this.bindingDocument,ExplorerToolBarButtonBinding.TYPE_NORMAL);
_f95.setLabel(_f94.label);
_f95.setToolTip(_f94.label);
_f95.handle=_f94.handle;
_f95.node=_f94.node;
this._minGroup.addFirst(_f95);
this._minList.add(_f95);
_f95.attach();
_f95.hide();
return _f95;
};
ExplorerMenuBinding.prototype.handleAction=function(_f96){
ExplorerMenuBinding.superclass.handleAction.call(this,_f96);
switch(_f96.type){
case RadioGroupBinding.ACTION_SELECTIONCHANGED:
var _f97=_f96.target;
var _f98=_f97.getCheckedButtonBinding();
var _f99=_f98.handle;
switch(_f97){
case this._maxGroup:
this._minGroup.setCheckedButtonBinding(this._minButtons.get(_f99),true);
break;
case this._minGroup:
this._maxGroup.setCheckedButtonBinding(this._maxButtons.get(_f99),true);
break;
}
this._selectedHandle=_f99;
this._selectedTag=_f98.node.getTag();
this.dispatchAction(ExplorerMenuBinding.ACTION_SELECTIONCHANGED);
_f96.consume();
break;
}
};
ExplorerMenuBinding.prototype.setSelectionByHandle=function(_f9a){
var _f9b=this._maxButtons.get(_f9a);
if(_f9b){
_f9b.check();
}else{
this.setSelectionDefault();
}
};
ExplorerMenuBinding.prototype.getSelectionHandle=function(){
return this._selectedHandle;
};
ExplorerMenuBinding.prototype.getSelectionTag=function(){
return this._selectedTag;
};
ExplorerMenuBinding.prototype.setSelectionDefault=function(){
if(this._maxList.hasEntries()){
this._maxList.getFirst().check();
}
};
ExplorerMenuBinding.prototype.showMore=function(){
var _f9c=false;
var max=this._maxList.getLength()-1;
if(!this._maxList.get(max).isVisible){
this._index++;
this._maxList.get(this._index).show();
this._minList.get(this._index).hide();
_f9c=true;
}
return _f9c;
};
ExplorerMenuBinding.prototype.showLess=function(){
var _f9e=false;
if(this._maxList.get(0).isVisible){
this._maxList.get(this._index).hide();
this._minList.get(this._index).show();
this._index--;
_f9e=true;
}
return _f9e;
};
ExplorerToolBarBinding.prototype=new ToolBarBinding;
ExplorerToolBarBinding.prototype.constructor=ExplorerToolBarBinding;
ExplorerToolBarBinding.superclass=ToolBarBinding.prototype;
function ExplorerToolBarBinding(){
this.logger=SystemLogger.getLogger("ExplorerToolBarBinding");
this._hasDefaultContent=false;
}
ExplorerToolBarBinding.prototype.toString=function(){
return "[ExplorerToolBarBinding]";
};
ExplorerToolBarBinding.prototype.onBindingRegister=function(){
ExplorerToolBarBinding.superclass.onBindingRegister.call(this);
this.setImageSize(ToolBarBinding.IMAGESIZE_LARGE);
};
ExplorerToolBarBinding.newInstance=function(_f9f){
var _fa0=DOMUtil.createElementNS(Constants.NS_UI,"ui:explorertoolbar",_f9f);
return UserInterface.registerBinding(_fa0,ExplorerToolBarBinding);
};
ExplorerToolBarButtonBinding.prototype=new ToolBarButtonBinding;
ExplorerToolBarButtonBinding.prototype.constructor=ExplorerToolBarButtonBinding;
ExplorerToolBarButtonBinding.superclass=ToolBarButtonBinding.prototype;
ExplorerToolBarButtonBinding.TYPE_NORMAL="normal";
ExplorerToolBarButtonBinding.TYPE_LARGE="large";
function ExplorerToolBarButtonBinding(){
this.logger=SystemLogger.getLogger("ExplorerToolBarButtonBinding");
this.isRadioButton=true;
this.explorerToolBarButtonType=null;
this.node=null;
}
ExplorerToolBarButtonBinding.prototype.toString=function(){
return "[ExplorerToolBarButtonBinding]";
};
ExplorerToolBarButtonBinding.prototype.onBindingAttach=function(){
var _fa1=this.explorerToolBarButtonType==ExplorerToolBarButtonBinding.TYPE_LARGE;
var _fa2=_fa1?ToolBarBinding.IMAGESIZE_LARGE:ToolBarBinding.IMAGESIZE_NORMAL;
this.imageProfile=this.node.getImageProfile(_fa2);
ExplorerToolBarButtonBinding.superclass.onBindingAttach.call(this);
};
ExplorerToolBarButtonBinding.newInstance=function(_fa3,_fa4){
var _fa5=(_fa4==ExplorerToolBarButtonBinding.TYPE_LARGE?"ui:explorertoolbarbutton":"ui:toolbarbutton");
var _fa6=DOMUtil.createElementNS(Constants.NS_UI,_fa5,_fa3);
var _fa7=UserInterface.registerBinding(_fa6,ExplorerToolBarButtonBinding);
_fa7.explorerToolBarButtonType=_fa4;
return _fa7;
};
EditorBinding.prototype=new WindowBinding;
EditorBinding.prototype.constructor=EditorBinding;
EditorBinding.superclass=WindowBinding.prototype;
EditorBinding.isActive=false;
EditorBinding.ACTION_ATTACHED=null;
EditorBinding.URL_DIALOG_MOZ_CONFIGURE="${root}/content/dialogs/wysiwygeditor/mozsecuritynote/mozsecuritynote.aspx";
EditorBinding.ABSURD_NUMBER=-999999999;
EditorBinding.LINE_BREAK_ENTITY_HACK="C1.LINE.BREAK.ENTITY.HACK";
EditorBinding._components=new Map();
EditorBinding._editors=new Map();
EditorBinding.registerComponent=function(_fa8,_fa9){
var _faa=EditorBinding._components;
var _fab=EditorBinding._editors;
var key=_fa9.key;
var _fad=Interfaces.isImplemented(IWysiwygEditorComponent,_fa8);
if(!_fad){
_fad=Interfaces.isImplemented(ISourceEditorComponent,_fa8);
}
if(_fad){
if(_fab.has(key)){
_fab.get(key).initializeEditorComponent(_fa8);
}else{
if(!_faa.has(key)){
_faa.set(key,new List());
}
_faa.get(key).add(_fa8);
}
}else{
throw "Editor component interface not implemented: "+_fa8;
}
};
EditorBinding.claimComponents=function(_fae,_faf){
var _fb0=EditorBinding._components;
var _fb1=EditorBinding._editors;
var key=_faf.key;
_fb1.set(key,_fae);
var list=null;
if(_fb0.has(key)){
list=_fb0.get(key).copy();
_fb0.del(key);
}
return list;
};
function EditorBinding(){
this.logger=SystemLogger.getLogger("EditorBinding");
this.action_initialized=null;
this.url_default=null;
this._popupBinding=null;
this._startContent=null;
this._explorerBookmark=null;
this.isDirty=false;
this.isDialogMode=false;
this.isFocusable=true;
this.isFocused=false;
this._isActivated=false;
this._Binding=null;
this._url=null;
this.isBlockingActions=true;
this._isFinalized=false;
this._bookmark=null;
this._checksum=null;
this.crawlerFilters=new List([FocusCrawler.ID,FitnessCrawler.ID]);
}
EditorBinding.prototype.toString=function(){
return "[EditorBinding]";
};
EditorBinding.prototype.onBindingRegister=function(){
EditorBinding.superclass.onBindingRegister.call(this);
this._url=this.url_default;
this._coverBinding=this.add(CoverBinding.newInstance(this.bindingDocument));
};
EditorBinding.prototype.onBindingAttach=function(){
Application.lock(this);
if(this.hasCallBackID()){
Binding.dotnetify(this);
}
this._setup();
this.setURL(this._url);
this.addActionListener(Binding.ACTION_DIRTY);
EditorBinding.superclass.onBindingAttach.call(this);
};
EditorBinding.prototype._setup=function(){
var name=this.getProperty("name");
if(name==null||name==""){
name="generated"+KeyMaster.getUniqueKey();
}
this._registerWithDataManager(name);
var _fb5=this.getProperty("value");
if(_fb5!=null){
_fb5=decodeURIComponent(_fb5);
this._startContent=_fb5;
}
};
EditorBinding.prototype.onBindingDispose=function(){
EditorBinding.superclass.onBindingDispose.call(this);
var name=this.getProperty("name");
if(name!=null){
var _fb7=this.bindingWindow.DataManager;
_fb7.unRegisterDataBinding(name);
}
};
EditorBinding.prototype._initialize=function(){
this.subscribe(BroadcastMessages.APPLICATION_BLURRED);
this.subscribe(BroadcastMessages.STAGEDIALOG_OPENED);
this.subscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP);
if(this._startContent==null){
this._startContent=new String("");
}
this.addEditorEvents();
var self=this;
setTimeout(function(){
self._finalize();
},0);
};
EditorBinding.prototype._finalize=function(){
this.resetUndoRedo();
this._popupBinding=this.getEditorPopupBinding();
Application.unlock(this);
this._isFinalized=true;
this.dispatchAction(this.action_initialized);
};
EditorBinding.prototype.initializeEditorComponents=function(_fb9){
var _fba=EditorBinding.claimComponents(this,_fb9);
if(_fba!=null){
while(_fba.hasNext()){
this.initializeEditorComponent(_fba.getNext());
}
}
};
EditorBinding.prototype._registerWithDataManager=function(name){
if(name&&name!=""){
var _fbc=this.bindingWindow.DataManager;
if(_fbc.getDataBinding(name)){
_fbc.unRegisterDataBinding(name);
}
_fbc.registerDataBinding(name,this);
}
};
EditorBinding.prototype.addEditorEvents=function(){
var _fbd=this.getEditorDocument();
if(_fbd!=null){
Application.framework(_fbd);
DOMEvents.addEventListener(_fbd,DOMEvents.CONTEXTMENU,this);
DOMEvents.addEventListener(_fbd,DOMEvents.KEYPRESS,this);
DOMEvents.addEventListener(_fbd,DOMEvents.MOUSEDOWN,this);
DOMEvents.addEventListener(_fbd,DOMEvents.MOUSEMOVE,this);
}
DOMEvents.addEventListener(this.bindingElement,DOMEvents.MOUSEDOWN,{handleEvent:function(e){
DOMEvents.stopPropagation(e);
DOMEvents.preventDefault(e);
}});
};
EditorBinding.prototype.checkForDirty=function(_fbf){
if(!this.isDirty||!this.bindingWindow.DataManager.isDirty){
if(_fbf==true){
this.bindingWindow.DataManager.dirty(this);
}else{
var self=this;
setTimeout(function(){
self._checkForRealDirty();
},0);
}
}
};
EditorBinding.prototype._checkForRealDirty=function(){
var _fc1=this.getCheckSum();
if(_fc1!=this._checksum){
this.bindingWindow.DataManager.dirty(this);
this._checksum=_fc1;
}
};
EditorBinding.prototype.getCheckSum=function(){
var _fc2=null;
if(Binding.exists(this._pageBinding)){
_fc2=this._pageBinding.getCheckSum(this._checksum);
}
return _fc2;
};
EditorBinding.prototype.handleEvent=function(e){
EditorBinding.superclass.handleEvent.call(this,e);
var _fc4=DOMEvents.getTarget(e);
switch(e.type){
case DOMEvents.CONTEXTMENU:
if(Client.isFirefox&&e.ctrlKey){
}else{
DOMEvents.preventDefault(e);
this._popupBinding.editorBinding=this;
this.handleContextMenu(e);
}
break;
case DOMEvents.KEYPRESS:
this.checkForDirty();
if(!this._isActivated||this.isFocusable&&!this.isFocused){
this._activateEditor(true);
}
break;
case DOMEvents.MOUSEDOWN:
if(_fc4.ownerDocument==this.getEditorDocument()){
if(!this._isActivated||this.isFocusable&&!this.isFocused){
this._activateEditor(true);
}
}
break;
case DOMEvents.MOUSEMOVE:
if(Client.isExplorer){
if(Application.isBlurred){
if(!this._isActivated){
this.getContentWindow().focus();
}
}
}
break;
}
};
EditorBinding.prototype.handleContextMenu=function(e){
this.createBookmark();
this._popupBinding.snapToMouse(e);
};
EditorBinding.prototype.handleBroadcast=function(_fc6,arg){
EditorBinding.superclass.handleBroadcast.call(this,_fc6,arg);
var _fc8=null;
switch(_fc6){
case BroadcastMessages.APPLICATION_BLURRED:
if(this._isActivated){
this._activateEditor(false);
}
break;
case BroadcastMessages.STAGEDIALOG_OPENED:
if(this._isActivated){
this._activateEditor(false);
}
break;
case BroadcastMessages.MOUSEEVENT_MOUSEUP:
if(!this.isDialogMode){
try{
var _fc9=true;
if(arg instanceof Binding){
if(Interfaces.isImplemented(IEditorControlBinding,arg)==true){
if(arg.isEditorControlBinding){
_fc9=false;
}
}
}else{
_fc8=DOMEvents.getTarget(arg);
if(_fc8&&_fc8.ownerDocument==this.getEditorDocument()){
_fc9=false;
}
}
if(_fc9){
if(this._isActivated){
this._activateEditor(false);
}
}
}
catch(exception){
this.unsubscribe(BroadcastMessages.MOUSEEVENT_MOUSEUP);
throw exception;
}
}
break;
}
};
EditorBinding.prototype._activateEditor=function(_fca){
if(_fca!=this._isActivated){
this._isActivated=_fca;
EditorBinding.isActive=_fca;
var _fcb=this.getEditorWindow().standardEventHandler;
var _fcc=this.getContentWindow().bindingMap.broadcasterIsActive;
if(_fcc!=null){
if(_fca){
if(this.hasBookmark()){
this.deleteBookmark();
}
_fcc.enable();
if(Client.isExplorer){
this._sanitizeExplorer();
}
this.focus();
_fcb.enableNativeKeys(true);
}else{
_fcc.disable();
_fcb.disableNativeKeys();
this.blur();
}
}else{
throw "Required broadcaster not found";
}
}
};
EditorBinding.prototype._sanitizeExplorer=function(){
if(Client.isExplorer){
var _fcd=this.getEditorDocument().selection.createRange();
_fcd.select();
}
};
EditorBinding.prototype._sanitizeMozilla=function(){
};
EditorBinding.prototype.hasSelection=function(){
var _fce=false;
try{
if(!Client.isExplorer){
var _fcf=this.getEditorWindow().getSelection();
if(_fcf!=null){
_fce=_fcf.toString().length>0;
if(!_fce){
var _fd0=_fcf.getRangeAt(0);
var frag=_fd0.cloneContents();
var _fd2=this.getEditorDocument().createElement("element");
while(frag.hasChildNodes()){
_fd2.appendChild(frag.firstChild);
}
var img=_fd2.getElementsByTagName("img").item(0);
if(img!=null){
if(!VisualEditorBinding.isReservedElement(img)){
_fce=true;
}
}
}
}
}else{
var _fd0=this.getEditorDocument().selection.createRange();
_fce=(_fd0&&_fd0.text)&&_fd0.text.length>0;
if(_fd0.commonParentElement&&VisualEditorBinding.isImageElement(_fd0.commonParentElement())){
_fce=true;
}
}
}
catch(exception){
}
return _fce;
};
EditorBinding.prototype.isCommandEnabled=function(_fd4){
var _fd5=true;
switch(_fd4){
case "Cut":
case "Copy":
case "Paste":
_fd5=this.getEditorDocument().queryCommandEnabled(_fd4);
break;
}
return _fd5;
};
EditorBinding.prototype.handleCommand=function(cmd,gui,val){
var _fd9=false;
this.restoreBookmark();
switch(cmd){
case "Cut":
case "Copy":
case "Paste":
var _fda=null;
if(cmd=="Paste"){
_fda=null;
}else{
_fda=this.hasSelection();
}
try{
this.getEditorDocument().execCommand(cmd,gui,_fda);
}
catch(mozillaSecurityException){
if(Client.isMozilla==true){
Dialog.invokeModal(EditorBinding.URL_DIALOG_MOZ_CONFIGURE);
}else{
throw "Clipboard operation malfunction. Contact your developer.";
}
}
finally{
_fd9=true;
}
break;
}
return _fd9;
};
EditorBinding.prototype.getButtonForCommand=function(cmd){
var _fdc=this.getContentWindow().bindingMap.toolbar;
var _fdd=_fdc.getButtonForCommand(cmd);
if(!_fdd){
throw "No button for command "+cmd;
}
return _fdd;
};
EditorBinding.prototype.getName=function(){
return this.getProperty("name");
};
EditorBinding.prototype.dirty=DataBinding.prototype.dirty;
EditorBinding.prototype.clean=function(){
this.isDirty=false;
this._checksum=this.getCheckSum();
};
EditorBinding.prototype.enableDialogMode=function(){
if(!this.isDialogMode){
this.isDialogMode=true;
if(!this.hasBookmark()){
this.createBookmark();
}
var self=this;
setTimeout(function(){
self._activateEditor(false);
},0);
}
};
EditorBinding.prototype.disableDialogMode=function(){
if(this.isDialogMode){
if(this.hasBookmark()){
this.restoreBookmark();
}
var self=this;
setTimeout(function(){
self.isDialogMode=false;
self.blurEditor();
},100);
}
};
EditorBinding.prototype.blurEditor=function(){
var _fe0=this.getContentDocument().getElementById("focusableinput");
if(_fe0!=null){
_fe0.style.display="block";
FocusBinding.focusElement(_fe0);
_fe0.style.display="none";
}else{
throw "Required element not found: focusableinput";
}
};
EditorBinding.prototype.handleAction=function(_fe1){
EditorBinding.superclass.handleAction.call(this,_fe1);
var _fe2=_fe1.target;
var self=this;
var _fe4=this.shadowTree.iframe;
switch(_fe1.type){
case Binding.ACTION_DIRTY:
if(_fe1.target!=this){
this.checkForDirty();
}
break;
}
};
EditorBinding.prototype._onPageInitialize=function(_fe5){
if(this._pageBinding==null){
this.reflex();
if(this._coverBinding!=null&&this._coverBinding.isVisible){
this._coverBinding.hide();
}
}
EditorBinding.superclass._onPageInitialize.call(this,_fe5);
};
EditorBinding.prototype.handleElement=function(_fe6){
return true;
};
EditorBinding.prototype.updateElement=function(_fe7){
return true;
};
EditorBinding.prototype.focus=DataBinding.prototype.focus;
EditorBinding.prototype.blur=DataBinding.prototype.blur;
EditorBinding.prototype.manifest=function(){
this.shadowTree.dotnetinput.value=encodeURIComponent(this.getValue());
};
EditorBinding.prototype.getEditorWindow=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.getEditorDocument=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.getEditorPopupBinding=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.createBookmark=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.restoreBookmark=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.hasBookmark=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.deleteBookmark=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.resetUndoRedo=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.validate=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.getValue=Binding.ABSTRACT_METHOD;
EditorBinding.prototype.getResult=Binding.ABSTRACT_METHOD;
EditorPopupBinding.prototype=new PopupBinding;
EditorPopupBinding.prototype.constructor=EditorPopupBinding;
EditorPopupBinding.superclass=PopupBinding.prototype;
EditorPopupBinding.CONTENT_TEMPLATE=null;
function EditorPopupBinding(){
this.logger=SystemLogger.getLogger("EditorPopupBinding");
this._isEditorPopupBindingInitialized=false;
this.editorBinding=null;
}
EditorPopupBinding.prototype.toString=function(){
return "[EditorPopupBinding]";
};
EditorPopupBinding.prototype.show=function(){
if(!this._isEditorPopupBindingInitialized){
var self=this;
Application.lock(this);
setTimeout(function(){
self._initialize();
Application.unlock(self);
},0);
}else{
EditorPopupBinding.superclass.show.call(this);
}
};
EditorPopupBinding.prototype._initialize=function(){
if(!this._isEditorPopupBindingInitialized){
this.subTreeFromString(Templates.getTemplateElementText(this.constructor.CONTENT_TEMPLATE));
this._bodyBinding=this.getChildBindingByLocalName("menubody");
this.addActionListener(MenuItemBinding.ACTION_COMMAND,this);
this._indexMenuContent();
this._isEditorPopupBindingInitialized=true;
this._onInitialize();
}
};
EditorPopupBinding.prototype._onInitialize=function(){
this._configure();
this.show();
};
EditorPopupBinding.prototype.configure=function(){
if(this._isEditorPopupBindingInitialized){
this._configure();
}
};
EditorPopupBinding.prototype._configure=Binding.ABSTRACT_METHOD;
EditorPopupBinding.prototype._showMenuGroups=function(rel){
var _fea=this._menuGroups[rel];
if(_fea instanceof List){
_fea.each(function(_feb){
_feb.show();
});
}
};
EditorPopupBinding.prototype._hideMenuGroups=function(rel){
var _fed=this._menuGroups[rel];
if(_fed instanceof List){
_fed.each(function(_fee){
_fee.hide();
});
}
};
EditorPopupBinding.prototype.handleAction=function(_fef){
EditorPopupBinding.superclass.handleAction.call(this,_fef);
var _ff0=_fef.target;
if(_fef.type==MenuItemBinding.ACTION_COMMAND){
this.hide();
var cmd=_ff0.getProperty("cmd");
var gui=_ff0.getProperty("gui");
var val=_ff0.getProperty("val");
this.handleCommand(cmd,gui,val);
}
};
EditorPopupBinding.prototype.handleCommand=Binding.ABSTRACT_METHOD;
EditorClickButtonBinding.prototype=new ClickButtonBinding;
EditorClickButtonBinding.prototype.constructor=EditorClickButtonBinding;
EditorClickButtonBinding.superclass=ClickButtonBinding.prototype;
function EditorClickButtonBinding(){
this.logger=SystemLogger.getLogger("EditorClickButtonBinding");
this._editorBinding=null;
this.isEditorControlBinding=true;
this.isEditorSimpleControl=true;
this.cmd=null;
this.val=null;
this.gui=null;
this._tinyEngine=null;
this._tinyInstance=null;
this._tinyTheme=null;
this._codePressFrame=null;
this._codePressEngine=null;
}
EditorClickButtonBinding.prototype.toString=function(){
return "[EditorClickButtonBinding]";
};
EditorClickButtonBinding.prototype.onBindingAttach=function(){
EditorClickButtonBinding.superclass.onBindingAttach.call(this);
this._setupEditorButton();
};
EditorClickButtonBinding.prototype._setupEditorButton=function(){
this.cmd=this.getProperty("cmd");
this.val=this.getProperty("val");
this.gui=this.getProperty("gui");
if(this.getProperty("editorcontrol")==false){
this.isEditorControlBinding=false;
}
var _ff4=this.bindingWindow.bindingMap.tinywindow;
var _ff5=this.bindingWindow.bindingMap.codepresswindow;
if(_ff4){
EditorBinding.registerComponent(this,_ff4);
}else{
if(_ff5){
EditorBinding.registerComponent(this,_ff5);
}
}
};
EditorClickButtonBinding.prototype.buildDOMContent=function(){
EditorClickButtonBinding.superclass.buildDOMContent.call(this);
this._buildDesignModeSanitizer();
};
EditorClickButtonBinding.prototype.initializeComponent=function(_ff6,_ff7,_ff8,_ff9){
this._editorBinding=_ff6;
this._tinyEngine=_ff7;
this._tinyInstance=_ff8;
this._tinyTheme=_ff9;
this._setupEditorBookmarking();
};
EditorClickButtonBinding.prototype.initializeSourceEditorComponent=function(_ffa,_ffb,_ffc){
this._editorBinding=_ffa;
this._codePressFrame=_ffb;
this._codePressEngine=_ffc;
};
EditorClickButtonBinding.prototype._buildDesignModeSanitizer=function(){
if(Client.isExplorer){
var img=this.bindingDocument.createElement("img");
img.className="designmodesanitizer";
img.src=Resolver.resolve("${root}/images/blank.png");
img.ondragstart=function(e){
e.preventDefault();
};
this.shadowTree.designmodesanitizer=img;
this.bindingElement.appendChild(img);
}
};
EditorClickButtonBinding.prototype._setupEditorBookmarking=function(){
var _fff=this._editorBinding;
if(_fff!=null){
var self=this;
var _1001={handleEvent:function(e){
switch(e.type){
case DOMEvents.MOUSEDOWN:
if(!_fff.hasBookmark()){
_fff.createBookmark();
}
break;
case DOMEvents.MOUSEUP:
if(self.isEditorSimpleControl){
if(self.popupBinding==null){
if(_fff.hasBookmark()){
_fff.restoreBookmark();
}
}
}
break;
}
}};
DOMEvents.addEventListener(this.bindingElement,DOMEvents.MOUSEDOWN,_1001);
DOMEvents.addEventListener(this.bindingElement,DOMEvents.MOUSEUP,_1001);
}
};
EditorClickButtonBinding.newInstance=function(_1003){
var _1004=DOMUtil.createElementNS(Constants.NS_UI,"ui:clickbutton",_1003);
return UserInterface.registerBinding(_1004,EditorClickButtonBinding);
};
EditorToolBarButtonBinding.prototype=new ToolBarButtonBinding;
EditorToolBarButtonBinding.prototype.constructor=EditorToolBarButtonBinding;
EditorToolBarButtonBinding.superclass=ToolBarButtonBinding.prototype;
function EditorToolBarButtonBinding(){
this.logger=SystemLogger.getLogger("EditorToolBarButtonBinding");
this._editorBinding=null;
this._tinyEngine=null;
this._tinyInstance=null;
this._tinyTheme=null;
this.isEditorSimpleControl=true;
this.isEditorControlBinding=true;
this.cmd=null;
this.val=null;
this.gui=null;
}
EditorToolBarButtonBinding.prototype.toString=function(){
return "[EditorToolBarButtonBinding]";
};
EditorToolBarButtonBinding.prototype.onBindingAttach=function(){
EditorToolBarButtonBinding.superclass.onBindingAttach.call(this);
this._setupEditorButton();
};
EditorToolBarButtonBinding.prototype._setupEditorButton=EditorClickButtonBinding.prototype._setupEditorButton;
EditorToolBarButtonBinding.prototype.buildDOMContent=function(){
EditorToolBarButtonBinding.superclass.buildDOMContent.call(this);
this._buildDesignModeSanitizer();
};
EditorToolBarButtonBinding.prototype.initializeComponent=EditorClickButtonBinding.prototype.initializeComponent;
EditorToolBarButtonBinding.prototype.initializeSourceEditorComponent=EditorClickButtonBinding.prototype.initializeSourceEditorComponent;
EditorToolBarButtonBinding.prototype._buildDesignModeSanitizer=EditorClickButtonBinding.prototype._buildDesignModeSanitizer;
EditorToolBarButtonBinding.prototype._setupEditorBookmarking=EditorClickButtonBinding.prototype._setupEditorBookmarking;
EditorToolBarButtonBinding.newInstance=function(_1005){
var _1006=DOMUtil.createElementNS(Constants.NS_UI,"ui:toolbarbutton",_1005);
return UserInterface.registerBinding(_1006,EditorToolBarButtonBinding);
};
EditorSelectorBinding.prototype=new SelectorBinding;
EditorSelectorBinding.prototype.constructor=EditorSelectorBinding;
EditorSelectorBinding.superclass=SelectorBinding.prototype;
function EditorSelectorBinding(){
this.logger=SystemLogger.getLogger("EditorSelectorBinding");
this._editorBinding=null;
this._tinyEngine=null;
this._tinyInstance=null;
this._tinyTheme=null;
this.BUTTON_IMPLEMENTATION=EditorClickButtonBinding;
this.MENUITEM_IMPLEMENTATION=EditorMenuItemBinding;
this.isFocusable=false;
this.isEditorControlBinding=true;
this.isSearchSelectionEnabled=false;
}
EditorSelectorBinding.prototype.toString=function(){
return "[EditorSelectorBinding]";
};
EditorSelectorBinding.prototype.onBindingAttach=function(){
if(this.getProperty("editorcontrol")==false){
this.isEditorControlBinding=false;
this.BUTTON_IMPLEMENTATION=ClickButtonBinding;
this.MENUITEM_IMPLEMENTATION=MenuItemBinding;
}
var _1007=this.bindingWindow.bindingMap.tinywindow;
EditorBinding.registerComponent(this,_1007);
EditorSelectorBinding.superclass.onBindingAttach.call(this);
};
EditorSelectorBinding.prototype.buildButton=function(){
EditorSelectorBinding.superclass.buildButton.call(this);
this._buttonBinding.isEditorSimpleControl=false;
if(this.isEditorControlBinding==false){
this._buttonBinding.isEditorControlBinding=false;
}
};
EditorSelectorBinding.prototype.initializeComponent=function(_1008,_1009,_100a,theme){
this._editorBinding=_1008;
this._tinyEngine=_1009;
this._tinyInstance=_100a;
this._tinyTheme=theme;
};
EditorSelectorBinding.prototype.handleAction=function(_100c){
EditorSelectorBinding.superclass.handleAction.call(this,_100c);
switch(_100c.type){
case MenuItemBinding.ACTION_COMMAND:
if(this._editorBinding.hasBookmark()){
var self=this;
setTimeout(function(){
if(!self._editorBinding.isDialogMode){
self._editorBinding.restoreBookmark();
}
},0);
}
break;
}
};
EditorSelectorBinding.prototype._grabKeyboard=function(){
};
EditorSelectorBinding.prototype._releaseKeyboard=function(){
};
EditorMenuItemBinding.prototype=new MenuItemBinding;
EditorMenuItemBinding.prototype.constructor=EditorMenuItemBinding;
EditorMenuItemBinding.superclass=MenuItemBinding.prototype;
function EditorMenuItemBinding(){
this.logger=SystemLogger.getLogger("EditorMenuItemBinding");
this.isEditorControlBinding=true;
}
EditorMenuItemBinding.prototype.toString=function(){
return "[EditorMenuItemBinding]";
};
EditorMenuItemBinding.prototype.buildDOMContent=function(){
EditorMenuItemBinding.superclass.buildDOMContent.call(this);
if(Client.isExplorer){
this._buildDesignModeSanitizer();
}
};
EditorMenuItemBinding.prototype._buildDesignModeSanitizer=function(){
if(Client.isExplorer){
var img=this.bindingDocument.createElement("img");
img.className="designmodesanitizer";
img.src=Resolver.resolve("${root}/images/blank.png");
img.ondragstart=function(e){
e.preventDefault();
};
this.shadowTree.designmodesanitizer=img;
this.bindingElement.appendChild(img);
}
};
EditorMenuItemBinding.newInstance=function(_1010){
var _1011=DOMUtil.createElementNS(Constants.NS_UI,"ui:menuitem",_1010);
return UserInterface.registerBinding(_1011,EditorMenuItemBinding);
};
VisualEditorBinding.prototype=new EditorBinding;
VisualEditorBinding.prototype.constructor=VisualEditorBinding;
VisualEditorBinding.superclass=EditorBinding.prototype;
VisualEditorBinding.FUNCTION_CLASSNAME="compositeFunctionWysiwygRepresentation";
VisualEditorBinding.FIELD_CLASSNAME="compositeFieldReferenceWysiwygRepresentation";
VisualEditorBinding.HTML_CLASSNAME="compositeHtmlWysiwygRepresentation";
VisualEditorBinding.ACTION_INITIALIZED="visualeditor initialized";
VisualEditorBinding.DEFAULT_CONTENT="<p><br/></p>";
VisualEditorBinding.URL_DIALOG_CONTENTERROR="${root}/content/dialogs/wysiwygeditor/errors/contenterror.aspx";
VisualEditorBinding.XHTML="<html xmlns=\"http://www.w3.org/1999/xhtml\">\n\t<head>${head}</head>\n\t<body>\n${body}\n\t</body>\n</html>";
VisualEditorBinding.getTinyLessClassName=function(_1012){
var i=0,_1014,_1015="",split=_1012.split(" ");
while((_1014=split[i])!=null){
if(_1014.length>=3&&_1014.substring(0,3)=="mce"){
_1014="";
}else{
if(_1014.length>=14&&_1014.substring(0,14)=="compositemedia"){
_1014="";
}
}
_1015+=_1014;
if(split[i+1]){
_1015+=" ";
}
i++;
}
return _1015;
};
VisualEditorBinding.getStructuredContent=function(_1017){
var _1018=null;
WebServiceProxy.isFaultHandler=false;
var soap=XhtmlTransformationsService.TinyContentToStructuredContent(_1017);
if(soap instanceof SOAPFault){
}else{
_1018=soap.XhtmlFragment;
if(!_1018){
_1018="";
}
}
WebServiceProxy.isFaultHandler=true;
return _1018;
};
VisualEditorBinding.getTinyContent=function(_101a,_101b){
var _101c=null;
if(_101a==null||_101a==""){
_101a=VisualEditorBinding.DEFAULT_CONTENT;
}
WebServiceProxy.isFaultHandler=false;
var soap=XhtmlTransformationsService.StructuredContentToTinyContent(_101a);
if(soap instanceof SOAPFault){
var _101e=soap;
var _101f={handleDialogResponse:function(){
_101b.dispatchAction(Binding.ACTION_VALID);
}};
Dialog.invokeModal(VisualEditorBinding.URL_DIALOG_CONTENTERROR,_101f,_101e);
}else{
_101c=soap.XhtmlFragment;
if(_101c==null){
_101c=new String("");
}
}
WebServiceProxy.isFaultHandler=true;
return _101c;
};
VisualEditorBinding.extractByIndex=function(html,index){
var _1022=null;
var doc=XMLParser.parse(html);
if(doc!=null){
var _1024=new List(doc.documentElement.childNodes);
var _1025=new List();
_1024.each(function(child){
if(child.nodeType==Node.ELEMENT_NODE){
_1025.add(child);
}
});
var _1027=_1025.get(index);
if(_1027==null){
if(Application.isDeveloperMode){
alert("VisualEditorBinding: Bad HTML!"+"\n\n"+html);
}
}else{
if(_1027.hasChildNodes()){
var frag=doc.createDocumentFragment();
while(_1027.hasChildNodes()){
frag.appendChild(_1027.firstChild);
}
doc.removeChild(doc.documentElement);
doc.appendChild(DOMUtil.createElementNS(Constants.NS_XHTML,"ROOT",doc));
doc.documentElement.appendChild(frag);
_1022=DOMSerializer.serialize(doc.documentElement);
_1022=_1022.substring(_1022.indexOf(">")+1,_1022.length);
_1022=_1022.substring(0,_1022.lastIndexOf("<"));
}
}
}
if(_1022==null){
_1022=new String("");
}
return _1022;
};
VisualEditorBinding.isImage=function(_1029){
result=_1029&&_1029.nodeName=="IMG";
return result;
};
VisualEditorBinding.isImageElement=function(_102a){
return VisualEditorBinding.isImage(_102a)&&!VisualEditorBinding.isReservedElement(_102a);
};
VisualEditorBinding.isReservedElement=function(_102b){
if(VisualEditorBinding.isFunctionElement(_102b)){
return true;
}
if(VisualEditorBinding.isFieldElement(_102b)){
return true;
}
if(VisualEditorBinding.isHtmlElement(_102b)){
return true;
}
return false;
};
VisualEditorBinding.isFunctionElement=function(_102c){
return VisualEditorBinding.isImage(_102c)&&CSSUtil.hasClassName(_102c,VisualEditorBinding.FUNCTION_CLASSNAME);
};
VisualEditorBinding.isFieldElement=function(_102d){
return VisualEditorBinding.isImage(_102d)&&CSSUtil.hasClassName(_102d,VisualEditorBinding.FIELD_CLASSNAME);
};
VisualEditorBinding.isHtmlElement=function(_102e){
return VisualEditorBinding.isImage(_102e)&&CSSUtil.hasClassName(_102e,VisualEditorBinding.HTML_CLASSNAME);
};
function VisualEditorBinding(){
this.logger=SystemLogger.getLogger("VisualEditorBinding");
this.action_initialized=VisualEditorBinding.ACTION_INITIALIZED;
this.url_default="${root}/content/misc/editors/visualeditor/visualeditor.aspx";
this._tinyEngine=null;
this._tinyInstance=null;
this._tinyTheme=null;
this.embedableFieldConfiguration=null;
this._head=null;
return this;
}
VisualEditorBinding.prototype.onBindingRegister=function(){
VisualEditorBinding.superclass.onBindingRegister.call(this);
StringBundle.getString("Composite.Web.VisualEditor","Preload.Key");
};
VisualEditorBinding.prototype.onBindingAttach=function(){
var _102f=this.getProperty("embedablefieldstypenames");
if(_102f!=null){
this.embedableFieldConfiguration=VisualEditorFieldGroupConfiguration.getConfiguration(_102f);
}
var _1030=this.getProperty("formattingconfiguration");
if(_1030!=null){
this._url+="?config="+_1030;
}
VisualEditorBinding.superclass.onBindingAttach.call(this);
this.subscribe(BroadcastMessages.TINYMCE_INITIALIZED);
this.subscribe(BroadcastMessages.VISUALEDITOR_HACKED);
};
VisualEditorBinding.prototype.toString=function(){
return "[VisualEditorBinding]";
};
VisualEditorBinding.prototype.handleBroadcast=function(_1031,arg){
VisualEditorBinding.superclass.handleBroadcast.call(this,_1031,arg);
var _1033=this.getContentWindow().bindingMap.tinywindow;
var _1034=_1033.getContentWindow();
switch(_1031){
case BroadcastMessages.VISUALEDITOR_HACKED:
if(arg.broadcastWindow==_1034){
if(this._startContent==" "){
this._startContent=VisualEditorBinding.DEFAULT_CONTENT;
}
this._startContent=this.normalizeToDocument(this._startContent);
this.extractHead(this._startContent);
this._startContent=this.extractBody(this._startContent);
arg.textareaElement.value=VisualEditorBinding.getTinyContent(this._startContent);
this.unsubscribe(BroadcastMessages.VISUALEDITOR_HACKED);
}
break;
case BroadcastMessages.TINYMCE_INITIALIZED:
if(arg.broadcastWindow==_1034){
this._tinyEngine=arg.tinyEngine;
this._tinyInstance=arg.tinyInstance;
this._tinyTheme=arg.tinyTheme;
this._tinyTheme.initC1(this,this._tinyEngine,this._tinyInstance);
this.initializeEditorComponents(_1033);
this._initialize();
this.unsubscribe(BroadcastMessages.TINYMCE_INITIALIZED);
}
break;
}
};
VisualEditorBinding.prototype.initializeEditorComponent=function(_1035){
_1035.initializeComponent(this,this._tinyEngine,this._tinyInstance,this._tinyTheme);
};
VisualEditorBinding.prototype._finalize=function(){
VisualEditorBinding.superclass._finalize.call(this);
this._maybeShowEditor();
};
VisualEditorBinding.prototype._onPageInitialize=function(_1036){
VisualEditorBinding.superclass._onPageInitialize.call(this,_1036);
this._maybeShowEditor();
};
VisualEditorBinding.prototype._maybeShowEditor=function(){
if(this._isFinalized&&this._pageBinding!=null){
this._checksum=this.getCheckSum();
this._pageBinding.showEditor(true);
}
};
VisualEditorBinding.prototype.extractHead=function(html){
this._head=VisualEditorBinding.extractByIndex(html,0);
};
VisualEditorBinding.prototype.extractBody=function(html){
return VisualEditorBinding.extractByIndex(html,1);
};
VisualEditorBinding.prototype.normalizeToDocument=function(_1039){
var _103a=_1039;
if(!this._isNormalizedDocument(_1039)){
_103a=VisualEditorBinding.XHTML.replace("${head}",this._getHeadSection()).replace("${body}",_1039);
}
return _103a;
};
VisualEditorBinding.prototype._isNormalizedDocument=function(_103b){
var _103c=false;
var doc=XMLParser.parse(_103b,true);
if(doc!=null){
if(doc.documentElement.nodeName=="html"){
_103c=true;
}
}
if(Client.isWebKit){
if(_103b.indexOf("<html")!==0){
_103c=false;
}
}
return _103c;
};
VisualEditorBinding.prototype._getHeadSection=function(){
return this._head!=null?this._head:new String("");
};
VisualEditorBinding.prototype.handleCommand=function(cmd,gui,val){
var _1041=VisualEditorBinding.superclass.handleCommand.call(this,cmd,gui,val);
if(!_1041){
try{
this._tinyInstance.execCommand(cmd,gui,val);
this.checkForDirty();
}
catch(e){
SystemDebug.stack(arguments);
}
_1041=true;
}
return _1041;
};
VisualEditorBinding.prototype.handleContextMenu=function(e){
var _1043=DOMEvents.getTarget(e);
this._popupBinding.configure(this._tinyInstance,this._tinyEngine,_1043);
VisualEditorBinding.superclass.handleContextMenu.call(this,e);
};
VisualEditorBinding.prototype.getEditorWindow=function(){
return DOMUtil.getParentWindow(this.getEditorDocument());
};
VisualEditorBinding.prototype.getEditorDocument=function(){
return this._tinyInstance.getDoc();
};
VisualEditorBinding.prototype.getEditorPopupBinding=function(){
return app.bindingMap.visualeditorpopup;
};
VisualEditorBinding.prototype.createBookmark=function(){
this._bookmark=this._tinyInstance.selection.getBookmark(true);
};
VisualEditorBinding.prototype.restoreBookmark=function(){
if(this.hasBookmark()){
this._tinyInstance.selection.moveToBookmark(this._bookmark);
this.deleteBookmark();
}
};
VisualEditorBinding.prototype.hasBookmark=function(){
return this._bookmark!=null;
};
VisualEditorBinding.prototype.deleteBookmark=function(){
this._bookmark=null;
};
VisualEditorBinding.prototype.resetUndoRedo=function(){
this._tinyInstance.undoManager.clear();
this._tinyInstance.undoManager.add();
if(this._pageBinding!=null){
this._pageBinding.updateUndoBroadcasters();
}
};
VisualEditorBinding.prototype.validate=function(){
return this._pageBinding.validate();
};
VisualEditorBinding.prototype.getValue=function(){
return this._pageBinding.getContent();
};
VisualEditorBinding.prototype.setValue=function(value){
if(this._isFinalized){
if(Binding.exists(this._pageBinding)){
this._pageBinding.setContent(value);
}
}else{
if(this._startContent==null){
this._startContent=value;
}
}
};
VisualEditorBinding.prototype.getResult=function(){
};
VisualEditorBinding.prototype.clean=function(){
VisualEditorBinding.superclass.clean.call(this);
if(this._pageBinding!=null){
this._pageBinding.clean();
}
};
VisualEditorBinding.prototype.focus=function(){
VisualEditorBinding.superclass.focus.call(this);
if(Client.isExplorer&&this._tinyInstance){
this._tinyInstance.selection.setRng(this._tinyInstance.selection.getRng());
}
};
VisualEditorBinding.prototype.setResult=function(_1045){
};
VisualEditorPopupBinding.prototype=new EditorPopupBinding;
VisualEditorPopupBinding.prototype.constructor=VisualEditorPopupBinding;
VisualEditorPopupBinding.superclass=EditorPopupBinding.prototype;
VisualEditorPopupBinding.CONTENT_TEMPLATE="wysiwygeditor/popup.xml";
function VisualEditorPopupBinding(){
this.logger=SystemLogger.getLogger("VisualEditorPopupBinding");
this.tinyElement=null;
this.tinyEngine=null;
this.tinyInstance=null;
this.hasSelection=false;
}
VisualEditorPopupBinding.prototype.toString=function(){
return "[VisualEditorPopupBinding]";
};
VisualEditorPopupBinding.prototype.configure=function(_1046,_1047,_1048){
var _1049=this.editorBinding.hasSelection();
this.tinyInstance=_1046;
this.tinyEngine=_1047;
this.tinyElement=_1048;
this.hasSelection=_1049;
VisualEditorPopupBinding.superclass.configure.call(this);
};
VisualEditorPopupBinding.prototype.handleCommand=function(cmd,gui,val){
this.editorBinding.blurEditor();
this.editorBinding.handleCommand(cmd,gui?gui:false,val);
};
VisualEditorPopupBinding.prototype._configure=function(){
if(this._isEditorPopupBindingInitialized){
this._configureLinkGroup();
this._configureInsertGroup();
this._configureTableGroup();
this._configureRenderingGroup();
this._configureFieldGroup();
this._configureImageGroup();
this._configureSpellCheckGroup();
}
};
VisualEditorPopupBinding.prototype._configureLinkGroup=function(){
var _104d=false;
if(this.hasSelection){
_104d=true;
}else{
if(this.tinyElement){
if(this.tinyElement.nodeName=="A"&&!this.tinyElement.getAttribute("name")){
_104d=true;
}else{
if(this.tinyElement.nodeName=="IMG"){
_104d=true;
}
}
}
}
if(_104d){
this._showMenuGroups("link");
this._configureLinkGroupDetails();
}else{
this._hideMenuGroups("link");
}
};
VisualEditorPopupBinding.prototype._configureLinkGroupDetails=function(){
var _104e=this.getMenuItemForCommand("compositeInsertLink");
var _104f=this.getMenuItemForCommand("unlink");
var _1050=this.editorBinding.getButtonForCommand("compositeInsertLink");
var _1051=this.editorBinding.getButtonForCommand("unlink");
_104f.setDisabled(_1051.isDisabled);
if(_104f.isDisabled){
_104e.setLabel("${string:Composite.Web.VisualEditor:ContextMenu.LabelLink}");
}else{
_104e.setLabel("${string:Composite.Web.VisualEditor:ContextMenu.LabelLinkProperties}");
}
};
VisualEditorPopupBinding.prototype._configureInsertGroup=function(){
var _1052=this.editorBinding.embedableFieldConfiguration;
var item=this.getMenuItemForCommand("compositeInsertFieldParent");
var doc=this.bindingDocument;
if(item){
item.dispose();
}
item=MenuItemBinding.newInstance(doc);
item.setLabel("${string:Composite.Web.VisualEditor:ContextMenu.LabelField}");
item.image="${icon:fields}";
item.imageDisabled="${icon:fields-disabled}";
item.setProperty("cmd","compositeInsertFieldParent");
if(_1052){
var _1055=_1052.getGroupNames();
if(_1055.hasEntries()){
var popup=MenuPopupBinding.newInstance(doc);
var body=popup.add(MenuBodyBinding.newInstance(doc));
var group=body.add(MenuGroupBinding.newInstance(doc));
_1055.each(function(_1059){
var _105a=_1052.getFieldNames(_1059);
_105a.each(function(_105b){
var i=group.add(MenuItemBinding.newInstance(doc));
i.setLabel(_105b);
i.setImage("${icon:field}");
i.setProperty("cmd","compositeInsertField");
i.setProperty("val",_1059+":"+_105b);
group.add(i);
});
});
item.add(popup);
}
}else{
item.disable();
}
this._menuGroups["insertions"].getFirst().add(item);
item.attachRecursive();
this._menuItems["compositeInsertFieldParent"]=item;
};
VisualEditorPopupBinding.prototype._configureTableGroup=function(){
var _105d=this.tinyInstance.dom.getParent(this.tinyElement,"table,td");
var _105e=null;
var _105f=null;
if(_105d){
if(_105d.nodeName=="TD"){
_105e=_105d.getAttribute("colspan");
_105f=_105d.getAttribute("rowspan");
}
this._menuItems["mceTableSplitCells"].setDisabled(_105e=="1"&&_105f=="1");
this._menuItems["mceTablePasteRowBefore"].setDisabled(this.tinyInstance.tableRowClipboard==null);
this._menuItems["mceTablePasteRowAfter"].setDisabled(this.tinyInstance.tableRowClipboard==null);
}
if(_105d){
this._showMenuGroups("table");
}else{
this._hideMenuGroups("table");
}
};
VisualEditorPopupBinding.prototype._configureRenderingGroup=function(){
if(VisualEditorBinding.isFunctionElement(this.tinyElement)){
this._showMenuGroups("rendering");
}else{
this._hideMenuGroups("rendering");
}
};
VisualEditorPopupBinding.prototype._configureFieldGroup=function(){
if(VisualEditorBinding.isFieldElement(this.tinyElement)){
this._showMenuGroups("field");
}else{
this._hideMenuGroups("field");
}
};
VisualEditorPopupBinding.prototype._configureImageGroup=function(){
if(VisualEditorBinding.isImageElement(this.tinyElement)){
this._showMenuGroups("image");
}else{
this._hideMenuGroups("image");
}
};
VisualEditorPopupBinding.prototype._configureSpellCheckGroup=function(){
if(Client.isFirefox){
this._showMenuGroups("spellcheck");
}else{
this._hideMenuGroups("spellcheck");
}
};
VisualEditorFormattingConfiguration._configurations=new Map();
VisualEditorFormattingConfiguration._options=null;
VisualEditorFormattingConfiguration.getConfiguration=function(_1060){
var _1061=VisualEditorFormattingConfiguration._configurations;
if(!_1061.has(_1060)){
_1061.set(_1060,new VisualEditorFormattingConfiguration());
}
return _1061.get(_1060);
};
VisualEditorFormattingConfiguration._getOptions=function(){
if(VisualEditorFormattingConfiguration._options==null){
var p="Composite.Web.VisualEditor";
VisualEditorFormattingConfiguration._options={"p":StringBundle.getString(p,"FormatSelector.LabelParagraph"),"address":StringBundle.getString(p,"FormatSelector.LabelAddress"),"blockquote":StringBundle.getString(p,"FormatSelector.LabelBlockQuote"),"div":StringBundle.getString(p,"FormatSelector.LabelDivision"),"h1":StringBundle.getString(p,"FormatSelector.LabelHeading1"),"h2":StringBundle.getString(p,"FormatSelector.LabelHeading2"),"h3":StringBundle.getString(p,"FormatSelector.LabelHeading3"),"h4":StringBundle.getString(p,"FormatSelector.LabelHeading4"),"h5":StringBundle.getString(p,"FormatSelector.LabelHeading5"),"h6":StringBundle.getString(p,"FormatSelector.LabelHeading6")};
}
return VisualEditorFormattingConfiguration._options;
};
function VisualEditorFormattingConfiguration(_1063){
this._options=VisualEditorFormattingConfiguration._getOptions();
}
VisualEditorFormattingConfiguration.prototype.getFormattingOptions=function(){
return this._options;
};
VisualEditorFieldGroupConfiguration._configurations=new Map();
VisualEditorFieldGroupConfiguration.getConfiguration=function(_1064){
var _1065=null;
var _1066=VisualEditorFieldGroupConfiguration._configurations;
if(!_1066.has(_1064)){
_1066.set(_1064,new VisualEditorFieldGroupConfiguration(EditorConfigurationService.GetEmbedableFieldGroupConfigurations(_1064)));
}
return _1066.get(_1064);
};
function VisualEditorFieldGroupConfiguration(_1067){
var _1068=new Map();
new List(_1067).each(function(group){
var map=new Map();
new List(group.Fields).each(function(field){
map.set(field.Name,{xhtml:field.XhtmlRepresentation,xml:field.XhtmlRepresentation});
});
_1068.set(group.GroupName,map);
});
this._groups=_1068;
}
VisualEditorFieldGroupConfiguration.prototype.getGroupNames=function(){
return this._groups.toList(true);
};
VisualEditorFieldGroupConfiguration.prototype.getFieldNames=function(_106c){
return this._groups.get(_106c).toList(true);
};
VisualEditorFieldGroupConfiguration.prototype.getTinyMarkup=function(_106d,_106e){
return this._groups.get(_106d).get(_106e).xhtml;
};
VisualEditorFieldGroupConfiguration.prototype.getStructuredMarkup=function(name){
return this._groups.get(groupname).get(fieldname).xml;
};
VisualMultiEditorBinding.prototype=new VisualEditorBinding;
VisualMultiEditorBinding.prototype.constructor=VisualMultiEditorBinding;
VisualMultiEditorBinding.superclass=VisualEditorBinding.prototype;
function VisualMultiEditorBinding(){
this.logger=SystemLogger.getLogger("VisualMultiEditorBinding");
this._hasPlaceHolders=false;
this._textareaname=null;
this._textareas=null;
this._heads=null;
return this;
}
VisualMultiEditorBinding.prototype.toString=function(){
return "[VisualMultiEditorBinding]";
};
VisualMultiEditorBinding.prototype._maybeShowEditor=function(){
if(this._hasPlaceHolders){
VisualMultiEditorBinding.superclass._maybeShowEditor.call(this);
}
};
VisualMultiEditorBinding.prototype._setup=function(){
this._heads=new Map();
var _1070=this.getDescendantElementsByLocalName("textarea");
while(_1070.hasNext()){
var _1071=_1070.getNext();
if(_1071.getAttribute("selected")=="true"){
this._startContent=_1071.value;
this._textareaname=_1071.getAttribute("placeholderid");
}
}
if(this._startContent==null){
this._startContent=VisualEditorBinding.DEFAULT_CONTENT;
}
};
VisualMultiEditorBinding.prototype._initialize=function(){
var self=this;
this._registerWithDataManager("generated"+KeyMaster.getUniqueKey());
var _1073=this.getContentWindow().bindingMap.templatetree;
_1073.addActionListener(TreeBinding.ACTION_SELECTIONCHANGED,{handleAction:function(_1074){
var _1075=_1073.getSelectedTreeNodeBindings().getFirst();
self._placeHolderSelected(_1075.textareaname);
_1074.consume();
}});
_1073.addActionListener(Binding.ACTION_FOCUSED,{handleAction:function(_1076){
self._activateEditor(false);
}});
this._updatePlaceHolders();
var _1077=this.getContentWindow().bindingMap.toolsplitter;
_1077.unCollapse();
VisualMultiEditorBinding.superclass._initialize.call(this);
};
VisualMultiEditorBinding.prototype._updatePlaceHolders=function(){
templatetree=this.getContentWindow().bindingMap.templatetree;
var _1078=this.getDescendantElementsByLocalName("textarea");
templatetree.empty();
if(_1078.hasEntries()){
this._hasPlaceHolders=true;
this._parsePlaceHolders(_1078);
if(this._isFinalized){
this._pageBinding.showEditor(true);
}
}else{
this._hasPlaceHolders=false;
this._noPlaceHolders();
if(this._isFinalized){
this._pageBinding.showEditor(false);
}
}
};
VisualMultiEditorBinding.prototype._parsePlaceHolders=function(_1079){
this._textareas=new Map();
while(_1079.hasNext()){
var _107a=_1079.getNext();
var _107b=_107a.getAttribute("placeholderid");
this._textareas.set(_107b,{placeholderid:_107b,placeholdername:_107a.getAttribute("placeholdername"),placeholdermarkup:_107a.value,textareaelement:_107a,isSelected:_107a.getAttribute("selected")=="true"});
}
var _107c=new Map();
this._textareas.each(function(name,_107e){
var _107f=templatetree.add(TreeNodeBinding.newInstance(templatetree.bindingDocument));
_107f.setLabel(_107e.placeholdername);
_107f.setImage("${icon:placeholder}");
_107f.setProperty("placeholder",true);
_107f.textareaname=name;
_107c.set(_107e.placeholdername,_107f);
if(_107e.isSelected){
selected=_107f;
}
});
templatetree.attachRecursive();
if(selected!=null){
var _1080=this._textareas.get(selected.textareaname);
this._textareaname=selected.textareaname;
this._placeholdername=_1080.placeholdername;
this._setContentFromPlaceHolder(selected.textareaname);
selected.focus();
}
};
VisualMultiEditorBinding.prototype._noPlaceHolders=function(){
var _1081=this.getContentWindow().bindingMap.templatetree;
var _1082=_1081.add(TreeNodeBinding.newInstance(_1081.bindingDocument));
_1082.setLabel(StringBundle.getString("Composite.Web.VisualEditor","TemplateTree.NoTemplateWarning"));
_1082.setImage("${icon:warning}");
_1082.attach();
var _1083=this.getContentWindow().bindingMap.statusbar;
_1083.setPlaceHolderName(null);
};
VisualMultiEditorBinding.prototype._setContentFromPlaceHolder=function(name){
if(this._isFinalized==true){
var _1085=this._textareas.get(name);
var _1086=_1085.placeholdermarkup;
this.setValue(this.normalizeToDocument(_1086));
this.resetUndoRedo();
}
};
VisualMultiEditorBinding.prototype._placeHolderSelected=function(_1087){
if(this._isFinalized==true){
if(this._textareaname&&this._textareas.has(this._textareaname)){
this._textareas.get(this._textareaname).placeholdermarkup=this.getValue();
}
}
this._textareaname=_1087;
this._placeholdername=this._textareas.get(this._textareaname).placeholdername;
var _1088=this.getContentWindow().bindingMap.statusbar;
_1088.setPlaceHolderName(this._placeholdername);
if(this._isFinalized==true){
var self=this;
Application.lock(self);
setTimeout(function(){
self._setContentFromPlaceHolder(_1087);
Application.unlock(self);
},0);
}
};
VisualMultiEditorBinding.prototype.extractHead=function(html){
VisualMultiEditorBinding.superclass.extractHead.call(this,html);
this._heads.set(this._textareaname,this._head);
};
VisualMultiEditorBinding.prototype._getHeadSection=function(){
var _108b="";
if(this._heads.has(this._textareaname)){
_108b=this._heads.get(this._textareaname);
if(_108b==null){
_108b=new String("");
}
}
return _108b;
};
VisualMultiEditorBinding.prototype.manifest=function(){
if(this._textareas!=null&&this._textareas.hasEntries()){
this._textareas.get(this._textareaname).placeholdermarkup=this.getValue();
this._textareas.each(function(name,_108d){
_108d.textareaelement.value=_108d.placeholdermarkup;
});
}
};
VisualMultiEditorBinding.prototype.updateElement=function(_108e,_108f){
var _1090=_108e.getElementsByTagName("div").item(0);
var _1091=_108f.getElementsByTagName("div").item(0);
var _1092=new List(_1090.getElementsByTagName("textarea"));
var _1093=new List(_1091.getElementsByTagName("textarea"));
var _1094=false;
if(_1092.getLength()!=_1093.getLength()){
_1094=true;
}else{
var index=0;
_1092.each(function(_1096,index){
var _1098=_1093.get(index);
var newid=_1096.getAttribute("placeholderid");
var oldid=_1098.getAttribute("placeholderid");
var _109b=_1096.getAttribute("placeholdername");
var _109c=_1098.getAttribute("placeholdername");
if(newid!=oldid||_109b!=_109c){
_1094=true;
}
return !_1094;
});
}
if(_1094){
var html=null;
if(_1090.innerHTML!=null){
html=_1090.innerHTML;
}else{
html=DOMSerializer.serialize(_1090);
html=html.substring(html.indexOf(">")+1,html.length);
html=html.substring(0,html.lastIndexOf("<"));
}
var div=this.bindingElement.getElementsByTagName("div").item(0);
if(div!=null){
div.innerHTML=html;
}
this._updatePlaceHolders();
}
return true;
};
VisualMultiTemplateEditorBinding.prototype=new VisualMultiEditorBinding;
VisualMultiTemplateEditorBinding.prototype.constructor=VisualMultiTemplateEditorBinding;
VisualMultiTemplateEditorBinding.superclass=VisualMultiEditorBinding.prototype;
function VisualMultiTemplateEditorBinding(){
this.logger=SystemLogger.getLogger("VisualMultiTemplateEditorBinding");
this._oldtextareas=null;
return this;
}
VisualMultiTemplateEditorBinding.prototype.toString=function(){
return "[VisualMultiTemplateEditorBinding]";
};
VisualMultiTemplateEditorBinding.prototype.onBindingAttach=function(){
VisualMultiTemplateEditorBinding.superclass.onBindingAttach.call(this);
this._oldtextareas=new Map();
};
VisualMultiTemplateEditorBinding.prototype._initialize=function(){
var self=this;
var _10a0=this.getDescendantBindingByLocalName("selector");
_10a0.attach();
this._populateTemplateSelector();
var _10a1=this.getContentWindow().bindingMap.templateselector;
_10a1.addActionListener(SelectorBinding.ACTION_SELECTIONCHANGED,{handleAction:function(){
setTimeout(function(){
self._onTemplateSelectionChanged();
},0);
}});
this.getContentWindow().bindingMap.templatetoolbar.show();
VisualMultiTemplateEditorBinding.superclass._initialize.call(this);
};
VisualMultiTemplateEditorBinding.prototype._populateTemplateSelector=function(){
var _10a2=this.getDescendantBindingByLocalName("selector");
var _10a3=this.getContentWindow().bindingMap.templateselector;
_10a2.selections.each(function(_10a4){
_10a4.imageProfile=new ImageProfile({image:"${icon:page-template-template}"});
});
_10a3.populateFromList(_10a2.selections);
};
VisualMultiTemplateEditorBinding.prototype._onTemplateSelectionChanged=function(){
var _10a5=this.getDescendantBindingByLocalName("selector");
var _10a6=this.getContentWindow().bindingMap.templateselector;
_10a5.selectByValue(_10a6.getValue());
_10a5.dispatchAction(PageBinding.ACTION_DOPOSTBACK);
this.checkForDirty(true);
};
VisualMultiTemplateEditorBinding.prototype._parsePlaceHolders=function(_10a7){
var nev=this._textareas;
var old=this._oldtextareas;
if(nev!=null){
nev.each(function(key,value){
old.set(key,value);
});
}
this._textareas=new Map();
function compute(_10ac,_10ad){
var _10ae=_10ad;
if(old.has(_10ac)){
_10ae=old.get(_10ac).placeholdermarkup;
}
return _10ae;
}
while(_10a7.hasNext()){
var _10af=_10a7.getNext();
var _10b0=_10af.getAttribute("placeholderid");
this._textareas.set(_10b0,{placeholderid:_10b0,placeholdername:_10af.getAttribute("placeholdername"),placeholdermarkup:compute(_10b0,_10af.value),textareaelement:_10af,isSelected:_10af.getAttribute("selected")=="true"});
}
var _10b1=null;
var _10b2=this.getContentWindow().bindingMap.templatetree;
var _10b3=new Map();
this._textareas.each(function(name,_10b5){
var _10b6=_10b2.add(TreeNodeBinding.newInstance(_10b2.bindingDocument));
_10b6.setLabel(_10b5.placeholdername);
_10b6.setImage("${icon:placeholder}");
_10b6.setProperty("placeholder",true);
_10b6.textareaname=name;
_10b3.set(_10b5.placeholdername,_10b6);
if(_10b5.isSelected){
_10b1=_10b6;
}
});
_10b2.attachRecursive();
if(_10b1!=null){
var _10b7=true;
if(this._oldtextareas.hasEntries()){
_10b7=false;
var map=new Map();
this._textareas.each(function(id,_10ba){
map.set(_10ba.placeholdername,true);
});
if(!map.has(this._placeholdername)){
_10b7=true;
}
}
if(_10b7){
var _10bb=this._textareas.get(_10b1.textareaname);
this._textareaname=_10b1.textareaname;
this._placeholdername=_10bb.placeholdername;
this._setContentFromPlaceHolder(_10b1.textareaname);
_10b1.focus();
}else{
var _10bc=_10b3.get(this._placeholdername);
this._textareaname=_10bc.textareaname;
_10bc.focus();
}
}
};
VisualMultiTemplateEditorBinding.prototype.updateElement=function(_10bd,_10be){
var _10bf=_10bd.getElementsByTagName("ui:selector").item(0);
var _10c0=_10be.getElementsByTagName("ui:selector").item(0);
var _10c1=false;
if(_10bf!=null&&_10c0!=null){
var _10c2=new List(_10bf.getElementsByTagName("ui:selection"));
var _10c3=new List(_10c0.getElementsByTagName("ui:selection"));
if(_10c2.getLength()!=_10c3.getLength()){
_10c1=true;
}else{
_10c2.each(function(_10c4,index){
var _10c6=_10c4.getAttribute("value");
var _10c7=_10c3.get(index).getAttribute("value");
if(_10c6!=_10c7){
_10c1=true;
}
return !_10c1;
});
}
}
if(_10c1){
var div=this.bindingElement.getElementsByTagName("div").item(1);
this.bindingWindow.DocumentManager.detachBindings(div,true);
div.innerHTML=DOMSerializer.serialize(_10bf);
this.bindingWindow.DocumentManager.attachBindings(div);
this._populateTemplateSelector();
}
return VisualMultiTemplateEditorBinding.superclass.updateElement.call(this,_10bd,_10be);
};
CodeMirrorEditorPopupBinding.prototype=new EditorPopupBinding;
CodeMirrorEditorPopupBinding.prototype.constructor=CodeMirrorEditorPopupBinding;
CodeMirrorEditorPopupBinding.superclass=EditorPopupBinding.prototype;
CodeMirrorEditorPopupBinding.CONTENT_TEMPLATE="sourceeditor/popup.xml";
function CodeMirrorEditorPopupBinding(){
this.logger=SystemLogger.getLogger("CodeMirrorEditorPopupBinding");
this._editorBinding=null;
this._codePressFrame=null;
this._codePressEngine=null;
}
CodeMirrorEditorPopupBinding.prototype.toString=function(){
return "[CodeMirrorEditorPopupBinding]";
};
CodeMirrorEditorPopupBinding.prototype.configure=function(_10c9,frame,_10cb){
this._editorBinding=_10c9;
this._codePressFrame=frame;
this._codePressEngine=_10cb;
WysiwygEditorPopupBinding.superclass.configure.call(this);
};
CodeMirrorEditorPopupBinding.prototype._configure=function(){
switch(this._editorBinding.syntax){
case SourceEditorBinding.syntax.XML:
case SourceEditorBinding.syntax.XSL:
case SourceEditorBinding.syntax.HTML:
this._showMenuGroups("xml");
break;
default:
this._hideMenuGroups("xml");
break;
}
};
CodeMirrorEditorPopupBinding.prototype.handleCommand=function(cmd,gui,val){
var win=this._editorBinding.getContentWindow();
var but=null;
switch(cmd){
case "compositeInsert":
but=win.bindingMap.insertbutton;
break;
case "compositeFormat":
but=win.bindingMap.formatbutton;
break;
}
if(but!=null){
but.handleCommand(cmd,gui,val);
}
};
CodeMirrorEditorBinding.prototype=new EditorBinding;
CodeMirrorEditorBinding.prototype.constructor=CodeMirrorEditorBinding;
CodeMirrorEditorBinding.superclass=EditorBinding.prototype;
CodeMirrorEditorBinding.ACTION_INITIALIZED="codemirroreditor initialized";
CodeMirrorEditorBinding.syntax={TEXT:"text",XML:"xml",XSL:"xsl",HTML:"html",CSS:"css",JAVASCRIPT:"js",CSHARP:"cs",CSHTML:"cshtml",SQL:"sql"};
function CodeMirrorEditorBinding(){
this.logger=SystemLogger.getLogger("CodeMirrorEditorBinding");
this.action_initialized=CodeMirrorEditorBinding.ACTION_INITIALIZED;
this.url_default="${root}/content/misc/editors/codemirroreditor/codemirroreditor.aspx";
this._editorWindowBinding=null;
this._codemirrorWindow=null;
this._codemirrorEditor=null;
this._codemirrorWrapperElement=null;
this.syntax=new String(CodeMirrorEditorBinding.syntax.TEXT);
this._isPlainEditMode=false;
this.isFocusable=true;
this._isEmbedded=false;
this._hasStrictValidation=false;
this._validator=null;
this._startContent="";
return this;
}
CodeMirrorEditorBinding.prototype.toString=function(){
return "[CodeMirrorEditorBinding]";
};
CodeMirrorEditorBinding.prototype.onBindingRegister=function(){
CodeMirrorEditorBinding.superclass.onBindingRegister.call(this);
StringBundle.getString("Composite.Web.SourceEditor","Preload.Key");
};
CodeMirrorEditorBinding.prototype.onBindingAttach=function(){
this.subscribe(BroadcastMessages.CODEMIRROR_LOADED);
if(this.getProperty("embedded")==true){
this._isEmbedded=true;
}
var _10d1=this.getProperty("validate");
if(_10d1==true){
this._hasStrictValidation=true;
}
var _10d2=this.getProperty("validator");
if(_10d2!=null){
this._validator=_10d2;
}
this.syntax=this.getProperty("syntax");
if(this.getProperty("debug")){
this._startContent=Templates.getPlainText("sourcecodeeditor/"+this.syntax+".txt");
}
CodeMirrorEditorBinding.superclass.onBindingAttach.call(this);
};
CodeMirrorEditorBinding.prototype.handleBroadcast=function(_10d3,arg){
CodeMirrorEditorBinding.superclass.handleBroadcast.call(this,_10d3,arg);
switch(_10d3){
case BroadcastMessages.CODEMIRROR_LOADED:
var _10d5=this.getContentWindow().bindingMap.codemirrorwindow;
if(_10d5!=null){
var _10d6=_10d5.getContentWindow();
if(arg.broadcastWindow==_10d6){
this._codemirrorWindow=_10d6;
this._codemirrorEditor=arg.codemirrorEditor;
this._codemirrorWrapperElement=arg.codemirrorEditor.getWrapperElement();
switch(this.syntax){
case CodeMirrorEditorBinding.syntax.XML:
this._codemirrorEditor.setOption("mode","application/xml");
break;
case CodeMirrorEditorBinding.syntax.XSL:
case CodeMirrorEditorBinding.syntax.HTML:
this._codemirrorEditor.setOption("mode","text/html");
break;
case CodeMirrorEditorBinding.syntax.CSS:
this._codemirrorEditor.setOption("mode","text/css");
break;
case CodeMirrorEditorBinding.syntax.CSHARP:
case CodeMirrorEditorBinding.syntax.CSHTML:
this._codemirrorEditor.setOption("mode","text/x-csharp");
break;
case CodeMirrorEditorBinding.syntax.JAVASCRIPT:
this._codemirrorEditor.setOption("mode","text/javascript");
break;
case CodeMirrorEditorBinding.syntax.SQL:
this._codemirrorEditor.setOption("mode","");
case CodeMirrorEditorBinding.syntax.TEXT:
this._codemirrorEditor.setOption("mode","");
break;
}
this.initializeEditorComponents(_10d5);
var self=this;
this._codemirrorEditor.setOption("onChange",function(e){
self.checkForDirty();
});
this._codemirrorEditor.setOption("onFocus",function(e){
self._activateEditor(true);
});
if(this._pageBinding!=null){
this._initialize();
}
this.unsubscribe(_10d3);
}
}
break;
}
};
CodeMirrorEditorBinding.prototype._onPageInitialize=function(_10da){
CodeMirrorEditorBinding.superclass._onPageInitialize.call(this,_10da);
if(Client.isExplorer||this._codemirrorEditor!=null){
this._initialize();
}
};
CodeMirrorEditorBinding.prototype._activateEditor=function(_10db){
if(_10db!=this._isActivated||this.isFocusable&&!this.isFocused){
this._isActivated=_10db;
EditorBinding.isActive=_10db;
var _10dc=this.getContentWindow().standardEventHandler;
if(_10db){
_10dc.enableNativeKeys(true);
}else{
_10dc.disableNativeKeys();
}
var _10dd=this.getContentWindow().bindingMap.broadcasterIsActive;
if(_10dd!=null){
if(_10db){
_10dd.enable();
}else{
_10dd.disable();
}
}
if(_10db){
this.focus();
var _10de=this._codemirrorEditor;
}else{
this.blur();
}
}
};
CodeMirrorEditorBinding.prototype.handleCommand=function(cmd,gui,val){
var _10e2=CodeMirrorEditorBinding.superclass.handleCommand.call(this,cmd,val);
return _10e2;
};
CodeMirrorEditorBinding.prototype._finalize=function(){
this.setContent(this._startContent);
CodeMirrorEditorBinding.superclass._finalize.call(this);
};
CodeMirrorEditorBinding.prototype.initializeEditorComponent=function(_10e3){
_10e3.initializeSourceEditorComponent(this,this._codemirrorEditor);
};
CodeMirrorEditorBinding.prototype.clean=function(){
CodeMirrorEditorBinding.superclass.clean.call(this);
this.getContentWindow().bindingMap.editorpage.clean();
};
CodeMirrorEditorBinding.prototype.handleContextMenu=function(e){
};
CodeMirrorEditorBinding.prototype.getEditorPopupBinding=function(){
return top.app.bindingMap.sourcecodeeditorpopup;
};
CodeMirrorEditorBinding.prototype.getEditorWindow=function(){
return this._codemirrorWindow;
};
CodeMirrorEditorBinding.prototype.getEditorDocument=function(){
if(this._codemirrorWrapperElement!=null){
return this._codemirrorWrapperElement.ownerDocument;
}
return null;
};
CodeMirrorEditorBinding.prototype.setContent=function(_10e5){
if(!this._isFinalized){
if(_10e5!=this._startContent){
this._startContent=_10e5;
}
}
if(this.isInitialized&&this.getContentWindow().bindingMap!=null){
this.getContentWindow().bindingMap.editorpage.setContent(_10e5);
this.resetUndoRedo();
this._checksum=this.getCheckSum();
}
return true;
};
CodeMirrorEditorBinding.prototype.getContent=function(){
var _10e6=this.getContentWindow().bindingMap.editorpage.getContent();
return _10e6?_10e6:"";
};
CodeMirrorEditorBinding.prototype.resetUndoRedo=function(){
};
CodeMirrorEditorBinding.prototype.cover=function(_10e7){
if(this._pageBinding!=null){
this._pageBinding.cover(_10e7);
}
};
CodeMirrorEditorBinding.prototype.updateElement=function(_10e8){
if(_10e8!=null&&this.shadowTree.dotnetinput!=null){
var value=_10e8.getAttribute("value");
if(value!=null&&value!=this.shadowTree.dotnetinput.value){
this.setValue(decodeURIComponent(value));
}
}
return true;
};
CodeMirrorEditorBinding.prototype.blurEditor=function(){
};
CodeMirrorEditorBinding.prototype.validate=function(){
var _10ea=true;
var _10eb=this.getContent();
if(this._validator!=null){
_10ea=Validator.validateInformed(_10eb,this._validator);
}else{
switch(this.syntax){
case CodeMirrorEditorBinding.syntax.XML:
case CodeMirrorEditorBinding.syntax.XSL:
case CodeMirrorEditorBinding.syntax.HTML:
_10ea=XMLParser.isWellFormedDocument(_10eb,true);
if(_10ea==true&&this._hasStrictValidation){
switch(this.syntax){
case CodeMirrorEditorBinding.syntax.HTML:
_10ea=this._isValidHTML(_10eb);
break;
}
}
break;
}
}
return _10ea;
};
CodeMirrorEditorBinding.prototype._isValidHTML=function(xml){
var _10ed=true;
var doc=XMLParser.parse(xml);
var _10ef=new List();
if(doc!=null){
var root=doc.documentElement;
if(root.nodeName!="html"){
_10ef.add("MissingHtml");
}
if(root.namespaceURI!=Constants.NS_XHTML){
_10ef.add("NamespaceURI");
}
var head=null,body=null;
var _10f3=new List(root.childNodes);
while(_10f3.hasNext()){
var child=_10f3.getNext();
if(child.nodeType==Node.ELEMENT_NODE){
switch(child.nodeName){
case "head":
if(head!=null){
_10ef.add("MultipleHead");
}
if(body!=null){
_10ef.add("HeadBodyIndex");
}
head=child;
break;
case "body":
if(body!=null){
_10ef.add("MultipleBody");
}
body=child;
break;
}
}
}
if(head==null){
_10ef.add("MissingHead");
}
if(body==null){
_10ef.add("MissingBody");
}
}
if(_10ef.hasEntries()){
_10ed=false;
if(Client.isWebKit){
alert(StringBundle.getString("Composite.Web.SourceEditor","Invalid.HTML."+_10ef.getFirst()));
}else{
Dialog.error(StringBundle.getString("Composite.Web.SourceEditor","Invalid.HTML.DialogTitle"),StringBundle.getString("Composite.Web.SourceEditor","Invalid.HTML."+_10ef.getFirst()));
}
}
return _10ed;
};
CodeMirrorEditorBinding.prototype._isValidXSL=function(){
return true;
};
CodeMirrorEditorBinding.prototype.getValue=CodeMirrorEditorBinding.prototype.getContent;
CodeMirrorEditorBinding.prototype.setValue=CodeMirrorEditorBinding.prototype.setContent;
CodeMirrorEditorBinding.prototype.getResult=CodeMirrorEditorBinding.prototype.getContent;
CodeMirrorEditorBinding.prototype.setResult=CodeMirrorEditorBinding.prototype.setContent;
CodeMirrorEditorBinding.prototype.createBookmark=function(){
};
CodeMirrorEditorBinding.prototype.restoreBookmark=function(){
};
CodeMirrorEditorBinding.prototype.hasBookmark=function(){
};
CodeMirrorEditorBinding.prototype.deleteBookmark=function(){
};
CodeMirrorEditorBinding.prototype.getCheckSum=function(){
var _10f5=null;
var page=this._pageBinding;
if(page!=null){
_10f5=page.getCheckSum();
}
return _10f5;
};
AudioWindowBinding.prototype=new WindowBinding;
AudioWindowBinding.prototype.constructor=AudioWindowBinding;
AudioWindowBinding.superclass=WindowBinding.prototype;
AudioWindowBinding.URL="${root}/content/misc/audioloader/audio.aspx";
function AudioWindowBinding(){
this.isFlexible=false;
return this;
}
AudioWindowBinding.prototype.toString=function(){
return "[AudioWindowBinding]";
};
AudioWindowBinding.prototype.onBindingRegister=function(){
AudioWindowBinding.superclass.onBindingRegister.call(this);
if(Client.hasFlash==true){
this.setURL(AudioWindowBinding.URL);
}
};
ThrobberBinding.prototype=new Binding;
ThrobberBinding.prototype.constructor=ThrobberBinding;
ThrobberBinding.superclass=Binding.prototype;
ThrobberBinding.URL_DEFAULT=Resolver.resolve("${skin}/throbber/throbber.gif");
ThrobberBinding.URL_ACTIVATE=Resolver.resolve("${skin}/throbber/throbber_activate.gif");
ThrobberBinding.URL_DEACTIVATE=Resolver.resolve("${skin}/throbber/throbber_deactivate.gif");
function ThrobberBinding(){
this.logger=SystemLogger.getLogger("ThrobberBinding");
this._isPlaying=false;
return this;
}
ThrobberBinding.prototype.toString=function(){
return "[ThrobberBinding]";
};
ThrobberBinding.prototype.onBindingRegister=function(){
ThrobberBinding.superclass.onBindingRegister.call(this);
this._setImage(ThrobberBinding.URL_DEFAULT);
if(Application.hasStartPage&&Application.hasExternalConnection){
this.subscribe(BroadcastMessages.COMPOSITE_START);
this.subscribe(BroadcastMessages.COMPOSITE_STOP);
this.subscribe(BroadcastMessages.START_COMPOSITE);
this.bindingElement.title=" Composite Start ";
this.attachClassName("active");
this.addEventListener(DOMEvents.CLICK,{handleEvent:function(){
EventBroadcaster.broadcast(BroadcastMessages.START_COMPOSITE);
}});
}
};
ThrobberBinding.prototype.handleBroadcast=function(_10f7,arg){
ThrobberBinding.superclass.handleBroadcast.call(this,_10f7,arg);
switch(_10f7){
case BroadcastMessages.COMPOSITE_START:
case BroadcastMessages.START_COMPOSITE:
this.hide();
break;
case BroadcastMessages.COMPOSITE_STOP:
this.show();
break;
}
};
ThrobberBinding.prototype.play=function(){
if(!this._isPlaying){
this._setImage(ThrobberBinding.URL_ACTIVATE);
this._isPlaying=true;
}
};
ThrobberBinding.prototype.stop=function(){
if(this._isPlaying==true){
this._setImage(ThrobberBinding.URL_DEACTIVATE?ThrobberBinding.URL_DEACTIVATE:ThrobberBinding.URL_DEFAULT);
this._isPlaying=false;
}
};
ThrobberBinding.prototype.hide=function(){
if(this.isVisible==true){
this.bindingElement.style.visibility="hidden";
this.isVisible=false;
}
};
ThrobberBinding.prototype.show=function(){
if(!this.isVisible){
this.bindingElement.style.visibility="visible";
this.isVisible=true;
}
};
ThrobberBinding.prototype._setImage=function(url){
this.bindingElement.style.backgroundImage="url(\""+url+"\")";
};
ProgressBarBinding.prototype=new Binding;
ProgressBarBinding.prototype.constructor=ProgressBarBinding;
ProgressBarBinding.superclass=Binding.prototype;
ProgressBarBinding.WIDTH=190;
ProgressBarBinding.NOTCH=9;
ProgressBarBinding._bindingInstance=null;
ProgressBarBinding.notch=function(_10fa){
var bar=ProgressBarBinding._bindingInstance;
if(bar!=null){
bar.notch(_10fa);
}
};
function ProgressBarBinding(){
this.logger=SystemLogger.getLogger("ProgressBarBinding");
this._cover=null;
return this;
}
ProgressBarBinding.prototype.toString=function(){
return "[ProgressBarBinding]";
};
ProgressBarBinding.prototype.onBindingAttach=function(){
ProgressBarBinding.superclass.onBindingAttach.call(this);
ProgressBarBinding._bindingInstance=this;
this._cover=this.add(CoverBinding.newInstance(this.bindingDocument));
this._cover.setBusy(false);
this._cover.setWidth(ProgressBarBinding.WIDTH);
this.shadowTree.cover=this._cover;
};
ProgressBarBinding.prototype.notch=function(_10fc){
_10fc=_10fc?_10fc:1;
var width=this._cover.getWidth()-(ProgressBarBinding.NOTCH*_10fc);
this._cover.setWidth(width>=0?width:0);
};
StartMenuItemBinding.prototype=new MenuItemBinding;
StartMenuItemBinding.prototype.constructor=StartMenuItemBinding;
StartMenuItemBinding.superclass=MenuItemBinding.prototype;
function StartMenuItemBinding(){
this.logger=SystemLogger.getLogger("StartMenuItemBinding");
this.type=MenuItemBinding.TYPE_CHECKBOX;
}
StartMenuItemBinding.prototype.toString=function(){
return "[StartMenuItemBinding]";
};
StartMenuItemBinding.prototype.onBindingRegister=function(){
StartMenuItemBinding.superclass.onBindingRegister.call(this);
this.subscribe(BroadcastMessages.COMPOSITE_START);
this.subscribe(BroadcastMessages.COMPOSITE_STOP);
};
StartMenuItemBinding.prototype.handleBroadcast=function(_10fe,arg){
StartMenuItemBinding.superclass.handleBroadcast.call(this,_10fe,arg);
switch(_10fe){
case BroadcastMessages.COMPOSITE_START:
if(!this.isChecked){
this.check(true);
}
break;
case BroadcastMessages.COMPOSITE_STOP:
if(this.isChecked){
this.uncheck(true);
}
break;
}
};
StartMenuItemBinding.prototype.setChecked=function(_1100,_1101){
StartMenuItemBinding.superclass.setChecked.call(this,_1100,_1101);
if(!_1101){
if(this.isChecked){
EventBroadcaster.broadcast(BroadcastMessages.START_COMPOSITE);
}else{
EventBroadcaster.broadcast(BroadcastMessages.STOP_COMPOSITE);
}
}
};
StartMenuItemBinding.newInstance=function(_1102){
var _1103=DOMUtil.createElementNS(Constants.NS_UI,"ui:menuitem",_1102);
UserInterface.registerBinding(_1103,StartMenuItemBinding);
return UserInterface.getBinding(_1103);
};
KeySetBinding.prototype=new Binding;
KeySetBinding.prototype.constructor=KeySetBinding;
KeySetBinding.superclass=Binding.prototype;
KeySetBinding.keyEventHandlers={};
KeySetBinding.registerKeyEventHandler=function(doc,key,_1106,_1107){
var _1108=KeySetBinding.keyEventHandlers;
if(Interfaces.isImplemented(IKeyEventHandler,_1107,true)==true){
if(_1106!="*"){
_1106=KeySetBinding._sanitizeKeyModifiers(_1106);
}
var code=window.KeyEventCodes[key];
if(!code){
code=key.charCodeAt(0);
}
if(!_1108[doc]){
_1108[doc]={};
}
if(!_1108[doc][code]){
_1108[doc][code]={};
}
_1108[doc][code][_1106]=_1107;
}
};
KeySetBinding.handleKey=function(doc,e){
var _110c=false;
var code=e.keyCode;
var _110e=KeySetBinding.keyEventHandlers;
if(_110e[doc]&&_110e[doc][code]){
var _110f="[default]";
_110f+=code!=KeyEventCodes.VK_SHIFT?e.shiftKey?" shift":"":"";
_110f+=code!=KeyEventCodes.VK_CONTROL?e.ctrlKey?" control":"":"";
var _1110=_110e[doc][code][_110f];
if(_1110==null){
_1110=_110e[doc][code]["*"];
}
if(_1110!=null){
_1110.handleKeyEvent(e);
_110c=true;
}
}
return _110c;
};
KeySetBinding._sanitizeKeyModifiers=function(_1111){
var _1112="[default]";
var mods={};
if(_1111){
new List(_1111.split(" ")).each(function(_1114){
mods[_1114]=true;
});
function check(_1115){
if(mods[_1115]){
_1112+=" "+_1115;
}
}
check("shift");
check("control");
}
return _1112;
};
function KeySetBinding(){
this.logger=SystemLogger.getLogger("KeySetBinding");
this.crawlerFilters=new List([DocumentCrawler.ID,FlexBoxCrawler.ID,FocusCrawler.ID]);
return this;
}
KeySetBinding.prototype.toString=function(){
return "[KeySetBinding]";
};
KeySetBinding.prototype.onBindingAttach=function(){
KeySetBinding.superclass.onBindingAttach.call(this);
var self=this;
var keys=new List(DOMUtil.getElementsByTagName(this.bindingElement,"key"));
keys.each(function(key){
var _1119=key.getAttribute("oncommand");
var _111a=key.getAttribute("preventdefault")=="true";
KeySetBinding.registerKeyEventHandler(self.bindingDocument,key.getAttribute("key"),key.getAttribute("modifiers"),{handleKeyEvent:function(e){
DOMEvents.stopPropagation(e);
if(_111a){
DOMEvents.preventDefault(e);
}
var _111c=self.bindingWindow.WindowManager;
top.setTimeout(function(){
Binding.evaluate(_1119,self);
},0);
}});
});
};
CursorBinding.prototype=new Binding;
CursorBinding.prototype.constructor=CursorBinding;
CursorBinding.superclass=Binding.prototype;
CursorBinding.fadeIn=function(_111d){
if(_111d instanceof CursorBinding){
_111d.setOpacity(0);
_111d.show();
new Animation({modifier:9,onstep:function(_111e){
_111d.setOpacity(Math.sin(_111e*Math.PI/180));
},onstop:function(){
_111d.setOpacity(1);
}}).play();
}
};
CursorBinding.fadeOut=function(_111f){
if(_111f instanceof CursorBinding){
new Animation({modifier:9,onstep:function(_1120){
_111f.setOpacity(Math.cos(_1120*Math.PI/180));
},onstop:function(){
_111f.hide();
}}).play();
}
};
CursorBinding.moveOut=function(_1121,_1122,_1123){
if(_1121 instanceof CursorBinding){
_1123.x-=16;
_1123.y-=16;
new Animation({modifier:3,onstep:function(_1124){
var tal=Math.sin(_1124*Math.PI/180);
_1121.setPosition(new Point(((1-tal)*_1122.x)+((0+tal)*_1123.x),((1-tal)*_1122.y)+((0+tal)*_1123.y)));
},onstop:function(){
CursorBinding.fadeOut(_1121);
}}).play();
}
};
function CursorBinding(){
this.logger=SystemLogger.getLogger("CursorBinding");
this._labelBinding=null;
this._opacity=1;
this.isAccepting=true;
return this;
}
CursorBinding.prototype.toString=function(){
return "[CursorBinding]";
};
CursorBinding.prototype.onBindingAttach=function(){
CursorBinding.superclass.onBindingAttach.call(this);
this._labelBinding=this.add(LabelBinding.newInstance(this.bindingDocument));
var image=this.getProperty("image");
if(image!=null){
this.setImage(image);
}
this._stopIndicatorBinding=this.add(LabelBinding.newInstance(this.bindingDocument));
this._stopIndicatorBinding.attachClassName("indicator");
this._stopIndicatorBinding.setImage("${icon:cancel}");
this.hide();
this._stopIndicatorBinding.hide();
};
CursorBinding.prototype.setImage=function(url){
this._labelBinding.setImage(url);
};
CursorBinding.prototype.showAcceptance=function(){
this.isAccepting=true;
if(Client.isMozilla){
this._stopIndicatorBinding.hide();
}else{
var self=this;
setTimeout(function(){
if(self.isAccepting){
self._stopIndicatorBinding.hide();
}
},0);
}
};
CursorBinding.prototype.hideAcceptance=function(){
this.isAccepting=false;
if(Client.isMozilla){
this._stopIndicatorBinding.show();
}else{
var self=this;
setTimeout(function(){
if(!self.isAccepting){
self._stopIndicatorBinding.show();
}
},0);
}
};
CursorBinding.prototype.show=function(){
CursorBinding.superclass.show.call(this);
};
CursorBinding.prototype.setOpacity=function(_112a){
this.bindingElement.style.opacity=new String(_112a);
this._opacity=_112a;
};
CursorBinding.prototype.getOpacity=function(){
return this._opacity;
};
CursorBinding.prototype.setPosition=function(pos){
this.bindingElement.style.left=pos.x+"px";
this.bindingElement.style.top=pos.y+"px";
};
CursorBinding.prototype.getPosition=function(){
return new Point(this.bindingElement.offsetLeft,this.bindingElement.offsetTop);
};
CursorBinding.prototype.fadeIn=function(){
CursorBinding.fadeIn(this);
};
CursorBinding.prototype.fadeOut=function(){
CursorBinding.fadeOut(this);
};
CoverBinding.prototype=new Binding;
CoverBinding.prototype.constructor=CoverBinding;
CoverBinding.superclass=Binding.prototype;
CoverBinding.CLASSNAME_TRANSPARENT="transparent";
CoverBinding.fadeOut=function(cover){
function setOpacity(_112d){
cover.bindingElement.style.opacity=new String(_112d);
}
if(cover instanceof CoverBinding){
new Animation({modifier:18,onstep:function(_112e){
if(Binding.exists(cover)){
setOpacity(Math.cos(_112e*Math.PI/180));
}
},onstop:function(){
if(Binding.exists(cover)){
cover.hide();
}
}}).play();
}
};
CoverBinding.fadeIn=function(cover){
function setOpacity(_1130){
cover.bindingElement.style.MozOpacity=new String(_1130);
}
if(cover instanceof CoverBinding){
new Animation({modifier:18,onstart:function(){
if(Binding.exists(cover)){
setOpacity(0);
cover.show();
}
},onstep:function(_1131){
if(Binding.exists(cover)){
setOpacity(Math.sin(_1131*Math.PI/180));
}
},onstop:function(){
setOpacity(1);
}}).play();
}
};
function CoverBinding(){
this.logger=SystemLogger.getLogger("CoverBinding");
this._isBusy=true;
this._isTransparent=false;
this._position=null;
return this;
}
CoverBinding.prototype.toString=function(){
return "[CoverBinding]";
};
CoverBinding.prototype.onBindingRegister=function(){
CoverBinding.superclass.onBindingRegister.call(this);
if(this.getProperty("blockevents")){
this.addEventListener(DOMEvents.MOUSEDOWN);
this.addEventListener(DOMEvents.MOUSEUP);
this.addEventListener(DOMEvents.MOUSEMOVE);
this.addEventListener(DOMEvents.CLICK);
this.addEventListener(DOMEvents.DOUBLECLICK);
}
if(this.getProperty("transparent")==true){
this.setTransparent(true);
}
if(this.getProperty("busy")==false){
this._isBusy=false;
}
if(this._isBusy){
this.bindingElement.style.cursor="wait";
}
};
CoverBinding.prototype.show=function(){
CoverBinding.superclass.show.call(this);
if(this._isBusy&&this.isVisible){
this.addEventListener(DOMEvents.MOUSEMOVE);
}
};
CoverBinding.prototype.hide=function(){
CoverBinding.superclass.hide.call(this);
if(this._isBusy&&!this.isVisible&&this._position){
UncoverBinding.uncover(this._position);
this.removeEventListener(DOMEvents.MOUSEMOVE);
}
};
CoverBinding.prototype.handleEvent=function(e){
CoverBinding.superclass.handleEvent.call(this,e);
DOMEvents.stopPropagation(e);
switch(e.type){
case DOMEvents.MOUSEMOVE:
this._position=DOMUtil.getUniversalMousePosition(e);
break;
}
};
CoverBinding.prototype.setBusy=function(_1133){
if(_1133!=this._isBusy){
if(_1133){
this.bindingElement.style.cursor="wait";
}else{
this.bindingElement.style.cursor="default";
}
this._isBusy=_1133;
}
};
CoverBinding.prototype.setTransparent=function(_1134){
if(_1134!=this._isTransparent){
if(_1134){
this.attachClassName(CoverBinding.CLASSNAME_TRANSPARENT);
}else{
this.detachClassName(CoverBinding.CLASSNAME_TRANSPARENT);
}
this._isTransparent=_1134;
}
};
CoverBinding.prototype.setWidth=function(width){
if(width>=0){
this.bindingElement.style.width=new String(width+"px");
}
};
CoverBinding.prototype.getWidth=function(){
return this.bindingElement.offsetWidth;
};
CoverBinding.prototype.setHeight=function(_1136){
if(_1136>=0){
this.bindingElement.style.height=new String(_1136+"px");
}
};
CoverBinding.prototype.getHeight=function(){
return this.bindingElement.offsetHeight;
};
CoverBinding.newInstance=function(_1137){
var _1138=DOMUtil.createElementNS(Constants.NS_UI,"ui:cover",_1137);
return UserInterface.registerBinding(_1138,CoverBinding);
};
UncoverBinding.prototype=new Binding;
UncoverBinding.prototype.constructor=UncoverBinding;
UncoverBinding.superclass=Binding.prototype;
UncoverBinding._bindingInstance=null;
UncoverBinding.uncover=function(pos){
var _113a=UncoverBinding._bindingInstance;
if(Binding.exists(_113a)){
_113a.setPosition(pos);
}
};
function UncoverBinding(){
this.logger=SystemLogger.getLogger("UncoverBinding");
UncoverBinding._bindingInstance=this;
}
UncoverBinding.prototype.toString=function(){
return "[UncoverBinding]";
};
UncoverBinding.prototype.setPosition=function(pos){
this.bindingElement.style.display="block";
var dim=this.boxObject.getDimension();
pos.x-=0.5*dim.w;
pos.y-=0.5*dim.h;
pos.x=pos.x<0?0:pos.x;
pos.y=pos.y<0?0:pos.y;
this.bindingElement.style.left=String(pos.x)+"px";
this.bindingElement.style.top=String(pos.y)+"px";
this.bindingElement.style.cursor="wait";
var self=this;
setTimeout(function(){
self.bindingElement.style.cursor="default";
self.bindingElement.style.display="none";
},0);
};
TheatreBinding.prototype=new Binding;
TheatreBinding.prototype.constructor=TheatreBinding;
TheatreBinding.superclass=Binding.prototype;
TheatreBinding.CLASSNAME_INITIALIZED="initialized";
function TheatreBinding(){
this._isPlaying=false;
this._isFading=false;
this._canvas=null;
return this;
}
TheatreBinding.prototype.toString=function(){
return "[TheatreBinding]";
};
TheatreBinding.prototype.onBindingAttach=function(){
TheatreBinding.superclass.onBindingAttach.call(this);
this._canvas=document.createElement("canvas");
this.bindingElement.appendChild(this._canvas);
};
TheatreBinding.prototype.play=function(_113e){
this._isFading=_113e==true;
if(!this._isPlaying){
Application.lock(this);
this.show();
this._isPlaying=true;
if(this._isFading){
this._fade();
}
}
};
TheatreBinding.prototype._fade=function(){
var _113f=this._canvas.getContext("2d");
var alpha=parseInt(0);
TheatreBinding._interval=top.setInterval(function(){
if(alpha<0.5){
_113f.fillStyle="rgba(0,0,0,"+new String(alpha)+")";
_113f.clearRect(0,0,300,150);
_113f.fillRect(0,0,300,150);
alpha+=0.002;
}else{
top.clearInterval(TheatreBinding._interval);
TheatreBinding._interval=null;
}
},50);
};
TheatreBinding.prototype.stop=function(){
if(this._isPlaying){
if(this._isFading){
if(TheatreBinding._interval!=null){
top.clearInterval(TheatreBinding._interval);
}
var _1141=this._canvas.getContext("2d");
_1141.clearRect(0,0,300,150);
}
Application.unlock(this,true);
this.hide();
this._isPlaying=false;
}
};
SourceCodeViewerBinding.prototype=new WindowBinding;
SourceCodeViewerBinding.prototype.constructor=SourceCodeViewerBinding;
SourceCodeViewerBinding.superclass=WindowBinding.prototype;
SourceCodeViewerBinding.ACTION_INITIALIZED="sourcecodeviewer initialized";
SourceCodeViewerBinding.URL_DEFAULT="${root}/content/misc/viewers/sourcecodeviewer/viewsourcecontent.aspx";
SourceCodeViewerBinding.syntax={XML:"xml"};
SourceCodeViewerBinding.stylesheets={"xml":Resolver.resolve("${root}/transformations/viewsource-xml.xsl")};
function SourceCodeViewerBinding(){
this.logger=SystemLogger.getLogger("SourceCodeViewerBinding");
this._syntax=null;
this._transformer=null;
}
SourceCodeViewerBinding.prototype.toString=function(){
return "[SourceCodeViewerBinding]";
};
SourceCodeViewerBinding.prototype.onBindingAttach=function(){
this._syntax=this.getProperty("syntax");
switch(this._syntax){
case SourceCodeViewerBinding.syntax.XML:
var _1142=SourceCodeViewerBinding.stylesheets[this._syntax];
this._transformer=new XSLTransformer();
this._transformer.importStylesheet(_1142);
break;
default:
throw "SourceCodeViewer: Syntax error!";
this._syntax=null;
break;
}
var _1143=DOMUtil.getElementsByTagName(this.bindingElement,"textarea").item(0);
if(_1143){
this._startcontent=_1143.value;
}
this.setURL(SourceCodeViewerBinding.URL_DEFAULT);
this.addActionListener(WindowBinding.ACTION_ONLOAD);
SourceCodeViewerBinding.superclass.onBindingAttach.call(this);
};
SourceCodeViewerBinding.prototype.handleAction=function(_1144){
SourceCodeViewerBinding.superclass.handleAction.call(this,_1144);
switch(_1144.type){
case WindowBinding.ACTION_ONLOAD:
if(_1144.target==this){
if(this._startcontent){
this.view(this._startcontent);
}
this.dispatchAction(SourceCodeViewerBinding.ACTION_INITIALIZED);
_1144.consume();
}
break;
}
SourceCodeViewerBinding.superclass.handleAction.call(this,_1144);
};
SourceCodeViewerBinding.prototype.view=function(arg){
switch(this._syntax){
case SourceCodeViewerBinding.syntax.XML:
this._viewXML(arg);
break;
}
};
SourceCodeViewerBinding.prototype._viewXML=function(arg){
var doc=null;
if(arg){
if(typeof arg==Types.STRING){
doc=XMLParser.parse(arg);
}else{
if(arg.nodeType&&arg.nodeType==Node.DOCUMENT_NODE){
doc=object;
}
}
}
if(doc){
var _1148=this._transformer.transformToString(doc);
this._inject(_1148);
}
};
SourceCodeViewerBinding.prototype._viewHTML=function(arg){
};
SourceCodeViewerBinding.prototype._viewJavascript=function(arg){
};
SourceCodeViewerBinding.prototype._inject=function(_114b){
this.getContentDocument().body.innerHTML=_114b;
};
PersistanceBinding.prototype=new Binding;
PersistanceBinding.prototype.constructor=PersistanceBinding;
PersistanceBinding.superclass=Binding.prototype;
PersistanceBinding.USERDATAKEY="persistance";
PersistanceBinding.GLOBALSTOREKEY=document.location.host;
PersistanceBinding.TEMPLATE="storagetemplates/persistance.xml";
function PersistanceBinding(){
this.logger=SystemLogger.getLogger("PersistanceBinding");
this._resolver=null;
return this;
}
PersistanceBinding.prototype.toString=function(){
return "[PersistanceBinding]";
};
PersistanceBinding.prototype.getPersistanceMap=function(){
var doc=null;
var map=null;
if(Client.isExplorer==true){
doc=this._getDocExplorer();
}else{
doc=this._getDocMozilla();
}
if(doc!=null){
this._document=doc;
this.logger.fine(DOMSerializer.serialize(doc,true));
map=this._getPersistanceMap(this._document);
}
return map;
};
PersistanceBinding.prototype.persist=function(map){
var doc=this._getPersistanceDoc(map);
alert(DOMSerializer.serialize(doc,true));
if(Client.isExplorer==true){
this._persistDocExplorer(doc);
}else{
this._persistDocMozilla(doc);
}
};
PersistanceBinding.prototype._getPersistanceMap=function(doc){
var map={};
if(this._resolver==null){
this._resolver=new XPathResolver();
this._resolver.setNamespacePrefixResolver({"p":Constants.NS_PERSISTANCE});
}
var list=this._resolver.resolveAll("p:persist",doc.documentElement);
while(list.hasNext()){
var _1153=list.getNext();
var id=_1153.getAttribute("id");
map[id]={};
var atts=this._resolver.resolveAll("p:att",_1153);
while(atts.hasNext()){
var att=atts.getNext();
var name=att.getAttribute("name");
var value=att.getAttribute("value");
map[id][name]=value;
}
}
return map;
};
PersistanceBinding.prototype._getPersistanceDoc=function(map){
var doc=this._document;
var elm=doc.documentElement;
elm.setAttribute("version",Installation.versionString);
while(elm.hasChildNodes()){
elm.removeChild(elm.lastChild);
}
for(var id in map){
var _115d=DOMUtil.createElementNS(Constants.NS_PERSISTANCE,"persist",doc);
_115d.setAttribute("id",id);
for(var name in map[id]){
var att=DOMUtil.createElementNS(Constants.NS_PERSISTANCE,"att",doc);
att.setAttribute("name",name);
att.setAttribute("value",map[id][name]);
_115d.appendChild(att);
}
elm.appendChild(_115d);
}
return doc;
};
PersistanceBinding.prototype._getDocExplorer=function(){
this.bindingElement.load(PersistanceBinding.USERDATAKEY);
var doc=this.bindingElement.XMLDocument;
if(doc.documentElement.namespaceURI==""){
var file=PersistanceBinding.TEMPLATE;
var text=Templates.getTemplateElementText(file);
doc.loadXML(text);
var elm=doc.documentElement;
while(elm.hasChildNodes()){
elm.removeChild(elm.firstChild);
}
}
return doc;
};
PersistanceBinding.prototype._persistDocExplorer=function(doc){
var text=DOMSerializer.serialize(doc,true);
this.bindingElement.XMLDocument.loadXML(text);
this.bindingElement.save(PersistanceBinding.USERDATAKEY);
};
PersistanceBinding.prototype._getDocMozilla=function(){
delete window.globalStorage[PersistanceBinding.GLOBALSTOREKEY].persistance;
var doc=null;
var _1167=window.globalStorage[PersistanceBinding.GLOBALSTOREKEY].persistance;
if(_1167){
doc=XMLParser.parse(_1167);
}else{
var file=PersistanceBinding.TEMPLATE;
doc=Templates.getTemplateDocument(file);
var elm=doc.documentElement;
while(elm.hasChildNodes()){
elm.removeChild(elm.lastChild);
}
}
return doc;
};
PersistanceBinding.prototype._persistDocMozilla=function(doc){
var _116b=DOMSerializer.serialize(doc,true);
window.globalStorage[PersistanceBinding.GLOBALSTOREKEY].persistance=_116b;
};
LocalizationSelectorBinding.prototype=new SelectorBinding;
LocalizationSelectorBinding.prototype.constructor=LocalizationSelectorBinding;
LocalizationSelectorBinding.superclass=SelectorBinding.prototype;
function LocalizationSelectorBinding(){
this.logger=SystemLogger.getLogger("LocalizationSelectorBinding");
return this;
}
LocalizationSelectorBinding.prototype.toString=function(){
return "[LocalizationSelectorBinding]";
};
LocalizationSelectorBinding.prototype.onBindingAttach=function(){
LocalizationSelectorBinding.superclass.onBindingAttach.call(this);
this.subscribe(BroadcastMessages.UPDATE_LANGUAGES);
this._populateFromLanguages(Localization.languages);
};
LocalizationSelectorBinding.prototype.handleBroadcast=function(_116c,arg){
LocalizationSelectorBinding.superclass.handleBroadcast.call(this,_116c,arg);
switch(_116c){
case BroadcastMessages.UPDATE_LANGUAGES:
this._populateFromLanguages(arg);
break;
case BroadcastMessages.SAVE_ALL_DONE:
this.unsubscribe(BroadcastMessages.SAVE_ALL_DONE);
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEWS);
this._invokeAction();
break;
}
};
LocalizationSelectorBinding.prototype._populateFromLanguages=function(list){
if(list!=null&&list.hasEntries()&&list.getLength()>1){
var _116f=new List();
list.each(function(lang){
_116f.add(new SelectorBindingSelection(lang.Name,lang.SerializedActionToken,lang.IsCurrent,null));
});
this.populateFromList(_116f);
this.show();
}else{
this.hide();
}
};
LocalizationSelectorBinding.prototype.populateFromList=function(list){
LocalizationSelectorBinding.superclass.populateFromList.call(this,list);
this._backupSelectionValue=this._selectionValue;
};
LocalizationSelectorBinding.prototype.onValueChange=function(){
var self=this;
Dialog.warning(StringBundle.getString(StringBundle.UI,"UserElementProvider.ChangeOtherActiveLocaleDialogTitle"),StringBundle.getString(StringBundle.UI,"UserElementProvider.ChangeOtherActiveLocaleDialogText"),Dialog.BUTTONS_ACCEPT_CANCEL,{handleDialogResponse:function(_1173){
switch(_1173){
case Dialog.RESPONSE_ACCEPT:
if(Application.hasDirtyDockTabs()){
self.subscribe(BroadcastMessages.SAVE_ALL_DONE);
EventBroadcaster.broadcast(BroadcastMessages.SAVE_ALL);
}else{
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEWS);
self._invokeAction();
}
self._backupSelectionValue=self.getValue();
break;
case Dialog.RESPONSE_CANCEL:
self.selectByValue(self._backupSelectionValue);
break;
}
}});
};
LocalizationSelectorBinding.prototype._invokeAction=function(){
var token=this.getValue();
var root=SystemNode.taggedNodes.get("Root");
var _1176=new SystemAction({Label:"Generated Action: Change Locale",ActionToken:token});
SystemAction.invoke(_1176,root);
};
ResponseBinding.prototype=new Binding;
ResponseBinding.prototype.constructor=ResponseBinding;
ResponseBinding.superclass=Binding.prototype;
ResponseBinding.ACTION_SUCCESS="response success";
ResponseBinding.ACTION_OOOOKAY="response ooookay";
ResponseBinding.ACTION_FAILURE="response failure";
function ResponseBinding(){
this.logger=SystemLogger.getLogger("ResponseBinding");
return this;
}
ResponseBinding.prototype.toString=function(){
return "[ResponseBinding]";
};
ResponseBinding.prototype.onBindingAttach=function(){
ResponseBinding.superclass.onBindingAttach.call(this);
this.propertyMethodMap["checksum"]=this._update;
this._update();
};
ResponseBinding.prototype._update=function(){
if(this.getProperty("dirty")===true){
this.dispatchAction(Binding.ACTION_DIRTY);
}
var _1177=this.getProperty("status");
if(_1177!=null){
switch(_1177){
case "success":
this.dispatchAction(ResponseBinding.ACTION_SUCCESS);
break;
case "failure":
this.dispatchAction(ResponseBinding.ACTION_FAILURE);
break;
case "ooookay":
this.dispatchAction(ResponseBinding.ACTION_OOOOKAY);
break;
}
}
var index=this.getProperty("messagequeueindex");
if(index!=null){
if(index>MessageQueue.index){
MessageQueue.update();
}
}
};
function UserInterfaceMapping(map){
this.logger=SystemLogger.getLogger("UserInterfaceMapping");
if(Client.isExplorer){
this.map={};
for(var m in map){
this.map[m.replace("ui:","")]=map[m];
}
}else{
this.map=map;
}
}
UserInterfaceMapping.prototype.merge=function(_117b){
for(var _117c in _117b.map){
this.map[_117c]=_117b.getBindingImplementation(_117c);
}
};
UserInterfaceMapping.prototype.getBindingImplementation=function(_117d){
var _117e=null;
var name=_117d.nodeName.toLowerCase();
if(this.map[name]){
_117e=this.map[name];
}
return _117e;
};
var UserInterface=new function(){
var _1180=(Client.isMozilla?MozEditorTextBoxBinding:IEEditorTextBoxBinding);
var _1181=new UserInterfaceMapping({"body":RootBinding,"ui:binding":Binding,"ui:box":Binding,"ui:dialog":DialogBinding,"ui:dialoghead":DialogHeadBinding,"ui:dialogbody":DialogBodyBinding,"ui:dialogmatrix":DialogMatrixBinding,"ui:dialogset":DialogSetBinding,"ui:dialogborder":DialogBorderBinding,"ui:dialogcover":DialogCoverBinding,"ui:titlebar":DialogTitleBarBinding,"ui:titlebarbody":DialogTitleBarBodyBinding,"ui:window":WindowBinding,"ui:controlgroup":ControlGroupBinding,"ui:control":ControlBinding,"ui:menubar":MenuBarBinding,"ui:menu":MenuBinding,"ui:menubody":MenuBodyBinding,"ui:menugroup":MenuGroupBinding,"ui:menuitem":MenuItemBinding,"ui:menupopup":MenuPopupBinding,"ui:tabbox":TabBoxBinding,"ui:tabs":TabsBinding,"ui:tab":TabBinding,"ui:tabpanels":TabPanelsBinding,"ui:tabpanel":TabPanelBinding,"ui:splitbox":SplitBoxBinding,"ui:splitpanel":SplitPanelBinding,"ui:splitter":SplitterBinding,"ui:decks":DecksBinding,"ui:deck":DeckBinding,"ui:toolbar":ToolBarBinding,"ui:toolbargroup":ToolBarGroupBinding,"ui:toolbarbody":ToolBarBodyBinding,"ui:toolbarbutton":ToolBarButtonBinding,"ui:toolbarlabel":ToolBarLabelBinding,"ui:labelbox":LabelBinding,"ui:text":TextBinding,"ui:clickbutton":ClickButtonBinding,"ui:tree":TreeBinding,"ui:treebody":TreeBodyBinding,"ui:treenode":TreeNodeBinding,"ui:flexbox":FlexBoxBinding,"ui:scrollbox":ScrollBoxBinding,"ui:popupset":PopupSetBinding,"ui:popup":PopupBinding,"ui:matrix":MatrixBinding,"ui:sourceeditor":CodeMirrorEditorBinding,"ui:visualeditor":VisualEditorBinding,"ui:visualmultieditor":VisualMultiEditorBinding,"ui:visualmultitemplateeditor":VisualMultiTemplateEditorBinding,"ui:wysiwygeditortoolbarbutton":EditorToolBarButtonBinding,"ui:dock":DockBinding,"ui:docktabs":DockTabsBinding,"ui:docktab":DockTabBinding,"ui:dockpanels":DockPanelsBinding,"ui:dockpanel":DockPanelBinding,"ui:page":PageBinding,"ui:editorpage":EditorPageBinding,"ui:dialogpage":DialogPageBinding,"ui:pagebody":DialogPageBodyBinding,"ui:wizardpage":WizardPageBinding,"ui:explorer":ExplorerBinding,"ui:explorerdecks":ExplorerDecksBinding,"ui:explorerdeck":ExplorerDeckBinding,"ui:explorersplitter":ExplorerSplitterBinding,"ui:explorermenu":ExplorerMenuBinding,"ui:explorertoolbar":ExplorerToolBarBinding,"ui:explorertoolbarbutton":ExplorerToolBarButtonBinding,"ui:stagecontainer":StageContainerBinding,"ui:stage":StageBinding,"ui:stagedecks":StageDecksBinding,"ui:stagedeck":StageDeckBinding,"ui:viewset":ViewSetBinding,"ui:view":ViewBinding,"ui:broadcasterset":BroadcasterSetBinding,"ui:broadcaster":BroadcasterBinding,"ui:fields":FieldsBinding,"ui:fieldgroup":FieldGroupBinding,"ui:field":FieldBinding,"ui:fielddesc":FieldDescBinding,"ui:fielddata":FieldDataBinding,"ui:fieldhelp":FieldHelpBinding,"ui:datainput":DataInputBinding,"ui:selector":SelectorBinding,"ui:simpleselector":SimpleSelectorBinding,"ui:multiselector":MultiSelectorBinding,"ui:datainputselector":DataInputSelectorBinding,"ui:datainputdialog":DataInputDialogBinding,"ui:imageinputdialog":ImageInputDialogBinding,"ui:datainputbutton":DataInputButtonBinding,"ui:textbox":TextBoxBinding,"ui:editortextbox":_1180,"ui:radiodatagroup":RadioDataGroupBinding,"ui:radio":RadioDataBinding,"ui:checkbutton":CheckButtonBinding,"ui:checkbox":CheckBoxBinding,"ui:checkboxgroup":CheckBoxGroupBinding,"ui:datadialog":DataDialogBinding,"ui:postbackdialog":PostBackDataDialogBinding,"ui:nullpostbackdialog":NullPostBackDataDialogBinding,"ui:htmldatadialog":HTMLDataDialogBinding,"ui:functioneditor":FunctionEditorDataBinding,"ui:parametereditor":ParameterEditorDataBinding,"ui:keyset":KeySetBinding,"ui:cover":CoverBinding,"ui:uncover":UncoverBinding,"ui:cursor":CursorBinding,"ui:dialogtoolbar":DialogToolBarBinding,"ui:focus":FocusBinding,"ui:balloonset":BalloonSetBinding,"ui:balloon":BalloonBinding,"ui:error":ErrorBinding,"ui:throbber":ThrobberBinding,"ui:progressbar":ProgressBarBinding,"ui:lazybinding":LazyBindingBinding,"ui:sourcecodeviewer":SourceCodeViewerBinding,"ui:theatre":TheatreBinding,"ui:persistance":PersistanceBinding,"ui:filepicker":FilePickerBinding,"ui:request":RequestBinding,"ui:response":ResponseBinding});
var _1182=SystemLogger.getLogger("UserInterface");
var keys={};
this.registerBinding=function(_1184,impl){
var _1186=null;
if(!this.hasBinding(_1184)){
var _1187=DOMUtil.getParentWindow(_1184);
if(DOMUtil.getLocalName(_1184)!="bindingmapping"){
if(!impl&&_1184.getAttribute("binding")!=null){
var _1188=_1184.getAttribute("binding");
impl=_1187[_1188];
if(impl==null){
throw "No such binding in scope: "+_1188;
}
}
if(!impl){
var _1189=_1187.DocumentManager;
if(_1189){
var _118a=_1189.customUserInterfaceMapping;
if(_118a){
impl=_118a.getBindingImplementation(_1184);
}
}
}
if(!impl){
impl=_1181.getBindingImplementation(_1184);
}
if(impl!=null&&!Application.isMalFunctional){
try{
_1186=new impl();
}
catch(exception){
Application.isMalFunctional=true;
alert("No such binding!\n"+exception.message+(exception.stack?"\n"+exception.stack:""));
throw (exception);
}
}
if(_1186){
var key=KeyMaster.getUniqueKey();
_1184.setAttribute("key",key);
_1186.key=key;
if(!_1184.id){
_1184.id=key;
}
keys[key]={element:_1184,binding:_1186};
_1186.onBindingRegister();
}
}
}
return _1186;
};
this.unRegisterBinding=function(_118c){
terminate(_118c);
};
function terminate(_118d){
if(Binding.exists(_118d)==true){
var key=_118d.key;
Binding.destroy(_118d);
if(key){
if(keys[key]){
keys[key].binding=null;
keys[key].element=null;
delete keys[key];
_118d=null;
}else{
_1182.error("URGH: "+key);
}
}
}
}
this.getElement=function(_118f){
var _1190=null;
if(keys[_118f.key]){
_1190=keys[_118f.key].element;
}
return _1190;
};
this.getBinding=function(_1191){
var _1192=null;
if(_1191&&_1191.nodeType==Node.ELEMENT_NODE){
try{
var key=_1191.getAttribute("key");
if(key&&keys[key]){
_1192=keys[key].binding;
}
}
catch(exception){
alert("getBinding exception occured on element:\n\n\t\t"+_1191);
if(exception.stack){
alert(exception.stack);
}
}
}
return _1192;
};
this.getBindingByKey=function(key){
var _1195=null;
if(keys[key]){
_1195=keys[key].binding;
}
return _1195;
};
this.hasBinding=function(_1196){
return this.getBinding(_1196)!=null;
};
this.isBindingVisible=function(_1197){
var _1198=Application.isOperational;
if(_1198==true){
var _1199=new Crawler();
_1199.type=NodeCrawler.TYPE_ASCENDING;
_1199.id="visibilitycrawler";
_1199.addFilter(function(_119a){
var b=UserInterface.getBinding(_119a);
var res=0;
if(!b.isVisible){
_1198=false;
res=NodeCrawler.STOP_CRAWLING;
}
return res;
});
_1199.crawl(_1197.bindingElement);
_1199.dispose();
}
return _1198;
};
var _119d=null;
this.getBindingCount=function(){
var count=0;
for(var key in keys){
count++;
}
return count;
};
this.setPoint=function(){
_119d={};
for(var key in keys){
_119d[key]=true;
}
};
this.getPoint=function(){
var _11a1=null;
if(_119d){
_11a1=new List();
for(var key in keys){
if(!_119d[key]){
_11a1.add(key);
}
}
}
return _11a1;
};
this.clearPoint=function(){
_119d=null;
};
this.trackUndisposedBindings=function(){
var _11a3=null;
for(var key in keys){
var entry=keys[key];
if(!entry.binding||!entry.element||!Binding.exists(entry.binding)){
if(!_11a3){
_11a3="Bindings illdisposed: ";
}
_11a3+=entry.binding+" ";
}
}
if(_11a3!=null){
_1182.error(_11a3);
}
};
this.autoTrackDisposedBindings=function(_11a6){
if(_11a6){
if(!window.disposedbindingtrackinterval){
window.disposedbindingtrackinterval=window.setInterval(UserInterface.trackUndisposedBindings,10000);
this.trackUndisposedBindings();
}
}else{
if(window.disposedbindingtrackinterval){
window.clearInterval(window.disposedbindingtrackinterval);
window.disposedbindingtrackinterval=null;
}
}
};
};
function SOAPMessage(){
}
SOAPMessage.prototype={document:null,envelope:null,header:null,body:null,fault:null};
SOAPRequest.prototype=new SOAPMessage;
SOAPRequest.prototype.constructor=SOAPRequest;
SOAPRequest.superclass=SOAPMessage.prototype;
SOAPRequest.resolver=new XPathResolver();
SOAPRequest.resolver.setNamespacePrefixResolver({"soap":Constants.NS_ENVELOPE,"xhtml":Constants.NS_XHTML});
SOAPRequest.newInstance=function(_11a7,_11a8){
var _11a9=_11a7+"/"+_11a8;
var _11aa=new SOAPRequest(_11a9);
var _11ab=SOAPRequest.resolver;
_11aa.document=Templates.getTemplateDocument("soapenvelope.xml");
_11aa.envelope=_11ab.resolve("soap:Envelope",_11aa.document);
_11aa.header=_11ab.resolve("soap:Header",_11aa.envelope);
_11aa.body=_11ab.resolve("soap:Body",_11aa.envelope);
return _11aa;
};
SOAPRequest._parseResponse=function(_11ac){
var _11ad=null;
var _11ae=false;
var doc=_11ac.responseXML;
if(doc!=null&&doc.documentElement!=null){
switch(doc.documentElement.namespaceURI){
case Constants.NS_ENVELOPE:
_11ad=SOAPRequestResponse.newInstance(_11ac.responseXML);
if(Application.isOffLine){
EventBroadcaster.broadcast(BroadcastMessages.SERVER_ONLINE);
}
break;
case Constants.NS_XHTML:
if(!Application.isOffLine){
var body=SOAPRequest.resolver.resolve("xhtml:html/xhtml:body",_11ac.responseXML);
if(body&&body.getAttribute("id")=="offline"){
_11ae=true;
}
}
break;
case Constants.NS_DOMPARSEERROR:
var cry=DOMSerializer.serialize(doc);
SystemLogger.getLogger("SOAPRequest._parseResponse (static)").error(cry);
if(Application.isDeveloperMode){
alert("SOAPRequest parseerror! \n\n"+cry);
}
break;
default:
if(Application.isDeveloperMode){
alert("SOAPRequest: "+doc.documentElement.namespaceURI);
}
break;
}
}else{
if(!Application.isOffLine&&!Application.isLoggedOut){
var text=_11ac.responseText;
if(text.indexOf("id=\"offline\"")>-1){
_11ae=true;
}else{
var cry="Invalid SOAP response: \n\n"+_11ac.responseText;
SystemLogger.getLogger("SOAPRequest._parseResponse (static)").error(cry);
if(Application.isDeveloperMode){
alert("Invalid SOAP response");
window.open("about:blank").document.write(_11ac.responseText);
}
}
}
}
if(_11ae==true){
EventBroadcaster.broadcast(BroadcastMessages.SERVER_OFFLINE);
}
return _11ad;
};
function SOAPRequest(_11b3){
this.logger=SystemLogger.getLogger("SOAPRequest");
this.action=_11b3;
return this;
}
SOAPRequest.prototype.invoke=function(url){
var _11b5=DOMUtil.getXMLHTTPRequest();
var _11b6=null;
_11b5.open("post",url,false);
_11b5.setRequestHeader("Content-Type","text/xml; charset=UTF-8");
_11b5.setRequestHeader("SOAPAction",this.action);
try{
_11b5.send(this.document);
_11b6=SOAPRequest._parseResponse(_11b5);
}
catch(exception){
var error="Dysfuntion in SOAP invoke: "+url;
if(this.document!=null){
error+="\n"+DOMSerializer.serialize(this.document,true);
}
this.logger.error(error);
throw exception;
}
_11b5=null;
return _11b6;
};
SOAPRequest.prototype.asyncInvoke=function(url,_11b9){
var _11ba=DOMUtil.getXMLHTTPRequest();
_11ba.open("post",url,true);
_11ba.setRequestHeader("Content-Type","text/xml; charset=UTF-8");
_11ba.setRequestHeader("SOAPAction",this.action);
_11ba.onreadystatechange=function(){
if(_11ba.readyState==4){
var _11bb=SOAPRequest._parseResponse(_11ba);
_11b9(_11bb);
_11ba=null;
}
};
_11ba.send(this.document);
};
SOAPRequest.prototype.dispose=function(){
for(var _11bc in this){
this[_11bc]=null;
}
};
SOAPRequestResponse.prototype=new SOAPMessage;
SOAPRequestResponse.prototype.constructor=SOAPRequestResponse;
SOAPRequestResponse.superclass=SOAPMessage.prototype;
function SOAPRequestResponse(){
}
SOAPRequestResponse.logger=SystemLogger.getLogger("SOAPRequestResponse");
SOAPRequestResponse.resolver=new XPathResolver();
SOAPRequestResponse.resolver.setNamespacePrefixResolver({"soap":Constants.NS_ENVELOPE});
SOAPRequestResponse.newInstance=function(doc){
var _11be=null;
if(doc&&doc.documentElement){
_11be=new SOAPRequestResponse();
var _11bf=SOAPRequestResponse.resolver;
_11be.document=doc;
_11be.envelope=_11bf.resolve("soap:Envelope",_11be.document);
_11be.header=_11bf.resolve("soap:Header",_11be.envelope);
_11be.body=_11bf.resolve("soap:Body",_11be.envelope);
var fault=_11bf.resolve("soap:Fault",_11be.body);
if(fault){
SOAPRequestResponse.logger.fatal(DOMSerializer.serialize(fault,true));
_11be.fault={element:fault,faultNamespaceURI:fault.namespaceURI,faultCode:DOMUtil.getTextContent(_11bf.resolve("faultcode",fault)),faultString:DOMUtil.getTextContent(_11bf.resolve("faultstring",fault)),detail:fault.getElementsByTagName("detail").item(0)};
}
}
return _11be;
};
function SOAPFault(_11c1,_11c2,_11c3){
this._operationName=_11c1;
this._operationAddress=_11c2;
this._faultString=_11c3;
}
SOAPFault.prototype.getOperationName=function(){
return this._operationName;
};
SOAPFault.prototype.getOperationAddress=function(){
return this._operationAddress;
};
SOAPFault.prototype.getFaultString=function(){
return this._faultString;
};
SOAPFault.newInstance=function(_11c4,fault){
return new SOAPFault(_11c4.name,_11c4.address,fault.faultString);
};
function SOAPEncoder(wsdl,_11c7){
this.logger=SystemLogger.getLogger("SOAPEncoder");
this._wsdl=wsdl;
this._operation=_11c7;
this._namespace=wsdl.getTargetNamespace();
}
SOAPEncoder.prototype.encode=function(args){
var _11c9=SOAPRequest.newInstance(this._namespace,this._operation);
var root=this._appendElement(_11c9.body,this._operation);
var _11cb=this._wsdl.getSchema();
var _11cc=_11cb.lookup(this._operation);
var _11cd=_11cc.getListedDefinitions();
while(_11cd.hasNext()){
var def=_11cd.getNext();
var elm=this._appendElement(root,def.name);
var val=args.getNext();
this._resolve(elm,def,val);
}
return _11c9;
};
SOAPEncoder.prototype._resolve=function(_11d1,_11d2,value){
var _11d4=this._wsdl.getSchema();
if(_11d2.isSimpleValue){
this._appendText(_11d1,value,_11d2.type=="string");
}else{
var _11d5=_11d4.lookup(_11d2.type);
if(_11d5 instanceof SchemaSimpleType){
alert("SOAPEncoder: SchemaSimpleType support not implemented!");
}else{
var defs=_11d5.getListedDefinitions();
if(_11d5.isArray){
var _11d7=new List(value);
var def=defs.getNext();
while(_11d7.hasNext()){
var elm=this._appendElement(_11d1,def.name);
var val=_11d7.getNext();
this._resolve(elm,def,val);
}
}else{
while(defs.hasNext()){
try{
var def=defs.getNext();
var elm=this._appendElement(_11d1,def.name);
var val=value[def.name];
this._resolve(elm,def,val);
}
catch(exception){
this.logger.error("Mysterius malfunction in "+this._operation+":\n\n"+def.name+": "+value);
}
}
}
}
}
};
SOAPEncoder.prototype._appendElement=function(node,name){
var child=DOMUtil.createElementNS(this._namespace,name,node.ownerDocument);
node.appendChild(child);
return child;
};
SOAPEncoder.prototype._appendText=function(_11de,value,_11e0){
if(value!=null){
value=new String(value);
var safe=new String("");
var chars=value.split("");
var _11e3=false;
var i=0,c;
while(c=chars[i++]){
var _11e6=true;
var code=c.charCodeAt(0);
switch(code){
case 9:
case 10:
case 13:
_11e6=false;
break;
default:
if((code>=32&&code<=55295)||(code>=57344&&code<=65533)||(code>=65536&&code<=1114111)){
_11e6=false;
}
break;
}
if(!_11e6){
safe+=c;
}else{
_11e3=true;
}
}
if(_11e3){
this.logger.debug("Illegal XML character(s) was deleted from the string: "+value);
}
_11de.appendChild(_11de.ownerDocument.createTextNode(safe));
}
};
function SOAPDecoder(wsdl,_11e9){
this._wsdl=wsdl;
this._operation=_11e9;
this._resolver=new XPathResolver();
this._resolver.setNamespacePrefixResolver({"result":wsdl.getTargetNamespace()});
}
SOAPDecoder.prototype.resolve=function(xpath,node){
return this._resolver.resolve("result:"+xpath,node);
};
SOAPDecoder.prototype.resolveAll=function(xpath,node){
return this._resolver.resolveAll("result:"+xpath,node);
};
SOAPDecoder.prototype.decode=function(_11ee){
var _11ef=null;
var _11f0=this._wsdl.getSchema();
var id=this._operation+"Response";
var _11f2=this.resolve(id,_11ee.body);
var _11f3=_11f0.lookup(id);
var _11f4=_11f3.getListedDefinitions();
while(!_11ef&&_11f4.hasNext()){
var def=_11f4.getNext();
var elm=this.resolve(def.name,_11f2);
if(def.type==SchemaDefinition.TYPE_XML_DOCUMENT){
_11ef=DOMUtil.getDOMDocument();
var e=elm.getElementsByTagName("*").item(0);
if(typeof _11ef.importNode!=Types.UNDEFINED){
_11ef.appendChild(_11ef.importNode(e,true));
}else{
_11ef.loadXML(DOMSerializer.serialize(e));
}
}else{
_11ef=this._compute(elm,def);
}
}
return _11ef;
};
SOAPDecoder.prototype._compute=function(_11f8,_11f9){
var _11fa=null;
var _11fb=this._wsdl.getSchema();
if(_11f9.isSimpleValue){
_11fa=this._getSimpleValue(_11f8,_11f9.type);
}else{
var _11fc=_11fb.lookup(_11f9.type);
if(_11fc instanceof SchemaSimpleType){
_11fa=this._getSimpleValue(_11f8,_11fc.restrictionType);
}else{
var defs=_11fc.getListedDefinitions();
if(_11fc.isArray){
_11fa=[];
var def=defs.getNext();
var elms=this.resolveAll(def.type,_11f8);
while(elms.hasNext()){
var elm=elms.getNext();
_11fa.push(this._compute(elm,def));
}
}else{
_11fa={};
defs.reset();
while(defs.hasNext()){
var def=defs.getNext();
var elm=this.resolve(def.name,_11f8);
if(elm){
_11fa[def.name]=this._compute(elm,def);
}else{
if(def.isRequired){
throw new Error("SOAPDecoder: invalid SOAP response.");
}
}
}
}
}
}
return _11fa;
};
SOAPDecoder.prototype._getSimpleValue=function(_1201,type){
var _1203=null;
if(_1201!=null&&_1201.firstChild&&_1201.firstChild.nodeType==Node.TEXT_NODE){
if(Client.isMozilla&&_1201.childNodes.length>1){
_1201.normalize();
}
_1203=_1201.firstChild.data;
switch(type){
case Schema.types.STRING:
_1203=_1203;
break;
case Schema.types.INT:
case Schema.types.FLOAT:
case Schema.types.DOUBLE:
_1203=Number(_1203);
break;
case Schema.types.BOOLEAN:
_1203=_1203=="true";
break;
default:
throw ("SOAPDecoder: schema type \""+type+"\" not handled.");
break;
}
}
return _1203;
};
Schema.prototype=new XPathResolver;
Schema.prototype.constructor=Schema;
Schema.superclass=XPathResolver.prototype;
Schema.types={STRING:"string",INT:"int",FLOAT:"float",DOUBLE:"double",BOOLEAN:"boolean"};
Schema.notSupportedException=new Error("Schema: Schema structure not supported!");
function Schema(_1204){
this.logger=SystemLogger.getLogger("Schema");
this._map=this._parseSchema(_1204);
}
Schema.prototype._parseSchema=function(_1205){
this.setNamespacePrefixResolver({"wsdl":Constants.NS_WSDL,"soap":Constants.NS_SOAP,"s":Constants.NS_SCHEMA});
var _1206={};
var entry=null;
var rules=this.resolveAll("s:*[@name]",_1205);
while(rules.hasNext()){
var rule=rules.getNext();
switch(DOMUtil.getLocalName(rule)){
case "element":
entry=new SchemaElementType(this,rule);
break;
case "complexType":
entry=new SchemaComplexType(this,rule);
break;
case "simpleType":
entry=new SchemaSimpleType(this,rule);
break;
}
_1206[rule.getAttribute("name")]=entry;
}
return _1206;
};
Schema.prototype.lookup=function(name){
return this._map[name];
};
SchemaDefinition.TYPE_XML_DOCUMENT="xmldocument";
function SchemaDefinition(_120b){
this.logger=SystemLogger.getLogger("SchemaDefinition");
this.isRequired=null;
this.type=null;
this._parse(_120b);
}
SchemaDefinition.prototype._parse=function(_120c){
var min=_120c.getAttribute("minOccurs");
var max=_120c.getAttribute("maxOccurs");
var type=_120c.getAttribute("type");
this.name=_120c.getAttribute("name");
this.isRequired=min!="0";
if(type){
var split=type.split(":");
var sort=split[0];
var _1212=split[1];
this.isSimpleValue=sort!="tns";
this.type=_1212;
}else{
var elm=_120c.getElementsByTagName("*").item(0);
if(elm&&DOMUtil.getLocalName(elm)=="complexType"&&elm.getAttribute("mixed")=="true"){
elm=elm.getElementsByTagName("*").item(0);
if(elm&&DOMUtil.getLocalName(elm)=="sequence"){
elm=elm.getElementsByTagName("*").item(0);
if(DOMUtil.getLocalName(elm)=="any"){
this.type=SchemaDefinition.TYPE_XML_DOCUMENT;
}
}
}
}
};
function SchemaType(){
}
SchemaType.prototype={};
SchemaElementType.prototype=new SchemaType;
SchemaElementType.prototype.constructor=SchemaElementType;
SchemaElementType.superclass=SchemaType.prototype;
function SchemaElementType(_1214,_1215){
this.logger=SystemLogger.getLogger("SchemaElementType");
this._definitions=new List();
this._parseListedDefinitions(_1214,_1215);
}
SchemaElementType.prototype._parseListedDefinitions=function(_1216,_1217){
var els=_1216.resolveAll("s:complexType/s:sequence/s:element",_1217);
if(els.hasEntries()){
while(els.hasNext()){
this._definitions.add(new SchemaDefinition(els.getNext()));
}
}else{
this.logger.warn("SchemaElementType: Unparsed SchemaDefinition encountered.");
throw Schema.notSupportedException;
}
};
SchemaElementType.prototype.getListedDefinitions=function(){
return this._definitions.copy();
};
SchemaComplexType.prototype=new SchemaType;
SchemaComplexType.prototype.constructor=SchemaComplexType;
SchemaComplexType.superclass=SchemaType.prototype;
function SchemaComplexType(_1219,_121a){
this._definitions=new List();
this._parseListedDefinitions(_1219,_121a);
this.isArray=_121a.getAttribute("name").indexOf("ArrayOf")>-1;
}
SchemaComplexType.prototype._parseListedDefinitions=function(_121b,_121c){
var els=_121b.resolveAll("s:sequence/s:element",_121c);
if(els.hasEntries()){
while(els.hasNext()){
var el=els.getNext();
this._definitions.add(new SchemaDefinition(el));
}
}else{
throw Schema.notSupportedException;
}
};
SchemaComplexType.prototype.getListedDefinitions=function(){
return this._definitions.copy();
};
SchemaSimpleType.prototype=new SchemaType;
SchemaSimpleType.prototype.constructor=SchemaSimpleType;
SchemaSimpleType.superclass=SchemaType.prototype;
function SchemaSimpleType(_121f,_1220){
this.restrictionType=null;
this._parse(_121f,_1220);
}
SchemaSimpleType.prototype._parse=function(_1221,_1222){
var _1223=_1221.resolve("s:restriction",_1222);
if(_1223){
this.restrictionType=_1223.getAttribute("base").split(":")[1];
}else{
throw Schema.notSupportedException;
}
};
WebServiceResolver.prototype=new XPathResolver;
WebServiceResolver.prototype.constructor=WebServiceResolver;
WebServiceResolver.superclass=XPathResolver.prototype;
function WebServiceResolver(url){
this.logger=SystemLogger.getLogger("WebServiceResolver");
this._root=this._getDocumentElement(url);
this._schema=null;
if(this._root){
this.setNamespacePrefixResolver({"wsdl":Constants.NS_WSDL,"soap":Constants.NS_SOAP,"s":Constants.NS_SCHEMA});
this._schema=new Schema(this.resolve("wsdl:types/s:schema",this._root));
}
this._WSDLURL=url;
}
WebServiceResolver.prototype._getDocumentElement=function(url){
var _1226=null;
var _1227=DOMUtil.getXMLHTTPRequest();
_1227.open("get",url,false);
_1227.send(null);
if(_1227.responseXML){
_1226=_1227.responseXML.documentElement;
}else{
alert(_1227.responseText);
throw new Error("WebServiceResolver: Could not read WSDL: "+url);
}
return _1226;
};
WebServiceResolver.prototype.getPortAddress=function(){
return this._WSDLURL.split("?WSDL")[0];
};
WebServiceResolver.prototype.getTargetNamespace=function(){
return this._root.getAttribute("targetNamespace");
};
WebServiceResolver.prototype.getOperations=function(){
var _1228=new List();
var _1229=this.resolveAll("wsdl:portType/wsdl:operation",this._root);
if(_1229.hasEntries()){
while(_1229.hasNext()){
var _122a=_1229.getNext();
var name=_122a.getAttribute("name");
_1228.add(new WebServiceOperation(name,this.getPortAddress(),new SOAPEncoder(this,name),new SOAPDecoder(this,name)));
}
}else{
throw new Error("WebServiceResolver: No portType found.");
}
return _1228;
};
WebServiceResolver.prototype.getSchema=function(){
return this._schema;
};
function WebServiceOperation(name,_122d,_122e,_122f){
this.name=name;
this.address=_122d;
this.encoder=_122e;
this.decoder=_122f;
}
WebServiceOperation.prototype={name:null,address:null,encoder:null,decoder:null};
WebServiceProxy.isLoggingEnabled=true;
WebServiceProxy.isDOMResult=false;
WebServiceProxy.isFaultHandler=true;
function WebServiceProxy(){
this.logger=SystemLogger.getLogger("WebServiceProxy");
}
WebServiceProxy.createProxy=function(url){
var wsdl=new WebServiceResolver(url);
var proxy=new WebServiceProxy();
var _1233=wsdl.getOperations();
_1233.each(function(_1234){
proxy[_1234.name]=WebServiceProxy.createProxyOperation(_1234);
});
return proxy;
};
WebServiceProxy.prototype._log=function(_1235,_1236){
if(WebServiceProxy.isLoggingEnabled&&Application.isDeveloperMode&&_1236){
var log=_1236 instanceof SOAPRequest?"SOAPRequest for ":"SOAPResponse from ";
log+=_1235.address+": "+_1235.name+"\n\n";
log+=DOMSerializer.serialize(_1236.document,true);
this.logger.fine(log);
}
};
WebServiceProxy.createProxyOperation=function(_1238){
return function(){
var _1239=new List(arguments);
var _123a=null;
if(typeof (_1239.getLast())=="function"){
var _123b=_1239.extractLast();
var _123c=_1238.encoder.encode(_1239);
this._log(_1238,_123c);
var self=this;
var _123e=_123c.asyncInvoke(_1238.address,function(_123f){
self._log(_1238,_123f);
if(_123f){
if(_123f.fault){
_123a=SOAPFault.newInstance(_1238,_123f.fault);
if(WebServiceProxy.isFaultHandler){
WebServiceProxy.handleFault(_123a,_123c,_123f);
}
}else{
if(WebServiceProxy.isDOMResult){
_123a=_123f.document;
}else{
_123a=_1238.decoder.decode(_123f);
}
}
}
_123c.dispose();
_123b(_123a);
});
}else{
var _123c=_1238.encoder.encode(new List(arguments));
this._log(_1238,_123c);
var _123e=_123c.invoke(_1238.address);
this._log(_1238,_123e);
if(_123e){
if(_123e.fault){
_123a=SOAPFault.newInstance(_1238,_123e.fault);
if(WebServiceProxy.isFaultHandler){
WebServiceProxy.handleFault(_123a,_123c,_123e);
}
}else{
if(WebServiceProxy.isDOMResult){
_123a=_123e.document;
}else{
_123a=_1238.decoder.decode(_123e);
}
}
}
_123c.dispose();
return _123a;
}
};
};
WebServiceProxy.handleFault=function(_1240,_1241,_1242){
try{
Dialog.invokeModal(Dialog.URL_SERVICEFAULT,null,{soapFault:_1240,soapRequest:_1241,soapResponse:_1242});
}
catch(exception){
alert(_1240.getFaultString());
}
};
var ConfigurationService=null;
var ConsoleMessageQueueService=null;
var EditorConfigurationService=null;
var FlowControllerService=null;
var InstallationService=null;
var LocalizationService=null;
var LoginService=null;
var MarkupFormatService=null;
var PageService=null;
var ReadyService=null;
var SecurityService=null;
var SEOService=null;
var SourceValidationService=null;
var StringService=null;
var TreeService=null;
var XhtmlTransformationsService=null;
window.MessageQueue=new function(){
this.INTERVAL_ONLINE=5*1000;
this.INTERVAL_OFFLINE=1*1000;
this._actions=new List();
this._index={};
this.index=0;
var _1243=SystemLogger.getLogger("MessageQueue");
var _1244=null;
var _1245=0;
var _1246=null;
var _1247=new Map();
var _1248=new Map();
var _1249=false;
var _124a=false;
var _124b=false;
var _124c=false;
var _124d={"Main":DockBinding.MAIN,"External":DockBinding.EXTERNAL,"BottomLeft":DockBinding.BOTTOMLEFT,"BottomRight":DockBinding.BOTTOMRIGHT,"RightTop":DockBinding.RIGHTTOP,"RightBottom":DockBinding.RIGHTBOTTOM,"AbsBottomLeft":DockBinding.ABSBOTTOMLEFT,"AbsBottomRight":DockBinding.ABSBOTTOMRIGHT};
this.initialize=function(){
_1244=ConsoleMessageQueueService;
_1245=_1244.GetCurrentSequenceNumber("dummyparam!");
this.index=_1245;
EventBroadcaster.subscribe(BroadcastMessages.VIEW_COMPLETED,this);
EventBroadcaster.subscribe(BroadcastMessages.VIEW_CLOSED,this);
EventBroadcaster.subscribe(BroadcastMessages.SERVER_OFFLINE,this);
EventBroadcaster.subscribe(BroadcastMessages.SERVER_ONLINE,this);
window.messageQueueInterval=window.setInterval(MessageQueue._autoupdate,MessageQueue.INTERVAL_ONLINE);
};
this._autoupdate=function(){
if(!_1249){
if(!MessageQueue._actions.hasEntries()){
var _124e=WebServiceProxy.isLoggingEnabled;
if(Application.isLoggedIn){
_124a=true;
WebServiceProxy.isLoggingEnabled=false;
MessageQueue.update();
WebServiceProxy.isLoggingEnabled=_124e;
_124a=false;
}
}
}
};
this._pokeserver=function(){
if(_1249==true){
if(ReadyService.IsServerReady(true)){
MessageQueue._lockSystem(false);
}
}
};
this.update=function(){
if(Application.isLoggedIn){
EventBroadcaster.broadcast(BroadcastMessages.MESSAGEQUEUE_REQUESTED,_124a);
this._updateMessages();
}
};
this._updateMessages=function(){
if(_124b){
_124c=true;
}else{
_124b=true;
var self=this;
_1244.GetMessages(Application.CONSOLE_ID,this.index,function(_1250){
if(_1250!=null){
if(Types.isDefined(_1250.CurrentSequenceNumber)){
var _1251=_1250.CurrentSequenceNumber;
if(_1251<self.index){
_1243.debug("SERVER WAS RESTARTED! old messagequeue index: "+self.index+", new messagequeue index: "+_1251);
}
self.index=_1251;
var _1252=new List(_1250.ConsoleActions);
if(_1252.hasEntries()){
self.evaluate(_1252);
}else{
if(!self._actions.hasEntries()){
broadcastUpdateEvaluated();
}
}
}else{
_1243.error("No sequencenumber in MessageQueue response!");
}
}
_124b=false;
if(_124c){
_124c=false;
self._updateMessages();
}
});
}
};
this.evaluate=function(_1253){
var _1254=new List();
if(_1253.hasEntries()){
_1253.each(function(_1255){
if(this._index[_1255.Id]!=true){
_1254.add(_1255);
}
this._index[_1255.Id]=true;
},this);
if(_1254.hasEntries()){
if(this._actions.hasEntries()){
this._actions.merge(_1254);
}else{
this._actions=_1254;
}
this._nextAction();
}
}
};
this._closeAllViews=function(_1256){
var _1257="(No reason)";
if(_1256!=null){
_1257=_1256.Reason;
}
var title="Warning";
var text="The server has requested a close of all active editors for the following reason: \"${reason}\". It is recommended that you accept this request by clicking OK.";
text=text.replace("${reason}",_1257);
var self=this;
Dialog.warning(title,text,Dialog.BUTTONS_ACCEPT_CANCEL,{handleDialogResponse:function(_125b){
if(_125b==Dialog.RESPONSE_ACCEPT){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEWS);
}
self._nextAction();
}});
};
this._nextAction=function(){
var _125c=null;
if(this._actions.hasEntries()){
var _125d=this._actions.extractFirst();
_1245=_125d.SequenceNumber;
_1243.debug("MessageQueue action: "+_125d.ActionType+" > QUEUE-MAX-SEQNUM: "+this.index+" > CURRENT SEQNUM: "+_1245+" > ACTIONS-LEFT: "+this._actions.getLength());
switch(_125d.ActionType){
case "OpenView":
_125c=_125d.OpenViewParams;
if(_125c.ViewType=="ModalDialog"){
openDialogView(_125c);
}else{
_1246=_125c.ViewId;
openView(_125c);
}
break;
case "CloseView":
_125c=_125d.CloseViewParams;
_1246=_125c.ViewId;
closeView(_125c);
break;
case "RefreshTree":
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESH,_125d.RefreshTreeParams.EntityToken);
var debug="REFRESHING TREES: "+_1247.countEntries()+"\n";
_1247.each(function(token){
debug+="\n\tTOKEN: "+token;
});
_1243.debug(debug);
if(!_1247.hasEntries()){
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
this._nextAction();
}
break;
case "SelectElement":
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_FOCUS,_125d.BindEntityTokenToViewParams.EntityToken);
this._nextAction();
break;
case "MessageBox":
openMessageBox(_125d.MessageBoxParams);
break;
case "OpenViewDefinition":
_125c=_125d.OpenViewDefinitionParams;
_1246=_125c.Handle;
openViewDefinition(_125c);
break;
case "LogEntry":
logEntry(_125d.LogEntryParams);
this._nextAction();
break;
case "Reboot":
Application.reload(true);
break;
case "LockSystem":
MessageQueue._lockSystem(true);
break;
case "BroadcastMessage":
_125c=_125d.BroadcastMessageParams;
_1243.debug("Server says: EventBroadcaster.broadcast ( \""+_125c.Name+"\", "+_125c.Value+" )");
EventBroadcaster.broadcast(_125c.Name,_125c.Value);
this._nextAction();
break;
case "CollapseAndRefresh":
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_COLLAPSEALL);
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.subscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
EventBroadcaster.broadcast(BroadcastMessages.SYSTEMTREEBINDING_REFRESHALL);
if(!_1247.hasEntries()){
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
this._nextAction();
}
break;
case "CloseAllViews":
this._closeAllViews(_125d.CloseAllViewsParams);
break;
case "SaveStatus":
saveStatus(_125d.SaveStatusParams);
this._nextAction();
break;
case "DownloadFile":
Download.init(_125d.DownloadFileParams.Url);
this._nextAction();
break;
case "ExpandTreeNode":
this._nextAction();
break;
case "BindEntityTokenToView":
_125c=_125d.BindEntityTokenToViewParams;
EventBroadcaster.broadcast(BroadcastMessages.BIND_TOKEN_TO_VIEW,{handle:_125c.ViewId,entityToken:_125c.EntityToken});
this._nextAction();
break;
case "OpenGenericView":
_125c=_125d.OpenGenericViewParams;
openGenericView(_125c);
break;
case "OpenExternalView":
_125c=_125d.OpenExternalViewParams;
openExternalView(_125c);
break;
default:
Dialog.error("Dysfunction","Unhandled action: "+_125d.ActionType);
break;
}
}else{
broadcastUpdateEvaluated();
}
};
function broadcastUpdateEvaluated(){
EventBroadcaster.broadcast(BroadcastMessages.MESSAGEQUEUE_EVALUATED,_124a);
}
function logEntry(_1260){
var _1261=_1260.Level.toLowerCase();
SystemLogger.getLogger(_1260.SenderId)[_1261](_1260.Message);
}
function openView(_1262){
var list=paramsToList(_1262.Argument);
if(list.hasEntries()){
var def=ViewDefinition.clone("Composite.Management.PostBackView",_1262.ViewId);
def.entityToken=_1262.EntityToken;
def.flowHandle=_1262.FlowHandle;
def.position=_124d[_1262.ViewType],def.label=_1262.Label;
def.image=_1262.Image;
def.toolTip=_1262.ToolTip;
def.argument={"url":_1262.Url,"list":list};
StageBinding.presentViewDefinition(def);
}else{
StageBinding.presentViewDefinition(new HostedViewDefinition({handle:_1262.ViewId,entityToken:_1262.EntityToken,flowHandle:_1262.FlowHandle,position:_124d[_1262.ViewType],url:_1262.Url,label:_1262.Label,image:_1262.Image,toolTip:_1262.ToolTip}));
}
}
function openDialogView(_1265){
StageBinding.presentViewDefinition(new DialogViewDefinition({handle:_1265.ViewId,flowHandle:_1265.FlowHandle,position:Dialog.MODAL,url:_1265.Url,handler:{handleDialogResponse:function(){
setTimeout(function(){
MessageQueue._nextAction();
},250);
}}}));
}
function openMessageBox(_1266){
var _1267=_1266.DialogType.toLowerCase();
if(_1267=="question"){
throw "Not supported!";
}else{
if(Client.isWebKit){
alert(_1266.Title+"\n"+_1266.Message);
}else{
Dialog[_1267](_1266.Title,_1266.Message,null,{handleDialogResponse:function(){
setTimeout(function(){
MessageQueue._nextAction();
},250);
}});
}
}
}
function openViewDefinition(_1268){
var map={};
var _126a=false;
new List(_1268.Argument).each(function(entry){
map[entry.Key]=entry.Value;
_126a=true;
});
var proto=ViewDefinitions[_1268.Handle];
if(proto!=null){
var def=null;
if(proto.isMutable==false){
def=proto;
}else{
def=new HostedViewDefinition();
for(var prop in proto){
def[prop]=proto[prop];
}
def.handle=_1268.ViewId;
}
def.argument=_126a?map:null;
StageBinding.presentViewDefinition(def);
}else{
throw "Unknown ViewDefinition: "+param.Handle;
}
}
function openGenericView(_126f){
var def=ViewDefinition.clone("Composite.Management.GenericView",_126f.ViewId);
def.label=_126f.Label;
def.toolTip=_126f.ToolTip;
def.image=_126f.Image;
def.argument={"url":_126f.Url,"list":paramsToList(_126f.UrlPostArguments)};
StageBinding.presentViewDefinition(def);
}
function openExternalView(_1271){
var def=ViewDefinition.clone("Composite.Management.ExternalView",_1271.ViewId);
def.label=_1271.Label;
def.toolTip=_1271.ToolTip;
def.image=_1271.Image;
def.url=_1271.Url,StageBinding.presentViewDefinition(def);
}
function closeView(_1273){
if(StageBinding.isViewOpen(_1273.ViewId)){
EventBroadcaster.broadcast(BroadcastMessages.CLOSE_VIEW,_1273.ViewId);
}else{
MessageQueue._nextAction();
}
}
function saveStatus(_1274){
EventBroadcaster.broadcast(BroadcastMessages.CURRENT_SAVED,{handle:_1274.ViewId,isSuccess:_1274.Succeeded});
}
this._lockSystem=function(_1275){
var _1276=top.bindingMap.offlinetheatre;
if(_1275){
_1276.play(true);
window.clearInterval(window.messageQueueInterval);
window.messageQueueInterval=window.setInterval(MessageQueue._pokeserver,MessageQueue.INTERVAL_OFFLINE);
}else{
_1276.stop();
window.clearInterval(window.messageQueueInterval);
window.messageQueueInterval=window.setInterval(MessageQueue._autoupdate,MessageQueue.INTERVAL_ONLINE);
var self=this;
setTimeout(function(){
if(self._actions.hasEntries()){
self._nextAction();
}
},0);
}
_1249=_1275;
};
this.handleBroadcast=function(_1278,arg){
switch(_1278){
case BroadcastMessages.APPLICATION_LOGIN:
this.initialize();
break;
case BroadcastMessages.VIEW_COMPLETED:
case BroadcastMessages.VIEW_CLOSED:
if(_1246!=null&&arg==_1246){
_1246=null;
this._nextAction();
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_REFRESHING:
if(arg!=null){
_1247.set(arg,true);
}else{
_1243.debug("Saa har vi balladen!");
}
break;
case BroadcastMessages.SYSTEMTREEBINDING_REFRESHED:
if(_1247.hasEntries()){
_1247.del(arg);
_1243.debug("Refreshed tree: "+arg+"\n("+_1247.countEntries()+" trees left!)");
if(!_1247.hasEntries()){
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHING,this);
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREEBINDING_REFRESHED,this);
setTimeout(function(){
MessageQueue._nextAction();
},0);
}
}
break;
case BroadcastMessages.SYSTEMTREENODEBINDING_FORCING_OPEN:
_1248.set(arg,true);
break;
case BroadcastMessages.SYSTEMTREENODEBINDING_FORCED_OPEN:
if(_1248.hasEntries()==true){
_1248.del(arg);
if(!_1248.hasEntries()){
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREENODEBINDING_FORCING_OPEN,this);
EventBroadcaster.unsubscribe(BroadcastMessages.SYSTEMTREENODEBINDING_FORCED_OPEN,this);
MessageQueue._nextAction();
}
}
break;
case BroadcastMessages.SERVER_OFFLINE:
MessageQueue._lockSystem(true);
break;
case BroadcastMessages.SERVER_ONLINE:
MessageQueue._lockSystem(false);
break;
}
};
function paramsToList(_127a){
var list=new List();
new List(_127a).each(function(entry){
list.add({name:entry.Key,value:entry.Value});
});
return list;
}
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_LOGIN,this);
};
var ViewDefinitions={"Composite.Management.Null":new HostedViewDefinition({isMutable:true,handle:"Composite.Management.Null"}),"Composite.Management.PostBackDialog":new DialogViewDefinition({handle:"Composite.Management.PostBackDialog",isMutable:true,position:Dialog.MODAL,url:"${root}/content/dialogs/postback/postbackdialog.aspx",argument:{"url":null,"list":null}}),"Composite.Management.PostBackView":new HostedViewDefinition({handle:"Composite.Management.PostBackView",isMutable:true,position:DockBinding.MAIN,url:"${root}/postback.aspx",argument:{"url":null,"list":null}}),"Composite.Management.GenericView":new HostedViewDefinition({handle:"Composite.Management.GenericView",isMutable:true,position:DockBinding.MAIN,url:"${root}/content/views/generic/generic.aspx",label:null,image:null,toolTip:null,argument:{"url":null,"list":null}}),"Composite.Management.ExternalView":new HostedViewDefinition({handle:"Composite.Management.ExternalView",isMutable:true,position:DockBinding.EXTERNAL,url:null,label:null,image:null,toolTip:null}),"Composite.Management.Start":new HostedViewDefinition({handle:"Composite.Management.Start",position:DockBinding.START,label:"Welcome Travellers",url:"${root}/content/views/start/start.aspx"}),"Composite.Management.About":new DialogViewDefinition({handle:"Composite.Management.About",position:Dialog.MODAL,url:"${root}/content/dialogs/about/about.aspx"}),"Composite.Management.PermissionEditor":new HostedViewDefinition({isMutable:true,handle:"Composite.Management.PermissionEditor",position:DockBinding.MAIN,url:"${root}/content/views/editors/permissioneditor/permissioneditor.aspx",argument:{serializedEntityToken:"entityTokenType='Composite\\.Plugins\\.Elements\\.ElementProviders\\.VirtualElementProvider\\.VirtualElementProviderEntityToken,Composite'entityToken='_EntityToken_Type_=\\'Composite\\\\\\.Plugins\\\\\\.Elements\\\\\\.ElementProviders\\\\\\.VirtualElementProvider\\\\\\.VirtualElementProviderEntityToken,Composite\\'_EntityToken_Source_=\\'VirtualElementProvider\\'_EntityToken_Id_=\\'DesignPerspective\\''\""}}),"Composite.Management.SystemLog":new HostedViewDefinition({handle:"Composite.Management.SystemLog",position:DockBinding.ABSBOTTOMLEFT,label:"System Log",url:"${root}/content/views/dev/systemlog/systemlog.aspx"}),"Composite.Management.Developer":new HostedViewDefinition({handle:"Composite.Management.Developer",position:DockBinding.ABSBOTTOMRIGHT,label:"Developer",url:"${root}/content/views/dev/developer/developer.aspx"}),"Composite.Management.IconPack.System":new HostedViewDefinition({handle:"Composite.Management.IconPack.System",position:DockBinding.ABSBOTTOMLEFT,label:"Freja",image:"${icon:icon}",url:"${root}/content/views/dev/icons/system/Default.aspx"}),"Composite.Management.IconPack.Republic":new HostedViewDefinition({handle:"Composite.Management.IconPack.Republic",position:DockBinding.ABSBOTTOMLEFT,label:"Republic",image:"${icon:icon}",url:"${root}/content/views/dev/icons/files/republic.aspx"}),"Composite.Management.IconPack.Harmony":new HostedViewDefinition({handle:"Composite.Management.IconPack.Harmony",position:DockBinding.ABSBOTTOMLEFT,label:"Harmony",image:"${icon:icon}",url:"${root}/content/views/dev/icons/files/harmony.aspx"}),"Composite.Management.Explorer":new HostedViewDefinition({handle:"Composite.Management.Explorer",position:DockBinding.EXPLORER,url:"${root}/content/views/explorer/explorer.aspx",label:"Explorer"}),"Composite.Management.Options":new DialogViewDefinition({handle:"Composite.Management.Options",position:Dialog.MODAL,url:"${root}/content/dialogs/options/options.aspx",label:"Options"}),"Composite.Management.VisualEditorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.VisualEditorDialog",position:Dialog.MODAL,url:"${root}/content/dialogs/wysiwygeditor/wysiwygeditordialog.aspx",width:600,argument:{"formattingconfiguration":null,"elementclassconfiguration":null,"configurationstylesheet":null,"presentationstylesheet":null,"embedablefieldstypenames":null}}),"Composite.Management.MultiSelectorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.MultiSelectorDialog",position:Dialog.MODAL,url:"${root}/content/dialogs/multiselector/multiselectordialog.aspx"}),"Composite.Management.Search":new HostedViewDefinition({handle:"Composite.Management.Search",position:DockBinding.RIGHTBOTTOM,url:"${root}/content/views/search/search.aspx",label:"Search",image:"${icon:view_search}",argument:null}),"Composite.Management.Browser":new HostedViewDefinition({isMutable:false,handle:"Composite.Management.Browser",position:DockBinding.MAIN,perspective:ExplorerBinding.PERSPECTIVE_CONTENT,label:"Page Browser",image:"${icon:page-view-administrated-scope}",toolTip:"Browse unpublished pages",url:"${root}/content/views/browser/browser.aspx",argument:{"URL":null}}),"Composite.Management.SEOAssistant":new HostedViewDefinition({handle:"Composite.Management.SEOAssistant",position:DockBinding.RIGHTTOP,perspective:ExplorerBinding.PERSPECTIVE_CONTENT,url:"${root}/content/views/seoassist/seoassist.aspx",label:"${string:Composite.Web.SEOAssistant:SEOAssistant}",image:"${icon:seoassistant}",toolTip:"Search engine optimization"}),"Composite.Management.SourceCodeViewer":new HostedViewDefinition({isMutable:true,handle:"Composite.Management.SourceCodeViewer",position:DockBinding.ABSBOTTOMLEFT,url:"${root}/content/views/dev/viewsource/viewsource.aspx",argument:{"action":null,"viewBinding":null}}),"Composite.User.SourceCodeViewer":new HostedViewDefinition({isMutable:true,handle:"Composite.User.SourceCodeViewer",position:DockBinding.BOTTOMLEFT,url:"${root}/content/views/dev/viewsource/viewsource.aspx",argument:{"action":null,"viewBinding":null}}),"Composite.Management.Help":new HostedViewDefinition({label:"${string:Website.App.LabelHelp}",image:"${icon:help}",handle:"Composite.Management.Help",position:DockBinding.ABSRIGHTTOP,url:"${root}/content/views/help/help.aspx"}),"Composite.Management.Dialog.Translations":new DialogViewDefinition({handle:"Composite.Management.TranslationsDialog",position:Dialog.MODAL,url:"${root}/content/dialogs/translations/translations.aspx",label:"Translations",image:"${icon:users-changepublicculture}"}),"Composite.Management.ImageSelectorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.ImageSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_IMAGESELECTOR,argument:{label:"${string:Composite.Management:Website.Image.SelectDialog.Title}",image:"${icon:image}",selectionProperty:"ElementType",selectionValue:"image/jpeg image/gif image/png image/bmp image/tiff",selectionResult:"Uri",nodes:[{key:"MediaFileElementProvider",search:"MediaFileElementProvider.WebImages"}]}}),"Composite.Management.EmbeddableMediaSelectorDialog":new DialogViewDefinition({isMutable:true,handle:"Composite.Management.EmbeddableMediaSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREEACTIONSELECTOR,argument:{label:"${string:Composite.Management:Website.Media.SelectDialog.Title}",image:"${icon:media}",selectionProperty:"ElementType",selectionValue:null,selectionResult:"Uri",nodes:[{key:"MediaFileElementProvider",search:null}]}}),"Composite.Management.FrontendFileSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.EmbeddableMediaSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREEACTIONSELECTOR,argument:{label:"${string:Composite.Management:Website.FrontendFile.SelectDialog.Title}",image:"${icon:media}",selectionProperty:"ElementType",selectionValue:null,selectionResult:"Uri",nodes:[{key:"LayoutFileElementProvider"}],width:480}}),"Composite.Management.PageSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.PageSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"${string:Composite.Management:Website.Page.SelectDialog.Title}",image:"${icon:page}",selectionProperty:"Uri",selectionValue:null,selectionResult:"Uri",nodes:[{key:"PageElementProvider"}]}}),"Composite.Management.PageIdSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.PageIdSelectorDialog",isMutable:true,position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"${string:Composite.Management:Website.Page.SelectDialog.Title}",image:"${icon:page}",selectionProperty:"DataId",selectionValue:null,selectionResult:"DataId",nodes:[{key:"PageElementProvider"}]}}),"Composite.Management.LinkableSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.LinkableSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREEACTIONSELECTOR,argument:{label:"${string:Composite.Management:Website.ContentLink.SelectDialog.Title}",image:"${icon:link}",selectionProperty:"Uri",selectionValue:null,selectionResult:"Uri",nodes:[{key:"PageElementProvider"},{key:"MediaFileElementProvider"}]}}),"Composite.Management.MediaSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.MediaSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"${string:Composite.Management:Website.ContentLink.SelectDialog.Title}",image:"${icon:link}",selectionProperty:"Uri",selectionValue:null,selectionResult:"Uri",nodes:[{key:"MediaFileElementProvider"}]}}),"Composite.Management.FunctionSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.FunctionSelectorDialog",isMutable:true,position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"${string:Composite.Management:Website.Function.SelectDialog.Title}",image:"${icon:functioncall}",selectionProperty:"ElementType",selectionValue:MimeTypes.COMPOSITEFUNCTION,selectionResult:"ElementId",nodes:[{key:"AllFunctionsElementProvider"}]}}),"Composite.Management.WidgetFunctionSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.WidgetFunctionSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"${string:Composite.Management:Website.Widget.SelectDialog.Title}",image:"${icon:functioncall}",selectionProperty:"ElementType",selectionValue:MimeTypes.COMPOSITEFUNCTION,selectionResult:"ElementId",nodes:[{key:"AllWidgetFunctionsElementProvider"}]}}),"Composite.Management.XhtmlDocumentFunctionSelectorDialog":new DialogViewDefinition({handle:"Composite.Management.XhtmlDocumentFunctionSelectorDialog",position:Dialog.MODAL,url:Dialog.URL_TREESELECTOR,argument:{label:"${string:Composite.Management:Website.Function.SelectDialog.Title}",image:"${icon:functioncall}",selectionProperty:"ElementType",selectionValue:MimeTypes.COMPOSITEFUNCTION,selectionResult:"ElementId",nodes:[{key:"AllFunctionsElementProvider",search:"AllFunctionsElementProvider.VisualEditorFunctions"}]}})};
var KickStart=new function(){
var _127d=false;
var _127e=false;
var _127f=null;
var _1280=false;
var _1281=Client.qualifies();
var _1282="admin";
var _1283="123456";
if(!_1281){
document.location="unsupported.aspx";
return;
}
this.fireOnLoad=function(){
Application.lock(this);
fileEventBroadcasterSubscriptions(true);
EventBroadcaster.subscribe(BroadcastMessages.APPLICATION_SHUTDOWN,this);
SetupService=WebServiceProxy.createProxy(Constants.URL_WSDL_SETUPSERVICE);
ReadyService=WebServiceProxy.createProxy(Constants.URL_WSDL_READYSERVICE);
LoginService=WebServiceProxy.createProxy(Constants.URL_WSDL_LOGINSERVICE);
InstallationService=WebServiceProxy.createProxy(Constants.URL_WSDL_INSTALLSERVICE);
EventBroadcaster.broadcast(BroadcastMessages.APPLICATION_KICKSTART);
};
this.handleBroadcast=function(_1284){
switch(_1284){
case BroadcastMessages.AUDIO_INITIALIZED:
case BroadcastMessages.PERSISTANCE_INITIALIZED:
kickStart(_1284);
break;
case BroadcastMessages.APPLICATION_STARTUP:
break;
case BroadcastMessages.KEY_ENTER:
this.login();
break;
case BroadcastMessages.APPLICATION_LOGIN:
var _1285=window.bindingMap.appwindow;
_1285.setURL("app.aspx");
break;
case BroadcastMessages.APPLICATION_OPERATIONAL:
showWorkbench();
break;
case BroadcastMessages.APPLICATION_SHUTDOWN:
if(bindingMap.decks!=null){
bindingMap.decks.select("shutdowndeck");
}
bindingMap.cover.show();
break;
}
};
function fileEventBroadcasterSubscriptions(_1286){
new List([BroadcastMessages.AUDIO_INITIALIZED,BroadcastMessages.PERSISTANCE_INITIALIZED,BroadcastMessages.APPLICATION_STARTUP,BroadcastMessages.APPLICATION_LOGIN,BroadcastMessages.APPLICATION_OPERATIONAL]).each(function(_1287){
if(_1286){
EventBroadcaster.subscribe(_1287,KickStart);
}else{
EventBroadcaster.unsubscribe(_1287,KickStart);
}
});
}
function kickStart(_1288){
switch(_1288){
case BroadcastMessages.AUDIO_INITIALIZED:
_127e=true;
setTimeout(function(){
Persistance.initialize();
},0);
break;
case BroadcastMessages.PERSISTANCE_INITIALIZED:
_127d=true;
break;
}
if(_127d&&_127e){
if(bindingMap.decks!=null&&LoginService.IsLoggedIn(true)){
accessGranted();
}else{
if(bindingMap.decks!=null){
splashScreenData();
showLogin();
}else{
showWelcome();
}
}
}
}
function splashScreenData(){
var ver=document.getElementById("version");
ver.firstChild.data=ver.firstChild.data.replace("${version}",Installation.versionPrettyString);
var build=document.getElementById("build");
build.firstChild.data=build.firstChild.data.replace("${build}",Installation.versionString);
}
function showWelcome(){
Application.unlock(KickStart);
if(window.Welcome!=null){
Welcome.test();
}
}
function showLogin(){
EventBroadcaster.subscribe(BroadcastMessages.KEY_ENTER,KickStart);
Application.unlock(KickStart);
bindingMap.decks.select("logindeck");
setTimeout(function(){
if(Application.isDeveloperMode&&Application.isLocalHost){
DataManager.getDataBinding("username").setValue(_1282);
DataManager.getDataBinding("password").setValue(_1283);
}
setTimeout(function(){
DataManager.getDataBinding("username").focus();
},250);
},0);
}
function watchProgress(){
window.progressOnRegistrationInterval=window.setInterval(function(){
if(ReadyService.IsServerReady(true)){
window.clearInterval(window.progressOnRegistrationInterval);
window.progressOnRegistrationInterval=null;
splashScreenData();
showLogin();
}
},2000);
}
function showWorkbench(){
setTimeout(function(){
bindingMap.cover.hide();
fileEventBroadcasterSubscriptions(false);
Application.unlock(KickStart);
},PageBinding.TIMEOUT);
}
this.login=function(){
Application.lock(KickStart);
setTimeout(function(){
if(bindingMap.toppage.validateAllDataBindings()){
KickStart.doLogin(DataManager.getDataBinding("username").getResult(),DataManager.getDataBinding("password").getResult());
}else{
Application.unlock(KickStart);
}
},25);
};
this.doLogin=function(_128b,_128c){
var _128d=WebServiceProxy.isLoggingEnabled;
WebServiceProxy.isLoggingEnabled=false;
WebServiceProxy.isFaultHandler=false;
var _128e=false;
var _128f=LoginService.ValidateAndLogin(_128b,_128c);
if(_128f instanceof SOAPFault){
alert(_128f.getFaultString());
}else{
_128e=_128f;
}
if(_128e){
EventBroadcaster.unsubscribe(BroadcastMessages.KEY_ENTER,KickStart);
accessGranted();
}else{
Application.unlock(KickStart);
if(bindingMap.decks!=null){
accesssDenied();
}
}
WebServiceProxy.isFaultHandler=true;
if(_128d){
WebServiceProxy.isLoggingEnabled=true;
}
};
function accessGranted(){
setTimeout(function(){
if(bindingMap.decks!=null){
bindingMap.decks.select("loadingdeck");
}
setTimeout(function(){
Application.login();
},0);
},0);
}
function accesssDenied(){
var _1290=DataManager.getDataBinding("username");
var _1291=DataManager.getDataBinding("password");
_1290.blur();
_1291.blur();
_1290.setValue("");
_1291.setValue("");
_1290.clean();
_1291.clean();
_1290.focus();
document.getElementById("loginerror").style.display="block";
var _1292={handleAction:function(_1293){
document.getElementById("loginerror").style.display="none";
_1293.target.removeActionListener(Binding.ACTION_DIRTY,_1292);
}};
bindingMap.loginfields.addActionListener(Binding.ACTION_DIRTY,_1292);
}
WindowManager.fireOnLoad(this);
if(!_1281){
UpdateManager.isEnabled=false;
}
};

