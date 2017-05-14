<template>
  <div class="home">
    <mSelect :datalist="items"></mSelect>
    <group>
      <cell
        title="测试01"
        :border-intent="false"
        is-link
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001"></cell>

      <template v-if="showContent001">
        <cell-form-preview :list="list"></cell-form-preview>
      </template>

      <cell
        title="测试03"
        is-link
        :border-intent="false"
        :arrow-direction="showContent003 ? 'up' : 'down'"
        @click.native="showContent003 = !showContent003"></cell>

      <template v-if="showContent003">
        <cell-box :border-intent="false" class="sub-item">I'm content 003</cell-box>
      </template>

    </group>
  </div>
</template>
<style scoped>
  .sub-item {
    color: #888;
  }
</style>
<script>
  import { Cell, CellBox, Group, CellFormPreview} from 'vux';
  import mSelect from './components/mSelect.vue';
  export default {
    name: 'information',
    data () {
      return {
        showContent001: false,
        showContent003: false,
        showContent004: false,
        list: [{
          label: 'Apple'
        }, {
          label: 'Banana'
        }, {
          label: 'Fish'
        }],
        items:[
          {value:'1'},
          {value:'2'},
          {value:'3'}
        ]
      };
    },
    methods: {},
    components: {
      Group,
      Cell,
      CellBox,
      CellFormPreview,
      mSelect
    }
  };
</script>
