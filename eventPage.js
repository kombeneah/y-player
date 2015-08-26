//var tabId;
//var opened = false;

function getHostUrl() {
  return "http://ytinstant.com/#";
}

function getStreamUrl(input) {
  return getHostUrl().concat(input);
}

function postUpdate(input) {
  
  var streamUrl = getStreamUrl(input);
  var isOpen = false;
  chrome.storage.local.get(null, function (result) {
    isOpen = result.ytTabOpened;
    if (isOpen === true) {
      chrome.tabs.update(result.ytTabId, {url: streamUrl});
    } else {
      chrome.tabs.create({ url: streamUrl, selected: false }, function(tab) {    
		    chrome.storage.local.set({'ytTabId': tab.id});
        chrome.storage.local.set({'ytTabOpened': true});
		  });
 
    }
  });
}

chrome.tabs.onRemoved.addListener(function (id) {
  
  chrome.storage.local.get("ytTabId", function (result) {
    if (id == result.ytTabId) {
      chrome.storage.local.set({'ytTabId': null});
      chrome.storage.local.set({'ytTabOpened': false});
    }
  });
  
});