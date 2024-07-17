chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.local.set({ 
		"passwordLength": 30, 
		"salt": ""
	});
});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id, {
		code: "run();"
	});
});
