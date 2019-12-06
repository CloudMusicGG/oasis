<!--
 * @Author: your name
 * @Date: 2019-12-01 15:33:58
 * @LastEditTime: 2019-12-06 20:46:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eshopappe:\三阶段\第三阶段\workspace\oasis\src\components\commain.vue
 -->
<template>
    <div @click="getfocu()" ref="commain">
        <ul>
            <li v-for="(comment,index) in $store.state.infos.comments" :key="index">
                <div class="conmain">
                    <img :src="comment.headUrl" alt="">
                    <div @click="getcomper(comment.id,comment.username)">
                        <p class="pa">{{comment.username}}</p>
                        <p class="pa"><span v-html="comment.neirong.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)">{{comment.neirong}}</span><span>{{changeTime(comment.time)}}</span></p>
                    </div>
                </div>
                <div class="conmain conno" v-for="(speaka,index1) in comment.speak" :key="index1">
                    <img :src="speaka.headUrl" alt="">
                    <div @click="getcomper(comment.id,speaka.username)">
                        <p class="pa">{{speaka.username}}</p>
                        <p class="pa"><span v-if="speaka.aita!=''" class="huifu">回复<span>{{speaka.aita}}</span></span><span v-html="speaka.neirong.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, emotion)">{{speaka.neirong}}</span><span>{{changeTime(speaka.time)}}</span></p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:"commain",
    data(){
        return{
            // infos:[]
        }
    },
    created(){
        axios.get("imgs/"+this.$store.state.currwenid)
        .then(res=>{
            // this.infos = res.data;
            this.$store.commit("getinfos",res.data);
            
        })
        .catch(err=>{
        })
    },
    beforeUpdate(){
        //判断输入的是不是表情，是表情则转义，否则原样输出
        this.$nextTick(()=>{
            let cont = document.getElementsByClassName("pa");
            // console.log(cont[1].innerHTML);
            for(let i=0;i<cont.length;i++){

            }
        })
    },
    methods:{
        // 将匹配结果替换表情图片
        emotion (res) {
        let word = res.replace(/\#|\;/gi,'')
        const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
        let index = list.indexOf(word)
        return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`   
        },
        getfocu(){
            this.$store.commit("getfocu",!this.$store.state.isshow);
            this.$store.commit("getface",false);
        },
        getcomper(id,username){
            this.$store.commit("getcomper",{id:id,username:username});
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
        }
    }
}
</script>
<style lang="scss" scoped="" type="text/css">
    li{
        width: 3.35rem;
        overflow: hidden;
        min-height: .72rem;
        margin: 0 auto;
        .conmain{
            overflow: hidden;
            img{
                float: left;
                width: .34rem;
                height: .34rem;
                border-radius: 50%;
                margin-top:.2rem;
                margin-right: .13rem;
            }
            div{
                    float: left;
                p{
                    width: 2.87rem;
                    font-size: .14rem;
                    color: black;
                    font-weight: bold;
                    margin-top: .18rem;
                    img{
                        display: inline-block;
                    }
                }
                :last-child{
                    font-size: .13rem;
                    font-weight: normal;
                    margin-top: 0;
                    span{
                        font-size: .13rem;
                        color: #9b9b9b;
                        margin-left: 10px;
                    }
                    :first-child{
                        margin-left: 0;
                    }
                    .huifu{
                        color: black;
                        margin-left: 0;
                        span{
                            font-size: .13rem;
                            color: #cea974;
                            margin-left: 0;
                        }
                    }
                }
            }
        }
        .conno{
            overflow: hidden;
            margin-left: .5rem;
            img{
                float: left;
                width: .26rem;
                height: .26rem;
                border-radius: 50%;
                margin:.16rem .11rem 0 4px;
            }
            div{
                    float: left;
                p{
                    width: 2.4rem;
                    font-size: .14rem;
                    color: black;
                    font-weight: bold;
                    margin-top: .12rem;
                    img{
                        display: inline-block;
                    }
                }
                :last-child{
                    font-size: .13rem;
                    font-weight: normal;
                    margin-top: 0;
                    span{
                        font-size: .13rem;
                        color: #9b9b9b;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
</style>