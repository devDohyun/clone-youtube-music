<template>
  <div class="spinner"></div>
</template>

<style lang="scss" scoped>
.spinner {
  display: block;
  width: 80px;
  height: 80px;

  &::after {
    content: ' ';
    display: block;

    width: 64px;
    height: 64px;

    margin: 8px;

    border-radius: 50%;
    border: 6px solid $color_gray9;
    border-color: $color_gray9 transparent transparent transparent;

    animation: loading 2.5s infinite;

    transition-duration: 1.5s;
    transition-timing-function: ease-in-out;

    @keyframes loading {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(720deg);
      }
      100% {
        transform: rotate(1080deg);
      }
    }
  }
}
</style>
