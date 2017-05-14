<template>
  <div class="view_order_detail_done">
    <Order :orderinfo="orderinfo" isBtn>
      <span class="state" slot="state">已缴费</span>
    </Order>
    <p class="orderdetail_msg">温馨提示:您可前往E点通官方网站查看详细订单信息</p>
    <Tel></Tel>
    <div class="order_receipt">
      <p :class="[showDetail?'title_up':'title_down']" @click="showDetail=!showDetail">发票详情</p>
      <p class="msg" v-show="showDetail">您的发票还在审核中!</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_orderdetaildoing.scss";
  .view_order_detail_done {
    padding-top: .2rem;
  }

  .orderdetail_msg {
    font-size: .4rem;
    padding-top: .2rem;
    padding-left: .2rem;
  }
  .state{
    color:rgb(120,202,117)
  }
</style>
<script>
  import Order from './components/Order.vue';
  import Tel from './components/Tel.vue';
  export default {
    name: 'orderdetaildone',
    data () {
      return {
        orderinfo:this.$store.state.order,
        showDetail:false
      };
    },
    methods: {},
    components: {
      Order,
      Tel
    }
  };
</script>
