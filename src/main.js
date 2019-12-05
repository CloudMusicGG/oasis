import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios';
import ElementUI from 'element-ui';
import MintUI from 'mint-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'mint-ui/lib/style.css'
import store from './store'
import './assets/iconfont/iconfont.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.use(ElementUI);
Vue.use(MintUI);

Axios.defaults.baseURL = '/api/'; //把axios的请求基本路径改为api，以后就不需要在每个axios请求里写api


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
