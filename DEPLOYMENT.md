# 待办清单项目部署指南

## 🚀 推荐部署方案：Vercel

### 方法一：通过 Vercel 网站部署（推荐）

1. **准备 GitHub 仓库**
   ```bash
   # 如果还没有推送到 GitHub，执行以下步骤：
   # 1. 在 GitHub 上创建新仓库
   # 2. 添加远程仓库
   git remote add origin https://github.com/你的用户名/todolist.git
   git branch -M main
   git push -u origin main
   ```

2. **通过 Vercel 网站部署**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 选择你的 todolist 仓库
   - 点击 "Deploy"
   - 等待部署完成

### 方法二：通过 Vercel CLI 部署

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   vercel --prod
   ```

## 🌐 其他部署选项

### Netlify 部署

1. **构建项目**
   ```bash
   npm run build
   ```

2. **部署到 Netlify**
   - 访问 [netlify.com](https://netlify.com)
   - 将 `dist` 文件夹拖拽到部署区域
   - 或者连接 GitHub 仓库自动部署

### GitHub Pages 部署

1. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **修改 package.json**
   ```json
   {
     "homepage": "https://你的用户名.github.io/todolist",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **部署**
   ```bash
   npm run deploy
   ```

## 📝 部署前检查清单

- ✅ 项目构建成功 (`npm run build`)
- ✅ 所有 TypeScript 错误已修复
- ✅ 代码已提交到 Git
- ✅ 选择合适的部署平台

## 🔧 部署配置

### Vercel 配置文件 (可选)

创建 `vercel.json` 文件：
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### 环境变量 (如果需要)

在部署平台的设置中添加环境变量：
- `NODE_ENV=production`

## 🎉 部署完成后

部署成功后，你会得到一个公网访问地址，例如：
- Vercel: `https://your-todolist.vercel.app`
- Netlify: `https://your-todolist.netlify.app`
- GitHub Pages: `https://你的用户名.github.io/todolist`

现在任何人都可以通过这个链接访问你的待办清单应用！

## 🚨 常见问题

### 构建失败
- 检查 TypeScript 错误
- 确保所有依赖都已安装
- 检查 Node.js 版本兼容性

### 部署后页面空白
- 检查控制台错误
- 确认路由配置正确
- 检查静态资源路径

### 暗黑模式不工作
- 确认 Tailwind CSS 配置正确
- 检查 localStorage 权限