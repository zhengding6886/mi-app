<template>
  <div class="cart">
    <Header ref="son"></Header>
    <Cart></Cart>
    <Recommend></Recommend>
  </div>
</template>
<script>
import Header from '@/common/header.vue'
import Cart from '@/components/cart/components/cart'
import Recommend from '@/common/detail/recommend'
export default {

  mounted () {
    this.$refs.son.title = '购物车'
  },
  components: {
    Header,
    Cart,
    Recommend
  }

}
</script>
<style scoped>
</style>
