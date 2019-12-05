<template>
  <div>
    <newPraisesBack></newPraisesBack>
    <newPraisesList></newPraisesList>
  </div>
</template>

<script>
import newPraisesBack from "@/components/newPraises/newPraisesBack.vue"
import newPraisesList from "@/components/newPraises/newPraisesList.vue"
export default {
  name: 'newPraises',
  data () {
    return {

    }
  },
  components:{
    newPraisesBack
    ,newPraisesList
  }
}
</script>

<style scoped lang="scss">
</style>
