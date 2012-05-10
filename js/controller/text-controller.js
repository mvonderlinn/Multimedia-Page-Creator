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
         domEl.css("line-height", "16px");
         domEl.css("overflow", "hidden");
         domEl.resizable({
            ghost: false,
            grid: false,
            helper: false,
            handles: "n, e, s, w"
            
         });
         
         domEl.draggable({
            containment: $("#mpc-canvas-container")
         });
      }   
   
   }
   
}.init();