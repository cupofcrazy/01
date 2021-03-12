<template>
    <p v-scroll-text-split>{{ block.caseStudyText }}</p>
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    block: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  color: var(--accent-color);
  font-size:1.15rem;

  @include sm {
    font-size: 2rem;
  }
  @include gt-sm {
    font-size: 2.25rem;
    padding: 8%;
  }
}
</style>