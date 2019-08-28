<template>
  <div class="telephone">
    <mt-swipe :auto="0">
      <mt-swipe-item><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/939a2f677670d5c852b07ce574a78cae.jpg?thumb=1&w=720&h=360" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a476d5345c149504df838652b3cb07.jpg?thumb=1&w=720&h=360" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/21f16fa1012ab23de5c6de1dae968d9c.jpg?thumb=1&w=720&h=360" alt=""></mt-swipe-item>
    </mt-swipe>
    <div class="list_one">
      <div class="brand">
        <img :src="phonelist1.titleImg" alt="">
        <div class="pro_info">
          <p><span class="title">{{phonelist1.name}}</span><span class="right">￥<span class="newPrice">{{phonelist1.newprice}}</span><span class="oldPrice">￥{{phonelist1.oldprice}}</span></span></p>
          <div class="describe">
            <span class="detail">{{phonelist1.describe}}</span>
            <a href="javascript:void(0);" class="buy_now">立即购买</a>
          </div>
        </div>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in phonelist1.result" :key='index'>
            <img :src="item.img" alt="">
            <div class="info">
              <p class="title">{{item.name}}</p>
              <p class="describe">{{item.describe}}</p>
              <p class="price">￥<span class="newprice">{{item.newprice}}</span><span class="oldprice">{{item.oldprice}}</span></p>
              <a href="javascript:void(0);" class="buy_now">立即购买</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {getTelephone} from '@/api/axios'
import { Swipe, SwiperItem } from 'mint-ui'
import Vue from 'vue'
Vue.component('mt-swipe', Swipe)
Vue.component('mt-swipe-item', SwiperItem)
export default {
  created () {
    getTelephone().then(res => {
      this.phonelist1 = res.data
    })
  },
  data () {
    return {
      phonelist1: []
    }
  }
}
</script>
<style scoped>
.telephone{
  min-height:500px;
  background: rgb(230, 231, 251);
}
/*轮播图*/
.mint-swipe{
  height: 360px;
  margin-bottom: 10px;
}
.mint-swipe img{
  width: 100%;
}
.telephone .list_one{
  padding: 0 12px;
  box-sizing: border-box;
}
.telephone .list_one .brand{
  width: 100%;
  margin-bottom: 20px;
}
.telephone .list_one .brand img{
  width:100%;
}
.telephone .list_one .brand .pro_info{
  background: #fff;
  padding: 20px 28px;
  margin-top: 0;
  box-sizing: border-box;
}
.telephone .list_one .pro_info .title{
  font-size: 32px;
}
.telephone .list_one .right{
  float: right;
  font-size: 28px;
  color: #ea625b;
}
.telephone .list_one .pro_info .right .newPrice{
  font-size: 32px;
  margin-right: 10px;
}
.telephone .list_one .pro_info .right .oldPrice{
  font-size: 24px;
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.54);
}
.telephone .list_one .pro_info .describe{
  padding-bottom: 20px;
  padding-top: 10px;
}
.telephone .list_one .pro_info .detail{
  line-height: 30px;
  display: inline-block;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.54);
}
.telephone .list_one .pro_info .buy_now{
  display: inline-block;
  width: 208px;
  height: 60px;
  line-height: 60px;
  background: #ea625b;
  color: #fff;
  text-align: center;
  font-size: 30px;
  border-radius: 6px;
  float: right;
}

.telephone .list_one .list{
  width: 100%;
}
.telephone .list_one .list ul{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.telephone .list_one .list ul li{
  width: 48%;
  margin-bottom: 20px;
}
.telephone .list_one .list ul li img{
  width: 100%;
}
.telephone .list_one .list ul li .info{
  background: #fff;
  text-align: center;
}
.telephone .list_one .list ul li .info .title{
  font-size: 30px;
  line-height: 50px;
}
.telephone .list_one .list ul li .info .describe{
  line-height: 30px;
  display: inline-block;
  color: rgba(0, 0, 0, 0.54);
}
.telephone .list_one .list ul li .info .price{
  font-size: 28px;
  color: #ea625b;
}
.telephone .list_one .list ul li .info .price .newprice{
  font-size: 30px;
  margin-right: 10px;
}
.telephone .list_one .list ul li .info .price .oldprice{
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.54);
}
</style>
