<template>
    <div id="menu-child-subscriptions">
        <div class="no-item">
            <div class="icon">
                <fa-icon :icon="['fab', 'youtube']"></fa-icon>
            </div>
            <div class="text-help">
                <div class="text-title">아직 구독 채널 없음</div>
                구독한 채널이 여기에 표시됩니다.
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #menu-child-subscriptions {
        padding-top: 50px;

        .no-item {
            text-align: center;
            color: $color_gray4;

            .icon {
                margin-bottom: 12px;

                font-size: 96px;
            }

            .text-help {
                font-size: 14px;

                .text-title {
                    margin-bottom: 7.5px;
                    font-size: 20px;
                }
            }
        }
    }
</style>