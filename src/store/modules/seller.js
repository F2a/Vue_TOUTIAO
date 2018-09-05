import * as  api from '../../common/service';

const seller = {
  state: {
    spanning: true,
    sellerList: [],
    sellerSyn: JSON.parse(localStorage.getItem("sellerSyn")),
    goods: [],
  },
  actions: {
    async getList ({ commit, state }) {
      if(state.spanning){
        commit('SPANNING');
        console.log('push sellerList');
        const { data } = await api.getSeller();
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
        const { list } = data.data;
        commit('POSTGOODS', list);
      }
    }
  },
  mutations: {
    SELLERSYN (state, data) {
      console.log(data);
      state.sellerSyn = data;
      const sellerSyn = JSON.stringify(data);
      localStorage.setItem("sellerSyn", sellerSyn);
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
