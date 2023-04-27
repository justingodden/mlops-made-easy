// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MLOps Made Easy",
  tagline:
    "Learn to build an end-to-end Machine Learning platform. Powered by Open-Source.",
  favicon: "img/icon.ico",

  // Set the production url of your site here
  url: "https://justingodden.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/mlops-made-easy/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "justingodden", // Usually your GitHub org/user name.
  projectName: "mlops-made-easy", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "MLOps Made Easy",
        logo: {
          alt: "Logo",
          src: "img/machine-learning.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorials",
          },
          { to: "/about", label: "About", position: "left" },
          {
            href: "https://github.com/justingodden/mlops-made-easy",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Tutorials",
                to: "/intro",
              },
              {
                label: "About",
                to: "/about",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Arena ML",
                href: "https://github.com/arenaml",
              },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              // {
              //   label: "Twitter",
              //   href: "https://twitter.com/docusaurus",
              // },
            ],
          },
          {
            title: "Contact",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/justingodden/",
              },
              {
                label: "GitHub",
                href: "https://github.com/justingodden/mlops-made-easy",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Justin Godden`,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // https://prismjs.com/#supported-languages
        additionalLanguages: ["docker", "ignore"],
      },
    }),
};

module.exports = config;
