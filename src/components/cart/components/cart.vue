<template>
  <div class="cart">
    <div class="cart_list" v-for='(item,index) in list' :key='index'>
      <div class="img">
        <input type="checkbox" name="" :id="index" ref='check' @click="change(index)">
        <i class="icon">√</i>
        <img :src="item.detail_swiper[2]" alt="">
      </div>
      <div class="info">
        <p class="name">{{item.keywords}}</p>
        <p class="price">售价：￥{{item.price}}元</p>
        <p class="num"><span class="sub">-</span><span class="number">1</span><span class="add">+</span><i class="delete" @click='deleteCart(index)'>✗</i></p>
      </div>
    </div>
    <div class="footer">
      金额：<span class="totalPrice">{{price}}</span>元
    </div>
  </div>
</template>
<script>
import {getCartNum} from '@/api/axios.js'
import axios from 'axios'
export default {
  data () {
    return {
      list: [],
      number: 0,
      price: 0,
      status: false
    }
  },
  created () {
    getCartNum().then(res => {
      this.list = res.data.data
    })
  },
  methods: {
    change (index) {
      this.status = this.$refs.check[index].checked
      if (this.status) {
        this.$refs.check[index].style = 'background:red'
        this.price += this.list[index].price
      } else {
        this.$refs.check[index].style = 'background:none'
        this.price -= this.list[index].price
      }
    },
    deleteCart (index) {
      axios.get(`http://127.0.0.1:3000/api/deleteCart?index=${index}`).then(res => {
        console.log(res.data)
      })
    }
  },
  watch: {
    list () {
      getCartNum().then(res => {
        this.list = res.data.data
      })
    }
  }
}
</script>
<style lang="less" scoped>
.cart{
  width: 100%;
  padding: 20px;
  background: #f5f5f5;
  .cart_list{
    margin-bottom: 20px;
    background: #fff;
    padding: 40px 20px;
    overflow: hidden;
    .img{
      width: 50%;
      float: left;
      position: relative;
      padding-left: 45px;
      input[type='checkbox']{
        width: 40px;
        height: 40px;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      input[type='checkbox'].active{
        background: red;
      }
      img{
        width: 200px;
        margin-left: 20px;
        border: 1px solid rgba(0,0,0,0.3);
        border-radius: 10px;
      }
      i.icon{
        position: absolute;
        top: 39%;
        left: 5px;
        font-size: 38px;
        font-weight: 900;
        color: #fff;
        pointer-events: none;
      }
    }
    .info{
      width: 50%;
      float: left;
      .name{
        font-size: 28px;
        color: rgba(0,0,0,0.78);
        white-space:initial;
        line-height: 40px;
      }
      .price{
        font-size: 26px;
        margin: 10px 0;
        color: #ff6700;
      }
      .num{
        padding-top: 10px;
        span{
          display: inline-block;
          width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;
          background: rgba(0,0,0,0.1);
          border-radius: 8px;
          font-size: 30px;
        }
        .sub{
          font-size: 40px;
        }
        .add{
          font-size: 40px;
        }
        .number{
          background: #fff;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
        }
        i.delete{
          display: inline-block;
          float: right;
          margin-top: 10px;
          width: 40px;
          height: 40px;
          font-size: 30px;
          text-align: center;
          line-height: 40px;
          color: rgba(0,0,0,0.3);
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,0.3);
        }
      }
    }
  }
  .footer{
    width: 100%;
    height: 130px;
    line-height: 130px;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    text-align: center;
    font-size: 30px;
    .totalPrice{
      color:#ff6700;
      font-size: 36px;
    }
  }
}
</style>
