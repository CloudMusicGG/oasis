<!--
 * @Author: roselee
 * @Date: 2019-11-26 17:46:19
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-27 22:15:10
 * @Description: 
 -->
<template>
  <div class="ContentBox">
    <div
      class="longBox"
      v-infinite-scroll
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <div class="itemBox" v-for="item in dataOne" :key="item.index">
        <router-link :to="'/Article/'+item.pid">
          <div class="imgBox">
            <img :src="item.pic" alt />
          </div>
          <p class="itemTitle">{{item.title}}</p>
        </router-link>
        <span class="likeNum">{{item.like}}</span>
        <span
          class="icon iconfont"
          :class='{"icon-xihuan":!isShowLike(item.pid),"icon-aixin1":isShowLike(item.pid)}'
          @click="likeIt(item.pid)"
        ></span>
        <RecommendInfo :uid="item.uid"></RecommendInfo>
      </div>
    </div>

    <!-- 这是第二列content -->
    <div
      class="longBox longBox_right"
      v-infinite-scroll
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <div class="itemBox" v-for="item in dataTwo" :key="item.index">
        <router-link :to="'/Article/'+item.pid">
          <div class="imgBox">
            <img :src="item.pic" alt />
          </div>
          <p class="itemTitle">{{item.title}}</p>
        </router-link>
        <span class="likeNum">{{item.like}}</span>
        <span
          class="icon iconfont"
          :class='{"icon-xihuan":!isShowLike(item.pid),"icon-aixin1":isShowLike(item.pid)}'
          @click="likeIt(item.pid)"
        ></span>
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
  props: ["type"],
  data() {
    return {
      count: 0,
      data: [],
      dataOne: [],
      dataTwo: [],
      busy: false,
      nowPid: []
    };
  },
  created() {
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
    likeIt(pid) {
      let index = this.nowPid.indexOf(pid);
      if (index < 0) {
        this.nowPid.push(pid);
      } else {
        console.log(index);
        this.nowPid.splice(index,1);
      }
      console.log(this.nowPid);
    },
    classify(data) {
      for (let i in data) {
        if (i % 2 == 0) {
          this.dataOne.push(data[i]);
        } else {
          this.dataTwo.push(data[i]);
        }
      }
    },
    isShowLike(pid) {
      if (this.nowPid.indexOf(pid) >= 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    RecommendInfo
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
@import url(../assets/font/iconfont.css);
.ContentBox {
  overflow: hidden;
}
.itemBox {
  position: relative;
  width: 100%;
  .imgBox {
    width: 98%;
    // height: 2rem;
    text-align: center;
    border-radius: 10px;
    margin: 0.1rem auto;
    margin-bottom: 0;
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
img {
  width: 100%;
  border-radius: 10px;
  display: block;
}
.itemTitle {
  text-align: left;
  max-height: 0.5rem;
  line-height: 0.25rem;
  overflow: hidden;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  text-overflow: -o-ellipsis-lastline;
  /* text-overflow: ellipsis; */
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-left: 8px;
  font-weight: bolder;
  font-size: 0.13rem;
  letter-spacing: 1px;
}
.icon-xihuan,
.icon-aixin1,
.likeNum {
  position: absolute;
  bottom: 0;
  right: 10px;
  color: gray;
}
.icon-aixin1 {
  color: red;
}
.likeNum {
  right: 30px;
  bottom: 2px;
  font-size: 0.12rem;
  color: gray;
}
</style>