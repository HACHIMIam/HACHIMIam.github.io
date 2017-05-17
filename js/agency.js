// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
	$(document).ready(function() {
        var docWidth = $('body').width(),
            imgNb = 10,
            $images = $('#imgs');


        $(window).on('resize', function() {
            docWidth = $('body').width();
            slidesWidth = $('#imgs').width();
        });

        $(document).mousemove(function(e) {
            var mouseX = e.pageX,
                rotate = mouseX * 360 / docWidth;

            $images.css({
                '-webkit-transform': 'rotate3d(0,1,0,' + -rotate + 'deg)',
                'transform': 'rotate3d(0,1,0,' + -rotate + 'deg)',
            });
        });
    })

})(jQuery); // End of use strict
