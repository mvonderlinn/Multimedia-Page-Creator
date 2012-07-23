ImageController = {
   
   shapeClass: "mpc-tool-image",
   separator: "s-e-p-a-r-a-t-o-r",
   
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);
      CanvasElementSelectedEvent.subscribe(this);
      DeleteKeyEvent.subscribe(this);
      UpdateActiveElementEvent.subscribe(this);
      
      return this; 
   },

   /**
    * Handler being called right after openning MPC
    */
   onPageLoaded: function() {
      this.addNewIcon();
   },

   /**
    * Handler for dropping a tool on canvas
    */
   onCanvasContainerDrop: function(domEl) {
      if ( domEl.hasClass(this.shapeClass) && domEl.hasClass( "mpc-tool" ) ) {
         domEl.draggable({revert: false});
         this.locateOnCanvas( domEl );
         this.addDefaultAttrs( domEl );
         /**
          * calling a dialog to initialize youtube element
          */
         ModifyCanvasElementEvent.trigger(domEl);
         this.addNewIcon();
      }
   },

   /**
    * Handler for selecting shape
    */
   onCanvasElementSelected: function( domEl ) {
      if( $(domEl).hasClass( this.shapeClass ) ){
         $(".mpc-active-el").resizable( "destroy" );
         $(".mpc-active-el").removeClass( "mpc-active-el" );         
         $(domEl).addClass( "mpc-active-el" );
         this.enableResizing( $(domEl) );
      }
   },

   /**
    * Handler for selecting shape
    */
   onDeleteKey: function() {
      $("." + this.shapeClass + ".mpc-active-el").remove();
   },

   onUpdateActiveElement: function(properties) {
      if( $("." + this.shapeClass + ".mpc-active-el").length ) {
         var domEl = $( "." + this.shapeClass + ".mpc-active-el" );

         domEl.attr("mpgImages", properties.mpcImages.join(ImageController.separator) );
         
         PaintElementEvent.trigger(domEl);
      }
   },

   
   /**
    * Transforms a tool icon into graphical object
    * on canvas
    */
   locateOnCanvas: function(domEl) {
      domEl.removeClass( "mpc-tool" );
      
      domEl.children( ".mpc-caption" ).remove();
      domEl.children( "img" ).remove();

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
         handles: "n, e, s, w, ne, se, sw, nw",
         containment: "#mpc-canvas-container",
         stop: function(event, ui) {
            PaintElementEvent.trigger( this );
         }
      });   
   },
         
   /**
    * Initializes default properties
    * of newly created canvas graphical object
    */
   addDefaultAttrs: function( domEl ) {
      domEl.attr("mpcimages", "");
   },

   addNewIcon: function() {
      this.putIconInToolset();
      $('.mpc-tool.' + this.shapeClass).draggable({revert: true});
   },
   
   putIconInToolset: function() {
      $('<div class="mpc-tool mpc-tool-image"><img src="im/image-icon.png" alt="" width="50" height="36" style="border:0"/><div class="mpc-caption">image</div></div>').appendTo("#mpc-tools");
   }
   
}.init();