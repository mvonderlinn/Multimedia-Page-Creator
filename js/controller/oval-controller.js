OvalController = {
   init: function() {
      PageLoadedEvent.subscribe(this);
      CanvasContainerDropEvent.subscribe(this);
      
      return this;      
   },
   
   onPageLoaded: function() {
      $(".mpc-tool-oval").each(function() {
         var canvasEl = $(this).children("canvas").get(0);
         canvasEl.width = 120;
         canvasEl.height = 80;
         
         var ctx = canvasEl.getContext("2d");
         ctx.strokeStyle = "black";
         ctx.lineWidth = 1.0;
         ctx.beginPath();
         ctx.arc( 35, 30, 20, 0, Math.PI*2, true );
         ctx.stroke();
         
      });
      $(".mpc-tool-oval").draggable();
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
           console.log(this);
        }
     });

     domEl.draggable({
        containment: "#mpc-canvas-container"
     });
   }
   
   
}.init();