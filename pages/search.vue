<template>
    <div id="page-search">
        <div class="page-container">
            <div class="section-subtitle">노래</div>
            <div class="section-result">
                <div
                    v-for="(song, sIdx) in songsResult"
                    :key="`${sIdx}${song.title}`"
                    class="result-item"
                >
                    <div :style="{ 'background-image': `url(${song.thumb})`}" class="result-thumb"></div>
                    <div class="result-text">
                        <div class="result-title">{{ song.title }}</div>
                        <div class="result-desc">{{ song.desc }} • {{ $common.formTimeString(song.playtime) }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .page-container {
        max-width: 720px;
    }

    #page-search {
        .section-result {
            .result-item {
                display: flex;
                align-items: center;
                
                height: 80px;
                
                .result-thumb {
                    width: 56px;
                    height: 56px;

                    margin-right: 16px;

                    background-position: center;
                    background-size: contain;
                }

                .result-text {
                    font-size: 14px;

                    .result-title {
                        margin-bottom: 4px;
                    }
                    .result-desc {
                        color: $color_gray9;
                    }
                }
            }
        }
    }
</style>
<script>
import { mapGetters } from 'vuex'

export default {
    data () {
        return {
            query: this.$route.query.q
        }
    },
    computed: {
        ...mapGetters({
            getAllsongs: 'api/getAllSongs'
        }),
        songsResult () {
            return this.getAllsongs.filter(x => x.title.includes(this.query) || x.desc.includes(this.query))
        }
    }
}
</script>