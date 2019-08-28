<template>
  <div>
    <Header ref="son"></Header>

  </div>
</template>

<script>
import Header from '@/common/header.vue'
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.$refs.son.title = '分类'
  },
  components: {
    Header
  },
  methods: {
    popModal () {
      // 父组件调用子组件的方法.
      // 当ref放到组件上去时，使用$refs获取到的是组件对象

    }
  }
}
</script>
<style scoped>
</style>
