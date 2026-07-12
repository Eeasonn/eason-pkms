export default {
  title: "Eason's PKMS",
  description: 'Personal Knowledge Management System',
  base: '/eason-pkms/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Wiki', link: '/wiki/' },
      { text: 'Index', link: '/wiki/index' }
    ],
    sidebar: {
      '/wiki/': [
        {
          text: '知识库',
          items: [
            { text: '总目录', link: '/wiki/index' },
            { text: '概念', link: '/wiki/concepts/' },
            { text: '实体', link: '/wiki/entities/' },
            { text: '来源', link: '/wiki/sources/' },
            { text: '项目', link: '/wiki/projects/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
}
