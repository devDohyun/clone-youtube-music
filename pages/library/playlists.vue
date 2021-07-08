<template>
  <div id="menu-child-playlists">
    <div class="playlist-wrapper">
      <div class="item-add-new"></div>
      <album-item :id="900" type="mix" title="좋아요 표시한 동영상" :playtime="100" :thumb="'https://kr.object.ncloudstorage.com/dev-dohyun/clone-youtube-music/images/album/likedposter.jpg'"></album-item>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#menu-child-playlists {
  padding-top: 50px;

  .playlist-wrapper {
    .item-add-new {
      // https://kr.object.ncloudstorage.com/dev-dohyun/clone-youtube-music/images/album/createnew.png
    }
  }
}
</style>

<script>
import AlbumItem from '@/components/Album/Item'

export default {
  components: {
    AlbumItem,
  },
}
</script>
