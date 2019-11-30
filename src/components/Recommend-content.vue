<!--
 * @Author: roselee
 * @Date: 2019-11-26 17:46:19
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-30 01:08:45
 * @Description: 
 -->
<template>
  <div class="ContentBox">
    <div
      class="longBox"
      v-infinite-scroll=""
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <div class="itemBox" v-for="item in dataOne" :key="item.index">
        <div class="imgBox">
          <img :src="item.pic" alt="">
        </div>
        <p class="itemTitle">{{item.title}}</p>
        <RecommendInfo :uid="item.uid"></RecommendInfo>
      </div>
    </div>
    
    <!-- 这是第二列content -->
    <div
      class="longBox longBox_right"
      v-infinite-scroll=""
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <div class="itemBox" v-for="item in dataTwo" :key="item.index">
        <div class="imgBox">
          <img :src="item.pic" alt="">
        </div>
        <p class="itemTitle">{{item.title}}</p>
        <RecommendInfo :uid="item.uid"></RecommendInfo>
      </div>
    </div>
  </div>
</template>

<script>
import { InfiniteScroll } from "element-ui";
import Axios from "axios";
import RecommendInfo from "@/components/Recommend-info";
export default {
  name: "RecommendContent",
  props: ["type","b"],
  data() {
    return {
      count: 0,
      data: [],
      dataOne:[],
      dataTwo:[],
      busy: false
    };
  },
  created() {
    console.log(this.b)
    Axios.get("/postInfo", { params: { type_like: this.type } }).then(
      Response => {
        this.data = Response.data;
        this.classify(this.data);
        // console.log(this.type);
        // console.log(Response.data);
      }
    );
  },
  methods: {
    // loadMore: function() {
    //   setTimeout(() => {
    //     // if (this.data.length >= 200) {
    //     //   this.busy = false;
    //     // }
    //     for (var i = 0, j = 10; i < j; i++) {
    //       this.data.push({ name: this.count++ });
    //     }
    //     // console.log(this.data);
    //     this.busy = false;
    //   }, 1000);
    // }
    
    classify(data){
      for(let i in data){
        if(i%2==0){
          this.dataOne.push(data[i]);
        }else{
          this.dataTwo.push(data[i]);
        }
      }
    } 
  },
  components:{
    RecommendInfo
  }
};
</script>

<style lang="scss" scoped>
.ContentBox {
  overflow: hidden;
}
.itemBox {
  width: 100%;
  .imgBox {
    width: 95%;
    // height: 2rem;
    background: pink;
    text-align: center;
    border-radius: 10px;
    margin: 0.1rem 0.05rem;
  }
}

.longBox,
.longBox_right {
  width: 50%;
  float: left;
  text-align: center;
  box-sizing: border-box;
}
.longBox_right {
  float: right;
}
img{
  width:100%;
  border-radius: 10px;
  display: block;
}
.itemTitle{
  text-align: left;
  line-height: .05rem;
  padding-left: 8px;
  font-weight: bolder;
}
</style>