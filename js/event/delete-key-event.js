DeleteKeyEvent = {

   listeners: [],

   init: function() {
      PageLoadedEvent.subscribe(this);

      return this;
   },

   onPageLoaded: function() {
      $(document).keypress(function(ev) {         
         var delKeyCode = 46;
         var k = ev.which ? ev.which : ev.keyCode;
         if(k === delKeyCode) {
            DeleteKeyEvent.trigger();
         }
      });
   },

   /**
    * ChainOfResponsibility
    */
   trigger: function() {
      for(var oKey in this.listeners) {
         var obj = this.listeners[oKey];
         if("onDeleteKey" in obj) {
            obj.onDeleteKey();
         }
      }
   },

   subscribe: function(obj) {
      this.listeners.push(obj);
   },

   unsubscribe: function(obj) {
      /**
      * searching for an index of the object passed
      */
      var foundIndex = -1;
      for(var index = 0; index < this.listeners.length; index++) {
         var iteratedObj = this.listeners[index];
         if(obj == iteratedObj) {
            foundIndex = index;
         }
      }
      
      if(foundIndex >= 0) {
         /**
         * removing found listener
         */
         this.listeners = this.listeners.splice(foundIndex + 1, 1);
      }
   }

}.init();