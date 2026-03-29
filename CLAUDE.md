# CLAUDE.md

本文件提供给 Claude Code (claude.ai/code) 在本仓库工作时的指导。

## 常用命令

- 安装依赖：`pnpm install`
- 启动本地开发服务器：`pnpm dev`（监听端口 8369）
- 清理缓存并启动开发服务器：`pnpm clean-dev`
- 生产构建：`pnpm build`（输出到 `docs/.vuepress/dist`）
- 更新 vuepress-theme-hope 主题：`pnpm update-package`

## 架构说明

这是一个使用 **VuePress 2** 构建，基于 **vuepress-theme-hope** 主题的个人技术博客。

### 目录结构

- `docs/` - 所有 Markdown 内容和 VuePress 配置
  - `docs/.vuepress/` - VuePress 配置目录
    - `config.ts` - VuePress 主配置
    - `theme.ts` - 主题配置（使用 vuepress-theme-hope）
    - `navbar.ts` - 导航栏菜单配置
    - `sidebar.ts` - 侧边栏菜单配置（按文件名结构自动生成）
    - `public/` - 静态资源（favicon、字体）
    - `styles/` - 自定义 SCSS 样式
  - `docs/java-notes/` - Java 相关技术笔记（并发编程、JVM、MySQL、Redis 等）
  - `docs/source-code/` - 源码阅读笔记
  - `docs/web-notes/` - 前端开发笔记
  - `docs/dev-ops/` - 运维和部署笔记
  - `docs/other/` - 关于我及其他内容

### 内容组织

- 侧边栏按文件名排序（`sidebarSorter: "filename"`）
- 内容按主题/分类组织到不同目录

### 技术栈

- VuePress 2.0.0-rc.26，使用 Vite 打包
- vuepress-theme-hope 2.0.0-rc.103
- pnpm 包管理器
- Shiki 代码高亮
