/*jshint esversion: 6 */

const { program } = require('commander');
const { getPkgPath } = require('../utils/paths');
const { rmdir, rm, readdirSync, rmdirSync, rmSync, existsSync } = require('fs');
const { glob } = require('glob');
const path = require('path');
let __pkgPath = '';
program.option('-p, --path', 'Package Path');
const options = program.opts();

program.action(async () => {
	const { path: pkgPath } = options;
	if (!pkgPath) throw new Error('Package path is needed');
	__pkgPath = getPkgPath(pkgPath);

	if (existsSync(path.resolve(`${__pkgPath}/build`))) {
		rmSync(path.resolve(`${__pkgPath}/build`), {
			force: true,
			recursive: true,
			maxRetries: 2,
		});
	}
});

program.parse(process.argv);
