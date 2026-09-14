const fs = require("fs");
const yaml = require("js-yaml");
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)


// Reverse sidebar items recursively, but keep index at top
function reverseSidebar(items) {
  const isIndex = (item) => item.type === 'doc' && item.id === 'index';
  const indexItems = items.filter(isIndex);
  const otherItems = items.filter((item) => !isIndex(item));
  
  const reversedOthers = otherItems.map((item) => {
    if (item.type === 'category') {
      return {...item, items: reverseSidebar(item.items)};
    }
    return item;
  });
  reversedOthers.reverse();
  return [...indexItems, ...reversedOthers];
}

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
      '@docusaurus/plugin-content-docs',
      {
        id: 'botc-logs',
        path: 'botc-logs',
        routeBasePath: 'botc-logs',
        sidebarPath: './sidebarsBotcLogs.js',
        async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return reverseSidebar(sidebarItems);
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'avalon-logs',
        path: 'avalon-logs',
        routeBasePath: 'avalon-logs',
        sidebarPath: './sidebarsAvalonLogs.js',
        async sidebarItemsGenerator({defaultSidebarItemsGenerator, ...args}) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return reverseSidebar(sidebarItems);
        },
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
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Logo',
          src: 'img/favicon.svg',
        },
        items: [
          ...yaml.load(fs.readFileSync('./config/navbar.yml', 'utf8')).map(item => ({...item, position: 'left'})),
          {
            href: 'https://github.com/singwithgame/singwithgame.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
