// import { createRequire } from 'module';
// import slash from 'slash';
// const require = createRequire(import.meta.url);
// const resolver = require('babel-plugin-tsconfig-paths-module-resolver');
// function customResolvePath(sourceFile, currentFile, opts) {
// 	let result = resolver.createResolvePath()(sourceFile, currentFile, opts);
// 	if (result) {
// 		result = slash(result);
// 	}

// 	return result;
// }

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
