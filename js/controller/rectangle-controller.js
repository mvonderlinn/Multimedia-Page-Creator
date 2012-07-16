RectangleController = {
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);
      CanvasElementSelectedEvent.subscribe(this);
      DeleteKeyEvent.subscribe(this);
      UpdateActiveElementEvent.subscribe(this);
      
      return this;      
   },
   
   onPageLoaded: function() {
      $(".mpc-tool-rectangle").each(function() {
         RectangleController.paint( this );
      });
      
      $(".mpc-tool-rectangle").draggable({
         revert: true
      });      
   },
   
   onCanvasContainerDrop: function(domEl) {
      if ( domEl.hasClass("mpc-tool-rectangle") && domEl.hasClass( "mpc-tool" ) ) {
         domEl.draggable({revert: false});
         this.locateOnCanvas( domEl );
         this.addDefaultAttrs( domEl );
         this.paint( domEl );
         this.addNewIcon();
      }
   },
   
   onCanvasElementSelected: function(domEl) {
      if( $(domEl).hasClass( "mpc-tool-rectangle" ) ){
         $(".mpc-active-el").resizable( "destroy" );
         $(".mpc-active-el").removeClass( "mpc-active-el" );         
         $(domEl).addClass( "mpc-active-el" );
         this.enableResizing( $(domEl) );
      }   
   },
   
   onDeleteKey: function() {
      $(".mpc-tool-rectangle.mpc-active-el").remove();   
   },
   
   onUpdateActiveElement: function(properties) {   
      if( $(".mpc-tool-rectangle.mpc-active-el").length ) {

         var domEl = $( ".mpc-tool-rectangle.mpc-active-el" );

         domEl.attr( "mpcIsStroked",    properties.mpcIsStroked );
         domEl.attr( "mpcBorderWidth",  properties.mpcBorderWidth );
         domEl.attr( "mpcIsFilled",     properties.mpcIsFilled );
         domEl.attr( "mpcFillColor",    properties.mpcFillColor );
         domEl.attr( "mpcBorderColor",  properties.mpcBorderColor );

         RectangleController.paint(domEl);
      }
   },

   paint: function(domEl) {
      var canvasEl = $(domEl).children("canvas").get(0);
      
      canvasEl.width = $(domEl).width();
      canvasEl.height = $(domEl).height();
      
      var ctx = canvasEl.getContext("2d");
      ctx.strokeStyle = $(domEl).attr("mpcBorderColor");
      ctx.fillStyle = $(domEl).attr("mpcFillColor");
      ctx.lineWidth = $(domEl).attr("mpcBorderWidth");

      var resizeBorder = $(domEl).hasClass("mpc-tool") ? 20.5 : 5,
          x = 0 + resizeBorder + parseInt( $(domEl).attr("mpcBorderWidth") ),
          y = 0 + resizeBorder + parseInt( $(domEl).attr("mpcBorderWidth") ),
          w = canvasEl.width - resizeBorder - $(domEl).attr("mpcBorderWidth") - x,
          h = canvasEl.height - resizeBorder - $(domEl).attr("mpcBorderWidth") - y;
      
      ctx.beginPath();

      ctx.rect( x, y, w, h );

      if( "true" === $(domEl).attr("mpcIsStroked") ) {
         ctx.stroke();
      }

      if( "true" === $(domEl).attr("mpcIsFilled") ) {
         ctx.fill();
      }
   },
   
   locateOnCanvas: function(domEl) {
     domEl.removeClass( "mpc-tool" );
     
     domEl.children( ".mpc-caption" ).remove();

     domEl.detach();
     domEl.appendTo("#mpc-canvas-container");
     
     $(".mpc-active-el").resizable( "destroy" );
     $(".mpc-active-el").removeClass("mpc-active-el");
     
     $(domEl).addClass("mpc-active-el");
     
     /**
      * Positioning
      */
     var topUpdated = domEl.position().top - $("#mpc-canvas-wrapper").position().top;
     var leftUpdated = domEl.position().left - $("#mpc-canvas-wrapper").position().left;

     domEl.css("top", topUpdated + "px");
     domEl.css("left", leftUpdated + "px");
     domEl.css("overflow", "hidden");
     
     /**
      * Adding resizable and draggable properties
      */
     this.enableResizing(domEl);

     domEl.draggable({
        containment: "#mpc-canvas-container",
        start: function() {
            CanvasElementSelectedEvent.trigger(this);
        }
     });

     /**
      * chain of responsibility, kind of ..
      */
      domEl.click(function() {
         CanvasElementSelectedEvent.trigger(this);
      });

      domEl.dblclick(function() {
         CanvasElementSelectedEvent.trigger(this);
         ModifyCanvasElementEvent.trigger(this);
      });
   },
   
   enableResizing: function(domEl) {
     domEl.resizable({
        disabled: false,
        handles: "n, e, s, w, ne, se, sw, nw ",
        containment: "#mpc-canvas-container",
        resize: function(event, ui) {
           RectangleController.paint( this );
        }
     });   
   },
      
   /**
    * Initializes default properties
    * of newly created canvas graphical object
    */
   addDefaultAttrs: function( domEl ) {
      domEl.attr("mpcIsStroked", "true");
      domEl.attr("mpcBorderWidth", "1.0");
      domEl.attr("mpcIsFilled", "false");
      domEl.attr("mpcFillColor", "#000000");
      domEl.attr("mpcBorderColor", "#000000");
   },
   
   /**
    * Creates new icon in toolset
    * after creating new 
    */
   addNewIcon: function() {
      $('<div class="mpc-tool mpc-tool-rectangle" mpcIsStroked="true" mpcBorderWidth="1" mpcIsFilled="false" mpcFillColor="#ffffff" mpcBorderColor="#000000"><canvas></canvas><div class="mpc-caption">rectangle</div></div>').appendTo("#mpc-tools");
      $('.mpc-tool.mpc-tool-rectangle').draggable({revert: true});
      this.paint($('.mpc-tool.mpc-tool-rectangle'));
   }   
   
}.init();