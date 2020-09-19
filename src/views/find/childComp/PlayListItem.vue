<template>
  <div class="play-list-item">
    <div class="play-list-title">
      {{playlist.uiElement.mainTitle.title}}
      <button class="play-list-btn" v-if="playlist.uiElement.button" @click="btnClick(playlist.uiElement.button.text)">{{playlist.uiElement.button.text}}</button>
    </div>
    <div class="play-list-content" v-if="playlist.creatives">
      <div v-for="item of playlist.creatives">
        <img :src="item.uiElement.image.imageUrl" alt="" class="play-list-img" v-if="item.uiElement.image"  @click="clickMusicList(item.creativeId)">
        <div class="play-list-littletitle" v-if="item.uiElement.image"  @click="clickMusicList(item.creativeId)">{{item.uiElement.mainTitle.title}}</div>

        <div v-else>
          <div v-for="listitem of item.resources" class="play-list-other">
            <img :src="listitem.uiElement.image.imageUrl" alt="" class="play-list-img-other">
            <div class="play-list-maintext-other">{{listitem.uiElement.mainTitle.title}}-
              <span v-if="listitem.resourceExtInfo!==null">{{listitem.resourceExtInfo.songData.artists[0].name}}</span></div>
            <div v-if="listitem.uiElement.subTitle" class="play-list-littletitle-other">{{listitem.uiElement.subTitle.title}}</div>
            <img src="../../../assets/img/find/play.png" alt="" class="play-icon" @click="playMusic(listitem.resourceId)"
              v-if="listitem.resourceId !== $store.state.nowPlayingMusic.id">
            <img src="../../../assets/img/find/playing.png" alt="" class="play-icon" @click="playMusic(listitem.resourceId)" v-else>
          </div>
        </div>
      </div>
    </div>
    <div class="play-list-content" v-else>
      <div v-if="typeof (playlist.extInfo)==Array">
        <div v-for="item of playlist.extInfo">
          <img :src="item.cover" alt="" class="play-list-img">
          <div class="play-list-littletitle">{{item.title}}</div>
        </div>
      </div>
      <div v-else>
        <div v-if="playlist.extInfo.squareFeedViewDTOList" style="display:flex;">
          <div v-for="item of playlist.extInfo.squareFeedViewDTOList">
            <img :src="item.resource.mlogBaseData.coverUrl" alt="" class="play-list-img-large">
            <div class="play-list-littletitle">{{item.resource.mlogBaseData.text}}</div>
          </div>
        </div>
        <div v-else style="display:flex;">
          <div v-for="item of playlist.extInfo">
            <img :src="item.verticalCover" alt="" class="play-list-img">
            <div class="play-list-littletitle">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getMusic, getMusicUrl} from "../../../network/music";

  export default {
    name: "PlayListItem",
    props: {
      playlist: {
        type: Object,
        default() {
          return {}
        }
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
      clickMusicList(id) {
        this.$router.push('/playlist/'+id)
      },
      btnClick(text) {
        if (text === '播放全部') {
          let playlist = ''
          for (let i = 0; i < this.playlist.creatives.length; i++) {
            for (let j = 0; j < this.playlist.creatives[i].resources.length; j++) {
              playlist = playlist + this.playlist.creatives[i].resources[j].resourceId.toString()+','
            }
          }
          playlist = playlist.substr(0,playlist.length-1)
          this.playMusic(playlist)
        } else {
          this.$router.push('/tracksquare/'+'华语')
        }
      }
    }
  }
</script>

<style scoped>
  .play-list-item {
    touch-action: none
  }

  .play-list-title {
    position: relative;
    font-weight: bold;
    color: #000;
    font-size: 18px;
    padding: 15px 15px 10px 15px;
  }

  .play-list-content {
    display: flex;
    width: 100%;
    overflow: hidden;
    padding-left: 10px;
    overflow-x: scroll;
  }

  .play-list-content::-webkit-scrollbar {
    display: none
  }

  .play-list-img {
    width: 110px;
    height: 110px;
    padding: 5px;
    border-radius: 10px;
  }

  .play-list-littletitle {
    padding: 0 10px;
    font-size: 12px;
    line-height: 16px;
    color: #000;
    width: 110px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .play-list-btn {
    position: absolute;
    background-color: #fff;
    border-radius: 25px;
    border: 1px solid #999;
    font-size: 12px;
    padding: 5px 10px;
    right: 15px;
    outline: none;
  }

  .play-list-other {
    display: flex;
    position: relative;
    width: 320px;
  }

  .play-list-img-other {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin: 5px 10px 5px 5px;
  }

  .play-list-maintext-other {
    color: #000;
    padding-top: 10px;
  }

  .play-list-littletitle-other {
    padding: 0 10px;
    font-size: 12px;
    line-height: 16px;
    position: absolute;
    left: 65px;
    top: 35px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .play-icon {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 20px;
    top: 15px;
  }

  .play-list-img-large {
    width: 110px;
    height: 150px;
    padding: 5px;
    border-radius: 10px;
  }
</style>
