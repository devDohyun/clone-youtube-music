<template>
    <div class="footer-pannel">
        <div class="main-pannel">
            <div class="current-music">
                <div class="music-thumb" :style="{ 'background-image': `url(${currentMusic.thumb})` }"></div>
            </div>
        </div>
        <div class="playlist-pannel">
            <div class="tap-wrapper">
                <button @click="1" type="button">다음 트랙</button>
                <button type="button">가사</button>
            </div>
            <div class="playlist-wrapper">
                <div
                    v-for="(item, idx) in playlist"
                    :key="idx"
                    @click="playThis(idx)"
                    :class="{ 'music-now ': idx === playIndex }"
                    class="music-item"
                >
                    <div :style="{ 'background-image': `url(${item.thumb})` }" class="music-thumb">
                        <div class="thumb-overlay">
                            <button v-if="isPlaying && idx === playIndex" type="button"><fa-icon :icon="['fas', 'volume-down']" /></button>
                            <button v-else-if="!isPlaying && idx === playIndex" type="button"><fa-icon :icon="['fas', 'play']" /></button>
                        </div>
                    </div>
                    <div class="music-text">
                        <div class="music-title">{{ item.title }}</div>
                        <div class="music-desc">{{ item.desc }}</div>
                    </div>
                    <div class="music-playtime">{{ $common.formTimeString(item.playtime) }}</div>
                </div>
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

        text-align: center;

        font-size: 0;

        .main-pannel {
            vertical-align: top;
            display: inline-flex;
            justify-content: center;
            align-items: center;

            width: 50%;
            height: 100%;

            padding-bottom: 50px;

            .current-music {
                width: 100%;
                max-width: 600px;

                .music-thumb {
                    width: 100%;
                    padding-top: 100%;

                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                }
            }
        }
        .playlist-pannel {
            vertical-align: top;
            display: inline-block;
            width: 50%;
            height: 100%;

            max-width: 600px;

            padding-left: 50px;
            
            .tap-wrapper {
                button {
                    padding: 15px;
                    
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid white;
                    outline: none;
                    
                    color: white;

                    text-align: center;
                    
                    font-size: 14px;


                    cursor: pointer;

                    &:nth-of-type(1) {
                        width: 60%;
                    }
                    &:nth-of-type(2) {
                        width: 40%;
                        color: rgba($color: white, $alpha: 0.3);
                        border-color: rgba($color: white, $alpha: 0.3);
                    }
                }
            }
            .playlist-wrapper {
                .music-item {
                    font-size: 0;

                    padding: 10px;
                    border-bottom: 1px solid $color_gray1;

                    text-align: left;

                    cursor: pointer;

                    &.music-now {
                        background-color: rgba($color: white, $alpha: 0.1);

                        .music-thumb {
                            .thumb-overlay {
                                display: flex;
                            }
                        }
                    }
                    
                    .music-thumb {
                        vertical-align: middle;
                        display: inline-block;
                        
                        width: 35px;
                        height: 35px;
                        margin-right: 15px;

                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;


                        .thumb-overlay {
                            display: none;
                            // display: flex;
                            justify-content: center;
                            align-items: center;
                            
                            width: 100%;
                            height: 100%;
                            background-color: rgba($color: black, $alpha: 0.35);

                            button {
                                color: white;
                                font-size: 18px;
                            }
                        }
                    }
                    .music-text {
                        vertical-align: middle;
                        display: inline-block;
                        
                        width: calc(100% - 50px - 40px);
                        
                        font-size: 16px;
                        color: $color_gray5;

                        @media (max-width: $media_md) {
                            font-size: 14px;
                        }

                        & > * {
                            width: 100%;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        .music-title {
                            color: white;
                            font-weight: 500;
                        }
                        .music-desc {
                            margin-top: 2.5px;
                        }
                    }
                    .music-playtime {
                        vertical-align: middle;
                        display: inline-block;

                        width: 40px;

                        color: $color_gray5;
                        
                        text-align: right;
                        
                        font-size: 16px;

                        @media (max-width: $media_md) {
                            font-size: 14px;
                        }
                    }
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
            isPlaying: 'player/getIsPlaying',
            playlist: 'player/getPlaylist',
            playIndex: 'player/getPlayIndex'
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
        },
        playThis (index) {
            this.$store.commit('player/setPlayIndex', index)
            this.$store.dispatch('player/playMusic')
        }
    }
}
</script>