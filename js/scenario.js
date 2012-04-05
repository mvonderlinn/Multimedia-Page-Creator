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
   
   $(".mpc-tool").draggable();
   $(".mpc-tool").resizable();
   
   $(".mpc-tool-line").each(function() {
      var canvasEl = $(this).children("canvas").get(0);
      canvasEl.width = 120;
      canvasEl.height = 80;
      
      var ctx = canvasEl.getContext("2d");
      ctx.strokeStyle = "black";
      ctx.beginPath();
      ctx.moveTo(5, 5);
      ctx.lineTo(115, 75);
      ctx.stroke();
      
   });
   
   $(".mpc-tool-oval").each(function() {
      var canvasEl = $(this).children("canvas").get(0);
      canvasEl.width = 120;
      canvasEl.height = 80;
      
      var ctx = canvasEl.getContext("2d");
      ctx.strokeStyle = "black";
      ctx.beginPath();
      ctx.arc(60,40,30,0,Math.PI*2,true);
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
      $(".mpc-tool-text").focus();
   });

});