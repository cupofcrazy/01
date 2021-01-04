<template>
    <transition name="fade" appear>
        <slot />
    </transition>
</template>

<script>
export default {
    name: 'TransitionAppear'
}
</script>