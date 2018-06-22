import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    levelCount: '',
    levelDescription: '',
    levelDocs: '',
    result: '',
    answerCorrect: false,
    answer: ''
  },

  actions: {
    advanceLevel (context, obj) {
      return new Promise((resolve) => {
        console.log('I am Http')
        this.$http.get('localhost:9000/answer/' + obj.levelCount + '/' + obj.answer)
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
