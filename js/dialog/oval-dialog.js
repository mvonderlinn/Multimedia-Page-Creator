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
      ShapeDialog.show(domEl, "oval");
   }
   
}.init();