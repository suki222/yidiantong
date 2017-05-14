<template>
  <div class="view_gift">
    <div class="gift_select" v-show="gifts.length!=0">
      <p>{{selectd}}</p>
    </div>
    <div class="gift_address_never" v-show="!address.addressName" @click="setAddress">
      寄送地址: <span>点击填写您的寄送地址</span>
    </div>
    <div class="gift_address_has" v-show="address.addressName" @click="setAddress">
      <div class="right">
        <p>收件人:{{address.name}} <span>{{address.mobile}}</span></p>
        <div class="gift_address_detail">
          寄送地址: <span>{{address.addressName}}{{address.addressDetail}}</span>
        </div>
      </div>
    </div>
    <!--赠品列表-->
    <checker class="gift_giftlist" v-model="gifts" type="checkbox" default-item-class="demo1-item"
             selected-item-class="demo1-item-selected">
      <checker-item class="gift_item" :value="item" v-for="(item, index) in items" :key="index"
                    @on-item-click="onGiftClick">
        <img :src="item.imgPath">
        <p class="gift_item_name">{{item.shortName}}</p>
      </checker-item>
    </checker>
    <!--剩余金额-->
    <flexbox class="gift_commit">
      <!--<flexbox-item :span="1/2">-->
      <!--<div class="gift_commit_info">您的可选额度还剩:</div>-->
      <!--</flexbox-item>-->
      <!--<flexbox-item :span="1/4">-->
      <!--<div class="gift_commit_info gift_commit_amount">¥ {{amount}}</div>-->
      <!--</flexbox-item>-->
      <flexbox-item>
        <div @click="commit" class="gift_commit_info gift_commit_btn">提 交</div>
      </flexbox-item>
    </flexbox>
    <toast v-model="show" type="warn" is-show-mask width="8em">额度有限</toast>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/base/_px2rem.scss";
  @import "../assets/scss/_giftlist.scss";

  .demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15px;
    background: white;
  }

  .demo1-item-selected {
    background: white url(../assets/img/icon_select.png) no-repeat right bottom/px2rem(70) px2rem(70);
    border-color: #ff4a00;
  }

  .weui-toast.weui-toast_forbidden {
    min-height: 4em;
  }
</style>
<script type="text/ecmascript-6">
  import { Toast, Checker, CheckerItem, Flexbox, FlexboxItem} from 'vux';
  import {productList} from '../assets/config.js'
  export default {
    name: 'giftlist',
    data () {
      return {
        items: '',
        gifts: [], // 选中的礼物列表
        address: this.$store.state.address, //  寄送地址
        amount: this.$store.state.server.giftcost, //  初始额度
        giftsLength: 0, //  上次选中的礼物列表
        show: false //  吐司
      };
    },
    created () {
      this.loadData();
      if (this.$store.state.gifts) {
        this.gifts = this.$store.state.gifts;
      }
    },
    methods: {
      loadData () {
        let that = this;
        this.$http.post(this.URL.GIFT_LIST, {})
          .then(function (res) {
            that.items = JSON.parse(res.data.data);
          })
          .catch(function (res) {
            alert(res.data.message);
          })
      },
      onGiftClick (itemValue) {
        let that = this;
        setTimeout(() => {
            //  判断选中赠品的长度,若变长则表示添加,若变短则表示减少
            if (that.gifts.length > that.giftsLength) {
              that.amount = parseInt(that.amount) - parseInt(itemValue.externalPrice);// 添加赠品,可选额度降低
              if (that.amount < 0) { //  判断可选额度
                that.show = true;
                //  超额:去除超额项,额度恢复
                that.gifts.pop();
                that.amount = parseInt(that.amount) + parseInt(itemValue.externalPrice);
              }
            } else {
              that.amount = parseInt(that.amount) + parseInt(itemValue.externalPrice);// 减少赠品,可选额度恢复
            }
            that.giftsLength = that.gifts.length;
          },
          0
        );
      },
      // 提交
      commit () {
        this.$store.commit('setGift', this.gifts);
        if(this.$store.state.address.name){
          setTimeout(() => {
            this.$router.push({path: 'BuyServer'});
          }, 100)
        }else{
          alert('收货地址不能为空!')
        }

      },
      //添加地址
      setAddress () {
        this.$store.commit('setGift', this.gifts);
        setTimeout(() => {
          this.$router.push({path: 'Address'})
        }, 100)
      }
    },
    computed: {
      selectd () {
        let name = '';
        this.gifts.map((item, index) => {
          name += index === 0 ? item.shortName : `+${item.shortName}`;
        });
        return name;
      }
    },
    components: {
      Checker,
      CheckerItem,
      Flexbox,
      FlexboxItem,
      Toast
    }
  };
</script>
