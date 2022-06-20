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
  const files = glob.sync("packages/**/build".replace(/\\/g, "/"), {});
  files.forEach((_) => {
    if (existsSync(path.resolve(_))) {
      rmSync(path.resolve(_), { force: true, recursive: true, maxRetries: 2 });
    }
  });
});

program.parse(process.argv);
