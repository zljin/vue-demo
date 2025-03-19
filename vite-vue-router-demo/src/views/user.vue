<script setup>
</script>

<template>
  个人主页 <br>

  <!--获取path的参数 http://localhost:5173/user/003/name/leonard-->
  id: {{ $route.params.id }} <br>
  name: {{$route.params.name}}
</template>

<style scoped>

</style>
