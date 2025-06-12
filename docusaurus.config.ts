import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Secure-by-Design Handbook',
  tagline: 'Authoritative standards breakdowns and practical playbooks for building cyber-resilient connected devices',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://www.securebydesignhandbook.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sbd-community', // Usually your GitHub org/user name.
  projectName: 'handbook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sbd-community/handbook/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sbd-community/handbook/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Secure-by-Design Handbook',
      logo: {
        alt: 'Secure-by-Design Handbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Standards',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Playbooks',
        },
        {to: '/blog', label: 'Resources', position: 'left'},
        {
          href: 'https://github.com/sbd-community/handbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Standards',
          items: [
            {
              label: 'Cyber-Resilience Act',
              to: '/docs/standards/cra-overview',
            },
            {
              label: 'NIS 2 Directive',
              to: '/docs/standards/nis2-overview',
            },
            {
              label: 'ETSI EN 303 645',
              to: '/docs/standards/en303645-overview',
            },
          ],
        },
        {
          title: 'Implementation',
          items: [
            {
              label: 'Secure Boot',
              to: '/docs/playbooks/secure-boot',
            },
            {
              label: 'SBOM & VEX',
              to: '/docs/playbooks/sbom-vex',
            },
            {
              label: 'OTA Updates',
              to: '/docs/playbooks/ota-updates',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sbd-community/handbook',
            },
            {
              label: 'Contribute',
              to: '/docs/contribute',
            },
            {
              label: 'Glossary',
              to: '/docs/glossary',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Secure-by-Design Handbook contributors. Licensed under CC BY-SA 4.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
