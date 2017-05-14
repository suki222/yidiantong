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
        <span>密 码</span>
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
    </div>
    <div class="bind_btn" @click="login">
      <p>登录</p>
    </div>
    <router-link to="/Bind">
      <p class="login_bind">未绑定?<span>立即绑定</span></p>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_bind.scss";
</style>
<script>
  export default {
    name: 'login',
    data () {
      return {
        username: '3505010000100121',
        pwd: 'qz_100121'
      };
    },
    methods: {
      login () {
        let that = this;
        this.$http.post(this.URL.USER_LOGIN, {
            username: that.username,
            password: that.pwd
          })
          .then(function (res) {
            that.$store.commit('setUserid', that.username);
            console.log("--------登录成功--------");
            console.log("--------userid---------" + that.$store.state.userid);
            that.$store.commit('setUserInfo', JSON.parse(res.data.data));
            console.log(that.$store.state.userinfo);
            if (that.$store.state.redirectedFrom) {
              that.$router.push(`/${that.$store.state.redirectedFrom.split('/Re')[1]}`)
            } else {
              that.$router.push('/Mine');
            }
          })
          .catch(function (res) {
            alert(res.data.message);
          })
      }
    },
    components: {}
  };
</script>
