<template>
  <div id="app">
    <loading v-model="isLoading" id="pageLoading"></loading>
    <router-view class="infoview"></router-view>
    <router-view name="menu" slot="bottom"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Loading } from 'vux'
  import { mapState } from 'vuex'
  export default {
    name: 'app',
    components: {
      Loading
    },
    computed: {
      ...mapState({
        isLoading: state => state.vux.isLoading
      })
    }
  }
</script>
<style lang="scss">
  @import "./assets/scss/_common.scss";

  body {
    background: rgb(238, 238, 238);
    min-width: 320px;
    max-width: 640px;
  }

  #app {
    height: inherit;
  }

  #pageLoading .weui-toast {
    width: 4rem;
    height: 4rem;
    min-height: 4rem;
  }
</style>
