StarController = new ShapeControllerCreator("mpc-tool-star", {
   /**
    * Creates new icon in toolset
    */
   putIconInToolset: function() {
      $('<div class="mpc-tool mpc-tool-star" mpcIsStroked="true" mpcBorderWidth="1" mpcIsFilled="false" mpcFillColor="#ffffff" mpcBorderColor="#000000"><canvas></canvas><div class="mpc-caption">star</div></div>').appendTo("#mpc-tools");
   }
}).init();
