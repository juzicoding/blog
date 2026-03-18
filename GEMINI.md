# GEMINI.md

## 项目概览
**橘子coding (juzicoding)** 是一个基于 **VuePress 2** 和 **vuepress-theme-hope** 主题开发的个人博客项目。该项目主要用于分享 Java 编程笔记（并发编程、JVM、设计模式、MySQL 等）、源码分析、前端开发笔记以及 DevOps 实践。

- **核心技术**: VuePress 2, Vite, Sass, TypeScript, `vuepress-theme-hope`。
- **主要内容**: 以 Java 为核心的技术笔记、DevOps 指南及个人心得。

## 目录结构
- `docs/`: 包含所有博客内容的 Markdown 文件。
  - `docs/java-notes/`: Java 相关笔记（并发、JVM、设计模式、MySQL 等）。
  - `docs/source-code/`: 源码分析（如 MyBatis）。
  - `docs/web-notes/`: 前端笔记（HTML、CSS、JavaScript）。
  - `docs/dev-ops/`: DevOps 相关笔记（Docker、软件安装、博客搭建）。
  - `docs/other/`: 其他内容，包括“关于我”。
- `docs/.vuepress/`: VuePress 配置文件。
  - `config.ts`: 主配置文件。
  - `theme.ts`: 主题设置和插件配置。
  - `navbar.ts`: 导航栏配置。
  - `sidebar.ts`: 侧边栏配置。
- `bash/`: 适用于 Windows (`.bat`) 和 Linux/macOS (`.sh`) 的部署脚本。
- `package.json`: 项目元数据及构建脚本。

## 构建与运行
项目使用 `npm` (或 `pnpm`) 进行包管理。

- **启动开发服务器**:
  ```bash
  npm run dev
  ```
  在 `http://localhost:8369` 启动开发服务器。

- **生产环境构建**:
  ```bash
  npm run build
  ```
  在 `./dist` 目录下生成静态文件。

- **清理缓存并启动开发**:
  ```bash
  npm run clean-dev
  ```

- **更新依赖包**:
  ```bash
  npm run update-package
  ```

## 部署
自定义部署脚本位于 `bash/` 目录中。

- **`bash/deploy.sh`**: 构建项目，将 `dist` 目录打包，通过 `scp` 上传到远程服务器，并利用 `ssh` 进行解压。
- **`bash/deploy.bat`**: 该部署脚本的 Windows 版本。

## 开发规范
- **内容语言**: 主要使用简体中文 (`zh-CN`)。
- **Markdown 样式**: 使用标准 Markdown，并结合 VuePress 增强功能（由 `vuepress-theme-hope` 提供）。
- **侧边栏与导航栏**: 通过 `docs/.vuepress/sidebar.ts` 和 `docs/.vuepress/navbar.ts` 进行手动维护。
- **图片处理**: 通常在 `docs/` 中通过外部链接或本地路径引用。
- **配置管理**: 主题选项和插件设置集中在 `docs/.vuepress/theme.ts` 中。
