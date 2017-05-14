// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './vuex/store.js'
import '../libs/rem.js'
import url from './assets/baseUrls.js'
import {AlertPlugin} from 'vux'
Vue.use(AlertPlugin)

Vue.prototype.$http = axios
// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.commit('updateLoadingStatus',true)
  return config;
}, function (error) {
  // Do something with request error
  console.log(`error========${error}`)
  return Promise.reject(error);
});

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  store.commit('updateLoadingStatus',false)
  return response;
}, function (error) {
  // Do something with response error
  console.log(`error========${error}`)
  store.commit('updateLoadingStatus',false)
  return Promise.reject(error);
});


Vue.config.productionTip = false

Vue.prototype.URL = url

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
})
