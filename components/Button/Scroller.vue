<template>
    <button
        :class="{ 'btn-prev': direction === 'prev', 'btn-next': direction === 'next' }"
        class="btn-scroller"
    >
        <fa-icon :icon="['fas', direction === 'next' ? 'angle-right' : 'angle-left']"></fa-icon>
    </button>
</template>

<style lang="scss" scoped>
.btn-scroller {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    
    width: 40px;
    height: 40px;

    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.4) 0px 2px 4px -1px;

    border-radius: 50%;

    font-size: 24px;

    cursor: pointer;
}
</style>

<script>
export default {
    props: {
        direction: {
            type: String,
            default () {
                return 'next'
            }
        }
    }
}
</script>