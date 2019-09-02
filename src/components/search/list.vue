<template>
  <div class="list clearfix">
    <searchInput ref="child" ></searchInput>
    <searchList></searchList>
    <toTop></toTop>
  </div>
</template>
<script>
import searchInput from './components/searchInput.vue'
import searchList from './components/searchList.vue'
import toTop from '@/common/toTop.vue'
export default {
  components: {
    searchInput,
    searchList,
    toTop
  },
  data () {
    return {
      data: 10
    }
  },

  mounted () {
    this.getParams()
  },
  methods: {
    getParams () {
      // 取到路由带过来的参数
      var routerParams = this.$route.params.keys
      console.log(routerParams)
      this.$refs.child.keysWords = routerParams
      // 将数据放在当前组件的数据内
    }

  }
}
</script>

<style lang="less" scoped>
</style>
