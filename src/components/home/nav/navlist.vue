<template>
  <div class="nav">
<<<<<<< HEAD
    <div class="all" v-show='status'>全部</div>
    <div class='left'>
      <ul :class="{open:status}">
        <router-link tag='li' to='/home/recommend' class="router-link-active"><span>推荐</span></router-link>
        <router-link tag='li' to='/home/telephone'><span>手机</span></router-link>
        <router-link tag='li' to='/home/intellect'><span>智能</span></router-link>
        <router-link tag='li' to='/home/television'><span>电视</span></router-link>
        <router-link tag='li' to='/home/book'><span>笔记本</span></router-link>
        <router-link tag='li' to='/home/house_electric'><span>家电</span></router-link>
        <router-link tag='li' to='/home/5g'><span>5G专场</span></router-link>
        <router-link tag='li' to='/home/round'><span>生活周边</span></router-link>
=======

    <div class='left'>
      <ul>
        <router-link tag='li' to='/home/recommend' >推荐</router-link>
        <router-link tag='li' to='/home/telephone'>手机</router-link>
        <router-link tag='li' to='/home/intellect'>智能</router-link>
        <router-link tag='li' to='/home/television'>电视</router-link>
        <router-link tag='li' to='/home/book'>笔记本</router-link>
        <router-link tag='li' to='/home/house_electric'>家电</router-link>
        <li class="btn"><i @click='status = !status'>^</i></li>
        <router-link tag='li' to='/home/5g'>5G专场</router-link>
        <router-link tag='li' to='/home/round'>生活周边</router-link>
>>>>>>> 81784fa0d6ff419b35ba89e67f2c24c029b94856
      </ul>
    </div>
    <div class="btn"><i @click='status = !status' :class="{tran:status}">︿</i></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      status: false
    }
  }
}
</script>
<style scoped>
.nav{
  width: 100%;
  overflow: hidden;
  position: relative;
  background: #f2f2f2;
  border-bottom: 1px solid #999;
}
.nav .all{
  padding-left: 30px;
  font-size: 30px;
  line-height: 60px;
  /* display: none; */
}
.nav .left{
  overflow: hidden;
  width: 94%;
  float: left;
}
.nav .left ul{
  width: 135%;
  display: flex;
  flex-direction: row;
  transition: all 0.5s ease;
}
.nav .left ul.open{
  width: 100%;
  flex-wrap: wrap;
  padding: 10px 0;
}
.nav .left ul li {
  align-content: space-between;
  width: 16.6%;
  text-align: center;
  font-size: 27px;
  line-height: 60px;
}
.nav .left ul.open li,.router-link-active{
  width: 25%;
  border: none;
}
.nav .left ul.open li span{
  display: inline-block;
  width: 160px;
  height: 60px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin: 10px 0;
  background: #fff;
}
.nav .left ul.open li.router-link-active span{
    border: 2px solid rgb(255,103,0);
    background: #fde0d5;
}
.nav .btn {
  width: 6%;
  float: left;
  height: 62px;
  line-height: 60px;
  text-align: center;
}
.nav .btn i{
  font-size: 36px;
  color: #ccc;
  display: inline-block;
  width: 50px;
  height: 50px;
  transform: rotate(180deg);
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 0;
  transition: all 0.5s ease;
}
.nav .btn i.tran{
    transform: rotate(360deg);
}
.router-link-active{
  color: rgba(237,91,0);
  border-bottom: 4px solid rgb(237,91,0);
}
</style>
