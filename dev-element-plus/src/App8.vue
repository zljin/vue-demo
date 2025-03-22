<!--
course08: 日期选择
-->
<script setup>
import { ref } from 'vue'

const date = ref('')
const dateChange = (val) => {
  console.log("dateChange",val)
}
</script>

<template>

<h3>日期</h3>
<el-date-picker
  v-model="date"
  type="datetime"
  placeholder="选择日期"
  value-format="YYYY-MM-DD HH:mm:ss"
  @change="dateChange"
>
</el-date-picker>

  
</template>

<style scoped></style>
