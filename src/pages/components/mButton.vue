<template>
  <div>
    <button class="mButton" :class="classes" :disabled="disabled" :type="actionType">
      <slot>{{text}}</slot>
    </button>
  </div>
</template>
<style lang="scss">
  @import "../../assets/scss/_tel.scss";
</style>
<script>
  export default{
    props: {
      type: {
        default: 'default'
      },
      disabled: Boolean,
      text: String,
      actionType: String
    },
    data () {
      return {
        tel: '4009-998-998'
      };
    },
    computed: {
      classes () {
        return [
          {
            'weui-btn_disabled': this.disabled,
            'weui-btn_mini': this.mini
          },
          `mButton-btn_${this.type}`,
        ]
      }
    },
    methods: {
      onTelClick () {
        location.href = 'tel:' + this.tel;
      }
    }
  };
</script>
