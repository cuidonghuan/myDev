<template>
<div>
<el-container>

  <el-menu class="aside" :collapse="true" router default-active="/ops/status">

    <el-menu-item index="/ops/status">
      <i class="el-icon-info"></i>
      <span slot="title">监控</span>
    </el-menu-item>

    <el-menu-item index="/ops/server">
      <i class="el-icon-info"></i>
      <span slot="title">服务器</span>
    </el-menu-item>

    <el-menu-item index="/ops/service">
      <i class="el-icon-info"></i>
      <span slot="title">服务</span>
    </el-menu-item>

    <el-menu-item index="/ops/playbook">
      <i class="el-icon-info"></i>
      <span slot="title">脚本 Playbook</span>
    </el-menu-item>

  </el-menu>


  <el-main class="main">
    <router-view></router-view>
  </el-main>

</el-container>   
</div>
</template>

<style scoped>
  .aside {
    border-right: 0px
  }
  .main {
    width: 80%
  }
</style>


<script>
export default {
  name: 'ops'
}
</script>
