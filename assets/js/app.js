$(function () {
    "use strict"
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky")
        }
    });

    // wow js
    new WOW().init();

    // tiny slider
    var slider = tns({
        container: '.testimonial-active',
        items: 1,
        loop: true,
        slideBy: 'page',
        autoplay: false,
        mouseDrag: true,
        controls: false,
        nav: false,
        autoplay: true,
        speed: 400,
        autoplayButtonOutput: false,
        lazyload: true,
    });

    //   scrollit js
    $.scrollIt();
});