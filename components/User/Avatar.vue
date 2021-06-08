<template>
  <div class="avatar">
    {{ nicknameShow }}
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 27.5px;
  height: 27.5px;

  background-color: rgb(0, 127, 63);

  outline: none;
  border: none;
  border-radius: 50%;

  color: white;
  font-weight: 500;

  cursor: pointer;
}
</style>

<script>
export default {
  props: {
    nickname: {
      type: String,
      default() {
        return '회원'
      },
    },
  },
  computed: {
    nicknameShow() {
      return this.nickname.slice(0, 1)
    },
  },
}
</script>
