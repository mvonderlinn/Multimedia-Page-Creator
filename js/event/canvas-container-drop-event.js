CanvasContainerDropEvent = {
      
   listeners: [],

   init: function() {
      PageLoadedEvent.subscribe(this);
      
      return this;
   },
   
   onPageLoaded: function() {
      $( "#mpc-canvas-container" ).droppable({
         drop: function(ev, ui) {
            CanvasContainerDropEvent.trigger(ui.draggable);
         }
      });
   },
   
   /**
    * ChainOfResponsibility
    */
   trigger: function(draggable) {
      for(var oKey in this.listeners) {
         var obj = this.listeners[oKey];
         if("onCanvasContainerDrop" in obj) {
            obj.onCanvasContainerDrop(draggable);
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