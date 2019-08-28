import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import Category from '@/components/category/index.vue'
import Cart from '@/components/cart/index.vue'
import Mine from '@/components/mine/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home',
    name: 'index'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      cache: true,
      title: '首页'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      cache: true,
      title: '分类'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      cache: true,
      title: '购物车'
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
    meta: {
      cache: true,
      title: '我的'
    }
  }
  ]
})
