<template>
  <div class="create">
    <div class="mask"></div>
    <div class="content">
      <div style="font-size: 18px; color: #000; font-weight: bold">新建歌单</div>
      <input type="text" placeholder="请输入歌单标题" v-model="listName">
      <div class="num">{{listName.length}}/40</div>
      <button :class="{disabled:isAble}" :disabled="isAble" @click="create">提交</button>
      <button @click="close">取消</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CreateList",
    data() {
      return {
        listName: ''
      }
    },
    computed: {
      isAble() {
        if (this.listName.length===0 || this.listName.length > 40) {
          return true
        }
        return false
      }
    },
    methods: {
      create() {
        this.$emit('create',this.listName)
      },
      close() {
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>
  .create {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9999;
  }

  .mask {
    width: 100%;
    height: calc(100vh);
    background-color: rgba(0,0,0,0.5);
  }

  .content {
    width: 80%;
    margin-left: 10%;
    height: 200px;
    background-color: #fff;
    position: absolute;
    top: 30%;
    border-radius: 10px;
    padding: 20px 15px;
  }

  input {
    padding: 10px 5px;
    border: none;
    border-bottom: 1px solid #666;
    margin-top: 20px;
    width: 100%;
    outline: none;
  }

  button {
    float: right;
    margin-top: 50px;
    margin-left: 50px;
    margin-right: -20px;
    background-color: #fff;
    border: none;
    outline: none;
    color: #dc2c1f;
    font-weight: bold;
  }

  .num {
    font-size: 14px;
    float: right;
    margin-top: 10px;
  }

  .disabled {
    color: #666666;
  }
</style>
