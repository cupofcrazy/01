<template>
    <div class="projects">
        <div class="container">
            <div class="projects__heading">
                <h1>The Photography of Tyler Mitchell</h1>
            </div>

            <ul class="projects__links">
                <li v-for="project in projects" :key="project.id" class="link">
                    <router-link :to="{ name: 'Project', params: { id: project.slug }}">{{ project.title }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
            font-size: 3.625rem;
            width: 90%;
            line-height: 0.95;

            @include desktop {
                font-size: 8vw;
            }
        }
    }
    &__links {
        float: right;
        font-size: 1.625rem;
        font-weight: 100;
        margin: 1rem 0;

        @include desktop {
            font-size: 3.625rem;
        }
        .link {
            text-align: right;
            list-style-type: none;
            margin: 0;

            a {
                text-decoration: none;
                color: #aaa;

                &:hover {
                    color: var(--accent-color);
                }
            }
        }
    }
}
</style>