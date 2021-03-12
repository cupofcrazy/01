import Vue from 'vue'
import App from './App.vue'
import SiteSettings from './plugins/siteSettings'
import { scrollY, scrollFade, scrollBounce, scrollTextSplit } from './directives/scroll'
import VueLazyload from 'vue-lazyload'
import './registerServiceWorker'
import router from './router'
import store from './store'
import LazyImage from '@/components/LazyImage.vue'
import GradientImage from '@/components/GradientImage.vue'

// Global Components
Vue.component('lazy-image', LazyImage)
Vue.component('gradient-image', GradientImage)

// Global Custom Directives
Vue.directive('scroll-y', scrollY)
Vue.directive('scroll-fade', scrollFade)
Vue.directive('scroll-bounce', scrollBounce)
Vue.directive('scroll-text-split', scrollTextSplit)


Vue.use(VueLazyload)
Vue.use(SiteSettings, {
  defaultColor: '#111'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
