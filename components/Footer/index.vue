<template>
  <div id="footer">
    <transition name="player">
      <footer-player v-if="showFooter" @toggle-pannel-show="togglePannel" :is-pannel-shown="showPannel"></footer-player>
    </transition>
    <transition name="pannel">
      <footer-pannel v-if="showFooter && showPannel"></footer-pannel>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
.player-enter-active,
.player-leave-active {
  transition: transform 0.3s;
}
.player-enter,
.player-leave-active {
  transform: translateY(100%);
}
.pannel-enter-active,
.pannel-leave-active {
  transition: transform 0.3s;
}
.pannel-enter,
.pannel-leave-active {
  transform: translateY(100%);
}
</style>
<script>
import FooterPlayer from '~/components/Footer/Player'
import FooterPannel from '~/components/Footer/Pannel'

import { mapGetters } from 'vuex'

export default {
  components: {
    FooterPlayer,
    FooterPannel,
  },
  data: () => ({
    showPannel: false,
  }),
  computed: {
    ...mapGetters({
      currentMusic: 'player/getCurrentMusic',
    }),
    showFooter() {
      let result = false

      if (typeof this.currentMusic !== 'undefined') result = true

      return result
    },
  },
  methods: {
    togglePannel() {
      const target = !this.showPannel
      this.showPannel = target
    },
  },
}
</script>
