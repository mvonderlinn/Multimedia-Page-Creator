OvalPainter = {

   /**
    * Paints an oval basing on following properties:
    *   mpcBorderWidth 
    *   mpcIsFilled 
    *   mpcFillColor 
    *   mpcBorderColor
    */
   paint: function(domEl) {
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

      var kappa = .5522848;
      ox = (w / 2) * kappa, // control point offset horizontal
      oy = (h / 2) * kappa, // control point offset vertical
      xe = x + w,           // x-end
      ye = y + h,           // y-end
      xm = x + w / 2,       // x-middle
      ym = y + h / 2;       // y-middle

      ctx.beginPath();
      ctx.moveTo(x, ym);
      ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
      ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
      ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
      ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
      ctx.closePath();

      if( "true" === $(domEl).attr("mpcIsStroked") ) {
         ctx.stroke();
      }

      if( "true" === $(domEl).attr("mpcIsFilled") ) {
         ctx.fill();
      }
   },
   
   paintActive: function() {
      if( $( ".mpc-tool-oval.mpc-active-el" ).length ) {
         this.paint( $( ".mpc-tool-oval.mpc-active-el" ) );
      }
   }
};
