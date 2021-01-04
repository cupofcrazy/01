<template>
    <div class="projects">
        <div class="container">
            <div class="projects__heading">
                <h1>Photography</h1>
            </div>

            <ul class="projects__links">
                <li v-for="project in projects" :key="project.id" class="link">
                    <router-link :to="{ name: 'Project', params: { id: project.slug }}">
                        <div class="project">
                            <div class="project__info">
                                <p>{{ project.title }}</p>
                            </div>
                            <div class="project__image">
                                <img :src="project.thumbnail.url" alt="Some Caption for an image" />
                                <!-- <lazy-image :src="project.thumbnail.url" alt="Some Caption for an image" :aspectRatio="project.thumbnail.metadata.dimensions.aspectRatio" 
                                :color="project.thumbnail.metadata.palette.dominant.background" /> -->

                            </div>
                            
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import { allProjectsTransition } from '@/assets/js/transitions'

export default {
    methods: {
        enter(el, done) {
            allProjectsTransition.enter(el, done)
        },
        leave(el, done) {
            allProjectsTransition.leave(el, done)
        }
    },
    created() {
        this.$setPageTitle('Projects')
    },
    mounted() {
        this.$setTheme('--project-main-color')
    },
    computed: {
        ...mapState(['projects'])
    }
}
</script>

<style lang="scss" scoped>
.projects {
    /* background-color: var(--main-color); */
    .container {
        padding: 10rem 1rem 10rem 1rem;
    }
    &__heading {
        margin: 0  0 3rem 0;
        h1 {
            font-size: 2.625rem;
            font-weight: 100;
            width: 90%;
            line-height: 0.95;
            margin: 0 0 1rem 0;
            letter-spacing: -2px;

            @include phone {
                font-size: 3.625rem;
            }

             @include tablet {
                font-size: 5.625rem;
            }

            @include desktop {
                font-size: 12vw;
            }
        }
    }
    &__links {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;

        @include tablet {
            grid-template-columns: repeat(4, 1fr);
        }
        @include desktop {
            grid-template-columns: repeat(6, 1fr);
        }
        @include desktopxl {
            grid-template-columns: repeat(8, 1fr);
        }

        .project {
            position: relative;

            &::after {
                content: '';
                position: absolute;
                z-index: 99;
                left: 0;
                top: 0;
                bottom: 0;
                right: 0;
                background: #000000;
                opacity: .25;
            }

            &__image {
                width: 100%;
                height: 200px;
                overflow: hidden;
                border-radius: $border-radius;

                @include phone {
                    height: 240px;
                }

                @include tablet {
                    height: 320px;
                }

                &:hover {
                    img {
                        transition: all .3s ease;
                        transform: scale(1.15);
                    }
                }
                

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all .3s ease;
                }
            }
            &__info {
                position: absolute;
                left: 0;
                top: 0;
                z-index: 100;
                width: 85%;
                /* margin: .5rem 0 1rem 0; */
                padding: 1rem;
                /* mix-blend-mode: difference; */
                font-size: 1rem;
                font-weight: 300;
                color: var(--main-color);
                border-radius: $border-radius;
                
            }
        }
    }
}
</style>