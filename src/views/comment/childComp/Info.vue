<template>
  <div class="info">
    <img :src="$store.state.nowPlayingMusic.picUrl" alt="">
    <div>{{$store.state.nowPlayingMusic.name}}</div>
  </div>
</template>

<script>
  export default {
    name: "Info"
  }
</script>

<style scoped>
  .info {
    display: flex;
    width: 100%;
    border-bottom: 5px solid #eee;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    margin: 15px;
  }

  .info div {
    color: #000;
    font-size: 19px;
    padding-top: 50px;
  }
</style>
