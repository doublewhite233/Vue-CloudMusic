<template>
  <div class="main-tab-bar">
    <transition name="fade">
      <profile-card @closecard="closeCard" v-if="showCard"></profile-card>
    </transition>
    <tab-bar>
      <img src="../../../assets/img/tabbar/list.png" style="height: 20px" alt="" slot="left" @click="showCard = true">
      <div slot="center" class="main-tab-bar-center">
        <tab-bar-item path="/profile">我的</tab-bar-item>
        <tab-bar-item path="/find">发现</tab-bar-item>
        <tab-bar-item path="cloud">云村</tab-bar-item>
        <tab-bar-item path="video">视频</tab-bar-item>
      </div>
      <img src="../../../assets/img/tabbar/search.png" style="height: 20px" alt="" slot="right" @click="toSearch">
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";

  import ProfileCard from "../profilecard/ProfileCard";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem,
      ProfileCard
    },
    data() {
      return {
        showCard: false
      }
    },
    methods: {
      toSearch() {
        this.$router.push('/search')
      },
      closeCard() {
        this.showCard = false
      }
    }
  }
</script>

<style scoped>
  .main-tab-bar {
    width: 100%;
    z-index: 1000;
    position: fixed;
  }

  .main-tab-bar-center {
    height: 49px;
    display: flex;
    text-align: center;
    align-items: center;
  }

  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to {
    transform: translateX(-10px);
    opacity: 0;
  }
</style>
