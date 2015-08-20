var tabId;
var opened = false;

function getHostUrl() {
  return "http://ytinstant.com/#";
}

function getStreamUrl(input) {
  return getHostUrl().concat(input);
}

function postUpdate(input) {
  console.log("Input2 = " + input);
  var streamUrl = getStreamUrl(input);
  if (opened) {
    console.log("Tab already open with ID = " + tabId);
    chrome.tabs.update(tabId, {url: streamUrl});
  } else {
    chrome.tabs.create({ url: streamUrl, selected: false }, function(tab){ 
			tabId = tab.id;
      opened = true;
		});
    console.log("Tab opened with ID = " + tabId);
  }
}

chrome.tabs.onRemoved.addListener(function(id){
  if(id==tabId){
    opened = false;
	}
});