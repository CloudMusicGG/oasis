<!--
 * @Author: Eternal
 * @Date: 2019-11-26 14:32:25
 * @LastEditors: Eternal
 * @LastEditTime: 2019-12-04 21:20:43
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-02 19:54:40
 * @Description: 搜素框组件
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-30 15:19:20
 * @Description: 
 -->
<template>
  <div class="searchbox">
       <div class="searchbox_w">
           <div class="searchbox_box">
               <label for="">
                    <i class="icon iconfont">&#xe739;</i>
               </label>
               <input type="text" placeholder="搜素用户和动态" v-model="text" @input="beforeSearcher">
           </div>
           <span @click="back">取消</span>
       </div> 
  </div>
  
</template>

<script>
import { Toast } from 'mint-ui';
import Axios from "axios";
export default {
    name:"SearchBox",
    props:['get'],
    data () {
        return {
            text:"",
            fun:this.searcher,
            methe:[],
            opop:"",
            myTimer:null
        }
    },
    created() {
         this.$emit("PassValue",this.fun);
        //  console.log(this.fun)
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        beforeSearcher(){
            if(this.myTimer != null){
                clearTimeout(this.myTimer); 
                this.myTimer = null;
            }  
            this.myTimer = setTimeout(()=>{
                this.searcher();
            },1000);	
        },
        searcher(opop){
            // var mp = this.d
            let typeOpop =  typeof opop;
            if(typeOpop == "string"){
                this.text = opop;
            }
            var t = this.text;
            if(t == "") {
                 Toast({
                    message: '搜素内容不能为空',
                    position: 'bottom',
                    duration: 1000
                });
            }else {
                 //主题
                //  var t = this.d
                 Axios.get("/methe",{params: {id:t}})
                .then(res=>{
                    // if(this.yonghu =="用户") {
                        this.methe = res.data;
                    // }
                })
                let fun = this.fun
                Axios.get("/RelatedUsers",{params: {id:t}})
                .then(res=>{
                    // if(this.yonghu =="用户") {
                        let Result = res.data;
                        this.$emit("update", Result, t,this.fun,this.methe,)
                    // }
                })
               
            } 
        }
    }
}
</script>

<style lang="scss" scoped> 
@import url(../assets/font/iconfont.css);
.searchbox{
    width: 100%;
    height: .48rem;
    background: #fff;
    position: fixed;
    top: 0;
    z-index: 999;
}
.searchbox_w {
    width: 3.28rem;
    height: 100%;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // box-shadow: -1px 0px 2px rgb(230, 230, 230);
}
.searchbox_box {
    width: 2.7rem;
    height: .33rem;
    border-radius: .15rem;
    background: #f4f4f4;
    padding-left: .14rem;
    display: flex;
    align-items: center;
}
input {
    width: 100%;
    height: 100%;
    border-radius: .15rem;
    background: transparent;
    border: 0;
    outline: none;
    margin-left: .17rem;
    font-size: 14px;
    caret-color:blue;
}
span {
    font-size: .16rem;
    margin-right: 0;
}
</style>