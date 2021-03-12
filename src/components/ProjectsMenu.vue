<template>
  <transition :css="false" mode="out-in" @enter="enter" @leave="leave" appear>
    <div class="menu">
      <div class="menu__background" @click="closeMenu"></div>
      <div class="menu__main main">
        <h1 class="menu__title">All Projects<sup>{{ projects.length }}</sup></h1>
        <ul class="main__list project__list">
          <li class="project__list-item" v-for="(project, index) in projects" :key="index">
            <span class="circle" v-if="$route.params.slug === project.slug.current"></span>
            <router-link :to="{ name: 'Project', params: { slug: project.slug.current } }">{{ project.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import gsap from 'gsap'
import { mapState } from 'vuex'

export default {
  data: () => ({
    isMobile: window.innerWidth < 960
  }),
  methods: {
    enter(el, done) {
      // const isMobile = window.innerWidth < 960
      // const tl = new gsap.timeline({})
      gsap.from('.menu__main', {
        duration: 1,
        xPercent: this.isMobile ? 0 : 100,
        yPercent: this.isMobile ? 100 : 0,
        ease: 'expo.out',
        onComplete: done
      })
    },
    leave(el, done) {
      const tl = new gsap.timeline({ onComplete: done })
      tl.to('.menu__background', {
        autoAlpha: 0,
        duration: .3,
      })
      tl.to('.menu__main', {
        duration: .5,
        xPercent: this.isMobile ? null : 100,
        yPercent: this.isMobile ? 100 : null,
        ease: 'expo.out',
        onComplete: done
      }, '<.1')
    },
    closeMenu() {
      this.$store.dispatch('setProjectsMenuOpen', false)
    }
  },
  computed: {
    ...mapState(['isProjectMenuOpen', 'projects'])
  }

}
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  
  
  &__background {
    background: #000;
    opacity: 0.85;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &__main {
    background-color: #fff;
    width: 100%;
    height: 60%;
    padding: 1rem;
    align-self: flex-end;

    @include gt-sm { 
      margin-left: auto;
      width: 50%;
      height: 100%;
      justify-self: flex-end;
    }
  }
  &__title {
    font-size: 2.625rem;
    color: #111;

    @include gt-sm {
      font-size: 6rem;;
    }

    sup {
      font-size: 1.25rem;
    }
  }
}

.project__list {
  margin-top: 2rem;
  &-item {
    display: block;
    color: #111;
    font-size: 1.25rem;
    margin-bottom: .25rem;

    @include gt-sm {
      font-size: 3rem;
    }

    a {
      position: relative;
      color: #111;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 1px;
        background-color: #111;
        transition: width 1s ease;
      }
      &:hover {
        /* font-weight: 600; */
        &:after {
          width: 100%;
          transition: width 1s ease;
        }
      }
    }
  }
}

.circle {
  width: 1rem;
  height: 1rem;
  border-radius: 10rem;
  background-color: #111;
  display: inline-block;
  margin-right: .5rem;

  @include gt-sm {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }
}
</style>