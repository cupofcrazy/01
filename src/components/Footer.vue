<template>
    <div class="footer">
        <div class="footer__projects">
            <router-link class="footer-link" to="/projects">Projects</router-link>
        </div>
        <div class="footer__circle">🌏</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.footer {
    position: fixed;
    bottom: 0rem;
    left: 0rem;
    padding: 1.5rem 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    mix-blend-mode: difference;

    &__projects {
        font-size: 1.625rem;
        font-weight: 100;

        .footer-link {
            text-decoration: none;
            color: #AAA;
            
        }
    }
}
</style>