<template>
  <div class="profile">
    <div class="title" v-show="showTitle">{{title}}</div>
    <div v-for="item in contentList" class="profile-item">{{item}}</div>
  </div>
</template>

<script>
  export default {
    name: "ProfileCardItem",
    props: {
      contentList: Array,
      showTitle: false,
      title: String
    }
  }
</script>

<style scoped>
  .profile {
    background-color: #fff;
    margin: 15px 5%;
    border-radius: 10px;
    padding: 10px 20px;
  }

  .title {
    font-size: 14px;
    color: #666;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }

  .profile-item {
    margin: 18px 0;
    color: #000;
  }
</style>
