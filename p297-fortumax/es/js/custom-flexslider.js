/*
 * Site jS
 */
(function ($) {
	
	$(window).load(function(){
	
		/*------------------- start slider code ----------------------------*/	
		$('.flexslider').flexslider({
			animation: "slide", //animation:"fade",
			controlNav: false,
			directionNav: false,
			slideshow: true,  
			smoothHeight:false,
			itemMargin: 100,
			smoothHeight: true,
			start: function(slider){
				$('#sliderlodar').remove();
			}
		});
	});
  
		
})(jQuery);


