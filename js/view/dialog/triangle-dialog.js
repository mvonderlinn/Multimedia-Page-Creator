TriangleDialog = {

   init: function() {
      ModifyCanvasElementEvent.subscribe(this);
      
      return this;
   },

   onModifyCanvasElement: function(domEl) {
      if($(domEl).hasClass("mpc-tool-triangle")) {
         ShapeDialog.show( domEl, "Triangle" );
      }
   }
   
}.init();