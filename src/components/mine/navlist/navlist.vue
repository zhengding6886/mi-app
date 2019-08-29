<template>
  <div class="nav_list">
    <ul>
      <li>
        <i class="iconfont icon-fukuan1"></i>
        <span>待付款</span>
      </li>
      <li>
        <i class="iconfont icon-yunshu-1"></i>
        <span>待收货</span>
      </li>
      <li>
        <i class="iconfont icon-weixiu-xianxing"></i>
        <span>退换修</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'h'
}
</script>
<style scoped>
.nav_list {
  width: 100%;
  height: 160px;
  background: #fff;
}

.nav_list ul {
  width: 100%;
  display: flex;
}

.nav_list ul li {
  flex: 1;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav_list ul li i {
    color: #999;
  font-size: 48px;
}

.nav_list ul li span {
  font-size: 30px;
  display: inline-block;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.87);
}
</style>
