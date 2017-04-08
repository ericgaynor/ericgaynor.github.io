
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {


    $(window).load(function(){
    

        
        var $container = $('.news-container');


        $container.isotope({
          // options
          itemSelector: '.news-item',
          layoutMode: 'masonry',
          transitionDuration:'0.8s'
        });


        $('.news-filter li a').click(function(){
        $('.news-filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
              $('.news-container').isotope({ filter: selector });
              return false;
        });

        // window resize and layout regenerate
        $(window).resize(function() {
             $container.isotope({
              // options
              itemSelector: '.news-item',
              layoutMode: 'masonry',
              transitionDuration:'0.8s'
            });

        });

    });

      
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

