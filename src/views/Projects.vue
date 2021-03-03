<template>
  <div class="projects">
    <div class="container">
      <div class="projects__intro">
        <p>
          A list and series of projects I have worked on.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nisi suscipit expedita facere tempora consequuntur
        </p>
      </div>
      <header class="projects__header">
        <div class="projects__logo">
          <img src="@/assets/images/logo.png" alt="Logo">
        </div>
        <h1 class="projects__title">Projects</h1>
      </header>


      <div class="project__list">
        <div v-for="project in projects" :key="project.slug.current" class="project">
          <router-link :to="{ name: 'Project', params: { slug: project.slug.current }}">
            <div class="project__thumbnail">
              <lazy-image :src="project.thumbnail.url"
                :alt="project.title"
                :aspectRatio="project.thumbnail.metadata.dimensions.aspectRatio"
                :color="project.thumbnail.metadata.palette.dominant.background" />
            </div>
            <h2 class="project__title">{{ project.title }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
  }
  &__intro {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 2.625rem 0 1rem 0;

    p {
      text-indent: 1.625rem;
      grid-column: 3 / -1;
      font-size: 1.5rem;
      color: var(--accent-color);

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

.project {
  margin: 0 0 1rem 0;
  


  &:hover {
    .project__title {
      color: var(--accent-color);
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 1rem;
    margin: 1rem 0 0 0;

    @include gt-sm {
      grid-template-columns: repeat(6, 1fr);
      gap: 2rem;
    }
  }

  &__title {
    font-size: 1rem;
    font-weight: 100;
    color: #b4b4b4;
    margin: .5rem 0 0 0;

    @include gt-sm {
      font-size: 1rem;
      
      /* letter-spacing: -1px; */
    }
  }

  &__thumbnail {
    overflow: hidden;
    border-radius: 4px;
    /* opacity: 0; */

    @include gt-sm {
      
    }
  }
}

ul li {
  display: block;
}

a {
  display: block;
}
</style>