<!--
 * @Author: your name
 * @Date: 2019-12-01 13:31:45
 * @LastEditTime: 2019-12-05 10:59:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \eshopappe:\三阶段\第三阶段\workspace\oasis\src\pages\commentpage.vue
 -->
<template>
    <div>
        <comtop class="comtop"></comtop>
        <commain class="commain"></commain>
        <combottom class="combottom"></combottom>
    </div>
</template>
<script>
import comtop from '../components/comtop';
import commain from '../components/commain';
import combottom from '../components/combottom';
export default {
    name:'commentpage',
    data(){
        return {
            
        }
    },
    components:{
        comtop,commain,combottom
    }
}
</script>
<style lang="scss" scoped="" type="text/css">
.comtop{
    width: 100%;
    box-shadow: 0 3px 5px 1px #f4f4f4;
    position: fixed;
    left: 0;
    top: 0;
    background: white;
}
.commain{
    min-height: 5.6rem;
    margin-top: .48rem;
    margin-bottom: .58rem;
}
.combottom{
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    z-index:3;
}
</style>