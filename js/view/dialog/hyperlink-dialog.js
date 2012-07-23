HyperlinkDialog = {
   dlgLabel: "Hyperlink",

   init: function() {
      PageLoadedEvent.subscribe(this);
      ModifyCanvasElementEvent.subscribe(this);
      return this;

   },

   onModifyCanvasElement: function(domEl) {
      if($(domEl).hasClass("mpc-tool-hyperlink")) {      
         this.show( domEl );
      }
   },

   onPageLoaded: function() {
      $("#mpc-hyperlink-ok-btn").click(function() {
         $("#mpc-hyperlink-dlg").dialog("close");
         YoutubeDialog.applyProperties();
      });
   },
   
   /**
    * Handler for
    */
   show: function(domEl) {
      domEl = $(domEl);
      
      $("#mpc-hyperlink-dlg-url").text(domEl.attr("mpcURL"));

      $("#mpc-hyperlink-dlg").dialog({modal:true, title: this.dlgLabel});
   },
   
   applyProperties: function() {
      var properties = {
                        mpcURL: $("#mpc-hyperlink-dlg-url").val()
                       };

      UpdateActiveElementEvent.trigger(properties);
   }   
   
}.init();