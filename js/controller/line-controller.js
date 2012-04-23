LineController = {
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);

      return this;
   },
   
   onPageLoaded: function() {
      $(".mpc-tool-line").each(function() {
         var canvasEl = $(this).children("canvas").get(0);
         canvasEl.width = 120;
         canvasEl.height = 80;
         
         var ctx = canvasEl.getContext("2d");
         ctx.strokeStyle = "black";
         ctx.beginPath();
         ctx.moveTo(15, 16);
         ctx.lineTo(105, 65);
         ctx.stroke();
         
      });
      $(".mpc-tool-line").draggable();
   },
   
   onCanvasContainerDrop: function(domEl) {
      if(domEl.hasClass("mpc-tool-line")) {
         domEl.removeClass("mpc-tool");
         domEl.children(".mpc-caption").remove();
         domEl.resizable();
      }
   }   
}.init();