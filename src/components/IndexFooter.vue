<!--
 * @Author: your name
 * @Date: 2019-12-04 21:39:47
 * @LastEditTime: 2019-12-05 10:37:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eshopappe:\三阶段\第三阶段\workspace\oasis\src\components\IndexFooter.vue
 -->
<template>
  <div class="Foot">
    <!-- 首页 -->
    <router-link to="/homepage">
      <li v-show="!$store.state.FootShow[0]"><i class="iconfont unCheckI">&#xe8b9;</i></li>
      <li v-show="$store.state.FootShow[0]"><i class="iconfont checkI">&#xe8c6;</i></li>
    </router-link>
    <!-- 搜索 -->
    <router-link to="/Recommend">
      <li v-show="!$store.state.FootShow[1]"><i class="iconfont unCheckI">&#xe60b;</i></li>
      <li v-show="$store.state.FootShow[1]"><i class="iconfont checkI">&#xe60d;</i></li>
    </router-link>
    <!-- 新建 -->
    <router-link to="/post">
      <li class=""><i class="iconfont CreatPost">&#xe752;</i></li>
    </router-link>
    <!-- 消息 -->
    <router-link to="/message">
      <li v-show="!$store.state.FootShow[2]"><i class="iconfont unCheckI">&#xe62b;</i></li>
      <li v-show="$store.state.FootShow[2]"><i class="iconfont checkI">&#xe62c;</i></li>
    </router-link>
    <!-- 我的 -->
    <router-link to="/mine">
      <li v-show="!$store.state.FootShow[3]"><i class="iconfont unCheckI">&#xe660;</i></li>
      <li v-show="$store.state.FootShow[3]"><i class="iconfont checkI">&#xe65f;</i></li>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'IndexFooter',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.Foot{
  width:100%;
  height: .47rem;
  display: flex;
  justify-content: space-around;
  line-height: .47rem;
  background: white;
  z-index: 2;
  i{
    font-size: .23rem;
  }
  .CreatPost{
    font-size: .38rem;
    color:#000;
  }

  .checkI{
    color:#000;
  }
  .unCheckI{
    color:#A5A5A5;
  }
}
</style>
