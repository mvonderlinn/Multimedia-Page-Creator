YoutubeController = {
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);

      return this;     
   },
   
   onPageLoaded: function() {
      $(".mpc-tool-youtube").draggable();
   },
   
   onCanvasContainerDrop: function(domEl) {
      if(domEl.hasClass("mpc-tool-youtube")) {
         domEl.removeClass("mpc-tool");
         domEl.children(".mpc-caption").remove();
         domEl.resizable();
      }   
   }   
}.init();