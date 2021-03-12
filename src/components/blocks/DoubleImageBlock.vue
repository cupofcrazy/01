<template>
  <div class="shot project__shot doubleImage">
    <div class="image image1">
      <lazy-image :src="block.image1.url"
        alt="Not Available"
        :aspectRatio="block.image1.metadata.dimensions.aspectRatio"
        :color="block.image1.metadata.palette.dominant.background" />
    </div>
    <div class="image image2">
      <lazy-image :src="block.image2.url"
        alt="Not Available"
        :aspectRatio="block.image2.metadata.dimensions.aspectRatio"
        :color="block.image2.metadata.palette.dominant.background" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DoubleImageBlock',
    props: {
      block: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>
.doubleImage {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  background-color: #eee;

  @include sm {
    padding: 10%;
  }

  @include gt-sm {
    padding: 15%;
  }

  .image {
    width: 50%;
    overflow: hidden;
    border-radius: 2px;
  }
}
</style>