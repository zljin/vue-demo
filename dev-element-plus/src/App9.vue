<!--
course09: 表单
-->
<script setup>
import { ref } from 'vue'

const data = ref({
    name: '',
    radio: '',
    date: '',
    select: '',
    multipleSelect: [],
    checkbox: [],
    textarea: ''
})

const add=()=>{
    console.log(data.value)
}

const reset=()=>{
    data.value.name = ''
    data.value.radio = ''
    data.value.date = ''
    data.value.select = ''
    data.value.multipleSelect = []
    data.value.checkbox = []
    data.value.textarea = ''
}


</script>

<template>

<h3>表单</h3>

<el-form label-width="80" style="width: 400px;">
  <el-form-item label="文本框">
      <el-input v-model="data.name" placeholder="请填写名称"></el-input>
  </el-form-item>
  <el-form-item label="单选框">
      <el-radio-group v-model="data.radio">
          <el-radio value="1">选项1</el-radio>
          <el-radio value="2">选项2</el-radio>
          <el-radio value="3">选项3</el-radio>
      </el-radio-group>
  </el-form-item>
  <el-form-item label="日期">
      <el-date-picker v-model="data.date" type="date" placeholder="选择日期"></el-date-picker>
  </el-form-item>
  <el-form-item label="下拉框">
      <el-select v-model="data.select" placeholder="请选择">
          <el-option label="选项1" value="1"></el-option>
          <el-option label="选项2" value="2"></el-option>
          <el-option label="选项3" value="3"></el-option>
      </el-select>    
  </el-form-item>
  <el-form-item label="多选框">
      <el-select v-model="data.multipleSelect" multiple placeholder="请选择">
          <el-option label="选项1" value="1"></el-option>
          <el-option label="选项2" value="2"></el-option>
          <el-option label="选项3" value="3"></el-option>
      </el-select>  
  </el-form-item>
  <el-form-item label="复选框">
      <el-checkbox-group v-model="data.checkbox">
          <el-checkbox value="1">选项1</el-checkbox>
          <el-checkbox value="2">选项2</el-checkbox>
          <el-checkbox value="3">选项3</el-checkbox>
      </el-checkbox-group>
  </el-form-item>
  <el-form-item label="文本域">
      <el-input type="textarea" v-model="data.textarea" placeholder="请输入内容"></el-input>
  </el-form-item>
  <el-form-item>
      <el-button type="primary" @click="add">提交</el-button>
      <el-button @click="reset">重置</el-button>  
  </el-form-item>

</el-form>


  
</template>

<style scoped></style>
