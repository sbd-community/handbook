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
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Source+Code+Pro:wght@500&display=swap',
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Secure-by-Design',
      logo: {
        alt: 'Secure-by-Design Handbook Logo',
        src: 'img/logo.svg',
      },
      style: 'dark',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'quickStartSidebar',
          position: 'left',
          label: 'Quick Start',
        },
        {
          type: 'docSidebar',
          sidebarId: 'standardsSidebar',
          position: 'left',
          label: 'Standards',
        },
        {
          type: 'docSidebar',
          sidebarId: 'implementationSidebar',
          position: 'left',
          label: 'Implementation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'Resources',
        },
        {
          type: 'docSidebar',
          sidebarId: 'toolsSidebar',
          position: 'left',
          label: 'Tools',
        },
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
          title: 'Quick Start',
          items: [
            {
              label: 'How to Use Handbook',
              to: '/docs/quick-start/how-to-use-handbook',
            },
            {
              label: 'What is Secure-by-Design?',
              to: '/docs/quick-start/what-is-secure-by-design',
            },
            {
              label: 'CRA 5-Minute Primer',
              to: '/docs/quick-start/cra-primer',
            },
          ],
        },
        {
          title: 'Implementation',
          items: [
            {
              label: 'Secure Boot',
              to: '/docs/implementation/build-phase/secure-boot',
            },
            {
              label: 'SBOM & VEX',
              to: '/docs/implementation/build-phase/sbom-vex',
            },
            {
              label: 'Vulnerability Disclosure',
              to: '/docs/implementation/operate-phase/vulnerability-disclosure',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Latest News',
              to: '/blog',
            },
            {
              label: 'Contribute',
              href: 'https://github.com/sbd-community/handbook/blob/main/CONTRIBUTING.md',
            },
            {
              label: 'Glossary',
              to: '/docs/resources/reference/glossary',
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
