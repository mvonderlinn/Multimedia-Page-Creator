HyperlinkDialog = {
   dlgLabel: "Hyperlink",

   init: function() {
      PageLoadedEvent.subscribe(this);
      ModifyCanvasElementEvent.subscribe(this);
      return this;

   },

   onModifyCanvasElement: function(domEl) {
      if($(domEl).hasClass("mpc-tool-youtube")) {      
         this.show( domEl );
      }
   },

   onPageLoaded: function() {
      $("#mpc-youtube-ok-btn").click(function() {
         $("#mpc-youtube-dlg").dialog("close");
         YoutubeDialog.applyProperties();
      });
   },
   
   /**
    * Handler for
    */
   show: function(domEl) {
      domEl = $(domEl);
      
      $("#mpc-youtube-dlg-url").text(domEl.attr("mpcURL"));

      $("#mpc-youtube-dlg").dialog({modal:true, title: this.dlgLabel});
   },
   
   applyProperties: function() {
      var properties = {
                        mpcURL: $("#mpc-youtube-dlg-url").val()
                       };

      UpdateActiveElementEvent.trigger(properties);
   }   
   
}.init();