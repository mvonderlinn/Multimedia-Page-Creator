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

      if( $(domEl).hasClass( "mpc-tool-oval" ) ){
         $(".mpc-tool-oval").removeClass( "mpc-active-el" );
         $(".mpc-tool-oval").resizable( "destroy" );
         $(domEl).addClass( "mpc-active-el" );
         this.enableResizing( $(domEl) );
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
      var canvasEl = $(domEl).children("canvas").get(0);
      
      canvasEl.width = $(domEl).width(); 
      canvasEl.height = $(domEl).height();
      
      var ctx = canvasEl.getContext("2d");
      ctx.strokeStyle = $(domEl).attr("mpcBorderColor");
      ctx.lineWidth = $(domEl).attr("mpcBorderWidth");
      
      
      var resizeBorder = $(domEl).hasClass("mpc-tool") ? 20 : 5,
      x = 0 + resizeBorder + parseInt($(domEl).attr("mpcBorderWidth")),
      y = 0 + resizeBorder + parseInt($(domEl).attr("mpcBorderWidth")),
      w = canvasEl.width - resizeBorder - $(domEl).attr("mpcBorderWidth") - x,
      h = canvasEl.height - resizeBorder - $(domEl).attr("mpcBorderWidth") - y;
      
      
      
      var kappa = .5522848;
      ox = (w / 2) * kappa, // control point offset horizontal
      oy = (h / 2) * kappa, // control point offset vertical
      xe = x + w,           // x-end
      ye = y + h,           // y-end
      xm = x + w / 2,       // x-middle
      ym = y + h / 2;       // y-middle

      ctx.beginPath();
      ctx.moveTo(x, ym);
      ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
      ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
      ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
      ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
      ctx.closePath();
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
         CanvasElementSelectedEvent.trigger(this);
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
      $('<div class="mpc-tool mpc-tool-oval" mpcBorderWidth="1" mpcIsFilled="false" mpcFillColor="#ffffff" mpcBorderColor="#000000"><canvas></canvas><div class="mpc-caption">oval</div></div>').appendTo("#mpc-tools");
      $('.mpc-tool.mpc-tool-oval').draggable({revert: true});
      this.paint($('.mpc-tool.mpc-tool-oval'));
   }
   
}.init();