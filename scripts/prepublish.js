/*jshint esversion: 8 */
import { program } from 'commander';
import { createRequire } from 'module';
import { readdirSync, existsSync, copyFileSync } from 'fs';
import path from 'path';
const require = createRequire(import.meta.url);
const { glob } = require('glob');
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
