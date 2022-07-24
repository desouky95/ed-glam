/*jshint esversion: 6 */

const { join } = require('path');
const { fileURLToPath } = require('url');
const glob = require('glob');

const getPkgPath = (args) => join(__dirname, `../packages/${args}`);
const getPkgFiles = (__pkgPath) => {
	const pkgFiles = glob.sync(
		'!(build|node_modules)/**/*.{ts,js}'.replace(/\\/g, '/'),
		{
			root: `${__pkgPath.replace(/\\/g, '/')}`,
		}
	);
	const __pkgFiles = pkgFiles.reduce((entries, entry) => {
		const entryParsedFile = parse(entry);
		const splittedPath = entryParsedFile.dir.split('/');
		if (splittedPath.length > 1) {
			splittedPath[splittedPath.length - 2] =
				splittedPath[splittedPath.length - 1];
		}
		const entryName =
			entryParsedFile.dir === 'src'
				? entryParsedFile.name
				: splittedPath.join('/');
		entries[entryName] = `./${entry}`;
		return entries;
	}, {});
	const __files = pkgFiles.reduce((entries, entry) => {
		const entryParsedFile = parse(entry);
		if (entryParsedFile.dir === 'src') {
			entries[entryParsedFile.name] = entry;
		} else {
			entries[entry] = entry;
		}
		return entries;
	}, {});
	console.dir(__files);
	return __pkgFiles;
};

module.exports = { getPkgFiles, getPkgPath };
