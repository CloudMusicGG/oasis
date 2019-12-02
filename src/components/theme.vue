<!--
 * @Author: Eternal
 * @Date: 2019-12-01 16:15:43
 * @LastEditors: Eternal
 * @LastEditTime: 2019-12-01 17:53:41
 * @Description: 
 -->
<template>
    <div class="theme">
        <div class="theme_w">
          <ul class="theme_ul">
              <li v-for = "(v, index) in v" :key="index">
                  <div class="theme_li_left">
                      <img :src="v.img">{{v.name}}
                  </div>
                  <span>{{v.dynamic}}动态</span>
              </li>
          </ul>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
export default {
    name: "methe",
    props:["v"],
    data(){
        return {
            themeLists:[]
        }
    },
    // methods(){
    //     Axios.get("/methe", {params: {id:this.v}})
    //     .then(res=>{
    //         this.themeLists = res.data
    //         console.log(this.themeLists)
    //     })
    // }
}
</script>

<style lang="scss" scoped>
    .theme {
        width: 100%;
    }
    .theme_w {
        width:3.38rem;
        margin: auto;
    }
    .theme_ul li {
        width: 100%;
        height: .49rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ccc;
        font-size: 14px;
    }
    .theme_li_left {
        font-size: .16rem;
        color: #000;
    }
    .theme_li_left img {
        width: .16rem;
        height: .16rem;
        border-radius: 50%;
        margin-right: .04rem;
        vertical-align:middle;
    }
</style>