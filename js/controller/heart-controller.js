HeartController = new ShapeControllerCreator("mpc-tool-heart", {
   putIconInToolset: function() {   
      $('<div class="mpc-tool mpc-tool-heart" mpcIsStroked="true" mpcBorderWidth="1" mpcIsFilled="false" mpcFillColor="#ffffff" mpcBorderColor="#000000"><canvas></canvas><div class="mpc-caption">heart</div></div>').appendTo("#mpc-tools");
   }
}).init();