<template>
  <div>
    <div class="backGround">
      <div class="headImgBox">
        <img :src="$store.state.userInfo.headUrl" alt="头像">
        <i class="iconfont">&#xe74d;</i>
      </div>
    </div>
    <div class="infoLists">
      <span>昵称</span>
      {{$store.state.userInfo.username}}
      <i class="iconfont">&#xe77c;</i>
    </div>
    <div class="infoLists">
      <span>简介</span>
      {{$store.state.userInfo.usersig}}
      <i class="iconfont">&#xe77c;</i>
    </div>
    <div class="infoLists">
      <span>性别</span>
      {{$store.state.userInfo.usersex}}
      <i class="iconfont">&#xe77c;</i>
    </div>
    <div class="infoLists">
      <span>生日</span>
      {{$store.state.userInfo.userBir}}
      <i class="iconfont">&#xe77c;</i>
    </div>
    <div class="infoLists">
      <span>城市</span>
      {{$store.state.userInfo.usercity}}
      <i class="iconfont">&#xe77c;</i>
    </div>
    <h6>注销账户</h6>
  </div>
</template>

<script>
export default {
  name: 'upDateInfoDetil',
  data () {
    return {

    }
  },
  computed:{
    useryear(){
      let useryear = this.$store.state.userInfo.userBir.split("-")[0];
      console.log(useryear);
      return useryear;
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
.backGround{
  width: 100%;
  height: 1.5rem;
  position: relative;
    background: url(../../assets/img/overlay.png);

  .headImgBox{
    width: .65rem;
    height: .65rem;
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom:0;
    margin: auto;

    i{
      position: absolute;
      bottom: 0;
      right:0;
      width: .24rem;
      height: .24rem;
      line-height: .24rem;
      text-align: center;
      font-size: .18rem;
      border-radius: 50%;
      background: #D0A874;
      display: block;
      color: white;
    }

    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
.infoLists{
  width: 3.22rem;
  height:.51rem;
  line-height: .51rem;
  border-bottom:1px solid #E8E8E8;
  margin: 0 auto;
  font-size: .11rem;
  color: #000;

  span{
    color: #545353;
    margin-right: .28rem;
  }
  i{
    float: right;
    font-size: .2rem;
    color: #B8B8B8;
  }
}
h6{
  padding-top: .25rem;
  font-weight: 100;
  text-align: center;
  text-decoration: underline;
}
</style>
