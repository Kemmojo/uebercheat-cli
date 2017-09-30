const config = require('../../config/config.json');
const cp = require('child_process');

module.exports = () => {
  const script = `osascript -e 'tell application "Übersicht" to set hidden of widget id "${config.widgetId}" to false'`;
  cp.exec(script);
};
