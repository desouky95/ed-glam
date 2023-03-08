/*jshint esversion: 8 */
import { program } from 'commander';
import { createRequire } from 'module';
import { readdirSync, existsSync, copyFileSync } from 'fs';
import path from 'path';
import fse from 'fs-extra';
const require = createRequire(import.meta.url);
const { glob } = require('glob');
let __pkgPath = '';
program.option('-p, --path', 'Package Path');
const options = program.opts();

async function createPackageFile(packagePath, buildFolder) {
	const packageData = await fse.readFile(
		path.resolve(packagePath, './package.json'),
		'utf8'
	);
	const { nyc, scripts, devDependencies, workspaces, ...packageDataOther } =
		JSON.parse(packageData);

	const buildPath = path.join(packagePath, `./${buildFolder}`);

	const newPackageData = {
		...packageDataOther,
		private: false,
		...(packageDataOther.main
			? {
					main: './index.js',
					module: './index.js',
			  }
			: {}),
		types: './index.d.ts',
	};

	const targetPath = path.resolve(buildPath, './package.json');

	await fse.writeFile(
		targetPath,
		JSON.stringify(newPackageData, null, 2),
		'utf8'
	);
	console.log(`Created package.json in ${targetPath}`);

	return newPackageData;
}
program.action(async () => {
	const dirs = readdirSync('./packages', { withFileTypes: true })
		.filter((_) => _.isDirectory())
		.map((_) => path.resolve(`./packages/${_.name}`).replace(/\\/g, '/'));
	for (let index = 0; index < dirs.length; index++) {
		const pathToResolve = dirs[index];
		if (existsSync(pathToResolve) && existsSync(`${pathToResolve}/build`)) {
			await createPackageFile(pathToResolve, 'build');
		}
	}
});

program.parse(process.argv);
