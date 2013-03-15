namespace Composite.Community.Blog {
    
    
    [Composite.Data.AutoUpdatebleAttribute()]
    [Composite.Data.DataScopeAttribute("public")]
    [Composite.Data.RelevantToUserTypeAttribute("Developer")]
    [Composite.Data.CodeGeneratedAttribute()]
    [Composite.Data.Hierarchy.DataAncestorProviderAttribute(typeof(Composite.Data.Hierarchy.DataAncestorProviders.NoAncestorDataAncestorProvider))]
    [Composite.Data.ImmutableTypeIdAttribute("60693bea-2993-4a84-9277-d65ced862ba1")]
    [Composite.Core.WebClient.Renderings.Data.KeyTemplatedXhtmlRendererAttribute(Composite.Core.WebClient.Renderings.Data.XhtmlRenderingType.Embedable, "<span>{label}</span>")]
    [Composite.Data.KeyPropertyNameAttribute("Id")]
    [Composite.Data.TitleAttribute("BlogAuthors")]
    [Composite.Data.LabelPropertyNameAttribute("Name")]
    public interface Authors : Composite.Data.IData {
        
        [Composite.Data.ImmutableFieldIdAttribute("4022792f-7d94-450c-b8a0-cfc9b5c9e6af")]
        [Composite.Data.FunctionBasedNewInstanceDefaultFieldValueAttribute("<f:function name=\"Composite.Utils.Guid.NewGuid\" xmlns:f=\"http://www.composite.net" +
            "/ns/function/1.0\" />")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.Guid)]
        [Microsoft.Practices.EnterpriseLibrary.Validation.Validators.NotNullValidatorAttribute()]
        [Composite.Data.FieldPositionAttribute(-1)]
        System.Guid Id {
            get;
            set;
        }
        
        [Composite.Data.ImmutableFieldIdAttribute("36d6ddc3-3416-4099-93b0-dc75a5223c62")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.String, 128)]
        [Microsoft.Practices.EnterpriseLibrary.Validation.Validators.NotNullValidatorAttribute()]
        [Composite.Data.FieldPositionAttribute(0)]
        [Composite.Data.Validation.Validators.StringSizeValidatorAttribute(0, 128)]
        [Composite.Data.DefaultFieldStringValueAttribute("")]
        string Name {
            get;
            set;
        }
        
        [Composite.Data.ImmutableFieldIdAttribute("e2fc2329-2814-4400-85d8-43253f62f3d8")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.String, 128, IsNullable=true)]
        [Composite.Data.FieldPositionAttribute(1)]
        [Composite.Data.Validation.Validators.NullStringLengthValidatorAttribute(0, 128)]
        string Email {
            get;
            set;
        }
        
        [Composite.Data.ImmutableFieldIdAttribute("9c4992a8-60c1-4269-bc8a-b3d1bb583b83")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.String, 512, IsNullable=true)]
        [Composite.Data.FieldPositionAttribute(2)]
        [Composite.Data.Validation.Validators.NullStringLengthValidatorAttribute(0, 512)]
        [Composite.Data.DefaultFieldGuidValueAttribute("00000000-0000-0000-0000-000000000000")]
        [Composite.Data.ForeignKeyAttribute("Composite.Data.Types.IImageFile,Composite", AllowCascadeDeletes=true, NullableString=true)]
        string Picture {
            get;
            set;
        }
        
        [Composite.Data.ImmutableFieldIdAttribute("63d415dd-105b-425a-ade8-1e2562062903")]
        [Composite.Data.FunctionBasedNewInstanceDefaultFieldValueAttribute("<f:function xmlns:f=\"http://www.composite.net/ns/function/1.0\" name=\"Composite.Co" +
            "nstant.Boolean\"><f:param name=\"Constant\" value=\"True\" /></f:function>")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.Boolean)]
        [Microsoft.Practices.EnterpriseLibrary.Validation.Validators.NotNullValidatorAttribute()]
        [Composite.Data.FieldPositionAttribute(3)]
        [Composite.Data.DefaultFieldBoolValueAttribute(false)]
        bool DisplayEmail {
            get;
            set;
        }
        
        [Composite.Data.ImmutableFieldIdAttribute("eef698d2-c78d-48db-9c44-9ebaecc71f7f")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.String, 64, IsNullable=true)]
        [Composite.Data.FieldPositionAttribute(4)]
        [Composite.Data.Validation.Validators.NullStringLengthValidatorAttribute(0, 64)]
        string Password {
            get;
            set;
        }
    }
}
