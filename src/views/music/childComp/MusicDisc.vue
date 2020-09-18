<template>
  <div class="music-disc">
    <div class="disc">
      <img src="../../../assets/img/music/disc.png" alt="" class="disc-img">
      <img :src="$store.state.nowPlayingMusic.picUrl" alt=""class="music-img" :class="{'active':$store.state.nowPlayingMusic.isPlaying}">
    </div>
  </div>
</template>

<script>
  export default {
    name: "MusicDisc"
  }
</script>

<style scoped>
  .disc {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
  }

  .disc-img {
    position: absolute;
    height: 300px;
    transform: translate(-17%, -15%);
  }

  .music-img {
    height: 200px;
    width: 200px;
    border-radius: 100px;
  }

  @keyframes changDeg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .active {
    animation:changDeg 10s linear 0.2s infinite;
  }
</style>
