/*
 * @Author: rosalee
 * @Date: 2019-11-26 10:57:24
 * @LastEditors: Eternal
 * @LastEditTime: 2019-12-02 11:45:34
 * @Description: 
 */

import Vue from 'vue'
import VueX from 'vueX'
import Axios from 'axios'

Vue.use(VueX)

export default new VueX.Store({
    state: {//存储数据
        nowPid: [],//该用户已经点赞的文章的id数组
        likePidAndNum: [],//文章的id和点赞数，组成的对象数组，在pages的Recommend中获取的
        Tel:"123",
        isLogin:false,
        userInfo:{
          },
        nowPid: [],
        likePidAndNum: []
    },
    mutations: {//跟踪状态
        changelikePidAndNum(state, likePidAndNum) {
            state.likePidAndNum = likePidAndNum;
        },
        changeLogin(state,param){
            state.isLogin = param;
        },
        changUserInfo(state,data){
            state.userInfo = data;
        },
        // searcher(){
        //     if(this.text == "") {
        //          Toast({
        //             message: '搜素内容不能为空',
        //              position: 'bottom',
        //             duration: 1000
        //         });
        //     }else {
        //          //主题
        //          var t = this.text
        //          Axios.get("/methe",{params: {id:t}})
        //         .then(res=>{
        //             // if(this.yonghu =="用户") {
        //                 this.methe = res.data;
        //             // }
        //         }) 
                
        //         let fun = this.fun
        //         Axios.get("/RelatedUsers",{params: {id:t}})
        //         .then(res=>{
        //             // if(this.yonghu =="用户") {
        //                 let Result = res.data.splice(0,3);
        //                 this.$emit("update", Result, t,fun,this.methe)
        //             // }
        //         })
               
        //     } 
        // },
        changePidAndLike(state, { id, index }) {
            // 如果下标不存在
            if (index < 0) {
                // 把这个文章的id添加到nowPid数组中
                (state.nowPid).push(id);
                for (let i = 0; i < (state.likePidAndNum).length; i++) {
                    if (id == state.likePidAndNum[i].id) {
                        state.likePidAndNum[i].like++;
                        
                        let likenum = state.likePidAndNum[i].like;
                        let data = "like="+likenum;
                        
                        // 此处向后端发一下数据增加点赞数
                        Axios.patch(
                            "/postInfo/" + id,
                            data,
                            {headers: { "Content-Type": "application/x-www-form-urlencoded" }})
                            .then(response => {
                                console.log(response.data);
                        });
                    }
                }
            } else {
                let index = state.nowPid.indexOf(id);
                (state.nowPid).splice(index, 1);
                // 此处需要向后端发一下数据减少点赞数
                for (let i = 0; i < (state.likePidAndNum).length; i++) {
                    if (id == state.likePidAndNum[i].id) {
                        state.likePidAndNum[i].like--;

                        let likenum = state.likePidAndNum[i].like;
                        let data = "like="+likenum;

                        Axios.patch(
                            "/postInfo/" + id,
                            data,
                            {headers: { "Content-Type": "application/x-www-form-urlencoded" }})
                            .then(response => {
                                console.log(response.data);
                        });
                    }
                }
            }
        }
    },
    actions: {//有异步请求，异步请求完成后，提交mutations

    }
})
