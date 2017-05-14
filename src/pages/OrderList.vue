<template>
  <div class="view_order">
    <ul class="order_list">
      <li v-for="order in orderlist" class="clearfix" @click="onItemClick(order)">
        <div class="order_pic">
          <img :src="getLogo(order)">
        </div>
        <div class="order_info">
          <p class="order_name" style="color: #4c4c4c">{{order.ddms00}} <span :class="doState(order.ddzt00,'css')"
                                                                              v-text="doState(order.ddzt00,'text')"></span>
          </p>
          <div class="order_other_info right">
            <p class="order_company">交易公司:{{order.dwmc00}}</p>
            <p class="order_time">交易时间:{{order.zfsj00}}</p>
            <p class="order_price">实付款: <span>¥ {{order.ddje00}}</span></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_orderlist.scss";
</style>
<script>
  import icon_vip from '../assets/img/icon_vip_logo.png';
  import icon_vip1 from '../assets/img/icon_vip1_logo.png';
  import icon_vip2 from '../assets/img/icon_vip2_logo.png';
  import icon_vip3 from '../assets/img/icon_vip3_logo.png';
  export default {
    name: 'orderlist',
    data () {
      return {
        orderlist: ''
      };
    },
    created () {
      this.loadData();
    },
    methods: {
      loadData () {
        let that = this;
        this.$http.post(that.URL.ORDER_GET_LIST, {
            userid: '3503019999999662'
          })
          .then(function (res) {
            that.orderlist = JSON.parse(res.data.data);
          })
          .catch(function (res) {
            alert(res.data.message);
          })
      },
      onItemClick (order) {
        this.$store.commit('order', order);
        this.doState(order.ddzt00,'path');
      },
      /**
       * 判断订单等级
       * @param order
       * @returns {*}
       */
      getLogo (order) {
        let url;
        switch (order.viptype) {
          case '10':
            url = icon_vip;
            break;
          case '11':
            url = icon_vip1;
            break;
          case '12':
            url = icon_vip2;
            break;
          case '13':
            url = icon_vip3;
            break;
          default:
            url = icon_vip3;
            break;
        }
        return url;
      },
      /**
       * 处理状态码
       * @param state 状态码
       * @param type 处理类型 path,css,text
       */
      doState (state, type) {
        let path;
        let css;
        let text;
        switch (state) {
          case '001':
          case '002':
          case '003':
          case '004':
          case '005':
            path= 'OrderDetailDone';
            css='state_blue';
            text='支付成功'
            break;
          case '000':
            path= 'OrderDetailDoing'
            css='state_orange';
            text='未支付'
            break;
          case '010':
            path= 'OrderDetailDoing'
            css='state_gray';
            text='支付失败'
            break;
          case '999':
            path= 'OrderDetailDoing'
            css='state_blue';
            text='财务已退款'
            break;
          case '006':
            path= 'OrderDetailDoing'
            css='state_orange';
            text='申请退款'
            break;
          case '996':
            path= 'OrderDetailDoing'
            css='state_gray';
            text='失效'
                break;
          default:
            path= 'OrderDetailDoing'
            css='state_gray';
            text='失效'
            break;
        }
        if(type==='path'){
          this.$router.push({path: path});
        }else if(type==='css'){
          return css;
        }else{
          return text;
        }
      }
    },
    components: {}
  };
</script>
