if (document.URL.indexOf(URL_COMPARE) >= 0) {
  var pullRequestBody = document.getElementById('pull_request_body');
  if (pullRequestBody.value === "") {
    chrome.runtime.sendMessage({'req': Constants.OPTIONS_LOAD}, function (res) {
      document.getElementById('pull_request_body').value = res.content.pullRequestBody;
    });
  }
}
