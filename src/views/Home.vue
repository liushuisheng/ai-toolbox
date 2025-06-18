<template>
  <div class="home-container">
    <h1 class="text-2xl font-bold mb-4">欢迎使用智能生活百宝箱</h1>
    
    <!-- PC端显示 -->
    <template v-if="!isMobile">
      <el-row :gutter="20">
        <el-col :span="8" v-for="tool in tools" :key="tool.id">
          <el-card class="mb-4 hover:shadow-lg transition-shadow">
            <div class="tool-card">
              <el-icon class="text-3xl mb-2">
                <component :is="tool.icon" />
              </el-icon>
              <h3 class="text-lg font-medium mb-2">{{ tool.name }}</h3>
              <p class="text-gray-600">{{ tool.description }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </template>

    <!-- 移动端显示 -->
    <template v-else>
      <van-grid :column-num="2" :gutter="10">
        <van-grid-item v-for="tool in tools" :key="tool.id">
          <div class="tool-card-mobile">
            <i class="text-xl mb-2" :class="tool.icon" />
            <span class="text-sm">{{ tool.name }}</span>
          </div>
        </van-grid-item>
      </van-grid>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

interface Tool {
  id: number
  name: string
  description: string
  icon: string
}

const tools = ref<Tool[]>([
  {
    id: 1,
    name: '智能助手',
    description: '24小时在线的AI助手，为您解答各种问题',
    icon: 'ChatDots'
  },
  {
    id: 2,
    name: '生活管理',
    description: '帮助您更好地管理日常生活',
    icon: 'Calendar'
  },
  {
    id: 3,
    name: '健康追踪',
    description: '记录和分析您的健康数据',
    icon: 'Activity'
  }
])
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.tool-card {
  text-align: center;
  padding: 1rem;
}

.tool-card-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
}
</style> 