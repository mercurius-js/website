import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Mercurius",
  tagline: "Mercurius is a GraphQL adapter for Fastify",
  favicon: "favicon.ico",

  // Set the production url of your site here
  url: "https://mercurius.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mercurius-js", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  // onBrokenLinks: "warn",
  // onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: (editPage) => {
            return `https://github.com/mercurius-js/mercurius/edit/main/docs/${editPage.docPath}`;
          }
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],
  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        // Optional: Specify options here
        languages: ["en"] // Array of languages, default is ['en']
      }
    ]
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: "Mercurius Logo",
        src: "images/mercurius-logo.svg",
        srcDark: "images/mercurius-logo.svg"
      },
      items: [
        { to: "/", label: "Home", position: "left" },
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          label: "Docs",
          position: "left"
        },
        {
          to: "/contribute",
          label: "Contribute",
          position: "left"
        },
        {
          type: "docsVersionDropdown",
          position: "right"
        },
        {
          href: "https://github.com/mercurius-js/mercurius",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/next/guides/getting-started"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/mercurius"
            },
            {
              label: "Discussions",
              href: "https://github.com/mercurius-js/mercurius/discussions"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/mercurius-js/mercurius"
            }
          ]
        }
      ],
      copyright: `Mercurius, Copyright © 2018-${new Date().getFullYear()}, Licensed under <a href="https://github.com/mercurius-js/mercurius/blob/master/LICENSE">MIT</a>`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oceanicNext
    }
  } satisfies Preset.ThemeConfig
};

export default config;
