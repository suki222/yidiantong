<template>
  <div class="view_receipt">
      <img class="receipt_banner" src="../assets/img/bind_banner.jpg">
      <div class="receipt_cell">
        <p class="right">开具电子发票 <span class="receipt_cell_left">推荐</span></p>
      </div>
      <div class="receipt_cell">
        <p class="right">开具纸质发票</p>
      </div>
    <Tel></Tel>
  </div>
</template>
<style lang="scss">

</style>
<style lang="scss" scoped>
  @import "../assets/scss/_receiptmenu.scss";
</style>
<script>
  import Tel from './components/Tel.vue'
  export default {
    name: 'receiptmenu',
    data () {
      return {
        show: false
      };
    },
    methods: {
      commit () {

      }
    },
    components: {
      Tel
    }
  };
</script>
