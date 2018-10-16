const getters = {
  /*loation*/
  position: state => state.location.position,
  /*seller*/
  sellerList: state => state.seller.sellerList,
  goods: state => state.seller.goods,
  cart: state => state.seller.cart,
  sellerSyn: state => state.seller.sellerSyn,
}
export default getters
