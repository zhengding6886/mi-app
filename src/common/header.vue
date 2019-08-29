<template>
  <div class="header">
    <div class="left" @click="goback">
      <i class="iconfont icon-xiangzuojiantou"></i>
    </div>
    <div class="title">{{title}}</div>
    <div class="right">
      <router-link to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '000'
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 80px;
  background: #f2f2f2;
  color: #666;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  .left {
    float: left;
    width: 15%;
    height: 50px;
    text-align: center;
  }
  .right {
    float: right;
    width: 15%;
    height: 50px;
    text-align: center;
  }
  i {
    color: #666;
    font-style: normal;
    font-size: 48px;
  }
  .title{
    width: 70%;
    font-size: 36px;
    text-align: center;
  }
}
</style>
