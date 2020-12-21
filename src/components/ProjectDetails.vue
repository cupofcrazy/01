<template>
    <div class="project__details">
        <div class="container">
            <div class="gallery">
                <div v-for="(image, index) in slides" :key="index" class="gallery-item" @click="selectThumbnail(index)">
                    <img :src="image" alt="Some caption for Image" width="100%">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
        },
        selectedImage: {
            type: Number
        }


    },
    methods: {
        selectThumbnail(index) {
            this.selectedImage = index
        }
    }
}
</script>

<style lang="scss" scoped>

</style>