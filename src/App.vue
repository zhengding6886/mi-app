
<template>
    <div id="app">

        <Nav-list></Nav-list>
        <transition name="fade">
            <keep-alive>
              <router-view v-if="this.$route.meta.cache" />
            </keep-alive>
        </transition>
        <transition name="fade">
            <router-view v-if="!this.$route.meta.cache" />
        </transition>
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

</style>
