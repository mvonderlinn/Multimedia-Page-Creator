YoutubePainter = {
   
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
      if(!$(domEl).hasClass("mpc-tool-youtube")) {
         return;
      }

      var width = $(domEl).width(),
          height = $(domEl).height(),
          url = $(domEl).attr("mpcURL");
          
          if(url.indexOf("&") > 0) {
            url = url.substr(0, url.indexOf("&"));
          }
          
          if(!url || url.length == 0) {
            alert('please fill the correct url');
            $(domEl).remove();
          }
          
          url = url.replace("watch?v=","embed/");
          url = url + "?html5=1";
          
          
      if( -1 == url.toLowerCase().indexOf("http://") ) {
         url = "http://" + url;
      }
      
      width = width;
      height = height;
      
      $(domEl).width(width);
      $(domEl).height(width);
      $(domEl).children("iframe").remove();
      
      $('<div class="mpc-youtube-iframe"></div>').appendTo(domEl);
      
      $('<iframe class="mpc-youtube-iframe" width="' 
            + (width - 20)
            + '" height="'
            + (height - 20)
            + '" src="'
            + url
            + '" frameborder="0" allowfullscreen></iframe>').appendTo(domEl);
   }
   
}.init();
