<!--
 * @Author: your name
 * @Date: 2019-12-01 13:21:06
 * @LastEditTime: 2019-12-02 15:03:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eshopappe:\三阶段\第三阶段\workspace\oasis\src\components\comment.vue
 -->
<template>
    <div @click="getfocu()" ref="commain">
        <div class="top">
            <goback class="goback"></goback>
            <p>评论</p>
        </div>
    </div>
</template>
<script>
import goback from './goback';
export default {
    name:'comtop',
    data(){
        return {
            
        }
    },
    components:{
        goback
    },
    methods:{
        getfocu(){
            this.$store.commit("getfocu",true);
            this.$store.commit("getface",false);
        }
    }
}
</script>
<style lang="scss" scoped="" type="text/css">
.top{
    width: 3.35rem;
    height: .48rem;
    margin: 0 auto;
    p{
        font-size: .17rem;
        color: black;
        font-weight: bold;
        text-align: center;
        line-height: .48rem;
    }
}
.goback{
    margin-left: -10px;
}
</style>