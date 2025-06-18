# 智能生活百宝箱

一个基于 Vue 3 + TypeScript 的响应式应用，既可以在 PC 端访问，也可以在移动端访问。

## 技术栈

- Vue 3 + TypeScript
- Vite
- Vue Router
- Pinia
- Element Plus (PC端UI)
- Vant (移动端UI)
- UnoCSS
- VueUse

## 开发环境要求

- Node.js >= 16
- npm >= 7

## 安装和运行

1. 安装依赖：

```bash
npm install
```

2. 启动开发服务器：

```bash
npm run dev
```

3. 构建生产版本：

```bash
npm run build
```

## 项目结构

```
src/
├── components/     # 公共组件
├── views/          # 页面视图
├── router/         # 路由配置
├── stores/         # Pinia 状态管理
├── styles/         # 全局样式
├── utils/          # 工具函数
└── layouts/        # 布局组件
```

## 特性

- 响应式设计，支持 PC 端和移动端
- 根据设备类型自动切换 UI 组件库
- 模块化的项目结构
- TypeScript 类型支持
- 原子化 CSS 支持
