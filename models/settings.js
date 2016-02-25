var ModelSettings = function ModelSettings() {

  var settings = { //initialise
    'pullRequestBody': Constants.SETTINGS_DEFAULT_AUTOFILL_PR_DESCRIPTION,
    'repoRegExp'     : Constants.SETTINGS_DEFAULT_REPO_REG_EXP,
  };

  var action = {
    'load': function loadSettingsAction() {
      settings = JSON.parse(localStorage.settings);
    },
    'save': function saveSettingsAction() {
      localStorage.settings = JSON.stringify(settings);
    }
  };

  if (localStorage.hasOwnProperty('settings')) {
    action.load();
  }

  return {
    'getSettings': function getSettings() {
      return Object.deepExtend({}, settings);
    },
    'saveOptionSettings': function saveOptionSettings(optionSettings) {
      for (var property in optionSettings) {
        settings[property] = optionSettings[property];
      }
      action.save();
      return {'success': true};
    }
  };
}();

