<!--
 * @Author: your name
 * @Date: 2019-11-26 15:02:43
 * @LastEditTime: 2019-12-05 19:17:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day23e:\三阶段\第三阶段\workspace\oasis\src\components\home.vue
 -->
<template>
    <div class="downla">
        <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom"  ref="loadmore"> -->
            <!-- <div
                v-infinite-scroll
                infinite-scroll-disabled="busy"
                infinite-scroll-distance="20"
            > -->
                <div v-for="(img,index) in $store.state.imgs" :key="index">
                    <!-- {{头像及发布时间等}} -->
                    <div class="header_top" @click="getfocu1()">
                        <img :src="img.headerimg" alt="">
                        <div class="ht_middle">
                            <p>{{img.name}}</p>
                            <span class="time">{{changeTime(img.time)}}</span>
                            <span class="place">{{img.place}}</span>
                        </div>

                        <span class="iconfont icon-gengduo" @click="popup(img.userid)"></span>

                        <span v-show="isshowfocus" class="guan"  @click="focusIt(img.userid)" :class='{"guanzhu":isfocus(img.userid),"guanhou":!isfocus(img.userid)}'><span class="iconfont icon-jiahao" :class='{"show":isfocus(img.userid),"show1":!isfocus(img.userid)}'></span><span :class='{"show":!isfocus(img.userid),"show1":isfocus(img.userid)}'>已</span>关注</span>
                    </div>
                    <!-- {{发表的照片}} -->
                    <div class="swiper-container" @click="getfocu1()">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(img2,index1) in img.imgs1" :key="index1">
                                <img :src="img2" alt="">
                            </div>
                        </div>
                        <div class="swiper-pagination doudou1"></div>
                    </div>

                    <div class="header_bottom">

                    <!-- {{赞}} -->
                        <div class="zan_header" @click="getfocu1()">
                            <!-- <img v-for="(zaneda,index4) in img.zaned" :key="index4" :src="zaneda" alt="">
                            <b>等<span>{{img.zaned.length}}</span>次赞</b> -->
                            <div v-for="(zaneda,index4) in $store.state.zanedinfo" :key="index4" v-if="zaneda.id==img.id">
                                <img v-for="(headerimg1,index5) in zaneda.headerimg" :key="index5" :src="headerimg1" alt="" v-if="index5<3">
                                <b>等<span>{{zaneda.headerimg.length}}</span>次赞</b>
                            </div>
                            <span class="iconfont icon-fenxiang1"></span>
                            <span class="iconfont icon-xiaoxi1" @click="getcomment(img.id)"></span>
                            <span class="iconfont icon-aixin" :class='{"show1":!isShowLike(img.id),"show":isShowLike(img.id)}'  @click="likeIt(img.id)"></span>
                            <span class="iconfont icon-aixin1" :class='{"show":!isShowLike(img.id),"show1":isShowLike(img.id)}'  @click="likeIt(img.id)"></span>
                        </div>
                        
                        <div class="hb_middle" @click="getfocu1()">
                    <!-- {{标题}} -->
                            <div class="title">{{img.biaoti}}</div>
                    <!-- {{描述}} -->
                            <div class="desc"  ref="desc1">
                                <p :class="{yincang:showExchangeButton[index]}">{{img.desc}}</p>&nbsp;&nbsp;&nbsp;
                                <span @click="showall(index)">{{showExchangeButton[index]?'展开':''}}</span>
                            </div>
                    <!-- {{主题}} -->
                            <div class="theme">
                                <span>#</span>{{img.theme}}
                            </div>
                    <!-- {{历史评论}} -->
                            <p class="count" @click="getcomment(img.id)">共<span>{{img.commentsnum}}</span>条评论</p>
                            <div class="count_bottom">
                                <div ref="pp"  @click="getcomment(img.id)" class="comments"  v-for="(value,index3) in img.comments" :key="index3">
                                    <p>
                                        {{value.username}}
                                        <span v-html="value.neirong.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)">{{value.neirong}}</span>
                                    </p>
                                    <p  v-for="(value6,index6) in value.speak" :key="index6">
                                        {{value6.username}}
                                        <span class="huifu">回复<span> {{value.username}}</span><i v-html="value6.neirong.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)">{{value6.neirong}}</i></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    <!-- {{评论框}} -->
                        <div class="hb_bottom" @click.stop="getfocu(img.id)">
                        喜欢就评论告诉TA
                        <div class="wow">
                            <span class="iconfont icon-xiaoxi-"></span>
                            <i>WOW!</i>
                        </div>
                        </div>
                    </div>
                </div>

                <mt-popup
                    v-model="popupVisible"
                    position="bottom" class="popup_out">
                    <ul>
                        <li  @click="focusIt(userid)"><span :class='{"show":isfocus(userid),"show1":!isfocus(userid)}'>关注</span><span :class='{"show":!isfocus(userid),"show1":isfocus(userid)}'>取消关注</span></li>
                        <li>投诉</li>
                        <li @click="popup()">取消</li>
                    </ul>
                </mt-popup>
            <!-- </div> -->
        <!-- </mt-loadmore> -->
    </div>
</template>
<script>
import Swiper from 'swiper';
import axios from "axios";
import Vue from "vue";
import { Loadmore,InfiniteScroll,Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
Vue.use(InfiniteScroll);
Vue.component(Loadmore.name, Loadmore);

export default {
    name:'home',
    props:["p"],
    data(){
        return {
            allinfos:[],
            allinfo:[],
            isshow:true,
            currindex:"",
            show:'show',//隐藏
            show1:'show1',//显示
            // nowPid:[],
            showTotal:true,//是否显示所有文本内容
            showExchangeButton:[],//是否显示展开按钮
            popupVisible:false,
            userid:""
        }
    },
    computed:{
        isshowfocus(){
            return this.p?true:false;//判断关注按钮是否显示
        }
    },
    created(){ 
        axios.get("imgs")
        .then(res=>{
            this.allinfos = res.data;
            let allinfo = this.allinfos.slice(0,3);
            this.$store.commit('getimgs',allinfo);
            this.$nextTick(function(){
                let mySwiper = new Swiper ('.swiper-container', {
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'fraction'
                    }
                });
                let arr=[];//获取描述盒子的高度
                for(let i in this.$refs.desc1){
                    let comheigh= this.$refs.desc1[i].offsetHeight;
                    if(comheigh>46){
                        arr.push(true);
                    }else{
                        arr.push(false);
                    }
                }
                   this.showExchangeButton = arr;
            })
        })     
        .catch(err=>{
            console.log(err);
        });
        //获取用户的信息
        // this.$store.dispatch('getnowid');
    },
    methods:{ 
        // 将匹配结果替换表情图片
        emotion (res) {
        let word = res.replace(/\#|\;/gi,'')
        const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
        let index = list.indexOf(word)
        return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`   
        },//上拉加载，下拉刷新
        loadTop() {
        // load more data
            this.allinfo = this.allinfos.slice(3,6);
            // this.$store.state.imgs.concat(this.allinfo);
            for(let i in this.allinfo){
                this.$store.state.imgs.unshift(this.allinfo[i]);
            }
            // this.$store.commit('getimgs',this.allinfo);
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
        // load more data
        //this.allLoaded = true;// if all data are loaded
            this.allinfo = this.allinfos.slice(3,6);

            for(let i in this.allinfo){
                this.$store.state.imgs.push(this.allinfo[i]);
            }

            this.$refs.loadmore.onBottomLoaded();
        },
        changeTime(time){
            let d = new Date();
            let date = d.getTime() - new Date(time).getTime();   //时间差的毫秒数   
            //计算出相差天数  
            var days=Math.floor(date/(24*3600*1000)) 
            //计算出小时数  
            var leave1=date%(24*3600*1000)    //计算天数后剩余的毫秒数  
            var hours=Math.floor(leave1/(3600*1000))  
            //计算相差分钟数  
            var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数  
            var minutes=Math.floor(leave2/(60*1000))
            if(minutes==0&&hours==0&&days==0){
                return "刚刚";
            }else if(hours==0&&minutes!=0){
                return minutes+"分钟前";
            }else if(days==0&&hours!=0&&minutes!=0){
                return hours+"小时前";
            }else if(days!=0){
                return days+"天前";
            }else{
                return time;
            }
        },
        getfocu1(){
            this.$store.commit("getxian",false);
        },
        likeIt(id) {//点击喜欢，判断当前的id在nowPid里有没有，有就取消，没有就变红，nowPid放的是当前点赞的id
            let index = this.$store.state.nowPid.indexOf(id);
            this.$store.commit("changexin",{id:id,index:index});
        },
        focusIt(id){
            console.log(id)
            let index = this.$store.state.nowFocus.indexOf(id);
            this.$store.commit("changefocus",{id:id,index:index});
            this.popupVisible = false;
        },
        isShowLike(id) {
            if (this.$store.state.nowPid.indexOf(id) >= 0) {
                return true;
            } else {
                return false;
            }
        },
        isfocus(id){
            if (this.$store.state.nowFocus.indexOf(id) >= 0) {
                // console.log(true)
                return true;
            }else {
                // console.log(false)
                return false;
            }
        },
        showall(index){//点击展开描述全部显示
            this.showExchangeButton.splice(index,1,false);//更新数组要用splice，否则渲染不到页面上
        },
        getcomment(id){
            this.$store.commit("getcomment",id);
			this.$router.push({ path: '/commentpage'});
        },
        getfocu(id){
            this.$store.state.conusername = "";
            this.$store.commit("getfocu",true);
            this.$store.commit("getface",false);
            this.$store.commit("getxian",true);
            this.$store.commit("getcomment",id);
            axios.get("imgs/"+this.$store.state.currwenid)
            .then(res=>{
                // this.infos = res.data;
                this.$store.commit("getinfos",res.data);
                
            })
            .catch(err=>{
                console.log(err);
            })
        },
        popup(id){
            this.popupVisible = !this.popupVisible;
            if(this.popupVisible==true){
                this.userid = id;
            }else{
                this.userid = "";
            }
            console.log(this.userid)
        }
    }
}
</script>
<style lang="scss" scoped="" type="text/css">
@import url(https://unpkg.com/swiper/css/swiper.css);
.downla{
    overflow: scroll;
}
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
 .guan{
     float: right;
     width: .74rem;
     height: .32rem;
     border-radius: .15rem;
     text-align: center;
     line-height: .32rem;
     font-size: .15rem;
     margin-right: .15rem;
     .icon-jiahao{
         font-size: .17rem;
     }
    .show{
        display: none;
    }
    .show1{
        display: inline-block;
    }
 }
 .guanzhu{
     background: white;
     color: #a6a6a6;
     border: 1px solid #a6a6a6;
 }
 .guanhou{
     background: #cea972;
     color: white;
 }
}
.ht_middle{
    float: left;
    margin-left: .11rem;
    p{
        font-size: .14rem;
        color: black;
        font-weight: bold;
    }
    span{
        font-size: .12rem;
        color: #aaaaaa;
    }
}
.swiper-container{
    width: 100%;
    height: 2.75rem;
    img{
        width: 100%;
        height: 100%;
    }
}
.swiper-slide{
    overflow:hidden;
    width:100%;
    height: 2.75rem;
    // height:0;
    // padding-bottom: 73%;
}
.doudou1{
    width: .53rem;
    height: .25rem;
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
    border-radius: .17rem;
    line-height: .25rem;
    background: rgba($color: #000000, $alpha: .5);
    color:white;
    margin-left: .15rem;
}
.header_bottom{
    padding: .15rem .16rem 0;
    overflow: hidden;
    .zan_header{
        height: .26rem;
        img{
            width: .21rem;
            height: .21rem;
            border-radius: 50%;
            margin-left: -5px;
            float: left;
        }
        img:first-child{
            margin-left: 0;
        }
    }
    b{
        font-size: .14rem;
        line-height: .21rem;
        margin-left: .07rem;
        float: left;
    }
    .iconfont{
        font-size: .25rem;
        color: #434544;
        float: right;
    }
    .icon-xiaoxi1{
        margin-right:.22rem;
    }
    .icon-aixin{
        margin-right:.22rem;
        display: block;
    }
    .icon-aixin1{
        margin-right:.22rem;
        color: #c99f60;
        display: none;
    }
    .show{
        display: none;
    }
    .show1{
        display: inline-block;
    }
    .title{
        width: 100%;
        font-size: .16rem;
        color: #000;
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .desc{
        width: 100%;
        font-size: .13rem;
        line-height: .21rem;
        margin-top: .09rem;
        position:relative;
        margin-bottom: 10px;
        overflow: hidden;
        p{
            width: 92%;
            float: left;
            /*强制打散字符*/
            word-break: break-all;
        }
        span{
            color: #a5a5a5;
            float: right;
            position:absolute;
            right:0rem;
            bottom:0rem;
        }
        &:after{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            /*截取行数*/
            -webkit-line-clamp: 2;
            text-overflow: ellipsis;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            /*行首缩进字符数，值为[(截取行数-1)*尾部留空字符数]*/
            text-indent: -4em;
            /*尾部留空字符数*/
            padding-right: 4em;
        }
    }
    .yincang{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .theme{
        display: inline;
        padding: 4px .11rem 5px 3px;
        box-sizing: border-box;
        border-radius: .12rem;
        background: #f8f1e7;
        color: #c5a56a;
        font-size: .12rem;
        span{
            display: inline-block;
            width: .22rem;
            height: .22rem;
            text-align: center;
            line-height: .23rem;
            border-radius: 50%;
            background: white;
        }
    }
    .count{
        font-size: .11rem;
        color: #787878;
        margin-top: .1rem;
        margin-bottom: 10px;
    }
    .count_bottom{
        max-height: .6rem;
        overflow: hidden;
    }
    .comments{
        font-size: .14rem;
        color: black;
        font-weight: bold;
        p{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            line-height: .3rem;
            span{
                font-weight: normal;
                margin-left: 4px;
                img{
                    display: inline-block;
                    width: .1rem;
                    height: .1rem;
                }
            }
            .huifu{
                color: #717171;
                span{
                    color: black;
                    font-weight: bold;
                }
                i{
                    font-style: normal;
                    margin-left: 4px;
                }
            }
        }
    }
    .hb_bottom{
        width: 3.35rem;
        height: .36rem;
        border-radius: .17rem;
        background: #f5f5f5;
        margin: 0 auto;
        font-size: .13rem;
        color: #989898;
        line-height: .36rem;
        text-indent: .12rem;
        .wow{
            float: right;
            width: .82rem;
            height: .25rem;
            border-top-right-radius: .17rem;
            border-bottom-right-radius: .17rem;
            color: #363636;
            font-size: .09rem;
            line-height: .25rem;
            margin-top: 6px;
            border-left: 1px solid #dfdfdf;
            .icon-xiaoxi-{
                font-size: .22rem;
                float: left;
            }
            i{
                float: left;
                text-indent: 0;
            }
        }
    }
}
.mint-loadmore-content {
    overflow-y: scroll;
}
.popup_out{
    width: 100%;
    ul{
        background: #eeeeee;
        li{
            width: 100%;
            height: .52rem;
            text-align: center;
            line-height: .52rem;
            font-size: .17rem;
            color:black;
            background: white;
        }
        :nth-child(2){
            border-top: 1px solid #e1e1e1;
            margin-bottom:.1rem;
        }
        .show1{
            display: block;
        }
        .show{
            display: none;
        }
    }
}
</style>