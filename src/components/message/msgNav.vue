<template>
  <div class="nav">

    <router-link to="/newFocus" class="navBox">
      <div>
        <i class="iconfont icon1">&#xe76a;</i>
        <span>新关注</span>
        <i class="iconfont icon2">&#xe77c;</i>
      </div>
    </router-link>

    <router-link to="/newPraises" class="navBox">
      <div>
        <i class="iconfont icon1">&#xe777;</i>
        <span>你被赞了</span>
        <i class="iconfont icon2">&#xe77c;</i>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'msgNav',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.nav{
  width: 100%;
  height: .72rem;

  .navBox{
    width: 3.22rem;
    height: 100%;
    margin: 0 auto;
    line-height: .72rem;
    font-weight: 800;

    .icon1,span{
      float: left;
    }
    .icon1{
      font-size: .2rem;
      margin-right: .16rem;
    }
    .icon2{
      float: right;
      font-size: .16rem;
    }
  }
}
</style>
