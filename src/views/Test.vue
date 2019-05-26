<template>
  <div>
     <el-button @click="apiTest" type="primary">特使</el-button>
     <div> {{ result }} </div>
    <!--<div>
      <p class="parent">
        <el-scrollbar class="page-compennet_scroll">
          <div>
            <p v-for="(item, index) in 200" :key="index">{{index}} 这里是一些文本。</p>
          </div>
        </el-scrollbar>
      </p>
         <div>
            <p v-for="(item, index) in 200" :key="index">{{index}} 这里是一些文本。</p>
          </div>
    </div> -->
  </div>
</template>

<script>
import loginApi from '@/api/login'

export default {
  data () {
    return {
      num: 10,
      result: {}
    }
  },
  methods: {
    apiTest () {
      const data = {
        user: 'xiang',
        password: 'guijun'
      }
      loginApi.request('getUserInfo', data).then(result => {
        console.log(result)
        this.result = result
      }).catch(error => {
        console.log(error)
        this.request = error
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.parent{
  height: 400px;
  border: solid 1px #e6e6e6;
  margin: 90px;

  .el-scrollbar__wrap{
    overflow-x: hidden;
  }
}

.el-scrollbar__wrap{
    overflow-x: hidden;
  }

</style>
