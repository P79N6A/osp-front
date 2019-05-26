/**
 * @description 操作cookie
 * @author xiangguijun
 */

import Cookies from 'js-cookie'
import Setting from '@/setting'

const TokenKey = Setting.TokenKey
const getToken = () => Cookies.get(TokenKey)
const setToken = (token, rememberMe = false) => {
  if (rememberMe) {
    return Cookies.set(TokenKey, token, { expires: Setting.tokenCookieExpires })
  }
  return Cookies.set(TokenKey, token)
}
const removeToken = () => Cookies.remove(TokenKey)

setToken('12345678')

export { getToken, setToken, removeToken }
