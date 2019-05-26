import Vue from 'vue'
import Vuex from 'vuex'
import getters from './actions'
import user from './modules/user'

Vue.use(Vuex)

const enabledOptions = [
  { code: 0, value: '是' },
  { code: 1, value: '否' }
]

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    enabledOptions,
    contentTypeOptions: []
  },
  getters: {
    token: state => state.user.token,
    status: state => state.user.status,
    roles: state => state.user.roles
  },
  mutations: {

  },
  actions: {
    ...getters
  }
})
