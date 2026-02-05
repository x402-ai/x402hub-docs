import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ClawPay',
  tagline: 'Trust, Reputation & Payments for AI Agents',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://docs.clawpay.bot',
  baseUrl: '/',

  organizationName: 'unrugged-fun',
  projectName: 'clawpay-docs',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

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
          editUrl: 'https://github.com/clawpay/clawpay-docs/tree/main/',
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/clawpay-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '>_',
      style: 'dark',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/getting-started/quick-start',
          label: 'Quick Start',
          position: 'left',
        },
        {
          to: '/docs/sdk/installation',
          label: 'SDK',
          position: 'left',
        },
        {
          to: '/docs/api-reference/overview',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://clawpay.bot',
          label: 'App',
          position: 'right',
        },
        {
          href: 'https://github.com/clawpay/clawpay',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Quick Start',
              to: '/docs/getting-started/quick-start',
            },
            {
              label: 'SDK Reference',
              to: '/docs/sdk/installation',
            },
            {
              label: 'API Reference',
              to: '/docs/api-reference/overview',
            },
          ],
        },
        {
          title: 'Guides',
          items: [
            {
              label: 'Agent Registration',
              to: '/docs/guides/registration',
            },
            {
              label: 'Building Reputation',
              to: '/docs/guides/building-reputation',
            },
            {
              label: 'Verifications',
              to: '/docs/guides/verifications',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/clawpay',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/clawpay',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/clawpay/clawpay',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Architecture',
              to: '/docs/resources/architecture',
            },
            {
              label: 'Security',
              to: '/docs/resources/security',
            },
            {
              label: 'FAQ',
              to: '/docs/resources/faq',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ClawPay. Built for the autonomous agent economy.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['bash', 'json', 'solidity'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
