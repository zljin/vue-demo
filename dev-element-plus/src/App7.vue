<!--
course07: 下拉框
-->
<script setup>
import { ref,reactive } from 'vue'

const selected=ref('C')
const selected2=ref(['1' ,'3'])

const data = reactive({
  options:[
    {value:'A',label:'前端'},
    {value:'B',label:'后端'},
    {value:'C',label:'运维'},
    {value:'D',label:'测试'}
  ]
})

//回调
const selectChange = (val) => {
  console.log("selectChange",val)
}
</script>

<template>



<div style="width: 300px;">
  <h3>动态下拉框</h3>
  <el-select v-model="selected" placeholder="请选择" @change="selectChange">
    <el-option
      v-for="item in data.options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>


  <h3>多选静态下拉框</h3>
  <el-select v-model="selected2" multiple @change="selectChange" placeholder="请选择" >
    <el-option label="前端" value="1"></el-option>
    <el-option label="后端" value="2"></el-option>
    <el-option label="运维" value="3"></el-option>
    <el-option label="测试" value="4"></el-option>
  </el-select>

</div>


  
</template>

<style scoped></style>
