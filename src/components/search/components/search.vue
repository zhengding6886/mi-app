<template>
  <div class="search">
    <img @click="goback" class="logo" src="../images/lfarrow.png" alt="">
    <div class="inp">
      <!-- <img src="../images/search.png" alt=""> -->
      <input type="text" name="" id="" placeholder="  搜索商品名称">
    </div>
    <img class="menu" src="../images/search.png" alt="">
  </div>
</template>
<script>
export default {
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
  .search {
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
    height:100px;
    z-index: 999;
  }

  .logo {
    width:45px;
    height:45px;
  }

  .inp {
    background: #E8ECF0;
    flex: 1;
    margin: 0 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
  }

  .inp input {
    flex: 1;
    background: transparent;
    height:60px;
    font-size:30px;
    font-weight:400;
    outline: none;
  }

  .menu {
    width:60px;
    height:60px;
  }
</style>
