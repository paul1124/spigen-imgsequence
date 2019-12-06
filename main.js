document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .to('.hero-heading', 1, {
        autoAlpha: 0,
        y: -100
    })
        .to('#closed', 4, {
            autoAlpha: 0
        })
        .from('#open', 4, {
            autoAlpha: 0
        }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: '.hero',
        duration: '100%',
        triggerHook: 0,
        offset: '200'
    })
        .setTween(timeline)
        .setPin('.hero')
        .addTo(controller);




    let specTimeline = new TimelineMax();
    specTimeline
        .to('.spec-1', 4, {
            autoAlpha: 1,
            y: 0
        })
        .to('.spec-2', 4, {
            autoAlpha: 1,
            y: 0
        })
        .to('.spec-3', 4, {
            autoAlpha: 1,
            y: 0
        })

    let specScene = new ScrollMagic.Scene({
        triggerElement: '.specs-animate',
        duration: '40%',
        triggerHook: 0,
        offset: 0
    })
        .setTween(specTimeline)
        .addTo(controller);




    let specImgTimeline = new TimelineMax();
    specImgTimeline
    .to('#side', 4, {
        autoAlpha: 0,
    })
        .from('#tilt', 4, {
            autoAlpha: 0
        }, '-=4')

    let specImgScene = new ScrollMagic.Scene({
        triggerElement: '.specs-animate2',
        duration: '100%',
        triggerHook: 0,
    })
        .setTween(specImgTimeline)
        .addTo(controller);
})