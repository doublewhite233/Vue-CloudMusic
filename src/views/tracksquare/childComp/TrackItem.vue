<template>
  <div class="track-item">
    <scroll class="content" ref="scroll" :pull-up-load="true" @pullingUp="pullingUp">
      <div class="track-item-con">
        <div v-for="item in musicList" @click="toPlayList(item.id)">
          <img v-lazy="item.coverImgUrl" alt="" class="cover" @load="imgLoad">
          <div class="name">{{item.name}}</div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";

  export default {
    name: "TrackItem",
    components:{
      Scroll
    },
    props: {
      musicList: Array
    },
    updated() {
      this.$refs.scroll.refresh()
    },
    methods: {
      toPlayList(id) {
        this.$router.push('/playlist/'+ id)
      },
      imgLoad() {
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

      pullingUp() {
        this.$emit('pullingup')
        this.$refs.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>
  .track-item {
    top: 110px;
    position: absolute;
    z-index: 1001;
    height: calc(100vh - 159px);
    width: 100%;
  }

  .content {
    height: calc(100vh - 159px);
    overflow: hidden;
  }

  .cover {
    height: 110px;
    width: 110px;
    border-radius: 10px;
  }

  .name {
    width: 110px;
    font-size: 14px;
    margin-bottom: 20px;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .track-item-con {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
