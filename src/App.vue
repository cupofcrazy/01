<template>
  <div id="app">
    <NavHeader />
    <projects-menu v-if="isProjectMenuOpen"/>
    <transition :css="false" mode="out-in" @enter="enter" @leave="leave" appear>
      <router-view :key="$route.fullPath" ref="view" v-if="projects.length > 0"/>
    </transition>
    <toggle-color-mode />
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue';
import { mapActions, mapState } from 'vuex'
import ToggleColorMode from './components/ToggleColorMode.vue';
import ProjectsMenu from './components/ProjectsMenu.vue';

export default {
  components: { NavHeader, ToggleColorMode, ProjectsMenu },
  methods: {
    enter(el, done) {
      this.$refs.view.enter(el, done)
    },
    leave(el, done) {
      this.$refs.view.leave(el, done)
    },
    ...mapActions(['fetchProjects'])
  },
  computed: {
    ...mapState(['projects', 'isProjectMenuOpen'])
  },
  watch: {
    $route() {
      this.$store.dispatch('setProjectsMenuOpen', false)
    }
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
