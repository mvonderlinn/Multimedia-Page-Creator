OvalPainter = {
   
   init: function() {
      PaintElementEvent.subscribe(this);
      
      return this;
   },   
   
   /**
    * Paints an oval basing on following properties:
    *   mpcBorderWidth 
    *   mpcIsFilled 
    *   mpcFillColor 
    *   mpcBorderColor
    */
   onPaintElement: function(domEl) {
      if(!$(domEl).hasClass("mpc-tool-star")) {
       
         return;
      }

      var canvasEl = $(domEl).children("canvas").get(0);
      
      canvasEl.width = $(domEl).width(); 
      canvasEl.height = $(domEl).height();

      var ctx = canvasEl.getContext("2d");
      ctx.strokeStyle = $(domEl).attr("mpcBorderColor");
      ctx.fillStyle = $(domEl).attr("mpcFillColor");      
      ctx.lineWidth = $(domEl).attr("mpcBorderWidth");
      
      var resizeBorder = $(domEl).hasClass("mpc-tool") ? 20 : 5,
          x = 0 + resizeBorder + parseInt($(domEl).attr("mpcBorderWidth")),
          y = 0 + resizeBorder + parseInt($(domEl).attr("mpcBorderWidth")), 
          w = canvasEl.width - resizeBorder - $(domEl).attr("mpcBorderWidth") - x,
          h = canvasEl.height - resizeBorder - $(domEl).attr("mpcBorderWidth") - y;

         var lowerSide = (w<h? w : h);
         var r = lowerSide/2;
         var translateF = $(domEl).hasClass("mpc-tool") ? 35: lowerSide/1.7;
         
         ctx.translate( 
            translateF, 
            translateF
         );
         ctx.rotate(Math.PI*0.29999);
         ctx.beginPath()  
         ctx.moveTo(r,0);  
         for (var i=0;i<9;i++){  
          ctx.rotate(Math.PI/5);  
          if(i%2 == 0) {  
            ctx.lineTo((r/0.525731)*0.200811,0);  
          } else {  
            ctx.lineTo(r,0);  
          }
         }  
         ctx.closePath();  
        

      if( "true" === $(domEl).attr("mpcIsFilled") ) {
         ctx.fill();
      }

      if( "true" === $(domEl).attr("mpcIsStroked") ) {
         ctx.stroke();
      }      
   }
   
}.init();
