<template>
  <div class="boxWhd">
     <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="first">
          <span slot="label"><i class="iconfont">&#xe733;</i></span>
          <RecommendContent></RecommendContent>
        </el-tab-pane>
        <el-tab-pane name="second">
          <span slot="label"><i class="iconfont">&#xe73c;</i></span>
          <RecommendContent></RecommendContent>
        </el-tab-pane>
       <!-- <el-tab-pane name="third">
          <span slot="label">@</span>
          <RecommendContent></RecommendContent>
        </el-tab-pane> -->
      </el-tabs>
  </div>
</template>

<script>
import RecommendContent from "@/components/Recommend/Recommend-content.vue"
export default {
  data() {
    return {
      activeName: 'first'
    };
  },
  components:{
    RecommendContent
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="scss">
.boxWhd{
  .el-tabs{
    width: 100%;
    .el-tabs__header{
      width: 100%;
      .el-tabs__nav-wrap{
        width: 100%;
        .el-tabs__nav-scroll{
          width: 100%;
          .el-tabs__nav{
            width: 100%;
            .el-tabs__item{
              height: .45rem;
              font-size: .25rem;
              margin: 0;
              padding: 0;
              width: 50%;
              text-align: center;
              color: #A5A5A5;
              line-height: .45rem;
              i{
                font-size: .25rem;
              }
            }
            .el-tabs__item.is-active{
              color: #000;
            }
          }
        }
      }
    }
    .el-tabs__nav-wrap::after{
      background-color:transparent;
    }
  }
}
.el-tabs__active-bar{
  background-color: #D0A874;
}
.el-tabs__item.is-active{
  color: #D0A874;
}
</style>
<style scoped lang="scss">

</style>
