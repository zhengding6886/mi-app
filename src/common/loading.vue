<template>
  <div id="ddr" v-if="isShow">
    <div class="ddr ddr1"></div>
    <div class="ddr ddr2"></div>
    <div class="ddr ddr3"></div>
    <div class="ddr ddr4"></div>
    <div class="ddr ddr5"></div>
</div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    show () {
      this.isShow = true
    },
    hide () {
      this.isShow = false
    }
  }
}
</script>
<style scoped>
  #ddr{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 70px;
    height: 120px;
}
.ddr{
    width: 10px;
    height: 120px;
    float: left;
    margin: 2px;
    background-color: #00ff00;
    animation: loading 1s infinite ease-in-out;/*animation：动画名称 持续时间 动画速度曲线 延迟 执行多少次 是否正反方向轮流播放*/
}
.ddr2{
    animation-delay: -0.9s;/*定义开始执行的地方，负号表示直接从第900ms开始执行*/
}
.ddr3{
    animation-delay: -0.8s;
}
.ddr4{
    animation-delay: -0.7s;
}
.ddr5{
    animation-delay: -0.6s;
}
@keyframes loading {
    0%,40%,100%{ /*定义每帧的动作*/
        -webkit-transform: scaleY(0.5);
    }
    20%{
        -webkit-transform: scaleY(1);
    }
}
</style>
