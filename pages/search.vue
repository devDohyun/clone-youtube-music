<template>
  <div id="page-search">
    <div class="page-container">
      <template v-if="isResultExist === false">
        <div class="no-item">
          <div class="icon">
            <fa-icon :icon="['fas', 'search']"></fa-icon>
          </div>
          <div class="text-help">
            <div class="text-title">검색결과가 없습니다.</div>
            다른 검색어를 사용해 보세요.
          </div>
        </div>
      </template>
      <template v-else>
        <section v-if="songsResult.length > 0">
          <div class="section-subtitle">노래</div>
          <div class="section-result">
            <div v-for="(song, sIdx) in songsResult" :key="`${sIdx}${song.title}`" class="result-item">
              <div :style="{ 'background-image': `url(${song.thumb})` }" class="result-thumb"></div>
              <div class="result-text">
                <div @click="playSongInPlaylist(song.id)" class="result-title">{{ song.title }}</div>
                <div class="result-desc">{{ song.desc }} • {{ $common.formTimeString(song.playtime) }}</div>
              </div>
            </div>
          </div>
        </section>
      </template>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.page-container {
  max-width: 720px;
}

#page-search {
  .no-item {
    text-align: center;
    color: $color_gray4;

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

  .section-result {
    .result-item {
      display: flex;
      align-items: center;

      height: 80px;

      .result-thumb {
        width: 56px;
        height: 56px;

        margin-right: 16px;

        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }

      .result-text {
        flex: 1;

        font-size: 14px;

        overflow: hidden;

        .result-title,
        .result-desc {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .result-title {
          margin-bottom: 4px;

          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
        .result-desc {
          color: $color_gray9;
        }
      }
    }
  }
}
</style>
<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: '검색',
    }
  },
  data() {
    return {
      query: this.$route.query.q,
    }
  },
  computed: {
    ...mapGetters({
      getAllsongs: 'api/getAllSongs',
    }),
    songsResult() {
      return this.getAllsongs.filter((x) => x.title.includes(this.query) || x.desc.includes(this.query))
    },
    videosResult() {
      return []
    },
    isResultExist() {
      return !!(this.songsResult.length + this.videosResult.length)
    },
  },
  methods: {
    async playSongInPlaylist(songId) {
      const index = await this.$store.dispatch('player/addItemInPlaylistById', songId)

      this.$store.commit('player/setPlayIndex', index)
      this.$store.dispatch('player/playMusic')
    },
  },
}
</script>
