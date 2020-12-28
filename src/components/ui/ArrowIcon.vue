<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="20.051" height="16.296" viewBox="0 0 20.051 16.296" :style="{ transform: `rotate(${ rotate }deg)` }">
        <g id="arrow-right" data-name="arrow-right" transform="translate(0 0.707)">
            <path d="M7.5,18H26.137" transform="translate(-7.5 -10.559)" fill="none" stroke="#FFF" stroke-linejoin="round" stroke-width="2"/>
            <path d="M18,7.5l7.441,7.441L18,22.382" transform="translate(-6.804 -7.5)" fill="none" stroke="#FFF" stroke-width="2"/>
        </g>
    </svg>
</template>

<script>
export default {
    name: 'ArrowIcon',
    props: {
        rotate: {
            type: String,
            required: false
        },
    }
}
</script>

<style lang="scss" scoped>
svg {
    mix-blend-mode: difference;
}
</style>