function getRepoFromURL(){
    var repoMatch = document.URL.match(/https:\/\/github.com\/(.*?\/.*?\/)/);
    return repoMatch ? repoMatch[1]: "";
}

if (document.URL.indexOf(URL_COMPARE) >= 0) {
  var pullRequestBody = document.getElementById('pull_request_body');
  if (pullRequestBody.value === "") {
    chrome.runtime.sendMessage({'req': Constants.OPTIONS_LOAD}, function (res) {
      if (null != getRepoFromURL().match(res.content.repoRegExp)) {
          document.getElementById('pull_request_body').value = res.content.pullRequestBody;
      }
    });
  }
}
