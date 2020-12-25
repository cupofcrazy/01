import { TweenMax } from 'gsap'

export default {
    enter(el, done) {
        TweenMax.from(el, {
            duration: .5,
            autoAlpha: 0,
            ease: 'expo.out',
            onComplete: done
        })
    },
    leave(el, done) {
        TweenMax.to(el, {
            duration: .3,
            autoAlpha: 0,
            ease: 'expo.out',
            onComplete: done
        })
    }
}