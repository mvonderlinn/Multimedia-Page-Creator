/**
 * Oval dialog
 */
OvalDialog = {
   /**
    * 
    */
   init: function() {
      PageLoadedEvent.subscribe(this);
      ModifyCanvasElementEvent.subscribe(this);
      
      return this;      
   },
   
   onPageLoaded: function() {
   },
   
   /**
    * Handler for
    */
   onModifyCanvasElement: function(domEl) {
   },   
   
}.init();