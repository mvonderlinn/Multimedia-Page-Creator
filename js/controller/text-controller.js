TextController = {
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);

      return this;
   },
   
   onPageLoaded: function() {
      $(".mpc-tool-text").mouseup(function(ev) {
         ev.preventDefault();
         $(this).attr("contenteditable", "true");
         $(".mpc-tool-text").focus();
      });
      
      $(".mpc-tool-text").draggable();
   },
   
   onCanvasContainerDrop: function(domEl) {
      if(domEl.hasClass("mpc-tool-text")) {
         domEl.removeClass("mpc-tool");
         domEl.children(".mpc-caption").remove();
         domEl.resizable();
      }   
   }
   
}.init();