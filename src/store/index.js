/*
 * @Author: rosalee
 * @Date: 2019-11-26 10:57:24
<<<<<<< HEAD
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-02 17:57:07
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-30 20:56:20
 * @Description:
=======
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-04 14:40:14
 * @Description: 
>>>>>>> liberty
 */

import Vue from 'vue'
import VueX from 'vueX'
<<<<<<< HEAD
import Axios from 'axios'
=======
import axios from 'axios';
>>>>>>> liberty

Vue.use(VueX)

let store =  new VueX.Store({
    state: {//存储数据
<<<<<<< HEAD
        nowPid: [],//该用户已经点赞的文章的id数组
        likePidAndNum: [],//文章的id和点赞数，组成的对象数组，在pages的Recommend中获取的
        Tel: "123",
        isLogin: false,
        userInfo: {
        },//用户详细信息
        nowPid: [],
        likePidAndNum: [],
        FootShow:[
             false,
             false,
             false,
             false
        ]
    },
    mutations: {//跟踪状态
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
=======
        imgs:[],
        nowPid:[],
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
            console.log("state.zanedinfo:");
            console.log(state.zanedinfo)
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
                        'username/'+currid,
                        data,
                        {headers: { "Content-Type": "application/x-www-form-urlencoded" }}
                    );
                }

            if(index<0){
                //如果没有这个下标，就把他放进去
                state.nowPid.splice(0,0,id);
                
                //向后端发请求
                for(let i=0;i<state.zanedinfo.length;i++){
                    console.log(state.zanedinfo)
                    if(id==state.zanedinfo[i].id){
                        // 获取本地头像，将头像放到state.zanedinfo里
                        // let currheaderimg = localStorage.getItem('userImg');
                        // let currid = localStorage.getItem('userId');
                        state.zanedinfo[i].headerimg.splice(0,0,state.currheaderimg);


                        let data = "zaned="+state.zanedinfo[i].headerimg;
                        let data1 = "zan="+state.nowPid;

                        // axios.patch(
                        //     'imgs/'+id,
                        //     data,
                        //     {headers: { "Content-Type": "application/x-www-form-urlencoded" }}
                        // )
                        // .then(res=>{
                        //     console.log(res.data.zaned);
                        // });
                        
                console.log("哈哈哈");
                console.log(state.nowPid);

                        axios.all([sendzaned(data),sendusername(data1,state.currid)])
                        .then(axios.spread(function (reszaned,resusername) {
                            console.log(reszaned.data);
                            console.log(resusername.data);
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
                        console.log("头像");

                        console.log(state.zanedinfo[i]);
                        // let currid = localStorage.getItem('userId');
                        let data = "zaned="+state.zanedinfo[i].headerimg;
                        let data1 = "zan="+state.nowPid;
                        console.log(data);
                        // axios.patch(
                        //     'imgs/'+id,
                        //     data,
                        //     {headers: { "Content-Type": "application/x-www-form-urlencoded" }}
                        // )
                        // .then(res=>{
                        //     console.log(res.data);
                        // });

                        axios.all([sendzaned(data),sendusername(data1,state.currid)])
                        .then(axios.spread(function (reszaned,resusername) {
                            console.log(reszaned.data);
                            console.log(resusername.data);
                            // 两个请求现在都执行完成
                        })
                        );
                    }
                }
            }
            console.log(state.nowPid)
        },
        getnowid(state,data){
            let arr2 = data.zan.split(",");
            state.nowPid = arr2;
        },
        getcomment(state,id){
            state.currwenid = id;
            console.log(state.currwenid);
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
                            console.log(state.infos[i][j])
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
                console.log("回应了")
                console.log(res.data);
            });
        },
        getxian(state,xian){
            state.isxian = xian;
            state.isshow = !xian;
>>>>>>> liberty
        }
    },
    actions: {//有异步请求，异步请求完成后，提交mutations
        getnowid(context){
            let currid = localStorage.getItem('userId');
            axios.get('username/'+currid)
            .then(res=>{
                context.commit('getnowid',res.data);
            })
        }
    }
})
export default  store;