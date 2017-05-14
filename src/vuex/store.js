/**
 * Created by wujw on 17/2/7.
 */
import Vue from 'vue';
import Vuex from 'vuex';
// 告诉 vue “使用” vuex
Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
const state = {
  address: {}, //  寄送地址
  addressReceipt: '', //  发票地址
  server: '', // 选择的套餐
  gifts: '', // 选择的赠品
  isLoading: false,
  userid: '', // 用户唯一标识
  userinfo:'', // 用户信息
  order:'', // 订单信息
  receipt:'',//发票类型
  redirectedFrom:'',//上个跳转页面
};

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // 放置我们的状态变更函数
  address (state, data) {
    state.address = data;
  },
  addressReceipt (state, address) {
    state.addressReceipt = address;
  },
  server (state, server) {
    state.server = server;
  },
  setGift (state, gifts) {
    state.gifts = gifts;
  },
  setUserid(state, userid){
    state.userid=userid;
  },
  setUserInfo(state,userinfo){
    state.userinfo=userinfo;
  },
  order(state,order){
    state.order=order;
  },
  setReceipt(state,receipt){
    state.receipt=receipt;
  },
  setRedirectedFrom(state,from){
    state.redirectedFrom=from;
  }
};

const store = new Vuex.Store({
  state,
  mutations
});

store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, value) {
      state.isLoading = value;
    }
  }
});
export default store;
