/**
 * Composite plugin. This plugin does nothing, it is simply a template.
 */
new function () {
	
	tinymce.create ( "tinymce.plugins.CompositePlugin", {
		
		/**
		 * @type {tinymce.Editor}
		 */
		editor : null,
		
		/**
		 * Get info
		 */
		getInfo : function() {
			return {
				longname : "Composite Plugin",
				author : "Composite A/S",
				authorurl : "http://www.composite.net",
				infourl : null,
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		},
		
		/**
		 * @param {tinymce.Editor} ed
		 * @param {string} url
		 */
		init : function ( ed, url ) {
			
			this.editor = ed;
		},
			
		/**
		 * @param {string} cmd
		 * @param {boolean} ui
		 * @param {string} value
		 */
		execCommand : function ( cmd, ui, value ) {
			
			var result = false;
			var self = this;
			var editor = this.editor;
			var editorBinding = editor.theme.editorBinding;
			
			if ( cmd == "compositeFisterLoegsovs" ) {
				
				// REMEMBER editorBinding.checkForDirty (); !!!!!
				result = true;
			} 
			return result;
		}
	});

	// Register plugin
	tinymce.PluginManager.add("composite", tinymce.plugins.CompositePlugin);
};