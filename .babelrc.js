module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react',
		[
			'@babel/preset-typescript',
			{ isTSX: true, allowNamespaces: true, allExtensions: true },
		],
		'@babel/preset-flow',
	],
	plugins: ['tsconfig-paths-module-resolver', '@babel/plugin-syntax-jsx'],
};
