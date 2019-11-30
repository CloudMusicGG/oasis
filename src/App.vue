<!--
 * @Author: Eternal
 * @Date: 2019-11-26 11:44:11
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-27 20:24:47
 * @Description: 
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  created(){
    axios
      .get('/userInfo')
      .then((response) => {
        let data = response.data;
        this.$store.commit('changUserInfo', data);
      })
      .catch((err) =>{
        console.log(err);
      })
  }
}
</script>

<style>
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
  font-size: .18rem;
  color:black;
}
</style>
