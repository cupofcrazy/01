<template>
    <div class="page-not-found">
        <div class="container">
            <div class="page-not-found__image">
                <img src="https://cdn.sanity.io/images/eefpfqmk/production/5731168e7767a7e7a532272132b2cd355d045598-807x1000.jpg" alt="Tyler Mitchell shot">
            </div>
            <div class="page-not-found__heading">
                <h1>Page<br /> Not Found</h1>
            </div>
            <div class="page-not-found__links">
                <p>Go back to <router-link to="/">homepage</router-link></p>
                <p>Find more of Tyler Mitchell's <router-link :to="{ name: 'Projects' }">projects here</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import { defaultTransition } from '@/assets/js/transitions'

export default {
    name: 'PageNotFound',
    methods: {
        enter(el, done) {
            defaultTransition.enter(el, done)
        },
        leave(el, done) {
            defaultTransition.leave(el, done)
        }
    },
    created() {
        this.$setPageTitle('Page Not Found')
    },
    mounted() {
        this.$setTheme('--project-main-color', 'red')
    }
}
</script>

<style lang="scss" scoped>
.page-not-found {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    &__image {
        width: 300px;
        margin: 0 auto;

        img {
            width: 100%;
        }
    }

    &__heading {
        margin-top: -15rem;
        h1 {
            text-align: center;
            font-size: 10vw;
            color: #FFB300;
            line-height: 1;
            letter-spacing: -5px;
        }
    }
    &__links {
        text-align: center;
        font-size: 2rem;
    }
}
</style>