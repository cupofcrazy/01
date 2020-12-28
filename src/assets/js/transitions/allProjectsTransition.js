import { TweenMax, TimelineMax } from 'gsap'

export default {
    enter(el, done) {
        const tl = new TimelineMax({ onComplete: done })

        tl.from(el, {
            duration: .3,
            autoAlpha: 0
        })
        .from('.projects__heading', {
            duration: 1,
            yPercent: 100,
            clipPath: 'inset(0% 0 100% 0)',
            // autoAlpha: 0,
            // yPercent: 100,
            ease: 'expo.out'
        })
        .from('.link', {
            duration: 1,
            y: 30,
            stagger: .025,
            scale: .15,
            autoAlpha: 0,
            clipPath: 'inset(100% 0 0 0)',
            ease: 'expo.out'
        }, '<.15')
    },
    leave(el, done) {
        TweenMax.to(el, {
            duration: .25,
            autoAlpha: 0,
            ease: 'expo.out',
            onComplete: done
        })
    }
}