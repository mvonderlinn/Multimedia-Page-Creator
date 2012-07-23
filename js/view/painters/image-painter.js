ImagePainter = {
   
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
      if(!$(domEl).hasClass("mpc-tool-image")) {
       
         return;
      }
      
      $("<canvas></canvas>").appendTo(domEl);
      var canvasEl = $(domEl).children("canvas").get(0);
      
        
   }
   
}.init();
