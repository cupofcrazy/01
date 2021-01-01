<template>
    <div class="footer">
        <div class="footer__projects">
            <router-link class="footer-link" :to="{ name: 'Projects' }">Photography</router-link>
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
    align-items: flex-end;
    z-index: 1000;
    
    

    &__projects {
        font-size: 1.625rem;
        font-weight: 100;
        /* mix-blend-mode: difference; */
        /* color: var(--accent-color); */

        .footer-link {
            color: var(--accent-color);
            font-size: 1rem;
            text-decoration: none;
            mix-blend-mode: difference;

            
            @include phone {
                font-size: 1.25rem;
            }
            
            
        }
    }
    &__circle {
        width: 24px;
        height: 24px;
        background: var(--project-main-color);
        border-radius: 50%;
        transition: all 1s ease;
        /* border: 1px solid #FFF; */
    }
}
</style>