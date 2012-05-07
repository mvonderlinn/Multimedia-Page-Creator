PageView = {

   init: function() {
      PageLoadedEvent.subscribe(this);
   
      return this;
   },
   
   onPageLoaded: function() {
    
     $('#menu-file').menu({ 
        content: $('#menu-file').next().html(), 
        flyOut: true
     });

     $('#menu-edit').menu({ 
            content: $('#menu-edit').next().html(),
            flyOut: true
         });
         

     $('#menu-page-settings').menu({ 
            content: $('#menu-page-settings').next().html(),
            flyOut: true
         });

     $('#menu-templates').menu({ 
            content: $('#menu-templates').next().html(), 
            flyOut: true
         });

     $('#menu-preview-page').menu({ 
            content: $('#menu-preview-page').next().html(), 
            flyOut: true
         });   

     $('#menu-help').menu({ 
            content: $('#menu-help').next().html(), 
            flyOut: true
         });
		
   }
   
}.init();