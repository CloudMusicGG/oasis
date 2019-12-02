<!--
 * @Author: Eternal
 * @Date: 2019-11-26 17:01:29
 * @LastEditors: Eternal
 * @LastEditTime: 2019-12-02 20:56:02
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-02 17:35:12
 * @Description: 相关用户组件
 -->
<template>
  <div class="CheckIn">
     <div class="CheckIn_w">
         <div class="header">
             <p>{{title}}</p>
             <p class="More" @click="Mores()">更多></p>
             <!-- <p>{{tile}}</p> -->
             <p class="More">更多</p>
         </div>
        <ul class="information">
            <li class="details" v-for="(vs,index) in v" :key="index" >
                <div class="details_left">
                   <span class="details_left_span">
                       <img :src="vs.HeadPortrait" alt="">
                    </span>
                   <div class="name">
                       <p>
                           <span class="name_span">{{vs.name}}</span>
                            <img src="../assets/img/h2.jpg" alt="">
                        </p>
                       <p class="region">
                           <img :src="vs.sex" alt="">
                            <span class="City">{{vs.City}}</span>
                       </p>
                   </div>
                </div>
                <div class="follow" @click="favor(vs.name)" :class='{"unsuber":!isLike(vs.name),"suber":isLike(vs.name)}'>
                    <!-- {{follow}} -->
                </div>
            </li>
        </ul>
     </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
    name:'user',
    props:['v','na'],
    data() {
        return {
            title: '"相关用户"',
            CheckIns:[],
            subscribed:[]
        }
    },
    // updated(){
    //     console.log("updated",this.v)
    // },
    methods:{
         Mores(){
            // this.na()
            console.log('123')
        },
        favor(name) {
            // console.log()
            let index = (this.subscribed).indexOf(name);
            if(index>=0){
                this.subscribed.splice(index,1);
            }else{
                this.subscribed.push(name);
            }
        },
        isLike(name){
            if((this.subscribed).indexOf(name)<0){
                return false;
            }else{
                return true;
            }
        }
    }
}
</script>
  
<style style lang="scss" scoped>
@import url(../assets/font/iconfont.css);
      .CheckIn {
        width: 100%;
        margin-top: 1rem;
        .CheckIn_w {
            width: 3.28rem;
            height: 100%;
            margin: auto;
            .header {
                display: flex;
                justify-content: space-between;
                .More {
                    color: #e5d0b3;
                }
            }
            p {
                font-size: .16rem;
                color: #7b7a7a;
                img {
                    display: inline-block;
                    width: .14rem;
                    height: .11rem;
                }
            }
        }
    }
    .details {
        width: 100%;
        height: .38rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: .32rem;
        .details_left {
            height: 100%;
            display: flex;
            .details_left_span {
                display: inline-block;
                height: .37rem;
                border-radius: 50%;
                img {
                    width: .37rem;
                    height: .37rem;
                    border-radius: 50%; 
                }
            }
        }
    }
    .name {
        height: 100%;
        margin-left: .12rem;
        .region img{
            display: inline-block;
            width: .12rem;
            height: .12rem;
        }
    }
    .name_span{
        color: #000;
    }
    .City {
        color: #bdbdbd;
        line-height: 0;
    }
    .follow {
        width: .725rem;
        height: .31rem;
        border-radius: .16rem;
        font-size: 15px;
        display: flex;
        color: #fff;
        align-items: center;
        justify-content:center;
        .follow_ico {
            margin-right: .02rem;
        }
    }
    .unsuber{
        background:#cfa972;
        // color:#fff;
        border:1px solid #ccc;
        position: relative;
        &:after{
            content:"\e783 关注";
            position:absolute;
            top:.04rem;
            left:.06rem;
            color:white;
            font-family: "iconfont" !important;
            font-size: 16px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    }
    .suber{
        background:#f7f6f6;
        border: 1px solid #ccc;
        color:#ccc;
        position: relative;
        &:after{
            content:"已关注";
            position:absolute;
            top:4px;
            left:.14rem;
            color:#ccc;
            font-family: "iconfont" !important;
            font-size: 16px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    }
</style>