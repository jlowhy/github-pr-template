// Global Variables
// ModelSettings

var Background = function Background() {
  chrome.runtime.onMessage.addListener(function (req, sender, sendResponse) {
    var res = {
      'success': true, //Set true by default
      'error': false
    };
    switch (req.req) {
      case Constants.OPTIONS_LOAD:
        res.content = ModelSettings.getSettings();
        break;
      case Constants.OPTIONS_SAVE:
        if (req.hasOwnProperty('settings')) {
          res.success = ModelSettings.saveOptionSettings(req.settings);
        }
        else {
          res.success = {'success': false};
          res.error = "Request sent from options.js has no \'settings\' property";
        }
        break;
    }
    return sendResponse(res);
  });
}();
