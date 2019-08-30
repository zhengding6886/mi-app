<template>
<<<<<<< HEAD
  <div>分类
  </div>
</template>
 
=======
  <div class="category">
    <Header ref="son"></Header>
    <div class="shop">
      <!-- 左边 -->
      <div class="menu-wrapper">
        <ul>
          <li
            class="menu-item"
            v-for="(goods,index) in searchgoods"
            :key="index"
            :class="{current: index === currentIndex}"
            @click="clickList(index)"
            ref="menuList"
          >
            <span>{{goods.left}}</span>
          </li>
        </ul>
      </div>
      <!-- 右边 -->
      <div class="shop-wrapper">
        <ul ref="itemList">

          <li class="shops-li" v-for="(right, index1) in searchgoods" :key="index1">

            <div v-for="(items,index) in right.info" :key="index">

             <div class="itemList-img">
                <img :src="items.title_img" alt />
              </div>
              <div class="itemList-title">
                <span>{{ items.title }}</span>
              </div>

              <div class="item-list">
                <ul class="clearfix">
                  <li v-for="(item, index) in items.list" :key="index">
                    <div class="item-list-img">
                      <img v-lazy="item.img" alt />
                    </div>
                    <div class="item-list-name">{{ item.name }}</div>
                  </li>
                </ul>
              </div>

            </div>

            <div class="more">查看更多</div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/common/header.vue'
import BScroll from 'better-scroll'
import {getList} from '@/api/axios'
export default {
  name: 'chat',
  components: {
    Header
  },
  data () {
    return {
      scrollY: 0, // 右侧列表滑动的y轴坐标
      rightLiTops: [], // 所有分类头部位置
      searchgoods: []
    }
  },
  created () {
    getList().then(res => {
      this.searchgoods = res.data
    })
  },
  computed: {
    // 动态绑定class类名
    currentIndex (index) {
      const {scrollY, rightLiTops} = this
      return rightLiTops.findIndex((tops, index) => {
        this._initLeftScroll(index)
        return scrollY >= tops && scrollY < rightLiTops[index + 1]
      })
    }
  },
  mounted () {
    this.$refs.son.title = '分类'
  },

  watch: {
    searchgoods () {
      // 监听数据
      this.$nextTick(() => {
        // 左右两边滚动
        this._initBScroll()
        // 右边列表高度
        this._initRightHeight()
      })
    }
  },
  methods: {

    _initBScroll () {
      // 左边滚动
      this.leftBscroll = new BScroll('.menu-wrapper', { click: true, tap: true })
      // 右边滚动
      this.rightBscroll = new BScroll('.shop-wrapper', {
        probeType: 3,
        click: true,
        tap: true
      })
      // 监听右边滚动事件
      this.rightBscroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(pos.y)
        // console.log(this.scrollY)
      })
    },
    // 求出右边列表的高度
    _initRightHeight () {
      let itemArray = [] // 定义一个伪数组
      let top = 0
      itemArray.push(top)
      // 获取右边所有li的礼
      let allList = this.$refs.itemList.getElementsByClassName('shops-li')
      // allList伪数组转化成真数组
      Array.prototype.slice.call(allList).forEach(li => {
        top += li.clientHeight // 获取所有li的每一个高度
        itemArray.push(top)
      })
      this.rightLiTops = itemArray
      // console.log(this.rightLiTops)
    },
    // 点击左边实现滚动
    clickList (index) {
      this.scrollY = this.rightLiTops[index]
      this.rightBscroll.scrollTo(0, -this.scrollY, 200)
    },
    // 左右联调
    _initLeftScroll (index) {
      let menu = this.$refs.menuList
      let el = menu[index]
      this.leftBscroll.scrollToElement(el, 300, 0, -300)
    }
  }
}
</script>
<style scoped>
.category{
   width: 100%;
}
.search {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
}
.shop {
  display: flex;
  position: absolute;
  top:80px;
  bottom: 110px;
  overflow: hidden;
}
.menu-wrapper {
  width: 100%;
  background-color: #fafafa;
  width: 150px;
  flex: 0 0 150px;
}
.menu-item {
  width: 100%;
  height: 90px;
  line-height: 90px;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: lighter;
  color: #3c3c3c;
  position: relative;
}
.current {
  color: #fb7d34;
  background: #ffffff;
}
.current::before {
  content: "";
  background-color: #fb7d34;
  width: 4px;
  height: 90px;
  position: absolute;
  right: 0;
}
.shop-wrapper {
  width: 600px;
  background: #fff;
}
.shops-title {
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  height: 200px;
  line-height: 200px;
  border: 1px solid #ccc;
  align-items: center;
  justify-content: space-between;
  color: #9999;
}
.shops-items {
  display: flex;
  flex-wrap: wrap;
}
.shop-wrapper {
  padding: 10px 20px;
}
.shops-li {
  padding-bottom: 30px
}

.itemList-img {
  height: 200px;
}
.itemList-img img {
  width: 100%;
}
.itemList-title {
  font-size: 28px;
  text-align: center;
  height: 120px;
  line-height:120px;
  margin: 20px auto;
}
.itemList-title span {
  position: relative;
}
.itemList-title span::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 50px;
  border-top: 2px solid #e0e0e0;
  transform: translate3d(-150%, -50%, 0);
  -webkit-transform: translate3d(-150%, -50%, 0);
}
.itemList-title span::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 50px;
  border-top: 2px solid #e0e0e0;
  left: auto;
  right: 0;
  transform: translate3d(150%, -50%, 0);
  -webkit-transform: translate3d(150%, -50%, 0);
}
.item-list li {
  width: 33.3%;
  float: left;

}
.item-list-img {
  width:100px;
  height:100px;
  margin: auto;
}
.item-list-name {
  margin-top:15px;
  text-align: center;
  white-space: nowrap;
  font-size: 23px;
  color: rgba(0, 0, 0, 0.54);
}
.item-list-img img {
  width: 100%;
}
.more {
  background-color: skyblue;
  margin:15px auto 0;
  text-align: center;
  height:80px;
  line-height:80px;
  color: #aea38d;
  background-color: #f9f5e6;
}
.shop-wrapper .shops-li:last-child {
  min-height: -webkit-calc(100vh - 200px);
  min-height: calc(100vh - 200px);
}
img[lazy="loading"] {
  width: 100px;
  height: 100px;
  margin: auto;
}
</style>
>>>>>>> 81784fa0d6ff419b35ba89e67f2c24c029b94856
