<template>
  <router-link :to="to" class="base__link">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: "BaseLink",
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
  },
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
    text-decoration: underline;
  }
}
</style>