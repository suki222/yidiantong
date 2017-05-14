<template>
  <div class="view_openandbind">
    <img src="../assets/img/bind_banner.jpg">
    <div class="ob_open">
      <router-link to="/OpenGuide">
      <p class="right">
        账号开通 <span>服务开通指导</span>
      </p>
      </router-link>
    </div>
    <div class="ob_bind">
      <router-link to="/Bind">
      <p class="right">
        微信绑定/解绑 <span>{{msg}}</span>
      </p>
      </router-link>
    </div>
    <Tel></Tel>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_openandbind.scss";
</style>
<script>
  import MenuTab from './components/MenuTab.vue';
  import Tel from './components/Tel.vue';
  export default {
    name: 'openandbind',
    data () {
      return {
        msg: '您已经绑定账号'
      };
    },
    methods: {},
    components: {
      MenuTab,
      Tel
    }
  };
</script>
