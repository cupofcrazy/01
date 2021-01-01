<template>
  <div class="home" ref="home">
    <div class="container">
      <!-- <h1>Selected Works</h1> -->
      <project-image :project="randomProject" />
      <!-- <router-link class="projects-link" to="/projects">See all works →</router-link> -->
    </div>
    
    
  </div>
</template>

<script>

// import 'locomotive-scroll/dist/locomotive-scroll.min.css'
import { mapState } from 'vuex'
import ProjectImage from '@/components/ProjectImage.vue'
import { indexTransition } from '@/assets/js/transitions'


export default {
  components: { ProjectImage },
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
    

    // console.log(this.arts)
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
  /* position: fixed;
  top: 0;
  left: 0; */


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
