<script setup>
import {inject} from 'vue'

const web = inject("provideWeb")

</script>

<template>
  <h3>------------------Nav-bottom------------------</h3>

  name: {{web.name}}  url: {{web.url}}

  <h3>------------------Nav-bottom------------------</h3>
</template>

<style scoped>

</style>
