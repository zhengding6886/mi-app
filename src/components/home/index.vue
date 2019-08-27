<template>
  <div id="app">
    <navList></navList>
    <transition name='slide-fade' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import navList from './nav/navlist'
export default {
  components: {
    navList
  }
}
</script>
<style scoped>
.slide-fade-enter-active,.slide-fade-leave-active{
  transition: all 1s ease;
  opacity: 0;
}
.slide-fade-enter,.slide-fade-leave-to{
  opacity: 1;
  transform: translateX(50%);
}
</style>
