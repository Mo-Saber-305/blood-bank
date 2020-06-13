$(document).ready(function () {
    //----------------------------------------------------------------------------------->

    //add class active to header links
    $('.header .box div:first-child a').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });

    $('.header .box div:last-child a').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });

    //----------------------------------------------------------------------------------->

    //add class active to navbar links
    $('.navbar-light .navbar-nav .nav-link').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active')
    });

    //----------------------------------------------------------------------------------->

    // slider carousel
    $('.slider .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        rtl: true,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause: true,
        smartSpeed:1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //centering slider item class
    var item = $('.slider .owl-carousel .item');
    item.css({
        'margin-top': ($('.slider .owl-carousel').height() - item.height()) / 2
    });

    //----------------------------------------------------------------------------------->

    //centering about box class
    var box = $('.about .box');
    box.css({
        'margin-top': ($('.about').height() - box.height()) / 2
    });

    //----------------------------------------------------------------------------------->

    // articles carousel
    $('.articles .articles-content .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        autoplay: true,
        autoplayTimeout:3000,
        autoplayHoverPause: true,
        rtl: true,
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
    });

    //----------------------------------------------------------------------------------->

    // To style only selects with the my-select class
    $('.selectpicker').selectpicker();

    //----------------------------------------------------------------------------------->

    //add class active to footer links
    $('footer div:nth-child(2) ul li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active')
    });

    //----------------------------------------------------------------------------------->
});