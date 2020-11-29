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
                ></music-table>
            </div>
            <div class="content-item">
                <label-table
                    title="분위기 및 장르"
                    :items="labels"
                ></label-table>
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

                @media (max-width: $media_sd) {
                    width: 100%;
                    margin-bottom: 15px;
                }
                
                &:hover { 
                    background-color: $color_gray1;
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
                    desc: '노래•장범준',
                    playtime: 168,
                    thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/흔들리는-꽃들-속에서-네-샴푸향이-느껴진거야.jpg'
                },
                {
                    id: 1,
                    type: 'music',
                    title: '스토커',
                    desc: '노래•10cm(십센치)',
                    playtime: 255,
                    thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/스토커.jpg'
                },
                {
                    id: 2,
                    type: 'music',
                    title: '길',
                    desc: '노래•버스커버스커',
                    playtime: 207,
                    thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/684015_1_f.jpg'
                },
            ],
            hitItems: [
                {
                    id: 105,
                    type: 'music',
                    title: 'Dynamite',
                    desc: 'BTS (방탄소년단)•Dynamite (NightTime Version)',
                    playtime: 1000,
                    thumb: 'https://picsum.photos/id/312/200/200'
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
            ]
        }
    }
}
</script>