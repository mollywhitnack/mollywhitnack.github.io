//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 650, 'easeInOutExpo');
        event.preventDefault();
    });
});

//IE doesn't transform-style:preserve-3d.
// for IE try http://codepen.io/rhernando/pen/vjGxH


//using TweenLite.set() takes care of all vendor-prefixes
TweenLite.set(".cardWrapper", {perspective:800});
TweenLite.set(".card", {transformStyle:"preserve-3d"});
TweenLite.set(".back", {rotationY:-180});
TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});

$(".cardWrapper").hover(
  function() {
    console.log('hover');
    TweenLite.to($(this).find(".card"), 1.2, {rotationY:180, ease:Back.easeOut});
  },
  function() {
        console.log('hover');

    TweenLite.to($(this).find(".card"), 1.2, {rotationY:0, ease:Back.easeOut});  
  }
);

//a nice little intro;)
TweenMax.staggerTo($(".card"), 1, {rotationY:-180, repeat:1, yoyo:true}, 0.1);

/* learn more about GSAP JS:
http://www.greensock.com/gsap-js/

more codepen samples:
http://codepen.io/collection/jmHAn

basics:
http://codepen.io/collection/ifybJ

*/