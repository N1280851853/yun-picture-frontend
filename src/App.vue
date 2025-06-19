<template>
  <div id="app">
    <BasicLayout />

  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
// import { useLoginUserStore } from '@/stores/userLoginUserStore'
// import { healthUsingGet } from '@/api/healthController'

// 已经改为在权限校验文件(access.ts)中获取
// const loginUserStore = useLoginUserStore()
// loginUserStore.fetchLoginUser()
//
// healthUsingGet().then((res) => {
//   console.log(res)
// })
 </script>

<style scoped>

</style>
