const rollup = require("rollup");
// const css = require("rollup-plugin-css-only");
const { babel } = require("@rollup/plugin-babel");
const { resolve } = require("path");

const gulp = require("gulp");
const rollupBuilder = async () => {
  const config = rollup.defineConfig({
    input: "./src/index.js",
    treeshake: "recommended",
    output: {
      name: "build",
      dir: "build",
      format: "umd",
      preserveModules: true,
      sourcemap: true,
      generatedCode: {
        arrowFunctions: true,
        preset: "es2015",
        constBindings: true,
        objectShorthand: true,
      },
      hoistTransitiveImports: true,
      interop: "auto",
      compact: false,
    },
  });

  const { write } = await rollup.rollup(config);
  await write(config);
};

async function gulpTaskRunner(task) {
  return new Promise(function (resolve, reject) {
    gulp.series(task, (done) => {
      resolve();
      done();
    })();
  });
}

const copyAssets = () => {
  return gulp
    .src(["./src/fonts/**/*.{ttf,css,eot,svg,woff}"], {
      stat: true,
      debug : true,
    })
    .pipe(gulp.dest("./build/fonts"));
};

async function build() {
  await rollupBuilder();
  await gulpTaskRunner(copyAssets);
}

build();
