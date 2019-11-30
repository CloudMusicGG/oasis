<!--
 * @Author: Eternal
 * @Date: 2019-11-29 15:02:51
 * @LastEditors: Eternal
 * @LastEditTime: 2019-11-29 20:38:14
 * @Description: 
 -->
<template>
    <div>
         <SearchBox></SearchBox>
         <Navigation></Navigation> 
         <user></user>
        <Recommend></Recommend>
    </div>
</template>

<script>
import Navigation from "../components/Navigation";
import SearchBox from "../components/SearchBox";
import user from "../components/user";
import Recommend from "../components/Recommend-content";

export default {
    data() {
        return {
            
        }
    },
      components:{
         Navigation,SearchBox,user,Recommend
      }
}
</script>

<style>
</style>