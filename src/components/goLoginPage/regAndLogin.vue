<!--
 * @Author: roselee
 * @Date: 2019-12-04 10:36:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-05 10:09:33
 * @Description: 
 -->
<template>
  <div class="regAndLoginBox">
    <div style="position:relative;top:0;height:100%;">
      <div class="coverDiv"></div>
      <div class="regAndLoginBox-title">
        <h1>绿洲</h1>
        <h4>分享美好生活</h4>
      </div>
      <swiper :options="swiperOption" ref="mySwiper" class="swiperBackground">
        <!-- slides -->
        <swiper-slide style="background:white;height:100%;">
          <img style="width:100%;height:100%;" src="../../assets/img/bg01.jpg" alt />
        </swiper-slide>
        <swiper-slide style="background:white;height:100%;">
          <img style="width:100%;height:100%;" src="../../assets/img/bg02.jpg" alt />
        </swiper-slide>
        <swiper-slide style="background:white;height:100%;">
          <img style="width:100%;height:100%;" src="../../assets/img/bg03.jpeg" alt />
        </swiper-slide>
        <swiper-slide style="background:white;height:100%;">
          <img style="width:100%;height:100%;" src="../../assets/img/bg04.jpg" alt />
        </swiper-slide>
        <!-- Optional controls -->
      </swiper>
      <router-link class="regAndLoginBox-btn" to="/loginPage">手机登陆注册</router-link>
      <div class="iconBox">
        <span class="icon iconfont icon-xiangmulan-weixinhao"></span>
        <span class="icon iconfont icon-lujing"></span>
        <span class="icon iconfont icon-qq"></span>
        <h5>
          注册/登录表示已同意&nbsp;
          <router-link to class="userXieYi">用户协议</router-link>&nbsp;&nbsp;
          <router-link to>私密条款</router-link>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "regAndLogin",
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        observer: true,
        effect: "fade",
        notNextTick: true,
        loop: true,
        autoplay: true,
        speed: 2000,
        direction: "horizontal",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        debugger: true,
        crossFade: true
      }
    };
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>

<style scoped lang="scss">
@import url(../../assets/font/iconfont.css);
.regAndLoginBox {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  width: 100%;
  background: white;
  .coverDiv {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    z-index: 200;
  }
  .swiperBackground {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    swiper-slide {
      width: 100%;
      height: 100%;
    }
  }
  .regAndLoginBox-title {
    position: absolute;
    top: 14%;
    left: 12%;
    width: 75%;
    height: 1rem;
    z-index: 200;
    text-align: center;
    color: white;
    h1 {
      font-weight: normal;
      font-size: 0.5rem;
      letter-spacing: 0.4rem;
      text-indent: 0.4rem;
    }
    h4 {
      font-weight: normal;
      font-size: 0.17rem;
      letter-spacing: 0.07rem;
      text-indent: 0.07rem;
    }
  }
  .regAndLoginBox-btn {
    height: 0.45rem;
    width: 70%;
    text-align: center;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: 30%;
    left: 50%;
    border-radius: 1rem;
    border: 0;
    z-index: 300;
    font-size: 0.16rem;
    letter-spacing: 0.02rem;
    margin-left: -35%;
    line-height: 0.45rem;
  }
  .iconBox {
    position: absolute;
    width: 100%;
    bottom: 18%;
    height: 20%;
    z-index: 200;
    font-size: 1rem;
    color: white;
    text-align: center;
    span {
      font-size: 0.2rem;
      padding: 0.15rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      border: 0.1px solid white;
    }
    h5 {
      font-size: 0.12rem;
      display: inline-block;
      position: relative;
      bottom: 0.3rem;
      font-weight: normal;
      a {
        display: inline-block;
        color: #ddc17b;
      }
    }
    .userXieYi {
      position: relative;
      &:after {
        content: "";
        width: 1px;
        height: 0.12rem;
        background: #ddc17b;
        position: absolute;
        top: 3px;
        left: .54rem;
        z-index: 300;
      }
    }
  }
}
</style>