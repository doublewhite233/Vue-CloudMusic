<template>
  <div class="comment-item">
    <div class="title">评论区</div>
    <div>
      <div v-for="item in commentList" class="list">
        <div class="like">{{item.likedCount}}赞</div>
        <div><img :src="item.user.avatarUrl" alt="" class="avatar"></div>
        <div style="width: 77%;">
          <div style="margin-top: 10px">{{item.user.nickname}}</div>
          <div style="font-size: 12px;padding-bottom: 10px;">{{item.time | showDate}}</div>
          <div style="font-size: 15px;color: #000;">{{item.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../../common/utils";

  export default {
    name: "CommentItem",
    props: {
      commentList: Array
    },
    filters: {
      showDate (value) {
        // 将时间戳转成Date对象
        let date = new Date(value);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .list {
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }

  .title {
    font-weight: bold;
    color: #000;
    padding-left: 15px;
    margin: 15px 0;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    margin: 5px 10px 5px 15px;
  }

  .like {
    position: absolute;
    right: 20px;
    margin-top: 10px;
    font-size: 12px;
  }
</style>
