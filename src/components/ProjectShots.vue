<template>
  <section class="project__shots">
    <div class="container">
      <div class="block" v-for="(block, index) in blocks" :key="index">
        <text-block v-if="block.type === 'textBlock'" :block="block" />
        <single-image-block v-else-if="block.type === 'singleImage'" :block="block" />
        <double-image-block v-else-if="block.type === 'doubleImage'" :block="block" />
      </div>
    </div>
  </section>
</template>

<script>
import DoubleImageBlock from './blocks/DoubleImageBlock.vue'
import SingleImageBlock from './blocks/SingleImageBlock.vue'
import TextBlock from './blocks/TextBlock.vue'

export default {
  components: { TextBlock, SingleImageBlock, DoubleImageBlock },
  name: 'ProjectShots',
  props: {
    blocks: {
      type: Array
    }
  },
  mounted() {
    console.log(this.blocks)
  }
}
</script>

<style lang="scss" scoped>
.block {
  margin: 1rem 0;
  
}
</style>