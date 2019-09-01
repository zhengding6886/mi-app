<template>
  <div class="search">
    <div class="left" @click="goback">
      <i class="iconfont icon-xiangzuojiantou"></i>
    </div>
    <div class="inp">
      <input type="text" placeholder=" 搜索商品名称" v-model="keysWords" />
    </div>
    <a class="right" @click="search"><i class="iconfont icon-sousuo"></i>  </a>
  </div>
</template>
<script>
export default {
  data () {
    return {
      keysWords: ''
    }
  },

  methods: {
    goback () {
      this.$router.go(-1)
    },
    search () {
      console.log('000000')
      this.$router.push({
        name: 'list',
        params: {
          keys: this.keysWords || '小米9'
        }
      })
    }

  }
}
</script>
<style scoped>
.search {
  width: 100%;
  height: 100px;
  background: #f2f2f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.search i {
  margin: auto;
  font-size: 48px;
  color: #929292;
}
.left,
.right {
  width: 15%;
  height: 100px;
  display: flex;
}
.inp {
  background: #fff;
  width: 70%;
  border-radius: 10px;
}

.inp input {
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  width: 100%;
  padding: 0 20px;
  outline: 0;
  font-size: 32px;
  font-weight: 400;
  height: 60px;
  line-height: normal;
  color: #757575;
}

.menu {
  width: 60px;
  height: 60px;
}
</style>
