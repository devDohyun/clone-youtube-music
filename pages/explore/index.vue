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
            <section>
                <div class="section-title">새 앨범 및 싱글</div>
                <music-table :items="newItems"></music-table>
            </section>
            <section>
                <div class="section-title">인기곡</div>
                <music-table
                    :items="hitItems"
                    direction="cloumn"
                    show-rank
                ></music-table>
            </section>
            <section>
                <div class="section-title">분위기 및 장르</div>
                <label-table
                    :items="labels"
                ></label-table>
            </section>
            <section>
                <div class="section-title">인기</div>
                <music-table
                    :items="rankItems"
                    direction="cloumn"
                ></music-table>
            </section>
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

        section {
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
            newItems: [],
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
            ],
            hitItems: []
        }
    },
    computed: {
        rankItems () {
            return [...this.hitItems].sort(() => Math.random() - 0.5)
        }
    },
    async mounted () {
        window.scrollTo(0, 0)
        
        this.newItems = this.$store.getters['api/getNewSongs']
        this.hitItems = this.$store.getters['api/getHitSongs']
    }
}
</script>