<template>
    <div class="label-table">
        <ButtonScroller v-show="showPrevButton" @click.native="handleScrollerClick('prev')" direction="prev"/>
        <ButtonScroller v-show="showNextButton" @click.native="handleScrollerClick('next')" direction="next"/>
        <div @scroll="handleTableItemsScroll" ref="tableItems" class="table-items">
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
        position: relative;


        &:not(:last-child) {
            margin-bottom: 125px;
        }

        .table-items {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            height: ($label_height + $label_margin) * 4 - $label_margin;
            
            white-space: nowrap;
            overflow-x: hidden;

            scroll-behavior: smooth;

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

        &::v-deep .btn-scroller {
            z-index: 5;

            position: absolute;
            top: 50%;
            transform: translateY(-50%);

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
import ButtonScroller from '@/components/Button/Scroller'

export default {
    components: {
        ButtonScroller
    },
    props: {
        items: {
            required: true,
            type: Array
        }
    },
    data () {
        return {
            tableItems: this.items,
            showPrevButton: false,
            showNextButton: false,
        }
    },
    methods: {
        handleTableItemsScroll () {
            const element = this.$refs.tableItems
            const currentScroll = element.scrollLeft
            const offset = element.clientWidth

            this.showPrevButton = currentScroll > 300
            this.showNextButton = element.scrollWidth > (currentScroll + offset)
        },
        handleScrollerClick (dir = 'next') {
            const element = this.$refs.tableItems
            const currentScroll = element.scrollLeft
            const amount = 500
            let target = currentScroll + amount

            if (dir === 'prev') target = currentScroll - amount

            element.scrollTo(target, 0)
        }
    },
    mounted () {
        this.handleTableItemsScroll()
    },
    updated () {
        this.handleTableItemsScroll()
    }
}
</script>