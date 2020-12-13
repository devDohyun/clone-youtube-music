<template>
    <div id="page-search">
        <div class="page-container">
            <div class="section-subtitle">노래</div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
    .page-container {
        max-width: 720px;
    }
</style>
<script>
export default {
    data () {
        return {
            query: this.$route.query.q
        }
    }
}
</script>