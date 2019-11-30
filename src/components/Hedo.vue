<!--
 * @Author: Eternal
 * @Date: 2019-11-26 16:08:40
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-26 21:23:25
 * @Description: 
 -->
<template>
    <div class="recommend">
         <div class="header">
            <img class="header_img" src="../assets/img/b1.jpg" alt="">
            <i class="icon iconfont Return" @click="Return()">&#xe77d;</i>
        </div>
        <div class="recommend_w">
           
            <div class="center">
                <ul class="center_ul">
                    <li>插画</li>
                    <li>旅行</li>
                    <li>美甲</li>
                    <li>头像</li>
                    <li>短发</li>
                    <li>手帐</li>
                    <li>搭配</li>
                    <li>奔驰</li>
                    <li>减肥餐</li>
                    <li>大连</li>
                </ul>
                  <ul class="center_ul">
                    <li>摄影</li>
                    <li>减肥</li>
                    <li>猫</li>
                    <li>动漫</li>
                    <li>汉服</li>
                    <li>杨凯</li>
                    <li>拍照</li>
                    <li>音乐</li>
                    <li>五月天</li>
                    <li>张韵涵</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Hedo',
    data(){
        return {

        }
    },
    methods:{
        Return(){
            this.$router.go(-1);  
        }
    }
}
</script>

<style lang="scss" scoped>
@import url(../assets/font/iconfont.css);
    .recommend {
        width: 100%;
        height: 100%;
        .header{
            width: 100%;
            height: 1.44rem;
            position: relative;
            .header_img {
                width: 100%;
                height: 1.44rem;
            }
            .Return {
                font-size: .27rem;
                position: absolute;
                top: .09rem;
                margin-left: .08rem;
            }
        }
        .recommend_w {
            width: 3.28rem;
            height: 100%;
            margin: auto;
            font-size: .16rem;
                .More {
                    color: #e5d0b3;
                }
            }
        }
    .center {
        width: 2.18rem;
        display: flex;
        justify-content: space-between;
    }
    li {
        padding-left: 1em; 
        text-indent: -.7em;
        color: #838383;
        margin-top: .22rem;
    }
    li::before {
    content: "• "; 
    color: #cfa972; /* 自定义颜色 */
    font-size: .2rem;
    margin-right: .1rem;
    }
   
</style>