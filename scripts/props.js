/*jshint esversion: 6 */
import { program } from 'commander';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { rmSync, existsSync } from 'fs';
import path from 'path';
import { exec } from 'child_process';
const { glob } = require('glob');
let __pkgPath = '';
program.option('-p, --path', 'Package Path');
const options = program.opts();

program.action(async () => {
	const files = glob.sync('packages/ed-components/**/*[!stories].tsx');

	for (const file of files) {
		const command = 'react-docgen';
		const outputPath = file.split('/');
		const name = outputPath.pop().split('.')[0];
		let _output = outputPath.join('/');
		const args = [`${file}`, `-o ${_output}/${name}.json`];
		const finalCommand = [command, ...args].join('  ');
		console.log(finalCommand);
		const { stderr, stdout } = await exec(finalCommand);
		if (stderr) {
			throw new Error(`'${command}' failed with \n${stderr}`);
		}
	}
});

program.parse(process.argv);
