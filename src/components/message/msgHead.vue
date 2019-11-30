<template>
  <div class="head">
    <div class="headBox">
      消 息<span><i class="iconfont">&#xe75a;</i>吐槽</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'msgHead',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.head{
  width: 100%;
  height: .75rem;
  box-shadow:0 2px 3px 0px #eee;

  .headBox{
    width: 3.22rem;
    margin: 0 auto;
    line-height: .9rem;
    font-size: .17rem;
    font-weight: 900;
    text-align: center;
    position: relative;

    span{
      position: absolute;
      top: 0;
      right:0;
      color: #4e4e4e;
      font-weight: 900;
      float: right;
      font-size: .14rem;

      .iconfont{
        font-size: .20rem;
      }
    }
  }
}
</style>
