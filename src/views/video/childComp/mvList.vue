<template>
  <div class="mv-list">
    <div v-for="item in mvInfo" class="mv-item">
      <img :src="item.cover" alt="" class="mv-img" :key="item.id" @click="clickImg(item.id)" v-if="item.id !== $store.state.nowMVid">
      <video controls :src="mvUrl" v-if="item.id === $store.state.nowMVid"></video>
      <div class="item-text">{{item.name}}-{{item.artistName}}</div>
    </div>
  </div>
</template>

<script>
  import Video from "../Video";
  export default {
    name: "MVlist",
    components: {Video},
    props: {
      mvInfo: Array,
      mvUrl: String
    },
    methods: {
      clickImg(id) {
        this.$emit('clickImg',id)
      }
    }
  }
</script>

<style scoped>
  .mv-item {
    border-bottom: 6px solid #eee;
  }

  .mv-img{
    width: 90%;
    height: 185px;
    margin-left: 5%;
    margin-top: 5px;
    border-radius: 10px;
  }

  .item-text {
    margin-left: 5%;
    padding: 8px 0;
  }

  video {
    width: 90%;
    height: 185px;
    margin-left: 5%;
    margin-top: 5px;
    outline: none;
  }
</style>
