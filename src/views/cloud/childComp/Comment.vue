<template>
  <div class="comment">
    <div class="comment-div">
      <div v-for="item in commentList" class="comment-item">
        <img :src="item.simpleResourceInfo.songCoverUrl" alt="" class="comment-img">
        <div class="comment-text">{{item.content}}</div>
        <div class="userInfo">
          <img :src="item.simpleUserInfo.avatar" alt="" class="user-avatar">
          <div class="user-name">{{item.simpleUserInfo.nickname}}</div>
          <div style="font-size: 12px">{{item.likedCount}}赞</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Comment",
    props: {
      commentList: Array
    }
  }
</script>

<style scoped>
  .comment-div {
    position:relative;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
  }

  .comment-item {
    width: 44%;
    border-radius: 10px;
    background-color: #eee;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .comment-img {
    width: 100%;
  }

  .comment-text {
    width: 90%;
    margin: 5px 10px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .userInfo {
    display: flex;
    align-items: center;
  }

  .user-avatar {
    width: 10%;
    border-radius: 100px;
    margin: 5px 10px 10px 10px;
  }

  .user-name {
    font-size: 12px;
    width: 40%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
