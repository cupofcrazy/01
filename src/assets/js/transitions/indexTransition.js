import { gsap } from 'gsap'

export default {
    enter(el, done) {
        const tl = new gsap.timeline({ onComplete: done })

        tl.from(el, {
            duration: .3,
            autoAlpha: 0,
            ease: 'expo.out',
        })
        .from('.project', {
            duration: .75,
            scale: 0.15,
            y: 100,
            clipPath: 'inset(100% 0 0 0)',
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
        const tl = new gsap.timeline({ onComplete: done })
        
        tl.to(el, {
            duration: .25,
            autoAlpha: 0,
            ease: 'expo.out',
        })
    }
}