TextController = {
   activeElement: null,
   
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);

      return this;
   },
   
   onPageLoaded: function() {
      $(".mpc-tool-text").mouseup(function(ev) {
         ev.preventDefault();
         $(this).attr("contenteditable", "true");
         $(".mpc-tool-text").focus();
      });
      
      $(".mpc-tool-text").draggable();
      
      $("#mpc-text-ok-btn").on("click", function(){
                  
         TextController.activeElement.css("font-family", $("#mpc-text-font-family-sel").val() );
         TextController.activeElement.css("font-size", $("#mpc-text-font-size-sel").val() +"px" );
         TextController.activeElement.css("line-height", $("#mpc-text-font-size-sel").val() +"px" );
         TextController.activeElement.css("color", "#" + $("#mpc-text-color-field").val() );
         TextController.activeElement.css("text-align", $("#mpc-text-align-sel").val() );
         TextController.activeElement.css("-moz-transform", "rotate(" + parseInt($("#mpc-text-rotate-deg").val()) + "deg)");
         TextController.activeElement.css("-webkit-transform", "rotate(" + parseInt($("#mpc-text-rotate-deg").val()) + "deg)");
         
         $("#mpc-text-dlg").dialog( "close" );
      });
   },
   
   onCanvasContainerDrop: function(domEl) {
   
      if(domEl.hasClass("mpc-tool-text") && !domEl.hasClass("ui-resizable") ) {
      
         
         TextController.activeElement = domEl;

         $("#mpc-text-dlg").dialog({modal: true});

         domEl.removeClass("mpc-tool");
         domEl.children(".mpc-caption").remove();
         domEl.detach();
         domEl.appendTo("#mpc-canvas-container");
         
         domEl.css("line-height", "16px");
         domEl.css("overflow", "hidden");
         domEl.css("text-shadow", "none");
         
         domEl.resizable({
            ghost: false,
            grid: false,
            helper: false,
            handles: "n, e, s, w"
         });

         domEl.draggable({
            containment: $("#mpc-canvas-container")
         });

         domEl.dblclick(function() {
            $("#mpc-text-dlg").dialog({modal: true});
         });
         
         $("#mpc-text-color-field").ColorPicker( {
            onChange: function(col, inRgb) {
               $("#mpc-text-color-field").val(inRgb);
            
            }});
      }   
   }
   
}.init();