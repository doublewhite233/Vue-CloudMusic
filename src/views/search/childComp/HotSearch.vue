<template>
  <div class="hot-search">
    <div class="title">热搜榜</div>
    <div class="hot-item-list">
      <div v-for="(item,index) in hotSearch" class="hot-item" @click="clickHotItem(item.searchWord)">
        <div :class="index<3?'active':''" class="hot-item-inside">{{index+1}}&nbsp;&nbsp;{{item.searchWord}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HotSearch",
    props: {
      hotSearch: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      clickHotItem(word) {
        this.$emit('clickhotitem',word)
      }
    }
  }
</script>

<style scoped>
  .hot-search {
    margin-top: 80px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .title {
    font-weight: bold;
    font-size: 16px;
    color: #000;
    border-bottom: 1px solid #aaa;
    padding-bottom: 10px;
    margin-bottom: 5px;
  }

  .hot-item-list {
    display: flex;
    flex-wrap: wrap;
  }

  .hot-item {
    padding: 10px;
    color: #000;
    width: 49%;
  }

  .active {
    font-weight: bold;
  }

  .hot-item-inside {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 14px;
  }
</style>
