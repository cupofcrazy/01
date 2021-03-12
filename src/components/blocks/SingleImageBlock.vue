<template>
  <div class="project__shot">
    <div class="singleImage">
      <lazy-image :src="block.image.url"
        alt="Not Available"
        :aspectRatio="block.image.metadata.dimensions.aspectRatio"
        :color="block.image.metadata.palette.dominant.background" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'SingleImageBlock',
  props: {
    block: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.project__shot {
  /* padding: 1rem; */
  background-color: #eee;

  @include sm {
    padding: 10%;
  }

  @include gt-sm {
    padding: 15%;
  }

  .singleImage {
    overflow: hidden;
    border-radius: 2px;
    width: 100%;
  }

}
</style>