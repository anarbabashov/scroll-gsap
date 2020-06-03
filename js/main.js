$(function () {

    gsap.registerPlugin(ScrollTrigger);

    var controller = new ScrollMagic.Controller();
    var tl = new TimelineMax();

    tl.from('.title', {opacity: 0, scale: 0, ease: 'back'})
    tl.from('.innerS4', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, '=-1');
    tl.from('.innerS2 span', 1, { width: 0}, '=-.5');

    const scene = new ScrollMagic.Scene({
        triggerElement: '#two',
        triggerHook: 'onLeave',
        duration: '100%'
    }).setTween(tl).addTo(controller);

    gsap.to('.innerS2', {
        scrollTrigger: {
            trigger: '.innerS2',
            start: 'center center',
            end: 'bottom -480',
            pin: true,
        }
    })

    gsap.to('.innerS4', {
        scrollTrigger: {
            trigger: '.innerS4',
            pin: true,
            start: 'center center',
            end: 'bottom -477',
        },
    })

    gsap.to('.innerS5', {
        scrollTrigger: {
            trigger: '.innerS5',
            toggleClass: 'active'
        },
    })

});
