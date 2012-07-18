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
          
          url = url.replace("watch?v=","embed/");
          
      width=450;
      height=338;
      
      $(domEl).width(width);
      $(domEl).height(width);
      $(domEl).children("iframe").remove();
      
      $('<iframe width="' 
            + width 
            + '" height="'
            + height
            + '" src="'
            + url
            + '" frameborder="0" allowfullscreen></iframe>').appendTo(domEl);
            
      $(domEl).children("iframe").click(function() {
         alert("moby");
      });
   }
   
}.init();
