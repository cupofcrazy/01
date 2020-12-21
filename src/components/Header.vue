<template>
    <header class="header">
        <router-link class="header-link" to="/">Tyler Mitchell</router-link>
        <!-- <h3 class="header-title">Tyler Mitchell</h3> -->
        <router-link class="header-link" to="/profile">Profile</router-link>
    </header>
</template>

<script>
export default {
    
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
    align-items: center;
    padding: 1.5rem 1rem;
    z-index: 9999;
    mix-blend-mode: difference;

    &-link {
        display: block;
        font-size: 1.625rem;
        color: #AAA;
        text-decoration: none;
        font-weight: 100;

        &:hover {
            color: var(--main-color);
        }
        
    }
    &-title {
        text-transform: uppercase;
        font-size: 1.25rem;
        font-weight: 500;
    }
}
</style>