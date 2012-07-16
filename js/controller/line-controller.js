LineController = new ShapeControllerCreator("mpc-tool-line", {
   putIconInToolset: function() {   
      $('<div class="mpc-tool mpc-tool-line" mpcIsStroked="true" mpcBorderWidth="1" mpcIsFilled="false" mpcFillColor="#ffffff" mpcBorderColor="#000000"><canvas></canvas><div class="mpc-caption">line</div></div>').appendTo("#mpc-tools");
   }
}).init();
