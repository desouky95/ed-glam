const { program } = require("commander");
const { getPkgPath } = require("../utils/paths");
const { rmdir, rm } = require("fs");
let __pkgPath = "";
program.option("-p, --path", "Package Path");
const options = program.opts();

program.action(async () => {
  const { path: pkgPath } = options;
  if (pkgPath) {
    __pkgPath = getPkgPath(pkgPath);
  }
  rm(`${__pkgPath}/build`, { force: true });
});
