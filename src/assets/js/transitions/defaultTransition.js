import { gsap } from 'gsap'

export default {
    enter(el, done) {
        gsap.from(el, {
            duration: .5,
            autoAlpha: 0,
            ease: 'expo.out',
            onComplete: done
        })
    },
    leave(el, done) {
        gsap.to(el, {
            duration: .3,
            autoAlpha: 0,
            ease: 'expo.out',
            onComplete: done
        })
    }
}