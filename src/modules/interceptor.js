/**
 * @description 请求的拦截器配置
 * @author xiangguijun
 */

import request from '@/modules/request'
import { getToken, setToken, removeToken } from './auth'
import router from '@/router'
import store from '@/store'
/**
 * Notification:悬浮出现在页面角落，显示全局的通知提醒消息
 * MessageBox:模拟系统的消息提示框而实现的一套模态对话框组件
 */
import { Notification, MessageBox } from 'element-ui'
/**
 * @description request请求拦截器
 * 第一个回调函数： 发送请求之前
 * 第二个回调函数： 请求错误时触发
 */
request.interceptors.request.use(
  config => {
    // 给请求添加自定义的token
    console.log("------- getToken-----")
    if (getToken()) {
      console.log(getToken())
      config.headers['Authorization'] = 'Xiang' + getToken()
    }
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
request.interceptors.response.use(
  // 处理响应数据
  response => {
    const result = response.data
    if (result.code === 'A00000') {
      return result
    } else {
      if (result.code === 'A10000') {
        store.dispatch('signOut').then(() => {
          // 为了重新实例化vue-router对象 避免bug
          location.reload()
        })
      }
      if (result.code === 'A00009') {
        Notification.warning({
          title: result.message,
          duration: 2500
        })
      } else {
        Notification.error({
          title: result.message,
          duration: 2500
        })
      }
      return Promise.reject(result.message)
    }
  },
  // 处理响应错误数据
  error => {
    console.log(error)
    if (error && error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      const code = error.response.status
      // const data = error.response.data
      switch(code) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '未授权，请登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求地址出错'
          break
        case 408:
          error.message = '请求超时，请稍后重试'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default: 
          error.message = error.response.data.message || '未知错误'
      }
      
      if(code == 401) {
        MessageBox.confirm(
          '登录状态已过期，您可以继续留在该页面，或者重新登录',
          '系统提示',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('signOut').then(() => {
            // 为了重新实例化vue-router对象 避免bug
            location.reload()
          })
        })
      }

      if (code === 430) {
        router.push({ path: '/401' })
      }

    } else {
      // Something happened in setting up the request that triggered an Error
      if (error.toString().indexOf('Error: timeout') !== -1) {
        error.message = '请求超时，请稍后重试'
      }
      if (error.toString().indexOf('Error: Network Error') !== -1) {
        error.message = '网络错误，请联系网站管理员恢复'
      }
    }
    Notification.error({
      title: error.message,
      duration: 2500
    })
    // 清除Token 或不清除
    return Promise.reject(error)
  }
)

