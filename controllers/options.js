var Options = function Options() {

  var action = {
    'restoreOptions': function loadOptions() {
      chrome.runtime.sendMessage({'req': Constants.OPTIONS_LOAD}, function(res) {
        var settings = res.content;
        var pullRequestBody = document.getElementById('pull-request-body');
        pullRequestBody.value = settings.pullRequestBody;
      });
    },

    'saveOptions': function saveOptions() {
      console.log('to save');
      var settings = {};
      settings.pullRequestBody = document.getElementById('pull-request-body').value;
      var req = {
        'req': Constants.OPTIONS_SAVE,
        'settings': settings
      };

      chrome.runtime.sendMessage(req, function(res) {
        var status = document.getElementById("status");
        status.innerHTML = "<div class='alert alert-success'>Options Saved!</div>";
        setTimeout(function() {
          status.innerHTML = "";
        }, 750);
      });
    }
  };

  document.addEventListener('DOMContentLoaded', action.restoreOptions);
  document.querySelector('#save').addEventListener('click', action.saveOptions);

}();
