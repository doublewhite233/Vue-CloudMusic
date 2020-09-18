<template>
  <div class="profile-card">
    <div class="profile-card-mask" @click="closeCard"></div>
    <div class="card"></div>
  </div>
</template>

<script>
  export default {
    name: "ProfileCard",
    methods: {
      closeCard() {
        this.$emit('closecard')
      }
    }
  }
</script>

<style scoped>
  .profile-card-mask {
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100vh;
    z-index: 1001;
    position: fixed;
    text-align: center;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .card {
    background-color: #eee;
    position: absolute;
    width: 90%;
    height: 100vh;
    left: 0;
    z-index: 1002;
  }
</style>
