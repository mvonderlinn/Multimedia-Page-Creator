PaintElementEvent = {

   listeners: [],

   /**
    * ChainOfResponsibility
    */
   trigger: function(domEl) {
      for(var oKey in this.listeners) {
         var obj = this.listeners[oKey];
         if("onPaintElement" in obj) {
            obj.onPaintElement(domEl);
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

};