import { program } from "commander";
import path from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";
import NodeExternals from "webpack-node-externals";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ResolveTypescriptPlugin from "resolve-typescript-plugin";
import { rollup } from "rollup";

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import json from "@rollup/plugin-json";

//
global.__filename = fileURLToPath(import.meta.url);
global.__dirname = path.dirname(__filename);
program
  .option("-p , --path <aValue>", "option")
  .option("-m , --mode <bValue>", "mode");
const _options = program.opts();

const webpackAction = (str, options) => {
  const { path: pkgPath } = _options;
  if (path) {
    // const pkg = import(`./packages/${pkgPath}/package.json`);
    const _path = path.resolve(`${__dirname}/packages/${pkgPath}`, "dist");
    const config = webpack({
      context: path.resolve(`${__dirname}/packages/${pkgPath}`, ""),
      mode: "production",
      entry: { lib: `./src/index.js`, "lib.min": "./src/index.ts" },
      experiments: {
        outputModule: true,
        backCompat: true,
      },
      output: {
        path: path.resolve(`${__dirname}/packages/${pkgPath}`, "build"),
        filename: "[name].bundle.js",
        publicPath: "./",
        libraryTarget: "umd",
        umdNamedDefine: true,
        library: {
          export: "default",

          type: "umd",
        },
        globalObject: "this",
        clean: true,
      },
      module: {
        rules: [
          {
            test: /\.(ts)x$/,
            loader: "ts-loader",
            exclude: /node_modules/,
          },
          {
            test: /\.(js|ts)x?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options: {
              presets: [
                "@babel/preset-flow",
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      resolve: {
        plugins: [new ResolveTypescriptPlugin({ includeNodeModules: false })],
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
          "@ed-glam/admin-theme": path.resolve(
            __dirname,
            "./packages/ed-admin-theme/src"
          ),
        },
      },
      externals: [new NodeExternals({})],
      plugins: [
        new CleanWebpackPlugin(),
        new webpack.optimize.AggressiveSplittingPlugin({}),
      ],
      devtool: "source-map",
      externalsType: "module",
      performance: { hints: "warning" },
      optimization: {
        minimize: false,
        chunkIds: "named",
        // runtimeChunk: true,
        splitChunks: {
          chunks: "all",
          maxInitialRequests: Infinity,
          maxAsyncRequests: Infinity,
          enforceSizeThreshold: Infinity,
          minSize: 0,
          hidePathInfo: false,
        },
      },
    }).run((err, result) => {
      if (err || result.hasErrors()) console.dir(result.toJson({}).errors);
    });
  }
};
const rollupAction = async (pkgPath) => {
  // console.log(pkg.main);
  rollup({
    context: path.resolve(`${__dirname}/packages/${pkgPath}`, ""),

    input: { lib: `./src/index.ts`, "lib.min": "./src/index.ts" },
    output: [
      {
        file: "[name].bundle.js",
        format: "cjs",
        sourcemap: true,
        name: "react-lib",
      },
      {
        file: "[name].module.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      json(),
    ],
  })
    .then((build) => {
      console.dir(build);
    })
    .catch((err) => console.dir(err));
};
program.action(async (str, options) => {
  const { path: pkgPath } = _options;
  // rollupAction(pkgPath);
  webpackAction(str, options);
});
program.parse(process.argv);
