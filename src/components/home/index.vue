<template>
  <div class="home">
    <!-- 搜索框 -->
    <toTop></toTop>
    <div v-for="(item, index) in num" :key="index">
      <p>{{item}}</p>
    </div>
  </div>
</template>
<script>
import toTop from '@/common/toTop.vue'
// import Myswiper from './components/myswiper.vue'
// import CateList from './components/cateList.vue'
// import Pin from './components/pinpai.vue'
// import Miaosha from './components/miaosha.vue'
export default {
  components: {
    toTop
  },
  data () {
    return {
      num: 200
    }
  }
}
</script>
<style scoped>
.home {
  background: rgba(255, 132, 125, 0.5);
  padding-bottom: 110px;
}
.banner {
  width: 100%;
}
</style>
