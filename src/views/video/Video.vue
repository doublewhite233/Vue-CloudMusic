<template>
  <div class="video">
    <choose-bar :choose-items="['全部','内地','港台','欧美','日本','韩国']" @clickitem="clickItem"></choose-bar>
    <scroll class="content" ref="scroll" :pull-up-load="true" @pullingUp="pullingUp">
      <mv-list :mv-info="topMV[area].list" @clickImg="clickImg" :mv-url="MVUrl"></mv-list>
    </scroll>
  </div>
</template>

<script>
  import {getTopMV, getMVUrl} from "../../network/video";

  import Scroll from "../../components/common/scroll/Scroll";
  import ChooseBar from "../../components/content/choosebar/ChooseBar";
  import mvList from "./childComp/mvList";

  export default {
    name: "Video",
    components: {
      Scroll,
      mvList,
      ChooseBar
    },
    data() {
      return {
        topMV: {
          0: {offset: 0, list: []},
          1: {offset: 0, list: []},
          2: {offset: 0, list: []},
          3: {offset: 0, list: []},
          4: {offset: 0, list: []},
          5: {offset: 0, list: []}
        },
        area: 0,
        areaMap: ['','内地','港台','欧美','日本','韩国'],
        MVUrl: ''
      }
    },
    created() {
      this.getTopMV(0)
    },
    updated() {
      this.$refs.scroll.refresh()
    },
    methods: {
      getTopMV(area) {
        let offset = this.topMV[area].offset
        getTopMV(this.areaMap[area],offset*10).then( res => {
          console.log(res);
          this.topMV[area].list.push(...res.data)
          this.topMV[area].offset += 1
        })
      },
      getMVUrl(id) {
        getMVUrl(this.$store.state.nowMVid).then ( res => {
          this.MVUrl = res.data.url
        })
      },

      clickItem(index) {
        this.area = index
        this.getTopMV(this.area)
        this.$refs.scroll.refresh()
      },
      pullingUp() {
        this.getTopMV(this.area)
        this.$refs.scroll.refresh()
        this.$refs.scroll.finishPullUp()
      },
      clickImg(id) {
        this.$store.commit('setMVUrl',id)
        this.getMVUrl()
      }
    }
  }
</script>

<style scoped>
  .video {
    position: absolute;
    top: 60px;
    width: 100%;
  }

  .content {
    height: calc(100vh - 149px);
    overflow: hidden;
  }
</style>
