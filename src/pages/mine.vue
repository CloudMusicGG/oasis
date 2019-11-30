<template>
  <div>
    <mineHead></mineHead>
    <mineInfo></mineInfo>
  </div>
</template>

<script>
import mineHead from "../components/mine/mineHead";
import mineInfo from "../components/mine/mineInfo";
export default {
  name: 'mine',
  data () {
    return {

    }
  },
  components:{
    mineHead
    ,mineInfo
  }
}
</script>

<style scoped>
</style>
