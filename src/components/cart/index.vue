<template>
  <div>
      <Header ref="son"></Header>
    <div>buy</div>
  </div>
</template>
<script>
import Header from '@/common/header.vue'
export default {
  mounted () {
    this.$refs.son.title = '购物车'
  },
  components: {
    Header
  }
}
</script>
<style scoped>
</style>
