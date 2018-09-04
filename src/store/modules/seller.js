import * as  api from '../../common/service';

const seller = {
  state: {
    spanning: true,
    sellerList: [],
    sellerSyn: {},
    goods: {},
  },
  actions: {
    async getList ({ commit, state }) {
      if(state.spanning){
        commit('SPANNING');
        console.log('push sellerList');
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
    async getGoods ({ commit }) {
      console.log('getGoods');
      const { data } = await api.getGoods();
      if(data){
        commit('POSTGOODS', data.list);
      }
    }
  },
  mutations: {
    SELLERSYN (state, data) {
      console.log(data);
      state.sellerSyn = data;
    },
    POSTLIST(state, data){
      state.sellerList = data;
    },
    POSTGOODS(state, data){
      state.goods = data;
    },
    SPANNING(state){
      state.spanning = !state.spanning;
    },
  }
}
export default seller
