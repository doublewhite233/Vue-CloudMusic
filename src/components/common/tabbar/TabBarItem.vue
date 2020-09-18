<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :class="{active: isActive}"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
  }

  .active {
    color: var(--color-high-text);
    font-size: 18px;
    font-weight: bold;
  }
</style>
