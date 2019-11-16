var controller = new ScrollMagic.Controller();
$(".project").each(function(){

    var picOverlay = $(this).find(".overlay");
    var projectInfo = $(this).find(".project-info");
    var smallTitle = $(this).find(".small-title");
    var projectLink = $(this).find(".project-link");
    var title = $(this).find("h4");

    var animateIn = new TimelineMax();

    animateIn
    .fromTo(picOverlay, 1.3, {skewX: 30, scale: 1.5}, {skewX: 0, xPercent:100, transformOrigin: "0% 100%", ease: Power4.easeOut })

    .from(projectInfo, 0.3, {scaleY: 0, transformOrigin: "bottom" }, "-=1")

    .from(smallTitle, 0.2, {autoAlpha: 0, y: -10, ease: Power4.easeOut}, "-=.8")

    .from(projectLink, 0.3, {autoAlpha: 0, y: 30, ease: Power4.easeOut}, "-=1")

    .from(title, 0.3, {autoAlpha: 0, y: 30, ease: Power4.easeOut}, "-=.6")

    // Make a scroll magic scene

    var scene = new ScrollMagic.Scene({
        triggerElement: this,
    })

    // .addIndicators()
    .setTween(animateIn).addTo(controller);

});
