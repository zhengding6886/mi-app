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
    redirect: '/home/recommend',
    name: 'index'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: '/home/recommend',
    meta: {
      cache: true,
      title: '首页'
    },
    children: [
      {
        path: 'recommend',
        component: Recommend,
        meta: {
          cache: true,
          title: '推荐'
        }
      },
      {
        path: 'telephone',
        component: Telephone,
        meta: {
          cache: true,
          title: '手机'
        }
      },
      {
        path: 'intellect',
        component: Intellect,
        meta: {
          cache: true,
          title: '智行'
        }
      },
      {
        path: 'television',
        component: Television,
        meta: {
          cache: true,
          title: '电视'
        }
      },
      {
        path: 'book',
        component: Book,
        meta: {
          cache: true,
          title: '家电'
        }
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
