import { createRequire } from 'module';
import slash from 'slash';
const require = createRequire(import.meta.url);
const resolver = require('babel-plugin-tsconfig-paths-module-resolver');
function customResolvePath(sourceFile, currentFile, opts) {
	let result = resolver.createResolvePath()(sourceFile, currentFile, opts);
	// console.log(result)
	if (result) {
		result = slash(result);
	}

	return result;
}

export default {
	presets: [
		[
			'@babel/preset-env',
			{
				useBuiltIns: 'usage',
			},
		],
		'@babel/preset-react',
		[
			'@babel/preset-typescript',
			{ isTSX: true, allowNamespaces: true, allExtensions: true },
		],
		'@babel/preset-flow',
	],
	plugins: [
		[
			'tsconfig-paths-module-resolver',
			{
				resolvePath: customResolvePath,
			},
		],
		'@babel/plugin-syntax-jsx',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-transform-spread',
		[
			'@babel/plugin-proposal-optional-chaining',
			{
				loose: false,
			},
		],
	],
	assumptions: {
		iterableIsArray: true,
	},
};
