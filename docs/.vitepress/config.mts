import { defineConfig } from 'vitepress'

// 通常需要修改 base 路径,通常为 "/仓库名/", 否则为"/"
const base = '/docs-JavaGuide/'

export default defineConfig({
  base,
  title: "vitepress",
  description: "a vitepress site template",

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['meta', { name: 'keywords', content: 'doc,docs' }],
    ['meta', { name: 'description', content: 'a vitepress site template' }],
  ],
  ignoreDeadLinks: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    footer: {
      // message: 'Released under the CC-BY-SA-4.0 license.',
      copyright: `Copyright © 2026-${new Date().getFullYear()} <a href="https://github.com/chenjianyao">Docs Protal</a>`
    },
    logo: '/images/logo.png',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    editLink: {
      // pattern: 'https://github.com/chenjianyao/docs-template/edit/main/docs/:path',
      // text: '在 GitHub 编辑'
    },
    nav: [
      { text: '首页', link: '/' },
      // { text: 'Git', link: '/git-operations.md' },
    ],
    sidebar: [
      // {
      //   text: 'Git 操作',
      //   link: '/git-operations.md'
      // }
    ],    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenjianyao' }
    ],
  },
  cleanUrls: true,
})
