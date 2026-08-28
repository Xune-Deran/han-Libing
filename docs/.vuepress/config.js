import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/han-Libing/',
  title: '蜀川根脉',
  description: '故蜀郡李府君，讳冰',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '科普',
        link: '/科普/',
      },
      {
        text: '评论',
        link: '/评论/',
      },
      {
        text: '文献',
        link: '/文献/',
      },
    ],

    sidebar: {
      '/科普/': [
        {
          text: '科普',
          children: [
            '/科普/',
            '/科普/李冰：从史书到神话(1).md',
          ],
        },
      ],

      '/评论/': [
        {
          text: '评论',
          children: [
            '/评论/',
            '/评论/甲申岁暮祭李公文.md',
            '/评论/论湔堋与冰.md',
          ],
        },
      ],

      '/文献/': [
        {
          text: '文献',
          children: [
            '/文献/',
          ],
        },
      ],
    },
  }),
    sidebarDepth: 2,

  bundler: viteBundler(),

})