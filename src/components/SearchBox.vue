<!--
 * @Author: Eternal
 * @Date: 2019-11-26 14:32:25
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-30 00:39:25
 * @Description: 
 -->
<template>
  <div class="searchbox">
       <div class="searchbox_w">
           <div class="searchbox_box">
               <label for="">
                     <i class="icon iconfont">&#xe739;</i>
               </label>
               <input type="text" placeholder="搜素用户和动态" v-model="text" @keyup.enter="sercher">
           </div>
           <router-link to="/Recommend">取消</router-link>
       </div> 
  </div>
  
</template>

<script>
export default {
    name:"SearchBox",
    data () {
        return {
            text:''
        }
    },
    methods:{
        sercher(){
            let t = this.text
            this.$emit("update", t)
        }
    }
}
</script>

<style lang="scss" scoped> 
@import url(../assets/font/iconfont.css);
.searchbox{
    width: 100%;
    height: .48rem;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 999;
}
.searchbox_w {
    width: 3.28rem;
    height: 100%;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // box-shadow: -1px 0px 2px rgb(230, 230, 230);
}
.searchbox_box {
    width: 2.7rem;
    height: .33rem;
    border-radius: .15rem;
    background: #f4f4f4;
    padding-left: .14rem;
    display: flex;
    align-items: center;
}
input {
    width: 100%;
    height: 100%;
    border-radius: .15rem;
    background: transparent;
    border: 0;
    outline: none;
    margin-left: .17rem;
    font-size: 14px;
    caret-color:blue;
}
span {
    font-size: .16rem;
    margin-right: 0;
}
</style>