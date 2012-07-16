/**
 * Represents controller for all the oval objects,
 * including tool icons and canvas oval shapes
 */
OvalController = new ShapeControllerBuilder("mpc-tool-oval").init();

OvalController.putIconInToolset = function() {
   
   $('<div class="mpc-tool mpc-tool-oval" mpcIsStroked="true" mpcBorderWidth="1" mpcIsFilled="false" mpcFillColor="#ffffff" mpcBorderColor="#000000"><canvas></canvas><div class="mpc-caption">oval</div></div>').appendTo("#mpc-tools");
};
