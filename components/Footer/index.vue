<template>
    <div id="footer">
        <div class="player-progress"></div>
        <div class="area-wrapper">
            <div class="area-player">
                <div class="actions-wrapper">
                    <button type="button" class="btn-step-backward">
                        <fa-icon :icon="['fas', 'step-backward']" />
                    </button>
                    <button type="button" class="btn-play">
                        <fa-icon :icon="['fas', 'play']" />
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
            </div>
            <div class="area-actions">
                <button type="button">
                    <fa-icon :icon="['fas', 'caret-up']" />
                </button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #footer {
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

                        &:not(:last-of-type) {
                            margin-right: 15px;
                        }

                        &.btn-play {
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
            }
        }
    }
</style>
<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            current: 'player/getCurrent'
        })
    }
}
</script>