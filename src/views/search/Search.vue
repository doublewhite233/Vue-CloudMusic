<template>
  <div class="search">
    <img src="../../assets/img/common/back.png" alt="" class="back" @click="back">
    <input type="text" v-model="searchWord" placeholder="输入要搜索的内容" @keyup.enter="search">
    <hot-search :hot-search="hotSearch" @clickhotitem="clickHotItem" v-show="!isSearching"></hot-search>
    <search-list v-show="isSearching" :search-list="searchList" @pullingUp="pullingUp"></search-list>
  </div>
</template>

<script>
  import {getHotSearch, getSearchData} from "../../network/search";

  import HotSearch from "./childComp/HotSearch";
  import SearchList from "./childComp/SearchList";

  export default {
    name: "Search",
    components: {
      HotSearch,
      SearchList
    },
    data() {
      return {
        searchWord: '',
        hotSearch: null,
        searchList: [],
        isSearching: false,
        offset: 0
      }
    },
    created() {
      getHotSearch().then(res => {
        console.log(res.data)
        this.hotSearch = res.data
      })
    },
    methods: {
      getSearchData(word, offset) {
        getSearchData(word, offset*30).then(res => {
          this.searchList.push(...res.result.songs)
          console.log(res.result.songs);
        })
      },

      back() {
        this.$router.go(-1)
      },
      clickHotItem(word) {
        this.searchWord = word
        this.offset = 0
        this.getSearchData(word, this.offset)
        this.isSearching = true
      },
      search() {
        this.offset = 0
        this.getSearchData(this.searchWord, this.offset)
        this.isSearching = true
      },
      pullingUp() {
        this.offset += 1
        this.getSearchData(this.searchWord, this.offset)
      }
    }
  }
</script>

<style scoped>
  .search {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: calc(100vh - 49px);
    background-color: #fff;
  }

  .back {
    position: absolute;
    width: 40px;
    left: 15px;
    top: 20px;
  }

  input {
    border: none;
    border-bottom: 1px solid #999;;
    outline: none;
    font-size: 18px;
    padding: 5px;
    position: absolute;
    top: 20px;
    left: 20%;
    width: 70%;
  }
</style>
