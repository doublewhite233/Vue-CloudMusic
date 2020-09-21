<template>
  <div class="track">
    <div class="track-content">
      <div style="width: 60%;" @click="playall">播放全部（共{{tracks.length}}首）</div>
      <button class="subscribe" @click="subscribePlayList" v-if="!isSubscribed">收藏（{{subscribedCount}}）</button>
      <button class="subscribe" @click="delPlayList" style="background-color: #666;" v-else>已收藏</button>
      <scroll class="content" ref="scroll">
        <track-item v-for="(item,index) in tracks" :index="index" :musicid="item.id" @textloaded="refreshScroll" @clickmusic="clickMusic" :key="item.id"></track-item>
      </scroll>
    </div>
  </div>
</template>

<script>
  import {getMusic, getMusicUrl} from "../../../network/music";

  import Scroll from "../../../components/common/scroll/Scroll";
  import TrackItem from "./TrackItem";

  export default {
    name: "Track",
    components: {
      TrackItem,
      Scroll
    },
    props: {
      tracks: Array,
      subscribedCount: Number,
      id: String
    },
    computed: {
      isSubscribed() {
        if (this.$store.state.userInfo!==null) {
          for(let i = 0; i < this.$store.state.userInfo.playlist.length; i++) {
            if (this.$store.state.userInfo.playlist[i].id == this.id){
              return true
            }
          }
        }
        return false
      }
    },
    methods: {
      playMusic(id) {
        getMusic(id).then(res=> {
          let len = res.songs.length
          id = id.toString().split(',')
          for (let i = 0; i < len; i++) {
            console.log(res.songs[i].al);
            let music = res.songs[i].al
            getMusicUrl(id[i]).then( res=> {
              music.url = res.data[0].url
              music.id = id[i]
              this.$store.commit('addMusicToList', music)
            })
          }
        })
      },

      refreshScroll() {
        this.debounce(this.$refs.scroll.refresh(), 500)
      },
      debounce(func, delay) {
        let timer = null
        return function () {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this, args)
          }, delay)
        }
      },
      clickMusic(id) {
        this.playMusic(id)
      },
      playall() {
        let playlist = ''
        for (let i = 0; i < this.tracks.length; i++) {
          playlist = playlist + this.tracks[i].id.toString()+','
        }
        playlist = playlist.substr(0,playlist.length-1)
        this.playMusic(playlist)
      },
      subscribePlayList() {
        this.$emit('subscribeplaylist')
      },
      delPlayList() {
        this.$emit('delplaylist')
      }
    }
  }
</script>

<style scoped>
  .track {
    position: absolute;
    z-index: 10000;
    height: calc(100vh - 30% - 100px);
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .track-content {
    padding: 15px;
    height: 100%;
  }

  .subscribe {
    border: none;
    outline: none;
    background-color: #dc2c1f;
    color: #fff;
    position: absolute;
    right: 15px;
    top: 10px;
    padding: 5px 10px;
    border-radius: 25px;
    font-size: 14px;
    width: 140px;
  }

  .content {
    margin-top: 20px;
    height: calc(100% - 30px);
    overflow: hidden;
  }
</style>
