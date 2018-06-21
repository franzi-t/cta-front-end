import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    levelCount: '',
    levelDescription: '',
    levelDocs: '',
    result: ''
  },

  actions: {
    advanceLevel (context) {
      return new Promise((resolve) => {
        this.$http.get().then((response) => {
          context.commit('updateLevel', response.data.)
        });
      });
    }
  },

  mutations: {
    updateLevel (state, payload) {
      state.levelCount = payload.levelCount
      state.levelDescription = payload.levelDescription
      state.levelDocs = payload.levelDocs
    },

    updateResult (state, payload) {
      state.result = payload.result
    }
  }
})
