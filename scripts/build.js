/*jshint esversion: 6 */
const { program } = require("commander");
const webpack = require("webpack");
const { join, parse, resolve } = require("path");
const glob = require("glob");
const { rollup, defineConfig } = require("rollup");
const esbuild = require("rollup-plugin-esbuild");
const dts = require("rollup-plugin-dts");
const typescriptPlugin = require("@rollup/plugin-typescript");
const { fileURLToPath } = require("url");
const typescript = require("rollup-plugin-typescript2");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const { babel } = require("@rollup/plugin-babel");
const cleaner = require("rollup-plugin-cleaner");
const { rmSync, copyFileSync } = require("fs");
const commonjs = require("@rollup/plugin-commonjs");
const external = require("rollup-plugin-peer-deps-external");
const { terser } = require("rollup-plugin-terser");
const copy = require("rollup-plugin-cpy");
const url = require("@rollup/plugin-url");
const gulp = require("gulp");
const assets = require("rollup-plugin-asset");
//
// global.__filename = fileURLToPath(const.meta.url);
// global.__dirname = path.dirname(__filename);

program.option("-p, --path <pathValue>", "Packages Path");
program.option("-wa, --withAssets", "Copy Assets to build", false);

let __pkgPath = "";
let __pkgFiles = [];
const options = program.opts();

const getPkgPath = (args) => join(__dirname, `../packages/${args}`);
const getPkgFiles = () => {
  const pkgFiles = glob.sync(
    "!(build|node_modules|__tests__|stories|.stories)/**/!(*.stories).{ts,js,tsx}".replace(
      /\\/g,
      "/"
    ),
    {
      root: `${__pkgPath.replace(/\\/g, "/")}`,
    }
  );
  const __pkgFiles = pkgFiles.reduce((entries, entry) => {
    const entryParsedFile = parse(entry);
    const splittedPath = entryParsedFile.dir.split("/");
    if (splittedPath.length > 1) {
      splittedPath[splittedPath.length - 2] =
        splittedPath[splittedPath.length - 1];
    }
    const entryName =
      entryParsedFile.dir === "src" || entryParsedFile.dir === "lib"
        ? entryParsedFile.name
        : splittedPath.join("/");
    entries[entryName] = `./${entry}`;
    return entries;
  }, {});
  const __files = pkgFiles.reduce((entries, entry) => {
    const entryParsedFile = parse(entry);
    if (entryParsedFile.dir === "src" || entryParsedFile.dir === "lib") {
      entries[entryParsedFile.name] = entry;
    } else {
      entries[entry] = entry;
    }
    return entries;
  }, {});
  return __files;
};

const webpackComplier = () => {
  webpack(
    {
      context: resolve(__dirname, __pkgPath),
      entry: __pkgFiles,
      output: {
        path: resolve(__pkgPath, "build"),
        filename: (path) => {
          return "[name].js";
        },
        clean: true,
        library: {
          type: "module",
        },
      },
      mode: "production",
      experiments: {
        outputModule: true,
      },
      module: {
        rules: [
          {
            test: /\.(ts|js)$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
            },
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
          },
        ],
      },
      resolve: {
        extensions: [".ts", ".js"],
      },
    },
    (err, result) => {
      if (err || result.hasErrors()) {
        console.dir(err || result.toJson().errors);
      }
    }
  );
};

const rollupCompiler = async (withAssets) => {
  const baseConfig = defineConfig({
    context: resolve(__dirname, __pkgPath),
    input: `./src/index.ts`,
    output: {
      format: "esm",
      extend: true,
      name: "[name].js",
      dir: "build",
      exports: "auto",
      esModule: true,
      preserveModules: true,
      sourcemap: true,
      generatedCode: {
        arrowFunctions: true,
        constBindings: true,
        objectShorthand: true,
      },
      minifyInternalExports: true,
      assetFileNames: "[name]-[hash]",
    },
    shimMissingExports: true,
    treeshake: "recommended",

    plugins: [
      external({ packageJsonPath: `${__pkgPath}/package.json` }),
      typescript({ tsconfig: `${__pkgPath}/tsconfig.json` }),
      // commonjs(),
      babel({
        exclude: [/node_modules/],
        babelHelpers: "bundled",
        configFile: resolve(__dirname, "../.babelrc.js"),
      }),
      url(),
      // copy({
      //   files: ["./src/**/*.ttf"],
      //   dest : './build'
      // }),
      // copy({
      //   assets: withAssets ? ["./src/Assets"] : [],
      // }),
    ],
  });
  const { write } = await rollup(baseConfig);
  await write(baseConfig);
};
program.action(async () => {
  const { path: pkgPath, withAssets } = options;
  if (!pkgPath) throw new Error("Package path is needed");
  __pkgPath = getPkgPath(pkgPath);
  __pkgFiles = getPkgFiles();
  rmSync(`${__pkgPath}/build`, { force: true, recursive: true });
  await rollupCompiler(withAssets);
  // webpackComplier();
  // copyFileSync(`${__pkgPath}/package.json`, `${__pkgPath}/build/package.json`);
});

program.parse(process.argv);
