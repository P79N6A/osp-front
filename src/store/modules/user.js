/**
 * @description 关于用户的状态管理
 * @author xiangguijun
 */
import { getToken } from '@/modules/auth'
import loginApi from '@/api/login'

export default {
  state: {
    token: getToken(),
    user: {},
    roles: []
  },
  mutations: {
    SET_TOKEN: (state, token) => { state.token = token },
    SET_USER: (state, user) => { state.user = user },
    SET_ROLES: (state, roles) => { state.roles = roles }
  },
  actions: {
    getUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        loginApi.request('getUserInfo')
          .then(result => {
            const data = result.data
            commit('SET_ROLES', data.authorities)
            resolve(result)
          })
          .catch(error => reject(error))
      })
    }
  }
}
