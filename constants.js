var Constants = function Constants() {
  return {
    'OPTIONS_SAVE': 'saveOptions',
    'OPTIONS_LOAD': 'loadOptions',
    'SETTINGS_DEFAULT_REPO_REG_EXP': '.*',
    'SETTINGS_DEFAULT_AUTOFILL_PR_DESCRIPTION':
        "REFERENCE_URL\n\n" +
        "## Why is this change necessary?\n\n" +
        "## How does it address the issue?\n\n" +
        "## What side effects does this change have?\n\n" +
        "## How it was tested?\n\n" +
        "## Deployment (optional)\n\n"
  };
}();

var URL_COMPARE = '/compare/';
