<!--
 * @Author: rosalee
 * @Date: 2019-11-14 19:40:10
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-30 19:25:58
 * @Description: 这是搜素页的tab导航栏
 -->
<template>
    <div class="navigation">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="nav">
            <el-tab-pane
            v-for="(tab,index) in tabs"
            :label="tab.label"
            :name="tab.name"
            :tabindex="{index}"
            :key="index" ref= "num"
            >
            <!-- <Recommend :type="tab.label" class="Recommend"></Recommend> -->
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import { Tabs } from "element-ui";
// import Recommend from "@/components/Recommend-content";
export default {
  name: "Navigation",
  data() {
    return {
      cc:'num',
      activeName: "0",
      tabs: [
        {
          label: "全部",
          name: "0"
        },
        {
          label: "用户",
          name: "1"
        },
        {
          label: "动态",
          name: "2"
        },
        {
          label: "主题",
          name: "3"
        }
      ]
    };
  },
  methods: {
      Obtain(){
        
    },
    handleClick(tab, event) {
      console.log("nn")
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
    // Recommend
  }
};
</script>
<style lang="scss" scoped>
.navigation {
  width: 4rem;
}
.nav {
  font-size: 0.15rem;
  position: fixed;
  top: .46rem;
  padding-left: .23rem;
  width: 100%;
  height: .4rem;
  background: #fff;
  border-bottom: 1px solid rgb(233, 232, 232);
  z-index: 999;
}
.el-tab-pane {
  padding-left: 0.05rem;
  padding-right: 0.05rem;
  width: 100%;
  box-sizing: border-box;
  margin-top: 0.5rem;
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
}
.el-tabs__nav-wrap {
  width: 100%;
}
.el-tabs__active-bar {
  height: 5px;
  border-radius: 5px;
}
.el-tabs__item.is-active,
.el-tabs__item:hover {
  color: black;
  font-weight: bolder;
}
.el-tabs__header {
  position: relative;
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
}
.el-tabs__nav-scroll {
  overflow-x: auto;
  padding: 0;
}
</style>