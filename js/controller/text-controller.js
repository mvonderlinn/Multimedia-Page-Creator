TextController = {
   activeElement: null,
   
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);

      return this;
   },
   
   onPageLoaded: function() {
      TextController.initToolIcon();
      
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
      
      $("#mpc-text-color-field").ColorPicker( {
            onChange: function(col, inRgb) {
               $("#mpc-text-color-field").val(inRgb);
            
      }});
   },
   
   initToolIcon: function() {
      $(".mpc-tool-text").mouseup(function(ev) {
         ev.preventDefault();
         $(".mpc-tool-text").focus();
      });
      
      $(".mpc-tool-text").draggable();
   },
   
   onCanvasContainerDrop: function(domEl) {
   
      if(domEl.hasClass("mpc-tool-text") && !domEl.hasClass("ui-resizable") ) {
      
         
         TextController.activeElement = domEl;

         $("#mpc-text-dlg").dialog({modal: true});

         domEl.removeClass("mpc-tool");
         domEl.children(".mpc-caption").remove();
         
         domEl.detach();
         domEl.appendTo("#mpc-canvas-container");
         
         domEl.attr("contenteditable", "true");
         
         /**
          * Positioning
          */
         var topUpdated = domEl.position().top - $("#mpc-canvas-wrapper").position().top;
         var leftUpdated = domEl.position().left - $("#mpc-canvas-wrapper").position().left;
         
         domEl.css("top", topUpdated + "px");
         domEl.css("left", leftUpdated + "px");
         
         domEl.css("line-height", "16px");
         domEl.css("overflow", "hidden");
         domEl.css("text-shadow", "none");
         domEl.css("text-align", "center");
         domEl.css("padding", "3px");
         
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

         domEl.on("mousedown", function() {
            TextController.activeElement = domEl;
         });
         
         $('<div class="mpc-tool mpc-tool-text">Abc...<div class="mpc-caption"  contenteditable="false">text</div></div>').appendTo("#mpc-tools");
         
         TextController.initToolIcon();
      }
   }
   
}.init();