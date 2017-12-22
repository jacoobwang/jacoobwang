function fixSizes() {
    var t = $(window).height()
      , a = $(window).width();
    if ($(".fullscreen").css("height", t),
    a > 960) {
        $(".home, .home .background, .home .container").css("height", 770);
    } else
        $(".home .info").css("margin-top", ($(".home .info").parent().height() - $(".home .info").height()) / 2);
}

jQuery(document).ready(function($$) {
    "use strict";
    $$(document).scroll(function() {
        $$(this).scrollTop();
        $$(this).scrollTop() > 100 ? $$("header").stop().animate({
            backgroundColor: "rgba(0,0,0,1)"
        }, "fast") : $$("header").stop().animate({
            backgroundColor: "rgba(0,0,0,0)"
        }, "fast")
    });
})

$(window).load(function() {
    fixSizes();
    $(this).scrollTop();
    $(this).scrollTop() > 100 ? $("header").stop().animate({
        backgroundColor: "rgba(0,0,0,1)"
    }, "fast") : $("header").stop().animate({
        backgroundColor: "rgba(0,0,0,0)"
    }, "fast");
    
    $(".loader").delay(1e3).fadeOut("slow");
    $("body").css("overflow", "auto");

    setTimeout(function() {
        $("header").addClass("animated fadeInDown")
    }, 1300);

    // setTimeout(function() {
    //     $(".welcome").addClass("tracking-in-expand")
    // }, 1500)
})
