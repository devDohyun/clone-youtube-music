<template>
    <div id="menu-child-artists">
        <div class="no-item">
            <div class="icon">
                <fa-icon :icon="['fas', 'microphone']"></fa-icon>
            </div>
            <div class="text-help">
                <div class="text-title">아직 아티스트 없음</div>
                    음악을 추가하면 아티스트가 여기에 표시됩니다.
                </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #menu-child-artists {
        padding-top: 50px;

        .no-item {
            text-align: center;
            color: $color_gray3;

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