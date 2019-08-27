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
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
