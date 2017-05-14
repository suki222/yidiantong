<template>
  <div class="view_order_detail_doing">
    <div class="orderdetail_top">
        不满意?<span @click="link('/BuyServer')">重新下单</span>
        <div class="orderdetail_server">
          有疑问? <span @click="link('/CallCenter')">去咨询</span>
        </div>
    </div>
    <Order :orderinfo="orderinfo">
      <span class="state" slot="state">未缴费</span>
    </Order>
    <Tel></Tel>
    <div class="order_receipt">
      <p :class="[showDetail?'title_up':'title_down']" @click="showDetail=!showDetail">发票详情</p>
      <p class="msg" v-show="showDetail">您的发票还在审核中!</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_orderdetaildoing.scss";
</style>
<script>
  import Order from './components/Order.vue';
  import Tel from './components/Tel.vue';
  export default {
    name: 'orderdetaildoing',
    data () {
      return {
        orderinfo: this.$store.state.order,
        showDetail:false
      };
    },
    methods: {
      link (path) {
        this.$router.push(path)
      }
    },
    components: {
      Order,
      Tel
    }
  };
</script>
