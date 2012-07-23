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
      
      var url = $(domEl).attr("mpcURL"),
          width = $(domEl).width(),
          height = $(domEl).height();
      
      if(!url || url.length == 0) {
         alert('please fill the correct url');
         $(domEl).remove();
      }

      if( -1 == url.toLowerCase().indexOf("http://") ) {
         url = "http://" + url;
      }
      
      $(domEl).children("a").remove();
      $('<a href="' 
         + url 
         + '" style="display: block; width: ' 
         + width
         + 'px; height: '
         + height 
         + 'px;" target="_blank"></a>').appendTo(domEl);
      
   }
   
}.init();
