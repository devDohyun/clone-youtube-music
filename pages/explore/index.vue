<template>
    <div id="page-explore">
        <div class="page-container">
            <div class="category-wrapper">
                <div class="category-item">
                    <fa-icon :icon="['fas', 'record-vinyl']"></fa-icon>
                    새 앨범
                </div>
                <div class="category-item">
                    <fa-icon :icon="['fas', 'chart-line']"></fa-icon>
                    차트
                </div>
                <div class="category-item">
                    <fa-icon :icon="['fas', 'laugh']"></fa-icon>
                    분위기 및 장르
                </div>
            </div>
            <div class="content-item">
                <music-table
                    title="새 앨범 및 싱글"
                    :items="newItems"
                ></music-table>
            </div>
            <div class="content-item">
                <music-table
                    title="인기곡"
                    :items="hitItems"
                    direction="cloumn"
                    show-rank
                ></music-table>
            </div>
            <div class="content-item">
                <label-table
                    title="분위기 및 장르"
                    :items="labels"
                ></label-table>
            </div>
            <div class="content-item">
                <music-table
                    title="인기"
                    :items="rankItems"
                    direction="cloumn"
                ></music-table>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #page-explore {
        .category-wrapper {
            display: flex;

            width: 100%;

            align-items: center;
            justify-content: space-between;

            @media (max-width: $media_sd) {
                flex-direction: column;
            }

            .category-item {
                width: calc(33% - 15px);
                
                padding: 15px 20px;
                
                text-align: left;
                font-size: 20px;
                font-weight: 600;
                
                background-color: $color_gray2;

                border-radius: 5px;

                transition-property: background-color;
                transition-duration: 0.1s;

                cursor: pointer;

                @media (max-width: $media_sd) {
                    width: 100%;
                    margin-bottom: 15px;
                }
                
                &:hover { 
                    background-color: $color_gray1;
                }

                svg {
                    margin-right: 5px;
                }
            }
        }

        .content-item {
            margin-top: 75px;
        }
    }
</style>
<script>
import LabelTable from '@/components/LabelTable'
import MusicTable from '@/components/MusicTable'

export default {
    head: () => ({
        title: '둘러보기'
    }),
    components: {
        MusicTable,
        LabelTable
    },
    data () {
        return {
            newItems: [
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
            ],
            hitItems: [
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
                },
            ],
            labels: [
                {
                    id: 101,
                    title: 'R&B & 소울',
                    color: '#3E7BDB'
                },
                {
                    id: 102,
                    title: '2010년대',
                    color: '#A4FFA4'
                },
                {
                    id: 103,
                    title: '힙합',
                    color: 'rgb(226, 75, 0)'
                },
                {
                    id: 104,
                    title: '계절 & 테마',
                    color: 'rgb(255, 231, 128)'
                },
                {
                    id: 105,
                    title: '편안한 분위기',
                    color: 'rgb(164, 197, 255)'
                },
                {
                    id: 106,
                    title: '팝',
                    color: 'rgb(255, 120, 255)'
                },
                {
                    id: 107,
                    title: '국내 발라드',
                    color: 'rgb(164, 197, 255)'
                },
                {
                    id: 108,
                    title: 'OST & 뮤지컬',
                    color: 'rgb(77, 238, 255)'
                },
                {
                    id: 109,
                    title: '잠잘 때',
                    color: 'rgb(123, 62, 219)'
                },
                {
                    id: 110,
                    title: '힘이 필요할 때',
                    color: 'rgb(255, 231, 128)'
                },
                {
                    id: 111,
                    title: '국내 댄스',
                    color: 'rgb(0, 146, 191)'
                },
                {
                    id: 112,
                    title: '사랑 노래',
                    color: 'rgb(204, 0, 0)'
                },
                {
                    id: 113,
                    title: '라틴',
                    color: 'rgb(255, 194, 0)'
                },
                {
                    id: 114,
                    title: '메탈',
                    color: 'rgb(140, 140, 140)'
                },
                {
                    id: 115,
                    title: '키즈 & 가족',
                    color: 'rgb(164, 197, 255)'
                },
                {
                    id: 116,
                    title: '재즈',
                    color: 'rgb(0, 146, 191)'
                },
                {
                    id: 117,
                    title: '출퇴근 & 등하교',
                    color: 'rgb(255, 194, 0)'
                },
                {
                    id: 118,
                    title: '올드스쿨 & 전통음악',
                    color: 'rgb(0, 165, 19)'
                },
                {
                    id: 119,
                    title: '인디 & 얼터너티브',
                    color: 'rgb(204, 204, 204)'
                },
                {
                    id: 120,
                    title: '클래식',
                    color: 'rgb(204, 204, 204)'
                },
                {
                    id: 121,
                    title: '아시아',
                    color: 'rgb(204, 0, 0)'
                },
                {
                    id: 122,
                    title: '트로트',
                    color: 'rgb(164, 255, 164)'
                },
                {
                    id: 123,
                    title: '컨트리 & 아메리카나',
                    color: 'rgb(51, 125, 255)'
                },
                {
                    id: 124,
                    title: '아프리카',
                    color: 'rgb(0, 165, 19)'
                },
            ]
        }
    },
    computed: {
        rankItems () {
            return [...this.hitItems].sort(() => Math.random() - 0.5)
        }
    }
}
</script>