import axios from 'axios'


const axiosIns  = axios.create({
  baseURL: 'https://easy-mock.com/mock/5b73df8885b13978addd6e22/meituan/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
// 添加请求拦截器
axiosIns.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axiosIns.interceptors.response.use(response => {
  // 对响应数据做点什么
  const statusFlag = statusError(response.data.status);

  return response;
}, error => {
  // 对响应错误做点什么
  err(error);
  return Promise.reject(error);
});
function statusError(status) { //响应后台的状态错误
  let errorStatus = false
  switch (status) {
    case 404:
      errorStatus = 'tokenInvalid';
      break
  }
}
function err(info) {
  console.log(info);
  console.log('timeout of'.includes(info));
  if ('timeout of 10000ms exceeded'.includes(info)) {
    const result = { errmsg: '网络未连接，请检查网络设置' };
    console.log('连接easy-mock超时，将只展示固定资源页面。');
    return result;
  }
}


export default axiosIns
