<template>
  <div>
    <div class="type" v-if="!showList" @click="refreshScroll">
      <scroll class="contain" ref="scroll">
        <div>
          <div v-for="(item,index) in typeInfo.categories">
            <div class="titles">{{item}}</div>
            <div class="content">
              <div v-for="i in typeInfo.sub" v-if="i.category == index" class="content-item" @click="clickType(i.name)">{{i.name}}</div>
            </div>
          </div>
        </div>
      </scroll>
    </div>
    <square-item v-else :music-list="musicList" @pullingup="pullingup"></square-item>
  </div>
</template>

<script>
  import {getTrackInfo} from "../../../network/tracksquare";

  import Scroll from "../../../components/common/scroll/Scroll";
  import SquareItem from "./SquareItem";

  export default {
    name: "Type",
    props: {
      typeInfo: {
        type: Object,
        default() {
          return {}
        }
      },
      showList: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        offset: 0,
        musicList: [],
        currentName:''
      }
    },
    components: {
      Scroll,
      SquareItem
    },
    methods: {
      refreshScroll() {
        if (!this.showList) {
          this.$refs.scroll.refresh()
        }
      },
      clickType(name) {
        this.offset = 0
        this.musicList = []
        this.currentName = name
        getTrackInfo(name,this.offset).then( res => {
          console.log(res);
          this.musicList.push(...res.playlists)
          this.offset+=1
        })
        this.showList = true
        this.$refs.scroll.refresh()
        this.$router.replace('/tracksquare/' + name);
      },
      pullingup() {
        getTrackInfo(this.currentName,this.offset).then( res => {
          console.log(res);
          this.musicList.push(...res.playlists)
          this.offset+=1
        })
      }
    }
  }
</script>

<style scoped>
  .type {
    background-color: #fff;
    width: 100%;
    height: calc(100vh - 110px);
    z-index: 1002;
    position: absolute;
    margin-top: 60px;
    padding: 10px 15px;
  }

  .contain {
    height: 100%;
    overflow: hidden;
  }

  .titles {
    color: #000;
    margin: 10px 0;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
  }

  .content-item {
    width: 70px;
    padding: 10px 20px;
    background-color: #eee;
    border-radius: 25px;
    font-size: 13px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px 2.2%;
  }
</style>
