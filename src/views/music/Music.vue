<template>
  <div class="music"
       :style="{backgroundImage: 'url(' + $store.state.nowPlayingMusic.picUrl + ')', backgroundSize:'100% 100%', backgroundRepeat: 'no-repeat'}">
    <div class="content">
      <play-list-card v-if="showPlayCard" @closecard="showPlayCard = false"></play-list-card>
      <img src="../../assets/img/common/backwhite.png" alt="" class="back" @click="back">
      <div class="title">{{$store.state.nowPlayingMusic.name}}</div>
      <music-disc v-show="!isLyric" @click.native="showLyric"></music-disc>
      <lyric v-show="isLyric" @click.native="hideLyric" :lyric="lyricList"></lyric>
      <disc-progress @likemusic="likeMusic" @dislikemusic="dislikeMusic"></disc-progress>
      <play-bar @showplaycard="showPlayCard = true"></play-bar>
    </div>
  </div>
</template>

<script>
  import {getLyric, likeMusic} from "../../network/music";

  import PlayBar from "./childComp/PlayBar";
  import MusicDisc from "./childComp/MusicDisc";
  import Lyric from "./childComp/Lyric";
  import DiscProgress from "./childComp/DiscProgress";

  import PlayListCard from "../../components/content/playlistcard/PlayListCard";

  export default {
    name: "Music",
    components: {
      PlayBar,
      MusicDisc,
      Lyric,
      DiscProgress,
      PlayListCard
    },
    data () {
      return {
        isLyric: false,
        lyric: null,
        lyricList: [],
        showPlayCard: false,
      }
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      showLyric() {
        this.isLyric = true
        getLyric(this.$store.state.nowPlayingMusic.id).then( res => {
          this.lyric = res.lrc.lyric
          this.lyricList = []
          this.formatLyric(this.lyric)
        })
      },
      hideLyric() {
        this.isLyric = false
      },

      formatLyric(text) {
        let arr = text.split("\n")
        let row = arr.length
        for (let i = 0; i < row; i++) {
          let temp_row = arr[i]
          let temp_arr = temp_row.split("]")
          let text = temp_arr.pop()

          temp_arr.forEach(element => {
            let obj = {}
            let time_arr = element.substr(1, element.length - 1).split(":")
            let s = parseInt(time_arr[0]) * 60 + Math.ceil(time_arr[1])
            obj.time = s
            obj.text = text
            if (isNaN(obj.time)===false || obj.text !== '') {
              this.lyricList.push(obj)
            }
          });
        }
        this.lyricList.sort(this.sortRule)
      },
      sortRule(a, b) {
        return a.time - b.time
      },
      likeMusic() {
        likeMusic(this.$store.state.nowPlayingMusic.id,true,this.$store.state.userInfo.cookie).then(res=> {
          console.log(res);
          this.$store.commit('addLikeMusic',this.$store.state.nowPlayingMusic.id)
          this.$forceUpdate();
        })
      },
      dislikeMusic() {
        likeMusic(parseInt(this.$store.state.nowPlayingMusic.id),false,this.$store.state.userInfo.cookie).then(res=> {
          console.log(res);
          this.$store.commit('delLikeMusic',parseInt(this.$store.state.nowPlayingMusic.id))
          this.$forceUpdate();
        })
      }
    }
  }
</script>

<style scoped>
  .music::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(0,0,0,.8);
    filter: blur(10px);
    z-index: 10000;
  }

  .music {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    background-color: #161825;
  }

  .music::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(20px);
  }

  .content {
    z-index: 100000;
    position:absolute;
    width: 100%;
    height: 100%;
  }

  .back {
    position: absolute;
    width: 40px;
    left: 15px;
    top: 20px;
  }

  .title {
    position: absolute;
    left: 60px;
    top: 30px;
    color: #fff;
    font-size: 19px;
    font-weight: bold;
  }
</style>
