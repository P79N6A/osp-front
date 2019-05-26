<template>
  <div class="errPage-container">
    <el-button @click="back" icon="arrow-left" class="pan-back-btn">返回</el-button>

    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <h2>你没有权限去该页面</h2>
        <h6>如有不满请邮件联系：admin@admin.com</h6>
        <ul class="list-unstyled">
          <li> 或者你可以去: </li>
          <li class="link-type">
            <router-link to="/home">回首页</router-link>
          </li>
          <li class="link-type"><a href="https://www.baidu.com">随便看看</a></li>
          <li><a @click.prevent="dialogVisible=true" href="#">点我看看吧</a></li>
        </ul>
      </el-col>

      <el-col :span="12">
        <div class="block">
          <img src="../../assets/401_images/401.gif"></img>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="随便看看" :visible.sync="dialogVisible">
      <el-image :src="dialogSrc" />
    </el-dialog>

  </div>
</template>

<script>
import errGif from '@/assets/401_images/401.gif'
import ewizardClap from '@/assets/401_images/justsoso.gif'

export default {
  name: 'page401',
  data() {
    return {
      imgSrc: errGif + '?' + +new Date(),
      dialogSrc: ewizardClap + '?' + +new Date(),
      dialogVisible: false
    }
  },
  methods: {
    back() {
      if(this.$route.query.noGoBack) {
        this.$router.push({ path: '/about' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.errPage-container {
  width: 800px;
  margin: 100px auto;
  .pan.back-btn {
    background: #008489;
    color: #fff
  }
  .pan-gif {
    margin: 0 auto;
    display: block;
  }
  .pam-img {
    display: block;
    margin: 0 auto;
  }
  .text-jumbo {
    font-size: 60px;
    font-weight: 700;
    color: #484848;
  }
  .list-unstyled {
    font-size: 14px;
    li {
      padding-bottom: 5px;
    }
    a {
      color: #008489;
      text-decoration: none;
      &:hover {
        text-decoration: underline
      }
    }
  }
  
}

</style>
