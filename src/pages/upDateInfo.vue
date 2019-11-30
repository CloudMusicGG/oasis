<template>
  <div>
    <upDateInfoBack></upDateInfoBack>
    <upDateInfoDetil></upDateInfoDetil>
  </div>
</template>

<script>
import upDateInfoBack from "@/components/upDateInfo/upDateInfoBack.vue"
import upDateInfoDetil from "@/components/upDateInfo/upDateInfoDetil.vue"
export default {
  name: 'upDateInfo',
  data () {
    return {

    }
  },
  components:{
    upDateInfoBack
    ,upDateInfoDetil
  }
}
</script>

<style scoped lang="scss">
</style>
