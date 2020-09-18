<template>
  <div class="tab-bar">
    <div class="tab-bar-left"><slot name="left"></slot></div>
    <div class="tab-bar-center"><slot name="center"></slot></div>
    <div class="tab-bar-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  .tab-bar {
    height: 49px;
    background-color: #fff;
  }

  .tab-bar-left {
    position: absolute;
    left: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
  }

  .tab-bar-center {
    position: absolute;
    left: 60px;
    width: calc(100% - 120px);
  }

  .tab-bar-right {
    position: absolute;
    right: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
  }
</style>
