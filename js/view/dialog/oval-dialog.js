/**
 * Oval dialog
 */
OvalDialog = {
   /**
    * 
    */
   init: function() {
      ModifyCanvasElementEvent.subscribe(this);
      
      return this;
   },
   
   /**
    * Handler for
    */
   onModifyCanvasElement: function(domEl) {
      if( $( domEl ).hasClass("mpc-tool-oval") ) {

         ShapeDialog.show( domEl, "oval" );

      }
   }
   
}.init();