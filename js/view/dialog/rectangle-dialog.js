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
      if($(domEl).hasClass("mpc-tool-rectangle")) {
         ShapeDialog.show( domEl, "rectangle" );
      }
   }
   
}.init();