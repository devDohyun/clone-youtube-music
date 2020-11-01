<template>
    <div id="app">
        <default-navigation></default-navigation>
        <transition name="fade">
            <nuxt />
        </transition>
    </div>
</template>

<style lang="scss">
    * {
        box-sizing: border-box;
    }
    html, body {
        height: 100%;

        margin: 0;
        padding: 0;
    }
    html {
        overflow-y: auto;
    }
    #app {
        height: 100vh;
        background-color: black;
        color: white;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.2s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>

<script>
import DefaultNavigation from '@/components/Navigation'
export default {
    components: {
        DefaultNavigation
    }
}
</script>