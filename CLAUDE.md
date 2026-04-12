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

## 排版规范

本规范源自《中文文案排版指北》，规范仓库所有 Markdown 文档的写作格式：

### 一、空格规则
| 规则 | 正确示例                            | 错误示例                         |
|------|---------------------------------|------------------------------|
| 中英文之间需要增加空格 | `在 LeanCloud 上，数据存储围绕 AVObject` | `在LeanCloud上，数据存储围绕AVObject` |
| 中文与数字之间需要增加空格 | `今天出去买菜花了 5000 元`               | `今天出去买菜花了5000元`              |
| 数字与单位/度/百分比之间不加空格 | `宽带有 10Gbps，CPU 提升 15%`         | `宽带有 10 Gbps，CPU 提升 15 %`    |
| 全角标点与其他字符之间不加空格 | `买了一部 iPhone，好开心！`              | `买了一部 iPhone ，好开心！`          |

*例外：`豆瓣FM`这类官方名词按官方格式书写，自动空格属性未普及，仍需手动添加*

### 二、标点符号规则
1. **不重复使用标点符号**：禁止连续多个相同标点（如`！！`、`？？`）

### 三、全角和半角规则
| 规则 | 正确示例 | 错误示例 |
|------|----------|----------|
| 中文使用全角标点 | `嗨！你知道吗？今天她说「喵」` | `嗨! 你知道吗? "喵"` |
| 数字使用半角字符 | `蛋糕只卖 1000 元` | `蛋糕只卖 １０００ 元` |
| 英文整句/特殊名词内用半角标点 | `「Stay hungry, stay foolish.」` | `「Stay hungry，stay foolish。」` |

*例外：设计稿、海报可少量使用全角数字对齐*

### 四、名词规则
1. **专有名词使用正确大小写**：`GitHub` 正确，`github`/`Github`/`GITHUB` 错误
2. **不要使用不地道缩写**：`JavaScript` 正确，`Js` 错误

### 五、推荐遵循规范
1. 链接之间增加空格：`请 [提交 issue](#) 分配` 优于 `请[提交 issue](#)分配`
2. 简体中文使用直角引号：`「老师，『有条不紊』」` 优于 `"老师，'有条不紊'"`
