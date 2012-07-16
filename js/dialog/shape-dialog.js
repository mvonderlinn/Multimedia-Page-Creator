/**
 * Shape dialog
 */
ShapeDialog = {
   /**
    *
    */
   init: function() {
      PageLoadedEvent.subscribe(this);
      
      return this;
   },
   
   onPageLoaded: function() {
      $("#mpc-shape-dlg-ok-btn").click(function() {
         $("#mpc-shape-dlg").dialog("close");
         ShapeDialog.applyProperties();
      });
      
      $("#mpc-shape-dlg-border-color").ColorPicker( {
            onChange: function(col, inRgb) {
               $("#mpc-shape-dlg-border-color").text("#"+inRgb);
      }});
      
      $("#mpc-shape-dlg-fill-color").ColorPicker( {
            onChange: function(col, inRgb) {
               $("#mpc-shape-dlg-fill-color").text("#"+inRgb);
      }});
   },
   
   /**
    * Handler for
    */
   show: function(domEl, dlgLable) {
      
      if("true" === domEl.attr("mpcIsStroked") ) {
         $("#mpc-shape-dlg-is-stroked").attr("checked", "checked");
      }
      else {
         $("#mpc-shape-dlg-is-stroked").removeAttr("checked");
      }

      $("#mpc-shape-dlg-width").val( domEl.attr("mpcBorderWidth") );

      if("true" === domEl.attr("mpcIsFilled") ) {
         $("#mpc-shape-dlg-is-filled").attr("checked", "checked");
      }
      else {
         $("#mpc-shape-dlg-is-filled").removeAttr("checked");
      }

      $("#mpc-shape-dlg-fill-color").text(domEl.attr("mpcFillColor"));

      $("#mpc-shape-dlg-border-color").text(domEl.attr("mpcBorderColor"));

      $("#mpc-shape-dlg").dialog({modal:true});
   },
   
   applyProperties: function() {
      var properties = {
                        mpcIsStroked:     "" + $("#mpc-oval-dlg-is-stroked").is(":checked"),
                        mpcBorderWidth:   parseFloat($("#mpc-oval-dlg-width").val()),
                        mpcIsFilled:      "" + $("#mpc-oval-dlg-is-filled").is(":checked"),
                        mpcFillColor:     $("#mpc-oval-dlg-fill-color").text(),
                        mpcBorderColor:   $("#mpc-oval-dlg-border-color").text()
                       };

      UpdateActiveElementEvent.trigger(properties);
   }
   
}.init();