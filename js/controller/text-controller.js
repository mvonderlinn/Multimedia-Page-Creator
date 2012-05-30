TextController = {
   
   activeElement: null,
   
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);
      CanvasElementSelectedEvent.subscribe(this);
      EditCanvasElementEvent.subscribe(this);

      return this;
   },
   
   onPageLoaded: function() {
      TextController.initToolIcon();
      
      $("#mpc-text-ok-btn").bind("click", function(){
         TextController.applyDialogProperties();
      });
      
      $("#mpc-text-color-field").ColorPicker( {
            onChange: function(col, inRgb) {
               $("#mpc-text-color-field").val(inRgb);
            
      }});
   },
   
   applyDialogProperties: function() {
         TextController.activeElement.children("textarea").css("font-family", $("#mpc-text-font-family-sel").val() );
         TextController.activeElement.children("textarea").css("font-size", $("#mpc-text-font-size-sel").val() +"px" );
         TextController.activeElement.children("textarea").css("line-height", $("#mpc-text-font-size-sel").val() +"px" );
         TextController.activeElement.children("textarea").css("color", "#" + $("#mpc-text-color-field").val() );
         TextController.activeElement.children("textarea").css("text-align", $("#mpc-text-align-sel").val() );
         
         TextController.activeElement.css("-moz-transform", "rotate(" + parseInt($("#mpc-text-rotate-deg").val()) + "deg)");
         TextController.activeElement.css("-webkit-transform", "rotate(" + parseInt($("#mpc-text-rotate-deg").val()) + "deg)");
         
         $("#mpc-text-dlg").dialog( "close" );   
   },
   
   createNewToolIcon: function() {
      $('<div class="mpc-tool mpc-tool-text">Abc...<div class="mpc-caption"  contenteditable="false">text</div></div>').appendTo("#mpc-tools");
      TextController.initToolIcon();
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
         
         TextController.initCanvasElement(domEl);
         
         TextController.bindEvHandlersTo(domEl);

         TextController.createNewToolIcon();
      }
   },

   onCanvasElementSelected: function(domEl) {

      if( domEl.hasClass("mpc-tool-text") ) {
         TextController.activeElement = domEl;
      }
      
   },

   onEditCanvasElement: function(domEl) {
      if( domEl.hasClass("mpc-tool-text") ) {

         alert("edit yes");
         $("#mpc-text-dlg").dialog({modal: true});
      }
   },

   initCanvasElement: function(domEl) {
      $("#mpc-text-dlg").dialog({modal: true});

      domEl.removeClass("mpc-tool");
      domEl.children(".mpc-caption").remove();
      
      domEl.detach();
      domEl.appendTo("#mpc-canvas-container");

      /**
       * Positioning
       */
      var topUpdated = domEl.position().top - $("#mpc-canvas-wrapper").position().top;
      var leftUpdated = domEl.position().left - $("#mpc-canvas-wrapper").position().left;

      domEl.css("top", topUpdated + "px");
      domEl.css("left", leftUpdated + "px");

      domEl.children("textarea").css("line-height", "16px");
      domEl.css("overflow", "hidden");
      domEl.children("textarea").css("text-shadow", "none");
      domEl.children("textarea").css("text-align", "center");
      
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
   },

   bindEvHandlersTo: function(domEl) {
      domEl.dblclick(function() {
          CanvasElementSelectedEvent.trigger(domEl)            
      });

      domEl.bind("mousedown", function(ev) {
         CanvasElementSelectedEvent.trigger(domEl)
      });      
   }

}.init();
