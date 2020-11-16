<template>
	<div class="footer-player">
		<div :style="{ transform: `translateX(-${100 - musicProgress}%)` }" class="player-progress"></div>
		<div class="area-wrapper">
			<div class="area-player">
				<div class="actions-wrapper">
					<button @click="playPrevMusic" type="button" class="btn-step-backward">
						<fa-icon :icon="['fas', 'step-backward']" />
					</button>
					<button v-show="isPlaying === false" @click="playMusic" type="button" class="btn-play">
						<fa-icon :icon="['fas', 'play']" />
					</button>
					<button v-show="isPlaying" @click="pauseMusic" type="button" class="btn-pause">
						<fa-icon :icon="['fas', 'pause']" />
					</button>
					<button @click="playNextMusic" type="button" class="btn-step-forward">
						<fa-icon :icon="['fas', 'step-forward']" />
					</button>
				</div>
				<div
					class="current-time"
				>{{ formTimeString(currentSeconds) }} / {{ formTimeString(currentMusic.playtime) }}</div>
			</div>
			<div class="area-music-info">
				<div class="music-info">
					<div :style="{ 'background-image': `url(${currentMusic.thumb})` }" class="music-thumb"></div>
					<div class="music-text">
						<div class="music-title">{{ currentMusic.title }}</div>
						<div class="music-desc">{{ currentMusic.desc }}</div>
					</div>
				</div>
				<div class="music-actions">
					<button class="btn-unlike">
						<fa-icon :icon="['far', 'thumbs-down']"></fa-icon>
					</button>
					<button class="btn-like">
						<fa-icon :icon="['far', 'thumbs-up']"></fa-icon>
					</button>
					<button>
						<fa-icon :icon="['fas', 'ellipsis-v']"></fa-icon>
					</button>
				</div>
			</div>
			<div class="area-actions">
				<button
                    @click="togglePannelShow"
                    type="button"
                    :class="{ active: isPannelShown }"
                    class="btn-caret"
                >
					<fa-icon :icon="['fas', 'caret-up']" />
				</button>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
    .footer-player {
        z-index: 9;
        
        position: fixed;
        left: 0;
        bottom: 0;

        width: 100%;
        height: 70px;

        background-color: $color_gray1;

        .player-progress {
            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: 2px;

            background-color: red;
        }

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

                    padding-left: 15px;

                    button {
                        outline: none;
                        border: none;
                        background: none;

                        color: white;

                        font-size: 14px;

                        cursor: pointer;

                        &:not(:last-of-type) {
                            margin-right: 15px;

                            @media screen and (max-width: $media_sd) {
                                margin-right: 7.5px;
                            }
                        }

                        &.btn-play, &.btn-pause {
                            font-size: 24px;
                        }
                    }
                }
                .current-time {
                    min-width: 60px;
                    margin-left: 15px;
                    font-size: 12px;
                    color: $color_gray3;

                    @media screen and (max-width: $media_sd) {
                        display: none;
                    }
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

                        @media screen and (max-width: $media_sd) {
                            display: none;
                        }
                    }
                    .music-text {
                        vertical-align: middle;
                        display: inline-block;
                        width: calc(100% - 55px);
                        font-size: 14px;

                        @media screen and (max-width: $media_sd) {
                            width: 100%;
                        }
 
                        .music-title {
                            max-width: 200px;
                            
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

                    @media screen and (max-width: $media_sd) {
                        margin-left: 15px;
                    }

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

                        &.btn-like, &.btn-unlike {
                            @media screen and (max-width: $media_sd) {
                                display: none;
                            }
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
                        font-size: 18px;
                        transition: transform 0.3s;

                        &.active {
                            transform: rotate(180deg);
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
    props: {
        isPannelShown: {
            type: Boolean
        }
    },
    computed: {
        ...mapGetters({
            currentSeconds: 'player/getCurrentSeconds',
            currentMusic: 'player/getCurrentMusic',
            isPlaying: 'player/getIsPlaying'
        }),
        musicProgress () {
            return this.currentSeconds / this.currentMusic.playtime * 100
        },
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
        togglePannelShow () {
            this.$emit('toggle-pannel-show')
        }
    }
}
</script>