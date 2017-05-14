<template>
  <div class="view_serverinfo">
    <swiper :list="bannerlist" auto :aspect-ratio="220/750" dots-class="custom-bottom"
            dots-position="center"></swiper>
    <ul class="serverinfo_serverlist">
      <li v-for="server in serverlist" @click="onServerClick(server)">
        <img :src="server.url">
      </li>
    </ul>
    <div class="serverinfo_products">
      <div class="serverinfo_products_title">
        <img src="../assets/img/gift_hot.png">
      </div>
      <ul>
        <img class="right_" src="../assets/img/right.png">
        <li v-for="item in items">
          <p class="serverinfo_products_humens">382人已申请</p>
          <img :src="item.imgPath">
          <p class="serverinfo_products_name">{{item.shortName}}</p>
        </li>
      </ul>
      <router-link to="Products">
        <div class="serverinfo_btn">
          点击查看赠品
        </div>
      </router-link>
    </div>
    <Tel></Tel>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_serverinfo.scss";
</style>
<script type="text/ecmascript-6">
  import Tel from './components/Tel.vue';
  import { Swiper, SwiperItem } from 'vux';
  import {serverinfoBanner,serverlist} from '../assets/config.js'
  export default{
    name: 'serverinfo',
    data () {
      return {
        serverlist:serverlist,
        bannerlist: serverinfoBanner,
        items:''
      };
    },
    created () {
      this.loadData()
    },
    methods: {
      onServerClick (server) {
        if (server.key !== 'other') {
          this.$store.commit('server', server);
          this.$router.push({path: 'BuyServer'});
        }
      },
      loadData () {
        let that = this;
        this.$http.post(this.URL.GIFT_LIST, {})
          .then(function (res) {
            that.items = JSON.parse(res.data.data);
          })
          .catch(function (res) {
            alert(res.data.message);
          })
      }
    },
    components: {
      Tel, Swiper, SwiperItem
    }
  };
</script>
