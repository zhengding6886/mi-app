// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'lib-flexible'
import VueWechatTitle from 'vue-wechat-title'
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueWechatTitle)
/* eslint-disable no-new */
// 路由全局守卫函数
router.beforeEach((to, from, next) => {
  // console.log(to.meta.title)
  document.title = to.meta.title
  next()
})
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
