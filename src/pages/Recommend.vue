<!--
 * @Author: roselee
 * @Date: 2019-11-26 14:32:26
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-06 12:20:53
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-30 17:09:13
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-29 20:21:08
 * @Description: 这是推荐页面
 -->
<template>
  <div>
    <RecommendNav class="rec"></RecommendNav>
    <RecommendSearch></RecommendSearch>
  </div>
</template>

<script>
import Axios from 'axios';
import RecommendNav from "@/components/Recommend/Recommend-nav";
import RecommendSearch from "@/components/Recommend/Recommend-search";
export default {
  name: "Recommend",
  data() {
    return {
      data:[],
      likePidAndNum:[]
    };
  },
  components: {
    RecommendNav,
    RecommendSearch
  },
  created(){
      // 改变底部导航
      this.$store.commit('changeCheck', 1);
      
      Axios.get("api/postInfo").then(
      Response => {
        this.data = Response.data;
        //去到了所有的文章信息
        // 单独把id和like筛选出来，写成对象的格式，然后放在vuex的likePidAndNum数组里
        for(let i = 0 ; i < (this.data).length ; i++){
          this.likePidAndNum.push({id:this.data[i].id,like:this.data[i].like});
          let likePidAndNum = this.likePidAndNum;
          this.$store.commit('changelikePidAndNum',likePidAndNum);
        }
      }
    );
  }

};
</script>
<style lang="scss" scoped>
.el-tabs__item:hover,
.el-tabs__item .is-active {
  font-weight: bolder;
  font-size: .18rem;
  color:black;
}
// .rec {
//   width: 100%;
//   height: 0.4rem;
//   background: red;
// }
// .el-tabs__item:hover,
// .el-tabs__item .is-active {
//   font-weight: bolder;
//   font-size: .18rem;
//   color:black;
// }

</style>
