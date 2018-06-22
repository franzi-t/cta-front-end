import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    levelCount: 3,
    levelDescription: '',
    levelDocs: '',
    result: '',
    answerCorrect: false,
    answer: 'abc'

  },

  actions: {
    test (context, obj) {
      console.log(obj.a)
      console.log(obj.b)
    },

    advanceLevel (context, levelCount, answer) {
      return new Promise((resolve) => {
        this.$http.get('localhost:9000/answer/' + levelCount + '/' + answer)
        .then((response) => {
          context.commit('updateLevel', response.data.nextLevel)
          resolve()
        })
      })
    }
  },

  mutations: {
    updateLevel (state, payload) {
      state.levelCount = payload.level
      state.levelDescription = payload.message
      state.levelDocs = payload.docs
    },

    updateResult (state, payload) {
      state.result = payload.result
    }
  }
})
