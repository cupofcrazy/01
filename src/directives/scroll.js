import Vue from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from '@/assets/js/SplitText'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)


export const scrollY =  {
  inserted(el) {
    gsap.from(el, 1, {
      scrollTrigger: el,
      // clipPath: 'inset(0% 100% 100% 0%)',
      autoAlpha: 0,
      y: 100,
      ease: 'expo.out',
      // autoAlpha: 0
    })
  },
}
export const scrollFade = {
  inserted(el) {
    gsap.from(el, 1, {
      scrollTrigger: el,
      ease: 'expo.out',
      autoAlpha: 0,
    })
  },
}
export const scrollBounce = {
  inserted(el) {
    gsap.from(el, {
      scrollTrigger: el,
      duration: 1.5,
      scale: 0.75,
      autoAlpha: 0,
      ease: 'elastic.out',
    })
  },
}
export const scrollTextSplit = {
  inserted(el) {
    const split = new SplitText(el, {
      type: 'lines'
    })
    const lines = split.lines;
    gsap.from(lines, {
      duration: 1,
      // delay: 3,
      clipPath: 'inset(0% 0% 100% 0%)',
      yPercent: 100,
      scrollTrigger: {
        // markers: true,
        trigger: el,
        start: 'top 80%',
      },
      stagger: .075,
      ease: 'expo.out',
      onComplete: () => split.revert()
    })
  },
}
Vue.directive('parallax', {
  inserted(el) {
    
    gsap.to(el, {
      // clipPath: 'inset(0% 0% 100% 0%)',
      // duration: 3,
      scale: 2,
      scrollTrigger: {
        // markers: true,
        start: 0,
        end: '+=300',
        trigger: el,
        scrub: 1,
      },
      // ease: 'expo.out'
    })
  },
})
