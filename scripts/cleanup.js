/*jshint esversion: 6 */
import { program } from 'commander';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { rmSync, existsSync } from 'fs';
import path from 'path';
const { glob } = require('glob');
let __pkgPath = '';
program.option('-p, --path', 'Package Path');
const options = program.opts();

program.action(async () => {
	const files = glob.sync('packages/**/build'.replace(/\\/g, '/'), {});
	files.forEach((_) => {
		if (existsSync(path.resolve(_))) {
			rmSync(path.resolve(_), { force: true, recursive: true, maxRetries: 1 });
		}
	});
});

program.parse(process.argv);
