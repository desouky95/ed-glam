/*jshint esversion: 8 */
import { program } from 'commander';
const { program } = require('commander');
import { readdirSync, existsSync, copyFileSync } from 'fs';
import { glob } from 'glob';
import path from 'path';
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
