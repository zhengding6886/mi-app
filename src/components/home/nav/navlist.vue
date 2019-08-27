<template>
  <div class="nav">
    <div class="all">全部</div>
    <div class='left'>
      <ul>
        <router-link tag='li' to='/home/recommend' class="router-link-active">推荐</router-link>
        <router-link tag='li' to='/home/telephone'>手机</router-link>
        <router-link tag='li' to='/home/intellect'>智能</router-link>
        <router-link tag='li' to='/home/television'>电视</router-link>
        <router-link tag='li' to='/home/book'>笔记本</router-link>
        <router-link tag='li' to='/home/house_electric'>家电</router-link>
        <li class="btn"><i @click='status = !status'>^</i></li>
        <router-link tag='li' to='/home/5g'>5G专场</router-link>
        <router-link tag='li' to='/home/round'>生活周边</router-link>
      </ul>
    </div>
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
  margin-top: 80px;
  background: #f2f2f2;
  border-bottom: 1px solid #666;
}
.nav .all{
  padding-left: 30px;
  font-size: 30px;
}
.nav .left{
  overflow: hidden;
  width: 100%;
}
.nav .left ul{
  width: 130%;
  display: flex;
}
.nav .left ul li {
  width: 16.67%;
  text-align: center;
  font-size: 27px;
  line-height: 60px;
}
.nav .left ul li.btn{
  width: 10%;
}
.nav .left ul li i{
  font-size: 36px;
  color: #ccc;
  display: inline-block;
  line-height: 60px;
  width: 100%;
}
.router-link-active{
  color: rgba(237,91,0);
  border-bottom: 4px solid rgb(237,91,0);
}
</style>
