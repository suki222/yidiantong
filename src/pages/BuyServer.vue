<template>
  <div class="view_buyserver">
    <div class="buy_notice">
      <p>本月已有 <span>{{humans}}</span> 人选择e点通服务</p>
    </div>
    <div class="buy_info" :class="bgCssType">
      <p class="buy_company">{{company.name}}</p>
      <div class="buy_info_">
        <div>
          <p>所属中心</p>
          <p>{{company.sszx00}}</p>
        </div>
        <div>
          <p>医保单位编号</p>
          <p>{{company.ybdwId}}</p>
        </div>
        <div>
          <p>经办人姓名</p>
          <p>{{company.uname}}</p>
        </div>
      </div>
      <div class="buy_info_gift">
        <p>会员等级  </p>
        <p class="receipt right_" v-html="server.value" @click="onSelectClick('vip')"></p>
      </div>
      <div class="buy_info_gift">
        <p>赠品组合  </p>
        <router-link to="GiftList">
          <p class="gift right_" v-html="gift"></p>
        </router-link>
      </div>
      <div class="buy_info_add_receipt">
        <p>发票种类  </p>
        <p class="receipt right_" @click="onSelectClick('receipt')">{{receiptClick}}</p>
      </div>
      <div class="buy_info_add_receipt">
        <p>发票信息  </p>
        <router-link to="Receipt">
          <p class="receipt right_" v-html="receipt"></p>
        </router-link>
      </div>
      <div class="buy_info_other clearfix">
        <p>服务价格: ¥{{server.cost}}</p>
        <p>活动优惠: -¥{{server.cost_}}</p>
        <p>配送方式: 快递(免邮)</p>
      </div>
      <p class="buy_info_pay">应付金额: <span>¥{{server.realcost}}</span></p>
      <swiper class="buy_info_swiper" :list="bannerlist" :aspect-ratio="456/590" :show-dots="false" v-model="server.bannerIndex"
              :threshold="9999"></swiper>
    </div>
    <Tel></Tel>
    <div class="buy_btn" @click="onPay">
      点击缴费
    </div>
    <div class="select_block" v-show="isSelect">
      <div class="content">
        <p class="box_title">{{boxTitle}}</p>
        <div class="box_item" :class="{'box_item_click':data.key==server.key||data.value==receiptClick}"
             v-for="data in datalist" v-text="data.value" @click="select(data)"></div>
        <div class="box_btn">
          <div class="cancel" @click="isSelect=false">取消</div>
          <div class="sure" @click="isSelect=false">确定</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_buyserver.scss";
</style>
<script type="text/ecmascript-6">
  import Tel from './components/Tel.vue';
  import { Swiper, SwiperItem } from 'vux';
  import { buyserverBanner,serverlist} from '../assets/config.js'
  import { URL } from './../assets/baseUrls.js'

  export default{
    name: 'buyserver',
    data () {
      return {
        humans: '',
        company: {
          name: this.$store.state.userinfo.usernm,
          ybdwId: this.$store.state.userinfo.ybdwid,//医保单位编号
          sszx00: this.$store.state.userinfo.sszx00,//所属中心
          uname: this.$store.state.userinfo.operator_name
        },
        meallist: serverlist,
        receiptType: [
          {value: '电子发票'},
          {value: '纸质发票'}
        ],
        bannerlist: buyserverBanner,
        server: '',
        gift: '点击选择赠品',//选择的赠品名称
        giftId:'',//选择的赠品id
        receipt: '点击填写发票',
        isSelect: false,
        datalist: '',
        receiptClick: '发票类型',
        boxTitle:'',//弹窗标题
        bgCssType:'bg_vip4'//头部背景
      };
    },
    created () {
      this.loadData();
      // 获取选择的套餐
      if (this.$store.state.server) {
        this.server = this.$store.state.server;
        this.bgCssType=`bg_${this.server.key}`
      } else {
        this.server = this.meallist[0];
      }
      // 获取选择的赠品
      let name = '';
      let ids = '';
      if (this.$store.state.gifts) {
        this.$store.state.gifts.map((item, index) => {
          name += index === 0 ? item.shortName : `+${item.shortName}`;
          ids += index === 0 ? item.id0000 : `+${item.id0000}`;
        })
        this.gift = name;
        this.giftId = ids;
      }
      // 获取填写的发票信息
      if (this.$store.state.addressReceipt) {
        this.receipt = this.$store.state.addressReceipt.head;
      }
      // 获取选择的发票类型
      if (this.$store.state.receipt) {
        this.receiptClick = this.$store.state.receipt;
      }
    },
    methods: {
      /**
       * 加载数据
       */
      loadData () {
        let that = this;
        this.$http.post(this.URL.USER_GET_USERNUM, {})
          .then(function (res) {
            that.humans = res.data.data;
          }).catch(function (res) {
          alert(res.data.message);
        })
      },
      /**
       * 弹窗选择,套餐类型,发票类型
       * @param data
       */
      select (data) {
        this.isSelect = false;
        if (data.key) {//套餐类型
          this.server = data;
          this.bgCssType=`bg_${data.key}`;
          this.$store.commit("server", data);
        } else {//发票类型
          this.receiptClick = data.value;
          this.$store.commit('setReceipt', data.value);
        }
      },
      /**
       * 弹窗点击事件
       * @param type
       */
      onSelectClick (type){
        this.isSelect = true;
        if (type == 'vip') {
          this.boxTitle='请选择会员等级';
          this.datalist = this.meallist
        } else {
          this.boxTitle='请选择发票种类';
          this.datalist = this.receiptType
        }
      },
      /**
       * 缴费事件
       */
      onPay () {
        let that = this;
        if(!that.$store.state.addressReceipt.name){//判断发票信息是否填写
          alert('请填写发票信息!')
        }else if(this.server.key!='vip'){//普通会员无赠品
          if(!this.giftId){//判断是否选择赠品
            alert('请选择赠品!')
          }else if(!that.$store.state.address.name){//判断是否填写赠品寄送方式
            alert('请填写赠品联系信息!')
          }else{
            this.$http.post(this.URL.ORDER_ADD_ORDER, {
                userid: that.$store.state.userid,//用户名称
                dwmc00: that.$store.state.userinfo.usernm,//单位名称
                ddje00: that.server.cost,//支付金额
                httzdz: that.giftId,//赠品id
                zp0000: that.gift,//赠品名称
                spmc00: that.server.value,//商品名称
                fpmc00: that.$store.state.addressReceipt.content,//发票名称
                sjrdz0: that.$store.state.addressReceipt.addressName+that.$store.state.addressReceipt.addressDetail,//收件人地址
                sjrxm0: that.$store.state.addressReceipt.name,//收件人姓名
                sjrdh0: that.$store.state.addressReceipt.mobile,//收件人电话
                zpdz00: that.$store.state.address.addressName+that.$store.state.address.addressDetail,//接收赠品地址
                zplxr0: that.$store.state.address.name,//接收赠品联系人
                zplxrdh: that.$store.state.address.mobile,//接收赠品联系人电话
                fplx00: that.$store.state.receipt==='电子发票'?'003':'001'//发票类型
              })
              .then(function (res) {
                let url=JSON.parse(res.data.data).redirectUrl;
                location.href=url;
              }).catch(function (res) {
              alert('缴费失败');
            })
          }
        }
      }
    },
    components: {
      Tel, Swiper, SwiperItem
    }
  };
</script>
