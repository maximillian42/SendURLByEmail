// function sendmail(url, title, tab) {
// 	var mailto = 'mailto:?subject='+encodeURIComponent(title)+'&body='+encodeURIComponent(url);
// 	chrome.tabs.create({url: mailto, active: false});
// }

// chrome.tabs.onRemoved.addListener(function(tabid, removed) {
// 	//console.log('Tab closed: ID=' + tabid)
// })
// chrome.action.onClicked.addListener(tab => {
// 	sendmail(tab.url, tab.title, tab);
// });

getEmails(function(emailList) {
    let dropdown = document.getElementById("emailDropdown");
    emailList.forEach(email => {
        let option = document.createElement("option");
        option.value = email;
        option.textContent = email;
        dropdown.appendChild(option);
    });
});

document.getElementById("sendEmail").addEventListener("click", function() {
    let selectedEmail = document.getElementById("emailDropdown").value;
    let url = encodeURIComponent(window.location.href);
    window.open(`mailto:${selectedEmail}?subject=Sharing a Link&body=${url}`);
});

