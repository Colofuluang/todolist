# 待办清单项目部署指南

## 🚀 推荐部署方案：Vercel

### 方法一：通过 Vercel 网站部署（推荐）

1. **准备 GitHub 仓库**
   ```bash
   # 如果还没有推送到 GitHub，执行以下步骤：
   # 1. 在 GitHub 上创建新仓库
   # 2. 添加远程仓库
   git remote add origin https://github.com/Colofuluang/todolist.git
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

#### 方法一：手动部署（推荐新手）

1. **项目已配置完成**
   - ✅ gh-pages 包已安装
   - ✅ package.json 脚本已添加
   - ✅ vite.config.ts 已配置 base 路径

2. **创建 GitHub 仓库**
   - 在 GitHub 上创建新仓库，命名为 `todolist`
   - 不要初始化 README、.gitignore 或 license

3. **推送代码到 GitHub**
   ```bash
   git remote add origin https://github.com/你的用户名/todolist.git
   git branch -M main
   git push -u origin main
   ```

4. **启用 GitHub Pages**
   - 进入仓库设置 (Settings)
   - 找到 "Pages" 选项
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "gh-pages"
   - 点击 Save

5. **部署项目**
   ```bash
   npm run deploy
   ```

6. **访问网站**
   - 部署完成后访问：`https://你的用户名.github.io/todolist`

#### 方法二：GitHub Actions 自动部署

1. **GitHub Actions 工作流已配置**
   - ✅ `.github/workflows/deploy.yml` 已创建
   - 每次推送到 main 分支时自动部署

2. **推送代码触发部署**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **查看部署状态**
   - 在 GitHub 仓库的 "Actions" 标签页查看部署进度
   - 部署成功后在 "Settings > Pages" 查看网站地址

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