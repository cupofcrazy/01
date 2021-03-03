import Vue from 'vue'
import App from './App.vue'
import SiteSettings from './plugins/siteSettings'
import VueLazyload from 'vue-lazyload'
import './registerServiceWorker'
import router from './router'
import store from './store'
import LazyImage from '@/components/LazyImage.vue'

// Global Components
Vue.component('lazy-image', LazyImage)

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
