// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入适配方案
import 'mint-ui/lib/style.css'
import 'lib-flexible'
// 引入兼容性插件动态修改title
import VueWechatTitle from 'vue-wechat-title'
// 引用MintUI
import MintUI from 'mint-ui'
// 引用store
import store from './store/index'
// 引用Router
import Router from 'vue-router'
// 引用表单验证插件
import Vuerify from 'vuerify'
Vue.use(VueWechatTitle)
// 阻止启动生产消息
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(Vuerify)
/* eslint-disable no-new */
// 路由全局守卫函数
router.beforeEach((to, from, next) => {
  // console.log(to.meta.title)
  document.title = to.meta.title
  next()
})
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.setStorge = function (list) {
  window.localStorage.setItem('userInfo', JSON.stringify(list))
}
Vue.prototype.getStorge = function () {
  return JSON.parse(window.localStorage.getItem('userInfo'))
}
Vue.prototype.removeStorge = function () {
  localStorage.removeItem('userInfo')
}
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
