<!--
 * @Author: Eternal
 * @Date: 2019-11-26 14:41:24
 * @LastEditors: roselee
 * @LastEditTime: 2019-12-02 20:31:42
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-30 17:11:22
 * @Description: 搜素页 SearchBox:搜素框组件；Navigation:导航栏组件；     Recommend：最近搜素组件；Relevant：瀑布流组件；CheckIn：最新入住组件；   user:相关用户组件
 -->
<template>
    <div>
        <SearchBox class="SearchBox" @update="pre" :get="get" @PassValue="pv"></SearchBox>
        <Navigation v-show="display" class="Navigation" @RelatedUsers="pass" :fun="fn"></Navigation>
        <Recommend v-show="hide" :fu="fn" :changeSearch="changeSearch"></Recommend>
        <user v-show="user" :v="b"></user>
        <Relevant v-show="Relevant" :v="n"></Relevant>
        <CheckIn v-show="checkin"></CheckIn>
        <theme :v="methe" v-show="theme"></theme>
    </div>
</template>

<script>
import SearchBox from '../components/SearchBox';
import Recommend from '../components/Recommend';
import CheckIn from '../components/CheckIn';
import Navigation from '../components/Navigation';
import Relevant from '../components/Recommend/Recommend-content';
import user from '../components/user';
import theme from '../components/theme';
export default {
    name:"Search",
    data() {
        return {
            b:'',
            n:'',
            get:'',
            fun: '',
            methe:'',
            fn:'',
            display:false,
            hide: true,
            Relevant:false,
            checkin:true,
            user:false,
            theme:false,
            changeSearch:true
        }
    },
    methods:{
        pre(t,m,fun,methe) {
           this.b = t
           this.n = m
           this.fun = fun
        //    console.log(this.fun)
           this.methe = methe
           this.display=true
           this.hide=false
           if(this.get == "用户"){
                this.Relevant=false
                this.user=true
                this.theme=false
           }else if(this.get == "动态"){
            //    console.log(this.get)
               this.user = false
               this.Relevant=true
               this.theme=false
           }else if(this.get == ''){
                this.user=true
                this.Relevant=true
                this.theme=false
           }else if (this.get == '全部') {
                this.user=true
                this.Relevant=true
                 this.theme=false
           }
           else if (this.get == "主题") {
                this.theme=true
                this.user=false
                this.Relevant=false
           }
          
           this.checkin=false
        },
        pass(get) {
            this.get = get
        },
        //搜素组件传过来的函数
        pv(fn) {
            this.fn = fn
            // console.log(fn)
        }
    },
    components:{
         SearchBox,
         Recommend,
         CheckIn,
         Navigation,
         Relevant,
         user,
         theme
    },
    created(){
      this.$store.commit('changeCheck', 1);
    },
    updated(){
        // console.log("!");
        this.changeSearch = true;
    }
}
</script>

<style scoped>
    .Navigation {
        margin-bottom:1rem;
    }
    /* .SearchBox {
        position: fixed;
        top: 0;
    } */
</style>
