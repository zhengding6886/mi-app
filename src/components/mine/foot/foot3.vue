<template>
  <div class="foot">
    <ul>
      <router-link to="/" tag="li">
        <span class="s-left s-tongdao">
          <i class="iconfont icon-fmashangpin"></i>
        </span>
        <span class="s-right">
          F码通道
          <i class="iconfont icon-xiangyoujiantou"></i>
        </span>
      </router-link>
      <router-link to="/mine/set" tag="li">
        <span class="s-left s-shezhi">
          <i class="iconfont icon-shezhi"></i>
        </span>
        <span class="s-right">
          设置
          <i class="iconfont icon-xiangyoujiantou"></i>
        </span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'foot'
}
</script>
<style scoped>
div {
  margin-top: 30px;
}
div ul li {
  width: 100%;
  height: 100px;
  background: #fff;
  font-size: 30px;
  line-height: 100px;
  position: relative;
}
div ul li i {
  height: 100px;
  line-height: 100px;
}
div ul li .s-left {
  display: block;
  float: left;
  width: 15%;
  height: 100px;
  text-align: center;
  font-size: 48px;
}
div ul li .s-right {
  float: left;
  display: block;
  width: 85%;
  height: 100px;
}
div ul li .s-right i {
  display: block;
  float: right;
  width: 20%;
  text-align: center;
}
div ul li:nth-child(1){
  margin-bottom: 30px;
}
.s-tongdao i{
    color:#FFB302
}
.s-shezhi i{
    color:#818C99;
}
</style>
