import Vue from 'vue'
import * as  api from '../../common/service';

const seller = {
  state: {
    spanning: true,
    sellerList: [],
    sellerDetail: {},
  },
  actions: {
    async getList ({ commit, state }) {
      if(state.spanning){
        commit('SPANNING');
        console.log(1222111);
        const { data } = await api.getSeller();
        console.log(data);
        if(data){
          const { list } = data.data;
          state.sellerList.push(...list);
          commit('POSTLIST', state.sellerList);
          commit('SPANNING');
        }
      }
    },
  },
  mutations: {
    POSTLIST(state, data){
      state.sellerList = data;
    },
    SPANNING(state){
      state.spanning = !state.spanning;
    },
  }
}
export default seller
