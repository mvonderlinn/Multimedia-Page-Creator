HeartController = {
   
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);
      
      return this;
   },

   onPageLoaded: function() {
      this.initIcon();
   },
   
   initIcon: function() {
      $(".mpc-tool-heart").each(function() {
         var canvasEl = $(this).children("canvas").get(0);
         
         canvasEl.width = 120;
         canvasEl.height = 80;
         
         var ctx = canvasEl.getContext("2d");
         
         var factor = 0.415;
         ctx.scale(factor, factor);
         ctx.lineWidth = 1/0.7;
         ctx.translate(12, -5);
         ctx.beginPath();  
         
         ctx.moveTo(75,40);  
         ctx.bezierCurveTo(75,37,70,25,50,25);  
         ctx.bezierCurveTo(20,25,20,62.5,20,62.5);  
         ctx.bezierCurveTo(20,80,40,102,75,120);  
         ctx.bezierCurveTo(110,102,130,80,130,62.5);  
         ctx.bezierCurveTo(130,62.5,130,25,100,25);  
         ctx.bezierCurveTo(85,25,75,37,75,40);  
         
         ctx.stroke();
      });
      
      $(".mpc-tool-heart").draggable();   
   },

   onCanvasContainerDrop: function(domEl) {
      if(domEl.hasClass("mpc-tool-heart")) {
         domEl.removeClass("mpc-tool");
         domEl.children(".mpc-caption").remove();
         domEl.resizable();
      }
   }

}.init();