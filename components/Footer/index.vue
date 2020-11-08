<template>
    <div id="footer">
        <div class="player-progress"></div>
        <div class="area-wrapper">
            <div class="area-player">
                <div class="actions-wrapper">
                    <button type="button" class="btn-step-backward">
                        <fa-icon :icon="['fas', 'step-backward']" />
                    </button>
                    <button v-show="isPlaying === false" @click="playMusic" type="button" class="btn-play">
                        <fa-icon :icon="['fas', 'play']" />
                    </button>
                    <button v-show="isPlaying" @click="pauseMusic" type="button" class="btn-pause">
                        <fa-icon :icon="['fas', 'pause']" />
                    </button>
                    <button type="button" class="btn-step-forward">
                        <fa-icon :icon="['fas', 'step-forward']" />
                    </button>
                </div>
                <div class="current-time">
                    {{ '2:08' }} / {{ '2:20' }}
                </div>
            </div>
            <div class="area-music-info">
                <div class="music-info">
                    <div :style="{ 'background-image': `url(${current.thumb})` }" class="music-thumb"></div>
                    <div class="music-text">
                        <div class="music-title">{{ current.title }}</div>
                        <div class="music-desc">{{ current.desc }}</div>
                    </div>
                </div>
                <div class="music-actions">
                    <button><fa-icon :icon="['far', 'thumbs-down']"></fa-icon></button>
                    <button><fa-icon :icon="['far', 'thumbs-up']"></fa-icon></button>
                    <button><fa-icon :icon="['fas', 'ellipsis-v']"></fa-icon></button>
                </div>
            </div>
            <div class="area-actions">
                <button type="button" class="btn-caret">
                    <fa-icon :icon="['fas', 'caret-up']" />
                </button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #footer {
        z-index: 9;
        
        position: fixed;
        left: 0;
        bottom: 0;

        width: 100%;
        height: 70px;

        background-color: $color_gray1;

        .area-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;

            height: 100%;

            .area-player {
                display: flex;
                justify-content: left;
                align-items: center;
                
                .actions-wrapper {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    button {
                        margin-left: 15px;
                        
                        outline: none;
                        border: none;
                        background: none;

                        color: white;

                        font-size: 14px;

                        cursor: pointer;

                        &:not(:last-of-type) {
                            margin-right: 15px;
                        }

                        &.btn-play, &.btn-pause {
                            font-size: 24px;
                        }
                    }
                }
                .current-time {
                    margin-left: 15px;
                    font-size: 12px;
                    color: $color_gray3;
                }
            }
            .area-music-info {
                .music-info {
                    vertical-align: middle;
                    display: inline-block;
                    font-size: 0;

                    .music-thumb {
                        vertical-align: middle;
                        display: inline-block;

                        width: 40px;
                        height: 40px;

                        margin-right: 15px;

                        background-color: $color_gray3;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    .music-text {
                        vertical-align: middle;
                        display: inline-block;
                        width: calc(100% - 55px);
                        font-size: 14px;
 
                        .music-title {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        .music-desc {
                            color: $color_gray3;

                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                    }
                }
                .music-actions {
                    vertical-align: middle;
                    display: inline-block;
                    margin-left: 45px;

                    button {
                        padding: 0;
                        
                        background-color: transparent;
                        outline: none;
                        border: none;

                        color: $color_gray3;
                        font-size: 20px;

                        cursor: pointer;

                        &:not(:last-of-type) {
                            margin-right: 20px;
                        }
                    }
                }
            }
            .area-actions {
                button {
                    margin-right: 15px;

                    outline: none;
                    border: none;
                    background: none;

                    color: white;

                    font-size: 14px;

                    cursor: pointer;

                    &:not(:first-of-type) {
                        margin-right: 15px;
                    }

                    &.btn-caret {
                        color: white;
                    }
                }
            }
        }
    }
</style>
<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            current: 'player/getCurrent',
            isPlaying: 'player/getIsPlaying'
        })
    },
    methods: {
        playMusic () {
            this.$store.commit('player/setIsPlaying', true)
        },
        pauseMusic () {
            this.$store.commit('player/setIsPlaying', false)
        }
    }
}
</script>
