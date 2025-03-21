import {viteBundler} from "@vuepress/bundler-vite";
import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "橘子coding",
  description: "Java程序猿一枚，博客主要分享自己的编程学习笔记、编程技巧、实用工具...等等，当然也会分享职场生活，人生经历。",
  base: "/",
  // 指定 vuepress build 的输出目录
  dest: "./dist",
  // 是否开启默认预加载 js
  shouldPrefetch: false,
  head: [
    // meta
    ["meta", {name: "robots", content: "all"}],
    ["meta", {name: "author", content: "橘子coding"}],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", {"http-equiv": "Pragma", content: "no-cache"}],
    ["meta", {"http-equiv": "Expires", content: "0"}],
    [
      "meta",
      {
        name: "keywords",
        content: "juzicoding, 橘子coding, 编程, Java, JVM, 并发编程, MySQL, Redis, MyBatis, Spring, SpringCloud, 系统设计, 分布式, 高可用, 高并发",
      },
    ],
    ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}],
    // 添加百度资源平台验证
    ["meta", {name: "baidu-site-verification", content: "codeva-HGxpQYJQFm"}],
    // 添加百度统计
    [
      "script",
      {},
      `var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?3da08960ebab85b5f8e75b6f785e4602";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
            })();`,
    ],
  ],
  plugins: [],
  bundler: viteBundler(),
  theme,
});
