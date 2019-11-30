<!--
 * @Author: rosalee
 * @Date: 2019-11-14 19:40:10
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-30 16:40:56
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-29 15:51:41
 * @Description: 这是推荐页面的tab导航栏
 -->
<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="nav">
    <el-tab-pane
      class="nav_top"
      v-for="(tab,index) in tabs"
      :label="tab.label"
      :name="tab.name"
      :tabindex="{index}"
      :key="index"
    >
      <RecommendContent :type="tab.label" id="scrollContent"></RecommendContent>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import { Tabs } from "element-ui";
import RecommendContent from "@/components/Recommend-content";
export default {
  name: "RecommendNav",
  data() {
    return {
      activeName: "0",
      tabs: [
        {
          label: "推荐",
          name: "0"
        },
        {
          label: "明星",
          name: "1"
        },
        {
          label: "时尚",
          name: "2"
        },
        {
          label: "颜值",
          name: "3"
        },
        {
          label: "旅行",
          name: "4"
        },
        {
          label: "美妆",
          name: "5"
        },
        {
          label: "美食",
          name: "6"
        },
        {
          label: "摄影",
          name: "7"
        },
        {
          label: "二次元",
          name: "8"
        },
        {
          label: "运动",
          name: "9"
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
      // console.log(event.target);
      this.currType = event.target.tabindex;
      let eventdom = event.target;
      eventdom.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center"
      });
    }
  },
  components: {
    RecommendContent
  }
};
</script>
<style lang="scss" scoped>
.el-tab-pane {
  padding-left: 0.05rem;
  padding-right: 0.05rem;
  width: 100%;
  box-sizing: border-box;
  margin-top: 1rem;
}
.el-tabs__nav-scroll {
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}
.el-tabs__item {
  &[tabindex="0"] {
    font-weight: bolder;
    font-size: 0.18rem;
    color: black;
  }
}
.el-tabs__item:hover,
.el-tabs__item .is-active {
  font-weight: bolder;
  font-size: 0.18rem;
  color: black;
}
.el-tabs__nav-wrap::after {
  //去除滚动条，设置滚动条的背景颜色为透明
  background-color: transparent;
}
.el-tabs__nav-prev,
.el-tabs__nav-next {
  display: none;
}
.el-tabs__nav-wrap.is-scrollable {
  padding-left: 15px;
  padding-right: 0px;
  position: fixed;
  top: 0;
}
.el-tabs__nav-wrap {
  width: 100%;
}
.el-tabs__active-bar {
  height: 5px;
  border-radius: 5px;
}
.el-tab-pane .el-tabs__item.is-active,
.el-tabs__item:hover {
  color: black;
  font-weight: bolder;
}
.el-tabs__header {
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  padding-left: 10px;
  z-index: 10;
  &:after {
    content: "";
    width: 0.3rem;
    height: 0.6rem;
    display: inline-block;
    position: absolute;
    right: 0px;
    top: -10px;
    z-index: 2;
    background: linear-gradient(
      right,
      rgb(255, 255, 255),
      rgba(255, 255, 255, 0)
    );
  }
}
.is-top:last-child {
  margin-right: 20px;
  margin-bottom: 1px;
}
.el-tabs__nav-scroll {
  overflow-x: auto;
  padding: 0;
}
#scrollContent {
  height: 100%;
  overflow-y: scroll;
}
</style>