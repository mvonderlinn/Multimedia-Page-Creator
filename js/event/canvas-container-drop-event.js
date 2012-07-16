CanvasContainerDropEvent = new EventCreator("onCanvasContainerDrop", { 
   init: function() {
      PageLoadedEvent.subscribe(this);
      return this;
   },

   onPageLoaded: function() {
      $( "#mpc-canvas-container" ).droppable({
         drop: function(ev, ui) {
            CanvasContainerDropEvent.trigger(ui.draggable);
         }
      });
   }
}).init();