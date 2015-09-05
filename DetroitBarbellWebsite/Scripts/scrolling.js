$(function () {
    //fills image for background
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    //sets offset for navbar when scrolling
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    //scrolling animation
    $('.down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: ($($(this).attr('href')).offset().top - 100)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //implement parallax scrolling
    $(window).stellar();

    //initialize WOW for element animation
    new WOW().init(); 
});