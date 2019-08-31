<template>
  <div class="recommend">
    <h3>为你推荐</h3>
    <div class="recommend_list">
      <div class="list" v-for='(item,index) in list' :key='index'>
        <img :src="item.image_url" alt="">
        <p class="name">{{item.name}}</p>
        <p class="price"><span class="new">￥{{item.price}}</span><span class="old">￥{{item.market_price}}</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import {getRecommends} from '@/api/axios.js'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    getRecommends().then(res => {
      this.list = res.data.recommend_list
    })
  }
}
</script>
<style lang="less" scoped>
.recommend{
  width: 100%;
  h3{
    font-size: 48px;
    font-weight: normal;
    padding: 50px 0;
    margin-top: 50px;
  }
  .recommend_list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    .list{
      width: 44%;
      margin: 20px;
      img{
        width: 100%;
        border-radius: 12px;
      }
      p{
        line-height: 40px;
        text-align: center;
      }
      p.name{
        margin-top: 10px;
        font-size: 30px;
        color: rgba(0,0,0,0.87);
        padding: 0 10px;
        box-sizing: border-box;
      }
      .new{
        font-size: 30px;
        color: #ff6700;
      }
      .old{
        color: rgba(0,0,0,0.54);
        margin-left: 10px;
        text-decoration: line-through;
      }
    }
  }
}
</style>
