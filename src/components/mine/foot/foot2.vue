<template>
  <div class="foot">
    <ul>
      <router-link to="/" tag="li">
        <span class="s-left s-fuwu">
          <i class="iconfont icon-ziyuan"></i>
        </span>
        <span class="s-right">
           服务中心
          <i class="iconfont icon-xiangyoujiantou"></i>
        </span>
      </router-link>
      <router-link to="/" tag="li">
        <span class="s-left s-zhijia">
         <i class="iconfont icon-dianpu"></i>
        </span>
        <span class="s-right">
            小米之家
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
div ul li:nth-child(1) .s-right  {
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
}
.s-fuwu i{
    color: #F96C5E;
}
.s-zhijia i{
    color:#FF8B43
}
</style>
