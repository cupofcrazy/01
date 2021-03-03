<template>
  <button class="button_toggle" @click="toggleColorMode">
    <span :class="['button_toggle-circle', isDarkMode ? 'on' : '' ]"></span>
  </button>
</template>

<script>
export default {
  name: 'ToggleColorMode',
  methods: {
    toggleColorMode() {
      console.log(this.isDarkMode)
      document.body.classList.toggle('dark')
    }
  },
  computed: {
    isDarkMode() {
      return !document.body.classList.contains('dark')
    }
  }
}
</script>

<style lang="scss" scoped>
.button_toggle {
  display: flex;
  align-items: center;
  width: 2.25rem;
  height: 1.25rem;
  background-color: var(--accent-color);
  position: fixed;
  left: 0;
  bottom: 0;
  margin: 1rem;
  border: 2px solid var(--accent-color);
  outline: none;
  border-radius: 10rem;

  &-circle {
    display: block;
    width: 1rem;
    height: 1rem;
    background-color: var(--main-color);
    border-radius: 50%;
  }
}
</style>