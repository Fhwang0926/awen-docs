/**
 * awen-web 프론트엔드 매뉴 구조에 맞춘 사이드바
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: '📘 개발자 문서',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: '개발자 문서',
        description: 'API, 배포, 연동 방법을 안내합니다.',
      },
      items: [
        'getting-started/quick-start',
        'developer/quickstart',
        'developer/api',
        'developer/deploy',
      ],
    },
    {
      type: 'category',
      label: '👤 사용자 매뉴얼',
      link: {
        type: 'generated-index',
        title: '사용자 매뉴얼',
        description: '화면별 사용 방법을 안내합니다.',
      },
      items: [
        'user/dashboard',
        'user/hosting',
        'user/ai-features',
        'user/ai-assistant',
        'user/billing',
        'user/tool',
        'user/cs',
        'user/account',
      ],
    },
    {
      type: 'category',
      label: '📌 참고',
      items: [
        'reference/faq',
        'reference/changelog',
      ],
    },
  ],
};

export default sidebars;
