/* eslint-disable */
const fs = require('fs');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

const UIKitReferencePlugins = require('./plugins/ui-kit-reference-plugin.cjs');
const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const posthogPlugin = require('./plugins/posthog-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');

/** @type {import('@docusaurus/preset-classic').Options} */ defaultSettings = {
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
};

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, version = {}, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars-default.js'),
      breadcrumbs: false,
      editUrl: 'https://github.com/dyte-in/docs/tree/main/',
      versions: version && {
        current: {
          label: version.label,
        },
      },
      ...defaultSettings,
      ...options,
    }),
  ];
}

const latestVersions = {
  'ui-kit': '1.x.x',
  'web-core': '0.38.x',
  'react-native': '0.23.x',
  android: '0.14.x',
  ios: '1.33.x',
  flutter: '0.7.x',
  'android-core': '1.0.0',
  'flutter-core': '1.0.0',
};

const SECTIONS = [
  defineSection('guides'),
  defineSection('cli'),

  defineSection('react', { label: '0.x.x' }),
  defineSection('javascript', { label: '0.x.x' }),

  // [web] ui-sdk
  defineSection('ui-kit', {
    label: latestVersions['ui-kit'],
  }),
  defineSection('react-ui-kit', {
    label: latestVersions['ui-kit'],
  }),
  defineSection('angular-ui-kit', {
    label: latestVersions['ui-kit'],
  }),
  defineSection('vue-ui-kit', {
    label: latestVersions['ui-kit'],
  }),

  // [web] core-sdk
  defineSection('web-core', {
    label: latestVersions['web-core'],
  }),

  // [web] android-core
  defineSection('android-core', {
    label: latestVersions['android-core'],
  }),

  // [web] flutter-core
  defineSection('flutter-core', {
    label: latestVersions['flutter-core'],
  }),

  // [mobile]
  defineSection('rn-core', {
    label: latestVersions['rn-core'],
  }),

  defineSection('react-native', {
    label: latestVersions['react-native'],
  }),
  defineSection('android', {
    label: latestVersions['android'],
  }),
  defineSection('ios', {
    label: latestVersions['ios'],
  }),
  defineSection('flutter', {
    label: latestVersions['flutter'],
  }),
];

const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lead Ride',
  tagline: 'Cycling Together - ready to launch 🚴🏻🚴🏻',
  // TODO: Update base url
  url: 'https://leadride.bike',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.ico',
  trailingSlash: false,
  stylesheets: [
    { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
    { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossOrigin: true },
    {
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap',
      rel: 'stylesheet',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital@1&family=Plus+Jakarta+Sans:wght@400;600;700&family=Rubik:wght@400;600;700&display=swap',
      rel: 'stylesheet',
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nncf', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [require.resolve('./src/client/define-ui-kit.js')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars-home.js'),
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/dyte-in/docs/tree/main/',
          ...defaultSettings,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        googleAnalytics: {
          trackingID: 'UA-173908240-1',
        },
      }),
    ],
  ],

  plugins: [
    tailwindPlugin,
    webpackPlugin,
    posthogPlugin,
    ...SECTIONS,
    ...UIKitReferencePlugins,
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/logo.png',
      metadata: [{name: 'keywords', content: 'leadride, cyclingtogether'}],

      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        // NOTE: hideOnScroll breaks on `/api`, enable when fixed
        // hideOnScroll: true,
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Dyte Docs',
          height: '40px',
          width: '101px',
        },
        items: [
          {
            label: 'Lead Ride Categories',
            type: 'dropdown',
            className: 'dyte-dropdown',
            items: [
              {
                type: 'html',
                value: sdksHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          {
            label: 'Design System',
            to: 'guides',
          },
         
          {
            label: 'Resources',
            type: 'dropdown',
            className: 'dyte-dropdown resources-dropdown',
            items: [
              {
                type: 'html',
                value: resourcesHTML,
                className: 'dyte-dropdown',
              },
            ],
          },
          {
            label: 'Blog',
            to: '/blog',
          },
          {
            label: 'Support',
            to: '/city/contact',
          },
          {
            label : 'Media',
            to: 'media/mediarelease'
          },

          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Book a demo',
            href: '/schedule',
            position: 'right',
            className: 'navbar-book-demo',
          },
          {
            label: 'Sign Up',
            href: '/register',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Dyte Docs',
          height: '36px',
        },
        links: [
         
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                href: 'https://nncf.life',
              },
              {
                label: 'Join Us',
                href: '/jobs',
              },
              {
                label: 'Privacy Policy',
                href: '/privacy-policy',
              },
              {
                label: 'Contact Us',
                href: '/city/contact',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                href: '/guides',
              },
              {
                label: 'Blog',
                href: '/blog',
              } 
            ],
          },
        ],
        copyright: 'Copyright @ NNCF NN Cycle Foundation. All rights reserved.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      algolia: {
        appId: 'HL0HSV62RK',
        apiKey: '72ebf02146698733b7114c7b36da0945',
        indexName: 'docs',
        contextualSearch: true,
        searchParameters: {},
      },
      posthog: {
        apiKey: 'c1X6knGkGuxT4WFysAWi6chjtoMmTzILKO7inv7hIgs',
      },
    }),
};

module.exports = config;
