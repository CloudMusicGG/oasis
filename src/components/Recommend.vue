<!--
 * @Author: Eternal
 * @Date: 2019-11-26 16:08:40
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-29 21:55:36
 * @Description: 
 -->
<template>
    <div class="recommend">
        <div class="recommend_w">
            <div class="Lately" v-show="isShow">
                <div class="lately_header">
                    <span class="record">"最近搜素"</span>
                    <span class="Eliminate" @click="Eliminate()">清除全部</span>
                </div>
                <div class="content">
                   <ul class="content_ul" >
                       <li class="content_ul_li" v-for="(Record,index) in Records" :key="index">{{Record}}</li>
                   </ul>
                </div>
            </div>
            <div class="header">
                <span class="tuijian" @click="ff" ref="num">"搜索推荐"</span>
                <router-link class="More" to="/Hedo-page">更多></router-link>
                <!-- <span @click="jumpMore()">更多</span> -->
            </div>
            <div class="center">
                <ul class="center_ul">
                    <li class="a" @click="btn_user($event)" v-for="(list,index) in lists" :key="index">{{list}}</li>
                  
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
            lists:['插画','手绘','杨紫','摄影','早餐','美甲'],
            Recommends:[],
            isShow:true,
            Records:[]
        }
    },
     created(){
         this.Eliminate();
         Axios.get("/Recommend")
        .then(res=>{
             this.Recommends = res.data;
            //  console.log(this.Recommends)
           
        })
    },
    methods:{
       Eliminate(){
           this.isShow=true
           this. Records=[]
        },
       btn_user (e) {
           let index = (this.Records).indexOf(e.target.innerHTML);
           if(index<0){
               this.isShow = true;
               (this.Records).push(e.target.innerHTML);  
           }
        },
        ff(){
            console.log(this.$refs);
        }
    }
}
</script>

<style lang="scss" scoped>
    .recommend {
        width: 100%;
        height: 100%;
        margin-top: .6rem;
        .recommend_w {
            width: 3.28rem;
            height: 100%;
            margin: auto;
            font-size: .16rem;
            .lately_header {
                display: flex;
                justify-content:space-between;
                .Eliminate {
                    font-size: 12px;
                }
            }
            .content {
                width: 100%;
            }
            .content_ul {
                width: 100%;
                display:flex;
                flex-wrap: wrap;
                .content_ul_li {
                    width: .45rem;
                    height: .34rem;
                    font-size: 14px;
                    line-height: .34rem;
                    text-align: center;
                    border-radius: .04rem;
                    background: #eeeeee;
                    margin-top: .2rem;
                    margin-right:.16rem;
                }
            }
            .header{
                display: flex;
                justify-content: space-between;
                margin-top: .2rem;
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
        width: 100%;
    }
    .center_ul {
         display: flex;
         flex-wrap: wrap;
    }
   .center_ul .a {
        padding-left: 1em;
        width: 45%;
        // text-indent: .7em;
        color: #838383;
        margin-top: .22rem;
    }
   .center_ul .a::before {
    content: "• "; 
    color: #cfa972; /* 自定义颜色 */
    font-size: .2rem;
    margin-right: .1rem;
    }
   
</style>