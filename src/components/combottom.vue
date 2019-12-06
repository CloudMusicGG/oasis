<!--
 * @Author: your name
 * @Date: 2019-12-02 09:41:16
 * @LastEditTime: 2019-12-06 21:16:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eshopappe:\三阶段\第三阶段\workspace\oasis\src\components\combottom.vue
 -->
<template>
    <div @click="getfocu()" ref="combox">
        <div class="cb_main" v-show="$store.state.isshow">
            喜欢就评论告诉TA
        </div>
        <div v-show="!$store.state.isshow">
            <div class="cb_main focu">
                <input type="text" placeholder="喜欢就评论告诉TA" class="main" ref="commain" v-model="content" @click="getface1()">
                <span>@</span>
                <span class="iconfont icon-xiaolian" @click="getface()"></span>
            </div>
            <p class="send" @click="send()">发送</p>
        </div>
        <div class="select" v-show="$store.state.faceshow">
            <emotion @emotion="handleEmotion" :height="200" ></emotion>
        </div>
    </div>
</template>
<script>
// import index from './index';
import Emotion from '@/components/Emotion/index'
export default {
    name:"combottom",
    data(){
        return {
            content:''
        }
    },
    components:{
       Emotion
    },
    beforeUpdate(){
        if(this.$store.state.isshow==true){
            this.content = "";
            this.$refs.commain.focus();
        }
        if(this.$store.state.conid!=""){
            setTimeout(()=>{
                this.$refs.commain.focus();
                this.$refs.commain.placeholder = this.$store.state.conusername;
            },200);
        }
    },
    methods:{
        //让输入框显示
        getfocu(){
            this.$store.state.conusername = "";
            this.$store.commit("getfocu",false);
            setTimeout(()=>{
                this.$refs.commain.focus();
            },200);
        },
        handleEmotion (i) {
            this.content += i
        },
        // 将匹配结果替换表情图片
        emotion (res) {
        let word = res.replace(/\#|\;/gi,'')
        const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
        let index = list.indexOf(word)
        return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" align="middle">`   
        },
        getface(){
            this.$store.commit("getface",true);
        },
        getface1(){
            this.$store.commit("getface",false);
        },
        send(){
            let sendnei = this.$refs.commain.value;
            if(sendnei!=""){
                this.$store.commit("send",sendnei);
                this.$refs.commain.value = "";
                this.content = "";
            }
        }
    }
}
</script>
<style lang="scss" scoped="" type="text/css">
div{
    width: 100%;
    border-top: 1px solid #e3e3e3;
    .cb_main{
        width: 3.35rem;
        height: .34rem;
        margin: .1rem auto;
        border: 1px solid #e2e2e2;
        border-radius: .17rem;
        color: #cbcbcb;
        font-size: .15rem;
        text-indent: .2rem;
        line-height: .34rem;
        input{
            margin-top: .09rem;
            margin-left: .2rem;
            font-size: .15rem;
            color: #000;
            border: none;
        }
        span{
            font-size: .22rem;
            color: #444645;
            line-height: .34rem;
        }
    }
    .focu{
        width: 2.83rem;
        float: left;
        text-indent: 0;
        margin-left: .19rem;
    }
    .send{
        font-size: .16rem;
        color: #9f9f9f;
        font-weight: bold;
        float: right;
        margin-right: .19rem;
        margin-top: .17rem;
    }
        // 改变input里placeholder的样式
    .main::-webkit-input-placeholder {
        color: #cbcbcb;
    }
    .main:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    #cbcbcb;
    }
    .main::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #cbcbcb;
    }
    .main:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:    #cbcbcb;
    }
}
</style>