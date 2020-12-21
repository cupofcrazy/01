<template>
  <div id="app">
    <v-header></v-header>
    <router-view :key="$route.fullPath" v-if="$store.state.projects.length"/>
    <v-footer></v-footer>
  </div>
</template>

<script>
// import 
import VHeader from '@/components/Header.vue'
import VFooter from './components/Footer.vue'
// import locomotiveMixin from '@/mixins/smoothScroll'

export default {
  // mixins: [locomotiveMixin],
  components: {
    VHeader, VFooter
  },
  async created() {
    try {
      await this.$store.dispatch('fetchProjects')
      // console.log(this.$store.state.projects)
    } catch (err) {
      console.error({ err })
    }
  }
  
}
</script>

<style lang="scss">
@font-face {
    font-family: 'Helvetica Neue';
    font-weight: 100;
    src: url('./assets/fonts/HelveticaNeueLight.woff') format('woff');
    src: url('./assets/fonts/HelveticaNeueLight.woff2') format('woff2');
}
@font-face {
    font-family: 'Helvetica Neue';
    font-weight: 300;
    src: url('./assets/fonts/HelveticaNeueMedium.woff') format('woff');
    src: url('./assets/fonts/HelveticaNeueMedium.woff2') format('woff2');
}
@import '@/assets/scss/main.scss';

#app {
  /* font-family: 'Neue Montreal', $font-sans-serif, Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* padding: 1rem; */
}
</style>
