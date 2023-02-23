// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

module.exports = {
  title: 'robotics',
  tagline: '',
  url: 'https://ryanlei2.github.io',
  baseUrl: '/robotics/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://i.imgur.com/gKs8Jhn.png',
  deploymentBranch: "gh-pages",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ryanlei2', // Usually your GitHub org/user name.
  projectName: 'robotics', // Usually your repo name.

    themeConfig:
    ({
      announcementBar: {
        id: 'support_us',
        content:
          'Looking to support our cause? We&apos;d appreciate it if you donated <a target="_blank" href="https://google.com">here</a>',
        backgroundColor: '#2e8555',
        textColor: '#ffffff',
        isCloseable: false,
      },
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'https://i.imgur.com/gKs8Jhn.png', //use i.imgur.com/xxx.png to point directly to the image
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Introduction',
          },
          //Uncomment this to see the Blog button on nav
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ryanlei2/robotics',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      docs: {
        sidebar: {
          hideable: true,
        },
      },

      colorMode: {
        defaultMode: "dark",
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'FTC Discord',
                href: 'https://discord.gg/first-tech-challenge',
              },
            ],
          },
          {
            title: 'More',
            items: [
              //uncomment this to reveal blog button on bottom
              // {
              //   label: 'School',
              //   to: '/blog',
              // },
              //https://discord.gg/2g3avQBgwz
              {
                  label: 'School',
                  href: 'https://discord.gg/2g3avQBgwz',
                },
              {
                label: 'GitHub',
                href: 'https://github.com/ryanlei2',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RHS Robotics, Inc.`,
      },
    }),
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/ryanlei2/robotics/blob/main',
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl:
              'https://github.com/ryanlei2/robotics',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
};