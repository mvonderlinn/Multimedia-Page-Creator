HeartPainter = {
   
   init: function() {
      PaintElementEvent.subscribe(this);
      
      return this;
   },   
   
   /**
    * Paints a heart basing on following properties:
    *   mpcBorderWidth 
    *   mpcIsFilled 
    *   mpcFillColor 
    *   mpcBorderColor
    */
   onPaintElement: function(domEl) {
   
      if(!$(domEl).hasClass("mpc-tool-heart")) {
       
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

      var x0 = x + 0.5 * w, y0 = y + 0.3 * h;
      var x1 = x + 0.1 * w, y1 = y + 0.0 * h;
      var x2 = x + 0.0 * w, y2 = y + 0.6 * h;
      var x3 = x + 0.5 * w, y3 = y + 0.9 * h;
      var x4 = x + 1.0 * w, y4 = y + 0.6 * h;
      var x5 = x + 0.9 * w, y5 = y + 0.0 * h;

   
      ctx.beginPath();

      ctx.moveTo(x0,y0);
      ctx.bezierCurveTo(x1,y1,x2,y2,x3,y3);
      ctx.bezierCurveTo(x4,y4,x5,y5,x0,y0);

      if( "true" === $(domEl).attr("mpcIsFilled") ) {
         ctx.fill();
      }

      if( "true" === $(domEl).attr("mpcIsStroked") ) {
         ctx.stroke();
      }      
   }
   
}.init();
