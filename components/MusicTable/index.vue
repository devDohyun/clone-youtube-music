<template>
    <div class="music-table">
        <div class="table-subtitle">{{ tableSubitle }}</div>
        <div class="table-title">{{ tableTitle }}</div>
        <div class="table-items">
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
        }

        .table-items {
            white-space: nowrap;
            overflow-x: auto;
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

        },
        title: {
            required: true
        },
        items: {
            required: true,
            type: Array
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