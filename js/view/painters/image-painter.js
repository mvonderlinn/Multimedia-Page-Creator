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
      $(domEl).children("img").remove();
      var imgs = $(domEl).attr("mpcimages").split(ImageController.separator);
      for(var index in imgs) {
         var imageDataURL = imgs[index];
         $('<img src="' + imageDataURL + '"/>').appendTo(domEl);
      }
      
   }
   
}.init();
