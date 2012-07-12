/**
 * Represents controller for all the oval objects,
 * including tool icons and canvas oval shapes
 */
OvalController = {

   /**
    * Bind event listening to controller
    */
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);
      CanvasElementSelectedEvent.subscribe(this);
      
      return this;      
   },
   
   /**
    * Handler being called right after openning MPC
    */
   onPageLoaded: function() {
      $(".mpc-tool-oval").each(function() {
         OvalController.paint( this );
      });
      $(".mpc-tool-oval").draggable({
         revert: true,
         stop: function(ev, ui) {
            
         }
      });
   },
   
   /**
    * Handler for dropping a tool on canvas
    */
   onCanvasContainerDrop: function(domEl) {
      if ( domEl.hasClass("mpc-tool-oval") && domEl.hasClass( "mpc-tool" ) ) {
         domEl.draggable({revert: false});
         this.locateOnCanvas( domEl );
         this.addDefaultAttrs( domEl );
         this.paint( domEl );
         this.addNewIcon();
      }      
   },
   
   /**
    * Handler for selecting oval
    */
   onCanvasElementSelected: function( domEl ) {

      if( $(domEl).hasClass("mpc-tool-oval") ) {
         $(".mpc-tool-oval").removeClass("mpc-active-el");
         $(domEl).addClass("mpc-active-el");
      }

   },
   
   /**
    * Paints an oval basing on following properties:
    *   mpcBorderWidth 
    *   mpcIsFilled 
    *   mpcFillColor 
    *   mpcBorderColor
    */
   paint: function(domEl) {
      var bordersWidth = $(domEl).hasClass("mpc-tool") ? 20 : 5;
      
      var canvasEl = $(domEl).children("canvas").get(0);
      
      canvasEl.width = $(domEl).width(); 
      canvasEl.height = $(domEl).height();
      
      var ctx = canvasEl.getContext("2d");
      ctx.strokeStyle = $(domEl).attr("mpcBorderColor");
      ctx.lineWidth = $(domEl).attr("mpcBorderWidth");
      ctx.beginPath();
      var smallerSize = canvasEl.width < canvasEl.height ? canvasEl.width : canvasEl.height,
          x = parseInt( canvasEl.width / 2),
          y = parseInt( canvasEl.height / 2),
          radius = parseInt( smallerSize / 2) - bordersWidth;
          
      ctx.arc( x, y, radius, 0, Math.PI*2, true );
      ctx.stroke();
      
      if( "true" === $(domEl).attr("mpcIsFilled") ) {
         ctx.fillStyle = $(domEl).attr("mpcFillColor");
         ctx.fill();
      }
   },
   
   /**
    * Transforms a tool icon into graphical object
    * on canvas
    */
   locateOnCanvas: function(domEl) {
     domEl.removeClass( "mpc-tool" );
     
     domEl.children( ".mpc-caption" ).remove();

     domEl.detach();
     domEl.appendTo("#mpc-canvas-container");
     
     $(".mpc-tool-oval").removeClass("mpc-active-el");
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
         ModifyCanvasElementEvent.trigger(this);
      });      
   },
   
   enableResizing: function(domEl) {
     domEl.resizable({
        disabled: false,
        handles: "n, e, s, w",
        containment: "#mpc-canvas-container",
        resize: function(event, ui) {
           OvalController.paint( this );
        }
     });   
   },
      
   /**
    * Initializes default properties
    * of newly created canvas graphical object
    */
   addDefaultAttrs: function( domEl ) {
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
      $('<div class="mpc-tool mpc-tool-oval"><canvas></canvas><div class="mpc-caption">oval</div></div>').appendTo("#mpc-tools");
      $('.mpc-tool.mpc-tool-oval').draggable({revert: true});
      this.paint($('.mpc-tool.mpc-tool-oval'));
   }
   
}.init();