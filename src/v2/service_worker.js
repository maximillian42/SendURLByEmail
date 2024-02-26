function sendmail(url, title, tab) {
	var mailto = 'mailto:?subject='+encodeURIComponent(title)+'&body='+encodeURIComponent(url);
	chrome.tabs.create({url: mailto, active: false});
}

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
	//console.log('Tab closed: ID=' + tabid)
})
chrome.action.onClicked.addListener(tab => {
	sendmail(tab.url, tab.title, tab);
});
