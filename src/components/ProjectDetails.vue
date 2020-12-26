<template>
<transition @enter="projectDetailsEnter" @leave="projectDetailsLeave" :css="false" mode="out-in" appear>
    <div class="project__details">
        <div class="container">
            <h2>{{ project.title }} — <span class="highlight">{{ project.year }}</span></h2>
            <p>{{ project.description }}</p>
            <div class="gallery">
                <button v-for="(image, index) in project.images" :key="index" class="gallery-item" @click="selectThumbnail(index)">
                        <img :src="image.asset.url" alt="Some caption for Image" width="100%">
                        <!-- <lazy-image :src="image.asset.url" alt="Some Caption for an image" :aspectRatio="image.asset.metadata.dimensions.aspectRatio" 
                            :color="image.asset.metadata.palette.dominant.background"
                        /> -->
                </button>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
import { TweenMax } from 'gsap'

export default {
    props: {
        project: {
            type: Object,
            required: true
        }


    },
    methods: {
        selectThumbnail(index) {
            this.$emit('selectThumbnail', index)
        },
        projectDetailsEnter(el, done) {
           TweenMax.from(el, {
                duration: 1,
                yPercent: 100,
                clipPath: 'inset(100% 0% 0% 0%)',
                ease: 'expo.out',
                onComplete: done
            })
        },
        projectDetailsLeave(el, done) {
           TweenMax.to(el, {
                duration: 1,
                yPercent: 100,
                clipPath: 'inset(100% 0% 0% 0%)',
                ease: 'expo.out',
                onComplete: done
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.project__details {
    
    width: 100%;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    background: var(--project-main-color);
    overflow-y: scroll;

    .container {
        padding: 10rem  1rem 1rem 1rem;

        h2 {
            font-size: 3.625rem;
            font-weight: 100;
            letter-spacing: -1px;
        }
        p {
            margin: 2rem 0;
            width: 75%;
            font-weight: 100;
            font-size: 1.25rem;
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
            border: 0;
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
</style>