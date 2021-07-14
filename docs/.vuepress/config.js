const { config } = require("vuepress-theme-hope");
const sidebar = require('./sidebar')

module.exports = config({
  title: "陈俊刚的博客",
  description: "前端技术博客",

  dest: "./dist",

  // 额外的需要被注入到当前页面的 HTML 中的标签
  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  // 多语言配置
  locales: {
    "/": {
      lang: "zh-CN",
    }
  },

  // 主题配置
  themeConfig: {
    logo: "/avatar.jpg",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "陈俊刚", // 文章显示的默认作者
    repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",

    nav: [ // icon 字段来支持图标显示。prefix 字段来自动添加分组前缀
      { text: "博客主页", link: "/", icon: "home" },
      { text: "项目主页", link: "/home/", icon: "home" },
      {
        text: "导航",
        icon: "creative",
        link: "/guide/",
      },
      {
        text: "文档",
        link: "https://vuepress-theme-hope.github.io/",
        icon: "note",
      },
    ],

    sidebar,

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      // links: {
      //   Zhihu: "https://zhihu.com",
      //   Github: "https://github.com/CLgang",
      //   Csdn: "https://blog.csdn.net/csdn9_14"
      // },
    },

    footer: {
      display: true,
      // content: "默认页脚",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: true,

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
