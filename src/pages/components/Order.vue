<template>
  <div class="view_orderinfo">
    <div class="view_orderinfo_">
      <p class="orderinfo_company">{{orderinfo.dwmc00}}</p>
      <div class="orderinfo_info">
        <div>
          <p>所属中心</p>
          <p>{{userinfo.sszx00}}</p>
        </div>
        <div>
          <p>医保单位编号</p>
          <p>{{userinfo.ybdwid}}</p>
        </div>
        <div>
          <p>经办人姓名</p>
          <p>{{orderinfo.sjrxm0}}</p>
        </div>
      </div>
      <div class="line"></div>
      <div class="orderinfo_other_info orderinfo_done" v-show="orderinfo.ddzt00=='996'">
        <p class="orderinfo_name">购买产品:<span>{{orderinfo.ddms00}}</span></p>
        <div class="clearfix">
          <p class="orderinfo_channel">缴费渠道:{{orderinfo.payChannel}}</p>
          <p class="orderinfo_price">缴费金额: <span>¥ {{orderinfo.ddje00}}</span></p>
        </div>
        <p>缴费日期:{{orderinfo.zfsj00}}</p>
        <p>交易流水:{{orderinfo.shh000}}</p>
      </div>
      <div class="orderinfo_other_info orderinfo_undo" v-show="orderinfo.ddzt00!='996'">
        <p>购买产品:{{orderinfo.ddms00}}</p>
        <p>下单日期:{{orderinfo.zfsj00}}</p>
        <p>下单过期时间:{{orderinfo.shh000}}</p>
      </div>
    </div>
    <div class="orderinfo_btn" v-if="orderinfo.ddzt00!='996'">点击缴费</div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/scss/_order.scss";
</style>
<script>
  export default{
    props: {
      orderinfo: ''
    },
    data () {
      return {
        tel: '4009-998-998',
        userinfo:this.$store.state.userinfo
      };
    },
    methods: {
      onTelClick () {
        location.href = 'tel:' + this.tel;
      }
    }
  };
</script>
