<template>
  <div>
    <mineHead></mineHead>
    <mineInfo></mineInfo>
    <minePost></minePost>
  </div>
</template>

<script>
import mineHead from "../components/mine/mineHead";
import mineInfo from "../components/mine/mineInfo";
import minePost from "../components/mine/minePost";
export default {
  name: 'mine',
  data () {
    return {

    }
  },
  components:{
    mineHead
    ,mineInfo
    ,minePost
  },
  created(){
    this.$store.commit('changeCheck', 3);
  }
}
</script>

<style scoped>
</style>
