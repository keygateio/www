import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Keygate",
  description: "Never waste time on auth again",
  themeConfig: {
    siteTitle: 'Keygate',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/keygateio' },
    ],
    editLink: {
      pattern: 'https://github.com/keygateio/www/edit/main/docs/:path'
    },
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
    ],
    sidebar: {
      '/guide/': [
          {
            text: 'Introduction',
            collapsible: true,
            items: [
              { text: 'Getting Started', link: '/guide/getting-started' },
              { text: 'Configuration', link: '/guide/configuration' },
            ]
          }
      ]
    }
    ,
    footer: {
      message: `
        <a href="https://henrygressmann.de/impressum" target="_blank">Impressum/Privacy Policy</a>
      `,
      copyright: 'Copyright © 2022-present Henry Gressmann'
    }
  }
})