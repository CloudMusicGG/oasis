<!--
 * @Author: roselee
 * @Date: 2019-11-26 16:39:44
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-27 21:26:28
 * @Description: 这是推荐页面的搜索框
 -->
<template>
  <div class="searchBox">
    <input type="text" class="iconfont placeholderText" :placeholder="placeholderText" @click="search()"/>
    <span class="icon iconfont icon-saoyisao"></span>
  </div>
</template>

<script>
export default {
  name: "RecommendSearch",
  data() {
    return {
      placeholderText:'\ue739 搜索用户和动态'
    };
  },
   methods:{
        search(){
            this.$router.push({path:'/Search-page'})  
        }
    }
};
</script>

<style lang="scss" scoped>
@import url(../assets/font/iconfont.css);
.searchBox {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 10px 0.1rem;
  box-sizing: border-box;
}
input {
  height: 0.4rem;
  width: 3.16rem;
  border-radius: 0.2rem;
  background: #f4f4f4;
  outline: none;
  border: 0;
  line-height: 0.47rem;
  margin-right: 5px;
  text-indent: .2rem;
  font-size: .14rem;
  &::-ms-input-placeholder {
    text-align: center;
  }
  &::-webkit-input-placeholder {
    text-align: center;
  }
}
.iconfont {
  font-size: 0.26rem;
  vertical-align: middle;
  color:#4d4d4d;
}
.placeholderText{
  font-size: .15rem;
  letter-spacing: 1px;
  color:#929292;
}
</style>