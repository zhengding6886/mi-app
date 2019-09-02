<template>
  <div class="sort clearfix">
    <div class="sort-title">常用分类</div>
    <div class="sort-list clearfix">
      <ul>
        <li v-for="(item , index) in sort_list" :key="index" @click="search(item.name)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sort_list: [
        { id: '0', name: '手机' },
        { id: '1', name: '电视' },
        { id: '2', name: '笔记本' },
        { id: '3', name: '盒子' },
        { id: '4', name: '路由器' },
        { id: '5', name: '平板' },
        { id: '6', name: '手表' },
        { id: '7', name: 'VR' },
        { id: '8', name: '耳机' },
        { id: '9', name: '空气净化器' },
        { id: '10', name: '空调' },
        { id: '11', name: '洗衣机' }
      ]
    }
  },
  methods: {
    search (name) {
      this.$router.push({
        name: 'list',
        params: {
          keys: name || ''
        }
      })
    }

  }

}
</script>

<style lang="less" scoped>
.sort {
  width: 100%;
  margin-bottom: 120px;
  .sort-title {
    width: 100%;
    font-size: 28px;
    text-align: left;
    padding: 30px;
    color: #666;
  }
  .sort-list {
    width: 100%;

    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        display: inline-block;
        padding: 6px 20px;
        margin-left: 30px;
        margin-top: 20px;
        background: #f5f5f5;
        line-height: 60px;
        text-align: center;
        font-size: 24px;
        color: rgba(0, 0, 0, 0.54);
      }
    }
  }
}
</style>
