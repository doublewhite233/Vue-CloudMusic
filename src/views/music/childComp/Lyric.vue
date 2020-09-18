<template>
  <div class="lyric">
    <scroll class="content" ref="scroll">
      <div class="lyric-box" :style="{'margin-top':margintop + 'px'}">
        <div v-for="(item,index) in lyric" class="lyric-items"  :class="{active:currentIndex===index}">{{item.text}}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";


  export default {
    name: "Lyric",
    components: {
      Scroll
    },
    props: {
      lyric: Array
    },
    data() {
      return {
        margintop: 0,
        currentIndex: 0
      }
    },
    watch: {
      lyricCurrent(val, oldVal) {
        this.lyric.forEach((element, index) => {
          if (val === element.time) {
            this.margintop = -(31 * index)
            this.currentIndex = index
          }
        })
      }
    },
    updated() {
      this.$refs.scroll.refresh()
    },
    computed: {
      lyricCurrent() {
        return this.$store.state.nowPlayingMusic.displayTime
      }
    }
  }
</script>

<style scoped>
  .lyric {
    font-size: 17px;
    color: #666;
    height: 60%;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    text-align: center;
  }

  .content {
    height: 90%;
    overflow: hidden;
  }

  .lyric-box {
    margin-top: -100px;
  }

  .lyric-items {
    margin: 12px 0;
  }

  .active {
    color: #fff;
  }
</style>
