<template>
    <div class="gallery" ref="hScroll" v-if="$store.state.projects">
        <div class="container">
            <project-image :project="$store.state.projects[0]" />
        </div>
    </div>
</template>

<script>
import ProjectImage from './ProjectImage.vue'

export default {
    components: { ProjectImage },
    props: {
        projects: {
            type: Array,
            required: true
        }
    },
    
    data() {
        return {
        }
    },
    mounted() {
        
    }
}
</script>

<style lang="scss" scoped>
.gallery {
    width: 100%;
    height: 100%;
    
    /* overflow-x: auto; */
    /* padding: 1rem; */
    

    .container {
        height: 100%;
        /* padding: 1rem; */
        display: flex;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        /* overflow: hidden; */
        /* overflow-x: auto; */
    }

}
</style>