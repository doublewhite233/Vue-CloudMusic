<template>
  <div class="find">
    <scroll class="content" ref="scroll" :pull-down-refresh="true" @pullingDown="pageRefresh">
      <find-swiper :banner="banner"></find-swiper>
      <play-list :playlist="playlist"></play-list>
      <div class="page-config">{{pageConfig.nodataToast}} <span @click="getRefresh">点击刷新</span></div>
    </scroll>
  </div>
</template>

<script>
  import {getBanner,getFindData} from "../../network/find";

  import FindSwiper from "./childComp/FindSwiper";
  import PlayList from "./childComp/PlayList";

  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "Find",
    components: {
      FindSwiper,
      PlayList,
      Scroll
    },
    data() {
      return {
        banner: null,
        playlist: null,
        pageConfig: null
      }
    },
    created() {
      this.getBanner()
      this.getFindData()
    },
    methods: {
      getBanner() {
        getBanner().then(res => {
          console.log(res);
          this.banner = res.banners
        })
      },
      getFindData() {
        getFindData().then(res => {
          console.log(res);
          this.playlist = res.data.blocks
          this.pageConfig = res.data.pageConfig
        })
      },

      getRefresh() {
        this.$refs.scroll.scroll.scrollTo(0,0,500)
        this.getBanner()
        this.getFindData()
      },
      pageRefresh() {
        this.getBanner()
        this.getFindData()
        this.$refs.scroll.finishPullDown()
      }
    }
  }
</script>

<style scoped>
  .find {
    position: absolute;
    top: 60px;
    width: 100%;
  }

  .page-config {
    width: 100%;
    height: 80px;
    font-size: 12px;
    text-align: center;
    padding-top: 30px;
  }

  .page-config span {
    color: #4b5faf;
  }

  .content {
    height: calc(100vh - 109px);
    overflow: hidden;
  }
</style>
