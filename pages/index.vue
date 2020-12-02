<template>
    <div id="page-index">
        <div class="page-container">
            <template
                v-for="(content, contentIdx) in contentListTop"    
            >
                <template v-if="content.type === 'table'">
                    <music-table
                        :key="`${contentIdx}${content.title}`"
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
            <template
                v-for="(content, contentIdx) in contentListMiddle"    
            >
                <template v-if="content.type === 'table'">
                    <music-table
                        :key="`${contentIdx}${content.title}`"
                        :title="content.title"
                        :items="content.items"
                    ></music-table>
                </template>
            </template>
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
                color: $color_gray5;
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
                            desc: '노래 • 장범준',
                            playtime: 168,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/흔들리는-꽃들-속에서-네-샴푸향이-느껴진거야.jpg'
                        },
                        {
                            id: 1,
                            type: 'music',
                            title: '스토커',
                            desc: '노래 • 10cm(십센치)',
                            playtime: 255,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/스토커.jpg'
                        },
                        {
                            id: 2,
                            type: 'music',
                            title: '길',
                            desc: '노래 • 버스커버스커',
                            playtime: 207,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/684015_1_f.jpg'
                        },
                    ]
                },
                {
                    type: 'table',
                    title: '맞춤 믹스',
                    items: [
                        {
                            id: 23,
                            type: 'mix',
                            title: '속이 뻥 뚫리는 역대급 가창력',
                            desc: '재생목록 • YouTube Music',
                            playtime: 144,
                            thumb: 'https://picsum.photos/id/171/200/200'
                        },
                        {
                            id: 24,
                            type: 'mix',
                            title: '기타치는 꿀성대 인디/어쿠스틱',
                            desc: '재생목록 • YouTube Music',
                            playtime: 144,
                            thumb: 'https://picsum.photos/id/312/200/200'
                        },
                    ]
                },
                {
                    type: 'table',
                    title: '실시간 인기곡',
                    items: [
                        {
                            id: 105,
                            type: 'music',
                            title: 'Life Goes On',
                            desc: 'BTS (방탄소년단) • BE',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/BTS_BE.jpg',
                            rankChange: 3
                        },
                        {
                            id: 106,
                            type: 'music',
                            title: 'Dynamite',
                            desc: 'BTS (방탄소년단) • Dynamite (NightTime Version)',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/600x600bb.jpg',
                        },
                        {
                            id: 107,
                            type: 'music',
                            title: 'Black Mamba',
                            desc: 'æspa • Black Mamba',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/blackmamba.jpg',
                            rankChange: 3
                        },
                        {
                            id: 108,
                            type: 'music',
                            title: 'Lovesick Girls',
                            desc: 'BLACKPINK • THE ALBUM',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/lovesickgirls.jpg',
                            rankChange: -2
                        },
                        {
                            id: 109,
                            type: 'music',
                            title: '테스형!',
                            desc: '나훈아 • 아홉 이야기',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/ninestory.jpg',
                        },
                        {
                            id: 110,
                            type: 'music',
                            title: 'I CAN\'T STOP ME',
                            desc: 'TWICE • Eyes wide open',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/icantstopme.jpg',
                            rankChange: -2
                        },
                        {
                            id: 111,
                            type: 'music',
                            title: 'HERO',
                            desc: '임영웅 • HERO',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/hero.jpg',
                        },
                        {
                            id: 112,
                            type: 'music',
                            title: 'VVS(피처링: JUSTHIS)',
                            desc: 'Miranni, Munchman, KI • Show Me the Money',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/ShowMetheMoney9Episode1.jpg',
                        },
                        {
                            id: 113,
                            type: 'music',
                            title: 'AYA',
                            desc: '마마무(MAMAMOO) • TRAVEL',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/aya.jpg',
                        },
                        {
                            id: 114,
                            type: 'music',
                            title: 'Blue & Grey',
                            desc: 'BTS • BE',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/BTS_BE.jpg',
                            rankChange: 1
                        },
                        {
                            id: 115,
                            type: 'music',
                            title: 'MAGO',
                            desc: '여자친구 (GFRIEND) • 回:Walpurgis Night',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/walpurgisnight.jpg',
                        },
                        {
                            id: 116,
                            type: 'music',
                            title: '잠이 오질 않네요',
                            desc: '장범준 • 잠이 오질 않네요',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/neversleep.jpg',
                        },
                        {
                            id: 117,
                            type: 'music',
                            title: 'Fly To My Room',
                            desc: 'BTS • BE',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/BTS_BE.jpg',
                        },
                        {
                            id: 118,
                            type: 'music',
                            title: 'When We Disco',
                            desc: '박진영 및 선미 (SUNMI) • When We Disco',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/whenwedisco.jpg',
                            rankChange: -1
                        },
                        {
                            id: 119,
                            type: 'music',
                            title: '취기를 빌려 (취향저격 그녀 X 산들)',
                            desc: '산들 • 취기를 빌려 (취향저격 그녀 X 산들)',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/취기를빌려.jpg',
                        },
                        {
                            id: 120,
                            type: 'music',
                            title: 'How You Like That',
                            desc: 'BLACKPINK • How You Like That',
                            playtime: 144,
                            thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/howyoulikethat.jpg',
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        contentListTop () {
            let result = []
            result = result.concat(...this.tableList.slice(0, 2))
            return result
        },
        contentListMiddle () {
            let result = []
            result = result.concat(...this.tableList.slice(2, this.tableList.length))
            return result
        }
    }
}
</script>