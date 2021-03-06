import * as  api from '../../common/service';

const seller = {
  state: {
    spanning: true,
    sellerList: [],
    sellerSyn: JSON.parse(localStorage.getItem("sellerSyn")),
    goods: [],
    cart: {
      sum: 0,
      box: 0,
      goods: [],
    },
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
      const cart = {
        sum: 0,
        box: 0,
        goods: [],
      };
      data.map((val, index) => {
        val.foods.map((value, i) => {
          if(value.num>0){
            cart.box +=  value.num*0.5;
            cart.sum += value.num*value.price;
            value.index = index;
            value.i = i;
            cart.goods.push(value);
          }
        })
      })
      state.goods = data;
      state.cart = cart;
    },
    SPANNING(state){
      state.spanning = !state.spanning;
    },
  }
}
export default seller
