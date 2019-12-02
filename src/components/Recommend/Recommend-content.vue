<!--
 * @Author: roselee
 * @Date: 2019-11-26 17:46:19
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-02 20:44:27
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-30 20:45:40
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-29 20:22:45
 * @Description: 
 -->
<template>
  <div class="ContentBox">
    {{v}}
    <mt-loadmore
      :bottom-method="loadBottom"
      :top-method="loadTop"
      :bottom-all-loaded="isLoadAll"
      ref="loadmore"
    >
      <!-- 这是第一列 -->
      <div
        class="longBox"
        v-infinite-scroll
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
        ref="element1"
      >
        <div class="itemBox" v-for="item in dataOne" :key="item.index">
          <router-link :to="'/Article/'+item.id">
            <div class="imgBox">
              <img :src="item.pic" alt />
            </div>
            <p class="itemTitle">{{item.title}}</p>
          </router-link>
          <span class="likeNum">{{likeNum(item.id)}}</span>
          <span
            class="icon iconfont"
            :class='{"icon-xihuan":!isShowLike(item.id),"icon-aixin1":isShowLike(item.id)}'
            @click="likeIt(item.id)"
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
        ref="element2"
      >
        <div class="itemBox" v-for="item in dataTwo" :key="item.index">
          <router-link :to="'/Article/'+item.id">
            <div class="imgBox">
              <img :src="item.pic" alt />
            </div>
            <p class="itemTitle">{{item.title}}</p>
          </router-link>
          <span class="likeNum">{{likeNum(item.id)}}</span>
          <span
            class="icon iconfont"
            :class='{"icon-xihuan":!isShowLike(item.id),"icon-aixin1":isShowLike(item.id)}'
            @click="likeIt(item.id)"
          ></span>
          <RecommendInfo :uid="item.uid"></RecommendInfo>
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import { InfiniteScroll } from "element-ui";
import Axios from "axios";
import RecommendInfo from "@/components/Recommend/Recommend-info";
import Vue from "vue";
import { Loadmore } from "mint-ui";

Vue.component("mt-Loadmore", Loadmore);
export default {
  name: "RecommendContent",
  props: ["type", "v","changeSearch"],
  data() {
    return {
      count: 0,
      data: [],
      alldata: [],
      dataOne: [],
      dataTwo: [],
      busy: false,
      nowPid: [],
      likePidAndNum: [],
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      isLoadAll: false,
      searchParam: ""
    };
  },
  created() {
    this.searchParam = this.type;
    if(this.v!=undefined && this.v != ""){
      this.searchParam = this.v;
    }
    Axios.get("/userInfo").then(Response => {
      this.nowPid = Response.data[0].likePostIds.split(",");
      this.$store.commit("changeNowPid", this.nowPid);
    });
    Axios.get("/postInfo", { params: { type_like: this.searchParam } }).then(
      Response => {
        this.alldata = Response.data;
        this.data = this.alldata.slice(0, 5);
        this.classify(this.data);
      }
    );
  },
  beforeMount(){

  },
  updated() {
    // console.log(this.v);
    this.nowPid = this.$store.state.nowPid;
    this.likePidAndNum = this.$store.state.likePidAndNum;
  },
  watch:{
    v:function(a,b){  
      console.log(a);
      Axios.get("/postInfo", { params: { type_like: a } }).then(
        Response => {
          console.log(Response.data);
          this.alldata = Response.data;
          this.data = this.alldata.slice(0, 5);
          this.classify(this.data);
        }
      );
    } 
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

    /**
     * @description: 这是下拉刷新的函数
     * @param {type}
     * @return:
     */

    loadTop() {
      this.data = this.alldata.slice(4, 10);
      this.$refs.loadmore.onTopLoaded();
      this.classify(this.data);
    },

    /**
     * @description: 这是上拉加载的函数
     * @param {type}
     * @return:
     */
    loadBottom() {
      // if(this.data==this.alldata){
      //   this.isLoadAll = true;
      // }
      // if (!this.isLoadAll) {
      this.data = this.alldata.slice(4, 10);
      this.$refs.loadmore.onBottomLoaded();
      this.classify(this.data);
      // this.$refs.loadmore.onTopLoaded();
      // }else{
      //   console.log("已加载全部");
      // }
    },
    /**
     * @description: 这是把页面上点赞数和pid对应提取，出来放在一个数组里的函数
     * @param {type}
     * @return:
     */
    likeNum(id) {
      for (let i = 0; i < this.likePidAndNum.length; i++) {
        if (this.likePidAndNum[i].id == id) {
          return this.likePidAndNum[i].like;
        }
      }
      return 0;
    },
    /**
     * @description: 这是点击喜欢会变成红心，并且数字加一，再次点击恢复初始状态的函数
     * @param {type}
     * @return:
     */
    likeIt(id) {
      let index = this.$store.state.nowPid.indexOf(id); //判断当前点赞的文章，在vuex的nowPid数组（用户已点赞数组）中是否存在
      this.$store.commit("changePidAndLike", { id: id, index: index });
    },
    /**
     * @description: 由于我把本页面布局分成了左右两部分，
     *                这是把从后台获取的数据分成两组的函数
     * @param {type}
     * @return:
     */
    classify(data) {
      for (let i in data) {
        if (i % 2 == 0) {
          this.dataOne.push(data[i]);
        } else {
          this.dataTwo.push(data[i]);
        }
      }
    },
    classifyBetter(data) {
      for (let i in data) {
        let height1 = this.$refs.element1.offsetHeight;
        let height2 = this.$refs.element2.offsetHeight;
        if (height1 < height2) {
          this.dataOne.push(data[i]);
        } else {
          this.dataTwo.push(data[i]);
        }
      }
    },
    /**
     * @description: 这是根据已经点过赞的数组中是否存在当前动态pid，来判断是否显示红心的函数
     * @param {type}
     * @return:
     */
    isShowLike(id) {
      if (this.nowPid.indexOf(id) >= 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    RecommendInfo
  },
  computed: {},
  beforeUpdate() {

  }
};
</script>

<style lang="scss" scoped>
@import url(../../assets/font/iconfont.css);
.ContentBox {
  // overflow: hidden;
  overflow-y: scroll;
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