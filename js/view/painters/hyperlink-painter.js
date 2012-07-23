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
          width = $(domEl).width() - 5,
          height = $(domEl).height() - 5;
      
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
      
      $(domEl).children("a").click(function(ev){
            if ( $(this).parent().hasClass("mpc-active-el") || $(this).hasClass("mpc-blue-border") ) {
               $(this).parent().trigger("click");
               return false;
            }
         });
   }
   
}.init();
