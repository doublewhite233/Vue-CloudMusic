<template>
  <div class="progress">
    <div class="bar">
      <div><img src="../../../assets/img/music/like.png" alt="" @click="likeMusic"></div>
      <div><img src="../../../assets/img/music/comment.png" alt="" @click="toComment"></div>
    </div>
    <progress :value="getValue" max="100"></progress>
  </div>
</template>

<script>
  export default {
    name: "Progress",
    computed: {
      getValue() {
        return this.$store.state.nowPlayingMusic.percent
      }
    },
    methods: {
      likeMusic() {
        if (this.$store.state.userInfo === null){
          this.$toast.show('请先登录')
          this.$router.push('/login')
        } else {
          console.log('aaaaa');
        }
      },
      toComment () {
        this.$router.push('/comment/'+this.$store.state.nowPlayingMusic.id)
      }
    }
  }
</script>

<style scoped>
  .progress {
    position: absolute;
    bottom: 110px;
    width: 100%;
  }

  progress {
    width: 90%;
    height: 5px;
    margin-left: 5%;
  }

  .bar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -10px;
  }

  .bar div {
    flex: 1;
    width: 50px;
    height: 50px;
    text-align: center;
  }

  img {
    width: 40px;
    height: 40px;
  }
</style>
