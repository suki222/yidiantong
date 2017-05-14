<template>
  <div class="view_openguide">
    <ul class="open_guide_list">
      <li v-for="item in items" @click="link(item)">
        <!--<img :src="item.headpic" class="headpic">-->
        <p class="right">{{item.title}}</p>
      </li>
    </ul>
    <mDialog :item="clickItem" v-show="showDialog"></mDialog>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_openguide.scss";
</style>
<script>
  import {openGuide} from '../assets/config.js'
  import mDialog from './components/mDialog.vue';
  export default {
    name: 'openguide',
    data () {
      return {
        items: openGuide,
        showDialog: false,
        clickItem: '' // 弹窗显示的内容
      };
    },
    methods: {
      link (item) {
        this.clickItem = item;
        this.showDialog = true;
      }
    },
    components: {
      mDialog
    }
  };
</script>
