<template>
  <div>
    <div class="buy_tel" @click="onTelClick">
      <span>客服热线 : </span>{{tel}}
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../assets/scss/_tel.scss";
</style>
<script>
  export default{
    data () {
      return {
        tel: '4009-998-998'
      };
    },
    methods: {
      onTelClick () {
        location.href = 'tel:' + this.tel;
      }
    }
  };
</script>
