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
      if(!$(domEl).hasClass("mpc-tool-diamond")) {
       
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

      ctx.beginPath();
      ctx.moveTo(x + w/2,y);
      ctx.lineTo(x, y + h/2);
      ctx.lineTo(x + w/2,y+h);
      ctx.lineTo(x+w,y+h/2);
      ctx.closePath();

      if( "true" === $(domEl).attr("mpcIsFilled") ) {
         ctx.fill();
      }

      if( "true" === $(domEl).attr("mpcIsStroked") ) {
         ctx.stroke();
      }      
   }
   
}.init();
