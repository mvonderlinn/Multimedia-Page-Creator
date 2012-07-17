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
