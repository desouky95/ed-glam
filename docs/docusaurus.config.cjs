// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'ed-glam',
	tagline: 'Dinosaurs are cool',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'eduact', // Usually your GitHub org/user name.
	projectName: 'ed-glam', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	// themes : ['@docusaurus/theme-live-codeblock'],
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.cjs'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
					routeBasePath: '/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],
	plugins: [
		'@docusaurus/theme-live-codeblock',
		// ['@eduact/ed-components', {}],
		// ['@eduact/utils', {}],
		// ['@eduact/ed-system',{}],
		// ['@eduact/student-theme',{}],
		require.resolve('./sitePlugin'),
		[
			'docusaurus-plugin-react-docgen-typescript',
			{
				src: [
					'../packages/ed-components/src/**',
					'../packages/ed-system/src/Layout/index.ts',
					'!path/to/**/*test.*',
				],
				global: true,
				parserOptions: {
					// pass parserOptions to react-docgen-typescript
					// here is a good starting point which filters out all
					// types from react
					propFilter: (prop, component) => {
						if (prop.parent) {
							return !prop.parent.fileName.includes('@types/react');
						}

						return true;
					},
				},
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig & import('@docusaurus/theme-live-codeblock')} */
		({
			liveCodeBlock: {
				/**
				 * The position of the live playground, above or under the editor
				 * Possible values: "top" | "bottom"
				 */
				playgroundPosition: 'bottom',
			},
			docs: {
				sidebar: {
					hideable: true,
				},
			},
			navbar: {
				title: 'ed-glam',
				logo: {
					alt: 'My Site Logo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Docs',
					},

					{
						href: 'https://github.com/facebook/docusaurus',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			// footer: {
			//   style: 'dark',
			//   links: [
			//     {
			//       title: 'Docs',
			//       items: [
			//         {
			//           label: 'Tutorial',
			//           to: '/docs/intro',
			//         },
			//       ],
			//     },
			//     {
			//       title: 'Community',
			//       items: [
			//         {
			//           label: 'Stack Overflow',
			//           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
			//         },
			//         {
			//           label: 'Discord',
			//           href: 'https://discordapp.com/invite/docusaurus',
			//         },
			//         {
			//           label: 'Twitter',
			//           href: 'https://twitter.com/docusaurus',
			//         },
			//       ],
			//     },
			//     {
			//       title: 'More',
			//       items: [
			//         {
			//           label: 'Blog',
			//           to: '/blog',
			//         },
			//         {
			//           label: 'GitHub',
			//           href: 'https://github.com/facebook/docusaurus',
			//         },
			//       ],
			//     },
			//   ],
			//   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			// },
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
