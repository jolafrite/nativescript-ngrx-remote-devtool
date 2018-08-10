const path = require('path');
const fs = require('fs');
const pkgUp = require('pkg-up');
const replaceInFile = require('replace-in-file');

module.exports = function (projectData) {
  const packageJson = pkgUp.sync(projectData.projectDir);
  const projectFolder = path.dirname(packageJson);
  const nodeModulesFolder = path.join(projectFolder, "node_modules");

  if (!fs.existsSync(nodeModulesFolder)) {
    return;
  }

  const filesToPatch = [
    path.join(nodeModulesFolder, 'socketcluster-client', 'lib', 'sctransport.js'),
  ];

  changeFiles(
    filesToPatch,
    new RegExp("require\\('ws'\\);", 'gm'),
    'undefined;'
  );
}

function changeFiles(files, replace, by) {
  return replaceInFile.sync({
    files: files,
    from: replace,
    to: by,
    allowEmptyPaths: true
  });
}