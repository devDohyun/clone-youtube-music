<template>
    <div class="footer-pannel">
        <div class="main-pannel">
            <div class="current-music">
                <div class="music-thumb" :style="{'background-image': `url(${currentMusic.thumb})`}"></div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .footer-pannel {
        z-index: 8;

        position: fixed;
        left: 0;
        top: 65px;

        width: 100%;
        height: calc(100% - 65px - 70px);

        padding: 50px 50px 0 50px;

        background-color: black;

        .main-pannel {
            display: inline-flex;
            justify-content: center;
            align-items: center;

            width: 50%;
            height: 100%;

            padding-bottom: 50px;

            .current-music {
                width: 100%;
                max-width: 800px;

                .music-thumb {
                    width: 100%;
                    padding-top: 100%;

                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                }
            }
        }
    }
</style>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            currentSeconds: 'player/getCurrentSeconds',
            currentMusic: 'player/getCurrentMusic',
            isPlaying: 'player/getIsPlaying'
        }),
    },
    methods: {
        ...mapActions({
            playMusic: 'player/playMusic',
            pauseMusic: 'player/pauseMusic',
            playNextMusic: 'player/playNextMusic',
            playPrevMusic: 'player/playPrevMusic',
        }),
        formTimeString (val) {
            let result = ''
            result += Math.floor(val / 60)
            result += ':'
            result += ('0' + (val % 60)).slice(-2)
            
            return result
        },
        musicProgress () {
            return this.currentSeconds / this.currentMusic.playtime * 100
        },
        togglePannelShow () {
            this.$emit('toggle-pannel-show')
        }
    }
}
</script>