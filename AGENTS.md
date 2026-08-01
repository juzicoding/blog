# AGENTS.md

面向未来 OpenCode 会话的高信号上下文指南。本仓库是一个使用 VuePress 2 构建、基于 vuepress-theme-hope 主题的个人技术博客。

## 工具链

- 包管理器：`pnpm`（`package.json` 中锁定为 `pnpm@9.15.4`），不要使用 npm 或 yarn。
- `pnpm-lock.yaml` 已加入 `.gitignore`，不要将其提交到 Git。
- 没有测试、Lint、类型检查或 CI。修改 Markdown/内容后通过 `pnpm build` 或 `pnpm dev` 验证。
- 技术栈：`vuepress` 2.0.0-rc 系列、`vuepress-theme-hope` 2.0.0-rc 系列、Vite 打包、Shiki 代码高亮。具体版本以 `package.json` 为准。

## 常用命令

- 安装依赖：`pnpm install`
- 启动开发服务器：`pnpm dev` → http://localhost:8369
- 清理缓存并启动开发服务器：`pnpm clean-dev`
- 生产构建：`pnpm build`
- 更新 vuepress-theme-hope 主题：`pnpm update-package`（执行 `vp-update`）

## 构建输出

- `pnpm build` 输出到仓库根目录的 `dist/`（不是 `docs/.vuepress/dist`）。
- `dist/`、`.cache/`、`.temp/` 均已加入 `.gitignore`。

## 目录结构

- `docs/` — 所有 Markdown 内容和 VuePress 配置。
  - `docs/.vuepress/` — VuePress 配置目录。
    - `config.ts` — VuePress 主配置。
    - `theme.ts` — 主题配置（vuepress-theme-hope）。
    - `navbar.ts` — 导航栏菜单配置。
    - `sidebar.ts` — 侧边栏菜单配置。
    - `public/` — 静态资源（favicon、字体等）。
    - `styles/` — 自定义 SCSS 样式。
  - `docs/java-notes/` — Java 相关笔记（并发、JVM、MySQL、Redis、设计模式、MQ、Zookeeper、Nginx 等）。
  - `docs/source-code/` — 源码阅读笔记。
  - `docs/web-notes/` — 前端开发笔记。
  - `docs/python-notes/` — Python 笔记。
  - `docs/dev-ops/` — 运维、部署、软件安装、Docker 等笔记。
  - `docs/other/` — 关于我及其他内容。

## 站点配置

- 入口配置：`docs/.vuepress/config.ts`
- 主题配置：`docs/.vuepress/theme.ts`
- 导航栏在 `docs/.vuepress/navbar.ts` 中手动声明。
- 侧边栏在 `docs/.vuepress/sidebar.ts` 中手动声明。
- 侧边栏按文件名排序（`theme.ts` 中 `sidebarSorter: ["filename"]`）。
- 新增顶层分类通常需要同时更新 `navbar.ts` 和 `sidebar.ts`。
- 自定义样式：`docs/.vuepress/styles/config.scss`、`index.scss`、`palette.scss`。
- 主题使用 `pure: true`、`darkmode: "disable"`，代码高亮使用 Shiki。

## 排版规范

编辑 Markdown 时遵循以下中文文案排版规范（源自《中文文案排版指北》）：

### 空格规则

| 规则 | 正确示例 | 错误示例 |
|------|---------|---------|
| 中英文之间需要增加空格 | `在 LeanCloud 上，数据存储围绕 AVObject` | `在LeanCloud上，数据存储围绕AVObject` |
| 中文与数字之间需要增加空格 | `今天出去买菜花了 5000 元` | `今天出去买菜花了5000元` |
| 数字与单位/度/百分比之间不加空格 | `宽带有 10Gbps，CPU 提升 15%` | `宽带有 10 Gbps，CPU 提升 15 %` |
| 全角标点与其他字符之间不加空格 | `买了一部 iPhone，好开心！` | `买了一部 iPhone ，好开心！` |

例外：`豆瓣FM` 这类官方名词按官方格式书写。

### 标点符号规则

- 不重复使用标点符号：禁止连续多个相同标点（如 `！！`、`？？`）。

### 全角和半角规则

| 规则 | 正确示例 | 错误示例 |
|------|---------|---------|
| 中文使用全角标点 | `嗨！你知道吗？今天她说「喵」` | `嗨! 你知道吗? "喵"` |
| 数字使用半角字符 | `蛋糕只卖 1000 元` | `蛋糕只卖 １０００ 元` |
| 英文整句/特殊名词内用半角标点 | `「Stay hungry, stay foolish.」` | `「Stay hungry，stay foolish。」` |

### 名词规则

- 专有名词使用正确大小写：`GitHub` 正确，`github`/`Github`/`GITHUB` 错误。
- 不要使用不地道缩写：`JavaScript` 正确，`Js` 错误。

### 推荐遵循规范

- 链接之间增加空格：`请 [提交 issue](#) 分配` 优于 `请[提交 issue](#)分配`。
- 简体中文使用直角引号：`「老师，『有条不紊』」` 优于 `"老师，'有条不紊'"`。

## 注意事项

- 不要提交 `pnpm-lock.yaml`。
- 不要提交 `dist/`、`.cache/`、`.temp/` 等构建产物。
- 不要在配置中修改开发服务器端口，`port: 8369` 是固定的。
- 图片资源和 favicon 放在 `docs/.vuepress/public/`。

## 部署说明

- 生产部署通过 `bash/` 目录下的作者专属脚本完成，依赖私有服务器（`c-jz`），不通用。除非明确要求，否则不要运行。

## 参见

- `README.md` —— 项目背景和许可信息。
