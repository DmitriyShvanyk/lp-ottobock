;(function($) {

    "use strict";

    /*
     * -------------------------------------------------------
     *  NAVBAR
     * -------------------------------------------------------
     */
    if ($('#navbar-ottobock').length) {
        $(window).scroll(function() {
            if ($('#navbar-ottobock').offset().top > 90) {
                $('.navbar-fixed-top').addClass('navbar-custom');
                $('body').addClass('body-fix');
            } else {
                $('.navbar-fixed-top').removeClass('navbar-custom');
                $('body').removeClass('body-fix');
            }
        });
    }
    var $offset = $(".navbar-fixed-top").height();

    $('a.js-scroll').bind('click', function(event) {
        event.preventDefault();

        if ($(window).width() > 767) {
            var $position = $($(this).attr('href')).offset().top - -70;
        } else {
            var $position = $($(this).attr('href')).offset().top - -98;
        }

        $('html, body').stop().animate({
            scrollTop: $position - $offset
        }, 550);
    });

    var $scrollspy = $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: $offset + 2
    });

    // collapse navbar --> click
    $(window).scroll(function() {
        $('.navbar-collapse.in').collapse('hide');
        $('body').removeClass('navbar-overlay');
    });


    $('.navbar-collapse-close').on('click', function(e) {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").trigger("click");

        }
        e.preventDefault();
    });

    $('.navbar-toggle').on('click', function(e) {
        $('body').toggleClass('navbar-overlay');
        $('.navbar-collapse').slideToggle();
    });

    $('#navbar-ottobock .navbar-right a').on('click', function() {
        if ($('.navbar-toggle').css('display') != 'none') {
            $(".navbar-toggle").trigger("click");
        }
    });




    /*
     * -------------------------------------------------------
     *  3D PRODUCT
     * -------------------------------------------------------
     */
    $('#myTurntableMen').turntable();
    $('#myTurntableWomen').turntable();

    $('.turntable').find('ul > li').on('click', function() {
        $(window).trigger('resize');
    });


    /*
     * -------------------------------------------------------
     *  TOOLTIP
     * -------------------------------------------------------
     */
    $('[data-toggle="tooltip"]').tooltip();



})(window.jQuery);