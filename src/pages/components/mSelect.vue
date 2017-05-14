<template>
  <div>
    <div class="text-block">
      <div class="content">
        <div class="box_top">
          <div class="cancel" @click="cancel()">取消</div>
          <div class="title">选择区域</div>
          <div class="sure" @click="sure()">确定</div>
        </div>
        <div class="box_item" v-for="data in datalist" v-text="data.value" @click="select()"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  @import "../../assets/scss/_select.scss";
</style>
<script>
  export default{
    name: 'mdialog',
    props: ['datalist'],
    data () {
      return {
      };
    },
    methods: {
      close () {
      }
    }
  };
</script>
