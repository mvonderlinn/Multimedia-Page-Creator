OvalController = {
   init: function() {
      PageLoadedEvent.subscribe(this);

      return this;      
   },
   
   onPageLoaded: function() {
      $(".mpc-tool-oval").each(function() {
         var canvasEl = $(this).children("canvas").get(0);
         canvasEl.width = 120;
         canvasEl.height = 80;
         
         var ctx = canvasEl.getContext("2d");
         ctx.strokeStyle = "black";
         ctx.lineWidth = 1.0;
         ctx.beginPath();
         ctx.arc(60, 40, 30, 0, Math.PI*2, true);
         ctx.stroke();
         
      });
   }
}.init();