import Vue from 'vue';
import Router from 'vue-router';
import store from '../vuex/store.js';
import Home from '@/pages/Home';// 首页
import Mine from '@/pages/Mine';// 我的
import ReMine from '@/pages/Mine';// 我的-重定向
import Information from '@/pages/Information';// 查询
import BuyServer from '@/pages/BuyServer';// 购买服务
import ServerInfo from '@/pages/ServerInfo';// 服务内容
import ReServerInfo from '@/pages/ServerInfo';// 服务内容-重定向
import GiftList from '@/pages/GiftList';// 选择赠品
import Address from '@/pages/Address';// 选择地址
import CallCenter from '@/pages/CallCenter';// 客服中心
import FeedBack from '@/pages/FeedBack';// 建议反馈
import Products from '@/pages/Products';// 赠品列表
import OrderList from '@/pages/OrderList';// 订单页面
import OrderDetailDoing from '@/pages/OrderDetailDoing';// 未缴费详情
import OrderDetailDone from '@/pages/OrderDetailDone';// 已缴费详情
import OpenAndBind from '@/pages/OpenAndBind';// 开通和绑定
import Bind from '@/pages/Bind';// 绑定
import Login from '@/pages/Login';// 登录
import ResetPwd from '@/pages/ResetPwd';// 修改密码
import Receipt from '@/pages/Receipt';// 发票信息填写
import ReceiptMenu from '@/pages/ReceiptMenu';// 发票类型选择页面
import ReceiptDetail from '@/pages/ReceiptDetail';// 发票说明
import OpenGuide from '@/pages/OpenGuide';// 开通绑定指导
import Menu from '@/pages/components/Menu';// 首页菜单组件

Vue.use(Router);

//  next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
//  next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
//  next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。

const router = new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        menu: Menu
      },
      redirect:to =>{
        if(!store.state.userid){
          return '/Login'
        }
      }
    },
    {
      path: '/Information',
      components: {
        default: Information,
        menu: Menu
      }
    },
    // 重定向用
    {
      path: '/ReMine',
      name: 'remine',
      component: Mine,
      redirect:to =>{
        if(!store.state.userid){
          return '/Login'
        }else{
          return '/Mine'
        }
      }
    },
    {
      path: '/Mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/BuyServer',
      name: 'buyserver',
      component: BuyServer
    },
    // 重定向用
    {
      path: '/ReServerInfo',
      name: 'reserverinfo',
      component: ServerInfo,
      redirect:to =>{
        if(!store.state.userid){
          return '/Login'
        }else{
          return '/ServerInfo'
        }
      }
    },
    {
      path: '/ServerInfo',
      name: 'serverinfo',
      component: ServerInfo
    },
    {
      path: '/GiftList',
      name: 'giftlist',
      component: GiftList
    },
    {
      path: '/Address',
      name: 'address',
      component: Address
    },
    {
      path: '/CallCenter',
      name: 'callcenter',
      component: CallCenter
    },
    {
      path: '/FeedBack',
      name: 'feedback',
      component: FeedBack
    },
    {
      path: '/Products',
      name: 'products',
      component: Products
    },
    {
      path: '/OrderList',
      name: 'orderlist',
      component: OrderList
    },
    {
      path: '/OrderDetailDoing',
      name: 'orderdetaildoing',
      component: OrderDetailDoing
    },
    {
      path: '/OrderDetailDone',
      name: 'orderdetaildone',
      component: OrderDetailDone
    },
    {
      path: '/OpenAndBind',
      name: 'openandbind',
      component: OpenAndBind
    },
    {
      path: '/Bind',
      name: 'bind',
      component: Bind
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/ResetPwd',
      name: 'resetpwd',
      component: ResetPwd
    },
    {
      path: '/Receipt',
      name: 'receipt',
      component: Receipt
    },
    {
      path: '/ReceiptMenu',
      name: 'receiptmenu',
      component: ReceiptMenu
    },
    {
      path: '/ReceiptDetail',
      name: 'receiptdetail',
      component: ReceiptDetail
    },
    {
      path: '/OpenGuide',
      name: 'openguide',
      component: OpenGuide
    }

  ]
});
router.beforeEach((to, from, next) => {
  //store.commit('updateLoadingStatus', true);
  store.commit('setRedirectedFrom',to.redirectedFrom);
    next();
  // ...
});
router.afterEach(() => {
  setTimeout(() => {
    //store.commit('updateLoadingStatus', false);
  }, 100);
});
export default router;
