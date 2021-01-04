<template>
  <div class="home" ref="home">
    <div class="container">
      <project-card :project="randomProject" />
    </div>
    
    
  </div>
</template>

<script>

import { mapState } from 'vuex'
import ProjectCard from '@/components/project/ProjectCard.vue'
import { indexTransition } from '@/assets/js/transitions'


export default {
  components: { ProjectCard },
  name: 'Home',
  data() {
    return {
      
    }
  },
  methods: {
    enter(el, done) {
      indexTransition.enter(el, done)
    },
    leave(el, done) {
      indexTransition.leave(el, done)
    }
  },
  computed: {
    randomProject() {
      return this.projects[Math.floor(Math.random() * this.projects.length)]
    },
    ...mapState(['projects'])
  },
  created() {
    
    this.$setPageTitle('Home')
  },
  mounted() {
    this.$setTheme('--project-main-color', '#111111')
  },
  destroyed() {

  }
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100vh;


  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
      font-size: 6.625rem;
      font-weight: 500;
    }
    .projects-link {
      font-size: 2rem;
      padding: 2rem;
      color: var(--accent-color);
    }

    
   }
}
</style>
