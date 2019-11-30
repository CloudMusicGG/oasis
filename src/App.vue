<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios';
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
  }
}
</script>

<style>
@import url(../src/assets/fontIcon/font_1529796_1qf16sktago/iconfont.css);
#app{
}
</style>
