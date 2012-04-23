RectangleController = {
   init: function() {
      PageLoadedEvent.subscribe(this);

      return this;      
   },
   
   onPageLoaded: function() {
      $(".mpc-tool-rectangle").each(function() {
         var canvasEl = $(this).children("canvas").get(0);
         canvasEl.width = 120;
         canvasEl.height = 80;
         
         var ctx = canvasEl.getContext("2d");
         ctx.strokeStyle = "black";
         ctx.lineWidth = 1.0;
         ctx.beginPath();
         ctx.rect(15.5,15.5,90,50);
         ctx.stroke();      
      });
   }
   
}.init();