<template>
    <div id="layout-error">
        페이지를 찾을 수 없습니다.
    </div>
</template>

<style lang="scss" scoped>
    #layout-error {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100vh;
    }
</style>

<script>
export default {
    head () {
        return {
            title: '오류'
        }
    }
}
</script>