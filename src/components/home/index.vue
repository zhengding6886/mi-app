<template>
  <div id="app">
    <toTop></toTop>
    <navList></navList>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import toTop from '@/common/toTop.vue'
import navList from './nav/navlist'
export default {
  components: {
    navList,
    toTop
  },
  data () {
    return {
      num: 200
    }
  }
}
</script>

<style   scoped>
.home {
  background: rgba(255, 132, 125, 0.5);
  padding-bottom: 110px;
}
.banner {
  width: 100%;
}
.slide-fade-enter-active,.slide-fade-leave-active{
  transition: all 1s ease;
  opacity: 0;
}
.slide-fade-enter,.slide-fade-leave-to{
  opacity: 1;
  transform: translateX(50%);
}
</style>
