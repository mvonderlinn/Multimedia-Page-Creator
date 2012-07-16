RectangleController = new ShapeControllerCreator("mpc-tool-rectangle", {
   /**
    * Creates new icon in toolset
    */
   putIconInToolset: function() {
      $('<div class="mpc-tool mpc-tool-rectangle" mpcIsStroked="true" mpcBorderWidth="1" mpcIsFilled="false" mpcFillColor="#ffffff" mpcBorderColor="#000000"><canvas></canvas><div class="mpc-caption">rectangle</div></div>').appendTo("#mpc-tools");
   }
}).init();
