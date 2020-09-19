<template>
  <div class="play-list-info">
    <img :src="playlistData.coverImgUrl" alt="" class="cover">
    <div class="desc">
      <div class="list-name">{{playlistData.name}}</div>
      <div class="user-info">
        <img :src="playlistData.creator.avatarUrl" alt="" class="avatar">
        <div style="margin-left: 10px">{{playlistData.creator.nickname}}</div>
      </div>
      <div class="list-desc">{{playlistData.description}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PlayListInfo",
    props: {
      playlistData: Object
    }
  }
</script>

<style scoped>
  .play-list-info {
    color: white;
    position: relative;
    margin-top: 80px;
    z-index: 10000;
    display: flex;
  }

  .cover {
    width: 35%;
    margin-left: 15px;
    border-radius: 10px;
  }

  .list-name {
    font-size: 19px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .desc {
    width: 55%;
    padding-left: 15px;
    font-size: 12px;
  }

  .user-info {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin: 10px 0 20px 0;
  }

  .user-info div {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .avatar {
    width: 30px;
    border-radius: 100px;
  }

  .list-desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
</style>
