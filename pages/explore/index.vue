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
                <category-table></category-table>
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
import CategoryTable from '@/components/CategoryTable'
import MusicTable from '@/components/MusicTable'

export default {
    head: () => ({
        title: '둘러보기'
    }),
    components: {
        MusicTable,
        CategoryTable
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
                    id: 101,
                    type: 'music',
                    title: 'Dynamite',
                    desc: 'BTS (방탄소년단)•Dynamite (NightTime Version)',
                    playtime: 1000,
                    thumb: 'https://picsum.photos/id/312/200/200'
                },
            ]
        }
    }
}
</script>