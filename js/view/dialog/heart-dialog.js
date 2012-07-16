HeartDialog = {

   init: function() {
      ModifyCanvasElementEvent.subscribe(this);
      
      return this;
   },
   
   onModifyCanvasElement: function(domEl) {
      if( $( domEl ).hasClass("mpc-tool-heart") ) {
         ShapeDialog.show( domEl, "Heart" );
      }
   }
   
}.init();