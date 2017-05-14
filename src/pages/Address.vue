<template>
  <div class="view_address">
    <group class="address_info" label-width="5em" label-margin-right="1em">
      <x-input title="收货人:" placeholder="必填" v-model="addressInfo.name" is-type="china-name" ref="name"
               required></x-input>
      <x-input title="联系电话:" type="tel" placeholder="必填" v-model="addressInfo.mobile" is-type="china-mobile"
               ref="mobile" required></x-input>
      <x-address title="所在地区:" v-model="addressInfo.addressValue" :list="addressData" value-text-align="left"
                 placeholder="请选择地址"></x-address>
      <x-textarea placeholder="请填写详细地址" :show-counter="false" :rows="3" v-model="addressInfo.addressDetail">
      </x-textarea>
    </group>
    <div class="address_btn" @click="commit">
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
  @import "../assets/scss/_Address.scss";
</style>
<script>
  import { Toast, Group, XInput, ChinaAddressData, XAddress, XTextarea, XButton, Value2nameFilter as value2name } from 'vux';
  export default {
    name: 'address',
    data () {
      return {
        addressData: ChinaAddressData,
        addressInfo: {
          addressValue: [],
          name: '',
          mobile: '',
          addressDetail: '',
          addressName: []
        },
        show: false
      };
    },
    created () {
      if(this.$store.state.address.name){
        this.addressInfo=this.$store.state.address;
      }
    },
    methods: {
      commit () {
        const that = this;
        //  判断是否填写
        if (this.$refs.name.valid && this.$refs.mobile.valid && this.addressInfo.addressValue.length > 0 && this.addressInfo.addressDetail !== '') {
          this.addressInfo.addressName = value2name(this.addressInfo.addressValue, ChinaAddressData); // 城市名称转化
          this.$store.commit('address', this.addressInfo);
          this.$router.push({path: 'GiftList'});
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
