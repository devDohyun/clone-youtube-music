<template>
    <div class="music-table">
        <button v-show="showPrevButton" @click="handleScrollerClick('prev')" class="btn-scroller btn-prev"><fa-icon :icon="['fas', 'angle-left']"></fa-icon></button>
        <button v-show="showNextButton" @click="handleScrollerClick('next')" class="btn-scroller btn-next"><fa-icon :icon="['fas', 'angle-right']"></fa-icon></button>
        <template v-if="direction === 'row'">
            <div @scroll="handleTableItemsScroll" ref="tableItems" class="table-items">
                <template v-for="(item, iIdx) in items">
                    <album-item
                        :key="iIdx"
                        :id="item.id"
                        :type="item.type"
                        :title="item.title"
                        :desc="item.desc"
                        :playtime="item.playtime"
                        :thumb="item.thumb"
                    ></album-item>
                </template>
            </div>
        </template>
        <template v-else-if="direction === 'cloumn'">
            <div @scroll="handleTableItemsScroll" ref="tableItems" class="table-items table-column">
                <template v-for="(item, iIdx) in items">
                    <div :key="iIdx" class="music-item">
                        <div :style="{'background-image': `url(${item.thumb})`}" class="music-thumb"></div>
                        <div class="music-meta">
                            <div class="music-idx">{{ iIdx + 1 }}</div>
                        </div>
                        
                        <div class="music-text">
                            <div class="music-title">{{  item.title }}</div>
                            <div class="music-desc">{{ item.desc }}</div>
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped>
    .music-table {
        position: relative;
        
        margin-top: 25px;
        margin-bottom: 125px;

        @media (max-width: $media_md) {
            margin-top: 20px;
            margin-bottom: 100px;
        }
        @media (max-width: $media_sd) {
            margin-top: 15px;
            margin-bottom: 75px;
        }
        
        .table-items {
            margin: 0 -10px;
            padding-bottom: 15px;

            white-space: nowrap;
            overflow-x: hidden;

            scroll-behavior: smooth;

            @media (max-width: $media_sd) {
                overflow-x: scroll;
            }

            &.table-column {
                $music_column_height: 48px;
                $music_column_margin: 16px;
                
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;

                height: ($music_column_height + $music_column_margin) * 4 + 40px;

                margin: unset;
                
                .music-item {
                    display: flex;
                    align-items: center;

                    width: 420px;
                    height: $music_column_height;

                    margin-bottom: $music_column_margin;
                    margin-right: $music_column_margin;

                    .music-thumb { 
                        width: 48px;
                        height: 48px;

                        flex-grow: 0;
                        flex-shrink: 0;

                        margin-right: 4px;

                        border-radius: 3px;

                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    }

                    .music-meta {
                        display: flex;

                        flex-grow: 0;
                        flex-shrink: 0;

                        justify-content: space-around;
                        
                        width: 75px;

                        font-size: 14px;
                    }

                    .music-text {
                        flex: 1;
                        flex-wrap: wrap;
                        overflow: hidden;

                        .music-title, .music-desc {
                            max-width: 100%;
                            word-wrap: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }
                        
                        
                        .music-title {
                            margin-bottom: 3.5px;

                            font-size: 14px;

                            word-break: keep-all;
                            white-space: normal;
                            cursor: pointer;
                        }
                        .music-desc {
                            font-size: 14px;

                            color: $color_gray9;
                        }
                    }
                }
            }

        }

        .btn-scroller {
            z-index: 5;
            
            position: absolute;
            top: $ui_album_item_height / 2;
            transform: translateY(-50%);

            display: flex;
            justify-content: center;
            align-items: center;
            
            width: 40px;
            height: 40px;

            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.4) 0px 2px 4px -1px;

            border-radius: 50%;

            font-size: 24px;

            cursor: pointer;

            @media (max-width: $media_ld) {
                top: $ui_album_item_height_ld / 2;
            }
            @media (max-width: $media_sd) {
                display: none;
            }

            &.btn-prev {
                left: calc(-10px + -20px);
            }
            &.btn-next {
                right: calc(-10px + -20px);
            }
        }
    }
</style>

<script>
import AlbumItem from '@/components/Album/Item'

export default {
    components: {
        AlbumItem
    },
    props: {
        items: {
            required: true,
            type: Array
        },
        direction: {
            type: String,
            default: () => 'row'
        }
    },
    data () {
        return {
            showPrevButton: false,
            showNextButton: false,
        }
    },
    methods: {
        handleTableItemsScroll () {
            const element = this.$refs.tableItems
            const currentScroll = this.direction === 'row' ? element.scrollLeft : element.scrollTop

            this.showPrevButton = currentScroll > 300
            this.showNextButton = element.scrollWidth > (currentScroll + element.clientWidth)
        },
        handleScrollerClick (dir = 'next') {
            const element = this.$refs.tableItems
            const currentScroll = this.direction === 'row' ? element.scrollLeft : element.scrollTop
            const amount = 500
            let target = currentScroll + amount

            if (dir === 'prev') target = currentScroll - amount

            if (this.direction === 'row') element.scrollTo(target, 0)
            else element.scrollTo(0, target)
        }
    },
    mounted () {
        this.handleTableItemsScroll()
    }
}
</script>