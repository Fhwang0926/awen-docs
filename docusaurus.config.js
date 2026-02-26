// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config
// 클라우드/서비스명: awen-web frontend의 VITE_APP_TITLE과 맞추려면 빌드 시 SITE_TITLE 또는 VITE_APP_TITLE 환경 변수 설정

const siteTitle = process.env.SITE_TITLE || process.env.VITE_APP_TITLE || '문서';
const baseUrl = process.env.BASE_URL ?? '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${siteTitle} 매뉴얼`,
  tagline: '제품 사용 설명서',
  favicon: 'img/favicon.ico',

  url: process.env.DOCS_SITE_URL || 'https://your-docs-site.com',
  baseUrl,

  organizationName: 'awen',
  projectName: 'awen-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: {
        label: '한국어',
        htmlLang: 'ko',
      },
      en: {
        label: 'English',
        htmlLang: 'en',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: `${siteTitle} 매뉴얼`,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: '문서',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '문서',
            items: [
              {
                label: '시작하기',
                to: '/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${siteTitle}.`,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
