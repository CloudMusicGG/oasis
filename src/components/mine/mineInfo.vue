<template>
  <div class="box">
    <div class="headImg">
      <img :src="$store.state.userInfo.headUrl" alt="头像">
    </div>
    <div class="nameBox">
      <h3>{{$store.state.userInfo.username}}</h3>
    </div>
    <div class="idBox">
      <p>绿洲号：{{$store.state.userInfo.id}}</p>
    </div>
    <div class="sigBox">
      <p>{{$store.state.userInfo.usersig}}</p>
    </div>
    <div class="infoBox">
      <p>
        <span><i :style="{color:sexColor}">{{sexImg}}</i>{{ageYear}}</span>
        <span>{{userconstellation}}</span>
        <span @click="upDateInfo"><i class="iconfont" style="">&#xe73e;</i>编辑资料</span>
      </p>
    </div>
    <div class="otherBox">
      <p>
        <span class="num">{{postNum}}</span>
        <span class="numType">动态</span>
      </p>
      <p>
        <span class="num">{{$store.state.userInfo.fansNum}}</span>
        <span class="numType">粉丝</span>
      </p>
      <p>
        <span class="num">{{$store.state.userInfo.likeNum}}</span>
        <span class="numType">关注</span>
      </p>
      <div class="QR">
        <i class="iconfont">&#xe764;</i>
        <span>▶</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mineInfo',
  data () {
    return {

    }
  },
  computed:{
    postNum(){
      if(this.$store.state.userInfo.posts){
        let postsArr = this.$store.state.userInfo.posts.split(",");
        return postsArr.length;
      }
    },
    ageYear(){
      if(this.$store.state.userInfo.userBir){
        let useryear = this.$store.state.userInfo.userBir.split("-")[0];
        let y=new Date().getFullYear();
        if(useryear>2015){
          return "15后";
        }else if(useryear>=2010){
          return "10后";
        }else if(useryear>=2005){
          return "05后";
        }else if(useryear>=2000){
          return "00后";
        }else if(useryear>=1995){
          return "95后";
        }else if(useryear>=1990){
          return "90后";
        }else if(useryear>=1985){
          return "85后";
        }else if(useryear>=1980){
          return "80后";
        }else if(useryear>=1970){
          return "70后";
        }else if(useryear>=1960){
          return "60后";
        }else{
          return "老古董";
        }
      }
    },
    sexImg(){
      if(this.$store.state.userInfo.usersex == "男"){
        return "♂";
      }else if(this.$store.state.userInfo.usersex == "女"){
        return "♀";
      }else{
        return "◐";
      }
    },
    sexColor(){
      if(this.$store.state.userInfo.usersex == "男"){
        return "#5BC9F5";
      }else if(this.$store.state.userInfo.usersex == "女"){
        return "#FF9FC5";
      }else{
        return "#59ef80";
      }
    },
    userconstellation(){
      if(this.$store.state.userInfo.userBir){
        let usermonth = this.$store.state.userInfo.userBir.split("-")[1];
        let userday = this.$store.state.userInfo.userBir.split("-")[2];
        if(this.$store.state.userInfo.userBir.month==1){
          return userday<=19?"摩羯座":"水瓶座";
        }else if( usermonth==2){
          return userday<=19?"水瓶座":"双鱼座";
        }else if( usermonth==3){
          return userday<=20?"双鱼座":"白羊座";
        }else if( usermonth==4){
          return userday<=19?"白羊座":"金牛座";
        }else if( usermonth==5){
          return userday<=20?"金牛座":"双子座";
        }else if( usermonth==6){
          return userday<=21?"双子座":"巨蟹座";
        }else if( usermonth==7){
          return userday<=22?"巨蟹座":"狮子座";
        }else if( usermonth==8){
          return userday<=22?"狮子座":"处女座";
        }else if( usermonth==9){
          return userday<=22?"处女座":"天秤座";
        }else if( usermonth==10){
          return this.$store.state.userInfo.userBir.useruserday<=23?"天秤座":"天蝎座";
        }else if( usermonth==11){
          return userday<=22?"天蝎座":"射手座";
        }else if( usermonth==12){
          return userday<=21?"射手座":"摩羯座";
        }else{
          return "保密";
        }
      }
    }

  },
  created(){

  },
  methods:{
    upDateInfo(){
      this.$router.push({ path: "/upDateInfo"});
      this.$router.go(1);
    }
  }
}
</script>

<style scoped lang="scss">
.box{
  position: relative;
  border-bottom: 1px solid #E9E9E9;
  padding-bottom: .10rem;
  div{
    width: 3.22rem;
    margin:0 auto;
  }
  .headImg{
    height: .45rem;

    img{
      width:.72rem;
      height:.72rem;
      position: absolute;
      top: -.36rem;
      left: .28rem;
      border-radius: 50%;
      box-shadow:0px 15px 20px #eee;
    }
  }

  .nameBox{
    h3{
      font-size: .21rem;
    }
  }
  .idBox{
    margin-top: .09rem;
    p{
      font-size: .11rem;
      color:#adadad;
    }
  }
  .sigBox{
    margin-top: .05rem;
    p{
      font-size: .12rem;
      color:#6B6B6B;
    }
  }
  .infoBox{
    margin-top: .05rem;
    p{
      font-size: .12rem;
      color:#6B6B6B;

      span{
        border-radius: .05rem;
        padding: 0 .07rem;
        height: .22rem;
        line-height: .22rem;
        display: inline-block;
        background: #EEEEEE;
      }
      i{
        font-style: normal;
        font-size: .12rem;
        background: #fff;
        border-radius: 50%;
        width: .17rem;
        height: .17rem;
        line-height: .17rem;
        display: inline-block;
        text-align: center;
        font-weight: 800;
      }
    }
  }
  .otherBox{
    margin-top: .40rem;
    overflow: hidden;
    p{
      float: left;
      margin-right: .25rem;

      span{
        display: block;
      }
      .num{
        color: #000000;
        font-size: .14rem;
        font-weight: 800;
      }
      .numType{
        color: #A4A4A4;
        font-size: .11rem;
      }
    }
    .QR{
      width: .35rem;
      height: .35rem;
      float: right;

      i{
        line-height: .38rem;
        font-size: .20rem;
        vertical-align: middle;
      }
      span{
        font-size: 12px;
        vertical-align: middle;
      }
    }
  }
}
</style>
