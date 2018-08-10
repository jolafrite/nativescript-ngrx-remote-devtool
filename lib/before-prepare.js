const disableWs = require('./disable-ws');
const disableRemoteDevUws = require('./disable-remotedev-uws');

module.exports = function (logger, projectData, errors, hookArgs) {
  disableWs(projectData);
  disableRemoteDevUws(projectData);
}
