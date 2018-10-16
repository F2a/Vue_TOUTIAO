
const location = {
  state: {
    spanning: true,
    position: {},
  },
  actions: {

  },
  mutations: {
    POSTPOSITION(state, data){
      state.position = data;
    },
    SPANNING(state){
      state.spanning = !state.spanning;
    },
  }
}
export default location
