<template>
  <div class="recommend">
    <!-- 轮播图 -->
    <div class="swipe">
      <mt-swipe :auto="3000" :continuous="true">
        <mt-swipe-item v-for="(item,index) in swiperArr" :key="index">
          <img  :src="item.img" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <!-- 社区列表 -->
    <div class="catelist">
      <ul>
        <li v-for="(item,i) in arr" :key="i">
          <a href="javascript:void(0);">
            <img :src="item.img" alt />
          </a>
        </li>
      </ul>
    </div>
    <!-- 商品列表 -->
    <div class="list_one">
      <div class="brand" @click="setCookie(brand.goods_id)">
        <img :src="brand.coverImg" alt />
        <div class="pro_info">
          <p>
            <span class="title">{{brand.name}}</span>
            <span class="right">
              ￥
              <span class="newPrice">{{brand.price}}</span>
              <span class="oldPrice">￥{{brand.market_price}}</span>
            </span>
          </p>
          <div class="describe">
            <span class="detail">{{brand.short_describe}}</span>
            <a href="javascript:void(0);" class="buy_now">立即购买</a>
          </div>
        </div>
      </div>
      <div class="list">
        <ul>
          <li v-for="(item,index) in phonelist1" :key="index" @click="setCookie(brand.goods_id)">
            <img  v-lazy="item.coverImg" alt />
            <div class="info">
              <p class="title">{{item.name}}</p>
              <p class="describe">{{item.short_describe}}</p>
              <p class="price">
                ￥
                <span class="newprice">{{item.price}}</span>
                <span class="oldprice">￥{{item.market_price}}</span>
              </p>
              <a href="javascript:void(0);" class="buy_now">立即购买</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getTelephone } from '@/api/axios'
export default {
  created () {
    getTelephone().then(res => {
      this.brand = res.data[0]
      this.phonelist1 = res.data.slice(1)
    })
  },
  methods: {
    setCookie (id) {
      document.cookie = `pid=${id}`
      this.$router.push('/detail')
    }
  },
  data () {
    return {
      brand: {},
      phonelist1: [],
      swiperArr: [
        {
          id: 1,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/939a2f677670d5c852b07ce574a78cae.jpg?thumb=1&w=720&h=360'
        },
        {
          id: 2,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d40feacc4d4fc31b3e6e65aa9891ea5.jpg?thumb=1&w=720&h=360'
        },
        {
          id: 3,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/63e0e2bf0e7cae90dd848823852a7247.jpg?thumb=1&w=720&h=360'
        }
      ],
      arr: [
        {
          id: 1,
          img:
            'http://i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b.webp'
        },
        {
          id: 2,
          img:
            'http://i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp'
        },
        {
          id: 3,
          img:
            'http://i8.mifile.cn/v1/a1/26a132d9-c5ae-8a30-2705-f861e2e9f496.webp'
        },
        {
          id: 4,
          img:
            'http://i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp'
        },
        {
          id: 5,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fc8c791e7df386798f49876b1714323f.png?thumb=1&w=144&h=152'
        },
        {
          id: 6,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152'
        },
        {
          id: 7,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152'
        },
        {
          id: 8,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b92680601206b48b885d883c23b83e2.png?thumb=1&w=144&h=152'
        },
        {
          id: 9,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/13da888d2d77bbe385d462b8d3b8c894.jpg?thumb=1&w=144&h=152'
        },
        {
          id: 10,
          img:
            'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bc1c677a6e10e42d00fb0a063662fbf9.png?thumb=1&w=144&h=152'
        }
      ]
    }
  }
}
</script>
<style   scoped>
.recommend {
  min-height: 500px;
  background: rgb(230, 231, 251);
}
.swipe{
  width: 100%;
  height: 375px;
  background: #fff;
}
.mint-swipe{
 height: 375px;
}
.mint-swipe img{
  width: 100%;
}
.catelist {
  width: 100%;
  height: 320px;
  background: #fff;
}
.catelist img {
  width: 100%;
  height: 320px;
}

.catelist ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.catelist ul li {
  list-style: none;
  flex: 1;
}
.catelist ul li img {
  width: 150px;
  height: 160px;
}
.list_one {
  padding: 0 12px;
  box-sizing: border-box;
}
.list_one .brand {
  width: 100%;
  margin-bottom: 20px;
}
.list_one .brand img {
  width: 100%;
}
.list_one .brand .pro_info {
  background: #fff;
  padding: 20px 28px;
  margin-top: 0;
  box-sizing: border-box;
}
.list_one .pro_info .title {
  font-size: 32px;
}
.list_one .right {
  float: right;
  font-size: 28px;
  color: #ea625b;
}
.list_one .pro_info .right .newPrice {
  font-size: 32px;
  margin-right: 10px;
}
.list_one .pro_info .right .oldPrice {
  font-size: 24px;
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.54);
}
.list_one .pro_info .describe {
  padding-bottom: 20px;
  padding-top: 10px;
}
.list_one .pro_info .detail {
  line-height: 30px;
  display: inline-block;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.54);
}
.list_one .pro_info .buy_now {
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

.list_one .list {
  width: 100%;
}
.list_one .list ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.list_one .list ul li {
  width: 48%;
  margin-bottom: 20px;
}
.list_one .list ul li img {
  width: 100%;
}
.list_one .list ul li .info {
  background: #fff;
  text-align: center;
}
.list_one .list ul li .info .title {
  font-size: 30px;
  line-height: 50px;
}
.list_one .list ul li .info .describe {
  line-height: 30px;
  display: inline-block;
  color: rgba(0, 0, 0, 0.54);
}
.list_one .list ul li .info .price {
  font-size: 28px;
  color: #ea625b;
}
.list_one .list ul li .info .price .newprice {
  font-size: 30px;
  margin-right: 10px;
}
.list_one .list ul li .info .price .oldprice {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.54);
}
.list_one .list ul li .info .buy_now{
  display: inline-block;
  width: 208px;
  height: 60px;
  line-height: 60px;
  background: #ea625b;
  color: #fff;
  text-align: center;
  font-size: 30px;
  border-radius: 6px;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
