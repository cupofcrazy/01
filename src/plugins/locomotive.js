import LocomotiveScroll from 'locomotive-scroll'

export default {
    install(Vue) {
        Vue.prototype.$locomotive = LocomotiveScroll
        
        Vue.mixin({
            watch: {
                $route() {
                    // console.log('Page changed.')
                }
            }
        })
    }
}