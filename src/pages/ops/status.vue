<template>
<div>
<el-row>

<el-col :span="5" v-for="status in statusList" :key="status.index">
    <el-card class="card">
        server{{status.server}} status
    </el-card>
</el-col>
    
</el-row>
</div>
</template>

<style scoped>
    .card {
        height: 400px;
        margin: 2%
    }
</style>

<script>
export default {
  data() {
      return {
          statusList: [
              {index: 1, server: 1},
              {index: 2, server: 2},
              {index: 3, server: 3},
              {index: 4, server: 4},
              {index: 5, server: 5},
              {index: 6, server: 6},
          ]
      }
  }
}
</script>
