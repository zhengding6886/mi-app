<template>
  <div class="nav">
    <ul>
      <router-link to="/home" tag="li">
        <i class="iconfont icon-yemian"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/category" tag="li">
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </router-link>
      <router-link to="/cart" tag="li">
        <i class="iconfont icon-che"></i>
        <span>购物车</span>
      </router-link>
      <router-link to="/mine" tag="li">
        <i class="iconfont icon-icon_mine"></i>
        <span>我的</span>
      </router-link>

    </ul>
  </div>
</template>
<script>
export default {

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
  }

  .nav ul {
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
  .nav ul li span{
    font-size: 20px;
  }
  .router-link-active  {
    color: #FF483E;
  }
</style>
