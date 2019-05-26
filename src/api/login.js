/**
 * @description 登录请求API
 * @author xiangguijun
 */

import BaseUrl from '@/api/BaseUrl'

const urlConfig = {
  /**
  * @description 获取用户信息
  */
  getUserInfo: 'account/info',
    /**
  * @description 登录
  */
  signIn: {
    url: 'account/signIn',
    method: 'post'
  },
  signOut: {
    url: 'account/signOut',
    method: 'post'
  }
}

class Url extends BaseUrl {
  //Object.assign(target, ...sources) ：将所有可枚举属性的值从一个或多个源对象复制到目标
  constructor(config) {
    const father = super()
    this.config = Object.assign({}, father.config, config)
  }
}

export default new Url(urlConfig)