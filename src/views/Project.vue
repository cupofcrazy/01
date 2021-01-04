<template>
    <div class="project" v-if="project">
        <project-details
            :project="project"
            @selectThumbnail="selectThumbnail"
            @closeProjectDetails="closeProjectDetails"
            v-if="projectDetailsOpen"
        />
        <div class="project-info">
           
            <div class="container">
                <h1 class="project-info__title">{{ project.title }}</h1>
                <button class="base-button project-info__button underline" @click="openProjectDetails" aria-label="See Details">See Details</button>

            </div>
            <div class="project-info__index">{{ slideIndex }} — {{ totalSlides }}</div>
        </div>
        <div class="slider">
            <button class="slider-nav nav__left" aria-label="Previous slide button" @click="prevSlide"><arrow-icon rotate="180" /></button>
            <div class="slides" ref="slides">
                <div v-for="(image, index) in project.images" :key="index" :class="[ 'slide', { 'active': activeSlide === index } ]"
                :style="{ width: image.asset.metadata.dimensions.width, height: image.asset.metadata.dimensions.height }">
                    <img :src="image.asset.url" :alt="`${project.title } photo`" width="100%">
                </div>
            </div>
            <button class="slider-nav nav__right" @click="nextSlide" aria-label="Next slide button"><arrow-icon /></button>      
        </div>
        
        
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { projectTransition } from '@/assets/js/transitions'


export default {
    components: {
        ArrowIcon: () => import('@/components/ui/ArrowIcon.vue'),
        ProjectDetails: () => import('@/components/project/ProjectDetails.vue')
    },
    data() {
        return {
            activeSlide: 0,
            projectDetailsOpen: false,
            project: {}
        }
    },
    methods: {
        nextSlide() {
            this.activeSlide = this.activeSlide + 1 >= this.slidesLength ? 0 : this.activeSlide + 1
        },
        prevSlide() {
            this.activeSlide = this.activeSlide - 1 < 0 ? this.slidesLength - 1 : this.activeSlide - 1
        },
        openProjectDetails() {
            this.projectDetailsOpen = true
        },
        closeProjectDetails() {
            this.projectDetailsOpen = false
        },
        selectThumbnail(index) {
            this.activeSlide = index
            this.projectDetailsOpen = false
            
        },
        enter(el, done) {
            projectTransition.enter(el, done)
        },
        leave(el, done) {
            projectTransition.leave(el, done)
        }
    },
    created() {
        try {
            
            this.project =  this.projects.find(project => project.slug === this.$route.params.id)

            this.$setPageTitle(`Photography: ${ this.project.title }`)
            this.$setTheme('--project-main-color', this.project.thumbnail.metadata.palette.darkVibrant.background)

            
        } catch (err) {
            console.error(err)
            this.$router.replace('/404')
        }
    },
    mounted() {
        
    },
    computed: {
        slidesLength() {
            return this.project.images.length
        },
        slideIndex() {
            return ((this.activeSlide + 1) <=9) ? `0${this.activeSlide+1}` : this.activeSlide + 1
        },
        totalSlides() {
            return this.project.images.length <= 9 ? `0${this.project.images.length}` : this.project.images.length
        },
        ...mapState(['projects'])
    }
}
</script>

<style lang="scss" scoped>
.slider {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &-nav {
        border: 0;
        background-color: transparent;
        font-size: 2rem;
        cursor: pointer;
        padding: 0 1rem;
    }
}
.slides {
    
    .slide {
        overflow: hidden;
        min-width: 60%;
        max-width: 640px;
        display: none;

        @include tablet {
            /* width: 480px; */
        }

        @include desktop {
            /* width: 640px; */
        }
        

        &.active {
            border-radius: $border-radius;
            display: block;
        }
    }
}
.project {
    position: relative;
    height: 100%;
    /* background: var(--main-color); */
}
.project-info {
    position: absolute;
    top: 4rem;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    width: 100%;
    color: var(--accent-color);

    &__title {
        font-size: 1.25rem;
        font-weight: 500;
        width: 65%;
        line-height: 1;
        letter-spacing: -1px;

        @include phone {
            font-size: 1.625rem;
        }

        @include tablet {
            font-size: 2rem;
        }

        @include desktop {
            width: 100%;
            font-size: 3rem;
        }
    }
    &__button {
        margin: 1rem 0;
        cursor: pointer;
        display: block;
        font-weight: 100;
        
    }

    &__index {
        font-size: 1.25rem;
        letter-spacing: -1px;

        @include phone {
            font-size: 1.625rem;
        }
        
        @include desktop {
            font-size: 3rem;
        }
    }
}

.highlight {
    color: var(--accent-color);
    opacity: .75;
}
</style>