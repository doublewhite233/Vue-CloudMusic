<template>
  <div>
<!--    <play-list-item  :playlist="playlist[4]" :key="index"></play-list-item>-->
    <play-list-item v-for='(item,index) in playlist' :playlist="item" :key="index"></play-list-item>
  </div>
</template>

<script>
  import PlayListItem from "./PlayListItem";

  export default {
    name: "PlayList",
    components: {
      PlayListItem
    },
    props: {
      playlist: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
