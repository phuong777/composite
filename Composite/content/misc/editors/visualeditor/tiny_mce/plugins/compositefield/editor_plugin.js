/**
 * Composite Field plugin.
 */
new function () {
	
	tinymce.create ( "tinymce.plugins.CompositeFieldPlugin", {
		
		/**
		 * @type {tinymce.Editor}
		 */
		editor : null,
		
		/**
		 * Get info
		 */
		getInfo : function() {
			return {
				longname : "Composite Field Plugin",
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
			var editor = this.editor;
			var editorBinding = editor.theme.editorBinding;
			
			if ( cmd == "compositeInsertField" ) {
				
				if ( value == "delete" ) {
					this.editor.execCommand ( "mceInsertContent", false, "" );
				} else {
					
					var groupname = value.split ( ":" )[ 0 ];
					var fieldname = value.split ( ":" )[ 1 ];
					
					var binding	= this.editor.theme.editorBinding;
					var config	= binding.embedableFieldConfiguration;
					var html 	= config.getTinyMarkup ( groupname, fieldname );
					
					this.editor.execCommand ( "mceInsertContent", false, html );
					editorBinding.checkForDirty ();
				}
				
				result = true;
			} 
			return result;
		}
	});

	// Register plugin
	tinymce.PluginManager.add ( "compositefield", tinymce.plugins.CompositeFieldPlugin );
};