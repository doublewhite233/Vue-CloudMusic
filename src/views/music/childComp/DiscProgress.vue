<template>
  <div class="progress">
    <progress :value="getValue" max="100"></progress>
  </div>
</template>

<script>
  export default {
    name: "Progress",
    computed: {
      getValue() {
        return this.$store.state.nowPlayingMusic.percent
      }
    }
  }
</script>

<style scoped>
  .progress {
    position: absolute;
    bottom: 110px;
    width: 100%;
  }

  progress {
    width: 90%;
    height: 5px;
    margin-left: 5%;
  }
</style>
