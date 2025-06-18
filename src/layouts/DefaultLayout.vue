<!-- 默认布局组件 -->
<template>
  <div class="layout-container">
    <!-- 根据设备类型显示不同的导航栏 -->
    <template v-if="isMobile">
      <van-nav-bar
        :title="currentRoute.meta.title as string"
        left-arrow
        @click-left="router.back()"
        class="glass-nav"
      />
    </template>
    <template v-else>
      <el-menu
        :default-active="currentRoute.path"
        class="el-menu-demo glass-nav"
        mode="horizontal"
        router
        :ellipsis="false"
      >
        <div class="logo">智能百宝箱</div>
        <div class="flex-grow" />
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
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

.flex-grow {
  flex-grow: 1;
}

.logo {
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
}
</style>

<style>
/* Global style overrides for navigation */
.glass-nav {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2) !important;
}

/* Element Plus Menu Overrides */
.el-menu.glass-nav {
  height: var(--nav-height-desktop);
}
.el-menu--horizontal.glass-nav .el-menu-item {
  color: rgba(255, 255, 255, 0.85) !important;
  border-bottom: 2px solid transparent !important;
  transition: all 0.3s ease;
}
.el-menu--horizontal.glass-nav .el-menu-item:not(.is-disabled):hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
  color: #fff !important;
  border-bottom-color: #fff !important;
}
.el-menu--horizontal.glass-nav .el-menu-item.is-active {
  color: #fff !important;
  background-color: transparent !important;
  border-bottom: 2px solid #fff !important;
}


/* Vant NavBar Overrides */
.van-nav-bar.glass-nav {
  --van-nav-bar-background: transparent !important;
  --van-nav-bar-title-text-color: #fff !important;
  --van-nav-bar-icon-color: #fff !important;
}
.van-hairline--bottom::after {
  border-bottom-width: 0 !important;
}
</style> 