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
         OvalDialog.applyProperties();
         var domEl = $(".mpc-tool-oval.mpc-active-el");
         OvalController.paint(domEl);
         $("#mpc-oval-dlg").dialog("close");         
      });
      
      $("#mpc-oval-dlg-border-color").ColorPicker( {
            onChange: function(col, inRgb) {
               $("#mpc-oval-dlg-border-color").text("#"+inRgb);
      }});
      
      $("#mpc-oval-dlg-fill-color").ColorPicker( {
            onChange: function(col, inRgb) {
               $("#mpc-oval-dlg-fill-color").text("#"+inRgb);
      }});
   },
   
   /**
    * Handler for
    */
   onModifyCanvasElement: function(domEl) {
      var domEl = $(".mpc-tool-oval.mpc-active-el");
   
      $("#mpc-oval-dlg-width").val( domEl.attr("mpcBorderWidth") );
      if("true" === domEl.attr("mpcIsFilled") ) {
         $("#mpc-oval-dlg-is-filled").attr("checked", "checked");
      }
      else {
         $("#mpc-oval-dlg-is-filled").removeAttr("checked");
      }
      $("#mpc-oval-dlg-fill-color").text(domEl.attr("mpcFillColor"));
      $("#mpc-oval-dlg-border-color").text(domEl.attr("mpcBorderColor"));
      
      $("#mpc-oval-dlg").dialog({modal:true});
   },
   
   applyProperties: function() {
      var domEl = $(".mpc-tool-oval.mpc-active-el");
      
      domEl.attr("mpcBorderWidth", parseFloat($("#mpc-oval-dlg-width").val()) );
      domEl.attr("mpcIsFilled", "" + $("#mpc-oval-dlg-is-filled").is(":checked") );
      domEl.attr("mpcFillColor", $("#mpc-oval-dlg-fill-color").text() );
      domEl.attr("mpcBorderColor", $("#mpc-oval-dlg-border-color").text() );
   }
   
}.init();