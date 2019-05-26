<template>
  <div class="header-container">
    <div style="height: 80px;">
      <el-image :src="logo" class="logo"></el-image>
      <div style="display:inline">
      </div>
    </div>
    <!-- <el-divider class="divider"></el-divider> -->
    <div class="line"></div>
    <div class="menu-container">
      <el-menu :default-active="activeIndex" router
        mode="horizontal" @select="handleSelect">
        <el-menu-item index="dispose">&nbsp;&nbsp;首页&nbsp;&nbsp;</el-menu-item>
        <el-menu-item index="dash/open_device">开发仪器</el-menu-item>
        <el-menu-item index="policies">政策制度</el-menu-item>
        <el-menu-item index="laboratory">实验室建设</el-menu-item>
        <el-menu-item index="message">信息发布</el-menu-item>
        <el-menu-item index="download">下载中心</el-menu-item>
        <el-menu-item index="security">安全环保</el-menu-item>
        <el-menu-item index="help">帮助文档</el-menu-item>
        <el-menu-item index="system">后台系统</el-menu-item>
      </el-menu>
    </div>
    <div class="line"></div>
    <router-view name="line"/>
  </div>
</template>

<script>
import logo from '@/assets/timg.jpg'
import setting from '@/setting'

export default {
  name: 'Dashboard_Header',
  data () {
    return {
      logo,
      webName: setting.webName,
      activeIndex: 'dispose',
      isCollapse: false,
      num: 1000
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container{
  width: 100%;
  .logo{
    width: 150px
  }
  .webname{
    line-height: 50px;
    margin: auto;
     font-size: 30px
  }
  .divider{
    margin: 0px;
  }
  .menu-container{
    width: 80%;
    margin: auto;
    // 复写element的属性
    .el-menu {
      .el-menu-item {
        height: 45px;
        line-height: 45px;
        margin: auto 20px;
      }
    }
  }
}

</style>
