HyperlinkController = {
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);
      
      return this;   
   },
   
   onPageLoaded: function() {
      $(".mpc-tool-hyperlink").draggable();
   },
   
   onCanvasContainerDrop: function(domEl) {
      if(domEl.hasClass("mpc-tool-hyperlink")) {
         domEl.removeClass("mpc-tool");
         domEl.children(".mpc-caption").remove();
         domEl.resizable();
      }
   }

}.init();