/**
 * @description 首页路由导航
 * @author xiangguijun
 */

import Dashboard from '@/views/dashboard/Dashboard'
import Dash from '@/views/dashboard/Dash.vue'
import Home from '@/views/Home.vue'

export default {
  path: '/dash',
  component: Dashboard,
  meta: {
    title: '首页'
  },
  children: [{
    path: 'open_device',
    component: Home
  }]
}