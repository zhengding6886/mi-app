
<template>
  <div id="app">
    <Nav-list v-if="$route.meta.footShow"></Nav-list>
      <keep-alive>
        <router-view v-if="this.$route.meta.cache" />
      </keep-alive>
      <router-view v-if="!this.$route.meta.cache" />
  </div>
</template>

<script>
import NavList from '@/common/navList.vue'
export default {
  name: 'App',
  components: {
    NavList
  }
}
</script>

<style>
@import url("./assets/reset.css");
@import url("./assets/common.css");

html,
body {
    height: 100%;
}
#app {
    height: 100%;

}
.mint-swipe-indicators .is-active{
 opacity: 0.8;
}

#app {
  width: 100%;
  max-width: 750px;
  min-width: 320px;
  margin: 0 auto;
}
</style>
