<template>
  <div class="hello">
    <div class="menutab_list">
      <li v-for="menu in menulist" :class="type">
        <router-link :to="{path:menu.href}">
          <img :src="menu.imgUrl">
          <p v-text="menu.label"></p>
        </router-link>
      </li>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/scss/_menutab.scss";
</style>
<script>
  export default {
    name: 'menutab',
    props: ['menulist', 'type'],
    data () {
      return {};
    },
    methods: {},
    components: {}
  };
</script>
