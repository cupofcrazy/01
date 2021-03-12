<template>
  <router-link :to="to" class="base__link" v-if="!isButton">
    <slot />
  </router-link>
  <button class="base__link" v-else @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    to: {
      type: [String, Object],
      required: false
    },
    isButton: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
};
</script>

<style lang="scss" scoped>
.base__link {
  color: #999999;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  &.router-link-exact-active {
    color: var(--accent-color);
    /* text-decoration: underline; */
  }
}
</style>