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
      var imgDataURLs = [];

      var files = document.getElementById("mpc-image-dlg-file").files;
      var len = files.length;
      
      for(var index in files) {
         var f = files[index];
         
         if ( "object" == typeof f 
               && 'type' in f 
               && f.type.match( 'image.*' ) ) {
            var reader = new FileReader();
            
            reader.onload = (function(index, len, ar) {
               return function(ev) {
                  
                  ar.push(ev.target.result);
                  
                  if(index == (len -1) ){
                     var properties = {
                           mpcImages: imgDataURLs
                          };

                     UpdateActiveElementEvent.trigger(properties);
                  }

               };
            })(index,len,imgDataURLs);
            
            reader.readAsDataURL( f );
         }
      }
   }
   
}.init();