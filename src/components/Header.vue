<template>
    <header class="header">
        <div>
            <router-link class="header-link" to="/" v-if="!isProjectPage">Tyler Mitchell <span v-if="$route.name === 'Home'">is a New York <br/>based photographer</span></router-link>
             <button class="base-button header-link" to="/" v-else @click="$router.go(-1)"><arrow-icon rotate="180" :style="{ width: '20px', height: '20px' }" aria-label="Go Back"/></button>
        </div>
        <router-link class="header-link" to="/" v-if="isProjectPage">Tyler Mitchell</router-link>
        <router-link class="header-link" to="/profile">Profile</router-link>
    </header>
</template>

<script>
import ArrowIcon from '@/components/ui/ArrowIcon.vue'

export default {
    components: {
        ArrowIcon
    },
    computed: {
        isProjectPage() {
            return this.$route.name === 'Project'
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-family: $font-sans-serif;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.5rem 1rem;
    z-index: 9999;
    mix-blend-mode: difference;

    &-link {
        display: block;
        font-size: 1.25rem;
        color: #FFF;
        text-decoration: none;
        font-weight: 100;
        line-height: 1;

        @include tablet {
            font-size: 1.625rem;
        }

        &:hover {
            /* color: var(--main-color); */
        }

        &__back {
            display: inline-block;
            margin-left: .5rem;
            margin-top: -100px;
        }
        
    }
    &-title {
        text-transform: uppercase;
        font-size: 1.25rem;
        font-weight: 500;
    }
}

svg {
    width: 28px;
    height: 28px;
}
</style>