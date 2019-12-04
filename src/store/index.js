/*
 * @Author: rosalee
 * @Date: 2019-11-26 10:57:24
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-04 14:40:14
 * @Description: 
 */

import Vue from 'vue'
import VueX from 'vueX'
import axios from 'axios';

Vue.use(VueX)

let store =  new VueX.Store({
    state: {//存储数据
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