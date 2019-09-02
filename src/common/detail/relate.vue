<template>
  <div class="relate_recommend">
    <div class="relate_container">
      <div class="title">
      相关推荐
      </div>
      <div class="person-wrap1" ref="personWrap1">
        <ul class="person-list1" ref="personTab1">
          <li class="person-item" v-for="(item,index) in list" :key="index">
            <img :src="item.image_url" alt="">
            <p class="relate_name">{{item.name}}</p>
            <span class="price">￥{{item.price}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {getRelate} from '@/api/axios'
import Bscroll from 'better-scroll'
export default {
  data () {
    return {
      list: [],
      width: 0,
      height: 0,
      total: 0
    }
  },
  methods: {
    personScroll () {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.personWrap1, {
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
    }
  },
  watch: {
    width () {
      this.$nextTick(() => {
        this.personScroll()
      })
    }
  },
  created () {
    getRelate().then(res => {
      this.list = res.data.data
      this.length = this.list.length
      this.total = this.length * this.width
      this.$refs.personTab1.style.width = this.total + 'px'
    })
  },
  mounted () {
    this.width = this.$refs.personWrap1.clientWidth * 0.28
    this.$nextTick(() => {
      this.personScroll()
    })
  }
}
</script>
<style lang="less" scoped>
.relate_recommend{
  padding: 0 20px;
  margin: 20px 0;
  .relate_container{
    background: #fafafa;
    .title{
      font-size: 30px;
      text-align: center;
      line-height: 100px;
      border-bottom:1px solid rgba(0,0,0,0.1);
      border-radius: 10px;
    }
    .person-wrap1{
      width: 100%;
      overflow: hidden;
      ul{
        display: flex;
        flex-wrap: row;
        li{
          padding: 15px;
          text-align: center;
          img{
            width: 100%;
            border-radius: 10px;
          }
          p.relate_name{
            width: 100%;
            line-height: 40px;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: center;
          }
          .price{
            color: #ff6700
          }
        }
      }
    }
  }
}
</style>
