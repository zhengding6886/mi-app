<template>
  <div id="app">
      <h></h>
      <order></order>
      <navlist></navlist>
      <foot1></foot1>
      <foot2></foot2>
      <foot3></foot3>
  </div>
</template>
<script>
import h from './header/header'
import order from './order/order'
import navlist from './navlist/navlist'
import foot1 from './foot/foot1'
import foot2 from './foot/foot2'
import foot3 from './foot/foot3'
export default {
  components: {
    h,
    order,
    navlist,
    foot1,
    foot2,
    foot3
  }
}
</script>
<style scoped>
  #app{
      /* height: 100%; */
      background:#f5f5f5;
  }
</style>
