<template>
    <div id="menu-child-albums">
        <div class="no-item">
            <div class="icon">
                <fa-icon :icon="['fas', 'record-vinyl']"></fa-icon>
            </div>
            <div class="text-help">
                <div class="text-title">아직 앨범 없음</div>
                보관함에 추가한 앨범이 여기에 표시됩니다.
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #menu-child-albums {
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