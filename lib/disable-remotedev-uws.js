const path = require('path');
const fs = require('fs');
const pkgUp = require('pkg-up');

module.exports = function (projectData) {
  const packageJson = pkgUp.sync(projectData.projectDir);
  const projectFolder = path.dirname(packageJson);
  const nodeModulesFolder = path.join(projectFolder, "node_modules");

  if (!fs.existsSync(nodeModulesFolder)) {
    return;
  }

  const fileToPatch = path.join(nodeModulesFolder, 'remotedev-server', 'index.js');

  const fileBuffer = fs.readFileSync(fileToPatch);
  const fileContent = fileBuffer.toString();

  const regex = /wsEngine ?: ?["']ws["']/gmi;

  if(fileContent.match(regex) !== null) {
    return;
  }

  const newFileContent = fileContent.replace(`allowClientPublish: false`, 
    `allowClientPublish: false,
    wsEngine: 'ws',`
  )

  fs.writeFileSync(fileToPatch, newFileContent, { encoding: 'utf8' });
}