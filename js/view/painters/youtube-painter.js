YoutubePainter = {
   
   init: function() {
      PaintElementEvent.subscribe(this);
      PageLoadedEvent.subscribe(this);

      return this;
   }, 

   onPageLoaded: function() {

      onYouTubeIframeAPIReady = function() {
         player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'u1zgFlCw8Aw',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      };

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
          url = url + "?html5=1";
      alert(url);
      width = 500;
      height = 400;
      
      $(domEl).width(width);
      $(domEl).height(width);
      $(domEl).children("iframe").remove();
      
      $('<iframe class="mpc-youtube-iframe" width="' 
            + width 
            + '" height="'
            + height
            + '" src="'
            + url
            + '" frameborder="0" allowfullscreen></iframe>').appendTo(domEl);
          
     // $(domEl).children(".mpc-youtube-iframe").hide();
    
    

   }
   
}.init();
