<template>
  <div id="app">
      <p>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item,i) in mag" :key="i"><img :src="item.img" alt=""></mt-swipe-item>
      </mt-swipe>
      </p>
    <div class="nav_list">
        <ul>
            <li v-for="(item,i) in list" :key="i"><img :src="item.img" alt=""></li>
        </ul>
    </div>
    <div class="houbuy">
        <img src="http://i8.mifile.cn/v1/a1/72411ddf-3df9-8d3a-7e5d-9429991710dc.webp" alt="">
    </div>
    <div class="kd">
        <img  src="http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c25c68694e064f1eda1c207ad481f767.jpg?thumb=1&w=720&h=112" alt="">
    </div>
    <footList></footList>
    <div class="gd"><img src="http://i8.mifile.cn/v1/a1/d6a387d1-3b5e-d81b-0c8b-3d0133d0bb5c.webp" alt="">
    </div>
  </div>
</template>
<script>
// 导入列表组件
import footList from './footList/footList'
export default{
  components: {
    footList
  },
  data () {
    return {
      mag: [
        {img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c290d666a71f87a57f944e7880fc9af7.jpg'},
        {img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b72b57cba21c97f0b6a43f672d55b504.jpg'},
        {img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/76de159e8d461a9f657101981242ace1.jpg'},
        {img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3674af7b790200df54f7c83c6a53e9b2.jpg'},
        {img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1202a6786bda58920ef073fac0b1a74d.jpg'}
      ],
      list: [
        {img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e47dad0c224065a73a4c722eeaf1b8e1.jpg?thumb=1&w=144&h=152'},
        {img: 'http://i8.mifile.cn/v1/a1/eddc5967-7f37-bf45-72d9-de0db438658b.webp'},
        {img: 'http://i8.mifile.cn/v1/a1/8d73dc73-3a27-1587-6c43-47998c859a48.webp'},
        {img: 'http://i8.mifile.cn/v1/a1/afe66888-30af-d023-ebbe-6ed7e4607167.webp'},
        {img: 'http://i8.mifile.cn/v1/a1/3ad80cd6-0188-1c0a-95d3-aeaa58ede247.webp'},
        {img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b9b8b8e686044afb2585e78a03ee96b6.png?thumb=1&w=144&h=152'},
        {img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3304e52970aa972c4f4ccd6eb424ad7.png?thumb=1&w=144&h=152'},
        {img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fed94691e4b361f237d411c3f687c2d4.png?thumb=1&w=144&h=152'},
        {img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a2bc35b6be2ab377bfc7e8fddeaa54c5.png?thumb=1&w=144&h=152'},
        {img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d41a54c825db28e47888db6bd61349de.png?thumb=1&w=144&h=152'}
      ]
    }
  }
}
</script>
<style scoped>
 #app{
       width: 100%;
        background:rgb(239,241,243);
       /* height:384px; */
       /* border:1px solid red; */
   }
   #app p{
        width: 100%;
       height:384px;
   }
   #app p img{
       width:100%;
       height:384px;
   }
   div.nav_list{
       width: 100%;
       height:340px;
       /* background:yellow; */
   }
   div.nav_list ul{
    width: 100%;
    height:100%;
    list-style: none;
    display: flex;
    flex-wrap:wrap;
   }
     div.nav_list ul li{
         width:20%;
         height:160px;
     }
   div.nav_list ul li img{
       width:100%;
       height:160px;
   }
   div.houbuy{
       width:100%;
       height:120px;
   }
   div.houbuy img{
       width:100%;
       height:120px;
   }
   div.kd {
       margin-top:20px;
       width: 100%;
         height:112px;
   }
   div.kd img{
         width: 100%;
         height:112px;
   }
   div.gd{
      width:100%;
      height:86px;
      margin-top: 80px;
   }
   div.gd img{
      width:100%;
      height:86px;
   }
</style>
