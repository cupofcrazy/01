import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import './registerServiceWorker'
import router from './router'
import store from './store'
import LocomotivePlugin from '@/plugins/locomotive'
import 'locomotive-scroll/dist/locomotive-scroll.min.css'

// Global Components
import LazyImage from '@/components/LazyImage.vue'


Vue.component('lazy-image', LazyImage)
Vue.use(LocomotivePlugin)
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
