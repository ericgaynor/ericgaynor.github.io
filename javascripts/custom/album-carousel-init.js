
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {


        var vvH = $(window).width();
        $('.owl-carousel').owlCarousel({
            stagePadding: vvH/10,
            loop:true,
            margin:0,
            nav:true,
            navText:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        })


       

    $( window ).resize(function() {

        var vrvH = $(window).width();
        $('.owl-carousel').owlCarousel({
            stagePadding: vrvH/10,
            loop:true,
            margin:0,
            nav:true,
            navText:false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        })
    });

		if( !device.tablet() && !device.mobile() ) {
			
			/* if non-mobile device is detected*/ 
						
		} else {
			
			/* if mobile device is detected*/ 
			
		}
   		
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

