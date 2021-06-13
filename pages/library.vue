<template>
  <div id="page-library-playlists">
    <div class="page-container">
      <section>
        <div class="section-subtitle">최근 활동</div>
        <music-table :items="itemsRecent"></music-table>
      </section>
      <section>
        <div class="menu-wrapper">
          <nuxt-link to="/library/playlists" class="menu-item" tag="div">재생목록</nuxt-link>
          <nuxt-link to="/library/albums" class="menu-item" tag="div">앨범</nuxt-link>
          <nuxt-link to="/library/songs" class="menu-item" tag="div">노래</nuxt-link>
          <nuxt-link to="/library/artists" class="menu-item" tag="div">아티스트</nuxt-link>
          <nuxt-link to="/library/subscriptions" class="menu-item" tag="div">구독</nuxt-link>
        </div>
        <div class="menu-child">
          <nuxt-child></nuxt-child>
        </div>
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#page-library-playlists {
  .menu-wrapper {
    $menu_item_margin_x: 16px;

    width: 100%;

    margin: 0 ($menu_item_margin_x * -1);

    white-space: nowrap;
    overflow-x: auto;

    .menu-item {
      display: inline-block;

      margin: 0 $menu_item_margin_x;
      padding: 16px 0;

      color: $color_gray9;
      font-size: 14px;

      cursor: pointer;

      &.nuxt-link-exact-active {
        color: white;
        border-bottom: 2px solid white;
      }
    }
  }
  .menu-child {
    border-top: 1px solid $color_gray2;
  }
}
</style>
<script>
import MusicTable from '@/components/MusicTable'

export default {
  middleware({ route, redirect }) {
    if (route.fullPath === '/library') return redirect(`/library/playlists`)
  },
  components: {
    MusicTable,
  },
  data() {
    return {
      itemsRecent: [
        {
          id: 210,
          type: 'music',
          title: '혼술하고 싶은 밤',
          desc: 'EP • 벤',
          playtime: 144,
          thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/alcohol.jpg',
        },
        {
          id: 220,
          type: 'music',
          title: 'Perfect',
          desc: '노래 • 10cm(십센치)',
          playtime: 144,
          thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/Love%20Playlist3-1.jpg',
        },
        {
          id: 0,
          type: 'music',
          title: '흔들리는 꽃들 속에서 네 샴푸향이 느껴진거야',
          desc: '노래 • 장범준',
          playtime: 168,
          thumb: 'https://storage.googleapis.com/clone-youtube-music/images/album/흔들리는-꽃들-속에서-네-샴푸향이-느껴진거야.jpg',
        },
      ],
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>
