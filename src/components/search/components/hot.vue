<template>
  <div class="hot clearfix">
    <div class="hot-title">热门搜索</div>
    <div class="hot-ad">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dcde3c2759689ca39d2f60483b6684bb.jpg?w=1080&h=300&bg=C6E2EE"
        alt
      />
    </div>
    <div class="hot-list clearfix">
      <ul>
        <li v-for="(item , index) in hot_list" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hot_list: [
        { id: 0, name: 'Redmi Note 7 Pro' },
        { id: 1, name: '小米蓝牙耳机K歌版' },
        { id: 2, name: '保温杯' },
        { id: 3, name: '扫地机器人1S' },
        { id: 4, name: '小米CC9e' },
        { id: 5, name: '小米手环4' },
        { id: 5, name: '小米盒子4c' },
        { id: 5, name: '小米路由器4' },
        { id: 5, name: '全面屏电视E55C' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.hot {
  width: 100%;
  margin-top: 100px;
  .hot-title {
    width: 100%;
    font-size: 28px;
    text-align: left;
    padding: 30px;
    color: #666;
  }
  .hot-ad img {
    width: 100%;
    height: 210px;
    display: block;
  }
  .hot-list {
    width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        display: inline-block;
        padding: 6px 20px;
        margin-left: 30px;
        margin-top: 20px;
        border: 1px solid #97c28a;
        background: #e4f5e2;
        line-height: 60px;
        text-align: center;
        font-size: 24px;
      }
      li:nth-child(2n) {
        background: #fae8e8;
        border: 1px solid #e3af96;
      }
    }
  }
}
</style>
