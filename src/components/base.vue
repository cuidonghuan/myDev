<template>
<div class="img">
    <img src="../assets/wali.jpg" @click="go">
</div>
</template>

<style scoped>
.img {
    position  : absolute;
    top       : 50%;
    left      : 50%;
    transform : translate(-50%,-50%);
}
</style>

<script>
export default {
  methods: {
      go() {
          console.log(123);
          
          this.$router.push('home')
      }
  }
}
</script>
