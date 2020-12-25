import { gsap } from 'gsap'

export default {
    enter(el, done) {
        const tl = new gsap.timeline({ onComplete: done })

        tl.from(el, {
            duration: .5,
            autoAlpha: 0
        })
        // .from('.project', {
        //     duration: .1,
        //     // yPercent: 100,
        //     ease: 'expo.inOut'
        // })
        .from('.slides', {
            duration: 1,
            scale: .15,
            clipPath: 'inset(100% 0 0 0)',
            ease: 'expo.out'
        }, '<.25')
    },
    leave(el, done) {
        gsap.to(el, {
            duration: .25,
            autoAlpha: 0,
            ease: 'expo.out',
            onComplete: done
        })
    }
}