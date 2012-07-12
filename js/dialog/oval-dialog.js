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
      $("#mpc-oval-dlg-ok-btn").click(function() {
         
         $("#mpc-oval-dlg").dialog("close");
      });
   },
   
   /**
    * Handler for
    */
   onModifyCanvasElement: function(domEl) {
      $("#mpc-oval-dlg").dialog({modal:true});
   }
   
}.init();