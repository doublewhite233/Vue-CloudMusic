<template>
  <div>
    <div class="playlist-card-mask" @click="closeCard"></div>
    <div class="card">
      <div class="title">当前播放
        <span style="font-weight: normal;font-size: 15px;">（{{$store.state.playList.length}}）</span>
      </div>
      <div class="content">
        <div v-for="(item,index) in $store.state.playList">
          <div class="music-item" @click="clickMusic(index)">{{item.name}}</div>
          <img src="../../../assets/img/common/del.png" alt="" class="del-img" @click="delMusic(index)" :key="item.name">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PlayListCard",
    methods: {
      closeCard() {
        this.$emit('closecard')
      },
      delMusic(index) {
        this.$store.dispatch('delMusicFromList',index)
      },
      clickMusic(index) {
        this.$store.commit('setPlayingMusic',index)
      }
    }
  }
</script>

<style scoped>
  .playlist-card-mask {
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
    z-index: 1001;
    position: fixed;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .card {
    background-color: #fff;
    position: absolute;
    width: 80%;
    height: 400px;
    bottom: 20px;
    right: 10%;
    z-index: 1002;
    border-radius: 10px;
  }

  .title {
    color: #000;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 10px;
    margin-bottom: 10px;
  }

  .content {
    height: 330px;
    overflow: hidden;
    overflow-y: scroll;
    position: relative;
  }

  .music-item {
    margin: 15px 10px;
    width: 60%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .del-img {
    width: 10px;
    height: 10px;
    right: 20px;
    margin-top: -35px;
    position: absolute;
  }
</style>
