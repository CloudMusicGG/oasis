<template>
  <div>
    <newFocusBack></newFocusBack>
    <newFocusList></newFocusList>
  </div>
</template>

<script>
import newFocusBack from "@/components/newFocus/newFocusBack.vue"
import newFocusList from "@/components/newFocus/newFocusList.vue"
export default {
  name: 'newFocus',
  data () {
    return {

    }
  },
  components:{
    newFocusBack
    ,newFocusList
  }
}
</script>

<style scoped lang="scss">
</style>
