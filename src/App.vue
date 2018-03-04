<template>
  <div id="app">

    <el-row class="head">
      <el-col :span="24">
        <nav-bar></nav-bar>
      </el-col>
    </el-row>

    <el-main class="main">
      <router-view></router-view>
    </el-main>

  </div>
</template>

<style scoped>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.head {
  background-color: #545c64
}
.main {
  padding: 2% 0%
}
</style>

<script>
import navBar from './components/navBar.vue'

export default {
  name: 'app',
  components: {
   navBar 
  },
  methods: {

  }
}
</script>
