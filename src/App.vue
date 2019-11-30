<!--
 * @Author: Eternal
 * @Date: 2019-11-26 11:44:11
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-30 15:57:27
 * @Description: 
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

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