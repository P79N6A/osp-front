/**
 * @description axios基础封装
 * @author xiangguijun
 * Axios是一个基于promise的HTTP库，可以用在浏览器和Node.js中.request是axios的一个实例
 * qs: A querystring parsing and stringifying library with some added security
 *    (1) qs.parse()将URL解析成对象的形式
 *    (2) qs.stringify()将对象 序列化成URL的形式，以&进行拼接
 */

import request from '@/modules/request'
import qs from 'qs'

export default class BaseUrl {

  /**
   * @description 构造器
   * 定义了全局公共API接口
   */
  constructor () {
    this.config = { codeList: '/code/list' }
  }

  /**
   * @description 异步请求
   * @param {请求配置的key} urlKey
   * @param {请求数据} data
   */
  request (urlKey, data) {
    let url
    const urlObj = this.config[urlKey]
    switch (typeof urlObj) {
      case 'string':
        url = urlObj
        break
      case 'function':
        // Rest写法
        url = urlObj.url(data)
        break
      default:
        url = urlObj.url
        break
    }
    // 其他Url
    // if (urlObj.monitorUrl) {
    //  url = process.env.MONITOT_URL + '/' + url
    // }
    let async
    const method = urlObj.method || 'get'
    switch (method) {
      case 'post':
        async = request.post(url, data)
        break
      case 'put':
        async = request.put(url, data)
        break
      case 'delete':
        async = request.delete(url, data)
        break
      default:
        async = request.request({
          url: url,
          method: method,
          params: data
        })
    }
    return async
  }

  /**
   * 执行多个并发请求
   * @param {请求数组} asyncAxiosArray
   */
  all (asyncAxiosArray) {
    return request.all(asyncAxiosArray)
  }

  /**
   * 获取绝对的url地址
   * @param {url键值} urlKey
   * @param {参数} params
   */
  getAbsoluteUrl (urlKey, params) {
    // Object.keys(obj): 返回一个表示给定对象的 所有可枚举属性的 字符串数组
    if (params && Object.keys(params).length !== 0) {
      return `${this.config[urlKey]}?${qs.stringify(params)}`
    }
    return this.config[urlKey]
  }
}
