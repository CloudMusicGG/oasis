<!--
 * @Author: your name
 * @Date: 2019-11-29 19:51:32
 * @LastEditTime: 2019-11-29 19:54:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eshopappe:\三阶段\第三阶段\workspace\oasis\src\components\homeheader.vue
 -->
<template>
<div>
    <div v-for="(img,index) in $store.state.imgs" :key="index">
            <!-- {{头像及发布时间等}} -->
            <div class="header_top">
                <img :src="img.headerimg" alt="">
                <div class="ht_middle">
                    <p>{{img.name}}</p>
                    <span class="time">{{img.time}}</span>
                    <span class="place">{{img.place}}</span>
                </div>
                <span class="iconfont icon-gengduo"></span>
            </div>
    </div>
</div>
</template>
<script>
export default {
    name:'homeheader',
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped="" type="text/css">
.header_top{
 padding: .09rem .11rem .09rem;
 box-sizing: border-box;
 overflow: hidden;
 img{
    width: .34rem;
    height: .34rem;
    border-radius: 50%;
    float: left;
 }
 .icon-gengduo{
     float: right;
     font-size: .15rem;
     margin-right: .03rem;
     margin-top: .1rem;
 }
}
</style>