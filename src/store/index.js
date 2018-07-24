import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  tileDirectory: [],
  tileSize: 30,
  columns: 9,
  rows: 9,
  mineCount: 10,
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
