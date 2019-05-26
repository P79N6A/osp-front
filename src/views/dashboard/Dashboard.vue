<template>
  <div class="dashboard">
    <Header></Header>
    <div class="dash">
      <router-view></router-view>
    </div>
  </div>
  <!-- <section class="dashboard-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section> -->
</template>

<script>
import Header from './module/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
  .dashboard-main {
    z-index: 88;
    /*84 = navbar + tags-view = 50 +34 */
    min-height: calc(100vh - 84px);
    width: 100%;
    position: relative;
    overflow: hidden;
  }
</style>
