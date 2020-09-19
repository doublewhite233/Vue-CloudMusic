<template>
  <div class="cloud">
    <scroll class="content" ref="scroll">
      <comment :comment-list="commentList" @imgload="imgLoad"></comment>
    </scroll>
  </div>
</template>

<script>
  import {getHotComment} from "../../network/cloud";

  import Scroll from "../../components/common/scroll/Scroll";
  import Comment from "./childComp/Comment";

  export default {
    name: "Cloud",
    components: {
      Comment,
      Scroll
    },
    data() {
      return {
        commentList: null
      }
    },
    created() {
      getHotComment().then( res => {
        this.commentList = res.data
        this.$refs.scroll.refresh()
      })
    },
    updated() {
      this.$refs.scroll.refresh()
    },
    methods: {
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
      }
    }
  }
</script>

<style scoped>
  .cloud {
    position: absolute;
    top: 60px;
    width: 100%;
  }

  .content {
    height: calc(100vh - 109px);
    overflow: hidden;
  }
</style>
