<template>
    <div class="music-table">
        <div class="table-subtitle">{{ tableSubitle }}</div>
        <div class="table-title">{{ tableTitle }}</div>
        <div class="table-items">
            <template v-for="(item, iIdx) in tableItems">
                <album-item
                    :key="iIdx"
                    :title="item.title"
                    :desc="item.desc"
                ></album-item>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .music-table {
        .table-title {
            margin-bottom: 35px;
            
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 0.35px;
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