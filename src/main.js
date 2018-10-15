import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import MintUI from 'mint-ui'
import AMap from 'vue-amap'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);
Vue.config.productionTip = false;

Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'ca0a3389870fad90602814bd35953aa1',
  plugin: ['AMap.Autocomplete',  'AMap.ToolBar', 'AMap.MapType', 'AMap.Geolocation', 'AMap.CircleEditor']
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
