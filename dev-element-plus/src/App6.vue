<!--
course06: 单元框和复选框
-->
<script setup>
import { ref } from 'vue'

//单选框
const radio=ref('3')
const radio2=ref('b')
const radio3=ref('c')

const radioChange=(val)=>{
  console.log("radioChange",val)
}

const radioGroupChange=(val)=>{
  console.log("radioGroupChange",val)
}

//复选框
const check=ref(['1','2'])
const check2=ref([])

const checkboxGroupChange=(val)=>{
  console.log("checkboxGroupChange",val)
}

</script>

<template>

<h3>单选框</h3>

<el-radio v-model="radio" value="1" @change="radioChange">前端</el-radio>
<el-radio v-model="radio" value="2" @change="radioChange">后端</el-radio>
<el-radio v-model="radio" value="3" @change="radioChange">运维</el-radio>

<h3>单选框组</h3>
<el-radio-group v-model="radio2" @change="radioGroupChange">
  <el-radio value="a">前端</el-radio>
  <el-radio value="b">后端</el-radio>
  <el-radio value="c">运维</el-radio>
</el-radio-group>

<h3>复选框组</h3>
<el-checkbox-group v-model="check" @change="checkboxGroupChange">
  <el-checkbox value="1">前端</el-checkbox>
  <el-checkbox value="2">后端</el-checkbox>
  <el-checkbox value="3">运维</el-checkbox>
</el-checkbox-group>

  
</template>

<style scoped></style>
