TriangleController = new ShapeControllerCreator("mpc-tool-triangle", {
   /**
    * Creates new icon in toolset
    */
   putIconInToolset: function() {
      $('<div class="mpc-tool mpc-tool-triangle" mpcIsStroked="true" mpcBorderWidth="1" mpcIsFilled="false" mpcFillColor="#ffffff" mpcBorderColor="#000000"><canvas></canvas><div class="mpc-caption">triangle</div></div>').appendTo("#mpc-tools");
   }
}).init();
