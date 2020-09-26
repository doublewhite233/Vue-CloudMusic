<template>
  <div class="profile-card">
    <div class="profile-card-mask" @click="closeCard"></div>
    <div class="card">
      <profile-card-item :content-list="['创作者中心']"></profile-card-item>
      <profile-card-item :content-list="['听歌识曲','云村有票','商城','游戏专区','口袋彩铃']" :show-title="true" title="音乐服务"></profile-card-item>
      <profile-card-item title="其他" :show-title="true"
        :content-list="['个性装扮','定时关闭','扫一扫','边听边存','在线听歌免流量','音乐黑名单','青少年模式','音乐闹钟']"></profile-card-item>
      <profile-card-item :content-list="['我的订单','优惠券','帮助与反馈','关于']"></profile-card-item>
    </div>
  </div>
</template>

<script>
  import ProfileCardItem from "../profilecarditem/ProfileCardItem";

  export default {
    name: "ProfileCard",
    components: {
      ProfileCardItem
    },
    methods: {
      closeCard() {
        this.$emit('closecard')
      }
    }
  }
</script>

<style scoped>
  .profile-card-mask {
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
    z-index: 1001;
    position: fixed;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .card {
    background-color: #eee;
    position: absolute;
    width: 90%;
    height: 100vh;
    left: 0;
    z-index: 1002;
    overflow-y: scroll;
    /*animation: go 1s ease 0s;*/
  }

  ::-webkit-scrollbar {
    display: none;
  }

  /*@keyframes go {*/
  /*  0% {*/
  /*    transform: translateX(-90%);*/
  /*  }*/
  /*  100% {*/
  /*    transform: translateX(0px);*/
  /*  }*/
  /*}*/
</style>
