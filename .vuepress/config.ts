import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

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
    ],
  ],
  plugins: [
    mdEnhancePlugin({
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
    }),
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
      "/docs/carbon": [
        {
          text: "碳管理体系",
          children: ["ca-39-2022"],
          collapsible: false// 默认展开，true 为折叠
        },
        {
          text: "碳排放相关法规",
          children: ["method-of-trade","CH4-emission-control-program"],
          collapsible: false// 默认展开，true 为折叠
        },
        {
          text: "CCER方法学",
          children: ["CCER-01-001","CCER-01-002"],
          collapsible: true// 默认展开，true 为折叠
        },

      ],
    },
    navbar: [
      { text: "首页", link: "/", icon: "Home"},
      {
        text: "能源", icon: "Flash",
        children: [
          { text: "---标准---", 
            children: [
              { text: "50001", icon:"Iso", link: "/docs/energy/50001" },
              { text: "50003", icon:"Iso", link: "/docs/energy/50003" },
              { text: "50004", icon:"Iso", link: "/docs/energy/50004" },
              { text: "50005", icon:"Iso", link: "/docs/energy/50005" },
            ],
        },
          
        ],
      },
      {text: "碳", icon: "CarbonAccounting",
      children: [
        {text: "---------标准---------", 
          children:[
            {text: "碳管理体系 要求", link: "/docs/carbon/ca-39-2022"},
          ],
        },
        {text: "---------法规---------", 
          children:[
            {text: "自愿减排交易管理办法", link: "/docs/carbon/method-of-trade"},
            {text: "甲烷排放控制行动方案", link: "/docs/carbon/CH4-emission-control-program"},
          ],
        },
        {text: "-----CCER方法学-----", 
          children:[
            {text: "并网光热发电", link: "/docs/carbon/CCER-01-001"},
            {text: "并网海上风力发电", link: "/docs/carbon/CCER-01-002"},
          ],
        },
      ], },
  
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
