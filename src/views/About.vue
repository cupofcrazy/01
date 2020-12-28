<template>
  <div class="about">
    <div class="container">
      <div class="about__heading">
        <h2>Profile</h2>
        <h1>About Tyler Mitchell</h1>
      </div>
      <div class="about__info">
        <p class="row">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit laborum labore vitae officia possimus in tempore veritatis sit, 
          temporibus facere perspiciatis nobis iste error amet! Quas et dicta atque eveniet!
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit laborum labore vitae officia possimus in tempore veritatis sit, 
          temporibus facere perspiciatis nobis iste error amet! Quas et dicta atque eveniet!

          <br />

          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit laborum labore vitae officia possimus in tempore veritatis sit, 
          temporibus facere perspiciatis nobis iste error amet! 
        </p>

        <div class="about__image row">
          <img src="https://cdn.sanity.io/images/eefpfqmk/production/5731168e7767a7e7a532272132b2cd355d045598-807x1000.jpg" alt="Tyler Mitchell Profile Image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defaultTransition } from '@/assets/js/transitions'

export default {
  methods: {
    enter(el, done) {
      defaultTransition.enter(el, done)
    },
    leave(el, done) {
      defaultTransition.leave(el, done)
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  padding: 1rem;
  /* background-color: var(--main-color); */

  .container {
    margin: 10rem 0 10rem 0;
  }
  &__heading {
    
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0 0 1rem 0;
    

    h2 {
      letter-spacing: -1px;
      font-weight: 100;
      line-height: 1;
      font-size: 2.25rem;

      @include desktop {
        font-size: 6rem;
      }

      
    }
    h1 {
      font-weight: 100;
      width: 70%;
      font-size: 13vw;
      text-align: right;
      line-height: 1;
        
      }
  }

  &__info {
    display: flex;
    flex-direction: column;

    p {
      
      width: 100%;
      font-size: 1.25rem;
      font-weight: 100;

      @include desktop {
        font-size: 2.25rem;
      }

     
    }

    .about__image {
      margin: 1rem 0 0 auto;
      width: 70%;
      border-radius: 4px;
      overflow: hidden;

       @include desktop {
        width: 640px;
      }

      img {
        width: 100%;
      }
    }
  }
}
</style>
