<!--
 * @Author: roselee
 * @Date: 2019-12-04 16:23:14
 * @LastEditors: Eternal
 * @LastEditTime: 2019-12-05 14:50:19
 * @Description: 
 -->
<template>
   <div class="SignIn">
        <div class="banner">
            <img src="../../assets/img/banner.jpg" alt="">
            <i class="icon iconfont Return" @click="Return()">&#xe77d;</i>
        </div>
        <div class="SignIn_w">
            <ul class="SignIn_ul">
                <li>
                   <label for="">
                       <span class="labernum">+86</span>
                        <i class="icon iconfont lignico">&#xe754;</i>
                   </label>
                   <input type="text" placeholder="请输入手机号">
                </li>
                 <li class="phone">
                   <input type="text" placeholder="请输入验证码">
                   <span class="Verification">获取验证码</span>
                </li>
            </ul>
            <div class="sign">
                登录
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:"loginPage",
  data(){
    return{
      
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
@import url(../../assets/font/iconfont.css);
  .SignIn {
       width: 100%;
       height: 100%;
        z-index:999;
        position:relative;
        background: rgb(253, 253, 253);
       img {
           width: 100%;
           height: 2.24rem;
           position:relative;
       }
       .SignIn_w {
           width: 3.22rem;
           height:4rem;
           margin: auto;
           .SignIn_ul li {
               width: 3.22rem;
               height: .48rem;
               border-bottom: 1px solid #ccc;
               display: flex;
               align-items: center;
               margin-bottom: .37rem;
               .labernum {
                   font-size: .2rem;
                   color: #000; 
               }
               .lignico {
                   font-size: .18rem;
               }
              input {
                  background: none;
                  border: transparent;
                  width: 2rem;
                  height: .26rem;
                  padding-left: .04rem;
                  outline:medium;
              }
           }
       }
   }
   .phone {
       display: flex;
       justify-content:space-between;
   }
   .Verification {
       color: #ccc;
   }
  .sign {
       width: 2.42rem;
       height: .4rem;
       background:pink;
       margin: auto;
       text-align: center;
       line-height: .4rem;
       border-radius: .18rem;
       background: #b9b9b9;
       font-size: .18rem;
       color: #d4d4d4
   }
    .Return {
        font-size: .27rem;
        position: absolute;
        top: .08rem;
        margin-left: .08rem;
    }
</style>>