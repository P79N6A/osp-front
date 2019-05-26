/**
 * @description 路由
 */

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import dashboard from './dashboard'
import Dashboard from '@/views/dashboard/Dashboard'

Vue.use(Router)
export const conatantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/home',
    component: () => import('@/views/dashboard/Dashboard')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/test',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Test')
  },
  {
    path: '/login',
    meta: { title: '登录', noCache: true },
    component: () => import('@/views/About'),
    hidden: true
  },
  {
    path: '/401',
    name: '401',
    meta: { title: '401' },
    // .vue的后缀可以省略
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404')
  },
  {
    path: '/dash',
    component: Dashboard,
    meta: {
      title: '首页'
    },
    children: [{
      path: 'open_device',
      component: require('@/views/dashboard/Dash.vue')
    }]
  }
]

// const mode = (process.env.NODE_ENV === 'production' ? 'history' : 'hash')
export default new Router({
  mode: 'history', // 开启之后访问路径后面不会加#
  scrollBehavior: () => ({ y: 0 }),
  routes: [...conatantRouterMap]
})
