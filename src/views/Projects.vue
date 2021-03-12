<template>
  <div class="projects">
    <div class="container">
      <header class="projects__header">
        <h1 class="projects__title">Projects</h1>
        <!-- <div class="projects__logo">
          <img src="@/assets/images/logo.png" alt="Logo">
        </div> -->
      </header>
      <!-- <div class="projects__intro">
        <p v-scroll-text-split>
          A list and series of projects I have worked on.
        </p>
      </div> -->
      <project-list :projects="projects" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProjectList from '../components/project/ProjectList.vue';

export default {
  components: { ProjectList },
  methods: {},
  created() {},
  computed: {
    ...mapState(['projects'])
  },
};
</script>

<style lang="scss" scoped>
.projects {
  .container {
    padding: 4rem 1rem 4rem 1rem;
  }
  &__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  &__title {
    font-size: 12vw;
    font-weight: 100;
    color: var(--accent-color);
    letter-spacing: -2px;
    /* text-transform: uppercase; */
  }
  &__intro {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 2.625rem 0 1rem 0;

    p {
      /* text-indent: 1.625rem; */
      grid-column: 3 / -1;
      font-size: 1rem;
      color: var(--accent-color);

      @include sm {
        font-size: 2rem;
      }

      @include gt-sm {
        grid-column: 7 / -1;
        font-size: 3rem;
      }
    }
  }
  &__logo img {
    display: block;
    width: 6rem;
    
  }
}
</style>