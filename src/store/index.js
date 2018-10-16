import Vue from 'vue'
import Vuex from 'vuex'
import seller from './modules/seller'
import location from './modules/location'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    seller,
    location,
  },
  getters
})

export default store
