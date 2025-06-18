import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 引入 UnoCSS
import 'uno.css'

// 引入基础样式
import './styles/main.css'

// 移动端组件库
import { 
  Button as VanButton,
  NavBar as VanNavBar,
  Grid as VanGrid,
  GridItem as VanGridItem
} from 'vant'

// PC端组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 创建应用实例
const app = createApp(App)

// 注册 Pinia
app.use(createPinia())

// 注册路由
app.use(router)

// 注册 Element Plus
app.use(ElementPlus)

// 注册 Vant 组件
app.use(VanButton)
app.use(VanNavBar)
app.use(VanGrid)
app.use(VanGridItem)

// 挂载应用
app.mount('#app')
