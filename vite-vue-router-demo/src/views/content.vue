<script setup>
</script>

<template>
  内容: vue编程


  <!--http://localhost:5173/content?id=123&title=vue 获取query参数 $route为全局变量-->
  id: {{$route.query.id}} <br>
  title: {{$route.query.title}}
</template>

<style scoped>

</style>
