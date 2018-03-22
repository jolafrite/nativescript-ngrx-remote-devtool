const { spawn } = require('child_process');

module.exports = function (logger, platformsData, projectData, liveSyncService, hookArgs) {
  var liveSync = liveSyncService.$usbLiveSyncService.isInitialized;
  var bundle = projectData.$options.bundle;

  if (liveSync || bundle) {
		logger.warn("Hook skipped because either bundling or livesync is in progress.")
		return;
  }

  spawn('./node_modules/.bin/remotedev', ['--hostname=localhost', '--port=8000'])

  return Promise.resolve();
}
