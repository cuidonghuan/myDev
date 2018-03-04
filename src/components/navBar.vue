<template>
  <div>
    <el-menu
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router>
    <el-menu-item index="home">Home</el-menu-item>
    <el-menu-item index="ops">运维中心</el-menu-item>
    <el-menu-item index="api">接口中心</el-menu-item>
    <el-menu-item index="git">GitLab</el-menu-item>
    <el-menu-item index="wiki">Wiki</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'navBar',
    data() {
      return {

      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>