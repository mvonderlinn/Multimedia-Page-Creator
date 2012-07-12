TextController = {
   
   activeElement: null,
   
   nextId: 1,
   
   init: function() {
      
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);
      /**
       * triggers
       */
      CanvasElementSelectedEvent.subscribe(this);
      ModifyCanvasElementEvent.subscribe(this);

      return this;
   },
   
   onPageLoaded: function() {
      TextController.createNewToolIcon();
      
      $("#mpc-text-ok-btn").bind("click", function(){
         TextController.applyDialogProperties();
      });
      
      $("#mpc-text-color-field").ColorPicker( {
            onChange: function(col, inRgb) {
               $("#mpc-text-color-field").val(inRgb);
            
      }});
   },
   
   createNewToolIcon: function() {
      $('<div class="mpc-tool mpc-tool-text"><textarea>Abc...</textarea><div class="mpc-caption" >text</div></div>').appendTo("#mpc-tools");
      $(".mpc-tool.mpc-tool-text").draggable();
   },
   
   applyDialogProperties: function() {
   
         TextController.activeElement.children("textarea").css("font-family", $("#mpc-text-font-family-sel").val() );
         TextController.activeElement.children("textarea").css("font-size", $("#mpc-text-font-size-sel").val() +"px" );
         TextController.activeElement.children("textarea").css("line-height", $("#mpc-text-font-size-sel").val() +"px" );
         TextController.activeElement.children("textarea").css("color", "#" + $("#mpc-text-color-field").val() );
         TextController.activeElement.children("textarea").css("text-align", $("#mpc-text-align-sel").val() );
         
         TextController.activeElement.css("-moz-transform", "rotate(" + parseInt($("#mpc-text-rotate-deg").val()) + "deg)");
         TextController.activeElement.css("-webkit-transform", "rotate(" + parseInt($("#mpc-text-rotate-deg").val()) + "deg)");
         
         var textareaWidth = TextController.activeElement.css( "width" );
         var textareaHeight = TextController.activeElement.css( "height" );

         TextController.activeElement.children("textarea").css( "width", textareaWidth );
         TextController.activeElement.children("textarea").css( "height", textareaHeight );
         
         // $("#mpc-text-dlg").dialog( "close" );
   },
   
   onCanvasElementSelected: function(domEl) {

      if( $(domEl).hasClass("mpc-tool-text") ) {
         TextController.activeElement = domEl;
      }
      
   },

   onModifyCanvasElement: function(domEl) {
      if( domEl.hasClass("mpc-tool-text") ) {

         var fontSize = parseInt(TextController.activeElement.children("textarea").css("fontSize"));
         $(".mpc-text-font-size-sel option").removeAttr( "selected" );
         $(".mpc-text-font-size-sel option[value=" + fontSize + "]").attr( "selected", "selected" );
         
         var fontFamily = TextController.activeElement.children("textarea").css("fontFamily");
         $(".mpc-text-font-family-sel option").removeAttr( "selected" );
         $(".mpc-text-font-family-sel option[value=" + fontFamily + "]").attr( "selected", "selected" );

         var align = TextController.activeElement.children("textarea").css("textAlign");
         $(".mpc-text-align-sel option").removeAttr( "selected" );
         $(".mpc-text-align-sel option[value=" + align + "]").attr( "selected", "selected" );

         var color = TextController.activeElement.children("textarea").css("color").replace("#", "");
         $(".mpc-text-color-field").val( color );
         
         var rotate = parseInt(TextController.activeElement.css("-moz-transform") );
         $(".mpc-text-rotate-deg").val( rotate );
         
         // $("#mpc-text-dlg").dialog( { modal: true } );

      }
   },
   
   onCanvasContainerDrop: function(domEl) {
   
      if ( domEl.hasClass("mpc-tool-text") && !domEl.hasClass("ui-resizable") ) {
         
         TextController.activeElement = domEl;
         
         domEl.attr( "id", "text" + TextController.nextId ++ );
         
         TextController.initCanvasElement(domEl);
         
         TextController.bindEvHandlersTo(domEl);

         TextController.createNewToolIcon();
      }
   },

   initCanvasElement: function(domEl) {
      // $("#mpc-text-dlg").dialog({modal: true});

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
         handles: "n, e, s, w",
         containment: "#mpc-canvas-container"
      });

      domEl.draggable({
         containment: "#mpc-canvas-container"
      });   
   },

   bindEvHandlersTo: function(domEl) {
      var domEl = TextController.activeElement;
      
      domEl.dblclick(function(ev) {
         alert( "dom element" + TextController.activeElement.id );
         ModifyCanvasElementEvent.trigger( domEl );
      });

      domEl.bind("mousedown", function(ev) {
         CanvasElementSelectedEvent.trigger( this );
      });      
   }

}.init();
