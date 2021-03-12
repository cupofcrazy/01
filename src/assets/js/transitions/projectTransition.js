import gsap, { TweenMax, TimelineMax } from 'gsap'
import SplitText from '@/assets/js/SplitText'

gsap.registerPlugin(SplitText)

export default {
    enter(el, done) {
        const tl = new TimelineMax({ onComplete: done })

        const split = new SplitText('.project__title', { type: 'lines' })
        const lines = split.lines;

        tl.from(el, {
            duration: .5,
            autoAlpha: 0
        })
        .from(lines, {
            duration: 1,
            stagger: .1,
            autoAlpha: 0,
            yPercent: 100,
            filter: 'blur(15px)',
            clipPath: 'inset(0% 0% 100% 0%)',
            ease: 'expo.out'
        }, '<.25')
        .from('.project__summary', {
            duration: 1,
            autoAlpha: 0,
            ease: 'expo.out'
        }, '<.1')
        .from('.project__thumbnail', {
            duration: 1,
            clipPath: 'inset(0% 100% 0% 0%)',
            ease: 'expo.inOut'
        }, '<0')
        
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