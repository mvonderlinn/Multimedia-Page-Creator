HyperlinkController = {
   init: function() {
      PageLoadedEvent.subscribe(this);
      
      return this;   
   },
   
   onPageLoaded: function() {
   }
   
}.init();