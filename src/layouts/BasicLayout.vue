<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <!--顶部栏-->
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>

      <!--中间部分-->
      <a-layout-content class="content">
        <router-view/>
      </a-layout-content>

      <!--最下面的展示内容-->
      <a-layout-footer class="footer">
        <a href="http://localhost:5173/">
          王慧超-智能协同云图库
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts">

import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style scoped>

#basicLayout .header {
  padding-inline: 20px;
  margin-bottom: 16px;
  color: unset;
  background: white;
}


#basicLayout .content {
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 28px;
  padding: 20px;
}

#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

</style>
