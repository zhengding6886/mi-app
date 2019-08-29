<template>
  <div class="cart">
    <Header ref="son"></Header>

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
