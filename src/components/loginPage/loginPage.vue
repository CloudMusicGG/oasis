<!--
 * @Author: roselee
 * @Date: 2019-12-04 16:23:14
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-06 12:20:11
 * @Description: 
 -->
<template>
  <div class="SignIn">
    <div class="banner">
      <img src="../../assets/img/banner.jpg" alt />
      <i class="icon iconfont Return" @click="Return()">&#xe77d;</i>
    </div>
    <div class="SignIn_w">
      <ul class="SignIn_ul">
        <li>
          <label for>
            <span class="labernum">+86</span>
            <i class="icon iconfont lignico">&#xe754;</i>
          </label>
          <input type="text" placeholder="请输入手机号" v-model="teleNum" />
          <!-- <span>{{teleNum}}</span> -->
        </li>
        <li class="phone">
          <input type="text" placeholder="请输入验证码" v-model="userInputCode" />
          <span class="Verification" @click="createTestCode">获取验证码</span>
        </li>
      </ul>
      <div class="sign" @click="LoginNow">登录</div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "loginPage",
  data() {
    return {
      teleNum: "",
      testCode: "",
      userInputCode: ""
    };
  },
  methods: {
    Return() {
      this.$router.go(-1);
    },
    createTestCode() {
      this.testCode = "";
      for (let i = 0; i < 4; i++) {
        let a = parseInt(Math.random() * 10);
        this.testCode += a;
      }

      let data ="account=C24135612&password=0d6c0a124a6479f641208112f44f80b7&mobile="+this.teleNum+"&content=您的验证码是："+this.testCode+"。请不要把验证码泄露给其他人。";
      Axios.post(
        "/tele/sms.php?method=Submit",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
        .then(Response => {
          // console.log(Response.data);
        })
        .then(err => {
          // console.log(err);
        });

      // console.log(this.testCode);
    },
    LoginNow() {
      if (!this.testCode) {
        return;
      } else if (this.testCode != this.userInputCode) {
        return;
      } else {
        localStorage.setItem("userTele", this.teleNum);
        this.$router.push("/homepage");
        this.$router.go(1);
      }
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
@import url(../../assets/font/iconfont.css);
.SignIn {
  width: 100%;
  height: 100%;
  z-index: 999;
  position: relative;
  background: rgb(253, 253, 253);
  img {
    width: 100%;
    height: 2.24rem;
    position: relative;
  }
  .SignIn_w {
    width: 3.22rem;
    height: 4rem;
    margin: auto;
    .SignIn_ul li {
      width: 3.22rem;
      height: 0.48rem;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      margin-bottom: 0.37rem;
      .labernum {
        font-size: 0.2rem;
        color: #000;
      }
      .lignico {
        font-size: 0.18rem;
      }
      input {
        background: none;
        border: transparent;
        width: 2rem;
        height: 0.26rem;
        padding-left: 0.04rem;
        outline: medium;
      }
    }
  }
}
.phone {
  display: flex;
  justify-content: space-between;
}
.Verification {
  color: #ccc;
}
.sign {
  width: 2.42rem;
  height: 0.4rem;
  background: pink;
  margin: auto;
  text-align: center;
  line-height: 0.4rem;
  border-radius: 0.18rem;
  background: #b9b9b9;
  font-size: 0.18rem;
  color: #d4d4d4;
}
.Return {
  font-size: 0.27rem;
  position: absolute;
  top: 0.08rem;
  margin-left: 0.08rem;
}
</style>>