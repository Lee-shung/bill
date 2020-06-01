import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false
  },
  mutations: {
    changeCollapse(state) {
        state.isCollapse = !state.isCollapse;
    }
  },
  actions: {
    changeCollapse({commit}) {
      commit('changeCollapse')
    }
  },
  modules: {
  }
})
