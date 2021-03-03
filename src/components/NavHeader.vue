<template>
  <header class="header">
    <div class="header__l">
      <div class="header__logo">
        <base-link :to="{ name: 'Home' }"><img src="@/assets/images/logo.png" alt="logo" aria-label="logo"></base-link>
      </div>
    </div>
    <div class="header__r">
      <ul class="header__links">
        <li><base-link :to="{ name: 'Archive' }">Archive</base-link></li>
        <li><base-link :to="{ name: 'Projects' }">Projects</base-link></li>
        <li><base-link :to="{ name: 'Info' }">Info</base-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
import BaseLink from './base/BaseLink.vue';

export default {
  components: { BaseLink },
  computed: {},
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--main-color);
  z-index: 10;

  @include gt-sm {
    font-size: 2rem;
  }

  &__logo img {
    display: block;
    width: 2rem
  }

  &__links li {
    display: inline-block;
    margin: 0 0 0 1rem;

    @include gt-sm {
      margin: 0 0 0 2rem;
    }
  }
}
</style>