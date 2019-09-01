import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import Category from '@/components/category/index.vue'
import Cart from '@/components/cart/index.vue'
import Mine from '@/components/mine/index.vue'
import Set from '@/components/mine/set.vue'
import Search from '@/components/search/index.vue'
import List from '@/components/search/list.vue'
import Login from '@/components/user/login.vue'
import Recommend from '@/components/home/nav/components/recommend'
import Telephone from '@/components/home/nav/components/telephone'
import Intellect from '@/components/home/nav/components/intellect'
import Television from '@/components/home/nav/components/television'
import Book from '@/components/home/nav/components/book'
import HouseElectric from '@/components/home/nav/components/House_Electric'
import FiveG from '@/components/home/nav/components/5g'
import Round from '@/components/home/nav/components/round'
import detail from '@/common/detail'

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
          title: '推荐',
          footShow: true
        }
      },
      {
        path: 'telephone',
        component: Telephone,
        meta: {
          cache: true,
          title: '手机',
          footShow: true
        }
      },
      {
        path: 'intellect',
        component: Intellect,
        meta: {
          cache: true,
          title: '智能',
          footShow: true
        }
      },
      {
        path: 'television',
        component: Television,
        meta: {
          cache: true,
          title: '电视',
          footShow: true
        }
      },
      {
        path: 'book',
        component: Book,
        meta: {
          cache: true,
          title: '笔记本',
          footShow: true
        }
      },
      {
        path: 'house_electric',
        component: HouseElectric,
        meta: {
          cache: true,
          title: '家电',
          footShow: true
        }
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
      title: '分类',
      footShow: true
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      cache: true,
      title: '购物车',
      footShow: true
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
    meta: {
      cache: false,
      title: '我的',
      footShow: true
    }
  },
  {
    path: '/mine/set',
    name: 'Set',
    component: Set,
    meta: {
      cache: false,
      title: '设置',
      footShow: false
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail,
    meta: {
      cache: true,
      title: '详情',
      footShow: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      cache: true,
      title: '搜索',
      footShow: false
    }
  },
  {
    path: '/search/list:keys',
    name: 'list',
    component: List,
    meta: {
      cache: true,
      title: '搜索列表',
      footShow: false
    }
  },
  {

    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      cache: false,
      title: '登录',
      footShow: false
    }
  }
  ]
})
