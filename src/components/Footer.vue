<template>
    <div class="footer">
        <div class="footer__projects">
            <router-link class="footer-link" to="/projects">Projects</router-link>
        </div>
        <div class="footer__circle"></div>
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
    

    &__projects {
        font-size: 1.625rem;
        font-weight: 100;
        mix-blend-mode: difference;
        color: var(--accent-color);

        .footer-link {
            text-decoration: none;
            color: var(--accent-color);
            
            
        }
    }
    &__circle {
        width: 36px;
        height: 36px;
        background: var(--project-main-color);
        border-radius: 50%;
        transition: all 1s ease;
    }
}
</style>