<template>
  <div class="detail">
    <!-- header 头部 -->
    <header>
      <div class="left top" @click="goback">◁</div>
      <div class="right top">≡</div>
    </header>
    <!-- 商品轮播图 -->
    <div class="swiper-container">
      <mt-swipe :auto="0">
        <mt-swipe-item v-for="(item,index) in data.detail_swiper" :key="index">
          <img :src="item" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 秒杀区 -->
    <div class="skill">
      <div class="left">
        秒杀价 <span>￥</span>{{data.price}}
      </div>
      <div class="time">
        距结束
        <span>{{leftTime.days}}</span>天<span class="hours">{{leftTime.hours}}</span>时<span class="minutes">{{leftTime.minutes}}</span>分<span class="seconds">{{leftTime.seconds}}</span>秒
      </div>
    </div>
    <!-- 商品标题价格 -->
    <div class="pro_name">
      <div class="title">
        <h4>{{data.name}}</h4>
        <p ref='description' class="description"></p>
        <p class="price">￥<span class="new">{{data.price}}</span><span class="old">￥{{data.market_price}}</span></p>
      </div>
    </div>
    <!-- 参数列表 -->
    <div class="pro_parameter">
      <div class="person-wrap" ref="personWrap">
        <ul class="person-list" ref="personTab">
          <li class="person-item" v-for="(item,index) in parameters.list" :key="index" @click="parameterSheet">
            <div class="parameter">
              <img :src="item.icon" alt="">
              <p>{{item.top_title}}</p>
              <p>{{item.bottom_title}}</p>
            </div>
          </li>
        </ul>
      </div>
    <!-- 参数弹框 -->
    <upsheet v-if='status'>
      <slot>关键参数</slot><span name='close' @click="status = !status">✗</span>
          <ul slot='ul'>
          <li v-for='(item,index) in parameters.keyParameters' :key='index'>
            <span class="name">{{item.name}}</span>
            <span class="value">{{item.value}}</span>
          </li>
        </ul>
      <button slot='ok' @click="status = !status">完成</button>
    </upsheet>
    </div>
    <div class="img">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/77c759393aa0961553b7bae2694832fa.jpg?f=webp&w=1080&h=540&bg=194B4A" alt="">
    </div>
    <product-type></product-type>
    <Relate></Relate>
    <Comment></Comment>
    <div class="detailImages">
      <img src="https://i8.mifile.cn/v1/a1/52a6f116-fd19-4591-c36a-65d6ea6d310c.webp?w=1080&h=1322&bg=232637" alt="">
      <img src="https://i8.mifile.cn/v1/a1/a9bbf426-e131-4ae1-a491-3ece0a43dcde.webp?w=1080&h=851&bg=2B2F52" alt="">
      <img src="https://i8.mifile.cn/v1/a1/80273843-80c5-7416-1a24-2ddce076863e.webp?w=1080&h=1101&bg=181E25" alt="">
      <img src="https://i8.mifile.cn/v1/a1/2c712743-c6d9-8253-2d6c-a85b180018f4.webp?w=1080&h=828&bg=56506E" alt="">
      <img src="https://i8.mifile.cn/v1/a1/3e1e9b46-942b-4d6f-9de6-46a7b075e06e.webp?w=1080&h=960&bg=090D13" alt="">
      <img src="https://i8.mifile.cn/v1/a1/c02b92bd-b423-cec1-ae73-2ab595fa4368.webp?w=1080&h=956&bg=2F4250" alt="">
      <img src="https://i8.mifile.cn/v1/a1/4a5dd6f2-46a4-a9ca-b5c0-eae091aac8ac.webp?w=1080&h=1009&bg=101925" alt="">
      <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc88fd153c1da1138fd621e00137d3e2.png?w=1080&h=427" alt="">
    </div>
    <Recommend></Recommend>
    <Footer></Footer>
  </div>

</template>
<script>
import axios from 'axios'
import {Swipe, SwipeItem} from 'mint-ui'
import Vue from 'vue'
import {TimeDown} from '@/utils/time.js'
import { setInterval, clearInterval } from 'timers'
import Bscroll from 'better-scroll'
import {getParameters} from '@/api/axios.js'
import upsheet from '@/common/upsheet'
import productType from '@/common/detail/proType'
import Relate from '@/common/detail/relate'
import Comment from '@/common/detail/comment'
import Recommend from '@/common/detail/recommend'
import Footer from '@/common/detail/bottom'

Vue.component('mt-swipe', Swipe)
Vue.component('mt-swipe-item', SwipeItem)

export default {
  components: {
    upsheet,
    productType,
    Relate,
    Comment,
    Recommend,
    Footer
  },
  data () {
    return {
      pid: '',
      data: '',
      time: '',
      leftTime: {},
      parameters: {},
      width: 0,
      length: 0,
      totalWidth: 0,
      status: false
    }
  },
  methods: {
    // 回退
    goback () {
      this.$router.go(-1)
    },
    // 横向滚动设置
    personScroll () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            scrollbar: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    parameterSheet () {
      this.status = !this.status
    }
  },
  created () {
    // 根据 pid 请求商品数据
    this.pid = document.cookie.split('=')[1]
    axios.get(`http://localhost:3000/api/detail?pid=${this.pid}`).then(response => {
      this.data = response.data
      this.$refs.description.innerHTML = this.data.description
    })

    getParameters().then(res => {
      this.parameters = res.data
      this.length = this.parameters.list.length
      this.totalWidth = this.width * this.length
      this.$refs.personTab.style.width = this.totalWidth + 'px'
    })
    // 设置秒杀时间
    this.time = setInterval(() => {
      this.leftTime = TimeDown('2019-09-20 23:59')
    }, 1000)
  },
  wacth: {
    width (val) {
      this.$nextTick(() => {
        this.personScroll()
      })
    }
  },
  mounted () {
    this.width = this.$refs.personWrap.clientWidth * 0.222
    this.$nextTick(() => {
      this.personScroll()
    })
  },
  destroyed () {
    // 清空定时器
    clearInterval(this.time)
  }
}
</script>
<style lang="less" scoped>
.detail{
  padding-bottom: 210px;
}
/** 使用less 编写的样式*/
header{
  position: fixed;
  top: 0;
  height: 0;
  width: 100%;
  height: 100px;
  z-index: 30;
  background: rgba(255,255,255,0.6);
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
    width: 50%;
    float: right;
    text-align: right;
    font-size: 28px;
  }
}
.pro_name{
  padding: 20px;
  h4{
    font-size: 40px;
    line-height: 60px;
    font-weight: normal;
  }
  p.description{
    color: rgba(0,0,0,0.54);
    line-height: 36px;
    word-break: break-all;
    font-size: 24px;
  }
  p.price{
    color: #ff6700;
    font-size: 30px;
    .new{
      font-size: 50px;
    }
    .old{
      font-size: 24px;
      color: rgba(0,0,0,0.54);
      text-decoration: line-through;
      margin-left: 20px;
    }
  }
}
.pro_parameter {
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
  .person-wrap{
    width: 100%;
    height: 100%;
    ul.person-list{
      display: flex;
      li.person-item{
        width:22.2%;
        height: 100%;
        text-align: center;
        border-right: 1px solid #eee;
        cursor: pointer;
        img{
          width: 40px;
          height: 40px;
          display: block;
          margin: 10px auto;
        }
        p{
          font-size: 24px;
          color: #676767;
          line-height: 36px;
        }
      }
    }
  }
}
.container .content .list{
  overflow: scroll;
  ul{
    overflow: hidden;
    height: 100%;
    width: 100%;
    padding-bottom: 200px;
    overflow-y: scroll;
    position: absolute;
    z-index: 200;
    li{
      margin: 50px 0;
      font-size: 30px;
      span{
        display: inline-block;
      }
      span.name{
        width: 40%;
        color: rgba(0,0,0,0.54);
      }
    }
  }
}
.img {
  padding: 20px;
  img{
    width:100%;
    border-radius: 10px;
  }
}
.detailImages{
  width: 100%;
  img{
    width: 100%;
    outline-width:0px;
    vertical-align:top;
  }
}
</style>
