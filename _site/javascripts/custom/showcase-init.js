
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {


if(BrowserDetect.browser == 'Explorer' && BrowserDetect.version <= 9){

		$('.sticky-panel').hide();
		$('.showcase').onepage_scroll({
		   responsiveFallback: 5000, 
		});

        
}
else{
		$(".showcase").onepage_scroll(); 
}


        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

