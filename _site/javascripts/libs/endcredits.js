/*
 * jQuery endcredits Plugin
 *
 * Copyright (c) 2014 Daniel Malkafly <malk@epichail.com>
 * Dual licensed under the MIT or GPL Version 2 licenses or later.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
$(document).ready(function () {

        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('#titles').css({
            'width': maskWidth,
            'height': maskHeight
        });

        $('#titles').fadeIn(1000);
        $('#titles').fadeTo("slow");
        $('#titles').fadeIn();
       
        $('#credits').css("bottom", "-" + (maskHeight * 2) + "px");
        $('#credits').show('slow');

        $('#credits').animate({
            bottom: maskHeight + "px"
        }, {
            duration: 30000,
            complete: function () {
                $('#titles').fadeOut();
                $('.window').fadeOut();
                $('#credits').css("bottom", "-" + (maskHeight * 2) + "px");
            },
            step: function (n, t) {
                var pos = $(this).position();
                console.log('X: ' + pos.left.toFixed(2) + ' Y: ' + pos.top.toFixed(2));
            }
        });

    
});
