<template>
  <div class="find-swiper">
    <swiper :options="swiperOption" class="swiper-container" >
      <!-- slides -->
      <swiper-slide class="swiper-item" v-for='(item, index) in banner' :key='item.bannerId'>
        <a :href="item.url">
          <img class='swiper-img' :src='item.pic' alt=""/>
        </a>
        <div class="type-title" :style="{'background-color': item.titleColor}">{{item.typeTitle}}</div>
      </swiper-slide>
      <!-- Optional controls ,显示小点-->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide, directive } from "vue-awesome-swiper";
  import {getMusic, getMusicUrl} from "../../../network/music";

  export default {
    name: "FindSwiper",
    props: {
      banner:{
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        swiperOption: {
          // 参数选项,显示小点
          pagination: '.swiper-pagination',
          //循环
          loop: true,
          //每张播放时长3秒，自动播放
          autoplay: 2000,
          //滑动速度
          speed: 1000,
          // delay:1000
          autoplayDisableOnInteraction: false
        }
      }
    }
  }
</script>

<style scoped>
  .find-swiper {
    width: 90%;
    margin-left: 5%;
  }

  .swiper-img {
    width: 100%;
    border-radius: 10px;
  }

  .swiper-slide {
    position: relative;
  }

  .type-title {
    position: absolute;
    right: 0;
    bottom: 4px;
    font-size: 12px;
    color: #fff;
    opacity: 0.7;
    padding: 5px 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
  }
</style>

<style>
  .swiper-pagination-bullet-active {
    background: #da3136;
  }
</style>
