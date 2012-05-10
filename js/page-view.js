PageView = {

   init: function() {
      PageLoadedEvent.subscribe(this);
   
      return this;
   },
   
   onPageLoaded: function() {
     $('#mpc-menu-file').menu({ 
        content: $('#mpc-menu-file').next().html(), 
        flyOut: true
     });

     $('#mpc-menu-edit').menu({ 
            content: $('#mpc-menu-edit').next().html(),
            flyOut: true
         });
         

     $('#mpc-menu-page-settings').menu({ 
            content: $('#mpc-menu-page-settings').next().html(),
            flyOut: true
         });

     $('#mpc-menu-templates').menu({ 
            content: $('#mpc-menu-templates').next().html(), 
            flyOut: true
         });

     $('#mpc-menu-preview-page').menu({ 
            content: $('#mpc-menu-preview-page').next().html(), 
            flyOut: true
         });   

     $('#mpc-menu-help').menu({ 
            content: $('#mpc-menu-help').next().html(), 
            flyOut: true
         });
		
     $("#mpc-page-link-field").val(window.location.href);
     
     $("#mpc-how-to-btn").click(function() {
         $("#mpc-howto-video-dlg").dialog({width: 560, height: 315, modal: true});
     });
     
     $("#mpc-page-width-field").keyup(function(ev) {
         var val = $(ev.target).val();
         val = parseInt(val);
         $(ev.target).val(val);
         
         $("#mpc-canvas-container").css("width", val+"px");
     });
     
     $("#mpc-page-height-field").keyup(function(ev) {
         var val = $(ev.target).val();
         val = parseInt(val);
         $(ev.target).val(val);
         
         $("#mpc-canvas-container").css("height", val+"px");
     });
     
      $("#mpc-page-background-btn").ColorPicker({
         color: "ffffff",
         onChange: function(col, inRgb) {
            $("#mpc-canvas-container").css('background-color', "#" + inRgb);
      }});
  
  }
   
   
}.init();