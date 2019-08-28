<template>
  <div class="scrollTop" v-show="showTop" @click="toTop">
    <i class="iconfont icon-zhiding_o"></i>
  </div>
</template>
<script>
export default {
  name: 'scroll-top',
  data () {
    return {
      scrollTop: 0,
      time: 0,
      dParams: 200,
      scrollState: 0
    }
  },
  computed: {
    showTop: function () {
      let value = this.scrollTop > 200
      return value
    }
  },
  mounted () {
    window.addEventListener('scroll', this.getScrollTop)
  },
  methods: {
    toTop (e) {
      if (this.scrollState) {
        return
      }
      this.scrollState = 1
      e.preventDefault()
      let _this = this
      this.time = setInterval(function () {
        _this.gotoTop(_this.scrollTop - _this.dParams)
      }, 10)
    },
    gotoTop (distance) {
      this.dParams += 20
      let value = distance > 0 ? distance : 0
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = value
      if (this.scrollTop < 10) {
        clearInterval(this.time)
        this.dParams = 20
        this.scrollState = 0
      }
    },
    getScrollTop () {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    }
  }
}
</script>
<style scoped>
.scrollTop {
  position: fixed;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  right: 40px;
  bottom: 180px;
  border-radius: 50%;
  background: rgba(177, 164, 164, 0.5) ;
}
.scrollTop i {
  font-style: normal;
  font-size: 48px;
}
</style>
