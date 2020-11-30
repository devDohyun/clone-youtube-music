<template>
    <div class="label-table">
        <div class="table-subtitle">{{ tableSubitle }}</div>
        <div class="table-title">{{ tableTitle }}</div>
        <div class="table-items">
            <div
                v-for="item in tableItems"
                :key="item.id"
                :style="{ 'border-left-color': item.color }"
                class="label-item"
            >
                <div class="text">{{ item.title }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    $label_height: 48px;
    $label_margin: 16px;

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

            height: ($label_height + $label_margin) * 4 + 15px;
            
            white-space: nowrap;
            overflow-x: auto;

            .label-item {
                display: flex;
                align-items: center;
                
                width: 180px;
                height: $label_height;

                margin-bottom: $label_margin;
                margin-right: $label_margin;
                padding: 0 10px;

                font-size: 14px;

                background-color: $color_gray2;

                border-left: 6px solid;
                border-radius: 4px;

                &:nth-of-type(4n) {
                    margin-bottom: 0;
                }
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