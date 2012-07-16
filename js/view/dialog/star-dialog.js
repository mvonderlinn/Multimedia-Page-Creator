StarDialog = {

   init: function() {
      ModifyCanvasElementEvent.subscribe(this);
      
      return this;
   },
   
   onModifyCanvasElement: function(domEl) {
      if($(domEl).hasClass("mpc-tool-star")) {
         ShapeDialog.show( domEl, "Star" );
      }
   }
   
}.init();