<template>
  <div class="play-list"
       :style="{backgroundImage: 'url(' + playlistData.coverImgUrl + ')', backgroundSize:'100% 100%', backgroundRepeat: 'no-repeat'}">
    <img src="../../assets/img/common/backwhite.png" alt="" class="back" @click="back">
    <div class="title">歌单</div>
    <play-list-info :playlist-data="playlistData"></play-list-info>
    <tracks :tracks="tracks" :subscribed-count="subscribedCount"
            @subscribeplaylist="subscribeList" :id="id" @delplaylist="delPlaylist"></tracks>
  </div>
</template>

<script>
  import {getPlaylistDetail, subscribe} from "../../network/playlist";

  import PlayListInfo from "./childComp/PlayListInfo";
  import Tracks from "./childComp/Tracks";

  export default {
    name: "PlayList",
    components: {
      PlayListInfo,
      Tracks
    },
    data() {
      return {
        id: null,
        playlistData: null,
        tracks: null,
        subscribedCount: 0
      }
    },
    created() {
      this.id = this.$route.params.id
      getPlaylistDetail(this.id).then(res => {
        console.log(res);
        this.playlistData = res.playlist
        this.tracks = res.playlist.trackIds
        this.subscribedCount = res.playlist.subscribedCount
      })
    },
    methods: {
      back() {
        this.$router.go(-1)
      },
      subscribeList() {
        if (this.$store.state.userInfo === null) {
          this.$toast.show('请先登录')
        } else {
          subscribe(this.id,1,this.$store.state.userInfo.cookie).then( res => {
            console.log(res);
            this.$store.commit('addSubscribe',this.playlistData)
          })
        }
      },
      delPlaylist() {
        subscribe(this.id,2,this.$store.state.userInfo.cookie).then( res => {
          console.log(res);
          this.$store.commit('delSubscribe',this.id)
          this.$forceUpdate();
        })
      }
    }
  }
</script>

<style scoped>
  .play-list::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: calc(100% - 300px);;
    background-color: rgba(0,0,0,.5);
    filter: blur(10px);
    z-index: 999;
  }

  .play-list {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: calc(100vh - 49px);
    background-color: #fff;
  }

  .play-list::after {
    content: '';
    width: 100%;
    height: calc(100% - 300px);
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(20px);
  }

  .back {
    position: absolute;
    width: 40px;
    left: 15px;
    top: 20px;
    z-index: 10000;
  }

  .title {
    font-weight: bold;
    font-size: 19px;
    color: #fff;
    position: absolute;
    left: 70px;
    top: 30px;
    z-index: 10000;
  }
</style>
