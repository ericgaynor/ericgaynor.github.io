/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

	//Initialize Each Parallax Layer	
	function parallaxInit() {
		$('.parallax, .parallax-layer').each(function() {
				$(this).parallax("30%", 0.1);
		});
	}	

	if( !device.tablet() && !device.mobile() ) {

			//Activating Parallax effect if non-mobile device is detected
			$(window).bind('load', function () {
				parallaxInit();						  
			});


	} else  {
				
			//Dectivate Parallax effect if mobile device is detected (bg image is displayed)
			$('.parallax, .parallax-layer').addClass('no-parallax');
				
			}
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

