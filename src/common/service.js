import request from '../utils/request'

export function queryTest() {
  return request.get(`mock`);
}
export function getSeller() {
  return request.get(`seller`);
}
export function postNewsList(params) {
  return request.post(`appapi.php`, { params });
}
