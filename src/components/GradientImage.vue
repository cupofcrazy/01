<template>
  <div class="gradient">
    <lazy-image :src="src"
      :alt="alt"
      :aspectRatio="aspectRatio"
      :color="color" />
    <div class="gradient-bg" :style="{ background: `linear-gradient(0deg, ${color} 0%, rgba(0,0,0,0) 100%)` }"></div>
  </div>
</template>

<script>
export default {
  props: {
    src: { type: String },
    alt: { type: String },
    aspectRatio: { type: Number },
    color: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.gradient {
  position: relative;
  &-bg {
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
}
</style>