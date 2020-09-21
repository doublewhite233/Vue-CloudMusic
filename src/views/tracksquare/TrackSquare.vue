<template>
  <div>
    <div class="track-square">
      <img src="../../assets/img/common/back.png" alt="" class="back" @click="back">
      <div class="title">{{title}}</div>
      <img src="../../assets/img/common/type.png" alt="" class="type-icon" @click="showType = true">
      <choose-bar :choose-items="chooseList" class="choose-bar" @clickitem="clickItem"></choose-bar>
    </div>
    <type v-show="showType" :type-info="typeInfo" :show-list="false" @changetype="changeType"></type>
    <track-item :music-list="musicList" @pullingup="pullingup"></track-item>
  </div>
</template>

<script>
  import {getTrackType, getTrackInfo} from "../../network/tracksquare";

  import ChooseBar from "../../components/content/choosebar/ChooseBar";
  import Type from "./childComp/Type";
  import TrackItem from "./childComp/TrackItem";

  export default {
    name: "TrackSquare",
    components: {
      ChooseBar,
      Type,
      TrackItem
    },
    data() {
      return {
        chooseList: ['华语','摇滚','民谣','电子'],
        showType: false,
        typeInfo: null,
        offset: 0,
        musicList: [],
        currentIndex: 0,
        title: '歌单广场'
      }
    },
    created() {
      getTrackType().then( res =>{
        this.typeInfo = res
        console.log(res);
        getTrackInfo(this.chooseList[0],this.offset).then( res => {
          console.log(res);
          this.musicList.push(...res.playlists)
          this.offset+=1
        })
      })
    },
    methods: {
      back() {
        if (this.showType === true){
          this.showType = false
          this.title = '歌单广场'
          this.$router.replace('/tracksquare/' + this.chooseList[this.currentIndex]);
        }else {
          this.$router.go(-1)
        }
      },
      clickItem(index) {
        this.offset = 0
        this.musicList = []
        this.currentIndex = index
        getTrackInfo(this.chooseList[index],this.offset).then( res => {
          console.log(res);
          this.musicList.push(...res.playlists)
          this.offset+=1
        })
        this.$router.replace('/tracksquare/' + this.chooseList[index]);
      },
      pullingup() {
        getTrackInfo(this.chooseList[this.currentIndex],this.offset).then( res => {
          console.log(res);
          this.musicList.push(...res.playlists)
          this.offset+=1
        })
      },
      changeType(name) {
        this.title = name
      }
    }
  }
</script>

<style scoped>
  .track-square {
  background-color: #fff;
  width: 100%;
  height: calc(100vh - 49px);
  z-index: 1000;
  position: fixed;
  }

  .back {
    position: absolute;
    width: 40px;
    left: 15px;
    top: 20px;
  }

  .title {
    font-weight: bold;
    font-size: 19px;
    color: #000;
    position: absolute;
    left: 70px;
    top: 30px;
  }

  .choose-bar {
    width: 85%;
    margin-top: 70px;
  }

  .type-icon {
    position: absolute;
    width: 20px;
    height: 20px;
    margin-top: 70px;
    right: 20px;
  }
</style>
