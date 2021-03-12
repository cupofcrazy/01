<template>

 <div class="project">
    <div class="container">
      <header class="project__header">
        <div class="project__info">
          <div class="project__details">
            <h1 class="project__title">{{ project.title }}</h1>
            <div class="project__summary">
              <h2>Summary</h2>
              <p>{{ project.description }}</p>
            </div>
          </div>
          <div class="project__more">
            <div class="project__link">
              <a :href="project.link" target="_blank">Preview Live Site</a>
            </div>
            <div class="project__tags">
              <p>{{ project.tools.join(' — ') }}</p>
            </div>

          </div>
        </div>
        <div class="project__thumbnail">
          <gradient-image :src="project.thumbnail.url" alt="Project Thumbnail" :color="project.thumbnail.metadata.palette.vibrant.background" :aspectRatio="3/4" /> 
        </div>
      </header>
      <div class="project__blocks">
        <div class="project__block" v-for="(block, index) in project.modules" :key="index">
          <text-block v-if="block.type === 'textBlock'" :block="block" />
          <single-image v-else-if="block.type === 'singleImage'" :block="block" />
          <double-image v-else-if="block.type === 'doubleImage'" :block="block" />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
// import gsap from 'gsap'
import { mapState } from 'vuex'
import { projectTransition } from '@/assets/js/transitions'
import TextBlock from '@/components/blocks/TextBlock.vue'
import SingleImage from '@/components/blocks/SingleImageBlock.vue'
import DoubleImage from '@/components/blocks/DoubleImageBlock.vue'
// import BaseListItem from '@/components/base/BaseListItem.vue'
// import { SanityContent } from '@nuxtjs/sanity/dist/components/sanity-content'


export default {
  components: { TextBlock, SingleImage, DoubleImage },
  data: () => ({
    project: {}
  }),
  created() {
    console.log(this.projects)
    const project = this.projects.find((currentProject) => (
      currentProject.slug.current === this.$route.params.slug
    ))
    console.log(project)

    this.project = project
  },
  methods: {
    enter(el, done) {
      projectTransition.enter(el, done)
    },
    leave(el, done) {
      projectTransition.leave(el, done)
    }
  },
  computed: {
    ...mapState(['projects'])
  }
}
</script>

<style lang="scss" scoped>
.project {
  &__header {
    display: grid;
    grid-template-columns: repeat(var(--grid-columns), 1fr);

    @include gt-sm {
      height: 100vh;

    }
  }
  &__info {
    padding: 5rem 1rem 1rem 1rem;
    grid-column: 1 / -1;

    @include gt-sm {
      grid-column: 1 / 8;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 3rem 1rem 1rem 1rem;

    }
  }
  &__thumbnail {
    overflow: hidden;
    grid-column: 1 / -1;

    @include gt-sm {
      grid-column: 8 / -1;
      height: 100vh;

    }
  }
  &__title {
    font-size: 3.625rem;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -2px;
    color: var(--accent-color);
    /* text-transform: uppercase; */
    @include gt-sm {
      letter-spacing: -4px;
      font-size: 8.25rem;

    }
  }
  &__summary {
    margin: 2.625rem 0 3rem 0;
    h2 {
      font-size: 1.625rem;
      font-weight: 100;
      text-transform: uppercase;
      color: var(--accent-color);
      /* margin: 0 0 3rem 0; */

      @include gt-sm {
        letter-spacing: -4px;
        font-size: 2.625rem;

      }
    }
    p {
      font-size: 1rem;
      color: var(--accent-color);

      @include gt-sm {
        font-size: 1.625rem;
        width: 75%;
      }
    }
  }
  &__tags {
    font-size: .85rem;
    color: var(--accent-color);
    /* text-transform: uppercase; */
    margin: 1.25rem 0 0 0;

    @include gt-sm {
      font-size: 1rem;
      width: 60%;
      color: var(--accent-color);
      text-transform: uppercase;
      margin: 1.25rem 0 0 0;
    }
  }
  &__link {
    margin: 1rem 0 0 0;
    a {
      display: inline-block;
      padding: .5rem 1rem;
      font-size: 1rem;
      color: var(--accent-color);
      border-radius:10rem;
      background-color: transparent;
      border: 1px solid var(--accent-color);
      transition: all .3s ease;

      @include gt-sm {
        font-size: 1.25rem;
        padding: 1rem 1.5rem;
      }

      &:hover {
        color: var(--main-color);
        background-color: var(--accent-color);
        transition: all .3s ease;
      }
    }
  }
  &__blocks {
    padding: 1rem;
  }
  &__block {
    margin-bottom: 1rem;
  }
}
</style>