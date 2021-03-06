/**
 * Composite charmap plugin.
 */
new function () {
	
	var URL_CHARMAP = "${tiny}/plugins/compositecharmap/charmap.aspx";
	
	tinymce.create ( "tinymce.plugins.CompositeCharMapPlugin", {
		
		/**
		 * @type {tinymce.Editor}
		 */
		editor : null,
		
		/**
		 * Get info
		 */
		getInfo : function() {
			return {
				longname : "Composite Character Map Plugin",
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
			
			if ( cmd == "compositeInsertCharacter" ) {
				
				this.editor.theme.enableDialogMode ();
				
				var self = this;
				var dialogHandler = {
					handleDialogResponse : function ( response, result ) {
						
						self.editor.theme.disableDialogMode ();
						
						if ( response == Dialog.RESPONSE_ACCEPT ) {
							self.editor.execCommand ( "mceInsertContent", false, result );
							editorBinding.checkForDirty ();
						}
					}
				}
				
				// open dialog
				Dialog.invokeModal ( 
					URL_CHARMAP,
					dialogHandler, 
					null 
				);
				
				result = true;
			} 
			return result;
		}
	});

	// Register plugin
	tinymce.PluginManager.add ( "compositecharmap", tinymce.plugins.CompositeCharMapPlugin );
};