<template>
  <div class="about-container">
    <div class="about-card">
      <h1 class="title">关于 智能生活百宝箱</h1>
      <p class="description">
        本项目是一个基于 Vue 3, Vite, 和 TypeScript 构建的现代化 Web 应用，旨在探索 AI 技术在日常生活中的各种可能性。
      </p>
      <p class="description">
        它采用了响应式设计，无缝适配桌面和移动设备，并集成了 Element Plus 和 Vant 两套 UI 组件库，以在不同平台上提供最佳的用户体验。
      </p>
      <div class="tech-stack">
        <h2 class="subtitle">核心技术栈</h2>
        <ul>
          <li>Vue 3 (Composition API & &lt;script setup&gt;)</li>
          <li>Vite (极速构建工具)</li>
          <li>TypeScript (强类型支持)</li>
          <li>Pinia (状态管理)</li>
          <li>Vue Router (前端路由)</li>
          <li>UnoCSS (原子化 CSS)</li>
          <li>Element Plus & Vant (双 UI 库)</li>
        </ul>
      </div>
      <a href="https://github.com/liushuisheng/ai-toolbox" target="_blank" class="github-link">
        <i class="i-carbon-logo-github" />
        <span>查看源码</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  color: white;
  min-height: calc(100vh - 60px - 4rem); /* 减去导航栏和上下padding的高度 */
}

.about-card {
  max-width: 800px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1.5rem;
}

.tech-stack {
  margin-top: 2.5rem;
  text-align: left;
}

.subtitle {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  max-width: 500px;
  margin: 0 auto;
}

li {
  background: rgba(0, 0, 0, 0.2);
  padding: 0.8rem;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
}

.github-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
  padding: 0.8rem 1.5rem;
  background: #fff;
  color: #333;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.github-link:hover {
  background: #eee;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.github-link .i-carbon-logo-github {
  font-size: 1.5rem;
}
</style> 