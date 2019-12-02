<template>
  <div>
    <msgHead></msgHead>
    <msgNav class="msgNav"></msgNav>
  </div>
</template>

<script>
import msgHead from "../components/message/msgHead";
import msgNav from "../components/message/msgNav";
export default {
  name: 'message',
  data () {
    return {

    }
  },
  components:{
    msgHead
    ,msgNav
  },
  created(){
    this.$store.commit('changeCheck', 2);
  }
}
</script>

<style scoped>
  .msgNav{
    margin-top: .2rem;
  }
</style>
