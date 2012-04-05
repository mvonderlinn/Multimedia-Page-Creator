function initShapes() {
$(".mpc-tool-line").each(function() {
      var canvasEl = $(this).children("canvas").get(0);
      canvasEl.width = 120;
      canvasEl.height = 80;
      
      var ctx = canvasEl.getContext("2d");
      ctx.strokeStyle = "black";
      ctx.beginPath();
      ctx.moveTo(15, 16);
      ctx.lineTo(105, 65);
      ctx.stroke();
      
   });
   
   $(".mpc-tool-oval").each(function() {
      var canvasEl = $(this).children("canvas").get(0);
      canvasEl.width = 120;
      canvasEl.height = 80;
      
      var ctx = canvasEl.getContext("2d");
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.arc(60, 40, 30, 0, Math.PI*2, true);
      ctx.stroke();
      
   });
   
   $(".mpc-tool-rectangle").each(function() {
      var canvasEl = $(this).children("canvas").get(0);
      canvasEl.width = 120;
      canvasEl.height = 80;
      
      var ctx = canvasEl.getContext("2d");
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1.0;
      ctx.beginPath();
      ctx.rect(15.5,15.5,90,50);
      ctx.stroke();      
   });
   
   $(".mpc-tool-heart").each(function() {
      var canvasEl = $(this).children("canvas").get(0);
      
      canvasEl.width = 120;
      canvasEl.height = 80;
      
      var ctx = canvasEl.getContext("2d");
      
      var factor = 0.7;
      ctx.scale(factor, factor);
      ctx.lineWidth = 1/0.7;
      ctx.translate(12, -15);
      ctx.beginPath();  
      
      ctx.moveTo(75,40);  
      ctx.bezierCurveTo(75,37,70,25,50,25);  
      ctx.bezierCurveTo(20,25,20,62.5,20,62.5);  
      ctx.bezierCurveTo(20,80,40,102,75,120);  
      ctx.bezierCurveTo(110,102,130,80,130,62.5);  
      ctx.bezierCurveTo(130,62.5,130,25,100,25);  
      ctx.bezierCurveTo(85,25,75,37,75,40);  
      
      ctx.stroke();
      
      
   });
   
   $(".mpc-tool-text").mouseup(function(ev) {
      ev.preventDefault();
      $(this).attr("contenteditable", "true");
      $(".mpc-tool-text").focus();
   });
   
   $(".mpc-tool").draggable();
}

$(document).ready(function() {
  
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
   
   

	$( "#mpc-canvas-container" ).droppable({
			drop: function( event, ui ) {
            if(!ui.draggable.hasClass("mpc-tool")) {
               return;
            }
            
            var htmlContent = '<div style="display: none"  class="new-element '
                                 + ui.draggable.attr("class") 
                                 + '">'
                                 + ui.draggable.html()
                                 + '</div>';

            ui.draggable.parent().append(htmlContent);
                                 
				ui.draggable.removeClass("mpc-tool");
            ui.draggable.children(".mpc-caption").remove();
            
            ui.draggable.resizable();
            
            initShapes();
            
            $(".new-element").show('fade', {duration:500}, function() {               
               $(".new-element").draggable();
               
               $(".new-element").removeClass("new-element");               
               
            });
            
         }
	});
   
});