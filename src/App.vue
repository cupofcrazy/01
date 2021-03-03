<template>
  <div id="app">
    <NavHeader />
    <router-view :key="$route.fullPath" ref="view" />
    <toggle-color-mode />
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue';
import { mapActions } from 'vuex'
import ToggleColorMode from './components/ToggleColorMode.vue';

export default {
  components: { NavHeader, ToggleColorMode },
  methods: {
    ...mapActions(['fetchProjects'])
  },
  async created() {
    try {
      await this.fetchProjects()
    } catch (err) {
      console.info(err)
    }
  },
  mounted() {}
};
</script>

<style lang="scss">

@import "@/assets/scss/main.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--main-color);
}
</style>
