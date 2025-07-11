# 📝 待办清单 TodoList

一个现代化、功能丰富的待办事项管理应用，采用 React 19 + TypeScript + Tailwind CSS 构建，支持优先级管理、截止日期、暗黑模式等高级功能。

## ✨ 功能特性

### 🎯 核心功能
- ✅ **任务管理**: 添加、编辑、删除、完成任务
- 🏷️ **优先级系统**: 低、中、高三级优先级，带颜色标识
- 📅 **截止日期**: 设置任务截止时间，自动检测过期任务
- 🔍 **智能筛选**: 全部、进行中、已完成任务筛选
- 💾 **本地存储**: 数据自动保存到浏览器本地存储
- 🗑️ **批量操作**: 一键清除所有已完成任务

### 🎨 用户体验
- 🌙 **暗黑模式**: 支持明暗主题切换，跟随系统主题
- 📱 **响应式设计**: 完美适配桌面端和移动端
- ⚡ **流畅动画**: 精心设计的过渡动画和交互效果
- ♿ **无障碍支持**: 完整的键盘导航和屏幕阅读器支持
- 🎯 **直观操作**: 悬停显示操作按钮，减少界面干扰

### 🔧 技术亮点
- 🚀 **现代技术栈**: React 19 + TypeScript + Vite
- 🎨 **设计系统**: 基于 Tailwind CSS 的组件化设计
- 📦 **状态管理**: 使用 Zustand 进行轻量级状态管理
- 🔒 **类型安全**: 完整的 TypeScript 类型定义
- 📐 **代码规范**: ESLint 代码质量检查

## 🛠️ 技术栈

### 前端框架
- **React 19** - 最新的 React 版本，支持并发特性
- **TypeScript** - 类型安全的 JavaScript 超集
- **Vite** - 快速的构建工具和开发服务器

### 样式和UI
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Lucide React** - 精美的图标库
- **CSS Variables** - 支持主题切换的 CSS 变量系统

### 状态管理
- **Zustand** - 轻量级状态管理库
- **LocalStorage** - 浏览器本地数据持久化

### 开发工具
- **ESLint** - 代码质量和风格检查
- **PostCSS** - CSS 后处理器
- **TypeScript Compiler** - 类型检查和编译

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm >= 8.0.0

### 安装依赖
```bash
# 克隆项目
git clone https://github.com/Colofuluang/todolist.git
cd todolist

# 安装依赖
npm install
```

### 开发模式
```bash
# 启动开发服务器
npm run dev

# 在浏览器中打开 http://localhost:5173
```

### 构建生产版本
```bash
# 构建项目
npm run build

# 预览构建结果
npm run preview
```

### 代码检查
```bash
# 运行 ESLint 检查
npm run lint
```

## 📁 项目结构

```
todolist/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署
├── public/
│   └── vite.svg               # 静态资源
├── src/
│   ├── components/            # React 组件
│   │   ├── ui/               # 基础 UI 组件
│   │   │   ├── Button.tsx    # 按钮组件
│   │   │   ├── Input.tsx     # 输入框组件
│   │   │   └── Card.tsx      # 卡片组件
│   │   ├── AddTodo.tsx       # 添加任务组件
│   │   ├── Header.tsx        # 页面头部组件
│   │   ├── TodoFilter.tsx    # 任务筛选组件
│   │   ├── TodoItem.tsx      # 任务项组件
│   │   └── TodoList.tsx      # 任务列表组件
│   ├── lib/
│   │   └── utils.ts          # 工具函数
│   ├── stores/
│   │   └── todoStore.ts      # Zustand 状态管理
│   ├── types/
│   │   └── index.ts          # TypeScript 类型定义
│   ├── App.tsx               # 主应用组件
│   ├── main.tsx              # 应用入口
│   └── index.css             # 全局样式
├── eslint.config.js          # ESLint 配置
├── package.json              # 项目依赖和脚本
├── tailwind.config.js        # Tailwind CSS 配置
├── tsconfig.json             # TypeScript 配置
├── vite.config.ts            # Vite 配置
└── vercel.json               # Vercel 部署配置
```

## 🎨 设计系统

### 颜色主题
项目使用 CSS 变量实现主题系统，支持明暗两种模式：

- **主色调**: 蓝色系，用于主要操作按钮和强调元素
- **语义色彩**: 绿色(成功)、黄色(警告)、红色(危险)
- **优先级色彩**: 绿色(低)、黄色(中)、红色(高)

### 组件设计
- **一致性**: 所有组件遵循统一的设计规范
- **可复用性**: 基础 UI 组件可在项目中复用
- **可访问性**: 支持键盘导航和屏幕阅读器

## 📦 部署

### 推荐部署方案

#### 1. Vercel 部署（推荐）
```bash
# 方法一：通过 Vercel 网站
# 1. 将代码推送到 GitHub
# 2. 在 vercel.com 导入项目
# 3. 自动部署完成

# 方法二：通过 Vercel CLI
npm install -g vercel
vercel login
vercel
```

#### 2. GitHub Pages 部署
```bash
# 手动部署
npm run deploy

# 自动部署（已配置 GitHub Actions）
# 推送到 main 分支即可自动部署
git push origin main
```

#### 3. Netlify 部署
```bash
# 构建项目
npm run build

# 将 dist 文件夹拖拽到 netlify.com 部署区域
# 或连接 GitHub 仓库自动部署
```

### 部署配置

项目已预配置多种部署方案：

- ✅ **Vercel**: `vercel.json` 配置文件
- ✅ **GitHub Pages**: GitHub Actions 工作流
- ✅ **静态托管**: 构建输出到 `dist` 目录

## 🔧 配置说明

### Vite 配置
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/todolist/' : '/'
})
```

### Tailwind 配置
- 自定义颜色系统
- 暗黑模式支持
- 响应式断点

### TypeScript 配置
- 严格模式启用
- 路径别名配置
- 现代 ES 特性支持

## 🧪 开发指南

### 添加新功能
1. 在 `src/types/index.ts` 中定义类型
2. 在 `src/stores/todoStore.ts` 中添加状态和操作
3. 创建或修改相关组件
4. 更新样式和测试

### 代码规范
- 使用 TypeScript 进行类型检查
- 遵循 ESLint 规则
- 组件使用 React.FC 类型
- 使用 Tailwind CSS 类名

### 性能优化
- 使用 React.memo 优化组件渲染
- 合理使用 useCallback 和 useMemo
- 图标按需导入
- 代码分割和懒加载

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发流程
1. Fork 项目
2. 创建功能分支: `git checkout -b feature/amazing-feature`
3. 提交更改: `git commit -m 'Add amazing feature'`
4. 推送分支: `git push origin feature/amazing-feature`
5. 提交 Pull Request

### 提交规范
- feat: 新功能
- fix: 修复问题
- docs: 文档更新
- style: 代码格式调整
- refactor: 代码重构
- test: 测试相关
- chore: 构建过程或辅助工具的变动

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [React](https://reactjs.org/) - 用户界面库
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Zustand](https://github.com/pmndrs/zustand) - 状态管理
- [Lucide](https://lucide.dev/) - 图标库
- [Vite](https://vitejs.dev/) - 构建工具

---

<div align="center">
  <p>如果这个项目对你有帮助，请给它一个 ⭐️</p>
  <p>Made with ❤️ by <a href="https://github.com/Colofuluang">Colofuluang</a></p>
</div>
