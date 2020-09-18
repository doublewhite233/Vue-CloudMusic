<template>
  <div class="search-list-item">
    <div class="music-title">{{musicInfo.name}}</div>
    <div style="font-size: 14px; margin-bottom: 15px;">{{musicInfo.al.name}}</div>
    <img src="../../../assets/img/find/play.png" alt="" class="play-icon" @click="playMusic(musicInfo.id)"
         v-if="musicInfo.id !== $store.state.nowPlayingMusic.id">
    <img src="../../../assets/img/find/playing.png" alt="" class="play-icon" @click="playMusic(musicInfo.id)" v-else>
  </div>
</template>

<script>
  import {getMusic, getMusicUrl} from "../../../network/music";

  export default {
    name: "SearchListItem",
    props: {
      musicInfo: Object
    },
    methods: {
      playMusic(id) {
        getMusic(id).then(res=> {
          console.log(res.songs[0].al);
          let music = res.songs[0].al
          music.id = res.songs[0].id
          getMusicUrl(id).then( res=> {
            music.url = res.data[0].url
            music.id = id
            this.$store.commit('addMusicToList', music)
          })
        })
      }
    }
  }
</script>

<style scoped>
  .music-title {
    width: 80%;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 5px 0;
  }

  .play-icon {
    position: relative;
    width: 30px;
    float: right;
    margin-top: -50px;
    margin-right: 20px;
  }
</style>
