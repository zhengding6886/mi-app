<template>
  <div class="nav" ref='down'>
    <ul>
      <router-link to="/home" tag="li">
        <i class="iconfont icon-shouye1"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/category" tag="li">
        <i class="iconfont icon-caidan1"></i>
        <span>分类</span>
      </router-link>
      <router-link to="/cart" tag="li">
        <i class="iconfont icon-gouwuche2"></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/mine" tag="li">
        <i class="iconfont icon-yonghu"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>

export default {
  watch: {
    '$route.path' (newvalue, oldvalue) {
      if (newvalue.indexOf('/detail') !== -1) {
        console.log(newvalue)
        this.$refs.down.style = 'display:none'
      } else {
        this.$refs.down.style = 'display:block'
      }
    }
  }
}
</script>
<style scoped>
  .nav {
    position: fixed;
    z-index: 999;
    background: white;
    bottom: 0;
    left: 0;
    width: 100%;
  color: #999;
}

.nav ul {
  width: 100%;
  display: flex;
}

.nav ul li {
  flex: 1;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav ul li i {
  font-style: normal;
  font-size: 48px;
}
.nav ul li span {
  font-size: 20px;
}
.router-link-active {
  color: rgba(237, 91, 0);
}
</style>
