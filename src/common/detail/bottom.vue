<template>
  <div class="detail_footer">
    <div class="footer">
      <div class="left">
        <router-link tag='div' to='/home' class="home">
          <i class="iconfont icon-shouye1"></i>
          <span>首页</span>
        </router-link>
        <router-link tag='div' to='/cart' class="cart">
          <i class="iconfont icon-gouwuche2"></i>
          <span>购物车</span>
          <i class="number" v-if='tag'>{{length}}</i>
        </router-link>
      </div>
      <div class="right">
        <a href="javascript:void(0);" class="add_cart" @click="addCart">加入购物车</a>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import {getCartNum} from '@/api/axios.js'
export default {
  data () {
    return {
      pid: null,
      length: null,
      tag: false
    }
  },
  watch: {
    length () {
      if (this.length !== null || this.length !== 0) {
        this.tag = true
      } else {
        this.tag = false
      }
    }
  },
  created () {
    getCartNum().then(res => {
      this.length = res.data.length
    })
    if (this.length !== null) {
      this.tag = true
    }
  },
  methods: {
    addCart () {
      let cookie = document.cookie
      this.pid = cookie.split('=')[1]
      axios.get(`http://127.0.0.1:3000/api/addcart?pid=${this.pid}`).then(res => {
        if (res.data.code === 200) {
          this.length = res.data.length
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.detail_footer{
  width: 100%;
  height: 150px;
  padding: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  .footer{
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 15px;
    box-shadow: 5px 5px 15px 0 rgba(0,0,0,0.3);
    .left{
      width: 50%;
      float: left;
      text-align: center;
      color: rgba(0,0,0,0.45);
      font-size: 26px;
      padding-top: 60px;
      .home{
        width: 30%;
        height: 100%;
        float: left;
        position: relative;
      }
      .cart{
        float: left;
        width: 30%;
        height: 100%;
        position: relative;
      }
      i.iconfont{
        display: inline-block;
        position: absolute;
        top: -40px;
        left: 0;
        right:0;
        font-size: 40px;
      }
      i.number{
        display: inline-block;
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: rgba(236, 26, 26, 0.8);
        color: #fff;
        text-align: center;
        line-height: 30px;
        top: -45px;
        right: 10px;
        font-size: 20px;
      }
    }
    .right{
      width: 50%;
      float: left;
      height: 100%;
      text-align: center;
      a.add_cart{
        display: inline-block;
        width: 90%;
        height: 70%;
        line-height: 80px;
        background: #ff6700;
        border-radius: 40px;
        color: #fff;
        font-size: 30px;
        margin-top: 18px;
      }
    }
  }
}
</style>
