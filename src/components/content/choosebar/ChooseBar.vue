<template>
  <div class="choose-bar">
    <div v-for="(item,index) in chooseItems" class="choose-item" @click="itemClick(index)">
      <span :class="{active: index===currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChooseBar",
    props: {
      chooseItems: {
        type: Array,
        default() {
          return ['广场','关注']
        }
      }
    },
    data() {
      return {
        currentIndex:0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('clickitem',index)
      }
    }
  }
</script>

<style scoped>
  .choose-bar {
    background-color: #fff;
    height: 40px;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .choose-item {
    flex: 1;
  }

  .active {
    color: #dc2c1f;
    font-weight: bold;
    border-bottom: #dc2c1f 2px solid;
  }

  span {
    padding: 0 10px 10px 10px;
  }
</style>
