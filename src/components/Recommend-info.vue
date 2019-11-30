<!--
 * @Author: roselee
 * @Date: 2019-11-26 21:09:28
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-27 21:27:39
 * @Description: 
 -->
<template>
  <div class="itemInfo">
    <!-- <p class="itemInfo-title">
      <img src="" alt="">
    </p>-->
    <p class="authorHeader">
      <img :src="data.userHeader" alt />
    </p>
    <p class="username">{{data.username}}</p>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "RecommendInfo",
  props: ["uid"],
  data() {
    return {
      data: {}
    };
  },
  created() {
    console.log(this.uid);
    Axios.get("/user", { params: { uid: this.uid } }).then(Response => {
      this.data = Response.data[0];
      // console.log(this.data[0]);
    });
  }
};
</script>

<style lang="scss" scoped>
.itemInfo {
  margin: 0.1rem 0.05rem;
  // padding-top: .2rem;
  height: 0.25rem;
  width: 95%;
  // background: black;
  .authorHeader,
  img {
    height: 0.2rem;
    width: 0.2rem;
    border-radius: 50%;
    float: left;
    margin-top: 3px;
  }
  .username{
    float:left;
    line-height: .3rem;
    padding-left: .08rem;
    color:gray;
    font-size: .13rem;
  }
}
</style>