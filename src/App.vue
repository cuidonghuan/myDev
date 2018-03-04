<template>
  <div id="app">

    <el-row class="head">
      <el-col :span="24">
        <nav-bar></nav-bar>
      </el-col>
    </el-row>

    <el-main>
      <router-view></router-view>
    </el-main>

  </div>
</template>

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

<style scoped>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.head {
  background-color: #545c64
}
</style>
