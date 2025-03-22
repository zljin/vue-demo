<!--
course01: 按钮和图标
-->
<script setup>

</script>

<template>
  <h3>按钮</h3>

  <h4>按钮类型</h4>
  <el-button>默认按钮</el-button>
  <el-button type="primary">按钮</el-button>
  <el-button type="success">按钮</el-button>
  <el-button type="info">按钮</el-button>
  <el-button type="warning">按钮</el-button>
  <el-button type="danger">按钮</el-button>
  
  <hr>

  <h4>按钮属性</h4>

  <el-button plain>按钮</el-button>
  <el-button round>按钮</el-button>
  <el-button circle>按钮</el-button>
  <el-button disabled>按钮</el-button>
  <el-button loading>按钮</el-button>

  <hr>

  <h4>按钮尺寸</h4>
  <el-button size="large">按钮</el-button>
  <el-button>按钮</el-button>
  <el-button size="small">按钮</el-button>

  <hr>

  <h3>图标</h3>

  <h4>图标举例</h4>

  <el-icon><Plus /></el-icon>
  <el-icon><Edit /></el-icon>
  <el-icon><Delete /></el-icon>
  <el-icon class="is-loading"><Loading /></el-icon>

  <hr>

  <h4>图标属性</h4>

  <el-icon size="30" color="red"><Search /></el-icon>

  <hr>

  <h4>按钮</h4>
  <el-button type="primary">
    <el-icon><Search /></el-icon>
    <span>搜索</span>
  </el-button>

  <el-button type="primary">
    <el-icon><Search /></el-icon>
  </el-button>

  <el-button type="primary" circle>
    <el-icon><Search /></el-icon>
  </el-button>

  <hr>

  <h4>按钮组</h4>

  <el-button-group>
    <el-button type="primary">
      <el-icon><Plus /></el-icon>
    </el-button>

    <el-button type="primary">
      <el-icon><Edit /></el-icon>
    </el-button>

    <el-button type="primary">
      <el-icon><Delete /></el-icon>
    </el-button>
  </el-button-group>

  <hr>


</template>

<style scoped>

</style>
