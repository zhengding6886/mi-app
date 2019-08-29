<template>
  <div>
    <!-- 搜索 -->
  <search></search>

   <!-- 热门搜索 -->
   <swiper></swiper>
  </div>
</template>
<script>
import search from './components/search.vue'
import swiper from './components/swiper.vue'
export default {
  components: {
    search,
    swiper
  }
}
</script>
