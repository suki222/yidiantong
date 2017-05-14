<template>
  <div class="view_products">
    <ul class="product_list">
      <li v-for="product in products" class="clearfix">
        <div class="product_imgs">
          <img class="product_hot" src="../assets/img/icon_hot.png" v-show="product.isHot=='1'">
          <img class="product_img" :src="product.imgPath">
        </div>
        <div class="products_info">
          <p class="product_name">{{product.shortName}} <span>热度: <span class="hot">1200</span></span></p>
          <p class="product_vip">钻石vip会员专享</p>
          <div class="line"></div>
          <p class="product_detail">{{product.zpDesc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_products.scss";
</style>
<script>
  import {productList} from '../assets/config.js'
  export default {
    name: 'products',
    data () {
      return {
        products: ''
      };
    },
    created () {
      this.loadData()
    },
    methods: {
      loadData () {
        let that = this;
        this.$http.post(this.URL.GIFT_LIST, {})
          .then(function (res) {
            that.products = JSON.parse(res.data.data);
          })
          .catch(function (res) {
            alert(res.data.message);
          })
      },
    },
    components: {}
  };
</script>
