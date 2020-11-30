<template>
    <div class="music-table">
        <div class="table-subtitle">{{ tableSubitle }}</div>
        <div class="table-title">{{ tableTitle }}</div>
        <div v-if="direction === 'row'" class="table-items">
            <template v-for="(item, iIdx) in tableItems">
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
            <template v-for="(item, iIdx) in tableItems">
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
        &:not(:last-child) {
            margin-bottom: 125px;
        }

        .table-title {
            margin-bottom: 50px;
            
            font-size: 38px;
            font-weight: 700;
            letter-spacing: 0.35px;

            @media (max-width: $media_md) {
                margin-bottom: 25px;
                font-size: 24px;
            }
        }

        .table-items {
            white-space: nowrap;
            overflow-x: auto;

            .table-column {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
            }

            .music-item {
                display: flex;
                align-items: center;

                width: 420px;

                .music-thumb { 
                    width: 48px;
                    height: 48px;

                    margin-right: 4px;

                    border-radius: 3px;

                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                }

                .music-meta {
                    display: flex;

                    justify-content: space-around;
                    
                    width: 75px;

                    font-size: 14px;
                }

                .music-text {
                    flex: 1;
                    flex-wrap: wrap;
                    
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
</style>

<script>
import AlbumItem from '@/components/Album/Item'

export default {
    components: {
        AlbumItem
    },
    props: {
        subtitle: {
            type: String
        },
        title: {
            required: true,
            type: String
        },
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
            tableSubitle: this.subtitle,
            tableTitle: this.title,
            tableItems: this.items,
        }
    },
}
</script>