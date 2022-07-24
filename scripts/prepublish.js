/*jshint esversion: 8 */

const { program } = require('commander');
const { getPkgPath } = require('../utils/paths');
const {
	rmdir,
	rm,
	readdirSync,
	rmdirSync,
	rmSync,
	existsSync,
	copyFileSync,
} = require('fs');
const { glob } = require('glob');
const path = require('path');
let __pkgPath = '';
program.option('-p, --path', 'Package Path');
const options = program.opts();

program.action(async () => {
	const dirs = readdirSync('./packages', { withFileTypes: true })
		.filter((_) => _.isDirectory())
		.map((_) => path.resolve(`./packages/${_.name}`).replace(/\\/g, '/'));
	dirs.forEach((pathToResolve) => {
		if (existsSync(pathToResolve) && existsSync(`${pathToResolve}/build`)) {
			copyFileSync(
				`${pathToResolve}/package.json`,
				`${pathToResolve}/build/package.json`
			);
		}
	});
});

program.parse(process.argv);
