const cp = require('child_process');

module.exports = () => {
  const script = 'osascript -e \'tell application "Übersicht" to refresh\'';
  cp.exec(script);
};
