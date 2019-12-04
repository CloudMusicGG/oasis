<!--
<<<<<<< HEAD
 * @Author: roselee
 * @Date: 2019-12-02 17:21:46
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-04 18:31:20
 * @Description: 
 -->
<template>
  <div id="app">
    <router-view />
    <!-- <regAndLogin v-if="isLogin"></regAndLogin> -->
    <IndexFooter class="Foot"></IndexFooter>
=======
 * @Author: your name
 * @Date: 2019-11-26 11:44:48
 * @LastEditTime: 2019-12-04 15:23:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day23e:\三阶段\第三阶段\workspace\oasis\src\App.vue
 -->
<template>
  <div id="app">
    <router-view/>
>>>>>>> liberty
  </div>
</template>

<script>
import axios from "axios";
import IndexFooter from "@/components/IndexFooter.vue";
import regAndLogin from "@/components/goLoginPage/regAndLogin";
export default {
  name: "App",
  data() {
    return {
      isLogin: true
    };
  },
  created() {
    if (this.$store.state.isLogin==false) {
      this.isLogin = true;
      console.log(this.$store.state.isLogin);
    } else {
      this.isLogin = false;
    }
    axios
      .get("/userInfo")
      .then(response => {
        let data = response.data;
        this.$store.commit("changUserInfo", data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    IndexFooter,
    regAndLogin
  }
};
</script>

<style>
<<<<<<< HEAD
@import url(../src/assets/fontIcon/font_1529796_1qf16sktago/iconfont.css);
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 26.67vw;
  height: 100%;
}
body {
  font-size: 14px;
  height: 100%;
}
.red {
  color: red;
  font-size: 18px;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
  display: block;
}
.el-tabs__item .is-active {
  font-weight: bolder;
  font-size: 0.18rem;
  color: black;
}

.Foot {
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e2e2e2;
  box-shadow: 0 -0.05rem 0.2rem 0.05rem #33333312;
=======
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 14px;
  height: 100%;
}
ul,li{
  list-style: none;
}
a{
	text-decoration: none;
}

img{
	border:none;
}
input{
  outline: none;
>>>>>>> liberty
}
</style>
