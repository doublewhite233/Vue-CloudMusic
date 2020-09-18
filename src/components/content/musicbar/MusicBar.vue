<template>
  <div>
    <play-list-card @closecard="closeCard" v-if="showPlayCard"></play-list-card>
    <div class="music-bar">
      <div class="progress">
      <progress :value="getValue" max="100" style="width: 100%;height: 2px;"></progress>
      </div>
      <div @click="toMusic" class="music-detail">
        <audio :src="$store.state.nowPlayingMusic.url" controls="controls" autoplay style="display: none"
               ref="audio" @ended="end" @playing="playing" @timeupdate="timeUpdate"></audio>
        <img :src="$store.state.nowPlayingMusic.picUrl" class="playing-music" :class="{'active':$store.state.nowPlayingMusic.isPlaying}">
        <span>{{$store.state.nowPlayingMusic.name}}</span>
      </div>
      <img src="../../../assets/img/common/pause.png" alt="" class="audioplay-icon" v-show="$store.state.nowPlayingMusic.isPlaying" @click="pauseMusic">
      <img src="../../../assets/img/common/start.png" alt="" class="audioplay-icon" v-show="!$store.state.nowPlayingMusic.isPlaying" @click="playMusic">
      <img src="../../../assets/img/musicbar/playlist.png" alt="" class="playlist-icon" @click="showPlayCard = true">
    </div>
  </div>
</template>

<script>
  import {getMusic,getMusicUrl} from "../../../network/music";

  import PlayListCard from "../playlistcard/PlayListCard";

  export default {
    name: "MusicBar",
    components: {
      PlayListCard
    },
    data() {
      return {
        showPlayCard: false
      }
    },
    created() {
      getMusic(this.$store.state.nowPlayingMusic.id).then(res=> {
        console.log(res.songs[0]);
        let music = res.songs[0].al
        music.id = res.songs[0].id
        getMusicUrl(this.$store.state.nowPlayingMusic.id).then( res=> {
          music.url = res.data[0].url
          this.$store.commit('addMusicToList', music)
        })
      })
    },
    mounted() {
      this.$bus.$on('playmusic',() => {
        this.$refs.audio.play()
      })
      this.$bus.$on('pausemusic',() => {
        this.$refs.audio.pause()
      })
    },
    methods: {
      toMusic() {
        this.$router.push('/music')
      },
      playMusic() {
        this.$refs.audio.play()
        this.$store.commit('play')
      },
      pauseMusic() {
        this.$refs.audio.pause()
        this.$store.commit('pause')
      },
      end() {
        this.$store.commit('pause')
        this.$store.commit('playNextMusic')
      },
      playing() {
        this.$store.commit('play')
      },
      timeUpdate() {
        let timeDisplay = Math.floor(this.$refs.audio.currentTime)
        let percent = Math.floor((this.$refs.audio.currentTime/this.$refs.audio.duration)*100)
        this.$store.commit('updateTime',timeDisplay)
        this.$store.commit('upDatePercent',percent)
      },
      closeCard() {
        this.showPlayCard = false
      }
    },
    computed: {
      getValue() {
        return this.$store.state.nowPlayingMusic.percent
      }
    }
  }
</script>

<style scoped>
  .music-bar {
    z-index: 100;
    height: 49px;
    width: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    border-top: 1px solid #eee;
  }

  .audioplay-icon {
    position: absolute;
    width: 35px;
    height: 35px;
    right: 50px;
    bottom: 10px;
  }

  .playlist-icon {
    position: absolute;
    width: 26px;
    height: 26px;
    right: 10px;
    bottom: 12px;
  }

  .music-detail {
    width: 60%;
    height: 100%;
  }

  .playing-music {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
    margin-top: 5px;
  }

  .music-detail span {
    position: absolute;
    bottom: 15px;
    padding-left: 10px;
    color: #000;
    font-size: 15px;
    width: 200px;
    white-space: nowrap;
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

  .progress {
    position: absolute;
    bottom: 59px;
    height: 2px;
    width: 100%;
  }
</style>
