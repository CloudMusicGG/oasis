<!--
 * @Author: Eternal
 * @Date: 2019-11-26 14:41:24
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-26 17:05:11
 * @Description: 搜素页
 -->
<template>
    <div>
        <SearchBox></SearchBox>
        <Recommend></Recommend>
        <CheckIn></CheckIn>
    </div>
</template>

<script>
import SearchBox from '../components/SearchBox';
import Recommend from '../components/Recommend';
import CheckIn from '../components/CheckIn';
export default {
    name:"Search",
    data() {
        return {

        }
    },
    components:{
         SearchBox,
         Recommend,
         CheckIn
    }
}
</script>

<style>

</style>