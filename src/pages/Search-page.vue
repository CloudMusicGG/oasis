<!--
 * @Author: Eternal
 * @Date: 2019-11-26 14:41:24
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-30 20:47:07
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-30 15:24:15
 * @Description: 搜素页 SearchBox:搜素框组件；Navigation:导航栏组件；     Recommend：最近搜素组件；Relevant：瀑布流组件；CheckIn：最新入住组件；   user:相关用户组件
 -->
<template>
    <div>
        <SearchBox class="SearchBox" @update="pre" :get="get"></SearchBox>
        <Navigation v-show="display" class="Navigation" @RelatedUsers="pass"></Navigation>
        <Recommend v-show="hide"></Recommend>
        <user v-show="user" :v="b"></user>
        <Relevant v-show="Relevant" :v="n"></Relevant>
        <CheckIn v-show="checkin"></CheckIn>
    </div>
</template>

<script>
import SearchBox from '../components/SearchBox';
import Recommend from '../components/Recommend';
import CheckIn from '../components/CheckIn';
import Navigation from '../components/Navigation';
import Relevant from '../components/Recommend-content';
import user from '../components/user';
export default {
    name:"Search",
    data() {
        return {
            b:'',
            n:'',
            get:'',
            display:false,
            hide: true,
            Relevant:false,
            checkin:true,
            user:false
        }
    },
    methods:{
        pre(t,m) {
           this.b = t
           this.n = m
           this.display=true
           this.hide=false
           this.Relevant=true
           this.checkin=false
           this.user=true
        },
        pass(get) {
            this.get = get
            // console.log(this.get)
        }
    },
    components:{
         SearchBox,
         Recommend,
         CheckIn,
         Navigation,
         Relevant,
         user
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