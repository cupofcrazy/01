<template>
    <div class="project">
        <div class="project__details" v-show="projectDetailsOpen">
            <div class="container">
                <h2>{{ project.title }} — <span class="highlight">{{ project.year }}</span></h2>
                <p>{{ project.description }}</p>
                <div class="gallery">
                   <div v-for="(image, index) in project.images" :key="index" class="gallery-item" @click="selectThumbnail(index)" 
                    >
                        <img :src="image.asset.url" alt="Some caption for Image" width="100%">
                        <!-- <lazy-image :src="image.asset.url" alt="Some Caption for an image" :aspectRatio="image.asset.metadata.dimensions.aspectRatio" 
                            :color="image.asset.metadata.palette.dominant.background"
                        /> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="project-info">
            <div class="project-info__title">
                <p>{{ project.title }}</p>
                <button class="base-button" @click="openProjectDetails">See Details</button>

            </div>
            <div class="project-info__index">{{ slideIndex }} — {{ totalSlides }}</div>
        </div>
        <div class="slider">
            <button class="slider-nav nav__left" @click="prevSlide">←</button>
            <div class="slides" ref="slides">
                <div v-for="(image, index) in project.images" :key="index" :class="[ 'slide', { 'active': activeSlide === index } ]"
                :style="{ width: image.asset.metadata.dimensions.width, height: image.asset.metadata.dimensions.height }">
                    <img :src="image.asset.url" :alt="image.caption" width="100%">
                </div>
            </div>
            <button class="slider-nav nav__right" @click="nextSlide">→</button>      
        </div>
        
        
    </div>
    
</template>

<script>
// import sanityClient, { query } from '@/sanity'
import { mapState } from 'vuex'
import { defaultTransition } from '@/assets/js/transitions'

export default {
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
        selectThumbnail(index) {
            this.activeSlide = index
            this.projectDetailsOpen = false
        },
        enter(el, done) {
            defaultTransition.enter(el, done)
        },
        leave(el, done) {
            defaultTransition.leave(el, done)
        }
    },
    created() {
        try {
            
            this.project =  this.projects.find(project => project.slug === this.$route.params.id)

            // const root = document.documentElement;

            // root.style.setProperty('--project-main-color', this.project.thumbnail.metadata.palette.lightVibrant.background)
            // root.style.setProperty('--project-accent-color', this.project.thumbnail.metadata.palette.lightVibrant.foreground)

            console.log(this.project)

            
        } catch (err) {
            console.error({ err })
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
    }
}
.slides {
    
    .slide {
        overflow: hidden;
        min-width: 360px;
        max-width: 640px;
        /* height: 640px; */
        /* background-color: red; */
        margin: 0 1rem;
        display: none;
        

        &.active {
            /* background-color: blue; */
            border-radius: 4px;
            display: block;
        }
    }
}
.project {
    position: relative;
    height: 100%;
    background: var(--project-main-color);
    transition: all .5s ease;
}
.project-info {
    position: absolute;
    top: 5rem;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    width: 100%;
    color: var(--project-accent-color);

    &__title {
        font-size: 1.625rem;
        font-weight: 100;
        width: 65%;
        line-height: 1;

        @include desktop {
            width: 30%;
            font-size: 3vw;
        }
    }

    &__index {
        font-size: 2rem;
        letter-spacing: -2px;
        
    }
}

.project__details {
    
    width: 100%;
    min-height: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 500;
    background: var(--project-main-color);

    .container {
        padding: 10rem  1rem 1rem 1rem;

        h2 {
            font-size: 2.625rem;
            font-weight: 100;
        }
        p {
            margin: 2rem 0;
            width: 75%;
            font-weight: 100;
        }
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: .5rem;
        
        overflow-y: auto;

        @include desktop {
            grid-template-columns: repeat(8, 1fr);
        }

        &-item {
            border-radius: 4px;
            cursor: pointer;
            overflow: hidden;
            object-fit: cover;

            &:hover {
                img {
                    transform: scale(1.15);
                    transition: all .3s ease;
                }
            }
            img {
                /* transform: scale(.95); */
                object-fit: cover;
                width: 100%;
                height: 100%;
                transition: all .3s ease;
            }
        }
    }

}

.highlight {
    color: var(--accent-color);
    opacity: .5;
}
</style>