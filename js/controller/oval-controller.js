OvalController = {
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);
      
      return this;      
   },
   
   onPageLoaded: function() {
      $(".mpc-tool-oval").each(function() {
         OvalController.paint( this );
      });
      $(".mpc-tool-oval").draggable();
   },
   
   paint: function(domEl) {
      var canvasEl = $(domEl).children("canvas").get(0);
      
      canvasEl.width = $(domEl).width(); 
      canvasEl.height = $(domEl).height();
      
      var ctx = canvasEl.getContext("2d");
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      var smallerSize = canvasEl.width < canvasEl.height ? canvasEl.width : canvasEl.height,
          x = parseInt( canvasEl.width / 2),
          y = parseInt( canvasEl.height / 2),
          radius = parseInt( smallerSize / 2) - 10;
          
      ctx.arc( x, y, radius, 0, Math.PI*2, true );
      ctx.stroke();   
   },
   
   onCanvasContainerDrop: function(domEl) {

      if ( domEl.hasClass("mpc-tool-oval") && domEl.hasClass( "mpc-tool" ) ) {
         this.locateOnCanvas(domEl);
      }
      
   },
   
   locateOnCanvas: function(domEl) {
     domEl.removeClass( "mpc-tool" );
     domEl.children( ".mpc-caption" ).remove();

     domEl.detach();
     domEl.appendTo("#mpc-canvas-container");
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
     domEl.resizable({
        handles: "n, e, s, w",
        containment: "#mpc-canvas-container",
        resize: function(event, ui) {
           OvalController.paint( this );
        }
     });

     domEl.draggable({
        containment: "#mpc-canvas-container"
     });
   }
   
   
}.init();