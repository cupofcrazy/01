<template>
    <div class="project" :style="{ backgroundImage: `url(${ project.thumbnail.url })` }">
        <router-link :to="{ name: 'Project', params: { id: project.slug } }">
        <div class="project__info">
            <h2>{{ project.title }}</h2>
            <p>{{ project.year }}</p>
        </div>
        <div class="project__background"></div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.project {
    width: 360px;
    height: 480px;
    background: #eee;
    padding: 0rem;
    cursor: pointer;
    flex: 0 0 auto;
    margin: 0 1rem 0rem 0;
    position: relative;
    /* background: url(https://fashionfav.com/wp-content/uploads/2020/12/Amber-Witcomb-by-Anya-Holdstock-for-Vogue-Italia-November-2020-2.jpg); */
    background-size: cover;

    &:hover {
        .project__background {
            z-index: 0;
            opacity: 1;
        }
    }

    &__background {
        
        @include pos-abs-fill;
        background: rgba(1, 1, 1, .4);
        opacity: 0;
        
    }
    
    &__info {
        
        @include pos-abs-fill;
        width: 100%;
        height: 100%;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        color: var(--main-color);
        mix-blend-mode: difference;

        h2 {
            /* text-transform: uppercase; */
            font-size: 1.625rem;
            width: 70%;
            font-weight: 100;
            line-height: 1;
        }

        p {
            font-size: 1rem;
            text-align: right;
            font-weight: 100;
        }

    }
}
</style>