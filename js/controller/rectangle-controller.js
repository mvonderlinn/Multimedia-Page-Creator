/**
 * Controller for rectangle shapes
 */
RectangleController = new ShapeControllerBuilder("mpc-tool-rectangle").init();
   
   
/**
 * Creates new icon in toolset
 */
RectangleController.addNewIcon = function() {
      
   $('<div class="mpc-tool mpc-tool-rectangle" mpcIsStroked="true" mpcBorderWidth="1" mpcIsFilled="false" mpcFillColor="#ffffff" mpcBorderColor="#000000"><canvas></canvas><div class="mpc-caption">rectangle</div></div>').appendTo("#mpc-tools");
   $('.mpc-tool.mpc-tool-rectangle').draggable({revert: true});
   PaintElementEvent.trigger($('.mpc-tool.mpc-tool-rectangle'));      
};