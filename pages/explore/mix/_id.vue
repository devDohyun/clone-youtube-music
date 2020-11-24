<template>
    <div id="page-explore-mix-id">
        <div class="pannel-mix">
            <div class="mix-wrapper">
                <div class="mix-thumb"></div>
                <div class="mix-info">
                    <div class="mix-title">{{ title }}</div>
                    <div class="mix-desc">{{ desc }}</div>
                    <div class="mix-summary">{{ summary }}</div>
                    <div class="mix-actions">
                        <button type="button">셔플</button>
                        <button type="button">보관함에 추가</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #page-explore-mix-id {
        .pannel-mix {
            padding: 100px 50px 50px 50px;
            
            background-color: $color_gray1;
            
            font-size: 0;

            .mix-thumb {
                vertical-align: middle;

                display: inline-block;
                width: 240px;
                height: 240px;

                margin-right: 50px;

                background-color: $color_gray3;
                border-radius: 5px;
            }
            .mix-info {
                vertical-align: middle;

                display: inline-block;
                width: calc(100% - 290px);

                .mix-title {
                    margin-bottom: 20px;
                    
                    font-size: 28px;
                    font-weight: 700;
                }
                .mix-desc, .mix-summary {
                    font-size: 14px;
                    color: $color_gray3;
                }
            }
            .mix-actions {
                margin-top: 50px;

                button {
                    padding: 7.5px 15px;

                    font-size: 14px;
                    border: 1px solid white;

                    &:not(:last-of-type) {
                        margin-right: 15px;
                    }
                    &:nth-of-type(1) {
                        background-color: white;
                    }
                    &:nth-of-type(2) {
                        color: white;
                    }
                }
            }
        }
    }
</style>
<script>
export default {
    data () {
        return {
            title: '',
            desc: '',
            summary: ''
        }
    },
    methods: {
        getMixInfo () {
            // api logic ...

            return {
                title: '기타치는 꿀성대 인디/어쿠스틱',
                desc: '재생목록 • YouTube Music • 2020',
                summary: '노래 33곡 • 1시간 59분'
            }
        },

        dispatchMixInfo () {
            const result = this.getMixInfo()

            this.title = result.title
            this.desc = result.desc
            this.summary = result.summary
        }
    },
    mounted () {
        this.dispatchMixInfo()
    }
}
</script>