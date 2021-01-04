<template>
    <div class="project" :style="{ backgroundImage: `url(${ project.thumbnail.url })` }">
        <router-link class="flex" tag="a" :to="{ name: 'Project', params: { id: project.slug } }">
            <div class="project__info" :style="{ backgroundColor: accentColor }">
                <h2>{{ project.title }}</h2>
                <p>{{ project.year }}</p>
            </div>
            
        </router-link>
        <div class="project__background"></div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    computed: {
        accentColor() {
            return this.project.thumbnail.metadata.palette.darkVibrant.background
        }
    }
}
</script>

<style lang="scss" scoped>
.project {
    border-radius: $border-radius;
    width: 280px;
    height: 360px;
    background: #eee;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    margin: 0 0rem 0rem 0;
    position: relative;
    background-size: cover;
    overflow: hidden;

    &:hover {
        .project__background {
            transition: all .5s ease;
            position: absolute;
            z-index: -1;
            opacity: 1;
        }
    }

    @include phone {
        width: 320px;
        height: 440px;
    }

    @include tablet {
        width: 360px;
        height: 480px;
    }

    &__background {
        
        transition: all .5s ease;
        @include pos-abs-fill;
        z-index: -1;
        background: rgba(1, 1, 1, .5);
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
       
        border-radius: $border-radius;

        h2 {
            color: #FFF;
            font-size: 1.25rem;
            width: 100%;
            font-weight: 300;
            line-height: 1;
        }

        p {
            color: #FFF;
            margin-top: 2.625rem;
            font-size: 1rem;
            text-align: right;
            font-weight: 300;
            
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