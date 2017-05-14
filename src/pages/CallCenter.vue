<template>
  <div class="view_callcenter">
    <input type="text" class="callcenter_search" placeholder="请输入你要查询的问题或关键字">
    <div class="call_news clearfix">
        <div class="call_news_info" @click="onTelClick">
          <p class="call_news_tel">电话咨询</p>
          <p>服务时间:8:30-17:30</p>
        </div>
      <div class="call_news_info" @click="onQQClick">
          <p class="call_news_qq">在线咨询</p>
          <p>服务时间:8:30-17:30</p>
      </div>
    </div>
    <div class="call_title">
      <img src="../assets/img/icon_ask.png">
    </div>
    <ul class="callcenter_ask_list">
      <group class="group_ask" v-for="asks in items" :key="asks.title">
        <cell
          :title="asks.title"
          :border-intent="false"
          is-link
          :arrow-direction="asks.arrowType ? 'up' : 'down'"
          @click.native="asks.arrowType = !asks.arrowType"></cell>
        <template v-if="asks.arrowType">
          <cell-box class="sub-item" is-link v-for="ask in asks.askList" @click.native="showAnswer(ask)" :key="ask.title">{{ask.title}}</cell-box>
        </template>
      </group>
    </ul>
    <Tel></Tel>
    <mDialog :item="showAsk" v-show="showDialog"></mDialog>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_callcenter.scss";
</style>
<script type="text/ecmascript-6">
  import MenuTab from './components/MenuTab.vue';
  import Tel from './components/Tel.vue';
  import mDialog from './components/mDialog.vue';
  import { FAQList} from '../assets/config.js'
  import { Cell, CellBox, Group, CellFormPreview} from 'vux';
  export default {
    name: 'callcenter',
    data () {
      return {
        menulist: [
          {label: '电话咨询', imgUrl: require('../assets/img/logo.png')},
          {label: '在线投诉', imgUrl: require('../assets/img/logo.png'), href: 'FeedBack'}
        ],
        items: FAQList,
        showDialog: false,
        showAsk: '' // 弹窗显示的内容
      };
    },
    methods: {
      showAnswer (ask) {
        this.showAsk = ask;
        this.showDialog = true
      },
      onTelClick () {
        location.href = 'tel:4009-998-998';
      },
      onQQClick () {
        location.href = 'http://wpa.qq.com/msgrd?V=1&amp;Uin=742832669&amp;Site=在线QQ&amp;Menu=yes';
      }
    },
    components: {
      MenuTab,
      Tel,
      mDialog,
      Group,
      Cell,
      CellBox,
      CellFormPreview
    }
  };
</script>
