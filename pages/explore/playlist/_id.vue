<template>
  <div id="page-explore-mix-id">
    <div class="page-container">
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
                <button type="button"><fa-icon :icon="['fas', 'random']" /> 셔플</button>
                <button type="button"><fa-icon :icon="['fas', 'plus-square']" /> 보관함에 추가</button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
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
    .mix-wrapper {
      position: relative;

      display: flex;
      align-items: center;

      @media (max-width: $media_md) {
        padding-bottom: 75px;
      }

      .mix-thumb {
        flex-shrink: 0;

        width: 33%;
        max-width: 240px;

        margin-right: 50px;

        background-color: $color_gray9;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        border-radius: 5px;

        @media (max-width: $media_md) {
          width: 150px;

          margin-right: 15px;
        }

        &::after {
          content: ' ';
          display: block;
          padding-bottom: 100%;
        }
      }
      .mix-info {
        flex-grow: 1;

        .mix-title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;

          margin-bottom: 20px;

          font-size: 28px;
          font-weight: 700;

          overflow: hidden;
          text-overflow: ellipsis;

          @media (max-width: $media_md) {
            font-size: 24px;
          }
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
            left: 0;
            bottom: 0;
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
}
</style>
<script>
import Spinner from '@/components/Spinner'

export default {
  head() {
    return {
      title: '믹스',
    }
  },
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
