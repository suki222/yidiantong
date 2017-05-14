<template>
  <div class="home">
    <swiper :list="demo03List" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom"
            dots-position="center"></swiper>
    <MenuTab :menulist="menulist" :type="'type_four'" style="background: white"></MenuTab>
    <div class="home_news clearfix">
      <router-link to="/BuyServer">
        <div class="home_news_info">
          <p>购买e点通</p>
          <p>豪华服务包上线 <br>一转多,更多优惠</p>
        </div>
      </router-link>
      <div class="home_news_info">
        <router-link to="/OrderList">
          <p>订单详情</p>
          <p>实时查看账单 <br>安全缴费更放心</p>
        </router-link>
      </div>
    </div>
    <ul class="home_asks">
      <li class="home_asks_title">
        <div class="right">
          <p>常见问题<span>点击前往客服中心</span></p>
        </div>
      </li>
      <li class="home_asks_item" v-for="ask in asklist">
        {{ask.title}}
      </li>
    </ul>
    <div class="home_tel" @click="onTelClick">
      <span>客服热线 : </span>{{tel}}
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_home.scss";
</style>
<script type="text/ecmascript-6">
  import { Swiper, SwiperItem } from 'vux';
  import { URL } from './../assets/baseUrls.js'
  import MenuTab from './components/MenuTab.vue';
  const imgList = [
    require('../assets/img/buyserver_banner_1.jpg'),
    'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
  ];
  const demoList = imgList.map((one) => ({
      url: 'javascript:',
      img: one
    })
  );
  export default {
    name: 'home',
    data () {
      return {
        menulist: [
          {label: '服务内容', imgUrl: require('../assets/img/logo.png'), href: 'ServerInfo'},
          {label: '在线咨询', imgUrl: require('../assets/img/logo.png'), href: 'CallCenter'},
          {label: '政策资讯', imgUrl: require('../assets/img/logo.png')},
          {label: '意见反馈', imgUrl: require('../assets/img/logo.png')}
        ],
        asklist: [
          {title: '如何进行一转多?'},
          {title: '密码丢失要如何找回?'},
          {title: '一转多赠品如何补偿?'}
        ],
        tel: '4009-998-998',
        demo03List: demoList
      };
    },
    created () {
    },
    methods: {
      //  客服热线点击
      onTelClick () {
        location.href = 'tel:' + this.tel;
      }
    },
    components: {
      Swiper,
      SwiperItem,
      MenuTab
    }
  };
</script>
