// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: EIGHT.
// Author: Designova.
// Version 1.0 - Initial Release
// Website: http://www.Designova.net 
// Copyright: (C) 2015 
// -------------------------------------------------------------------------------------------------------------------------------

/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

     
    //Detecting viewpot dimension
     var vH = $(window).height();
     var vW = $(window).width();


     //Adjusting Intro Components Spacing based on detected screen resolution
     $('.fullheight').css('height',vH);
     $('.halfheight').css('height',vH/2);
     $('.fullwidth').css('width',vW);
     $('.halfwidth').css('width',vW/2);


    //$('.page-fold.subtle').next().css('margin-top',vH);
    
     //Sliding Navigation INIT
          $('nav#menu').mmenu().on( "closed.mm", function() {
              $('.menu-close').hide();
              $('.menu-trigger').show();
         })
          
     //Basic Interactions
          $('.menu-trigger').click(function() {
              $(this).hide();
              $('.menu-close').show();
              $('.ib-main').css('left','0px');
              $('.ib-main').css('top','0px');
          });
          $('.menu-close').click(function() {
              $("nav#menu").trigger("close.mm");
              $(this).hide();
              $('.menu-trigger').show();
          });
          $('.header-trigger-hide').click(function() {
                $('.ib-main-wrapper').removeClass('ib-spaced-top');
                $( ".mastfoot" ).stop().animate({
                bottom: "-=65",
                }, 1000, function() {
              });
              $( ".masthead" ).stop().animate({
                top: "-=65",
                }, 1000, function() {
                $('.header-trigger-show').slideDown();
              });
          });
          $('.header-trigger-show').click(function() {
              $(this).hide();
              $( ".masthead" ).stop().animate({
                top: "0",
                }, 1000, function() {
              });
              $( ".mastfoot" ).stop().animate({
                bottom: "0",
                }, 1000, function() {
              });
                $('.ib-main-wrapper').addClass('ib-spaced-top');
          });

          $('.news-item a').mouseenter(function(){
              $('.news-item a').css('opacity','0.2');
              $(this).css('opacity','1');
          })

          $('.news-item a').mouseleave(function(){
              $('.news-item a').css('opacity','1');
          })

           $('.works-item').mouseenter(function(){
              $('.works-item').css('opacity','0.2');
              $(this).css('opacity','1');
          })

          $('.works-item').mouseleave(function(){
              $('.works-item').css('opacity','1');
          })

          //Resetting Parallax Top Position at Page Top when page loading initially
          $('.parallax').css('background-position', '50% 0px !important');


    //Mobile Menu (multi level)
    $('nav.mobile-nav').meanmenu({
      meanScreenWidth: "1198",
    });




});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

