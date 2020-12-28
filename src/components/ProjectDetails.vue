<template>
<transition @enter="projectDetailsEnter" @leave="projectDetailsLeave" :css="false" mode="out-in" appear>
    <div class="project__details">
        <div class="container">
            <button class="project__details-close base-button" @click="closeProjectDetails" aria-label="Close project details"><icon-cancel /></button>
            
            <h1>{{ project.title }} — <span class="highlight">{{ project.year }}</span></h1>
            <p>{{ project.description }}</p>
            <div class="gallery">
                <button v-for="(image, index) in project.images" :key="index" class="gallery-item" @click="selectThumbnail(index)" aria-label="Select image thumbnail">
                        <img :src="image.asset.url" :alt="`${project.title} image`" width="100%">
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
import IconCancel from '@/components/ui/IconCancel.vue'

export default {
  components: { IconCancel },
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
        closeProjectDetails() {
            this.$emit('closeProjectDetails')
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
                duration: .5,
                yPercent: 100,
                ease: 'expo.inOut',
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

    &-close {
        background-color: var(--accent-color);
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid var(--accent-color);
        margin: 0 auto 1em auto;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s ease;

        &:hover {
            transform: scale(1.15) rotate(180deg);
            transition: all .3s ease;
        }
    }

    .container {
        padding: 6rem  1rem 1rem 1rem;

        h1 {
            font-size: 3.625rem;
            font-weight: 100;
            letter-spacing: -1px;
            text-align: center;

            @include desktop {
                font-size: 8rem;
            }
        }
        p {
            margin: 2rem auto;
            width: 100%;
            font-weight: 100;
            font-size: 1.25rem;
            text-align: center;
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