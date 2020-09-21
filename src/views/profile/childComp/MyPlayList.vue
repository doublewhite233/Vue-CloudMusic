<template>
  <div class="my-play-list">
    <div class="title">{{title}}</div>
    <img src="../../../assets/img/common/add.png" alt="" class="add" v-show="showAdd" @click="addCreate">
    <div class="content" v-if="$store.state.userInfo === null || playlist.length === 0">暂无收藏的歌单</div>
    <div v-else>
      <div v-for="item in playlist" class="playlist-item">
        <img :src="item.coverImgUrl" alt="" class="like-cover" @click="toPlaylist(item.id)">
        <div style="width: 65%;" @click="toPlaylist(item.id)">
          <div style="margin-top: 10px;">{{item.name}}</div>
          <div style="font-size: 14px;margin-top: 5px;">{{item.trackCount}}首</div>
        </div>
        <img src="../../../assets/img/common/del.png" alt="" class="del" @click="deletePlayList(item.id)">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyPlayList",
    props: {
      title: {
        type: String,
        default: '创建歌单'
      },
      playlist: Array,
      showAdd: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      toPlaylist(id) {
        this.$router.push('/playlist/'+id)
      },
      deletePlayList(id) {
        this.$emit('delplaylist',id)
      },
      addCreate() {
        this.$emit('opencreate')
      }
    }
  }
</script>

<style scoped>
  .my-play-list {
    width: 100%;
    padding-left: 5%;
    padding-bottom: 20px;
    border-bottom: 5px solid #eee;
  }

  .title {
    font-size: 14px;
    margin: 15px 0;
  }

  .content {
    font-size: 15px;
    width: 100%;
    text-align: center;
  }

  .playlist-item {
    display: flex;
    margin-top: 10px;
    align-items: center;
  }

  .like-cover {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    border-radius: 10px;
  }

  .del {
    width: 12px;
    height: 12px;
    margin-left: 5%;
  }

  .add {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 15px;
    margin-top: -35px;
  }
</style>
