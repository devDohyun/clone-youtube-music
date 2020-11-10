<template>
    <div id="app">
        <default-navigation></default-navigation>
        <transition name="fade">
            <nuxt />
        </transition>
        <default-footer v-if="showFooter"></default-footer>
    </div>
</template>

<style lang="scss">
    * {
        box-sizing: border-box;
    }
    html, body {
        min-height: 100%;

        margin: 0;
        padding: 0;
    }
    html {
        overflow-y: auto;
    }
    #app {
        height: 100%;
        min-height: 100vh;
        background-color: black;
        color: white;
        font-family: Roboto, Noto Naskh Arabic UI, Arial, sans-serif;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.2s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
</style>

<script>
import { mapGetters } from 'vuex'

import DefaultNavigation from '@/components/Navigation'
import DefaultFooter from '@/components/Footer'

export default {
    components: {
        DefaultNavigation,
        DefaultFooter
    },
    computed: {
        showFooter () {
            let result = false

            if (typeof this.current !== 'undefined') result = true

            return result
        },
        ...mapGetters({
            current: 'player/getCurrentMusic'
        })
    }
}
</script>