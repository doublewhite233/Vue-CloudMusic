<template>
  <div class="track-item">
    <img src="../../../assets/img/find/playing.png" alt="" class="playing" v-if="musicid == $store.state.nowPlayingMusic.id">
    <div class="index" v-else>{{index+1}}</div>
    <div class="music-info" @click="clickMusic(musicid)">
      <div>{{musicName}}</div>
      <div style="color: #666;font-size: 14px;">{{desc}}</div>
    </div>
  </div>
</template>

<script>
  import {getMusic} from "../../../network/music";

  export default {
    name: "TrackItem",
    props: {
      index: Number,
      musicid: Number
    },
    data() {
      return {
        musicName: '',
        desc: ''
      }
    },
    created() {
      getMusic(this.musicid).then(res => {
        this.desc = res.songs[0].al.name
        this.musicName = res.songs[0].name
        this.$emit('textloaded')
      })
    },
    methods: {
      clickMusic(id) {
        this.$emit('clickmusic',id)
      }
    }
  }
</script>

<style scoped>
  .track-item {
    padding: 10px 0;
    display: flex;
  }

  .index {
    width: 30px;
    text-align: center;
    font-size: 18px;
  }

  .music-info {
    margin-left: 10px;
    margin-top: -5px;
    color: #000;
    width: 90%;
  }

  .music-info div {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .playing {
    width: 30px;
    height: 30px;
  }
</style>
