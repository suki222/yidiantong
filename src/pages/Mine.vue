<template>
  <div class="view_mine">
    <div class="mine_company">
      <router-link to="/CallCenter">
        <img class="mine_company_call" src="../assets/img/icon_call_center_logo_.png">
      </router-link>
      <p class="name" v-text="userinfo.usernm"></p>
      <img class="mine_company_vip" :src="vipType">
      <p class="endtime">到期时间: <span v-text="getDate()"></span></p>
      <div class="mine_info">
        <div>
          <p>所属中心</p>
          <p>{{userinfo.sszx00}}</p>
        </div>
        <div>
          <p>医保单位编号</p>
          <p>{{userinfo.ybdwid}}</p>
        </div>
        <div>
          <p>经办人员名称</p>
          <p>{{userinfo.operator_name}}</p>
        </div>
      </div>
    </div>
    <MenuTab :menulist="menulist" :type="'type_four'" style="background: white"></MenuTab>
    <div class="mine_call_center">
      <router-link to="CallCenter">
        <p>客服中心<span>点击前往</span></p>
      </router-link>
    </div>
    <div class="icon_mine_ask">
      <img src="../assets/img/icon_mine_ask.png">
    </div>
    <group class="group_ask" v-for="ask in asklist" :key="ask.title">
      <cell
        :title="ask.title"
        :border-intent="false"
        is-link
        :arrow-direction="ask.arrowType ? 'up' : 'down'"
        @click.native="ask.arrowType = !ask.arrowType"></cell>
      <template v-if="ask.arrowType">
        <cell-form-preview :list="ask.content"></cell-form-preview>
      </template>
    </group>
    <Tel></Tel>
  </div>
</template>
<style>

</style>
<style lang="scss" scoped>
  @import "../assets/scss/_mine.scss";
</style>
<script>
  import MenuTab from './components/MenuTab.vue';
  import Tel from './components/Tel.vue';
  import {askList} from '../assets/config.js'
  import { Cell, CellBox, Group, CellFormPreview} from 'vux';
  import vip4 from '../assets/img/icon_mine_vip4.png';
  import vip3 from '../assets/img/icon_mine_vip3.png';
  import vip2 from '../assets/img/icon_mine_vip2.png';
  import vip1 from '../assets/img/icon_mine_vip1.png';
  import vip from '../assets/img/icon_mine_vip.png';
  export default {
    name: 'mine',
    data () {
      return {
        menulist: [
          {label: '账号开通/绑定', imgUrl: require('../assets/img/mine_label_1.png'), href: 'OpenAndBind'},
          {label: '我的订单', imgUrl: require('../assets/img/mine_label_2.png'), href: 'OrderList'},
          {label: '修改密码', imgUrl: require('../assets/img/mine_label_3.png'), href: 'ResetPwd'},
          {label: '意见反馈', imgUrl: require('../assets/img/mine_label_4.png'), href: 'FeedBack'}
        ],
        asklist: askList,
        userinfo: this.$store.state.userinfo,
        vipType:vip
      };
    },
    mounted () {
      this.getVipUrl();
    },
    methods: {
      getDate () {
        return `${this.userinfo.akb020.substring(0, 4)}年${this.userinfo.akb020.substring(4, 6)}月${this.userinfo.akb020.substring(6, 8)}日`
      },
      getVipUrl () {
        let that=this;
        let type;
        this.$http.post(this.URL.USER_GET_VIP,{
          userid:that.$store.state.userid
        }).then(function(res){
          switch (res.data.data) {
            case '14':
              that.vipType=vip4;
            case '13':
              that.vipType=vip3;
            case '12':
              that.vipType=vip2;
            case '11':
              that.vipType=vip1;
            case '10':
              that.vipType=vip;
            default:
              that.vipType=vip;
              break;
          }
        }).catch(function(res){
          console.log(res.data)
        })
      }
    },
    components: {
      MenuTab,
      Tel,
      Group,
      Cell,
      CellBox,
      CellFormPreview
    }
  };
</script>
