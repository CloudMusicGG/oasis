<template>
  <div class="head">
    <div class="bgBox">
    </div>
    <div class="headBox">
      <div class="top">
        <i class="iconfont">&#xe773;</i>
        <i class="iconfont">&#xe75c;</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mineHead',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.head{
  width: 100%;
  height: 1.3rem;
  background: url(../../assets/img/mineBg.jpg) center;
  background-position: 50% 5%;
  position: relative;

  .bgBox{
    width:100%;
    height: 100%;
    background: url(../../assets/img/overlay.png);
    position: absolute;
    left: 0;
    top: 0;
    opacity: .08;
  }

  .headBox{
    width: 3.22rem;
    height: .75rem;
    margin: 0 auto;
    font-weight: 900;

    .top{
      float: right;
      height: 100%;
      line-height: 1.3rem;

      .iconfont{
        font-size: .23rem;
        color: #4d4d4d;
        margin-left: .1rem;
      }
    }
  }
}
</style>
