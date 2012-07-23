ImageDialog = {
   dlgLabel: "Image",

   init: function() {
      PageLoadedEvent.subscribe(this);
      ModifyCanvasElementEvent.subscribe(this);
      return this;

   },

   onModifyCanvasElement: function(domEl) {
      if($(domEl).hasClass("mpc-tool-image")) {      
         this.show( domEl );
      }
   },

   onPageLoaded: function() {
      $("#mpc-image-ok-btn").click(function() {
         $("#mpc-image-dlg").dialog("close");
         ImageDialog.applyProperties();
      });
   },
   
   /**
    * Handler for
    */
   show: function(domEl) {
      domEl = $(domEl);
      
      $("#mpc-image-dlg").dialog({modal:true, title: this.dlgLabel});
   },
   
   applyProperties: function() {
      var imagDataURLs = [];

      var files = document.getElementById("mpc-image-dlg-file").files;

      for(var index in files) {
         var f = files[index];
         console.log(f);
      }
      

      var properties = {
                        mpcImages: imagDataURLs
                       };

      UpdateActiveElementEvent.trigger(properties);
   }   
   
}.init();