<template>
  <div class="my-like">
    <img src="../../../assets/img/profile/likecover.png" alt="" class="like-cover" v-if="$store.state.userInfo===null">
    <img :src="$store.state.userInfo.playlist[0].coverImgUrl" class="like-cover" alt="" v-else @click="toLikeList">
    <div class="like-text" @click="toLikeList">
      <div>我喜欢的音乐</div>
      <div style="font-size: 12px" v-if="$store.state.userInfo">{{$store.state.userInfo.playlist[0].trackCount}}首</div>
    </div>
    <button>心动模式</button>
  </div>
</template>

<script>
  export default {
    name: "MyLike",
    methods: {
      toLikeList() {
        if (this.$store.state.userInfo !== null) {
          this.$router.push('/playlist/'+this.$store.state.userInfo.playlist[0].id)
        }
      }
    }
  }
</script>

<style scoped>
  .my-like {
    width: 90%;
    margin-left: 5%;
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .like-cover {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    border-radius: 10px;
  }

  button {
    height: 25px;
    font-size: 12px;
    background-color: #fff;
    outline: none;
    border: 1px solid #666;
    border-radius: 25px;
    padding: 5px;
  }

  .like-text {
    width: 60%;
  }
</style>
