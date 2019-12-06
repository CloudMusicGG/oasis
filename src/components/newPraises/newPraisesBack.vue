<template>
  <div class="back">
    <div class="backBox">
      <i class="iconfont" @click="back">&#xe77d;</i>
      你被赞了
    </div>
  </div>
</template>

<script>
export default {
  name: 'msgHead',
  data () {
    return {

    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">
.back{
  width: 100%;
  height: .75rem;
  box-shadow:0 2px 3px 0px #eee6;

  .backBox{
    height: 100%;
    position: relative;
    width: 3.22rem;
    margin: 0 auto;
    line-height: 1rem;
    font-size: .17rem;
    font-weight: 900;
    text-align: center;


    .iconfont{
      font-size: .20rem;
      position: absolute;
      left: -.12rem;
    }
  }
}
</style>
