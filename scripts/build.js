import childProcess from 'child_process';
import glob from 'fast-glob';
import { createRequire } from 'module';
import path from 'path';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//
const require = createRequire(import.meta.url);
const yargs = require('yargs');
const exec = promisify(childProcess.exec);

const validBundles = [
	// legacy build using ES6 modules
	'legacy',
	// modern build with a rolling target using ES6 modules
	'modern',
	// build for node using commonJS modules
	'node',
	// build with a hardcoded target using ES6 modules
	'stable',
];

async function run(argv) {
	const { bundle, largeFiles, outDir: relativeOutDir, verbose } = argv;
	if (!validBundles.includes(bundle)) {
		throw new TypeError(
			`Unrecognized bundle '${bundle}'. Did you mean one of "${validBundles.join(
				'", "'
			)}"?`
		);
	}

	const env = {
		NODE_ENV: 'production',
		BABEL_ENV: bundle,
	};
	const babelConfigPath = path.resolve(__dirname, '../.babelrc.cjs');
	const srcDir = path.resolve('./src');
	const extensions = ['.js', '.ts', '.tsx'];
	const ignore = [
		'**/*.test.js',
		'**/*.test.ts',
		'**/*.test.tsx',
		'**/*.spec.ts',
		'**/*.spec.tsx',
		'**/*.d.ts',
		'**/*.stories.tsx',
	];

	const topLevelNonIndexFiles = glob
		.sync(`*{${extensions.join(',')}}`, { cwd: srcDir, ignore })
		.filter((file) => {
			return path.basename(file, path.extname(file)) !== 'index';
		});
	const topLevelPathImportsCanBePackages = topLevelNonIndexFiles.length === 0;

	const outDir = path.resolve(
		relativeOutDir,
		{
			node: topLevelPathImportsCanBePackages ? './node' : './',
			modern: './modern',
			stable: topLevelPathImportsCanBePackages ? './' : './esm',
			legacy: '',
		}[bundle]
	);

	const babelArgs = [
		'--config-file',
		babelConfigPath,
		'--extensions',
		`"${extensions.join(',')}"`,
		srcDir,
		'--out-dir',
		outDir,
		'--copy-files',
		'--no-copy-ignored',
		'--ignore',
		// Need to put these patterns in quotes otherwise they might be evaluated by the used terminal.
		`"${ignore.join('","')}"`,
	];

	if (largeFiles) {
		babelArgs.push('--compact false');
	}

	const command = ['npx babel', ...babelArgs].join(' ');
	console.log(command);
	if (verbose) {
		// eslint-disable-next-line no-console
		console.log(`running '${command}' with ${JSON.stringify(env)}`);
	}

	const { stderr, stdout } = await exec(command, {
		env: { ...process.env, ...env },
	});
	if (stderr) {
		throw new Error(`'${command}' failed with \n${stderr}`);
	}
}

yargs
	.command({
		command: '$0 <bundle>',
		description: 'build package',
		builder: (command) => {
			return command
				.positional('bundle', {
					description: `Valid bundles: "${validBundles.join('" | "')}"`,
					type: 'string',
				})
				.option('largeFiles', {
					type: 'boolean',
					default: false,
					describe:
						'Set to `true` if you know you are transpiling large files.',
				})
				.option('out-dir', { default: './build', type: 'string' })
				.option('verbose', { type: 'boolean' });
		},
		handler: run,
	})
	.help()
	.strict(true)
	.version(false)
	.parse();
