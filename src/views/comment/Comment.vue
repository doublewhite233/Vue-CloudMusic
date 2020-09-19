<template>
  <div class="comment">
    <img src="../../assets/img/common/back.png" alt="" class="back" @click="back">
    <div class="fixed-title" v-show="isFixed">评论区</div>
    <div class="title">评论</div>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @pullingUp="pullingUp" @scroll="contentScroll">
      <info @click.native="back"></info>
      <comment-item :comment-list="commentList"></comment-item>
    </scroll>
  </div>
</template>

<script>
  import {getComment} from "../../network/comment";

  import Scroll from "../../components/common/scroll/Scroll";
  import Info from "./childComp/Info";
  import CommentItem from "./childComp/CommentItem";

  export default {
    name: "Comment",
    components: {
      Info,
      CommentItem,
      Scroll
    },
    data() {
      return {
        offset: 0,
        commentList: [],
        isFixed: false
      }
    },
    created() {
      this.getComment(this.$store.state.nowPlayingMusic.id,this.offset)
    },
    updated() {
      this.$refs.scroll.refresh()
    },
    methods: {
      getComment(id, offset) {
        getComment(id, offset).then(res => {
          if (this.offset === 0) {
            this.commentList.push(...res.hotComments)
            this.commentList.push(...res.comments)
          }
          else {
            this.commentList.push(...res.comments)
          }
          this.offset += 1
        })
      },
      back() {
        this.$router.replace('/music')
      },
      contentScroll(position) {
        this.isFixed = (-position.y) > 140
      },
      pullingUp() {
        this.getComment(this.$store.state.nowPlayingMusic.id,this.offset)
        this.$refs.scroll.refresh()
        this.$refs.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>
  .comment {
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

  .content {
    position: absolute;
    margin-top: 60px;
    height: calc(100vh - 109px);
    overflow: hidden;
  }

  .fixed-title {
    width: 100%;
    font-weight: bold;
    color: #000;
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    position: absolute;
    top: 50px;
    background-color: #fff;
    z-index: 9999;
  }
</style>
