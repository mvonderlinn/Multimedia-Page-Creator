DiamondDialog = {
   
   init: function() {
      ModifyCanvasElementEvent.subscribe(this);
      
      return this;
   },
   
   onModifyCanvasElement: function(domEl) {
      if($(domEl).hasClass("mpc-tool-diamond")) {
         ShapeDialog.show( domEl, "Diamond" );
      }
   }
   
}.init();