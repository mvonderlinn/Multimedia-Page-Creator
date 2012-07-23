HyperlinkPainter = {
   
   init: function() {
      PaintElementEvent.subscribe(this);

      return this;
   }, 
   
   /**
    * Paints an oval basing on following properties:
    *   mpcURL 
    *   mpcIsFilled 
    *   mpcFillColor 
    *   mpcBorderColor
    */
   onPaintElement: function(domEl) {
      if(!$(domEl).hasClass("mpc-tool-hyperlink")) {
         return;
      }

      if(!url || url.length == 0) {
         alert('please fill the correct url');
         $(domEl).remove();
      }

      if( -1 == url.toLowerCase().indexOf("http://") ) {
         url = "http://" + url;
      }

   }
   
}.init();
