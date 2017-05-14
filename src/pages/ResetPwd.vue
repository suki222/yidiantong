<template>
  <div class="view_reset">
    <div class="reset_title">
      <p>修改密码</p>
    </div>
    <div class="reset_input">
      <div class="reset_name">
        <span>用户名</span>
        <input type="text" placeholder="请输入e点通账号" v-model="username">
      </div>
      <div>
        <span>旧密码</span>
        <input type="password" placeholder="请输入密码" v-model="oldPwd">
      </div>
      <div>
        <span>新密码</span>
        <input type="password" placeholder="请输入密码" v-model="newPwd">
      </div>
      <div>
        <span>确认密码</span>
        <input type="password" placeholder="请输入密码" v-model="newPwd_">
      </div>
    </div>
    <div class="reset_btn" @click="resetPwd">
      <p>确认修改</p>
    </div>
    <Tel></Tel>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_resetpwd.scss";
</style>
<script>
  import Tel from './components/Tel.vue'
  export default {
    name: 'resetpwd',
    data () {
      return {
        username:'',
        oldPwd:'',
        newPwd:'',
        newPwd_:''
      };
    },
    methods: {
      resetPwd () {
        let that=this;
        if(!this.username){
          alert('用户名不能为空')
        }else if(!this.oldPwd){
          alert('旧密码不能为空')
        }else if(this.newPwd!=this.newPwd_){
          alert('输入的密码不一致')
        }else{
          this.$http.post(that.URL.USER_RESET_PWD,{
            userid:that.username,
            passwd:that.newPwd
          }).then(function(res){
            alert('密码修改成功')
            that.$router.push('/Login');
          }).catch(function(res){
            alert('密码修改失败')
          })
        }

      }
    },
    components: {
      Tel
    }
  };
</script>
