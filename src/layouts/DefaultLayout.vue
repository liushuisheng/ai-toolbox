<!-- 默认布局组件 -->
<template>
  <div class="layout-wrapper">
    <!-- Dynamic Effect Overlay -->
    <component :is="activeEffect" />

    <div class="layout-container">
      <!-- 根据设备类型显示不同的导航栏 -->
      <header>
        <template v-if="isMobile">
          <van-nav-bar
            :title="currentRoute.meta.title as string"
            left-arrow
            @click-left="router.back()"
            class="glass-nav"
            fixed
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
      </header>

      <!-- 主要内容区域 -->
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { computed, onMounted, defineAsyncComponent } from 'vue'
import { useWeatherStore } from '@/stores/weather'
import { useWeather } from '@/utils/useWeather'

// --- Original setup logic ---
const route = useRoute()
const router = useRouter()
const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)
const currentRoute = computed(() => route)

// --- Weather and Effects ---
const weatherStore = useWeatherStore()
const { init: initWeather } = useWeather()

const Snowfall = defineAsyncComponent(() => import('@/components/effects/Snowfall.vue'))
// const Rain = defineAsyncComponent(() => import('@/components/effects/Rain.vue')) // Future effect

const activeEffect = computed(() => {
  if (weatherStore.isLoading || weatherStore.error) return null

  // --- Logic to determine effect ---
  // You can uncomment the line below for testing purposes
  return Snowfall;

  // 1. Check for specific weather conditions first (precipitation)
  if (weatherStore.isSnowing) return Snowfall
  // if (weatherStore.isRaining) return Rain

  // 2. Check for season as a fallback
  if (weatherStore.season === 'winter') return Snowfall

  // 3. Add more rules here...

  return null
})

onMounted(() => {
  initWeather()
})
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
  z-index: 100;
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