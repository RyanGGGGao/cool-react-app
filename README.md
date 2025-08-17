# 🚀 Cool React App

一个现代化的 React 应用，具有炫酷的动画效果和精美的 UI 设计，专为 Vercel 部署优化。

## ✨ 特性

- 🎨 **现代化设计**: 使用玻璃拟态效果和渐变背景
- ⚡ **快速开发**: 基于 Vite 构建，支持热重载
- 🎭 **流畅动画**: 使用 Framer Motion 实现丝滑动画
- 📱 **响应式**: 完美适配桌面、平板和移动设备
- 🎯 **SEO 友好**: 优化的性能和可访问性
- 🚀 **一键部署**: 专为 Vercel 部署优化

## 🛠️ 技术栈

- **React 19** - 最新的 React 版本
- **Vite** - 快速的构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Framer Motion** - 强大的动画库
- **Lucide React** - 精美的图标库

## 🚀 快速开始

### 本地开发

1. 克隆项目

```bash
git clone <your-repo-url>
cd cool-react-app
```

2. 安装依赖

```bash
npm install
```

3. 启动开发服务器

```bash
npm run dev
```

4. 在浏览器中打开 [http://localhost:5173](http://localhost:5173)

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 🌐 部署到 Vercel

### 方法 1: 通过 Vercel Dashboard

1. 将代码推送到 GitHub 仓库
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "New Project"
4. 导入你的 GitHub 仓库
5. 点击 "Deploy"

### 方法 2: 使用 Vercel CLI

1. 安装 Vercel CLI

```bash
npm i -g vercel
```

2. 登录 Vercel

```bash
vercel login
```

3. 部署项目

```bash
vercel
```

## 📁 项目结构

```
cool-react-app/
├── public/              # 静态资源
├── src/
│   ├── App.jsx         # 主应用组件
│   ├── index.css       # 全局样式
│   └── main.jsx        # 应用入口
├── tailwind.config.js  # Tailwind配置
├── postcss.config.js   # PostCSS配置
├── vercel.json         # Vercel部署配置
└── package.json        # 项目依赖
```

## 🎨 自定义

### 修改颜色主题

在 `tailwind.config.js` 中修改颜色配置：

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### 添加新动画

在 `src/index.css` 中添加自定义动画：

```css
@keyframes yourAnimation {
  /* 你的动画关键帧 */
}

.animate-your-animation {
  animation: yourAnimation 1s ease-in-out;
}
```

## 📝 脚本命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run preview` - 预览生产版本
- `npm run lint` - 运行代码检查

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

---

⭐ 如果这个项目对你有帮助，请给它一个星标！
