<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
    <music-bar></music-bar>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/maintabbar/MainTabBar";
  import MusicBar from "./components/content/musicbar/MusicBar";
  import Video from "./views/video/Video";

  export default {
    name: 'App',
    components: {
      Video,
      MainTabBar,
      MusicBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
