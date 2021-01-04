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

export default {
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
    } catch (err) {
      console.error({ err })
    }
    console.log('%c dev by https://tobiii.ninja', 'color: blue;')
    console.log('%c    ', 'font-size: 300px; padding: 30px; background: url(https://media.giphy.com/media/Z3aQVJ78mmLyo/giphy.gif);')
  },
  mounted() {
    
  }
  
}
</script>

<style lang="scss">
@font-face {
    font-family: 'Neue Haas Grotesk Display Pro';
    font-weight: 100;
    font-display: swap;
    src: url('./assets/fonts/NeueHaasDisplay-Roman.woff') format('woff');
    /* src: url('./assets/fonts/NeueMontreal-Regular.woff2') format('woff2'); */
}
 
@import '@/assets/scss/main.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--main-color);
}
</style>
