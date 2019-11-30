<!--
 * @Author: Eternal
 * @Date: 2019-11-26 14:41:24
 * @LastEditors: roselee
 * @LastEditTime: 2019-11-30 17:11:22
 * @Description: 搜素页 SearchBox:搜素框组件；Navigation:导航栏组件；     Recommend：最近搜素组件；Relevant：瀑布流组件；CheckIn：最新入住组件；   user:相关用户组件
 -->
<template>
    <div>
        <SearchBox class="SearchBox" @update="pre"></SearchBox>
        <Navigation v-show="display" class="Navigation"></Navigation>
        <Recommend v-show="hide" :mm="b"></Recommend>
        <user v-show="user"></user>
        <Relevant v-show="Relevant"></Relevant>
        <CheckIn v-show="checkin"></CheckIn>
    </div>
</template>

<script>
import SearchBox from '../components/SearchBox';
import Recommend from '../components/Recommend';
import CheckIn from '../components/CheckIn';
import Navigation from '../components/Navigation';
import Relevant from '../components/Recommend/Recommend-content';
import user from '../components/user';
export default {
    name:"Search",
    data() {
        return {
            b:'1',
            display:false,
            hide: true,
            Relevant:false,
            checkin:true,
            user:false
        }
    },
    methods:{
        pre(t) {
           this.b = t
           this.display=true
           this.hide=false
           this.Relevant=true
           this.checkin=false
           this.user=true
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

<style>
    .Navigation {
        margin-bottom:1rem;
    }
    /* .SearchBox {
        position: fixed;
        top: 0;
    } */
</style>