/**
 * @description 系统全局配置
 * @author xiangguijun
 */

export default {
  /**
   * @description 记住密码状态下的token在Cookie中存储的天数，默认1天
   */
  tokenCookieExpires: 1,

  /**
   * @description 记住密码状态下的密码在Cookie中存储的天数，默认1天
   */
  passCookieExpires: 1,

  /**
   * @description 网站名称
   */
  webName: 'ops',

  /**
   * @description token key
   */
  TokenKey: 'EL-OSP-TOEKN',

  /**
   * @description 请求超时时间，毫秒（默认2分钟）
   */
  timeout: 120000
}