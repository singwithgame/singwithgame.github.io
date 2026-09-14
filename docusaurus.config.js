// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Keep on Boardgaming',
  tagline: '보드게임 모임 포털',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://singwithgame.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'singwithgame', // Usually your GitHub org/user name.
  projectName: 'singwithgame.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'botc-logs',
        routeBasePath: 'botc-logs',
        path: './botc-logs',
        blogTitle: 'BotC Logs',
        blogSidebarTitle: '최근 기록',
        blogSidebarCount: 'ALL',
        showReadingTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'avalon-logs',
        routeBasePath: 'avalon-logs',
        path: './avalon-logs',
        blogTitle: 'Avalon Logs',
        blogSidebarTitle: '최근 기록',
        blogSidebarCount: 'ALL',
        showReadingTime: false,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Logo',
          src: 'img/favicon.svg',
        },
        items: [
          {to: '/docs/botc/intro', label: 'Guides', position: 'left'},
          {to: '/botc-logs', label: 'BotC Logs', position: 'left'},
          {to: '/avalon-logs', label: 'Avalon Logs', position: 'left'},
        ],
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
