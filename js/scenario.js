function initShapes() {

   
   
   
   
   
   $(".mpc-tool").draggable();
}

$(document).ready(function() {
   PageLoadedEvent.trigger();
   
   $('#mpc-colorpicker').ColorPicker({
      color: '#ffffff',
      onShow: function (colpkr) {
         $(colpkr).fadeIn(500);
         return false;
      },
      onHide: function (colpkr) {
         $(colpkr).fadeOut(500);
         return false;
      },
      onChange: function (hsb, hex, rgb) {
         $('#mpc-colorpicker').text('#' + hex);
         $('#mpc-canvas-container').css("background-color", '#' + hex);
         return false;
      }
   });
   
   $("#mpc-properties").draggable();
      
   initShapes();
   
   

	
   
});