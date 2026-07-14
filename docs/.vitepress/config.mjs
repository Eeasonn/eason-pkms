export default {
  title: "Eason's PKMS",
  description: 'Personal Knowledge Management System',
  base: '/eason-pkms/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '目录', link: '/catalog' },
      { text: 'Wiki', link: '/wiki/' },
      { text: '复习', link: '/wiki/review' },
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
            { text: '项目', link: '/wiki/projects/' },
            { text: 'Easy-Vibe 课程', link: '/wiki/projects/easy-vibe/' }
          ]
        }
      ]
    },
    '/catalog/': [
      {
        text: '全量目录',
        items: [
          { text: '全部内容', link: '/catalog' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ]
  }
}
