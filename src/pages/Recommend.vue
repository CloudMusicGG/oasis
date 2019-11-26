<!--
 * @Author: roselee
 * @Date: 2019-11-26 14:32:26
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-26 17:47:20
 * @Description: 这是推荐页面
 -->
<template>
  <div>
    <RecommendNav class="rec"></RecommendNav>
    <RecommendSearch></RecommendSearch>
  </div>
</template>

<script>
import RecommendNav from "@/components/Recommend-nav";
import RecommendSearch from "@/components/Recommend-search";
export default {
  name: "Recommend",
  data() {
    return {};
  },
  components: {
    RecommendNav,
    RecommendSearch
  }
};
</script>
<style lang="scss" scoped>
.rec {
  width: 100%;
  height: 0.4rem;
}
.el-tabs__item:hover,
.el-tabs__item .is-active {
  font-weight: bolder;
  font-size: .18rem;
  color:black;
}
</style>