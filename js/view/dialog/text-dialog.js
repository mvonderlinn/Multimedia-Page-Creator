TextDialog = {
   
   dlgLabel: "Text",

   init: function() {
      PageLoadedEvent.subscribe(this);
      ModifyCanvasElementEvent.subscribe(this);
      return this;

   },

   onModifyCanvasElement: function(domEl) {
      if($(domEl).hasClass("mpc-tool-text")) {      
         this.show( domEl );
      }
   },

   onPageLoaded: function() {
      $("#mpc-text-ok-btn").click(function() {
         $("#mpc-text-dlg").dialog("close");
         /**
         * An event should be triggered
         */
         TextDialog.applyProperties();
      });
      
      $("#mpc-text-color-field").ColorPicker( {
            onChange: function(col, inRgb) {
               $("#mpc-text-color-field").val(inRgb);
            
      }});
   },

   /**
    * Handler
    */
   show: function(domEl) {
      domEl = $(domEl);

      $("#mpc-text-font-family-sel").val($(domEl).attr("mpcFontFamily"));
      $("#mpc-text-font-size-sel").val($(domEl).attr("mpcFontSize"));
      $("#mpc-text-align-sel").val($(domEl).attr("mpcAlign"));
      $("#mpc-text-color-field").val($(domEl).attr("mpcColor"));

      $("#mpc-text-dlg").dialog({modal:true, title: this.dlgLabel});
   },
   
   applyProperties: function() {
      var properties = {
                        fontFamily: $("#mpc-text-font-family-sel").val(),
                        fontSize: $("#mpc-text-font-size-sel").val(),
                        align: $("#mpc-text-align-sel").val(),
                        color: $("#mpc-text-color-field").val()
                       };

      UpdateActiveElementEvent.trigger(properties);
   }

}.init();