<template>
  <div id="app">
    <router-view/>
    <IndexFooter class="Foot"></IndexFooter>
  </div>
</template>

<script>
import axios from 'axios';
import IndexFooter from "@/components/IndexFooter.vue";
export default {
  name: 'App',
  created(){
    axios
      .get('/userInfo')
      .then((response) => {
        let data = response.data;
        this.$store.commit('changUserInfo', data);
      })
      .catch((err) =>{
        console.log(err);
      })
  },
  components:{
    IndexFooter
  }
}
</script>

<style>
@import url(../src/assets/fontIcon/font_1529796_1qf16sktago/iconfont.css);
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: 26.67vw;
  height: 100%;
}
body {
  font-size: 14px;
  height: 100%;
}
.red {
  color: red;
  font-size: 18px;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
  display: block;
}
.el-tabs__item .is-active {
  font-weight: bolder;
  font-size: .18rem;
  color:black;
}

.Foot{
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid #E2E2E2;
  box-shadow: 0 -.05rem .2rem .05rem #33333312;
}
</style>
