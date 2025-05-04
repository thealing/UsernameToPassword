chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.local.set({ 
		"passwordLength": 30, 
		"salt": ""
	});
});

chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		func: () => run()
	});
});
