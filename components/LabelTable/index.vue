<template>
    <div class="label-table">
        <div class="table-subtitle">{{ tableSubitle }}</div>
        <div class="table-title">{{ tableTitle }}</div>
        <div class="table-items">
            <div
                v-for="item in tableItems"
                :key="item.id"
                class="label-item"
            >
                <div :style="{ 'background-color': item.color }" class="color-side"></div>
                <div class="text">{{ item.title }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $label_height: 48px;
    $label_margin_bottom: 10px;

    .label-table {
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
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: flex-start;

            height: ($label_height + $label_margin_bottom) * 4 - $label_margin_bottom;
            
            white-space: nowrap;
            overflow-x: auto;

            .label-item {
                width: 180px;
                height: $label_height;

                background-color: $color_gray2;

                font-size: 14px;
            }
        }
    }
</style>

<script>
export default {
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