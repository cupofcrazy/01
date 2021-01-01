import Vue from 'vue'
import App from './App.vue'
import SiteSettings from './plugins/siteSettings'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Global Components

Vue.use(SiteSettings, {
  defaultColor: '#111'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
