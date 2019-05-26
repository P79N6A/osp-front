<template>
  <div class="header">
    <div style="width:100%">
      <el-menu :default-active="activeIndex" class="el-menu-demo" 
        mode="horizontal" @select="handleSelect">
        <el-menu-item index="dispose">处理中心</el-menu-item>
        <el-menu-item index="persons">个人中心</el-menu-item>
        <el-menu-item index="message" disabled>消息中心</el-menu-item>
      </el-menu>
    </div>
    <div class="line"></div>

<!--
    <div style="width: 220px; float: left; margin-left:20px; margin-top: 20px;" >
    <el-menu default-active="1-1" @open="handleOpen" class="el-menu-vertical-demo"
      background-color="#fff"
      style="border: solid 1px #e6e6e6"
      @close="handleClose" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    
    </div>

    <el-scrollbar wrap-class="list" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="false">
      <div class="mains" style="border: solid 1px #e6e6e6; margin: 10px;">
        <span>QQQQQQQQQQQQQQ</span>
         <div v-for="(value,index) in num" :key="index">
            {{value}}
          </div>
      </div>
    </el-scrollbar>
    -->
    
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 'dispose',
      isCollapse: false,
      num: 1000
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

</style>
