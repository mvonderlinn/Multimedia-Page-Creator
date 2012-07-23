HyperlinkDialog = {

   init: function() {
      ModifyCanvasElementEvent.subscribe(this);      
      return this;

   },

   onModifyCanvasElement: function(domEl) {
      if( $( domEl ).hasClass("mpc-tool-hyperlink") ) {
         ShapeDialog.show( domEl, "Hyperlink" );
      }
   }

}.init();