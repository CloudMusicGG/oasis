<!--
 * @Author: roselee
 * @Date: 2019-12-04 16:23:14
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-04 17:09:59
 * @Description: 
 -->
<template>
  <div class="loginPage">
    <input type="text" placeholder="请输入手机号">
    <input type="text" placeholder="请输入验证码">
  </div>
</template>

<script>
export default {
  name:"loginPage",
  data(){
    return{
      
    }
  }
}
</script>

<style lang="scss" scoped>
  .loginPage{
    height:100%;
    background:gray;
    z-index:200;
    position: relative;
    top: 0;
    left: 0;
  }
</style>>