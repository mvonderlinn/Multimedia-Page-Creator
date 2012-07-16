LineDialog = {

   init: function() {
      ModifyCanvasElementEvent.subscribe(this);
      
      return this;
   },
   
   onModifyCanvasElement: function(domEl) {
      if($(domEl).hasClass("mpc-tool-line")) {
         ShapeDialog.show( domEl, "Line" );
      }
   }
   
}.init();