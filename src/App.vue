<template>
  <div id="app">
    <v-header></v-header>

    <transition @enter="enter" @leave="leave" :css="false" mode="out-in" appear>
      <router-view :key="$route.fullPath" v-if="$store.state.projects.length" ref="view" />
    </transition>
    
    <v-footer></v-footer>
  </div>
</template>

<script>
// import 
import VHeader from '@/components/Header.vue'
import VFooter from './components/Footer.vue'
// import { defaultTransition } from '@/assets/js/transitions'
// import locomotiveMixin from '@/mixins/smoothScroll'

export default {
  // mixins: [locomotiveMixin],
  components: {
    VHeader, VFooter
  },
  methods: {
    enter(el, done) {
      this.$refs.view.enter(el, done)
    },
    leave(el, done) {
      this.$refs.view.leave(el, done)
    }
  },
  async created() {
    try {
      await this.$store.dispatch('fetchProjects')
      // console.log(this.$store.state.projects)
    } catch (err) {
      console.error({ err })
    }
    console.log(this.$refs.view)
  }
  
}
</script>

<style lang="scss">
@font-face {
    font-family: 'Helvetica Neue';
    font-weight: 100;
    font-display: swap;
    src: url('./assets/fonts/HelveticaNeueLight.woff') format('woff');
    src: url('./assets/fonts/HelveticaNeueLight.woff2') format('woff2');
}
@font-face {
    font-family: 'Helvetica Neue';
    font-weight: 300;
    font-display: swap;
    src: url('./assets/fonts/HelveticaNeueMedium.woff') format('woff');
    src: url('./assets/fonts/HelveticaNeueMedium.woff2') format('woff2');
}
@import '@/assets/scss/main.scss';

#app {
  /* font-family: 'Neue Montreal', $font-sans-serif, Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--main-color);
  /* padding: 1rem; */
}
</style>
