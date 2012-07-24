TextPainter = {
   
   init: function() {
      PaintElementEvent.subscribe(this);

      return this;
   }, 
   
   /**
    * Paints an oval basing on following properties:
    * mpcFontFamily
    * mpcFontSize
    * mpcAlign
    * mpcColor
    */
   onPaintElement: function(domEl) {
   
      if(!$(domEl).hasClass("mpc-tool-text")) {
         return;
      }

      var width = $(domEl).width(),
          height = $(domEl).height();

      var txt = "";
      
      if($(domEl).children("textarea").length) {
         txt = $(domEl).children("textarea").val();
      }
      
      $(domEl).children("textarea").remove();
      
      $("<textarea>" + txt + "</textarea>").appendTo(domEl);
      
      $(domEl).children( "textarea" ).css( "width", width + "px" );
      $(domEl).children( "textarea" ).css( "height", height + "px" );
      $(domEl).children( "textarea" ).css( "fontFamily", $(domEl).attr("mpcFontFamily") );
      $(domEl).children( "textarea" ).css( "fontSize", $(domEl).attr("mpcFontSize") + "px" );
      $(domEl).children( "textarea" ).css( "textAlign", $(domEl).attr("mpcAlign") );
      $(domEl).children( "textarea" ).css( "color", "#" + $(domEl).attr("mpcColor") );
      
      var mx = 0, my = 0, isMouseDown = false;
      
      $(domEl).children( "textarea" ).mousedown(
         function(ev) {
            mx = ev.pageX;
            my = ev.pageY;
            isMouseDown = true;
         }
      );

      $(domEl).children( "textarea" ).mouseup(
         function(ev) {
            isMouseDown = false;
         }
      );
      
      $(domEl).children( "textarea" ).mousemove(
      function(ev) {
         var left = parseInt( $(ev.target).parent().css("left") );
         left += ev.pageX - mx;
         mx = ev.pageX;
         
         if(isMouseDown) {
            $(ev.target).parent().css("left", left + "px");
         }
         
         var top = parseInt( $(ev.target).parent().css("top") );
         top += ev.pageY - my;
         my = ev.pageY;
         
         if(isMouseDown) {
            $(ev.target).parent().css("top", top + "px");
         }
         
      });      
      
   }
   
}.init();
