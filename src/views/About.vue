<template>
  <div class="about2">
    <Header class="headerWrapper" />

    <div class="about main-cnt">
      <el-scrollbar>
        <h2>list:</h2>
        <div>
              <p v-for="(item, index) in 200" :key="index">{{index}} 这里是一些文本。</p>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
export default {
  components: {
    Header
  },
  data() {
    return {
      num: 30,
      activeIndex: 'dispose'
    }
  }
}
</script>
<style>
.headerWrapper{
    width: 100%;
    left: 0;
    top: 0;
    z-index: 1500;
    position: fixed;
}
.about2 {
  height: 100%;
}
.about{
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  margin-top: 60px;
}
.el-scrollbar__wrap{
    overflow-x: hidden;
  }

.el-scrollbar{
  height: 100%;
}
.el-scrollbar__wrap{
  overflow: scroll;
  overflow-x:hidden
}
</style>

