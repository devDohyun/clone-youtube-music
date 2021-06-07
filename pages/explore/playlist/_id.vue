<template>
  <div id="page-explore-mix-id">
    <template v-if="error">
      <div class="pannel">
        {{ error.message }}
      </div>
    </template>
    <template v-else-if="loading">
      <div class="pannel">
        <Spinner />
      </div>
    </template>
    <template v-else>
      <div class="pannel-mix">
        <div class="mix-wrapper">
          <div class="mix-thumb" :style="{ 'background-image': `url(${item.thumb})` }"></div>
          <div class="mix-info">
            <div class="mix-title">{{ item.title }}</div>
            <div class="mix-desc">{{ item.desc }}</div>
            <div class="mix-summary">{{ item.summary }}</div>
            <div class="mix-actions">
              <button type="button">셔플</button>
              <button type="button">보관함에 추가</button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<style lang="scss" scoped>
#page-explore-mix-id {
  .pannel {
    display: flex;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
  }
  .pannel-mix {
    $pannel_left_padding: 50px;

    position: relative;
    padding: 100px $pannel_left_padding 50px 50px;

    font-size: 0;

    @media (max-width: $media_md) {
      padding-bottom: 100px;
    }

    .mix-thumb {
      vertical-align: middle;

      display: inline-block;

      width: 33%;
      max-width: 240px;

      margin-right: 50px;

      background-color: $color_gray9;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      border-radius: 5px;

      &::after {
        content: ' ';
        display: block;
        padding-bottom: 100%;
      }
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
      .mix-desc,
      .mix-summary {
        font-size: 14px;
        color: $color_gray9;
      }
      .mix-actions {
        margin-top: 50px;

        @media (max-width: $media_md) {
          position: absolute;
          left: $pannel_left_padding;
          bottom: $pannel_left_padding / 2;
        }

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
}
</style>
<script>
import Spinner from '@/components/Spinner'

export default {
  components: { Spinner },
  data() {
    return {
      loading: true,
      error: false,
      id: parseInt(this.$route.params.id),
      item: null,
    }
  },
  methods: {
    getMixInfo(id) {
      const found = this.$store.state.api.mix.find((item) => item.id === id)

      return found
    },
  },
  mounted() {
    this.loading = true
    const found = this.getMixInfo(this.id)

    if (found) this.item = { ...found }
    else this.error = { message: '믹스를 찾을 수 없습니다.' }

    this.loading = false
  },
}
</script>
