/**
 * @description vue状态管理-分发配置
 * @author xiangguijun
 */
import BaseApi from '@/api/BaseUrl'

export default {
  getOptions ({ state }, data ) {
    const options = state[`${data.type}Options`]
    if (options && options.length === 0) {
      new BaseApi().request('codeList', data)
        .then(result => state[`${data.type}Options`] = result.data)
    }
  },

  async queryOptions({ state, dispatch }, data) {
    const options = state[`${data.type}Options`]
    if (options && options.length === 0) {
      await dispatch('getOptions', data)
    }
    if (data.query === 'undefined' || data.query === '') {
      return options
    }
    return options.filter(item => item.value.startsWith(data.query))
  },

  async alwaysQueryOptions({ state, dispatch }, data) {
    return new BaseApi().request('codeList', data)
  }
}