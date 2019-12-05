<!--
 * @Author: Eternal
 * @Date: 2019-11-26 16:08:40
 * @LastEditors: Eternal
 * @LastEditTime: 2019-12-05 14:39:37
 * @Description: 更多组件
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
                    <li v-for="(Hedolist,index) in Hedolists" :key="index"  @click="btn_user($event)">{{Hedolist}}</li>
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
            Hedolists:['插画','旅行','美甲','头像','短发','手帐','搭配','奔驰','减肥餐','大连','摄影','减肥','猫','动漫','汉服','杨凯','拍照','音乐']
        }
    },
    methods:{
        Return(){
            this.$router.go(-1);  
        },
        btn_user(e){
            let list = e.target.innerHTML
            this.$router.push({name:'SearchData',query:{a:list}}) 
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
        width: 3.18rem;
        display: flex;
        justify-content: space-between;
        .center_ul {
            display: flex;
            flex-wrap: wrap;
            width: 3.28rem;
        }
    }
    li {
        padding-left: .1rem; 
        text-indent: .07rem;
        color: #838383;
        margin-top: .22rem;
        width: 1.4rem;
    }
    li::before {
    content: "• "; 
    color: #cfa972; /* 自定义颜色 */
    font-size: .2rem;
    margin-right: .1rem;
    }
</style>