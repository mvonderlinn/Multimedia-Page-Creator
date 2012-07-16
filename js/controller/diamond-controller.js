DiamondController = new ShapeControllerCreator("mpc-tool-diamond", {
   /**
    * Creates new icon in toolset
    */
   putIconInToolset: function() {
      $('<div class="mpc-tool mpc-tool-diamond" mpcIsStroked="true" mpcBorderWidth="1" mpcIsFilled="false" mpcFillColor="#ffffff" mpcBorderColor="#000000"><canvas></canvas><div class="mpc-caption">diamond</div></div>').appendTo("#mpc-tools");
   }
}).init();
