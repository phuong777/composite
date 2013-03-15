namespace Omnicorp.Content {
    
    
    [Composite.Data.AutoUpdatebleAttribute()]
    [Composite.Data.DataScopeAttribute("public")]
    [Composite.Data.RelevantToUserTypeAttribute("Developer")]
    [Composite.Data.CodeGeneratedAttribute()]
    [Composite.Data.Hierarchy.DataAncestorProviderAttribute(typeof(Composite.Data.Hierarchy.DataAncestorProviders.NoAncestorDataAncestorProvider))]
    [Composite.Data.ImmutableTypeIdAttribute("7714777f-de1b-4a00-85ae-7ecd771b145d")]
    [Composite.Core.WebClient.Renderings.Data.KeyTemplatedXhtmlRendererAttribute(Composite.Core.WebClient.Renderings.Data.XhtmlRenderingType.Embedable, "<span>{label}</span>")]
    [Composite.Data.TitleAttribute("Page spots")]
    [Composite.Data.LabelPropertyNameAttribute("Spots")]
    public interface PageSpots : Composite.Data.IData, Composite.Data.ProcessControlled.IPublishControlled, Composite.Data.ProcessControlled.IProcessControlled, Composite.Data.ProcessControlled.ILocalizedControlled, Composite.Data.IPageData, Composite.Data.IPageMetaData {
        
        [Composite.Data.ImmutableFieldIdAttribute("ae574346-eda7-4846-b8c2-36b7520ea27f")]
        [Composite.Data.StoreFieldTypeAttribute(Composite.Data.PhysicalStoreFieldType.LargeString, IsNullable=true)]
        [Composite.Data.FieldPositionAttribute(0)]
        [Composite.Data.DefaultFieldStringValueAttribute("")]
        string Spots {
            get;
            set;
        }
    }
}
