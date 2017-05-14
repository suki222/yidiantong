<template>
  <div class="view_bind">
    <div class="bind_logo">
      <img src="../assets/img/logo.png">
    </div>
    <div class="bind_input">
      <div class="bind_name">
        <span>用户名</span>
        <input type="text" placeholder="请输入e点通账号" v-model="username">
      </div>
      <div class="bind_pwd">
        <span>密码</span>
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
    </div>
    <div class="bind_btn" @click="Bind">
      <p>立即绑定</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_bind.scss";
</style>
<script>
  export default {
    name: 'bind',
    data () {
      return {
        username:'',
        openid:'',
        pwd:''
      };
    },
    created () {
      let url=location.href;
      this.openid=url.split('openid=')[1].split('#')[0];
    },
    methods: {
      Bind () {
        let that=this;
        this.$http.post(this.URL.BIND_ADD_BIND,{
          userid:that.username,
          openid:that.openid
        }).then(function(res){
          that.$router.push('/ReMine');
        }).catch(function(res){
          alert(res.data.message);
        })
      }
    },
    components: {}
  };
</script>
