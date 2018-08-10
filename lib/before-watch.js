const disableWs = require('./disable-ws');
const disableRemoteDevUws = require('./disable-remotedev-uws');

module.exports = function (logger, platformsData, projectData, hookArgs) {
  disableWs(projectData);
  disableRemoteDevUws(projectData);
}
