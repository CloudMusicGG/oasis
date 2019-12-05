<!--
 * @Author: your name
 * @Date: 2019-11-26 14:30:45
 * @LastEditTime: 2019-12-05 10:59:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day23e:\三阶段\第三阶段\workspace\oasis\src\pages\homepage.vue
 -->
<template>
    <div>
        <header>绿洲</header>
        <home></home> 
        <combottom class="combottom" @click.self="getfocu2()" v-show="$store.state.isxian"></combottom>
        <!-- <test></test> -->
    </div> 
</template>
<script>
import home from "../components/home";
import combottom from '../components/combottom';
// import test from "../components/test";
export default {
    name:"homepage",
    data(){
        return{
            isshow:false
        }
    },
    components:{
        home,combottom
    },
    methods:{
        getfocu2(){
            this.$store.commit("getxian",true);
        }
    },
    created(){
        this.$store.commit('changeCheck', 0);
    }
}
</script>
<style lang="scss" scoped="" type="text/css">
    header{
        width:100%;
        height:.55rem;
        font-size:.28rem;
        color:black;
        text-align:center;
        line-height: .55rem;
        font-family: '宋体';
        border-bottom:1px solid #eeeeee;
    }
    .combottom{
        position: fixed;
        left: 0;
        bottom: 0;
        background: white;
        z-index:3;
    }
</style>