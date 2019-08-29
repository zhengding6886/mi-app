<template>
  <div class="detail">
    <header>
      <div class="left top">◁</div>
      <div class="right top">≡</div>
    </header>
    <div class="swiper-container">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="(item,index) in data.detail_swiper" :key="index">
          <img :src="item" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="skill">
      <div class="left">
        秒杀价 <span>￥</span>{{data.price}}
      </div>
      <div class="time">
        距结束
        <span class="hours">01</span>:<span class="minutes">12</span>:<span class="seconds">33</span>
      </div>
    </div>
    <div class="pro_name">
      <div class="title">
        <h4>{{data.name}}</h4>
        <p>{{data.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {Swipe, SwipeItem} from 'mint-ui'
import Vue from 'vue'

Vue.component('mt-swipe', Swipe)
Vue.component('mt-swipe-item', SwipeItem)

export default {
  data () {
    return {
      pid: '',
      data: ''
    }
  },
  created () {
    this.pid = document.cookie.split('=')[1]
    axios.get(`http://127.0.0.1:3000/api/detail?pid=${this.pid}`).then(response => {
      this.data = response.data
    })
  }
}
</script>
<style lang="less" scoped>
header{
  position: absolute;
  top: 0;
  height: 0;
  width: 100%;
  height: 100px;
  z-index: 30;
  .top{
    border-radius: 50%;
    background: rgba(0,0,0,0.3);
    color: #fff;
    font-size: 42px;
    line-height: 80px;
    width: 80px;
    height: 80px;
    text-align: center;
    margin: 10px;
    cursor: pointer;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
}
.mint-swipe{
  height: 820px;
  img{
    width: 100%;
  }
}
.skill{
  width: 100%;
  height: 100px;
  background: #f56600;
  color: #fff;
  line-height: 100px;
  padding: 0 20px;
  box-sizing: border-box;
  .left{
    width: 40%;
    float: left;
    font-size: 36px;
    span{
      font-size: 24px;
    }
  }
  .time{
    width: 40%;
    float: right;
    text-align: right;
    font-size: 28px;
  }
}

</style>
