<template>
  <div class="project__list">
    <div v-for="project in projects" :key="project.slug.current" class="project">
      <router-link :to="{ name: 'Project', params: { slug: project.slug.current }}" class="project__container">
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
</template>

<script>
export default {
  props: {
    projects: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  margin: .75rem 0;
  
  @include gt-sm {
    &:nth-of-type(1) {
      grid-column: 4 / -1;
    }
  } 
  
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @include gt-sm {
      grid-template-columns: repeat(6, 1fr);
    }
  }
  &__container {
  }
  &__thumbnail {
    overflow: hidden;
    border-radius: 4px;

    @include gt-sm {
    }
  }
  &__title {
    margin: .5rem 0 0 0;
    font-size: 1rem;
    color: #aaa;
    font-weight: 100;
    letter-spacing: -.25px;

    @include gt-sm {
      font-size: 2rem;
    }
  }
}
</style>