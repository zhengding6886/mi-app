<template>
  <div id="home">
    <div class="home-header">
      <div class="top-box">
        <div class="logo">
          <img :src="logoSrc" alt />
        </div>
        <router-link to="/search">
          <div class="search">
            <i class="iconfont icon-sousuo"></i>
            <span>搜索商品名称</span>
          </div>
        </router-link>
        <router-link to="/mine">
          <div class="user">
            <i class="iconfont icon-yonghu"></i>
          </div>
        </router-link>
      </div>

      <navList></navList>
    </div>
    <div class="home-body clearfix">
      <router-view></router-view>
      <toTop></toTop>
    </div>
  </div>
</template>
<script>
import toTop from '@/common/toTop.vue'
import navList from './nav/navlist'
import logoSrc from '@/assets/mi-logo.png'
export default {

  components: {
    navList,
    toTop
  },
  data () {
    return {
      num: 200,
      logoSrc: logoSrc
    }
  }
}
</script>

<style   scoped>
#home i {
  font-style: normal;
}
#home {
  padding-bottom: 110px;
}

.home-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: #f2f2f2;
  z-index: 999;
}
.home-header .top-box {
  display: block;
  width: 100%;
  height: 86px;

}
.top-box .logo {
  width: 15%;
  height: 86px;
  display: flex;
   float: left;
}
.top-box .logo img {
  width: 50px;
  height: 32px;
  margin: auto;
}
.top-box .search {
  width:70%;
  height: 66px;
  background: #fff;
  float: left;
  margin: 10px 0;
  border: 2px solid #e5e5e5;
  color: rgba(0,0,0,.3);
}
.top-box .search i {
  float: left;
  display: block;
  width: 10%;
  height: 66px;
  line-height: 66px;
  font-size: 36px;
  text-align: center;
}
.top-box .search span {
  display: block;
  float: left;
  width:90%;
  height: 66px;
  line-height: 66px;
  font-size: 32px;
}
.top-box .user {
  width: 15%;
  height: 86px;
  display: flex;
  float: right;

}
.top-box .user i{
  font-size: 48px;
  color: #666;
  margin: auto;
}
.home-body {
  width: 100%;
  height: auto;
  padding-top: 150px;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1s ease;
  opacity: 0;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 1;
  transform: translateX(50%);
}
</style>
