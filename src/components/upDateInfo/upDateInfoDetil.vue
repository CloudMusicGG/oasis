<template>
  <div class="updateWHD">
    <div class="backGround">
      <div class="headImgBox">
        <img :src="$store.state.userInfo.headUrl" alt="头像">
        <i class="iconfont">&#xe74d;</i>
      </div>
    </div>
    <div class="infoLists" @click="changeName">
      <span>昵称</span>
      {{$store.state.userInfo.username}}
      <i class="iconfont">&#xe77c;</i>
    </div>
    <div class="infoLists" @click="changeSig">
      <span>简介</span>
      {{$store.state.userInfo.usersig}}
      <i class="iconfont">&#xe77c;</i>
    </div>
    <div class="infoLists" @click="drawerSex = true">
      <span>性别</span>
      {{$store.state.userInfo.usersex}}
      <i class="iconfont">&#xe77c;</i>
    </div>
    <div class="infoLists" @click="drawerBir = true">
      <span>生日</span>
      {{$store.state.userInfo.userBir}}
      <i class="iconfont">&#xe77c;</i>
    </div>
    <div class="infoLists" @click="drawerCity = true">
      <span>城市</span>
      {{$store.state.userInfo.usercity}}
      <i class="iconfont">&#xe77c;</i>
    </div>
    <h6>注销账户</h6>
   <el-drawer
      class="whd"
      title="选择性别"
      :visible.sync="drawerSex"
      :direction="direction"
      :show-close = "false">
      <div style="text-align: center;line-height: .5rem;height: .5rem;border-bottom: 1px solid #72767b3b;width: 3.22rem;margin: 0 auto;" @click="changeSex('男')">男</div>
      <div style="text-align: center;line-height: .5rem;height: .5rem;width: 3.22rem;margin: 0 auto;"@click="changeSex('女')">女</div>
    </el-drawer>
    <el-drawer
      class="whd"
      title="选择生日"
      :visible.sync="drawerBir"
      :direction="direction"
      size="23%">
      <!-- 选择日期 -->
      <el-date-picker
        v-model="myBir"
        type="date"
        align="center"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-M-d"
        :picker-options="pickerOptions">
      </el-date-picker>
      <el-button type="primary" @click="changeBir">确定</el-button>
    </el-drawer>
    <el-drawer
      class="whd"
      title="选择城市"
      :visible.sync="drawerCity"
      :direction="direction"
      size="60%">
      <v-distpicker type="mobile"  hide-area @selected="onSelected" province="" city=""></v-distpicker>
      <el-button type="primary" @click="changeCity">确定</el-button>
    </el-drawer>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
export default {
  name: 'upDateInfoDetil',
  components:{
    VDistpicker
  },
  data () {
    return {
      drawerSex:false,
      drawerBir:false,
      drawerCity:false,
      direction: 'btt',


      myBir: '',
      pickerOptions: {
                disabledDate(time) {
                  return time.getTime() > Date.now();
                }
              },
      myCity:""


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
    changeName() {
      this.$prompt('4~20个字符，起个响亮的名字', '修改昵称', {
        confirmButtonText: '完成',
        cancelButtonText: '取消',
        inputPattern: /^.{4,20}$/,
        inputErrorMessage:"请输入合法昵称"
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '修改成功'
        });
        // ！！！！！！！！！！！！！！！！！！！！！确定执行回调！！！！
        let a = {username:value}
        this.$store.commit('updateUserInfo', a);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    changeSig() {
      this.$prompt('有意思的简介会吸引更多关注~', '修改简介', {
        confirmButtonText: '完成',
        cancelButtonText: '取消',
        inputPattern: /^.{0,40}$/,
        inputErrorMessage:"请输入合法简介"
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '修改成功'
        });
        // ！！！！！！！！！！！！！！！！！！！！！确定执行回调！！！！
        let a = {usersig:value}
        this.$store.commit('updateUserInfo', a);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    changeSex(sex){
      let a = {usersex:sex}
      this.$store.commit('updateUserInfo', a);
      this.drawerSex = false;
    },
    changeBir(){
      if(this.myBir){
        let a = {userBir:this.myBir}
        this.$store.commit('updateUserInfo', a);
      }
      this.drawerBir = false;
    },
    changeCity(){
      if(this.myCity&&this.myCity != this.$store.state.userInfo.usercity){
        let a = {usercity:this.myCity}
        this.$store.commit('updateUserInfo', a);
      }
      this.drawerCity = false;
    },
    //！！！！！！！！！！！选择城市后执行的函数
    onSelected(a){
      this.myCity = a.province.value+" "+a.city.value;
    }
  }

}
</script>

<style lang="scss">
.el-message-box{
  width: 3.22rem;

  .el-button--primary{
    background-color: #D0A874;
    border-color: #D0A874;
  }
  .el-input__inner:focus{
    border-color: #D0A874;
  }
}
.whd{
  height: 100%;
  .el-drawer__body{
    text-align: center;
    height: 90%;
  }
  .el-button--primary{
    color: #FFF;
    background-color: #D0A874;
    border-color: #D0A874;
  }
  .el-button--primary:hover{
    color: #FFF;
    background-color: #D0A874;
    border-color: #D0A874;
  }
  .el-date-picker {
      width: 100%;
  }
}
.distpicker-address-wrapper{
    height: 80%;
    .address-container{
      height: 75%;
    }
    .address-header ul li.active{
          border-bottom: #D0A874 solid 3px;
    }
}
.el-picker-panel__content{
   margin: 0 auto;
}
.el-picker-panel{
  width: 100%
}
</style>
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
