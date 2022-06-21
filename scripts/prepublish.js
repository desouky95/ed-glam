/*jshint esversion: 6 */

const { program } = require("commander");
const { getPkgPath } = require("../utils/paths");
const { rmdir, rm, readdirSync, rmdirSync, rmSync, existsSync } = require("fs");
const { glob } = require("glob");
const path = require("path");
let __pkgPath = "";
program.option("-p, --path", "Package Path");
const options = program.opts();

program.action(async () => {
  const files = glob.sync("packages/**".replace(/\\/g, "/"), {});
  files.forEach((_) => {
    if (existsSync(path.resolve(_) && existsSync(path.resolve(`${_}/build`)))) {
      copyFileSync(`${_}/package.json`, `${_}/build/package.json`);

      //   rmSync(path.resolve(_), { force: true, recursive: true, maxRetries: 1 });
    }
  });
});

program.parse(process.argv);
