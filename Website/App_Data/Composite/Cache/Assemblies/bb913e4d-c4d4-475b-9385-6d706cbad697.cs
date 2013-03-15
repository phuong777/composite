namespace Omnicorp.Content {
    
    
    [Composite.Data.AutoUpdatebleAttribute()]
    [Composite.Data.DataScopeAttribute("public")]
    [Composite.Data.RelevantToUserTypeAttribute("Developer")]
    [Composite.Data.CodeGeneratedAttribute()]
    [Composite.Data.Hierarchy.DataAncestorProviderAttribute(typeof(Composite.Data.Hierarchy.DataAncestorProviders.NoAncestorDataAncestorProvider))]
    [Composite.Data.ImmutableTypeIdAttribute("bb913e4d-c4d4-475b-9385-6d706cbad697")]
    [Composite.Core.WebClient.Renderings.Data.KeyTemplatedXhtmlRendererAttribute(Composite.Core.WebClient.Renderings.Data.XhtmlRenderingType.Embedable, "<span>{label}</span>")]
    [Composite.Data.KeyPropertyNameAttribute("Id")]
    [Composite.Data.TitleAttribute("News")]
    [Composite.Data.LabelPropertyNameAttribute("Title")]
    public interface News : Composite.Data.IData, Composite.Data.ProcessControlled.ILocalizedControlled, Composite.Data.ProcessControlled.IProcessControlled {
        
        [Composite.Data.ImmutableFieldIdAttribute("184f7a06-464e-4a35-9fd8-8a9dc438aba9")]
        [Composite.Data.FunctionBasedNewInstanceDefaultFieldValueAttribute("<f:function name=\"Composite.Utils.Guid.NewGuid\" xmlns:f=\"http://www.composite.net" +
            "/ns/function/1.0\" />")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.Guid)]
        [Microsoft.Practices.EnterpriseLibrary.Validation.Validators.NotNullValidatorAttribute()]
        [Composite.Data.FieldPositionAttribute(-1)]
        System.Guid Id {
            get;
            set;
        }
        
        [Composite.Data.ImmutableFieldIdAttribute("1b86897c-8cfe-4ac7-bc72-850c2ee00038")]
        [Composite.Data.FunctionBasedNewInstanceDefaultFieldValueAttribute("<f:function xmlns:f=\"http://www.composite.net/ns/function/1.0\" name=\"Composite.Ut" +
            "ils.Date.Now\" />")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.DateTime)]
        [Microsoft.Practices.EnterpriseLibrary.Validation.Validators.NotNullValidatorAttribute()]
        [Microsoft.Practices.EnterpriseLibrary.Validation.Validators.DateTimeRangeValidatorAttribute("1753-01-01T00:00:00", "9999-12-31T23:59:59")]
        [Composite.Data.FieldPositionAttribute(0)]
        [Composite.Data.DefaultFieldNowDateTimeValueAttribute()]
        System.DateTime Date {
            get;
            set;
        }
        
        [Composite.Data.ImmutableFieldIdAttribute("fd89fd87-3867-4d65-ad6e-fac1f9c91eaa")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.String, 256)]
        [Microsoft.Practices.EnterpriseLibrary.Validation.Validators.NotNullValidatorAttribute()]
        [Composite.Data.FieldPositionAttribute(1)]
        [Composite.Data.Validation.Validators.StringSizeValidatorAttribute(0, 256)]
        [Composite.Data.DefaultFieldStringValueAttribute("")]
        string Title {
            get;
            set;
        }
        
        [Composite.Data.ImmutableFieldIdAttribute("85f015e5-530d-45dc-bf40-65d7c301e6e7")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.String, 1024)]
        [Microsoft.Practices.EnterpriseLibrary.Validation.Validators.NotNullValidatorAttribute()]
        [Composite.Data.FieldPositionAttribute(2)]
        [Composite.Data.Validation.Validators.StringSizeValidatorAttribute(0, 1024)]
        [Composite.Data.DefaultFieldStringValueAttribute("")]
        string Summary {
            get;
            set;
        }
        
        [Composite.Data.ImmutableFieldIdAttribute("a2a6569a-0aa6-41a6-9b63-e99541a6b085")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.LargeString)]
        [Microsoft.Practices.EnterpriseLibrary.Validation.Validators.NotNullValidatorAttribute()]
        [Composite.Data.FieldPositionAttribute(3)]
        [Composite.Data.DefaultFieldStringValueAttribute("")]
        string Content {
            get;
            set;
        }
    }
}
