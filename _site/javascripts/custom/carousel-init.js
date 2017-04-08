
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

        var vvH = $(window).width();
        $('.owl-carousel').owlCarousel({
            stagePadding: vvH/10,
            loop:true,
            margin:10,
            nav:false,
            navText:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })


       

    $( window ).resize(function() {

        var vrvH = $(window).width();
        $('.owl-carousel').owlCarousel({
            stagePadding: vrvH/10,
            loop:true,
            margin:10,
            nav:false,
            navText:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        })
    });
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







    

