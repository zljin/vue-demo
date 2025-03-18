<script setup>

//子传父属性
const emits = defineEmits(["getWeb","userAdd"])

emits("getWeb",{name:"zljin",url:"https://zljin.github.io"})

const add = ()=>{
    emits("userAdd",10)
}

</script>

<template>
  <h3>Header2</h3>
  <button @click="add">添加用户</button>
</template>

<style scoped>

</style>
