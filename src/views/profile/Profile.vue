<template>
  <div class="profile">
    <create-list @close="showCreate = false" v-show="showCreate" @create="createPlayList"></create-list>
    <div style="position:relative;">
      <div v-if="$store.state.userInfo===null">
        <img src="../../assets/img/profile/avatar.png" alt="" class="avatar">
        <span @click="toLoginPage" class="logintext">立即登录></span>
      </div>
      <div v-else>
        <img :src="$store.state.userInfo.profile.avatarUrl" alt="" class="avatar">
       <span class="logintext">{{$store.state.userInfo.profile.nickname}}</span>
      </div>
    </div>
    <my-like></my-like>
    <choose-bar :chooseItems="['创建歌单','收藏歌单']"></choose-bar>
    <my-play-list :playlist="createdlist" v-if="$store.state.userInfo===null"></my-play-list>
    <my-play-list :playlist="createdlist" :show-add="true" @opencreate="showCreate = true" v-else @delplaylist="delPlaylist"></my-play-list>
    <my-play-list title="收藏歌单" :playlist="collectlist" @delplaylist="delPlaylist"></my-play-list>
  </div>
</template>

<script>
  import {subscribe, createList} from "../../network/playlist";

  import ChooseBar from "../../components/content/choosebar/ChooseBar";

  import MyLike from "./childComp/MyLike";
  import MyPlayList from "./childComp/MyPlayList";
  import CreateList from "./childComp/CreateList";

  export default {
    name: "Profile",
    components: {
      ChooseBar,
      MyLike,
      MyPlayList,
      CreateList
    },
    data() {
      return {
        createdlist: [],
        collectlist: [],
        isRefresh: false,
        showCreate: false
      }
    },
    created() {
      this.addList()
    },
    updated() {
      if (this.isRefresh === true) {
        this.addList()
        this.isRefresh = false
      }
    },
    methods: {
      addList() {
        this.createdlist = []
        this.collectlist = []
        if (this.$store.state.userInfo !== null) {
          if (this.$store.state.userInfo.playlist.length > 1) {
            for (let i = 1; i < this.$store.state.userInfo.playlist.length; i++) {
              if (this.$store.state.userInfo.playlist[i].userId === this.$store.state.userInfo.profile.userId) {
                this.createdlist.push(this.$store.state.userInfo.playlist[i])
              }else {
                this.collectlist.push(this.$store.state.userInfo.playlist[i])
              }
            }
          }
        }
        console.log(this.createdlist);
      },
      toLoginPage() {
        this.$router.push('/login')
      },
      delPlaylist(id) {
        subscribe(id,2,this.$store.state.userInfo.cookie).then( res => {
          console.log(res);
          this.$store.commit('delSubscribe',id)
          this.$forceUpdate();
          this.isRefresh = true
        })
      },
      createPlayList(name) {
        createList(name,this.$store.state.userInfo.cookie).then(res=> {
          console.log(res);
          this.showCreate = false
          this.$store.commit('addSubscribe',res.playlist)
          this.$forceUpdate();
          this.isRefresh = true
        })
      }
    }
  }
</script>

<style scoped>
  .profile {
    position: absolute;
    top: 50px;
    width: 100%;
    height: calc(100vh - 109px);
    overflow: hidden;
    overflow-y: scroll;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }

  .avatar {
    height: 60px;
    width: 60px;
    margin: 20px 10px 20px 20px;
    border-radius: 50%;
  }

  .logintext {
    font-weight: bold;
    font-size: 18px;
    color: #000;
    position: absolute;
    width: 100px;
    top: 40px;
    left: 100px;
  }
</style>
