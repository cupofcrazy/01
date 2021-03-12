import { TimelineMax } from 'gsap'

export default {
    enter(el, done) {
        const tl = new TimelineMax({ onComplete: done })

        tl.from(el, {
            duration: .3,
            autoAlpha: 0,
            ease: 'expo.out',
        })
        .from('.project__title', {
            duration: .75,
            scale: .8,
            yPercent: 100,
            clipPath: 'inset(0% 100% 0% 0%)',
            // autoAlpha: 0,
            ease: 'expo.out'
        })
        .from('.project__info', {
            duration: 1.5,
            yPercent: 100,
            // autoAlpha: 0,
            ease: 'expo.out'

        }, "<.1")
    },
    leave(el, done) {
        const tl = new TimelineMax({ onComplete: done })
        
        tl.to(el, {
            duration: .25,
            autoAlpha: 0,
            ease: 'expo.out',
        })
    }
}