# 待办清单 TodoList

一个现代化的待办事项管理应用，使用 React + TypeScript + Vite 构建。

## ✨ 功能特性

- 📝 添加、编辑、删除待办事项
- 🎯 设置任务优先级（高、中、低）
- 📅 设置任务截止日期
- 🌓 暗黑模式支持
- 📱 响应式设计，支持移动端
- 💾 本地存储，数据持久化
- 🔍 任务筛选（全部、未完成、已完成）
- ⚡ 快速操作，流畅体验

## 🛠️ 技术栈

- **前端框架**: React 19
- **类型系统**: TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **状态管理**: Zustand
- **图标库**: Lucide React
- **开发工具**: ESLint

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

## 📦 部署

查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 获取详细的部署指南。

推荐使用 Vercel 进行部署：
1. 将代码推送到 GitHub
2. 在 [vercel.com](https://vercel.com) 导入项目
3. 自动部署完成

## 📁 项目结构

```
src/
├── components/          # React 组件
│   ├── ui/             # 通用 UI 组件
│   ├── AddTodo.tsx     # 添加待办事项
│   ├── Header.tsx      # 页面头部
│   ├── TodoFilter.tsx  # 任务筛选
│   ├── TodoItem.tsx    # 单个任务项
│   └── TodoList.tsx    # 任务列表
├── stores/             # 状态管理
│   └── todoStore.ts    # Zustand store
├── types/              # TypeScript 类型定义
├── lib/                # 工具函数
└── App.tsx             # 主应用组件
```

## 🎨 设计特色

- **现代化 UI**: 使用 Tailwind CSS 构建的清爽界面
- **暗黑模式**: 支持系统主题自动切换和手动切换
- **优先级标识**: 不同颜色标识任务优先级
- **过期提醒**: 过期任务自动高亮显示
- **流畅动画**: 丰富的交互动画效果

## 📄 许可证

MIT License

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
