namespace Omnicorp.Layout {
    
    
    [Composite.Data.AutoUpdatebleAttribute()]
    [Composite.Data.DataScopeAttribute("public")]
    [Composite.Data.RelevantToUserTypeAttribute("Developer")]
    [Composite.Data.CodeGeneratedAttribute()]
    [Composite.Data.Hierarchy.DataAncestorProviderAttribute(typeof(Composite.Data.Hierarchy.DataAncestorProviders.NoAncestorDataAncestorProvider))]
    [Composite.Data.ImmutableTypeIdAttribute("afe92d8a-1e06-43c8-a5bb-e29603e80197")]
    [Composite.Core.WebClient.Renderings.Data.KeyTemplatedXhtmlRendererAttribute(Composite.Core.WebClient.Renderings.Data.XhtmlRenderingType.Embedable, "<span>{label}</span>")]
    [Composite.Data.TitleAttribute("Splash Image")]
    [Composite.Data.LabelPropertyNameAttribute("Image")]
    public interface SplashImage : Composite.Data.IData, Composite.Data.ProcessControlled.IPublishControlled, Composite.Data.ProcessControlled.IProcessControlled, Composite.Data.ProcessControlled.ILocalizedControlled, Composite.Data.IPageData, Composite.Data.IPageMetaData {
        
        [Composite.Data.ImmutableFieldIdAttribute("9d6d3a94-86a7-46b3-b7cc-7835ea2d0f75")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.String, 512, IsNullable=true)]
        [Composite.Data.FieldPositionAttribute(0)]
        [Composite.Data.Validation.Validators.NullStringLengthValidatorAttribute(0, 512)]
        [Composite.Data.DefaultFieldStringValueAttribute("")]
        [Composite.Data.ForeignKeyAttribute("Composite.Data.Types.IImageFile,Composite", AllowCascadeDeletes=true, NullableString=true)]
        string Image {
            get;
            set;
        }
    }
}
