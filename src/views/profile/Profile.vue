<template>
  <div class="profile">
    <div style="position:relative;">
      <div v-if="$store.state.userInfo===null">
        <img src="../../assets/img/profile/avatar.png" alt="" class="avatar">
        <span @click="toLoginPage" class="logintext">立即登录></span>
      </div>
      <div v-else>
        <img :src="$store.state.userInfo.profile.avatarUrl" alt="" class="avatar">
       <span class="logintext">{{$store.state.userInfo.profile.nickname}}</span>
      </div>
    </div>
    <choose-bar :chooseItems="['创建歌单','收藏歌单']"></choose-bar>
  </div>
</template>

<script>
  import ChooseBar from "../../components/content/choosebar/ChooseBar";

  export default {
    name: "Profile",
    components: {
      ChooseBar
    },
    methods: {
      toLoginPage() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .profile {
    position: absolute;
    top: 50px;
    width: 100%;
  }

  .avatar {
    height: 60px;
    width: 60px;
    margin: 20px 10px 20px 20px;
    border-radius: 50%;
  }

  .logintext {
    font-weight: bold;
    font-size: 18px;
    color: #000;
    position: absolute;
    width: 100px;
    top: 40px;
    left: 100px;
  }
</style>
