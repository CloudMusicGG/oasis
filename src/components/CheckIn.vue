<!--
 * @Author: Eternal
 * @Date: 2019-11-26 17:01:29
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-26 18:24:19
 * @Description: 最新入住组件
 -->
<template>
  <div class="CheckIn">
     <div class="CheckIn_w">
         <p>"最新入住"</p>
        <ul class="information">
            <li class="details">
                <div class="details_left">
                   <span class="details_left_span">
                       <img src="../assets/img/h1.jpg" alt="">
                    </span>
                   <div class="name">
                       <p>
                           <span class="name_span">李宇春</span>
                           <img src="../assets/img/h2.jpg" alt="">
                        </p>
                       <p class="region">
                           <img src="../assets/img/h3.jpg" alt="">
                            <span class="City">北京</span>
                        </p>
                   </div>
                </div>
                <div class="follow">
                      <i class="icon iconfont follow_ico">&#xe783;</i>
                      关注
                </div>
            </li>
            <li class="details">
                <div class="details_left">
                   <span class="details_left_span">
                       <img src="../assets/img/h1.jpg" alt="">
                    </span>
                   <div class="name">
                       <p>
                           <span class="name_span">李宇春</span>
                           <img src="../assets/img/h2.jpg" alt="">
                        </p>
                       <p class="region">
                           <img src="../assets/img/h3.jpg" alt="">
                            <span class="City">北京</span>
                        </p>
                   </div>
                </div>
                <div class="follow">
                      <i class="icon iconfont follow_ico">&#xe783;</i>
                      关注
                </div>
            </li>
            <li class="details">
                <div class="details_left">
                   <span class="details_left_span">
                       <img src="../assets/img/h1.jpg" alt="">
                    </span>
                   <div class="name">
                       <p>
                           <span class="name_span">李宇春</span>
                           <img src="../assets/img/h2.jpg" alt="">
                        </p>
                       <p class="region">
                           <img src="../assets/img/h3.jpg" alt="">
                            <span class="City">北京</span>
                        </p>
                   </div>
                </div>
                <div class="follow">
                      <i class="icon iconfont follow_ico">&#xe783;</i>
                      关注
                </div>
            </li>
            <li class="details">
                <div class="details_left">
                   <span class="details_left_span">
                       <img src="../assets/img/h1.jpg" alt="">
                    </span>
                   <div class="name">
                       <p>
                           <span class="name_span">李宇春</span>
                           <img src="../assets/img/h2.jpg" alt="">
                        </p>
                       <p class="region">
                           <img src="../assets/img/h3.jpg" alt="">
                            <span class="City">北京</span>
                        </p>
                   </div>
                </div>
                <div class="follow">
                      <i class="icon iconfont follow_ico">&#xe783;</i>
                      关注
                </div>
            </li>
            <li class="details">
                <div class="details_left">
                   <span class="details_left_span">
                       <img src="../assets/img/h1.jpg" alt="">
                    </span>
                   <div class="name">
                       <p>
                           <span class="name_span">李宇春</span>
                           <img src="../assets/img/h2.jpg" alt="">
                        </p>
                       <p class="region">
                           <img src="../assets/img/h3.jpg" alt="">
                            <span class="City">北京</span>
                        </p>
                   </div>
                </div>
                <div class="follow">
                      <i class="icon iconfont follow_ico">&#xe783;</i>
                      关注
                </div>
            </li>
            <li class="details">
                <div class="details_left">
                   <span class="details_left_span">
                       <img src="../assets/img/h1.jpg" alt="">
                    </span>
                   <div class="name">
                       <p>
                           <span class="name_span">李宇春</span>
                           <img src="../assets/img/h2.jpg" alt="">
                        </p>
                       <p class="region">
                           <img src="../assets/img/h3.jpg" alt="">
                            <span class="City">北京</span>
                        </p>
                   </div>
                </div>
                <div class="follow">
                      <i class="icon iconfont follow_ico">&#xe783;</i>
                      关注
                </div>
            </li>
        </ul>
     </div>
  </div>
</template>

<script>
export default {
    name:'CheckIn',
    data() {
        return {

        }
    }
}
</script>
  
<style style lang="scss" scoped>
@import url(../assets/font/iconfont.css);
      .CheckIn {
        width: 100%;
        margin-top: .3rem;
        .CheckIn_w {
            width: 3.28rem;
            height: 100%;
            margin: auto;
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
        margin-top: .22rem;
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
        background: #cfa972;
        border-radius: .16rem;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content:center;
        color: #fff;
        .follow_ico {
            margin-right: .02rem;
        }
    }
</style>