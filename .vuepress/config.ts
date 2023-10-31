import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";


export default defineUserConfig({
  title: "标准学习笔记",
  description: "notes for stds learning",
  head: [
    [// google adsense
      "script",
      {
        "data-ad-client": "ca-pub-3573055271441666",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ]
  ],
  theme: recoTheme({
    lang: "zh-CN",
    style: "@vuepress-reco/style-default",
    logo: "",
    author: "学习者",
    authorAvatar: "",
    docsRepo: "",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    primaryColor: '#12aa9c',//主色配置
    catalogTitle: '本页目录', //自定义目录标题
    // series 为原 sidebar
    series: {
      "/docs/energy": [
        {
          text: "能源管理体系",
          children: ["50001", "50003", "50004","50005"],
          collapsible: false// 默认展开，true 为折叠
        },

      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "能源", icon: "Energy",
        children: [
          { text: "50001", icon:"ISO", link: "/docs/energy/50001" },
          { text: "50003", icon:"ISO", link: "/docs/energy/50003" },
          { text: "50004", icon:"ISO", link: "/docs/energy/50004" },
          { text: "50005", icon:"ISO", link: "/docs/energy/50005" },
        ],
      },
      {text: "碳", icon: "Energy",link: "/docs/carbon/ca-39-2022" },
  
    ],
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
