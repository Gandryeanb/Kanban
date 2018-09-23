import Vue from 'vue'
import Vuex from 'vuex'
import db from './config'

Vue.use(Vuex)
const allReference = db.ref('db/')

export default new Vuex.Store({
  state: {
    isDataReady: false,
    allData: [],
    detailData: {},
    taskState: 'none'
  },
  mutations: {
    selectMut (state, payload) {
      state.taskState = payload
    },
    dataMut (state, payload) {
      state.isDataReady = true
      state.allData = payload || []
    },
    detailMut (state, payload) {
      state.detailData = payload
    }
  },
  actions: {
    selectTask ({ commit }, payload) {
      commit('selectMut', payload)
    },
    loadData ({ commit }, payload) {
      allReference.on('value', snapshot => {
        commit('dataMut', snapshot.val())
      })
    },
    viewDetail ({ commit }, payload) {
      const path = db.ref(`db/${payload.room}/${payload.id}`)
      path.on('value', snapshot => {
        commit('detailMut', snapshot.val())
      })
    }
  }
})