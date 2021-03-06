/**
 * Composite text plugin.
 */
new function () {
	
	var URL_TEXT = "${tiny}/plugins/compositetext/text.aspx";
	
	tinymce.create ( "tinymce.plugins.CompositeTextPlugin", {
		
		/**
		 * @type {tinymce.Editor}
		 */
		editor : null,
		
		/**
		 * Get info
		 */
		getInfo : function() {
			return {
				longname : "Composite Text Plugin",
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
			
			if ( cmd == "compositeInsertText" ) {
				
				this.editor.theme.enableDialogMode ();
				
				var self = this;
				var dialogHandler = {
					handleDialogResponse : function ( response, result ) {
						
						self.editor.theme.disableDialogMode ();
						
						if ( response == Dialog.RESPONSE_ACCEPT ) {
							if ( result ) {
								self._inject ( result );
								editorBinding.checkForDirty ();
							}
						}
					}
				}
				
				// open dialog
				Dialog.invokeModal ( 
					URL_TEXT,
					dialogHandler, 
					null 
				);
				
				result = true;
			} 
			return result;
		},
		
		_inject : function ( html ) {
			
			/*
			 * The following goob is here to make sure that  
			 * tables dont get positioned inside p elements.
			 * TODO: MERGE WITH STUFF GOING ON IN TABLE PLUGIN
			 */
			
			var inst = this.editor;
			var bm = inst.selection.getBookmark(), patt = '';
			inst.execCommand('mceInsertContent', false, '<br class="_mce_marker" />');

			tinymce.each('h1,h2,h3,h4,h5,h6,p'.split(','), function(n) {
				if (patt) {
					patt += ',';
				}
				patt += n + ' ._mce_marker';
			});
			
			var dom = inst.dom;
			tinymce.each(inst.dom.select(patt), function(n) {
				inst.dom.split(inst.dom.getParent(n, 'h1,h2,h3,h4,h5,h6,p'), n);
			});

			dom.setOuterHTML(dom.select('._mce_marker')[0], html);

			inst.selection.moveToBookmark(bm);
			//inst.execCommand('mceEndUndoLevel');
		}
	});

	// Register plugin
	tinymce.PluginManager.add ( "compositetext", tinymce.plugins.CompositeTextPlugin );
};