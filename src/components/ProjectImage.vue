<template>
    <div class="project" :style="{ backgroundImage: `url(${ project.thumbnail.url })` }">
        <router-link class="flex" tag="a" :to="{ name: 'Project', params: { id: project.slug } }">
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
    border-radius: 4px;
    width: 360px;
    height: 480px;
    background: #eee;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    margin: 0 0rem 0rem 0;
    position: relative;
    /* background: url(https://fashionfav.com/wp-content/uploads/2020/12/Amber-Witcomb-by-Anya-Holdstock-for-Vogue-Italia-November-2020-2.jpg); */
    background-size: cover;
    overflow: hidden;
    /* box-shadow: 0px 8px 30px rgba(0, 0, 0, .25); */

    &:hover {
        .project__background {
            position: absolute;
            z-index: 0;
            opacity: 1;
        }
    }

    &__background {
        
        @include pos-abs-fill;
        /* z-index: -2; */
        background: rgba(1, 1, 1, .4);
        opacity: 0;
        
    }
    
    &__info {
        
        
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: .5rem;
        background-color: var(--main-color);
        color: var(--accent-color);
        border-radius: 4px;
        /* mix-blend-mode: difference; */

        h2 {
            /* text-transform: uppercase; */
            font-size: 1.25rem;
            width: 100%;
            font-weight: 400;
            line-height: 1;
        }

        p {
            margin-top: 2.625rem;
            font-size: 1rem;
            text-align: right;
            font-weight: 300;
            color: #aaa;
        }

    }
}

a.flex {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
}
</style>