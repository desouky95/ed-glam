const path = require('path');
const { getLoader, loaderByName } = require('@craco/craco');
const babelInclude = require('@dealmore/craco-plugin-babel-include');

const packages = [];

packages.push(path.join(__dirname, '../utils'));
packages.push(path.join(__dirname, '../ed-student-theme'));
packages.push(path.join(__dirname, '../ed-system'));
packages.push(path.join(__dirname, '../ed-components'));

module.exports = {
	webpack: {
		configure: (webpackConfig, { env, paths }) => {
			const { isFound, match } = getLoader(
				webpackConfig,
				loaderByName('babel-loader')
			);
			if (isFound) {
				const include = Array.isArray(match.loader.include)
					? match.loader.include
					: [match.loader.include];
				match.loader.include = include.concat(packages);
			}
			return { ...webpackConfig };
		},
	},
	babel: {
		presets: [
			'@babel/preset-env',
			'@babel/preset-react',
			[
				'@babel/preset-typescript',
				{ isTSX: true, allowNamespaces: true, allExtensions: true },
			],

			'@babel/preset-flow',
		],
	},
	plugins: [
		{
			plugin: babelInclude,
			options: {
				include: [
					'../ed-components/src',
					'../ed-system/src',
					'../utils/src',
					'../ed-student-theme/src',
				],
			},
		},
	],
};
