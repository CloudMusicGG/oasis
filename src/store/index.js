/*
 * @Author: rosalee
 * @Date: 2019-11-26 10:57:24
 * @LastEditors: rosalee
 * @LastEditTime: 2019-11-26 10:57:56
 * @Description:
 */

import Vue from 'vue'
import VueX from 'vueX'

Vue.use(VueX)

export default new VueX.Store({
    state: {//存储数据
        Tel:"123",
        isLogin:false,
        userInfo:{
          }
    },
    mutations: {//跟踪状态
        changeTel(state,tel){
            state.Tel = tel;
        },
        changeLogin(state,param){
            state.isLogin = param;
        },
        changUserInfo(state,data){
            state.userInfo = data;
            // for(let key in data){
            //   state.userInfo[key] = data[key];
            // }
        }
    },
    actions: {//有异步请求，异步请求完成后，提交mutations

    }
})
