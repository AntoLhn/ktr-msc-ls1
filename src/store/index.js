import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    connexion: false,
    users: [],
    bc : [],
  },
  mutations: {
    setConnexion(state){
      state.connexion = true
    },
    setDeconnexion(state){
      state.connexion = false
    },
    setUsers(state, user){
      state.users = user
    },
    addUser(state, useradd) {
      state.users.push(useradd)
    },
    addBc(state, bcadd) {
      state.bc.push(bcadd)
    },
    setBc(state, bc){
      state.bc = bc
    }
  },
  actions: {
  },
  modules: {
  }
})
