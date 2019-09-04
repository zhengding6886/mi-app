<template>
   <div>
      <ul>
          <li v-for="(item,i) in msg" :key="i">
              <img v-lazy="item.img" alt="">
               <span>{{item.title}}</span>
               <span>{{item.list}}</span>
               <span>{{item.price}}</span>
          </li>
      </ul>
   </div>
</template>
<script>
export default{
  data () {
    return {
      msg: [
        {id: 1, img: 'http:////cdn.cnbj1.fds.api.mi-img.com/mi-mall/ba2e3cf34aa9dfd78e51fd72cb26e81f.png', title: '小米手环4', list: '大屏彩显，20天超长续航', price: '169'},
        {id: 2, img: 'http:////i8.mifile.cn/v1/a1/9ad54f5d-4585-e986-213b-74bbbce16f73.webp', title: '小米「小爱老师」', list: '口袋里的英语外教', price: '489'},
        {id: 3, img: 'http:////cdn.cnbj1.fds.api.mi-img.com/mi-mall/02642411cee83d90c46c9503c3003a3e.jpg', title: '智能门锁 推拉式', list: '一步推拉，高端智能门锁', price: '1699'},
        {id: 4, img: 'http:////cdn.cnbj1.fds.api.mi-img.com/mi-mall/75cfba1ec641388eabc3ae5464ff1d27.jpg', title: '小爱音箱 Play', list: '听音乐、语音遥控家电', price: '99'},
        {id: 5, img: 'http:////i8.mifile.cn/v1/a1/e9a718b0-e088-5638-4850-a2cf16acfd60.webp', title: '小米无线车充', list: '电动变形，自动锁紧充电', price: '169'},
        {id: 6, img: 'http:////i8.mifile.cn/v1/a1/c64e6d88-4f44-4cbb-76da-99994007d1c0.webp', title: '无线手持擦地机', list: '全家人都喜欢的擦地机', price: '489'},
        {id: 7, img: 'http:////cdn.cnbj1.fds.api.mi-img.com/mi-mall/2d1d1956d9edfe72148094163681e185.jpg', title: '烟灶套装 天然气', list: '点火排烟，风随火动', price: '1999'},
        {id: 8, img: 'http:////cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cd0864c76693eab7af39339aae7b1c6.jpg', title: '电话手表 4G', list: '能视频通话的AI学习手表', price: '398'},
        {id: 8, img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e0db9c8bbb1a3e968f5b13f048e03ce2.jpg?thumb=1&w=221&h=221', title: '红轴机械键盘 ', list: '甄选CHERRY轴体，具有电竞性能的机械键盘 ', price: '299'}
      ]
    }
  }
}
</script>
<style scoped>
   div{
       width:100%;
   }
   div ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      list-style: none;
      /* margin-bottom: 120.8px; */
   }
   div ul li{
       margin-top:70px;
       text-align: center;
       flex: 30%;
       width:220px;
       height:300px;
   }
   div ul li img{
       width:220px;
       height:220px;
   }
   div ul li span{
       margin-top:8px;
       overflow: hidden;
       text-overflow:ellipsis;
       white-space: nowrap;
     display: block;
      width: 250px;
      text-align: center;
      font-size: 30px;
     color: red;
   }
   div ul li span:nth-child(2){
       color: black;
   }
   div ul li span:nth-child(3){
       color:#333;
   }
</style>
