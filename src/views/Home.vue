<template>
  <div class="home-container">
    <div class="hero-section">
      <h1 class="main-title">智能生活百宝箱</h1>
      <p class="subtitle">您的 AI 驱动的个人生活助理</p>
    </div>

    <!-- PC & Mobile a single responsive grid -->
    <div class="tools-grid">
      <div
        v-for="(tool, index) in tools"
        :key="tool.id"
        class="tool-card-wrapper"
        :style="{ '--delay': index * 100 + 'ms' }"
      >
        <div class="tool-card">
          <div class="tool-icon">
            <i :class="`i-carbon-${tool.icon}`" />
          </div>
          <h3 class="tool-name">{{ tool.name }}</h3>
          <p class="tool-description">{{ tool.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Tool {
  id: number;
  name: string;
  description: string;
  icon: string;
}

const tools = ref<Tool[]>([
  {
    id: 1,
    name: '智能对话',
    description: '与先进的 AI 模型进行流畅对话',
    icon: 'chat',
  },
  {
    id: 2,
    name: '日程大师',
    description: '智能规划您的日程，提升效率',
    icon: 'calendar',
  },
  {
    id: 3,
    name: '健康管家',
    description: '追踪您的健康数据，提供专业建议',
    icon: 'activity',
  },
  {
    id: 4,
    name: '灵感画板',
    description: '将您的想法瞬间变为惊艳的图像',
    icon: 'image',
  },
  {
    id: 5,
    name: '代码助手',
    description: 'AI 辅助编程，让编码更高效',
    icon: 'code',
  },
  {
    id: 6,
    name: '知识星球',
    description: '探索未知，AI 为您解答万物',
    icon: 'education',
  },
])
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  color: white;
  min-height: calc(100vh - var(--nav-height-desktop) - 2rem); /* Full viewport height minus nav and parent padding */
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.hero-section {
  text-align: center;
  margin-bottom: 2.5rem; /* Reduced margin */
}

.main-title {
  font-size: 3.5rem;
  font-weight: 700;
  background: -webkit-linear-gradient(45deg, #fff, rgba(255, 255, 255, 0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  animation: fade-in-down 0.8s ease-out;
}

.subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  animation: fade-in-up 0.8s 0.2s ease-out backwards;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem; /* Reduced gap */
}

.tool-card-wrapper {
  opacity: 0;
  transform: translateY(30px);
  animation: fade-in-up 0.6s ease-out forwards;
  animation-delay: var(--delay);
}

.tool-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
}

.tool-card:hover {
  transform: translateY(-10px) scale(1.03);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.3);
}

.tool-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
  display: inline-block;
}

.tool-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.tool-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .home-container {
    min-height: calc(100vh - var(--nav-height-mobile) - 2rem);
  }
  .hero-section {
    margin-bottom: 2rem;
  }
  .main-title {
    font-size: 2.5rem;
  }
}
</style> 