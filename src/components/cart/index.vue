<template>
  <div class="cart">
    <Header ref="son"></Header>
    <Cart></Cart>
  </div>
</template>
<script>
import Header from '@/common/header.vue'
import Cart from '@/components/cart/components/cart'
export default {

  mounted () {
    this.$refs.son.title = '购物车'
  },
  components: {
    Header,
    Cart
  }

}
</script>
<style scoped>
</style>
