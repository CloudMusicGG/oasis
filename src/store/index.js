/*
 * @Author: rosalee
 * @Date: 2019-11-26 10:57:24
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-28 21:00:50
 * @Description: 
 */

import Vue from 'vue'
import VueX from 'vueX'
import Axios from 'axios'

Vue.use(VueX)

export default new VueX.Store({
    state: {//存储数据
        nowPid: [],
        likePidAndNum: []
    },
    mutations: {//跟踪状态
        changelikePidAndNum(state, likePidAndNum) {
            state.likePidAndNum = likePidAndNum;
        },
        changePidAndLike(state, { id, index }) {
            if (index < 0) {
                (state.nowPid).push(id);
                // 此处需要向后端发一下数据增加点赞数
                for (let i = 0; i < (state.likePidAndNum).length; i++) {
                    if (id == state.likePidAndNum[i].id) {
                        state.likePidAndNum[i].like++;
                        
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
