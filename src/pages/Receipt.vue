<template>
  <div class="view_receipt">
    <p class="receipt_detail">
      <router-link to="/ReceiptDetail">
        开票说明
      </router-link>
    </p>
    <group class="receipt_input" label-width="5em" label-margin-right="1em">
      <x-input title="开票金额:" placeholder="必填" v-model="receipt.cost" type="number" ref="cost" required></x-input>
      <x-input title="开票抬头:" placeholder="必填" v-model="receipt.head" ref="head" required></x-input>
      <x-input title="开票内容:" placeholder="五险申报技术服务费" v-model="receipt.content" ref="content" required :show-clear="false" :disabled="true"></x-input>
      <x-input title="收件人:" placeholder="必填" v-model="receipt.name" is-type="china-name" ref="name"
               required></x-input>
      <x-input title="收件电话:" type="tel" placeholder="必填" v-model="receipt.mobile" is-type="china-mobile"
               ref="mobile" required></x-input>
      <x-input title="邮箱地址:" placeholder="必填" v-model="receipt.email" type="email" is-type="email" required v-show="emailShow"></x-input>
      <x-address title="所在地区:" v-model="receipt.addressValue" :list="addressData" value-text-align="left"
                 placeholder="请选择地址"></x-address>
      <x-textarea placeholder="请填写详细地址" :show-counter="false" :rows="3" v-model="receipt.addressDetail">
      </x-textarea>
    </group>
    <p class="receipt_msg">温馨提示:{{msg}}</p>
    <div class="receipt_btn" @click="commit">
      提交
    </div>
    <toast v-model="show" type="warn" :time="800" is-show-mask width="4em">信息填写有误</toast>
  </div>
</template>
<style lang="scss">
  .weui-cells.vux-no-group-title {
    margin-top: 0px;
    font-size: .45rem;
  }

  .weui-toast.weui-toast_forbidden {
    min-height: 4em;
  }
</style>
<style lang="scss" scoped>
  @import "../assets/scss/_receipt.scss";
</style>
<script>
  import { Toast, Group, XInput, ChinaAddressData, XAddress, XTextarea, XButton, Value2nameFilter as value2name } from 'vux';
  export default {
    name: 'address',
    data () {
      return {
        addressData: ChinaAddressData,
        receipt: {
          cost: this.$store.state.server.cost,
          head: '',
          content: '五险申报技术服务费',
          addressValue: [],
          name: '',
          mobile: '',
          email:'',
          addressDetail: '',
          addressName: []
        },
        msg: `您当前选择的是${this.$store.state.receipt}，请认真确认！`,
        show: false,
        emailShow:this.$store.state.receipt=='电子发票'
      };
    },
    created () {
      if(this.$store.state.addressReceipt.name){
        this.receipt=this.$store.state.addressReceipt;
      }
    },
    methods: {
      commit () {
        const that = this;
        //  判断是否填写
        if (this.$refs.head.valid && this.$refs.content.valid && this.$refs.cost.valid && this.$refs.name.valid && this.$refs.mobile.valid && this.receipt.addressValue.length > 0 && this.receipt.addressDetail !== '') {
          this.receipt.addressName = value2name(this.receipt.addressValue, ChinaAddressData); // 城市名字转化
          this.$store.commit('addressReceipt', this.receipt);
          this.$router.push({path: 'BuyServer'});
        } else {
          that.show = true;
        }
      }
    },
    components: {
      Group,
      XInput,
      XAddress,
      XTextarea,
      XButton,
      Toast
    }
  };
</script>
