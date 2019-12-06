/*
 * @Author: rosalee
 * @Date: 2019-11-26 10:57:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-05 22:04:26
 * @LastEditors: Eternal
 * @LastEditTime: 2019-12-05 09:36:25
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-30 20:56:20
 * @Description:
 */

import Vue from 'vue'
import VueX from 'vueX'
import Axios from 'axios'
import axios from 'axios';

Vue.use(VueX)

let store =  new VueX.Store({
    state: {//存储数据
        Records:[],
        nowPid: [],//该用户已经点赞的文章的id数组
        likePidAndNum: [],//文章的id和点赞数，组成的对象数组，在pages的Recommend中获取的
        Tel: "123",
        isLogin: false,
        userInfo: {
        },//用户详细信息
        likePidAndNum: [],
        FootShow:[
             false,
             false,
             false,
             false
        ],
        imgs:[],
        nowFocus:[],//存储当前这个用户关注的人
        zanedinfo:[],//存储每篇文章赞的信息
        currheaderimg:'',
        currid:'',//当前用户id
        currusername:'',
        currwenid:'',//当前文章id
        isshow:true,
        faceshow:false,
        isxian:false,
        currTime:"",
        infos:{},
        conid:"",
        conusername:""
    },
    mutations: {//跟踪状态
        SearchRecord(state,Records){
            state.Records = Records
        },
        changelikePidAndNum(state, likePidAndNum) {
            state.likePidAndNum = likePidAndNum;
        },
        changeNowPid(state, nowPid) {
            // console.log(state.nowPid);
            state.nowPid = nowPid;
        },
        changeLogin(state, param) {
            state.isLogin = param;
        },
        changUserInfo(state, data) {
            state.userInfo = data;
        },
        changePidAndLike(state, { id, index }) {
            // 如果下标不存在
            if (index < 0) {
                // 把这个文章的id添加到nowPid数组中
                (state.nowPid).push(id);
                for (let i = 0; i < (state.likePidAndNum).length; i++) {
                    if (id == state.likePidAndNum[i].id) {
                        state.likePidAndNum[i].like++;

                        let likenum = state.likePidAndNum[i].like;
                        let data = "like=" + likenum;
                        let userdata = "likePostIds=" + state.nowPid;
                        // 此处向后端发一下数据增加点赞数
                        Axios.patch(
                            "/postInfo/" + id,
                            data,
                            { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
                            .then(response => {
                                // console.log(response.data);
                            });
                        // 此处向后端发请求
                        Axios.patch(
                            "/userInfo/" + state.userInfo[0].id,
                            userdata,
                            { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
                            .then(response => {
                                // console.log(response.data);
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
                        let data = "like=" + likenum;
                        let userdata = "likePostIds=" + state.nowPid;

                        Axios.patch(
                            "/postInfo/" + id,
                            data,
                            { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
                            .then(response => {
                                // console.log(response.data);
                            });
                        // 此处向后端发请求
                        Axios.patch(
                            "/userInfo/" + state.userInfo[0].id,
                            userdata,
                            { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
                            .then(response => {
                                // console.log(response.data);
                            });
                    }
                }
            }
        },
        changeCheck(state,index){
          state.FootShow = [
            false,
            false,
            false,
            false
          ];
          state.FootShow[index] = true;
        },
        // 修改用户信息
        updateUserInfo(state,value){
          for(let key in value){
            state.userInfo[key] = value[key];
          }
          
          // 此处向后端发请求
          // Axios.patch(
          //     "/userInfo/" + state.userInfo[0].id,
          //     userdata,
          //     { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
          //     .then(response => {
          //         console.log(response.data);
          //     });
       
        },
        //跟踪状态
        getimgs(state,imgs){
            state.imgs = imgs;
            //循环请求过来的数据，将点赞文章的id，次数，和头像放到数组里
            let arr = [];
            for(let i=0;i<imgs.length;i++){
                let arr1 = imgs[i].zaned.split(",");
                arr.push({
                    id:imgs[i].id,
                    headerimg:arr1
                });
            }
            state.zanedinfo = arr;
            
            state.currheaderimg = localStorage.getItem('userImg');
            state.currid = localStorage.getItem('userId');
        },
        changexin(state,{id,index}){

                function sendzaned(data){
                    return axios.patch(
                        'imgs/'+id,
                        data,
                        {headers: { "Content-Type": "application/x-www-form-urlencoded" }}
                    );
                }

                function sendusername(data,currid){
                    return axios.patch(
                        'userInfo',
                        data,
                        {headers: { "Content-Type": "application/x-www-form-urlencoded" }}
                    );
                }

            if(index<0){
                //如果没有这个下标，就把他放进去
                state.nowPid.splice(0,0,id);
                
                //向后端发请求
                for(let i=0;i<state.zanedinfo.length;i++){
                    // console.log(state.zanedinfo)
                    if(id==state.zanedinfo[i].id){
                        // 获取本地头像，将头像放到state.zanedinfo里
                        state.zanedinfo[i].headerimg.splice(0,0,state.currheaderimg);

                        let data = "zaned="+state.zanedinfo[i].headerimg;
                        let data1 = "likePostIds="+state.nowPid;

                        axios.all([sendzaned(data),sendusername(data1,state.currid)])
                        .then(axios.spread(function (reszaned,resusername) {
                            // 两个请求现在都执行完成
                        })
                        );
                    }
                }
            }else{
                //如果有，就将他删掉
                state.nowPid.splice(index,1);
                for(let i=0;i<state.zanedinfo.length;i++){
                    console.log(state.zanedinfo)
                    if(id==state.zanedinfo[i].id){
                        state.zanedinfo[i].headerimg.splice(index,1);
                       
                        let data = "zaned="+state.zanedinfo[i].headerimg;
                        let data1 = "likePostIds="+state.nowPid;

                        axios.all([sendzaned(data),sendusername(data1,state.currid)])
                        .then(axios.spread(function (reszaned,resusername) {
                            // 两个请求现在都执行完成
                        })
                        );
                    }
                }
            }
        },
        changefocus(state,{id,index}){
            if(index<0){
                //如果没有这个下标，就把他放进去
                state.nowFocus.splice(0,0,id);
                let data = "foucsId="+state.nowFocus;
                axios.patch(
                    'userInfo',
                    data,
                    {headers: { "Content-Type": "application/x-www-form-urlencoded" }}
                )
                .then(res=>{
                })
            }else{
                //如果有，就将他删掉
                state.nowFocus.splice(index,1);
                let data = "foucsId="+state.nowFocus;
                axios.patch(
                    'userInfo',
                    data,
                    {headers: { "Content-Type": "application/x-www-form-urlencoded" }}
                )
                .then(res=>{
                })
            }
        },
        getnowid(state,data){
            let arr2 = data.likePostIds.split(",");
            let arr3 = data.foucsId.split(",");
            state.nowPid = arr2;
            state.nowFocus = arr3;
        },
        getcomment(state,id){
            state.currwenid = id;
        },
        getinfos(state,context){
            state.infos = context;
        },
        getfocu(state,type){
            state.isshow = type;
        },
        getface(state,type){
            state.faceshow = type;
        },
        getcomper(state,cont){
            state.conid = cont.id;
            state.conusername = "回复"+cont.username;
        },
        send(state,context){
            
            state.currheaderimg = localStorage.getItem('userImg');
            state.currid = localStorage.getItem('userId');
            state.currusername = localStorage.getItem('username');
            
            //调用当前mutation下的函数
            this.commit('getDate');
            state.infos.commentsnum++;

            for(let i in state.infos){
                if(i=="comments"){
                   for(let j in state.infos[i]){
                       if(state.infos[i][j].id==state.conid){
                            let obj;
                            if(state.infos[i][j].username==state.conusername){
                               obj = {
                                    "from": state.currid,
                                    "username":state.currusername,
                                    "headerimg":state.currheaderimg,
                                    "neirong":context,
                                    "time":state.currTime,
                                    "aita":""
                                };
                            }else{
                                obj = {
                                    "from": state.currid,
                                    "username":state.currusername,
                                    "headerimg":state.currheaderimg,
                                    "neirong":context,
                                    "time":state.currTime,
                                    "aita":state.conusername
                                };
                            }

                            state.infos[i][j].speak.splice(0,0,obj);
                            state.conid = "";
                            this.commit('senddata');
                            return;
                       }
                   }

                   let obj = {
                        "id": state.currid,
                        "username":state.currusername,
                        "headerimg":state.currheaderimg,
                        "neirong":context,
                        "time":state.currTime,
                        "speak":[]
                    };
                    state.infos[i].splice(0,0,obj);
                }
            }

            for(let i in state.imgs){
                if(state.imgs[i].id==state.currwenid){
                    state.imgs.splice(i,1,state.infos);
                }
            }

            this.commit('senddata');
        },
        getDate(state){
            let d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth()+1;
            month = month<10?"0"+month:month;
            let day = d.getDate();
            day = day<10?"0"+day:day;
            let hours = d.getHours();
            hours = hours<10?"0"+hours:hours;
            let minutes = d.getMinutes();
            minutes = minutes<10?"0"+minutes:minutes;
            let seconds = d.getSeconds();
            seconds = seconds<10?"0"+seconds:seconds;

            state.currTime = year+"-"+month+"-"+day+"  "+hours+":"+minutes+":"+seconds;

        },
        senddata(state){
            axios.patch(
            "imgs/"+state.currwenid,
            state.infos,
            {headers: { "Content-Type": "application/json" }}
            )
            .then(res=>{
            });
        },
        getxian(state,xian){
            state.isxian = xian;
            state.isshow = !xian;
        }
    },
    actions: {//有异步请求，异步请求完成后，提交mutations
        getnowid(context){
            // let currid = localStorage.getItem('userId');
            axios.get('userInfo')
            .then(res=>{
                context.commit('getnowid',res.data);
            })
        }
    }
})
export default  store;