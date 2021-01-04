<template>
    <transition-appear>
        <div class="footer">
            <div class="footer__projects">
                <router-link class="footer-link" :to="{ name: 'Projects' }">Photography</router-link>
            </div>
            <button class="footer__circle" ref="themeChangeButton" @click="toggleTheme"></button>
        </div>
    </transition-appear>
</template>

<script>
import TransitionAppear from './TransitionAppear.vue'
export default {
  components: { TransitionAppear },
  methods: {
      toggleTheme() {
          // Change page and document's overall theme (including address bar)
          document.body.classList.toggle('dark')
          if (document.body.classList.contains('dark')) {
              this.$setTheme('--main-color', '#111111')
              this.$setTheme('--accent-color', '#FFFFFF')
              document.querySelector('meta[name="theme-color"]').setAttribute('content', '#111111')
          } else {
              this.$setTheme('--main-color', '#FFFFFF')
              this.$setTheme('--accent-color', '#111111')
              document.querySelector('meta[name="theme-color"]').setAttribute('content', '#FFFFFF')
          }
      }
  },
  created() {
      
  }
    
}
</script>

<style lang="scss" scoped>
.footer {
    position: fixed;
    bottom: 0rem;
    left: 0rem;
    padding: 1.5rem 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1000;
    mix-blend-mode: difference;
    
    

    &__projects {
        font-size: 1.625rem;
        font-weight: 100;
        mix-blend-mode: difference;

        .footer-link {
            color: #FFF;
            font-size: 1rem;
            text-decoration: none;
            

            
            @include phone {
                font-size: 1.25rem;
            }
            
            
        }
    }
    &__circle {
        cursor: pointer;
        border: 0;
        width: 24px;
        height: 24px;
        background: var(--project-main-color);
        border-radius: 50%;
        transition: all 1s ease;
    }
}
</style>