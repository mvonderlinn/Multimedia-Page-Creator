OvalDialog = {

   init: function() {
      ModifyCanvasElementEvent.subscribe(this);
      
      return this;
   },
   
   onModifyCanvasElement: function(domEl) {
      if( $( domEl ).hasClass("mpc-tool-oval") ) {
         ShapeDialog.show( domEl, "Oval" );
      }
   }
   
}.init();