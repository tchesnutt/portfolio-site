$(document).on('ready' ,function () {

    "use strict";


 $(window).on('load', function () {
        $('.loading-overlay').fadeOut(500);
    });

      $(window).on("load scroll", function() {
            var wScrollTop  = $(window).scrollTop();
            if(wScrollTop > 150) {
                  $("#pageHeader").addClass("shrink");
            } else {
                  $("#pageHeader").removeClass("shrink");
            }
      });

     // Bootstrap Scroll Spy //

      $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 70
      });

     // Collapse navigation on click on nav anchor in Mobile //

      $(".nav a").on('click', function() {
            $("#myNavbar").removeClass("in").addClass("collapse");
      });

     // navbar Scroll //

      $(".navbar-nav li a, .navbar-brand, .button a").on("click", function(e){
            var anchor = $(this);
            $("html, body").stop().animate({
                  scrollTop: $(anchor.attr("href")).offset().top - 60
            }, 1000);
            e.preventDefault();
      });

    $('.my-portfolio ul li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // Caching The Scroll Top Element
    var  mixerContainer = $('#portfolio #change'),
        // portfolio (MIXITUP)
            mixer = mixitup(mixerContainer, {
                selectors: {
                    control: '#portfolio ul > li'
                }
            }),
    scrollButton = $('#scroll-top');

    // Caching The Scroll Top Element

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 700) {

            scrollButton.show();

        } else {

            scrollButton.hide();
        }
    });

    // Click On Button To Scroll Top


    scrollButton.on('click', function () {

        $('html,body').animate({ scrollTop : 0 }, 1000);

    });

    $(".element").typed({
        strings: [ " Taylor Chesnutt"],
        loop: false,
        showCursor: false,
        startDelay: 1000,
        backDelay: 800,
        typeSpeed: 150
    });

});
