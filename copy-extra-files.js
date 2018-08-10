const fsExtra = require('fs-extra');
const path = require('path');

const filesToCopy = [
  'lib/before-prepare.js',
  'lib/before-watch.js',
  'lib/disable-remotedev-uws.js',
  'lib/disable-ws.js',
  'lib/postinstall.js',
  'lib/preuninstall.js',
];

filesToCopy.map(file => {
  const source = file.source || file;
  const filename = path.basename(source);
  const destination = file.destination || `dist/${filename}`;

  fsExtra.copySync(source, destination);
});