import request from '../utils/request'

export function getSeller() {
  return request.get(`seller`);
}
export function getGoods() {
  return request.get(`goods`);
}
export function getRatings() {
  return request.get(`ratings`);
}
export function postNewsList(params) {
  return request.post(`appapi.php`, { params });
}
