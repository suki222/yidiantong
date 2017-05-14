<template>
  <div>
    <div class="text-block">
      <div class="content">
        <p class="title" v-text="item.title">
        </p>
        <i class="icon-close" @click="close"></i>
        <div class="intro" >
          <p v-for="i in item.content">
            {{i.label}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/scss/_dialog.scss";
</style>
<script>
  export default{
    name: 'mdialog',
    props: ['item'],
    data () {
      return {
      };
    },
    methods: {
      close () {
        this.$parent.showDialog = false;
      }
    }
  };
</script>
