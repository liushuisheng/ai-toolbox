<!-- 默认布局组件 -->
<template>
  <div class="layout-container">
    <!-- 根据设备类型显示不同的导航栏 -->
    <template v-if="isMobile">
      <van-nav-bar
        :title="currentRoute.meta.title as string"
        left-arrow
        @click-left="router.back()"
      />
    </template>
    <template v-else>
      <el-menu
        :default-active="currentRoute.path"
        class="el-menu-demo"
        mode="horizontal"
        router
      >
        <el-menu-item index="/">首页</el-menu-item>
      </el-menu>
    </template>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useWindowSize } from '@vueuse/core'

const route = useRoute()
const router = useRouter()
const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)
const currentRoute = computed(() => route)
</script>

<style scoped>
.layout-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 1rem;
}
</style> 