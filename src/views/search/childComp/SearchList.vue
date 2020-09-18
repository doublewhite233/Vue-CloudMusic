<template>
  <div class="search-list">
    <scroll class="content" ref="scroll" :pull-up-load="true" @pullingUp="searchMore">
      <div class="title">单曲</div>
      <div class="items">
        <div v-for="item in searchList">
          <search-list-item :music-info="item"></search-list-item>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";
  import SearchListItem from "./SearchListItem";

  export default {
    name: "SearchList",
    components: {
      Scroll,
      SearchListItem
    },
    props: {
      searchList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    updated() {
      this.$refs.scroll.refresh()
    },
    methods: {
      searchMore() {
        this.$emit('pullingUp')
      }
    }
  }
</script>

<style scoped>
  .search-list {
    margin-top: 80px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .content {
    height: calc(100vh - 130px);
    overflow: hidden;
  }

  .title {
    font-weight: bold;
    font-size: 16px;
    color: #000;
    border-bottom: 1px solid #aaa;
    padding-bottom: 10px;
    margin-bottom: 5px;
  }
</style>
