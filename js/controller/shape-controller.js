ShapeController = {

   onPageLoaded: function(shapeClass) {
      $(shapeClass).each(function() {
         PaintElementEvent.trigger( this );
      });
      
      $(shapeClass).draggable({
         revert: true
      });    
   },
   
   
   
};