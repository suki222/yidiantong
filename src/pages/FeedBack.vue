<template>
  <div class="view_feedback">
    <div class="feedback_content">
      <p>意见反馈</p>
      <textarea rows="8" :placeholder="msg"></textarea>
    </div>
    <p class="feedback_explanation">上传凭证 <span>(最多3张图片,图片小于3M)</span></p>
    <ul class="feedback_piclist">
      <li v-for="pic in pics">
        <img :src="pic">
      </li>
      <div class="feedback_addpic" v-show="isShow">
        <label for="pic">
          <img src="../assets/img/add_pic.png">
        </label>
        <input id="pic" type="file" @change="getPic" style="display: none">
      </div>
    </ul>
    <div class="feedback_btn">
      <p>提交</p>
    </div>
    <p class="feedback_msg_content">温馨提示:如果您的问题没有得到及时解决,<br>请拨打我们的客服热线!</p>
    <Tel></Tel>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_FeedBack.scss";
</style>
<script type="text/ecmascript-6">
  import Tel from './components/Tel.vue';
  export default {
    name: 'feedback',
    data () {
      return {
        msg: '请留下您的意见与建议，您的每一条反馈都是我们前进的动力!',
        pics: [],
        isShow:true
      };
    },
    methods: {
      getPic (e) {
        const file = e.target.files[0];
        this.pics.push(URL.createObjectURL(file));
        if(this.pics.length>2){
          this.isShow=false;
        }
      }
    },
    components: {
      Tel
    }
  };
</script>
