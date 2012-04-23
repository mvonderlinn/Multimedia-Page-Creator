TextController = {
   init: function() {
      PageLoadedEvent.subscribe(this);

      return this;      
   },
   
   onPageLoaded: function() {
      $(".mpc-tool-text").mouseup(function(ev) {
         ev.preventDefault();
         $(this).attr("contenteditable", "true");
         $(".mpc-tool-text").focus();
      });   
   }
   
}.init();