import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import Category from '@/components/category/index.vue'
import Cart from '@/components/cart/index.vue'
import Mine from '@/components/mine/index.vue'
import Recommend from '@/components/home/nav/components/recommend'
import Telephone from '@/components/home/nav/components/telephone'
import Intellect from '@/components/home/nav/components/intellect'
import Television from '@/components/home/nav/components/television'
import Book from '@/components/home/nav/components/book'
import HouseElectric from '@/components/home/nav/components/House_Electric'
import FiveG from '@/components/home/nav/components/5g'
import Round from '@/components/home/nav/components/round'

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
    },
    children: [
      {
        path: 'recommend',
        component: Recommend,
        redirect: '/home'
      },
      {
        path: 'telephone',
        component: Telephone
      },
      {
        path: 'intellect',
        component: Intellect
      },
      {
        path: 'television',
        component: Television
      },
      {
        path: 'book',
        component: Book
      },
      {
        path: 'house_electric',
        component: HouseElectric
      },
      {
        path: '5g',
        component: FiveG
      },
      {
        path: 'round',
        component: Round
      }
    ]
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      cache: false,
      title: '分类'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      cache: false,
      title: '购物车'
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
    meta: {
      cache: false,
      title: '我的'
    }
  }
  ]
})
