/**
 * ========================================================
 * FILE: docusaurus.config.js
 * PURPOSE:
 *   Main configuration file for the Bite Sized Docusaurus site.
 *   Sets up site metadata, theme, navbar, footer, presets, 
 *   color mode, and SEO metadata.
 * ========================================================
 */

// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  /* ========================================================
   * 1. SITE METADATA
   * ======================================================== */
  title: 'Bite Sized',
  tagline: 'Open Science Tutorials',
  favicon: 'img/icon.png',
  future: { v4: true },
  url: 'https://bitesized.trr266.de',
  baseUrl: '/',
  organizationName: 'trr266',
  projectName: 'bite-sized-open-science',
  deploymentBranch: 'gh-pages',
  trailingSlash: true,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  /* ========================================================
   * 2. PRESETS
   * ======================================================== */
  presets: [
    [
      'classic',
      {
        docs: {
          id: 'tutorials',
          path: 'docs/tutorials',
          routeBasePath: 'tutorials',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl: undefined,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  /* ========================================================
   * 3. THEME CONFIGURATION
   * ======================================================== */
  themeConfig: {
    image: 'https://bitesized.trr266.de/img/bite-sized-social-card.jpg',

    navbar: {
      title: '',
      logo: {
        alt: 'Bite Sized Logo',
        src: '/img/logo.png',
        href: '/',
      },
      items: [
        { to: '/tutorials', label: 'Tutorials', position: 'left' },
        { label: 'About', to: '/about', position: 'left' },
        { label: 'Contact', to: '/contact', position: 'left' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            { label: 'Home', to: '/' },
            { label: 'Tutorials', to: '/tutorials/' },
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
          ],
        },
        {
          title: 'Partner Websites',
          items: [
            {
              html: `
                <a href="https://www.accounting-for-transparency.de/projects/open-science-data-center/" target="_blank" rel="noopener noreferrer">
                  <img src="/img/institut-icon.png" alt="Our Institute" style="height:20px; vertical-align:middle; margin-right:8px;" />
                  TRR 266 Accounting for Transparency
                </a>
              `,
            },
            {
              html: `
                <a href="https://www.wiwi.hu-berlin.de/de/professuren/bwl/rwuwp" target="_blank" rel="noopener noreferrer">
                  <img src="/img/uni-icon.png" alt="University Department" style="height:20px; vertical-align:middle; margin-right:8px;" />
                  Humboldt University Berlin
                </a>
              `,
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              html: `
                <a href="https://github.com/trr266" target="_blank" rel="noopener noreferrer">
                  <img src="/img/github-icon.png" alt="GitHub" style="height:20px; vertical-align:middle; margin-right:8px;" />
                  GitHub
                </a>
              `,
            },
            {
              html: `
                <a href="https://www.youtube.com/@BiteSizedOpenScienceTutorials" target="_blank" rel="noopener noreferrer">
                  <img src="/img/youtube-icon.png" alt="YouTube" style="height:20px; vertical-align:middle; margin-right:8px;" />
                  YouTube
                </a>
              `,
            },
          ],
        },
      ],
      copyright:
        '© 2025 Bite Sized. Open Science Tutorials. Built by Timnah Weckner and Fabian Kalife.',
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Bite Sized Open Science Tutorials' },
      { name: 'twitter:description', content: 'Concise video tutorials for reproducible research in economics and social sciences.' },
      { name: 'twitter:image', content: 'https://bitesized.trr266.de/img/bite-sized-social-card.jpg' },

      { property: 'og:title', content: 'Bite Sized Open Science Tutorials' },
      { property: 'og:description', content: 'Practical, concise videos to make reproducible research accessible to everyone.' },
      { property: 'og:image', content: 'https://bitesized.trr266.de/img/bite-sized-social-card.jpg' },
    ],
  },
};

export default config;
