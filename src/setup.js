function sendmail(url, title, tab) {
	var mailto = 'mailto:?subject='+encodeURIComponent(title)+'&body='+encodeURIComponent(url);
	chrome.tabs.create({url: mailto, active: false}, function(newTab) {
		// The chrome.tabs.onUpdated event doesn't trigger for mailto: urls poll using timeouts instead!
		var tabExists = function() {
			chrome.tabs.get(newTab.id, function(tab) {
				if (tab.status === "complete") {
					chrome.tabs.remove(newTab.id);
				} else {
					window.setTimeout(tabExists, 25);
				}
			});
		};
		tabExists();
	});
}

chrome.browserAction.onClicked.addListener(function(tab) {
	sendmail(tab.url, tab.title, tab);
});
