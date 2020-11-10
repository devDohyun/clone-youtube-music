<template>
    <div id="page-index">
        <div class="page-container">
            <template
                v-for="(content, contentIdx) in contentListTop"    
            >
                <template v-if="content.type === 'table'">
                    <music-table
                        :key="contentIdx"
                        :title="content.title"
                        :items="content.items"
                    ></music-table>
                </template>
            </template>
            <div class="announce-set-favorite" v-if="false">
                <div class="artist-wrapper">
                    <div
                        v-for="(item, idx) in 5"
                        :key="idx"
                        class="artist-item"
                    ></div>
                </div>
                <div class="text-content">
                    <div class="text-title">좋아하는 아티스트를 알려주세요.</div>
                    <div class="text-desc">나만을 위한 맞춤 서비스가 제공됩니다.</div>
                    <div class="actions">
                        <button type="button">시작하기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .announce-set-favorite {
        font-size: 0;

        .artist-wrapper {
            display: inline-block;
            width: calc(100% - 400px);

            @media (max-width: $media_sd) {
                display: block;
                width: 100%;
            }
        }
        .text-content {
            display: inline-block;
            width: 400px;
            
            @media (max-width: $media_sd) {
                display: block;
                width: 100%;
                text-align: center;
            }
            .text-title {
                font-size: 24px;
            }
            .text-desc {
                font-size: 14px;
                color: $color_gray3;
            }
            .actions {
                margin-top: 50px;
                
                @media (max-width: $media_sd) {
                    margin-top: 25px;
                }
            }
        }
    }
</style>

<script>
import MusicTable from '@/components/MusicTable'

export default {
    head () {
		return {
            title: '메인',
            isUserSetFavoriteArtist: false
		}
	},
    components: {
        MusicTable
    },
    data () {
        return {
            tableList: [
                {
                    type: 'table',
                    title: '즐겨 듣는 음악',
                    items: [
                        {
                            id: 0,
                            type: 'music',
                            title: '흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야',
                            desc: '노래•장범준',
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/흔들리는-꽃들-속에서-네-샴푸향이-느껴진거야.jpg'
                        },
                        {
                            id: 1,
                            type: 'music',
                            title: '스토커',
                            desc: '노래•10cm(십센치)',
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/스토커.jpg'
                        },
                        {
                            id: 2,
                            type: 'music',
                            title: '길',
                            desc: '노래•버스커버스커',
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/684015_1_f.jpg'
                        },
                        {
                            id: 23,
                            type: 'mix',
                            title: '속이 뻥 뚫리는 역대급 가창력',
                            desc: '재생목록•YouTube Music',
                            thumb: ''
                        },
                    ]
                }
            ]
        }
    },
    computed: {
        contentListTop () {
            let result = []

            result = result.concat(...this.tableList.slice(0, 2))

            if (this.isUserSetFavoriteArtist === false) {
                result.splice(2, 0, { type: 'setFavoriteArtist' })
            }
            
            return result
        }
    }
}
</script>