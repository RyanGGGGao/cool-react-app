#!/bin/bash

echo "🚀 开始部署 Cool React App 到 Vercel..."

# 检查是否已初始化Git仓库
if [ ! -d ".git" ]; then
    echo "📦 初始化Git仓库..."
    git init
    git add .
    git commit -m "Initial commit: Cool React App with modern UI and animations"
    echo "✅ Git仓库初始化完成"
else
    echo "📦 更新Git仓库..."
    git add .
    git commit -m "Update: Enhanced UI and deployment configuration"
    echo "✅ Git仓库更新完成"
fi

echo ""
echo "📋 下一步操作："
echo "1. 在GitHub上创建新仓库"
echo "2. 运行以下命令推送代码："
echo "   git remote add origin https://github.com/YOUR_USERNAME/cool-react-app.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. 访问 https://vercel.com 并导入你的GitHub仓库"
echo "4. 点击 'Deploy' 按钮"
echo ""
echo "🎉 你的酷炫React应用将在几分钟内上线！"
echo ""
echo "📖 详细部署指南请查看 DEPLOYMENT.md 文件" 