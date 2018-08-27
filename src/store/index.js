import Vue from 'vue'
import Vuex from 'vuex'
import seller from './modules/seller'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    seller,
  },
  getters
})

export default store
