<template>
  <div id="page-index">
    <div class="page-container">
      <template v-for="(content, contentIdx) in contentListTop">
        <template v-if="content.type === 'table'">
          <section :key="`${contentIdx}${content.title}`">
            <div class="section-title">{{ content.title }}</div>
            <music-table :items="content.items"></music-table>
          </section>
        </template>
      </template>
      <div class="announce-set-favorite" v-if="false">
        <div class="artist-wrapper">
          <div v-for="(item, idx) in 5" :key="idx" class="artist-item"></div>
        </div>
        <div class="text-content">
          <div class="text-title">좋아하는 아티스트를 알려주세요.</div>
          <div class="text-desc">나만을 위한 맞춤 서비스가 제공됩니다.</div>
          <div class="actions">
            <button type="button">시작하기</button>
          </div>
        </div>
      </div>
      <template v-for="(content, contentIdx) in contentListMiddle">
        <template v-if="content.type === 'table'">
          <section :key="`${contentIdx}${content.title}`">
            <div class="section-title">{{ content.title }}</div>
            <div class="section-title"></div>
            <music-table :items="content.items"></music-table>
          </section>
        </template>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.announce-set-favorite {
  font-size: 0;

  .artist-wrapper {
    display: inline-block;
    width: calc(100% - 400px);

    @media (max-width: $media_sd) {
      display: block;
      width: 100%;
    }
  }
  .text-content {
    display: inline-block;
    width: 400px;

    @media (max-width: $media_sd) {
      display: block;
      width: 100%;
      text-align: center;
    }
    .text-title {
      font-size: 24px;
    }
    .text-desc {
      font-size: 14px;
      color: $color_gray9;
    }
    .actions {
      margin-top: 50px;

      @media (max-width: $media_sd) {
        margin-top: 25px;
      }
    }
  }
}
</style>

<script>
import MusicTable from '@/components/MusicTable'

export default {
  head() {
    return {
      title: '메인',
    }
  },
  components: {
    MusicTable,
  },
  data() {
    return {
      tableList: [
        {
          type: 'table',
          title: '즐겨 듣는 음악',
          items: this.$store.getters['api/getSongsById']([0, 1, 2, 108]),
        },
        {
          type: 'table',
          title: '맞춤 믹스',
          items: this.$store.getters['api/getAllMixes'],
        },
        {
          type: 'table',
          title: '실시간 인기곡',
          items: this.$store.getters['api/getHitSongs'],
        },
      ],
    }
  },
  computed: {
    contentListTop() {
      let result = []
      result = result.concat(...this.tableList.slice(0, 2))
      return result
    },
    contentListMiddle() {
      let result = []
      result = result.concat(...this.tableList.slice(2, this.tableList.length))
      return result
    },
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>
