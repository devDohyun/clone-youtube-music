<template>
    <div class="music-table">
        <div v-if="direction === 'row'" class="table-items">
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
        <div v-if="direction === 'cloumn'" class="table-items table-column">
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
    </div>
</template>

<style lang="scss" scoped>
    .music-table {
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
            overflow-x: auto;

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

                            color: $color_gray5;
                        }
                    }
                }
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
}
</script>