
<template>
  <div id="app">
    <Nav-list></Nav-list>
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

#app {
  width: 100%;
  max-width: 750px;
  min-width: 320px;
  margin: 0 auto;
}
</style>
