import {hopeTheme} from "vuepress-theme-hope";
import {navbarConfig} from "./navbar";
import {sidebarConfig} from "./sidebar";

export default hopeTheme({
  // 主题基本选项开始==================================================================

  hostname: "https://juzicoding.com",
  author: {
    name: "橘子coding",
    url: "https://juzicoding.com",
    email: "juzicoding@qq.com",
  },
  license: "Apache-2.0 license",
  favicon: "/favicon.png",

  // navbar
  navbar: navbarConfig,
  // sidebar
  sidebar: sidebarConfig,

  // 主题功能选项开始==================================================================

  // encrypt: {
  //   config: {
  //     "/guide/encrypt.html": ["1234"],
  //   },
  // },
  sidebarSorter: ["filename"],

  // 主题布局选项开始==================================================================

  // logo
  logo: "/favicon.png",
  // 导航栏仓库地址
  repo: "juzicoding/blog",
  // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序
  pageInfo: ["Author", "Date", "Original", "Word", "PageView"],
  // 文章最后更新时间
  lastUpdated: true,
  // 页脚信息，可以输入HTMLString
  footer:
      "ICP备案号：" +
      "<a target=\"_blank\" rel=\"external nofollow noopener noreferrer\" href=\"https://beian.miit.gov.cn/\">" + "赣ICP备2021001966号-4" + "</a>" +
      "&nbsp;&nbsp;|&nbsp;&nbsp;" +
      "驱动：" +
      "<a target=\"_blank\" rel=\"external nofollow noopener noreferrer\" href=\"https://github.com/vuepress/vuepress-next\">" +
      "vuepress" +
      "</a>" +
      "&nbsp;&nbsp;|&nbsp;&nbsp;" +
      "主题：" +
      "<a target=\"_blank\" rel=\"external nofollow noopener noreferrer\" href=\"https://github.com/vuepress-theme-hope/vuepress-theme-hope\">" +
      "vuepress-theme-hope" +
      "</a>",
  // 页脚版权信息
  copyright: "Copyright © 2019 - present juzicoding",
  // 是否默认显示页脚
  displayFooter: true,
  // 项目所在分支
  docsBranch: "master",
  // 项目文档目录
  docsDir: "docs",

  // 主题外观选项开始==================================================================

  // 是否开启纯净模式，启用此功能将禁用一些花哨的样式
  pure: true,
  // 专注模式
  focus: false,
  // 深色模式
  darkmode: "disable",

  // 插件开始========================================================================、

  breadcrumb: false,

  markdown: {
    highlighter: {
      type: "shiki",
      lineNumbers: false,
    },
    figure: false,
    imgLazyload: false,
    imgMark: false,
    imgSize: true,
    tasklist: true,
    sub: true,
    sup: true,
    demo: true,
  },

  plugins: {
    // blog: {
    //   autoExcerpt: true,
    // },

    // 图标支持
    icon: {
      assets: "//at.alicdn.com/t/c/font_3627793_6t1jvj2bghp.css",
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      // provider: "Artalk",
      // comment: true,
      // placeholder: "请填写昵称及邮箱，用于接收回复！",
      // noComment: "「空空如也」",
      // pagination: {
      //   pageSize: 20,   // 每页评论数
      //   readMore: true, // 加载更多 or 分页条
      //   autoLoad: false // 自动加载 (加载更多)
      // },
      // sendBtn: "发表",
      // server: "https://juzicoding.com/comment",
      // useBackendConf: true
    },
    search: {
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
      maxSuggestions: 20,
    },
    catalog: false,
  },
});
