<template>
    <div class="projects">
        <div class="container">
            <div class="projects__heading">
                <h1>The Photography of Tyler Mitchell</h1>
            </div>

            <ul class="projects__links">
                <li v-for="project in projects" :key="project.id" class="link">
                    <router-link :to="{ name: 'Project', params: { id: project.slug }}">
                        <div class="project">
                            <div class="project__image">
                                <lazy-image :src="project.thumbnail.url" alt="Some Caption for an image" :aspectRatio="project.thumbnail.metadata.dimensions.aspectRatio" 
                                :color="project.thumbnail.metadata.palette.dominant.background" />
                            </div>
                            <div class="project__info">
                                <p>{{ project.title }}</p>
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
    computed: {
        ...mapState(['projects'])
    }
}
</script>

<style lang="scss" scoped>
.projects {
    .container {
        padding: 10rem 1rem 1rem 1rem;
    }
    &__heading {
        h1 {
            font-size: 4.625rem;
            font-weight: 100;
            width: 90%;
            line-height: 0.95;
            margin: 0 0 1rem 0;
            letter-spacing: -2px;

            @include desktop {
                font-size: 8vw;
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
            grid-template-columns: repeat(8, 1fr);
        }

        .project {
            /* padding: .5rem; */
            /* border: 1px solid var(--accent-color); */

            &__image {
                width: 100%;
                height: 240px;
                overflow: hidden;
                border-radius: 4px;
            }
            &__info {
                margin: .5rem 0 1rem 0;
                font-size: 1rem;
                font-weight: 100;
                color: var(--accent-color);
            }
        }
    }
}
</style>