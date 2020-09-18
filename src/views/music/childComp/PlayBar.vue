<template>
  <div class="play-bar">
    <img src="../../../assets/img/music/looplist.png" alt="" class="icon">
    <img src="../../../assets/img/music/before.png" alt="" class="icon" @click="playBefore">
    <img src="../../../assets/img/music/play.png" alt="" class="main-icon" v-show="!$store.state.nowPlayingMusic.isPlaying" @click="playMusic">
    <img src="../../../assets/img/music/pause.png" alt="" class="main-icon" v-show="$store.state.nowPlayingMusic.isPlaying" @click="pauseMusic">
    <img src="../../../assets/img/music/after.png" alt="" class="icon" @click="playNext">
    <img src="../../../assets/img/music/playlist.png" alt="" class="icon" @click="showPlayCard">
  </div>
</template>

<script>
  export default {
    name: "PlayBar",
    methods: {
      playMusic() {
        this.$store.commit('play')
        this.$bus.$emit('playmusic')
      },
      pauseMusic() {
        this.$store.commit('pause')
        this.$bus.$emit('pausemusic')
      },
      showPlayCard() {
        this.$emit('showplaycard')
      },
      playNext() {
        this.$store.commit('playNextMusic')
      },
      playBefore() {
        this.$store.commit('playBeforeMusic')
      }
    }
  }
</script>

<style scoped>
  .play-bar {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 30px;
  }

  .main-icon {
    height: 80px;
    width: 80px;
  }

  .icon {
    height: 50px;
    width: 50px;
    margin: 10px;
  }
</style>
