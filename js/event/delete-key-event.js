DeleteKeyEvent = new EventCreator("onDeleteKey", {
   init:  function() {
      PageLoadedEvent.subscribe(this);
      return this;
      
   },

   onPageLoaded:  function() {
      $(document).keypress(function(ev) {         
         var delKeyCode = 46;
         var k = ev.which ? ev.which : ev.keyCode;
         if(k === delKeyCode) {
            DeleteKeyEvent.trigger();
         }
      });
   }
}).init();