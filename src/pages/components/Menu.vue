<template>
  <div class="hello">
    <tabbar>
      <tabbar-item selected link="/">
        <img slot="icon" src="../../assets/img/logo.png">
        <span class="menu-item" slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/">
        <img slot="icon" src="../../assets/img/logo.png">
        <span slot="label">服务台</span>
      </tabbar-item>
      <tabbar-item link="/Mine">
        <img slot="icon" src="../../assets/img/logo.png">
        <span slot="label">咨询</span>
      </tabbar-item>
      <tabbar-item link="/Mine">
        <img slot="icon" src="../../assets/img/logo.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<style lang="scss">
</style>
<script>
  import {Tabbar, TabbarItem} from 'vux';
  export default {
    name: 'menu',
    data () {
      return {};
    },
    mounted () {
    },
    methods: {},
    components: {
      Tabbar,
      TabbarItem
    }
  };
</script>
