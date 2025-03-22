<!--
course12: 表格
-->
<script setup>
import { ref } from 'vue'

const data = ref({
  arr:[
    {id:1,name:'张三',age:20},
    {id:2,name:'李四',age:22},
    {id:3,name:'王五',age:24},
    {id:4,name:'赵六',age:26},
    {id:5,name:'孙七',age:28},
    {id:6,name:'周八',age:30},
    {id:7,name:'吴九',age:32},
    {id:8,name:'郑十',age:34},
    {id:9,name:'钱十一',age:36},
    {id:10,name:'马十二',age:38}
  ]
})

const currentPage = (val)=>{
    console.log(val)
}

let idArr=[]
const seleced=(data)=>{
  idArr=[]
  data.forEach(element => {
    idArr.push(element.id)
  });
  console.log(idArr)
}

const del=()=>{
  console.log(idArr)
}

const edit=(index,row)=>{
  console.log(index,row)
}

</script>

<template>

<h3>表格</h3>

<el-table :data="data.arr" border style="width: 800px;" @selection-change="seleced">
  <el-table-column type="selection" width="55"></el-table-column>
  <el-table-column prop="id" label="编号"></el-table-column>
  <el-table-column prop="name" label="姓名"></el-table-column>
  <el-table-column prop="age" label="年龄"></el-table-column>

  <el-table-column label="操作" width="150">
    <template #default="scope">
      <el-button type="primary" size="small" @click="edit(scope.$index,scope.row)">编辑</el-button>
      <el-button type="danger" size="small">删除</el-button>
    </template>
  </el-table-column>
</el-table>

<el-pagination layout="prev,pager,next,jumper,total" :page-size="3" :total="10" @current-change="currentPage" background></el-pagination>

</template>

<style scoped></style>
