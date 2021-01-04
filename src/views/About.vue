<template>
  <div class="about">
    <div class="container">
      <div class="about__heading">
        <h2>Profile</h2>
        <h1>About Tyler Mitchell</h1>
      </div>
      <div class="about__info">
        <p class="row">
          Tyler Mitchell (American, b. 1995) is a photographer and filmmaker based in Brooklyn, working across many genres to explore and document a new aesthetic of Blackness.Mitchell is regularly published in avant-garde magazines, commissioned by prominent fashion houses, and exhibited in top tier institutions.
        </p>
        <p class="row">
          In 2018 he made history as the first Black photographer to shoot a cover of American Vogue for Beyoncé’s appearance in the September issue. In 2019 a portrait from this series was acquired by The Smithsonian National Portrait Gallery for its permanent collection. This, alongside many other accomplishments, has established Mitchell as one of the most closely watched up-and-coming talents in image making today.
        </p>
        <p class="row">
          His first solo exhibition ‘I Can Make You Feel Good’ at Foam Fotografiemuseum Amsterdam (2019) premiered video works including ‘Idyllic Space.’ An iteration of this show is now on view at the International Center of Photography (ICP) in New York.
          Mitchell has lectured at a number of institutions on the politics of image making including Harvard University, Paris Photo and the International Center of Photography (ICP).
        </p>
        
      </div>
      <div class="about__image row">
        <img src="https://cdn.sanity.io/images/eefpfqmk/production/5731168e7767a7e7a532272132b2cd355d045598-807x1000.jpg" alt="Tyler Mitchell Profile Image">
      </div>

      <div class="about__info">
        <p class="row">
          In 2020 Mitchell was announced as the recipient of the Gordon Parks Fellowship which will support a new project that reflects and draws inspiration from Parks’ central themes of representation and social justice. Mitchell’s fellowship will culminate in an exhibition of the new works at the Gordon Parks Foundation Gallery in Pleasantville, NY.
        <p class="row">
          Selected publications include <i>American Vogue, British Vogue, Teen Vogue, M Le Monde, i-D Magazine, AnOther Magazine, Dazed Magazine, Document Journal, The Guardian and The FADER</i>
        </p>
        <p class="row">
          Selected clients include <i>Comme des Garçons, Uniqlo, Calvin Klein, Prada, Apple, Mercedes Benz, Loewe, JW Anderson, Simone Rocha x Moncler, Marc Jacobs, Givenchy, Converse, Nike and Ray-Ban</i>

        </p>
      </div>

      <section class="about__section">
        <h1>Selected Bibliography</h1>
        <ul>
          <li>New York Times</li>
          <li>The New Yorker</li>
          <li>Artnet</li>
          <li>The Guardian</li>
          <li> NPR</li>
          <li>Vogue</li>
          <li>Dazed</li>
          <li>Creative Review</li>
          <li>WSJ</li>
        </ul>
      </section>

      <section class="about__section">
        <h1>About this site</h1>
        <p>This site was designed and developed by <a class="link" target="_blank" href="https://tobiii.ninja">Tobi Balogun</a>.<br />Images and text are the properties of Tyler Mitchell. This is in no way a collaboration of any kind.</p>
        <p>Duration: 1½ week</p>
        <p>I created this site as a design exercise / side project, because COVID 🤪, and decided to bring it to life with code</p>
        <p>This is not the official website of Tyler Mitchell. <a class="link" target="_blank" href="https://tylermitchell.co">Click here</a> to visit the official website</p>
      </section>

      <section class="about__section">
        <h1>Sources / Tools</h1>
        <p><b>Design:</b> Adobe XD</p>
        <p><b>Front-end:</b> Vue.js</p>
        <p><b>Backend:</b> Sanity CMS</p>
        <p><b>Animation / Transitions:</b> GSAP (GreenSock)</p>
        <p><b>Source code:</b> Not yet available.</p>
      </section>
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
    },
    
  },
  created() {
    this.$setPageTitle('About')
  },
  mounted() {
    this.$setTheme('--project-main-color', '#FFB300')
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
    color: var(--accent-color);
    

    h2 {
      letter-spacing: -1px;
      font-weight: 100;
      line-height: 1;
      font-size: 1.625rem;

      @include desktop {
        font-size: 6rem;
      }

      
    }
    h1 {
      width: 70%;
      font-size: 13vw;
      text-align: right;
      line-height: 1;
        
      }
  }

  &__section {
    h1 {
      font-size: 1.625rem;
      margin: 1rem 0 .5rem 0;
      color: var(--accent-color);

      @include tablet {
        font-size: 2.625rem;
      }

      @include desktop {
        font-size: 4.625rem;
      }
    }

    ul {
      color: var(--accent-color);
      font-size: 1rem;

      @include tablet {
        font-size: 1.625rem;
      }

      @include desktop {
        font-size: 2.25rem;
      }

      li {
        list-style-type: none;
        margin: 0 0 .25rem 0;
      }
    }

    p {
      color: var(--accent-color);
      font-size: 1rem;

      @include tablet {
        font-size: 1.625rem;
      }

      @include desktop {
        font-size: 2.25rem;
      }
    }
    
  }

  &__info {
    display: flex;
    flex-direction: column;
    color: var(--accent-color);

    p {
      
      width: 100%;
      font-size: 1rem;
      font-weight: 100;
      margin: 0 0 1rem 0;

      @include tablet {
        font-size: 1.625rem;
      }

      @include desktop {
        font-size: 2.25rem;
      }

     
    }

    
  }
  .about__image {
      margin: 1rem 0 2rem auto;
      width: 70%;
      border-radius: $border-radius;
      overflow: hidden;

       @include tablet {
        width: 480px;
      }

      img {
        width: 100%;
      }
    }
}
</style>
