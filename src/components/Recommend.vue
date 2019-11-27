<!--
 * @Author: Eternal
 * @Date: 2019-11-26 16:08:40
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-27 20:04:55
 * @Description: 
 -->
<template>
    <div class="recommend">
        <div class="recommend_w">
            <div class="header">
                <span class="tuijian">"搜索推荐"</span>
                <router-link class="More" to="/Hedo-page">更多></router-link>
                <!-- <span @click="jumpMore()">更多</span> -->
            </div>
            <div class="center">
                <ul class="center_ul">
                    <li>插画</li>
                    <li>手绘</li>
                    <li>杨紫</li>
                </ul>
                <ul class="center_ul">
                    <li>摄影</li>
                    <li>早餐</li>
                    <li>美甲</li>
                </ul>
               
            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
export default {
    name:'Recommend',
    data(){
        return {
            Recommends:[]
        }
    },
     created(){
         Axios.get("/Recommend")
        .then(res=>{
             this.Recommends = res;
        })
    }
    // methods:{
    //     jumpMore(){
    //         this.$router.push({path:'/Hedo-page'})  
    //     }
    // }
}
</script>

<style lang="scss" scoped>
    .recommend {
        width: 100%;
        height: 100%;
        margin-top: .3rem;
        .recommend_w {
            width: 3.28rem;
            height: 100%;
            margin: auto;
            font-size: .16rem;
            .header{
                display: flex;
                justify-content: space-between;
                .tuijian {
                    color: #525151;
                }
                .More {
                    color: #e5d0b3;
                }
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